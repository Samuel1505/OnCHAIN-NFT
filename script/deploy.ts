import { ethers } from "hardhat";

const main = async () => {
    // Get 'OnChainNFT' contract
    const nftContractFactory = await ethers.getContractFactory("OnChainNFT");

    // Deploy contract
    const nftContract = await nftContractFactory.deploy();
    await nftContract.waitForDeployment();
    console.log("✅ Contract deployed to:", await nftContract.getAddress());

    // SVG image that you want to mint
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1024' height='1024'>
        <defs><clipPath id='a'><path d='M0 0h1024v1024H0z'/></clipPath></defs>
        <g clip-path='url(#a)'>
          <path d='M0 0h1024v1024H0z'/>
          <path fill='#fff' d='M0 241h1024v20H0zM0 502h1024v20H0zM0 763h1024v20H0z'/>
          <path fill='#fff' d='M241 0h20v1024h-20z'/>
        </g>
      </svg>`;

    // Call the mint function from our contract
    const txn = await nftContract.mint(svg);
    const txnReceipt = await txn.wait();

    // Get the token id of the minted NFT (using our event)
    const event = txnReceipt.logs.find((log) => log.event === "Minted");
    const tokenId = event?.args?.tokenId;

    console.log(
        "🎨 Your minted NFT:",
        `https://testnets.opensea.io/assets/${await nftContract.getAddress()}/${tokenId}`
    );
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();
