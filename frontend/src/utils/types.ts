export interface Book {
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
}

export interface SearchBarProps {
    books: Book[];
    readingList: Book[];
    onSearch: (term: string) => void;
    onAddBook: (book: Book) => void;
    onRemoveBook: (book: Book) => void;
}

export interface ReadingListProps {
    readingList: Book[];
    onRemoveBook: (book: Book) => void;
}

export interface HeroProps {
    books: Book[];
    readingList: Book[];
    onSearch: (term: string) => void;
    onAddBook: (book: any) => void;
    onRemoveBook: (book: any) => void;
}

export interface BookListProps {
    books: Book[];
    onAddBook: (book: Book) => void;
}
