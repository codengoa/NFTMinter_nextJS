import React from 'react';
import { useState, useEffect } from 'react'

function Connect() {
	const [currentAccount, setCurrentAccount] = useState('');
	const [correctNetwork, setCorrectNetwork] = useState(false);
	const [loadingState, setLoadingState] = useState(0)
	const [txError, setTxError] = useState(null);
	const [label, setLabel] = useState(null);

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (ethereum) {
			console.log('Got the ethereum obejct: ', ethereum);
		} else {
			return setCorrectNetwork(false);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });
		if (accounts[0]) {
			const tempLabel = accounts[0].substring(0, 5) + '...' + accounts[0].slice(accounts[0].length - 3);
			setLabel(tempLabel);
		}

		if (accounts.length !== 0) {
			console.log('Found authorized Account: ', accounts[0]);
			setCurrentAccount(label);
		} else {
			console.log('No authorized account found')
		}
	}

	const connectWallet = async () => {
		try {
			const { ethereum } = window

			if (!ethereum) {
				console.log('Metamask not detected')
				return
			}
			let chainId = await ethereum.request({ method: 'eth_chainId' })
			console.log('Connected to chain:' + chainId)

			const rinkebyChainId = '0x4'

			if (chainId !== rinkebyChainId) {
				alert('You are not connected to the Rinkeby Testnet!')
				return
			}

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
			const label = accounts[0].substring(0, 5) + '...' + accounts[0].slice(accounts[0].length - 3);
			setCurrentAccount(label)
		} catch (error) {
			console.log('Error connecting to metamask', error)
		}
	}

	const checkCorrectNetwork = async () => {
		const { ethereum } = window;
		if(ethereum){
			let chainId = await ethereum.request({ method: 'eth_chainId' })
			const rinkebyChainId = '0x4';
			console.log('Connected to chain:' + chainId)
	
			if (chainId !== rinkebyChainId) {
				setCorrectNetwork(false)
			} else {
				setCorrectNetwork(true)
			}
		}
	}

	useEffect(() => {
		checkIfWalletIsConnected();
		checkCorrectNetwork();
	}, []);

	return (
		<div>
			{currentAccount === '' ? (
				<button
					className="bg-[#f1c232] rounded-lg py-3 px-5 shadow-sm font-bold text-black"
					onClick={connectWallet}
				>
					Connect Wallet
				</button>
			) : correctNetwork ? (
				<div className="bg-[#f1c232] rounded-lg py-3 px-5 shadow-sm font-bold text-black">{currentAccount}</div>

			) : (
				<div>
					<p>Please connect to the Rinkeby Testnet and reload the page</p>
				</div>
			)}
		</div>
	)
}

export default Connect
