import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { BookService } from '../service/book.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';
import { IBook } from '../book.model';
import dayjs from 'dayjs';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  const mockBook: IBook = {
    id: 1,
    title: 'Angular Testing',
    author: 'Gustavo',
    released: dayjs('2023-01-01')
  };

  beforeEach(async () => {
    mockBookService = jasmine.createSpyObj('BookService', ['findAll', 'deleteById']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [
        { provide: BookService, useValue: mockBookService },
        { provide: Router, useValue: mockRouter },
        { provide: MatSnackBar, useValue: mockSnackBar }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
  });

  it('debería cargar libros al inicializar', () => {
    mockBookService.findAll.and.returnValue(of(new HttpResponse({ body: [mockBook] })));

    fixture.detectChanges(); // Triggers ngOnInit

    expect(mockBookService.findAll).toHaveBeenCalled();
    expect(component.dataSource.length).toBe(1);
    expect(component.dataSource[0].title).toBe('Angular Testing');
  });

  it('debería navegar al editar un libro', () => {
    component.onEdit(mockBook);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/books', 1, 'edit']);
  });

  it('debería eliminar libro y recargar lista si status es 204', fakeAsync(() => {
    mockBookService.deleteById.and.returnValue(of(new HttpResponse<{}>({ status: 204 })));
    mockBookService.findAll.and.returnValue(of(new HttpResponse({ body: [] })));

    fixture.detectChanges(); // ngOnInit

    component.onDelete(mockBook);
    tick();

    expect(mockBookService.deleteById).toHaveBeenCalledWith(1);
    expect(mockBookService.findAll).toHaveBeenCalledTimes(2); // una vez en ngOnInit + otra tras eliminar

    flush();
  }));

  it('debería mostrar error si deleteById devuelve error', () => {
    mockBookService.deleteById.and.returnValue(throwError(() => new Error('Falló')));

    component.onDelete(mockBook);

    expect(mockSnackBar.open).toHaveBeenCalledWith('Error deleting books', 'Close');
  });

  it('debería mostrar error al fallar fetchBooks()', () => {
    mockBookService.findAll.and.returnValue(throwError(() => new Error('Falló al cargar')));

    fixture.detectChanges();

    expect(mockSnackBar.open).toHaveBeenCalledWith('Error fetching books', 'Close');
  });
});
