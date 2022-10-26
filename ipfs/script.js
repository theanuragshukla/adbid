const img = document.getElementById("img")

  const abi =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "bid",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCid",
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
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "price",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_newcid",
          "type": "string"
        }
      ],
      "name": "setCid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tempOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
const contractAddress = "0x6E218FC10d5CF88202F0a2eA3700204e012f9E4f"
const connectWallet = async () => {
	try {
		const { ethereum } = window

		if (!ethereum) {
			console.log('Metamask not detected')
			return
		}
		let chainId = await ethereum.request({ method: 'eth_chainId'})
		console.log('Connected to chain:' + chainId)

		const goerliChainId = '0x5'

		if (chainId !== goerliChainId) {
			alert('You are not connected to the goerli Testnet!')
			return
		} else {
	//		setCorrectNetwork(true);
		}

		const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

		console.log('Found account', accounts[0])
	//	setUser({
	//		connected:true,
	//		address:accounts[0]
	//	})

	//	setCurrentAccount(accounts[0])
	} catch (error) {
	//	setUser({
	//		connected:false,
	//	})

		console.log('Error connecting to metamask', error)
	}
}  

const connectcontract =async () => {
	try {
		const {ethereum} = window

		if(ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				contractAddress,
				abi,
				signer
			)

			await contract.price()
				.then(response => {
					console.log(price);
				})
				.catch(err => {
					console.log("Error occured");
				});

//			console.log(contract)
		} else {
			console.log("Ethereum object doesn't exist!");
		}
	} catch(error) {
		console.log( error);
	}

}
onload = () =>{
//	connectcontract()
}
