Bitpin Frontend Task
This is the frontend implementation of a task for Bitpin, involving a trading system where users can view market details, place orders, and view transactions.

Features
Market Listings: Users can browse available markets, with pagination and sorting based on different base currencies.
Order and Transaction Viewing: Users can view buy/sell orders and past transactions for each market. Order details such as price, volume, and value are displayed.
Swipe Gesture Navigation: Mobile users can navigate between tabs using swipe gestures.
Real-time Updates: The application fetches updated order and transaction data every three seconds.
Percentage-Based Order Entry: Users can place buy and sell orders based on percentage amounts of a selected currency.

Technologies Used
React: UI library for building the user interface.
Tanstack React Query: For handling data fetching, caching, synchronization, and more.
Zustand: For lightweight state management.
Vite: Development environment for fast builds.
TypeScript: Ensures type safety throughout the project.
Tailwind CSS: For styling.
Decimal.js: For precise decimal calculations, especially for currency values.
React Router: For page navigation.
React Toastify: For toast notifications.
Swipe Gestures: Swipe functionality is implemented using native event handling for a smooth, optimized experience, inspired by the idea from react-use-gesture but without relying on external libraries.

Running the Project
To start the development server, run:
`pnpm dev`

To build the project for production:
`pnpm build`

To preview the production build locally:
`pnpm preview`

Linting
`pnpm lint`