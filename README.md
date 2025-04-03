# Kanban-Board-JWTs-Application

## Description

This is a full-stack Kanban board application with secure user authentication using JSON Web Tokens (JWTs). Users must log in to view and manage their tasks. The app includes protected API routes, token storage in localStorage, session expiration handling, and an intuitive drag-and-drop interface for managing tickets.

- **Motivation:** Enhance an existing Kanban board by integrating full authentication using modern security practices.
- **Purpose:** Provide a secure, scalable, and interactive Kanban tool for agile teams.
- **Problem Solved:** Adds secure login/logout and token-based user verification to protect task management functionality.
- **What I Learned:** JWT-based authentication, route protection, Sequelize hooks, token validation, and secure deployment practices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Render Link](#render-link)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lunahoushmand16/Kanban-Board-JWTs-Application
   ```
2. Navigate to the project folder:
   ```sh
   cd Kanban-Board-JWTs-Application 
   ```
3. Install dependencies for both client and server:
    ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```
4. Create a `.env` file in the server directory and provide the following:
   ```env
   DB_NAME='kanban_db'
   DB_USER='your_db_user'
   DB_PASSWORD='your_db_password'
   JWT_SECRET_KEY='your_jwt_secret'
   ```
5. Start the application:

   ```sh
   cd server
   npm run dev
   ```

## Usage

- Visit `http://localhost:3001` in your browser
- Log in using a valid user account
- Once authenticated, you can view, add, edit, and delete Kanban tickets
- JWTs are stored securely in localStorage and removed on logout or timeout

### Screenshots:

![Login Page](./screenshots/login-page.png)
![Kanban Board](./screenshots/kanban-board.png)

## Credits

- Created by **[Luna Houshmans](https://github.com/lunahoushmand16)**
- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Backend built with [Express.js](https://expressjs.com/) and [Sequelize](https://sequelize.org/)
- Deployed with [Render](https://render.com/)
- [Markdown formatting help](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Badges

![GitHub repo size](https://img.shields.io/github/repo-size/lunahoushmand16/Kanban-Board-JWTs-Application)
![GitHub contributors](https://img.shields.io/github/contributors/lunahoushmand16/Kanban-Board-JWTs-Application)
![GitHub stars](https://img.shields.io/github/stars/lunahoushmand16/Kanban-Board-JWTs-Application?style=social)

## Features

- JWT-based authentication
- Secure login/logout
- Token storage in localStorage
- Session timeout and token expiration
- Protected API routes
- Kanban board with ticket filtering (Bonus)
- Responsive UI

## How to Contribute

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Added new feature'`
4. Push changes: `git push origin feature-name`
5. Open a pull request

## Tests

1. Use Insomnia to test JWT-protected API endpoints
2. Attempt unauthorized access to protected routes to verify security
3. Log in with valid/invalid credentials
4. Confirm session expiration and logout behavior

## Render Link

[Live Demo on Render](https://dashboard.render.com/web/new)