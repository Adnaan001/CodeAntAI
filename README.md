# CodeAnt AI Frontend

## Project Overview
This repository contains the fully coded frontend implementation of the design provided in the Figma file. The project is built using **ReactJS**, **HTML**, and **CSS**, adhering to best practices for clean, maintainable, and scalable code.

## Features
- Responsive design compatible with both desktop and mobile devices.
- Interactive components such as a sidebar, repository listing, and dynamic navigation.
- State management using React hooks.

## Prerequisites
To run this project locally, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (for package management)

## Installation Steps

Follow these steps to set up and run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/codeant-ai-frontend.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd codeant-ai-frontend
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```
   or if you are using yarn:
   ```bash
   yarn install
   ```

4. **Start the Development Server**
   ```bash
   npm start
   ```
   or:
   ```bash
   yarn start
   ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:PortNumber` to view the application.

## Folder Structure
A brief overview of the folder structure:

```
codeant-ai-frontend/
├── public/              # Static files
├── src/                 # Main source code
│   ├── assets/          # Images, icons, and other assets
│   ├── components/      # Reusable React components
│   ├── pages/           # Page-level components
│   ├── App.js           # Root component
│   ├── index.js         # Application entry point
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
```

## Running the Project
After starting the development server, you can interact with the application at `http://localhost:PortNumber`.

## Build and Deployment
To create a production-ready build, run:
```bash
npm run build
```
This will generate a `build/` directory containing the optimized static files.

To deploy the application, serve the `build/` directory using any static file server or hosting service like **Netlify**, **Vercel**, or **GitHub Pages**.

## Troubleshooting
- If you encounter any issues with missing dependencies, try deleting the `node_modules` folder and reinstalling dependencies:
  ```bash
  rm -rf node_modules
  npm install
  ```
- Ensure that the required Node.js version is installed.

## Credits
- Figma design provided by the CodeAnt AI team.
- Built with ReactJS and other modern web technologies.

