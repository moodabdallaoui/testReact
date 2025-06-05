# Skip Hire Ordering Wizard

A modern, responsive, and user-friendly single-page application for ordering skips. This project is a complete redesign of an existing ordering page, focusing on clean UI/UX, maintainable component-based architecture, and a seamless mobile-first experience.


## Description

This application provides a multi-step wizard to guide users through the process of hiring a skip. It begins by fetching available skip sizes and prices from a live API, allows the user to make a selection, provide details for the delivery, and finally confirm their order. The entire interface is built with a sleek dark theme for a modern look and feel.

The primary goals of this project were:
* To create a visually appealing and "completely different" look from the original page.
* To write clean, reusable, and maintainable code using React.
* To ensure the application is fully responsive and works flawlessly on both desktop and mobile browsers.
* To improve the overall user experience by breaking down a complex form into a simple, step-by-step process.

## Features

* **Multi-Step Wizard Flow:** Simplifies the ordering process into three manageable steps: Choose Skip, Provide Details, and Confirm.
* **Dynamic Data from Live API:** Skip options, sizes, and pricing are fetched in real-time.
* **Real-time Price Calculation:** The front-end processes raw API data (`price_before_vat`, `vat`) to display the final, accurate price to the user.
* **Interactive UI:** Modern, responsive cards for skip selection and custom-styled toggle buttons for a premium user experience.
* **Live Order Summary:** A footer summary provides instant feedback on the user's current selection.
* **Responsive Design:** A mobile-first approach ensures a great experience on any screen size, from small phones to large desktops.
* **Dark Theme:** A sleek, modern dark theme is applied consistently across all components and form elements.

## Tech Stack

* **Frontend:** [React.js](https://reactjs.org/) (using Hooks)
* **Styling:** Plain CSS3 with Flexbox and Grid
* **Language:** JavaScript (ES6+)
* **Package Manager:** npm

## Live Data Source

This application fetches live data directly from the We Want Waste API endpoint:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft


The application is built to handle the specific JSON data structure returned by this endpoint, including performing necessary transformations and price calculations on the client-side.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/moodabdallaoui/testReact.git](https://github.com/moodabdallaoui/testReact.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd testReact
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the application:**
    ```sh
    npm start
    ```
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload automatically when you make edits.

## Project Structure

The project follows a standard `create-react-app` structure with a focus on component-based architecture.

testReact/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SkipSelectionStep.js
│   │   ├── SkipCard.js
│   │   ├── DetailsStep.js
│   │   └── ConfirmationStep.js
│   ├── App.js                 # Main application component (Wizard logic)
│   ├── styles.css             # All application styles
│   └── index.js               # Entry point
└── package.json


### Component Breakdown

* `App.js`: The main parent component. It holds the application state and controls the wizard's flow between steps.
* `SkipSelectionStep.js`: Fetches data from the API, transforms it into a usable format, and renders the grid of available skips.
* `SkipCard.js`: A reusable component that displays a single skip option with its details, price, and selection button.
* `DetailsStep.js`: Contains the form for Step 2, where users provide waste type, placement details, and a delivery date. Features custom-styled interactive radio toggles.
* `ConfirmationStep.js`: The final step that displays a summary of the user's order details for final review.
