# React Frontend Application

## Prerequisites

Make sure you have the following software installed:

- Node.js >= 16.x
- npm or yarn

## Installation

Follow these steps to set up the React frontend on your local machine:

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies:**

    You can use either `npm` or `yarn` to install dependencies:

    Using npm:
    ```bash
    npm install
    ```

    Using yarn:
    ```bash
    yarn install
    ```

3. **Set up your environment file:**

    Copy the example environment file to create your own `.env` file:

    ```bash
    cp .env.example .env
    ```

    Open the `.env` file and configure it with your environment-specific variables. For example:

    ```env
    VITE_API_URL=http://localhost:8001/api
    ```

4. **Run the development server:**

    Using npm:
    ```bash
    npm run dev 
    ```

    Using yarn:
    ```bash
    yarn dev 
    ```

    The application will be available at `Local:http://localhost:5173/`.

