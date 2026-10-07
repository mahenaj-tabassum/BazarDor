# 🛒 BazarDor (বাজার দর)

**Daily essentials' prices at a glance.**

BazarDor is a price-tracking web app for everyday Bangladeshi essentials such as rice, vegetables, fish, and eggs. It shows today's prices along with how much they have gone up or down, lets you browse by category, and gives logged-in users a detailed market-wise price breakdown for each product.



## 🛠️ Tech Stack

| Purpose        | Technology                |
| -------------- | ------------------------- |
| Framework      | Next.js (App Router)      |
| Styling        | Tailwind CSS, DaisyUI     |
| Icons          | Lucide React, React Icons |
| Authentication | BetterAuth                |
| Database       | MongoDB                   |
| Notifications  | react-hot-toast           |
| Deployment     | Vercel                    |



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