Live Link: https://gadget-heaven-website.netlify.app/

Requirements Docs: https://drive.google.com/file/d/1XYVdznuf1cIPA1IPuJoRTYjaI5mRy2hR/view?usp=sharing

# Gadget Heaven

Gadget Heaven is a React-based application that allows users to browse gadgets by categories, add items to a wishlist or cart, and complete purchases. This project demonstrates key React concepts, state management, and React Router for navigation.

## Features

1. **Product Browsing by Category**
   - Users can explore gadgets based on different categories, making it easy to find specific types of products or browse all available gadgets in one place.

2. **Add to Wishlist and Cart**
   - Users can add items to a wishlist or directly to the cart. This feature is useful for saving items for later consideration or preparing for immediate purchase.

3. **Real-Time Cart and Wishlist Count**
   - A live count of items in both the cart and wishlist is displayed in the navigation bar, giving users an at-a-glance view of their selected items.

4. **Product Sorting**
   - Users can sort products by criteria such as price to find items within their budget or identify high-value products quickly.

5. **Seamless Checkout with Confirmation Modal**
   - Upon proceeding to purchase, users see a confirmation modal that finalizes their order and thanks them, enhancing the user experience during checkout.

## Technologies Used

- **React**: Core library for building the user interface.
- **React Router**: Manages navigation and routing between different views.
- **React Context API**: Handles global functions and state, such as adding items to the cart or wishlist.
- **Tailwind CSS**: Used for responsive and modern styling.
- **React Icons**: Provides icons for the UI, enhancing visual feedback.

## Key React Concepts

### Components
This project uses components to divide the app into reusable parts, such as:
- **Navbar**: Displays item counts and navigation.
- **MainLayout**: Parent component managing the cart and wishlist state.
- **GadgetCards**: Loads and displays product cards based on categories.

### State Management with `useState`
The application uses React’s `useState` hook to manage the dynamic state for the cart, wishlist, and filtered products.

### Context API for Global Functions
Global functions like `handleAddToCart` and `handleWishlist` are shared across components using React’s Context API, avoiding the need for prop drilling.

### React Router
The project utilizes React Router for URL-based navigation, allowing users to switch between categories and view product details dynamically.

### `useEffect` for Lifecycle Management
`useEffect` is used to perform actions like fetching data, updating product lists based on categories, and setting document titles.
