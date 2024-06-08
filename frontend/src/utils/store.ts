import { create } from 'zustand';
import { Book } from './types';

interface BookStore {
    books: Book[];
    searchResults: Book[];
    readingList: Book[];
    setBooks: (books: Book[]) => void;
    setSearchResults: (searchResults: Book[]) => void;
    addBookToReadingList: (book: Book) => void;
    removeBookFromReadingList: (book: Book) => void;
    searchBooks: (term: string) => void;
}

export const useBookStore = create<BookStore>((set) => ({
    books: [],
    searchResults: [],
    readingList: [],
    setBooks: (books) => set({ books }),
    setSearchResults: (searchResults) => set({ searchResults }),
    addBookToReadingList: (book) =>
        set((state) => ({ readingList: [...state.readingList, book] })),
    removeBookFromReadingList: (book) =>
        set((state) => ({ readingList: state.readingList.filter((b) => b.title !== book.title) })),
    searchBooks: (term) =>
        set((state) => ({
            searchResults: state.books.filter((book) =>
                book.title.toLowerCase().includes(term.toLowerCase()) ||
                book.author.toLowerCase().includes(term.toLowerCase())
            ),
        })),
}));
