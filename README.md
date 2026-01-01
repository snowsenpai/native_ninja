# Native Ninja - React Native Expo App

## Core Architecture & Routing

### Expo Router

File-based routing system with grouped routes using folder parentheses `(auth)` and `(dashboard)` for organizing related screens.

### Navigation Stack

Uses expo-router's Stack component for screen management with customizable header styling and animations.

## State Management

### Context API

Two main contexts for global state:

- **UserContext**: Manages authentication state (login, register, logout, user data)
- **BooksContext**: Manages book CRUD operations and real-time synchronization

### Custom Hooks Pattern

`useUser()` and `useBook()` hooks provide convenient access to context with error handling (throws if used outside provider).

## Authentication System

### Email/Password Auth

Implemented via Appwrite Account service.

### Session Management

Creates/deletes sessions, persists user state across app restarts.

### Auth Guards

- **UserOnly component**: Restricts access to authenticated routes
- **GuestOnly component**: Restricts access to auth pages once logged in
- **authChecked flag**: Prevents flickering during initial auth validation

## Backend Integration (Appwrite)

### Database Operations

Uses Appwrite's Tables API for CRUD operations on books.

### Real-time Sync

Subscribes to database changes via Appwrite's real-time channels.

### Row-level Permissions

Implements user-scoped access control with Permission and Role objects.

### Configuration

Stores credentials in Expo Constants for secure environment-based setup.

## UI/Styling

### Themed Components

Reusable components with light/dark mode support:

- `ThemedText`
- `ThemedButton`
- `ThemedCard`
- `ThemedView`

### Color Scheme Detection

Uses React Native's `useColorScheme()` hook to apply theme based on system settings.

### Custom Components

Consistent UI patterns through:

- `Spacer`
- `Loader`
- `Logo`
- `TextInput`
