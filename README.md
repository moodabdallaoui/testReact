# Skip Hire Ordering Wizard

A modern, responsive, and user-friendly single-page application for ordering skips. This project is a complete redesign of an existing ordering page, focusing on clean UI/UX, maintainable component-based architecture, and a seamless mobile-first experience.

---

## Description

This application provides a multi-step wizard to guide users through the process of hiring a skip. It begins by fetching available skip sizes and prices from a live API, allows the user to make a selection, provide delivery details, and finally confirm their order. The entire interface uses a sleek dark theme for a modern look and feel.

**Project goals:**

- Create a visually distinct, appealing UI from the original.
- Write clean, reusable, and maintainable React code.
- Ensure full responsiveness across devices.
- Improve UX by transforming a complex form into a step-by-step flow.

---

## Features

- **Multi-Step Wizard Flow** – Choose Skip, Provide Details, Confirm.
- **Live API Integration** – Dynamically fetches skip data and pricing.
- **Real-Time Price Calculation** – Uses `price_before_vat` and `vat` to compute final totals.
- **Interactive UI** – Custom cards and styled inputs enhance usability.
- **Live Order Summary** – Persistent summary updates as user navigates.
- **Mobile-First Design** – Fully responsive across screen sizes.
- **Dark Theme** – Consistent dark styling across all components.

---

## Tech Stack

- **Frontend:** React.js (Hooks)
- **Styling:** CSS3 (Flexbox, Grid)
- **Language:** JavaScript (ES6+)
- **Package Manager:** npm

---

## Live Data Source

This app uses the [We Want Waste API](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft) to fetch live skip data by location.

---

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (includes npm).

### Setup

```bash
git clone https://github.com/moodabdallaoui/testReact.git
cd testReact
npm install
npm start
```

Then visit [http://localhost:3000](http://localhost:3000).

---

## Project Structure

The project follows the standard `create-react-app` layout with a modular, component-based architecture.

```
testReact/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SkipSelectionStep.js     # Step 1: Choose skip
│   │   ├── SkipCard.js              # Reusable skip display component
│   │   ├── DetailsStep.js           # Step 2: Enter details
│   │   └── ConfirmationStep.js      # Step 3: Review & confirm
│   ├── App.js                       # Main application component (wizard logic)
│   ├── styles.css                   # Application-wide styles
│   └── index.js                     # React entry point
└── package.json
```

---

## Component Breakdown

- **`App.js`** – Root component managing state and navigation between steps.
- **`SkipSelectionStep.js`** – Fetches and renders available skips.
- **`SkipCard.js`** – Displays a single skip's size, price, and selection option.
- **`DetailsStep.js`** – Gathers user delivery info with interactive form inputs.
- **`ConfirmationStep.js`** – Final order summary for confirmation.

---