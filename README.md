
# Personal Portfolio

This project is a personal portfolio built with React. It showcases my projects, experiences, and a contact section.

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/mohamed-dhia-ben-amar/DhawPortfolio
    cd personal-portfolio
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:
```dotenv
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_public_key
```

## Running the Development Server

Start the development server:
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Running Tests

Launch the test runner in the interactive watch mode:
```sh
npm test
```

## Building for Production

Build the app for production to the `build` folder:
```sh
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance.

## Additional Scripts

- `npm run eject`: Ejects the project from Create React App configuration.
- `npm run lint`: Runs the linter to check for code style issues.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```