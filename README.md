# PopX React Assignment

This project is a React implementation of the PopX mobile application UI based on the provided design. The goal was to recreate the screens as closely as possible while maintaining clean code, reusable components, and smooth navigation between pages.

The application includes a complete user flow starting from the welcome screen, allowing users to create an account, log in, and view their profile information.

## What I Built

- A landing page with navigation to Login and Signup screens.
- A signup form that collects user information and stores it in LocalStorage.
- A login page with email and password validation.
- A profile page that displays the registered user's information.
- Reusable components for buttons, input fields, and the mobile layout container.
- Client-side routing using React Router.
- Form validation with user-friendly error messages.
- Responsive mobile-style interface centered on the webpage.

## Features

### Landing Page

The landing page acts as the entry point of the application and provides navigation options for new and existing users.

### Signup Page

Users can create an account by entering their details. Basic validation is included to ensure required fields are filled correctly. The entered data is stored in LocalStorage to simulate a simple authentication flow.

### Login Page

The login page validates the user's email and password against the information stored during signup. Invalid login attempts display an inline error message instead of using browser alerts.

### Profile Page

After successful login or signup, users are redirected to their profile page where their information is displayed in a clean account settings layout.

## Technologies Used

- React
- Vite
- React Router DOM
- CSS3
- LocalStorage

## Running the Project Locally

1. Clone the repository

```bash
git clone https://github.com/viggu777/popx-react-assignment/
```

2. Move into the project folder

```bash
cd popx-react-assignment
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the application in your browser

```text
http://localhost:5173
```

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Live Demo

https://popx-vignesh.netlify.app/

## Author

Mohan Vignesh
