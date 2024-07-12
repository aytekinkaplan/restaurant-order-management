# Restaurant Order Management System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Docker Support](#docker-support)
- [License](#license)

## Introduction

The Restaurant Order Management System is a comprehensive backend system built with Node.js, Express, PostgreSQL, and MongoDB. It enables restaurant owners to manage menus, handle customer orders, and authenticate users securely.

## Features

- User Registration and Authentication (JWT)
- Menu Management
- Order Management
- PostgreSQL for structured data
- MongoDB for unstructured data
- RESTful APIs
- Docker support for containerization

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- MongoDB
- JWT (JSON Web Tokens)
- bcrypt.js for password hashing
- Docker

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aytekinkaplan/restaurant-order-management.git
   cd restaurant-order-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
PG_USER=your_pg_user
PG_HOST=localhost
PG_DATABASE=your_pg_database
PG_PASSWORD=your_pg_password
PG_PORT=5432
MONGO_URI=mongodb://localhost:27017/restaurant
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will start on `http://localhost:5000`.

## API Endpoints

### User Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user

### Menu Endpoints

- `GET /api/menu` - Get all menu items
- `POST /api/menu` - Add a new menu item (requires authentication)
- `PUT /api/menu/:id` - Update a menu item (requires authentication)
- `DELETE /api/menu/:id` - Delete a menu item (requires authentication)

### Order Endpoints

- `POST /api/orders` - Create a new order (requires authentication)
- `GET /api/orders` - Get all orders for the authenticated user
- `GET /api/orders/:id` - Get order by ID (requires authentication)
- `PUT /api/orders/:id/status` - Update order status (requires authentication)

## Docker Support

You can also run the project using Docker.

1. Build the Docker image:

   ```bash
   docker build -t restaurant-order-management .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 5000:5000 --env-file .env restaurant-order-management
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
