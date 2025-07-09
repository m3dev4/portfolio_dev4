# Portfolio Dev4

![GitHub Repo Size](https://img.shields.io/github/repo-size/m3dev4/portfolio_dev4)
![GitHub Issues](https://img.shields.io/github/issues/m3dev4/portfolio_dev4)
![GitHub License](https://img.shields.io/github/license/m3dev4/portfolio_dev4)

## Project Description

**Portfolio Dev4** is a modern web application designed to showcase personal projects and skills in a visually appealing manner. Built with a focus on user experience and aesthetics, this portfolio leverages the power of React and Next.js to deliver a seamless browsing experience. 

### Key Features
- Responsive design optimized for various devices.
- Dynamic project showcases including web development, mobile applications, and product design.
- Smooth scrolling and interactive UI elements for enhanced user engagement.
- Custom animations and transitions to enrich the visual experience.

## Tech Stack

| Technology       | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)        | A JavaScript library for building user interfaces.                          |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | A React framework for server-side rendering and generating static websites. |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white) | A utility-first CSS framework for rapid UI development.                     |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | A programming language for web development.                                 |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | A typed superset of JavaScript that compiles to plain JavaScript.          |

## Installation Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

### Step-by-Step Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/m3dev4/portfolio_dev4.git
   cd portfolio_dev4
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory and configure any necessary environment variables as needed for your setup.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## Usage

Once the development server is running, you can explore the portfolio by navigating through the various sections such as About, Projects, and Contact. The application includes smooth scrolling and interactive elements that enhance the user experience.

## Project Structure

The project is structured as follows:

```
portfolio_dev4/
├── app/                       # Main application directory
│   ├── fonts/                 # Custom fonts used in the application
│   ├── pages/                 # Contains different pages of the portfolio
│   │   ├── about/             # About page components
│   │   ├── contact/           # Contact page components
│   │   └── project/           # Project showcase components
│   ├── clientLayout.jsx       # Main layout component for the client
│   ├── globals.css            # Global styles for the application
│   ├── layout.jsx             # Main layout component
│   └── page.jsx               # Entry point for the application
├── components/                # Reusable components
│   ├── footer/                # Footer component
│   ├── header/                # Header component
│   ├── nav/                   # Navigation components
│   └── ui/                    # UI components like buttons, loaders, etc.
├── constants/                 # Constants and static data
│   └── data/                  # Data files for experience and other constants
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── public/                    # Public assets (icons, images, etc.)
├── utils/                     # Utility scripts
├── .eslintrc.json             # ESLint configuration
├── package.json               # Project dependencies and scripts
└── tailwind.config.js         # Tailwind CSS configuration
```

### Main Files
- **package.json**: Contains project metadata and dependencies.
- **next.config.js**: Configuration file for Next.js.
- **tailwind.config.js**: Configuration for Tailwind CSS styles.

## Contributing

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

We appreciate your contributions and feedback!
