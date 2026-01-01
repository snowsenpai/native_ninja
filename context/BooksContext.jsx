import { createContext, useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { databases } from '../lib/appwrite';
import { useUser } from '../hooks/useUser';
import { Permission, Role, ID, Query } from 'react-native-appwrite';

const DATABASE_ID = Constants.expoConfig.extra.appwriteDatabaseId;
const BOOKS_TABLE_ID = Constants.expoConfig.extra.appwriteBooksTableId;

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const {user} = useUser();

    async function fetchBooks() {
        try {
            const response = await databases.listRows({
                databaseId: DATABASE_ID,
                tableId: BOOKS_TABLE_ID,
                queries: [Query.equal('userId', user.$id)]
            });
            setBooks(response.rows)
            console.log(response.rows)
            return response.rows
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
            console.log('user.$id', user.$id)
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

    useEffect(() => {
        if (user) {
            fetchBooks()
        } else {
            setBooks([])
        }
    }, [user])

    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>
    );
}