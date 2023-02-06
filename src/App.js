import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DailyRoutin from './components/DailyRoutin'
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, getAllBooks2, createBook } from './services/BookService';
import Footer from './components/Footer';

function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [books2, setBooks2] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const handleSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setBooks2([]);
        setNumberBooks(data.length);
      });
  }

  const getAllBook2 = () => {
    getAllBooks2()
      .then(data => {
        setBooks2(data);
        setBooks([]);
      });
  }

  const handleOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputData);
  }

  
  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook 
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard 
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook} 
          getAllBook2={getAllBook2}
        />
        <BookTable books={books} />
        <DailyRoutin routin={books2}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
