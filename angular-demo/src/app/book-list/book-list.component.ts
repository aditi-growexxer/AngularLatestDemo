import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books = [];
  newBook = { title: '', author: '', price: null };
  editBookId = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data) => (this.books = data));
  }

  addBook() {
    this.bookService.addBook(this.newBook).subscribe((res) => {
      this.newBook['id'] = res.id;
      this.books.push(this.newBook);
      this.newBook = { title: '', author: '', price: null };
    });
  }

  editBook(book) {
    this.editBookId = book.id;
    this.newBook = { ...book };
  }

  updateBook() {
    this.bookService.updateBook(this.newBook).subscribe((res) => {
      this.loadBooks();
      this.newBook = { title: '', author: '', price: null };
      this.editBookId = null;
    });
  }

  deleteBook(id) {
    this.bookService.deleteBook(id).subscribe((res) => {
      this.loadBooks();
    });
  }
}
