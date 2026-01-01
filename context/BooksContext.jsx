import { createContext, useState } from 'react';
import Constants from 'expo-constants';
import { databases } from '../lib/appwrite';
import { useUser } from '../hooks/useUser';
import { Permission, Role, ID } from 'react-native-appwrite';

const DATABASE_ID = Constants.expoConfig.extra.appwriteDatabaseId;
const BOOKS_TABLE_ID = Constants.expoConfig.extra.appwriteBooksTableId;

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const {user} = useUser();

    async function fetchBooks() {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    async function fetchBookById(id) {
        try {


            return response
        } catch (error) {
            console.log(error.message)
        }
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createRow({
                databaseId: DATABASE_ID,
                tableId: BOOKS_TABLE_ID,
                rowId: ID.unique(),
                data: {
                    ...data,
                    userId: user.$id
                },
                permissions: [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            });
            return newBook;
        } catch (error) {
            console.log(error.message)
        }
    }

    async function deleteBook(id) {
        try {

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>
    );
}