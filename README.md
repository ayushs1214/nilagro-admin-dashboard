# Milagro Admin Dashboard

A comprehensive admin dashboard for managing products, inventory, orders, and user interactions in the Milagro ecosystem. Built with React, TypeScript, and Tailwind CSS.

## Overview

Milagro Admin Dashboard is a powerful administrative interface designed to streamline the management of products, inventory, orders, and user interactions. It provides a robust set of tools for administrators to efficiently handle day-to-day operations.

## Key Features

- **User Management**
  - User registration approval system
  - Role-based access control
  - User profile management

- **Product Management**
  - Comprehensive product catalog
  - Inventory tracking
  - Bulk product uploads
  - Sample product management

- **Order Management**
  - Order processing and tracking
  - Payment management
  - Order status updates
  - Delivery tracking

- **Expo Management**
  - Exhibition and event management
  - Participant registration
  - Product showcase management

- **Analytics & Reporting**
  - Real-time dashboard metrics
  - Sales and revenue analytics
  - Inventory reports
  - User activity tracking

## Tech Stack

- **Frontend**
  - React 18.x
  - TypeScript
  - Tailwind CSS
  - Lucide React (Icons)
  - Recharts (Charts)
  - Zustand (State Management)

- **Development Tools**
  - Vite
  - ESLint
  - PostCSS
  - Autoprefixer

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ayushs1214/milagro-admin.git
cd milagro-admin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage Examples

### Authentication

```typescript
import { useAuthStore } from './store/authStore';

// Login
const login = useAuthStore(state => state.login);
await login(email, password);

// Logout
const logout = useAuthStore(state => state.logout);
logout();
```

### Product Management

```typescript
import { productsApi } from './utils/api';

// Add new product
const newProduct = await productsApi.createProduct(formData);

// Update product
const updatedProduct = await productsApi.updateProduct(id, formData);

// Delete product
await productsApi.deleteProduct(id);
```

### Inventory Management

```typescript
// Update stock levels
const handleUpdateStock = async (itemId: string, quantity: number) => {
  try {
    await inventoryApi.updateStock(itemId, quantity);
    // Handle success
  } catch (error) {
    // Handle error
  }
};
```

## Development

### Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── store/            # State management
├── types/            # TypeScript types
├── utils/            # Utility functions
└── App.tsx           # Root component
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm test:coverage
```

## Deployment

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `dist` directory.

3. Deploy to your preferred hosting platform:
```bash
# Example: Deploy to Netlify
netlify deploy --prod
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use functional components with hooks
- Write comprehensive tests
- Document complex functions and components
- Follow the existing code style

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

**Ayush Singh**
- GitHub: [https://github.com/ayushs1214](https://github.com/ayushs1214)
- Email: [your-email@example.com]

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)

---

Made with ❤️ by Ayush Singh