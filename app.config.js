import appJson from './app.json';

export default {
  ...appJson,
  expo: {
    ...appJson.expo,
    extra: {
      appwriteProjectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
      appwriteProjectName: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME,
      appwriteEndpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
      appwritePlatform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
    }
  }
}