import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { BookListProps } from '../utils/types';

const BookList: React.FC<BookListProps> = ({ books, onAddBook }) => (
  <List>
    {books.map((book) => (
      <ListItem key={book.title}>
        <ListItemText primary={book.title} secondary={book.author} />
        <Button variant="contained" color="primary" onClick={() => onAddBook(book)}
            sx={{ mt: '8px', borderRadius: '8px' }}
        >
          Add
        </Button>
      </ListItem>
    ))}
  </List>
);

export default BookList;
