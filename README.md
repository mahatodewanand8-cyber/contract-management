Contract Management Platform (React + TypeScript)

A lightweight Contract Management System built using React and TypeScript. The application allows users to create blueprints, generate contracts, manage contract status, and revoke contracts back to a pending state using centralized state management.

Overview

This project demonstrates the use of React Context API and the useReducer hook to manage global application state. All business logic is encapsulated inside the context layer, ensuring clean separation of concerns and maintainable code architecture.

Features

Create and manage contract blueprints
Generate contracts based on selected blueprints
View all contracts in a centralized dashboard
Revoke contracts and update their status to pending
Centralized state management using Context API
Client-side application with no backend dependency
Technology Stack
Frontend: React
Language: TypeScript
State Management: Context API with useReducer
Styling: CSS
Version Control: Git and GitHub
Project Structure
Copy code

contract-management/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── blueprint/
│   │   │   └── BlueprintForm.tsx
│   │   ├── contract/
│   │   │   └── ContractForm.tsx
│   │   └── dashboard/
│   │       └── ContractTable.tsx
│   │
│   ├── context/
│   │   └── ContractContext.tsx
│   │
│   ├── models/
│   │   └── types.ts
│   │
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
└── README.md
Installation and Setup
Clone the Repository
Copy code
Bash
git clone https://github.com/<your-username>/contract-management.git
Navigate to Project Directory
Copy code
Bash
cd contract-management
Install Dependencies
Copy code
Bash
npm install
Run the Application
Copy code
Bash
npm start
The application will be available at:
Copy code

http://localhost:3000
State Management Design
The application uses a centralized Contract Context for managing global state.
useReducer handles all state transitions
Context exposes domain-specific functions instead of dispatch
UI components interact with state through custom hooks only
Example:
Copy code
Ts
revokeContract(contractId);
Contract Status Flow
Action
Resulting Status
Generate Contract
CREATED
Revoke Contract
PENDING
Deployment on GitHub Pages

Install Deployment Dependency

npm install gh-pages --save-dev

Update package.json


Json
"homepage": "https://<your-username>.github.io/contract-management",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

Deploy Application


npm run deploy
The application will be accessible at:


https://<mahatodewanand8-cyber>.github.io/contract-management
Future Enhancements
Contract approval and locking workflow
Contract expiration and renewal tracking
Authentication and authorization
Backend integration using Node.js or Firebase
Search, filtering, and analytics dashboard