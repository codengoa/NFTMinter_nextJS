import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import RoadMap from '../components/sections/RoadMap/RoadMap';
import Script from 'next/script';
import Founders from '../components/sections/Founders';
import { ethers } from 'ethers';
import WalletBalance from '../components/WalletBalance';
import FAQ from '../components/sections/FAQ';
import HeadSpacers from '../../artifacts/contracts/HeadSpacers.sol/HeadSpacers.json';
import Layout from "../components/layouts/Layout";
import Carousel from '../components/helpers/Carousel/Carousel';
import styles from './index.module.css';
import Stripe from '../components/helpers/Stripe/index';
import Title from '../components/Title';
import Hero from '../components/sections/Hero/index';
const contractAddress = '0x73b34231b5Dcd2a851D5Ce894a7E12fd62db7C0D';

function Home() {
	const contentId = 'Qmdbpbpy7fA99UkgusTiLhMWzyd3aETeCFrz7NpYaNi6zY';
	const [NFTImageList, _] = useState(Array.from(Array(8).keys()));

	return (
		<>
			<Head>
				<title>Invisee Minds</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<script type="text/javascript" src="/static/clouds.js" defer></script>

			</Head>

			<Layout>
				<div id="Clouds">
					<div class="Cloud Foreground"></div>
					<div class="Cloud Background"></div>
					<div class="Cloud Foreground"></div>
					<div class="Cloud Background"></div>
					<div class="Cloud Foreground"></div>
					<div class="Cloud Background"></div>
					<div class="Cloud Background"></div>
					<div class="Cloud Foreground"></div>
					<div class="Cloud Background"></div>
					<div class="Cloud Background"></div>

				</div>
				{/* {correctNetwork ? (
					<> */}
				<section className={`w-full z-10  pb-12  bg-cover bg-no-repeat ${styles.Index}`} id="Story">
					<div className="container p-3 py-6 mx-auto rounded-3xl md:p-6 flex sm:flex-col md:flex-row justify-center">
						<Hero />
						{/* <div className={`border-radius rounded-md border-2 border-color-grey basis-9/12 bg-white ${styles.Index__heroShadow}`}>
							<div className="text-black py-7 px-12 mh-12">
								<h1 className={`font-bold text-5xl text-sans-serif `}>Invisee Minds</h1>
								<p className="text-3xl mb-5">coming to a metaverse near you.</p>
								<p className="mb-5">The potential for creativity is endless with 9,999 unique NFTs on the Ethereum Blockchain. Whether you're making art or just trying to live a better life-invissee minds have got your back!
								</p>
								<h1 className="mb-4 text-5xl font-bold uppercase font-futura-bold md:my-8">
									<span className="md:text-7xl">{totalMinted}/5000</span>
									<br />minted</h1>
								<div>
									<button className="space-x-2 uppercase justify-center btn py-3 px-10 bg-black text-white rounded-xl w-full md:w-auto" onClick={mintToken}>Mint</button>
								</div>
							</div>
						</div> */}

						{/* <div className="border-radius rounded-sm border-2 border-color-grey basis-5/12 flex justify-end"> */}
						{/* <Carousel /> */}
						{/* </div> */}
						<div className={`flex flex-row justify-between ${styles.Index__imageWrapper}`}>
							{NFTImageList.map((item, i) => {
								item = "/assets/images/home-row/" + i + ".png";
								return (
									<div className={styles.Index__imageItem}>
										<Image
											src={item}
											alt="Invisible Friend NFT"
											width="100%"
											height="100%"
											layout="responsive"
											objectFit="cover"
										/>
									</div>
								)
							})}
						</div>
					</div>
				</section>
				<Stripe></Stripe>
				<div className={styles.Index__gradientBg}>
					<section className="min-h-[50%] md:pb-12">
						<div className="p-3 mx-auto rounded-3xl md:p-6" id="RoadMap">
							<Title title="MINTING GIFTS" />
							<div className="text-white leading-10 md:max-w-5xl mx-auto">
								<ul className="text-center font-anek text-5xl">
									<li>FREE INVISEE T SHIRTS TO WALLETS THAT MINT ON LAUNCH DAY</li>
								</ul>
							</div>
						</div>

						<div className="p-3 mx-auto rounded-3xl md:p-6" id="RoadMap">
							<Title title="HOLDING GIFTS" />
							<div className="text-white leading-10 md:max-w-5xl mx-auto">
								<ul className="text-center font-anek text-5xl">
									<li className="leading-relaxed">AIR DROP $INVISEE COIN</li>
									<li className="leading-relaxed">HELP US GROW WITH $DAO VOTING POWER </li>
									<li className="leading-relaxed">EXCLUSIVE ACCESS TO PRIVATE DISCORD</li>
									<li className="leading-relaxed">ACCESS TO "XPLOR". THE METAVERSE TO EXPLORE</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="min-h-[50%] md:pb-12">
						<div>
							<RoadMap id="RoadMap" />
						</div>
					</section>
				</div>
				{/* 
				<section className="min-h-screen   bg-[#1940fc] md:pb-12">
					<Founders />
				</section>
				<section className="min-h-screen  bg-[#76f6f1] md:pb-12">
					<FAQ />
				</section> */}
				{/* </> */}
				{/* ) : (
					<div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
						<div>----------------------------------------</div>
						<div>Please connect to the Rinkeby Testnet</div>
						<div>and reload the page</div>
						<div>----------------------------------------</div>
					</div>
				)} */}
			</Layout >
		</>
	);
}

export default Home;