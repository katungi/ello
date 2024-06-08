import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { getBooks } from './services/bookService';
import { useBookStore } from './utils/store';
import ReadingList from './components/ReadingList';
import HeroSection from './components/Hero';

const BookAssignmentView: React.FC = () => {
  const {
    searchResults,
    readingList,
    setBooks,
    addBookToReadingList,
    removeBookFromReadingList,
    searchBooks
  } = useBookStore();

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, [setBooks]);

  return (
    <Container>
      <HeroSection
        books={searchResults}
        readingList={readingList}
        onSearch={searchBooks}
        onAddBook={addBookToReadingList}
        onRemoveBook={removeBookFromReadingList}
      />
      <ReadingList readingList={readingList} onRemoveBook={removeBookFromReadingList} />
    </Container>
  );
};

export default BookAssignmentView;


