import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';
import { IBook, NewBook } from '../book.model';
import dayjs from 'dayjs';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  const sampleBook: IBook = {
    id: 1,
    title: 'Angular',
    author: 'Gustavo',
    released: dayjs('2023-01-01')
  };
dayjs
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('debería crear un nuevo libro', () => {
    const newBook: NewBook = {
      id: null,
      title: 'Nuevo Libro',
      author: 'Gustavo',
      released: dayjs('2025-07-04')
    };

    service.create(newBook).subscribe(resp => {
      expect(resp.body?.title).toBe('Nuevo Libro');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/books');
    expect(req.request.method).toBe('POST');
    expect(req.request.body.released).toBe('2025-07-04');

    req.flush({ ...newBook, released: dayjs('2025-07-04') });
  });

 it('debería recuperar un libro por ID', () => {
    service.findById(1).subscribe(resp => {
      const book = resp.body!;
      expect(book.id).toBe(1);
      expect(book.title).toBe('Angular');
      expect(book.released?.isSame(dayjs('2025-07-04'), 'day')).toBeTrue();
    });


    const req = httpMock.expectOne('http://localhost:8080/api/books/1');
    expect(req.request.method).toBe('GET');

    req.flush({ ...sampleBook, released: '2025-07-04' });
  });

  it('debería eliminar un libro', () => {
    service.deleteById(1).subscribe(resp => {
      expect(resp.status).toBe(200);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/books/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({}, { status: 200, statusText: 'OK' });
  });

  it('debería actualizar un libro', () => {
    service.update(sampleBook).subscribe(resp => {
      expect(resp.body?.title).toBe('Angular');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/books');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.released).toBe('2023-01-01');

    req.flush({ ...sampleBook, released: '2023-01-01' });
  });

  it('debería buscar por autor', () => {
    service.findAllByAuthor('Gustavo').subscribe(resp => {
      expect(resp.body?.length).toBe(1);
      expect(resp.body?.[0].author).toBe('Gustavo');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/books/author/Gustavo');
    expect(req.request.method).toBe('GET');
    req.flush([{ ...sampleBook, released: '2023-01-01' }]);
  });
});
