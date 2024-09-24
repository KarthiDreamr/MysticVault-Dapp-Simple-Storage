import Web3 from 'web3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load ABI from the JSON file
const abiPath = path.resolve(__dirname, '../artifacts/contracts/SimpleStorage.sol/SimpleStorage.json');
const abiFile = JSON.parse(fs.readFileSync(abiPath, 'utf-8'));
const contractABI = abiFile.abi;

console.log(contractABI);

// Contract address (replace with your deployed address)
const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

const main = async () => {
  try {
    console.log("Setting up Web3 provider...");

    // Initialize Web3 with your provider (e.g., local node)
    const web3 = new Web3('http://localhost:8545'); // Update if using a different provider

    console.log("Fetching accounts...");
    const accounts = await web3.eth.getAccounts();
    console.log("Available Accounts:", accounts);

    if (accounts.length === 0) {
      throw new Error("No accounts available. Ensure your node has unlocked accounts.");
    }

    console.log("Creating contract instance...");
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    console.log(`Contract deployed at: ${contract.options.address}`);

    console.log("Calling setSecretSpell()...");
    const receipt = await contract.methods.setSecretSpell("Hello, Mystic Vault!").send({ from: accounts[0], gas: 300000 });
    console.log("Transaction successful with receipt:", receipt);

    console.log("Calling getSecretSpell()...");
    const data = await contract.methods.getSecretSpell().call({ from: accounts[0] });
    console.log("Data retrieved from contract:", data);

    // Example: Setting new data (uncomment if needed)
    /*
    const newData = "Hello, Mystic Vault!";
    console.log(`Sending transaction to setData("${newData}")...`);
    const receipt = await contract.methods.setData(newData).send({ from: accounts[0], gas: 300000 });
    console.log("Transaction successful with receipt:", receipt);

    // Verify the update
    const updatedData = await contract.methods.getData().call({ from: accounts[0] });
    console.log("Updated Data:", updatedData);
    */

  } catch (error) {
    console.error("An error occurred during contract interaction:", error);
  }
};

main();