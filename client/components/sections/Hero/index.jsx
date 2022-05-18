import React from 'react';
import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import WalletBalance from '../../../components/WalletBalance';

function index() {
	const [released, setReleased] = useState(false);
	const [mintedNFT, setMintedNFT] = useState(null);
	const [miningStatus, setMiningStatus] = useState(null);
	const [loadingState, setLoadingState] = useState(0);
	const [txError, setTxError] = useState(null);
	const [currentAccount, setCurrentAccount] = useState('');
	const [correctNetwork, setCorrectNetwork] = useState(false);

	useEffect(() => {
		checkIfWalletIsConnected();
		checkCorrectNetwork();
	}, []);

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window
		if (ethereum) {
			console.log('Got the ethereum obejct: ', ethereum)


			const accounts = await ethereum.request({ method: 'eth_accounts' })

			if (accounts.length !== 0) {
				setCurrentAccount(accounts[0]);
			} else {
				console.log('No authorized account found')
			}
		}
	}

	const [totalMinted, setTotalMinted] = useState(0);
	const getCount = async () => {
		const provider = new ethers.providers.Web3Provider(ethereum)
		const signer = provider.getSigner()
		const contract = new ethers.Contract(contractAddress, TestToken.abi, signer);
		const count = await contract.count();
		console.log('count', parseInt(count));
		setTotalMinted(parseInt(count));
	};

	const mintToken = async () => {
		try {

			const { ethereum } = window;
			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const contract = new ethers.Contract(contractAddress, TestToken.abi, signer);
				const connection = contract.connect(signer);
				const addr = connection.address;
				const result = await contract.payToMint(addr, metadataURI, {
					value: ethers.utils.parseEther('0.05'),
				});

				await result.wait();
				getMintedStatus();
				getCount();
			}

		} catch (e) {
			// throw (e.message);
			console.log(e)
		}
	};


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

			console.log('Found account', accounts[0])
			setCurrentAccount(accounts[0])
		} catch (error) {
			console.log('Error connecting to metamask', error)
		}
	}

	const checkCorrectNetwork = async () => {
		const { ethereum } = window;
		if(ethereum){
			let chainId = await ethereum.request({ method: 'eth_chainId' });
			const rinkebyChainId = '0x4'
	
			if (chainId !== rinkebyChainId) {
				setCorrectNetwork(false)
			} else {
				setCorrectNetwork(true)
			}
		}
	}

	// Creates transaction to mint NFT on clicking Mint Character button
	const mintCharacter = async () => {
		const { ethereum } = window;
		if (ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum)
			const signer = provider.getSigner()
			const contract = new ethers.Contract(contractAddress, TestToken.abi, signer);
			const connection = contract.connect(signer);
			const addr = connection.address;
			const result = await contract.payToMint(addr, metadataURI, {
				value: ethers.utils.parseEther('0.05'),
			});

			await result.wait();
			getMintedStatus();
			getCount();
		} else {
			console.log('mint')
			
		}
	}

	return (
		<div>
			<div className={styles.sun}></div>
			<div className={styles.cloud}></div>
			<div className={styles.cloud}></div>
			<div className={styles.hotAirBaloon}>
				<div className={styles.balloon}><span></span></div>
				<div className={styles.basket}></div>
			</div>
			<div className="max p-3 py-6 mx-auto bg-[#f1c232] rounded-3xl md:p-6 mt-[230px]">
				{correctNetwork ? (
					<>
						<div>
							<div className="text-center text-white">
								<h1 className="mb-4 text-5xl font-bold uppercase font-futura-bold md:my-8">
									<span className="md:text-7xl">Dream with us.</span></h1>
								<p className=" px-2 py-1 text-base font-bold  md:text-3xl bg-coral-600 decoration-clone md:px-3 bg-[#d7a713] leading-loose">Hopefully we get to the moon in this balloon.</p></div><div className="h-8 md:h-8"></div>
							<div className="flex flex-col items-center justify-center md:flex-row md:text-lg md:space-x-2 md:space-y-0 space-y-2">
								<button className="btn btn-primary" onClick={mintToken}>
									Mint
								</button>
							</div>
							<div className="max-w-xl p-3 py-6 mx-auto bg-coral-400 rounded-3xl md:p-6">
								<div className="text-center text-white">
									<h1 className="mb-4 text-5xl font-bold uppercase font-futura-bold md:my-8"><span className="md:text-7xl">{totalMinted}/5000</span><br />minted</h1>
									{/* <span className="px-2 py-1 text-base font-bold uppercase font-futura-bold md:text-3xl bg-coral-600 decoration-clone md:px-3">
										SOLD OUT<br />Thank you all
									</span> */}
									<span className="px-2 py-1 text-base font-bold uppercase font-futura-bold md:text-3xl bg-coral-600 decoration-clone md:px-3">
										Mint Your NFT
									</span>
								</div>
								<div className="h-8 md:h-8">
								</div><div className="flex flex-col items-center justify-center md:flex-row md:text-lg md:space-x-2 md:space-y-0 space-y-2">
									<button className="space-x-2 uppercase justify-center btn py-3 px-10 bg-black text-white rounded-xl w-full md:w-auto" onClick={mintToken}>Mint</button>
									{/* <a href="https://opensea.io/" className="space-x-2 uppercase justify-center btn py-3 px-10 bg-black text-white rounded-xl w-full md:w-auto">Shop on OpenSea</a> */}
									{/* <a href="https://discord.gg/rndm" className="space-x-2 uppercase justify-center btn py-3 px-10 bg-black text-white rounded-xl w-full md:w-auto">Join the Discord</a> */}
								</div>
							</div>
						</div>
					</>
				) : (
					<div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
						<div>----------------------------------------</div>
						<div>Please connect to the Rinkeby Testnet</div>
						<div>and reload the page</div>
						<div>----------------------------------------</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default index
