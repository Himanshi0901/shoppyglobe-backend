# ShoppyGlobe API

This is the backend for the ShoppyGlobe application built using Node.js, Express, and MongoDB. It provides API endpoints for managing products and shopping carts.

## Requirements

- Node.js
- MongoDB (MongoDB Compass)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Himanshi0901/shoppyglobe.git
   cd shoppyglobe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/shoppyglobe
   JWT_SECRET=your_random_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Documentation

### Products

- **GET /api/products**: Fetch a list of products.
- **GET /api/products/:id**: Fetch details of a single product by its ID.

### Cart

- **POST /api/cart**: Add a product to the shopping cart (requires authentication).
- **PUT /api/cart/:id**: Update the quantity of a product in the cart (requires authentication).
- **DELETE /api/cart/:id**: Remove a product from the cart (requires authentication).

### Authentication

- **POST /api/register**: Register a new user.
- **POST /api/login**: Authenticate user and return a JWT token.

## Testing with ThunderClient

Here are the screenshots of the API testing using ThunderClient:
[View Documentation](https://drive.google.com/file/d/1GuQc6kOArBTeqmZ6TZrY0ZfqEe2ks8pA/view?usp=sharing)


## Additional Notes

- Ensure MongoDB is running on your system.
- Use MongoDB Compass to manage your database and collections.
- The JWT secret key should be a strong, randomly generated string.
