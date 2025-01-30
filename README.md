# Chat Application

## Overview

This is a real-time chat application that leverages GraphQL for efficient data fetching and subscriptions for real-time communication between users. The application supports user authentication, one-to-one chat, media sharing, and status updates.

## Features

- **User Authentication**

  - Signup and Login functionality
  - Secure authentication using JWT (or any preferred method)

- **Real-time Chat**

  - One-to-one messaging
  - GraphQL subscriptions for real-time updates
  - Media sharing support (images, videos, documents, etc.)

- **User Status Management**
  - Typing Indicator
  - Online/Offline Status
  - Message Read/Unread Status
  - Message Delivered Status

## Tech Stack

- **Frontend**

  - React.js (or any preferred frontend framework)
  - Apollo Client for GraphQL
  - Material UI (or any preferred styling framework)

- **Backend**
  - Node.js with Express
  - GraphQL with Apollo Server
  - MongoDB with Mongoose (or any preferred database)
  - Cloud Storage (for media file handling, e.g., AWS S3, Firebase Storage)

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>=16.x)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/ManavJain01/Chat.App-Graphql.git
   cd chat-app/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `server` directory and configure the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the client folder:
   ```sh
   cd ../client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```

## Usage

- Sign up or log in to the application.
- Start a conversation with another user.
- Send text messages or media files.
- Observe real-time updates such as typing indicators, message statuses, and online presence.

## Future Enhancements

- Group chat functionality
- Push notifications for new messages
- Message reactions and emojis
- End-to-end encryption

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
