# Milagro Admin Dashboard API Documentation

Base URL: `http://localhost:4000`

## Authentication

All API endpoints require authentication using JWT tokens except for the login endpoint.

### Headers

```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Login

```http
POST /api/auth/login

Request Headers:
Content-Type: application/json

Request Body:
{
  "email": "admin@milagro.com",
  "password": "password123"
}

Response 200:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "name": "Admin User",
    "email": "admin@milagro.com",
    "role": "superadmin"
  }
}

Response 401:
{
  "error": "Invalid credentials"
}

cURL Example:
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@milagro.com","password":"password123"}'
```

### Products

#### List Products

```http
GET /api/products

Query Parameters:
- page (optional): Current page number
- limit (optional): Items per page
- category (optional): Filter by category
- search (optional): Search term

Response 200:
{
  "data": [
    {
      "id": "1",
      "name": "Premium Floor Tile",
      "description": "High-quality ceramic floor tile",
      "price": {
        "value": 85,
        "unit": "piece"
      },
      "category": "tiles",
      "stock": 1000,
      "status": "active"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10
  }
}

cURL Example:
curl http://localhost:4000/api/products \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json"
```

#### Create Product

```http
POST /api/products

Request Headers:
Content-Type: multipart/form-data
Authorization: Bearer <token>

Request Body:
- name: string (required)
- description: string
- price: number (required)
- category: string (required)
- images: File[] (optional)
- specifications: JSON string

Response 201:
{
  "id": "1",
  "name": "Premium Floor Tile",
  "description": "High-quality ceramic floor tile",
  "price": {
    "value": 85,
    "unit": "piece"
  },
  "category": "tiles",
  "images": ["url1", "url2"],
  "status": "active"
}

cURL Example:
curl -X POST http://localhost:4000/api/products \
  -H "Authorization: Bearer <token>" \
  -F "name=Premium Floor Tile" \
  -F "price=85" \
  -F "category=tiles" \
  -F "images=@image1.jpg" \
  -F "images=@image2.jpg"
```

### Inventory

#### Update Stock

```http
PUT /api/inventory/:productId/stock

Request Headers:
Content-Type: application/json
Authorization: Bearer <token>

Request Body:
{
  "quantity": 100,
  "type": "add" | "remove" | "set"
}

Response 200:
{
  "id": "1",
  "currentStock": 1100,
  "lastUpdated": "2024-03-15T10:30:00Z"
}

cURL Example:
curl -X PUT http://localhost:4000/api/inventory/1/stock \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"quantity":100,"type":"add"}'
```

#### Get Stock History

```http
GET /api/inventory/:productId/history

Query Parameters:
- startDate (optional): Filter by start date
- endDate (optional): Filter by end date

Response 200:
{
  "data": [
    {
      "id": "1",
      "type": "add",
      "quantity": 100,
      "timestamp": "2024-03-15T10:30:00Z",
      "updatedBy": "Admin User"
    }
  ]
}

cURL Example:
curl http://localhost:4000/api/inventory/1/history \
  -H "Authorization: Bearer <token>"
```

### Orders

#### List Orders

```http
GET /api/orders

Query Parameters:
- status: Filter by status
- startDate: Filter by start date
- endDate: Filter by end date
- page: Page number
- limit: Items per page

Response 200:
{
  "data": [
    {
      "id": "ORD001",
      "customerName": "John Smith",
      "total": 5780,
      "status": "pending",
      "createdAt": "2024-03-15T10:30:00Z"
    }
  ],
  "meta": {
    "total": 50,
    "page": 1,
    "limit": 10
  }
}

cURL Example:
curl http://localhost:4000/api/orders \
  -H "Authorization: Bearer <token>"
```

#### Update Order Status

```http
PUT /api/orders/:orderId/status

Request Headers:
Content-Type: application/json
Authorization: Bearer <token>

Request Body:
{
  "status": "processing" | "shipped" | "delivered" | "cancelled"
}

Response 200:
{
  "id": "ORD001",
  "status": "processing",
  "updatedAt": "2024-03-15T10:30:00Z"
}

cURL Example:
curl -X PUT http://localhost:4000/api/orders/ORD001/status \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"status":"processing"}'
```

### Expo Management

#### Create Expo

```http
POST /api/expos

Request Headers:
Content-Type: application/json
Authorization: Bearer <token>

Request Body:
{
  "name": "International Tile Expo 2024",
  "location": "Mumbai Exhibition Center",
  "startDate": "2024-04-15",
  "endDate": "2024-04-18",
  "description": "Annual tile exhibition"
}

Response 201:
{
  "id": "1",
  "name": "International Tile Expo 2024",
  "location": "Mumbai Exhibition Center",
  "startDate": "2024-04-15",
  "endDate": "2024-04-18",
  "status": "upcoming"
}

cURL Example:
curl -X POST http://localhost:4000/api/expos \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"name":"International Tile Expo 2024","location":"Mumbai Exhibition Center","startDate":"2024-04-15","endDate":"2024-04-18"}'
```

### Bulk Upload

#### Upload Products

```http
POST /api/bulk/products

Request Headers:
Content-Type: multipart/form-data
Authorization: Bearer <token>

Request Body:
- file: CSV/XLSX file
- expoId (optional): Associated expo ID

Response 200:
{
  "jobId": "job123",
  "total": 100,
  "processed": 0,
  "status": "processing"
}

cURL Example:
curl -X POST http://localhost:4000/api/bulk/products \
  -H "Authorization: Bearer <token>" \
  -F "file=@products.csv"
```

#### Check Upload Status

```http
GET /api/bulk/status/:jobId

Response 200:
{
  "jobId": "job123",
  "total": 100,
  "processed": 75,
  "successful": 70,
  "failed": 5,
  "status": "processing"
}

cURL Example:
curl http://localhost:4000/api/bulk/status/job123 \
  -H "Authorization: Bearer <token>"
```

### Error Responses

All endpoints may return the following error responses:

```http
401 Unauthorized:
{
  "error": "Authentication required"
}

403 Forbidden:
{
  "error": "Insufficient permissions"
}

404 Not Found:
{
  "error": "Resource not found"
}

422 Validation Error:
{
  "error": "Validation failed",
  "details": {
    "field": ["error message"]
  }
}

500 Server Error:
{
  "error": "Internal server error"
}
```

## Rate Limiting

API requests are limited to 100 requests per minute per IP address. The following headers are included in all responses:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1623456789
```

## Pagination

List endpoints support pagination using the following query parameters:

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10, max: 100)

Response includes metadata:

```json
{
  "data": [...],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

## Filtering

Most list endpoints support filtering using query parameters. Common filters include:

- `search`: Search term
- `status`: Resource status
- `startDate`: Start date range
- `endDate`: End date range
- `category`: Category filter

Example:
```
GET /api/products?category=tiles&status=active&search=premium
```