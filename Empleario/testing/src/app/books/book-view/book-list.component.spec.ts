import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookViewComponent } from './book-view.component';
import { BookService } from '../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IBook } from '../book.model';
import dayjs from 'dayjs';

describe('BookViewComponent', () => {
  let component: BookViewComponent;
  let fixture: ComponentFixture<BookViewComponent>;
  let mockService: jasmine.SpyObj<BookService>;
  let mockRoute: any;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<any>>;

  const mockBook: IBook = {
    id: 1,
    title: 'Angular View',
    author: 'Gustavo',
    released: dayjs('2023-01-01')
  };

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('BookService', ['findById']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    mockRoute = {
      paramMap: of({
        get: (key: string) => '1' // simula que el parámetro id = '1'
      })
    };

    await TestBed.configureTestingModule({
      declarations: [BookViewComponent],
      providers: [
        { provide: BookService, useValue: mockService },
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: Router, useValue: mockRouter },
        { provide: MatDialog, useValue: mockDialog }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookViewComponent);
    component = fixture.componentInstance;
  });

  it('debería cargar el libro al inicializar con ID válido', () => {
    mockService.findById.and.returnValue(of(new HttpResponse({ body: mockBook })));

    fixture.detectChanges(); // Llama a ngOnInit

    expect(mockService.findById).toHaveBeenCalledWith(1);
    expect(component.book?.title).toBe('Angular View');
  });

  it('debería mostrar error si findById devuelve null', () => {
    mockService.findById.and.returnValue(of(new HttpResponse<IBook>({ body: null })));

    fixture.detectChanges();

    expect(component.book).toBeUndefined();
    expect(component.error).toBe('Book not found');
  });

  it('debería mostrar error si findById lanza error', () => {
    mockService.findById.and.returnValue(throwError(() => new Error('Falla')));

    fixture.detectChanges();

    expect(component.book).toBeUndefined();
    expect(component.error).toBe('Error fetching book');
  });

  it('debería abrir el diálogo de eliminación y navegar si se confirma', () => {
    mockDialog.open.and.returnValue(mockDialogRef);
    mockDialogRef.afterClosed.and.returnValue(of(true));

    component.book = mockBook;
    component.onDelete(mockBook);

    expect(mockDialog.open).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/books']);
  });

  it('no debería navegar si el diálogo se cancela', () => {
    mockDialog.open.and.returnValue(mockDialogRef);
    mockDialogRef.afterClosed.and.returnValue(of(false));

    component.book = mockBook;
    component.onDelete(mockBook);

    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
