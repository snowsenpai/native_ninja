import 'react-native-url-polyfill/auto';
import { Client, Account, Avatars, TablesDB } from 'react-native-appwrite';
import Constants from 'expo-constants';

export const client = new Client()
    .setProject(Constants.expoConfig.extra.appwriteProjectId)
    .setPlatform(Constants.expoConfig.extra.appwritePlatform)
    .setEndpoint(Constants.expoConfig.extra.appwriteEndpoint);

export const account = new Account(client);

export const avatars = new Avatars(client);

export const databases = new TablesDB(client);
