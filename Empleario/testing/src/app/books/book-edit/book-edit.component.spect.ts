import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookEditComponent } from './book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../service/book.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let mockBookService: any;

  beforeEach(async () => {
    mockBookService = jasmine.createSpyObj('BookService', ['findById', 'update', 'create']);

    await TestBed.configureTestingModule({
      declarations: [BookEditComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: BookService, useValue: mockBookService },
        { provide: ActivatedRoute, useValue: { paramMap: of({ get: () => null }) } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario es inválido si los campos requeridos están vacíos', () => {
    component.editForm.patchValue({
      title: '',
      author: '',
      year: '',
      isPublished: '',
      released: ''
    });
    expect(component.editForm.invalid).toBeTrue();
  });

  it('debería llamar a BookService.create al guardar un libro nuevo', () => {
    component.editForm.patchValue({
      title: 'Libro de prueba',
      author: 'Autor',
      year: "2020",
      isPublished: 'true',
      released: '2022-01-01'
    });
    mockBookService.create.and.returnValue(of({ body: { id: 1 } }));
    component.save();
    expect(mockBookService.create).toHaveBeenCalled();
  });

  it('debería llamar a BookService.update al guardar un libro existente', () => {
    component.editForm.patchValue({
      id: "1",
      title: 'Libro de prueba',
      author: 'Autor',
      year: "2020",
      isPublished: 'true',
      released: '2022-01-01'
    });
    mockBookService.update.and.returnValue(of({ body: { id: 1 } }));
    component.save();
    expect(mockBookService.update).toHaveBeenCalled();
  });
});
