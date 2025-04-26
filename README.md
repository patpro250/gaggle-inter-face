# Library Management System - Frontend

## Overview

The **Library Management System (LMS) Frontend** is a web-based application designed to provide an intuitive and user-friendly interface for managing libraries. It enables users to search for books, manage memberships, track borrow/return transactions, and access various library-related functionalities.

## Features

- 📚 **Book Management**: Search, view, and categorize books.
- 👥 **User Authentication**: Secure login/logout system using JWT authentication.
- 🎫 **Membership Management**: Register new users and manage existing members.
- 🔄 **Borrow & Return System**: Track book lending and returns.
- 📊 **Dashboard**: Provides an overview of library statistics.
- 🌍 **Responsive Design**: Fully optimized for desktop and mobile use.

## Tech Stack

- **Frontend Framework**: Next.js (React.js)
- **UI Library**: Tailwind CSS & Shadcn/ui
- **State Management**: Context API / Redux (optional)
- **API Communication**: Axios / Fetch API
- **Authentication**: JWT Authentication

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (latest LTS version recommended)
- **npm** or **yarn**

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/library-management-frontend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd library-management-frontend
   ```
3. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
4. Create an environment file `.env.local` and configure API details:
   ```env
   NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
   ```
5. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
6. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Folder Structure

```
📂 library-management-frontend
├── 📁 public         # Static assets
├── 📁 src
│   ├── 📁 components # Reusable UI components
│   ├── 📁 pages      # Next.js pages (routes)
│   ├── 📁 styles     # Global styles
│   ├── 📁 utils      # Helper functions
│   ├── 📁 context    # Context API files
├── 📄 .env.local     # Environment variables
├── 📄 package.json   # Project dependencies
├── 📄 README.md      # Project documentation
```

## API Integration

The frontend communicates with the **Library Management System API**. Ensure the backend is running and properly configured before using the frontend.

## License

MIT License © 2025 Gaggleniti Group Company
