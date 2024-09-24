# Mystic Vault

<!-- ![Mystic Vault Banner](frontend/banner.png) -->

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**Mystic Vault** is a decentralized application (DApp) that allows users to store and retrieve a "secret spell" on the Ethereum blockchain. Leveraging the power of Hardhat for smart contract development and Web3.js for frontend interactions, Mystic Vault offers a seamless experience for managing your mystical secrets in a secure and transparent manner.

## Features

- **Store Secret Spell:** Save your secret spell securely on the blockchain.
- **Retrieve Secret Spell:** Fetch and view your stored secret spell anytime.
- **Clear Display:** Remove the displayed secret spell from the frontend interface.
- **Loading Indicators & Notifications:** Receive real-time feedback on your actions.
- **Responsive Design:** Access Mystic Vault from any device with ease.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Installed on your machine. [Download Node.js](https://nodejs.org/)
- **npm:** Comes bundled with Node.js.
- **MetaMask:** Browser extension for interacting with the Ethereum network. [Install MetaMask](https://metamask.io/)
- **Hardhat:** Ethereum development environment. Installation steps are included below.

## Installation

Follow these steps to set up **Mystic Vault** on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mysticvault.git
cd mysticvault
```

### 2. Install Dependencies

Navigate to the project directory and install the required npm packages.

```bash
npm install
```

### 3. Configure Hardhat

Ensure that the Hardhat configuration is set correctly in `hardhat.config.js`. The default configuration uses the local Hardhat network with `chainId` 1337.

```javascript
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");

module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};
```

## Running the Project

### Backend Setup

1. **Start a Local Ethereum Node:**

   Use Hardhat to spin up a local Ethereum node.

   ```bash
   npx hardhat node
   ```

2. **Deploy the Smart Contract:**

   Open a new terminal window and run the deployment script using Hardhat Ignition.

   ```bash
   npx hardhat ignition deploy ./ignition/modules/SimpleStorage.js --network localhost
   ```

   This will deploy the `SimpleStorage` contract to your local node.

### Frontend Setup

 1\. **Serve the Frontend**

In the `frontend` directory, start a simple HTTP server:

```bash
cd frontend
npx http-server . -c-1 -p 8080
```

press 'y' for package installation if asked

Navigate to `http://localhost:8080` in your browser.

## Usage

1. **Connect MetaMask to Local Network:**

   - Open MetaMask in your browser.
   - Add a new network with the following details:
     - **Network Name:** Localhost 1337
     - **RPC URL:** `http://localhost:8545`
     - **Chain ID:** `1337`
   - Switch to the newly added network.

2. **Interact with Mystic Vault:**

   - **Store Secret Spell:**
     - Enter your secret spell in the input field.
     - Click the "Store Spell" button.
     - Confirm the transaction in MetaMask.
     - Receive a success notification upon completion.

   - **Retrieve Secret Spell:**
     - Click the "Retrieve Secret Spell" button.
     - View your stored secret spell in the display area.
     - Receive a success notification upon retrieval.

   - **Clear Display:**
     - Click the "Clear" button to remove the displayed secret spell from the interface.
     - Receive a confirmation notification.

## Scripts

The project includes several npm scripts to streamline development tasks.

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start:frontend": "serve frontend",
  "deploy": "hardhat ignition deploy ./ignition/modules/SimpleStorage.js --network localhost"
}
```

- **Test:** Placeholder for running tests.
- **Start Frontend:** Serves the frontend using the `serve` package.
- **Deploy:** Deploys the smart contract to the local Hardhat network.

## Project Structure

```
mysticvault/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── contracts/
│   └── SimpleStorage.sol
├── ignition/
│   └── modules/
│       └── SimpleStorage.js
├── test/
│   └── debugInteract.js
├── scripts/
│   └── deploy.js
├── .gitignore
├── package.json
├── hardhat.config.js
└── README.md
```

- **frontend/**: Contains the frontend files using HTML, CSS, and JavaScript.
- **contracts/**: Smart contract written in Solidity.
- **ignition/**: Deployment modules managed by Hardhat Ignition.
- **test/**: Scripts for testing and interacting with the smart contract.
- **scripts/**: Deployment and utility scripts.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Lists project dependencies and scripts.
- **hardhat.config.js**: Configuration file for Hardhat.
- **README.md**: Project documentation.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**
2. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make Your Changes**
4. **Commit Your Changes**

   ```bash
   git commit -m "Add YourFeature"
   ```

5. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

6. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

---

*Powered by [Hardhat](https://hardhat.org/)*