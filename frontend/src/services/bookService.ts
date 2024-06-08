import {gql, request} from 'graphql-request'
import { Book } from '../utils/types';

// TODO: Move this to a constants file
const endpoint = 'http://localhost:4000/';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

export const getBooks = async (): Promise<Book[]> => {
    const response: any = await request(endpoint, GET_BOOKS);
    return response.books as Book[];
}