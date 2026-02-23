# Joke API Explorer

## Description
An interactive web application that integrates with a third-party API to fetch and display jokes. Users can customize their experience by selecting specific categories and filtering content based on various flags.

## Key Features
- Dynamic API Integration: Real-time data fetching from the JokeAPI (v2).
- Content Personalization: Options to select joke categories (Any, Programming, Misc, Dark, etc.).
- Safe Filtering: Ability to blacklist specific flags (NSFW, Religious, Political, etc.) to ensure appropriate content.
- Custom Delivery: Support for both single-part and two-part (setup/delivery) joke types.

## Technology Stack
- Node.js: Server-side environment.
- Express.js: Web application framework for handling requests.
- Axios: Promise-based HTTP client for API requests.
- EJS: Templating engine for displaying jokes dynamically.

## Installation and Setup
1. Clone or download the project directory.
2. Open a terminal in the project folder and run `npm install`.
3. Launch the server by running `node index.js`.
4. Navigate to `http://localhost:3000` in your web browser.

## Functionality Overview
The application sends a GET request to the JokeAPI with parameters derived from the user's form selection. The response is processed on the server to handle different joke structures (single vs. two-part) before being rendered on the client side.
