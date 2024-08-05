<!-- PROJECT DESCRIPTION -->

# Order Food

## Development Setup

During development, you may encounter Cross-Origin Resource Sharing (CORS) issues.

### CORS Chrome Extension

To overcome CORS issues in your development environment, you can use the "CORS" Chrome extension. This extension allows you to temporarily disable CORS restrictions in your browser, making it easier to test and develop your application.

1. Install the [CORS Chrome Extension](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf).

2. Once the extension is installed, make sure it's enabled when testing your Swiggy WebApp Clone in the browser.

**Note:** The CORS extension is intended for development purposes only. Ensure that you disable the extension when accessing other websites for security reasons.

<!-- Features -->

## Features

### 1. Real-time Information

-   Swiggy Live APIs Integration for generating data about restaurants: Leveraging live Swiggy APIs, delivers up-to-the-minute data on restaurants, empowering users with accurate and reliable information.

### 2. Custom React Hooks

-   Enhancing code reusability and maintainability, allowing for a more efficient development process and a streamlined architecture.

### 3. Page Navigation

-   Navigation between Pages using React Router.

### 4. Higher Order Components (HOC)

-   Introduced a new feature for recently added restaurants using Higher Order Components.

### 5. Redux Toolkit

-   Efficient state management and seamless Add to Cart functionality with the Redux Toolkit library.

### 6. Shimmer UI

-   Enhances user interface transitions with Shimmer UI, providing a visually appealing loading effect during data retrieval, creating a polished and engaging experience for users while waiting for content to load.

### 7. Lazy Loading & Code Splitting

-   The application optimizes performance by employing lazy loading and code splitting techniques, ensuring that only necessary components are loaded, thereby reducing initial page load times and improving overall responsiveness.

### 5. Additional Feature

-   Online or Offline Status indicators for user awareness.

## 🛠 Built With

### Tech Stack

-   ** React JS **
-   ** Tailwind CSS**
-   ** React Router **
-   ** Redux Toolkit **
-   ** Parcel (Bundler) **

## Project Structure

-   `src`: Main source code directory.
    -   `components`: Reusable React components.
        -   `--tests--`: Testing using Jest.
        -   `mocks`: Mock JSON's
    -   `redux`: Redux store configuration and slices.
    -   `utils`: Utility functions and Custom React Hooks.

## Getting Started

1. Clone the repository.

    ```bash
    git clone https://github.com/bijukgeorge86/Order-food.git
    ```

2. Install dependencies.

    ```bash
    cd Order-food
    npm install
    ```

3. Run the development server.

    ```bash
    npm start
    ```

4. Open your browser and navigate to [http://localhost:1234](http://localhost:1234).
