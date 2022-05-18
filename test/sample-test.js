const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('HeadSpacers', async () => {
    it('should mint and transfer an NFT to someone', async function () {
        const HeadSpacers = await ethers.getContractFactory("HeadSpacers");
        const HeadSpacers = await HeadSpacers.deploy("HeadSpacers", "TT", "ipfs://");
        await HeadSpacers.deployed();

        const recipient = '0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199';
        const metadataURI = 'cid/test.png';

        let balance = await HeadSpacers.balanceOf(recipient);
        expect(balance).to.equal(0);

        const newlyMintedToken = await HeadSpacers.mint(recipient, 2, { value: ethers.utils.parseEther('0.05') });
        // wait until the transaction is mined
        await newlyMintedToken.wait();

        balance = await HeadSpacers.balanceOf(recipient)
        expect(balance).to.equal(2);

        // expect(await HeadSpacers.isContentOwned(metadataURI)).to.equal(true);
        // const newlyMintedToken2 = await HeadSpacers.payToMint(recipient, 'foo', { value: ethers.utils.parseEther('0.05') });
    });
})