# Foundation React.js @devcom_umm

## Overview

Project ini adalah web catatan yang dibangun dengan React.js menggunakan TypeScript.
Aplikasi ini memungkinkan pengguna untuk membuat, mengelola, dan mencari catatan dengan mudah.

## Features

- **User Authentication**: Secure login and registration system
- **Note Management**: Create, read, update, and delete notes
- **Search Functionality**: Quickly find notes by title or content
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes

## Tech Stack

- **Frontend**:
  - React 19 with TypeScript
  - TailwindCSS for styling
  - React Router 7 for navigation
  - TanStack Query for data fetching and state management

- **Build Tools**:
  - Vite for fast development and optimized builds
  - SWC for rapid compilation
  - ESLint for code quality

## Project Structure
``` markdown
src/
├── app.tsx                     # Main application component
├── index.css                   # Global styles with Tailwind imports
├── main.tsx                    # Entry point with routing setup
├── components/                 # Reusable UI components
│   ├── layouts/                # Layout components like Navbar, Footer
│   └── ui/                     # Basic UI components like Button
├── context/                    # React context providers
│   ├── auth-context.tsx        # Authentication context
│   ├── protected-route.tsx     # Route guard component
│   └── use-auth.ts             # Auth hook
├── libs/                       # Utility functions
├── pages/                      # Application pages
│   ├── (auth)/                 # Authentication pages (login/register)
│   ├── (user)/                 # User-specific pages (dashboard)
│   └── (visitor)/              # Public pages
├── services/                   # API service functions
│   ├── auth/                   # Authentication services
│   └── user/                   # User data services
└── types/                      # TypeScript type definitions
├── .env                        # Environment variables
├── index.tsx                   # Main entry point
├── vite-env.d.ts               # Vite environment types
├── vite.config.ts              # Vite configuration file
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/rizkyhaksono/foundation-reactjs-devcom-umm.git
    cd foundation-reactjs-devcom-umm
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add your environment variables. Example:
    ```env
    VITE_API_URL=https://foundation.express.natee.my.id/api
    ```

4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to see the application in action.

### Building for Production
To build the application for production, run:
```bash
npm run build
# or
yarn build
```
This will create an optimized build in the `dist` directory.

### Linting and Formatting
To lint and format the code, run:
```bash
npm run lint
# or
yarn lint
```

### Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/my-feature
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add my feature"
    ```
4. Push your changes to your fork:
    ```bash
    git push origin feature/my-feature
    ```
5. Create a pull request against the `main` branch of the original repository.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.