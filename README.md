# 🛒 বাজার দর (Bazar Dor)

A Bangla-based essential commodities price tracker that helps users explore daily product prices, compare market rates, and track price changes across Bangladesh.

## 🌐 Live Demo

- **Live Website:** [Visit Website](https://market-prices-bd.vercel.app/)
- **GitHub Repository:** [Add your GitHub repository URL]

## 📖 About The Project

**বাজার দর (Bazar Dor)** is a responsive web application designed to make essential commodity prices easier to explore and compare.

Users can browse products, discover which prices are rising or falling, view market-wise price ranges, and create an account to access protected features.

The interface is designed primarily for Bangla-speaking users, with Bengali product information and localized price formatting.

## ✨ Key Features

- **Daily Price Tracking:** Explore the latest available prices of essential commodities.

- **Price Change Indicators:** Identify products with rising, falling, or unchanged prices.

- **Top Price Movers:** View products with the highest price increases and decreases.

- **Category-Based Browsing:** Explore products by category.

- **Product Sorting:** Sort products by price in ascending or descending order.

- **Market-Wise Comparison:** Compare minimum and maximum prices across different markets.

- **Product Details:** View product information, units, price statistics, and market comparisons.

- **User Authentication:** Register and sign in using email and password.

- **Social Authentication:** Sign in with Google or GitHub.

- **User Profile:** View account information and update your name.

- **Protected Routes:** Restrict access to selected pages to authenticated users.

- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop screens.

- **Custom Error Page:** Display a user-friendly 404 page for unavailable routes.

- **Toast Notifications:** Show feedback for authentication and profile actions.

## 🛠️ Tech Stack

| Purpose        | Technology                |
| -------------- | ------------------------- |
| Framework      | Next.js (App Router)      |
| Styling        | Tailwind CSS              |
| Icons          | Lucide React, React Icons |
| Authentication | BetterAuth                |
| Database       | MongoDB                   |
| Notifications  | react-hot-toast           |
| Deployment     | Vercel                    |

## 🔐 Authentication

The project uses Better Auth for authentication.

Supported authentication methods:

- Email and password
- Google OAuth
- GitHub OAuth

Authenticated users can access protected pages and update their profile name. Access to protected pages is checked through the application's authentication flow.

# API's

### BASE_URL_1: https://api.api-store.workers.dev/api/bazardor

### BASE_URL_2: https://api.abcz.workers.dev/api/bazardor (alternative)

Endpoints:
All Products:

```
/products
```

Filter:

```
/products?category=chal
```

Single Product:

```
/products/1
```

Categories:

```
/categories
```

Single Category:

```
/categories/chal
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (a version supported by your installed Next.js version)
- npm
- MongoDB connection string
- Google and GitHub OAuth credentials for social authentication

### 1. Clone the Repository

```bash
git clone https://github.com/mahenaj-tabassum/BazarDor
cd bazar-dor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
BETTER_AUTH_URL=
BETTER_AUTH_DATABASE_URL=

BETTER_AUTH_GOOGLE_CLIENT_ID
BETTER_AUTH_GOOGLE_CLIENT_SECRET=

BETTER_AUTH_GITHUB_CLIENT_ID=
BETTER_AUTH_GITHUB_CLIENT_SECRET=
```

Replace the placeholder values with your actual credentials.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

## 👨‍💻 Author

**Mahenaj Tabassum Powshi**

- GitHub: [Github Profile](https://github.com/mahenaj-tabassum)
- Portfolio: [Portfolio](https://portfolio-web-0-1.netlify.app/)
