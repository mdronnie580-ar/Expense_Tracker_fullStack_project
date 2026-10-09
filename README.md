
# Expense Tracker 💰

A full-stack expense tracking application built using the MERN stack. This project helps users manage their daily expenses and keep track of their spending.

## 🚀 Features

* User registration and login
* Add new expenses
* View expense history
* Edit existing expenses
* Delete expenses
* Store expense data in MongoDB

## 🛠️ Technologies Used

**Frontend**

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

## 📁 Project Structure

```text
Expense-Tracker/
├── frontend/
├── backend/
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Expense-Tracker
```

### 2. Set up the backend

Open a terminal and navigate to your backend folder.

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder and configure the environment variables required by your application.

Example:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

Start the backend using the command configured in your `package.json`, for example:

```bash
npm run dev
```

### 3. Set up the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```
Open the local URL displayed by Vite in your browser.

## 🔐 Environment Variables

Keep your database credentials and other secrets in your local `.env` file. Never upload real secrets to GitHub.

## 📚 Learning Goals

This project is built to practice full-stack web development, REST APIs, authentication, database operations, and React state management.

## 👨‍💻 Author

Created as a personal full-stack development project.

## 📄 License

This project is available for learning and personal use.
