
var contractABI = [
  {
    "inputs": [],
    "name": "getSecretSpell",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_data",
        "type": "string"
      }
    ],
    "name": "setSecretSpell",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

console.log("contractABI", contractABI);

const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'; // Replace with your contract's address

// Function to display notifications
function showNotification(message, isSuccess = true) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.backgroundColor = isSuccess ? 'rgba(46, 204, 113, 0.9)' : 'rgba(231, 76, 60, 0.9)';
    notification.classList.add('show');
    
    // Animate the notification
    animateCSS('#notification', 'fadeIn');
  
    // Hide after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
  
  // Function to show or hide the loading spinner
  function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
      loading.style.display = 'flex';
    } else {
      loading.style.display = 'none';
    }
  }
  
  // Function to add and remove animation classes
  function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add('magictime', animationName);
  
    function handleAnimationEnd() {
        node.classList.remove('magictime', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
  
        if (typeof callback === 'function') callback();
    }
  
    node.addEventListener('animationend', handleAnimationEnd);
  }
  
  // Initialize the DApp
  window.addEventListener('load', async () => {
    let web3;
    let accounts;
    let simpleStorage;
  
    // Modern dapp browsers...
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error("User denied account access");
        alert("Please allow access to your Ethereum wallet to use this DApp.");
        return;
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
      alert('No Ethereum wallet detected. Please install MetaMask, Brave Wallet, or use a compatible browser.');
      return;
    }
  
    // Instantiate the contract
    simpleStorage = new web3.eth.Contract(contractABI, contractAddress);
  
    // Get the user's accounts
    accounts = await web3.eth.getAccounts();
  
    // Handle Store Secret Spell
    document.getElementById('setData').onclick = async () => {
      const data = document.getElementById('inputData').value;
      if (data.trim() === "") {
        showNotification("Please enter a secret spell before storing.", false);
        return;
      }
      showLoading(true);
      try {
        await simpleStorage.methods.setSecretSpell(data).send({ from: accounts[0] });
        showLoading(false);
        showNotification('✨ Secret Spell Stored Successfully! ✨', true);
      } catch (error) {
        console.error(error);
        showLoading(false);
        showNotification('❌ Failed to Store Secret Spell.', false);
      }
    };
  
    // Handle Retrieve Secret Spell
    document.getElementById('getData').onclick = async () => {
      showLoading(true);
      try {
        const result = await simpleStorage.methods.getSecretSpell().call();
        document.getElementById('displayData').innerHTML = `<i class="fas fa-magic"></i> ${result}`;
        showLoading(false);
        showNotification('🔮 Secret Spell Retrieved Successfully! 🔮', true);
      } catch (error) {
        console.error(error);
        showLoading(false);
        showNotification('❌ Failed to Retrieve Secret Spell.', false);
      }
    };
  
    // Handle Clear Retrieved Spell
    document.getElementById('clearDisplay').onclick = () => {
      document.getElementById('displayData').innerHTML = `<i class="fas fa-magic"></i> Your secret spell will appear here...`;
      showNotification('🧹 Retrieved spell cleared.', true);
    };
  });