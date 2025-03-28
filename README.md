# On-Chain NFT Smart Contract

## Overview
The **OnChainNFT** contract enables the creation of SVG-based NFTs that are fully stored on-chain. It leverages the **Base64** encoding library to store metadata and images in a way that can be easily rendered by NFT marketplaces.

## Features
- **Fully On-Chain Storage**: The NFT metadata and SVG images are stored directly on the blockchain.
- **Base64 Encoding**: Encodes SVG images and metadata in a Base64 format for efficient on-chain storage.
- **ERC721 Compatibility**: Implements the ERC721 standard with metadata storage using `ERC721URIStorage`.
- **Minting Functionality**: Allows the contract owner to mint new NFTs with SVG images.

## Contracts
### 1. Base64.sol
A utility library that provides a function to encode data in Base64 format. Used to store SVG images and metadata as Base64 strings.

### 2. OnChainNFT.sol
This contract implements an ERC721 NFT with on-chain SVG storage.

#### Constructor
- `OnChainNFT()`: Initializes the contract with the name "OnChainNFT" and symbol "ONC".

#### Functions
- `svgToImageURI(string memory svg)`: Converts an SVG string into a Base64-encoded image URI.
- `formatTokenURI(string memory imageURI)`: Encodes metadata (name, description, image) into a Base64 JSON object.
- `mint(string memory svg)`: Mints a new NFT with the given SVG image and stores the metadata.

#### Events
- `Minted(uint256 tokenId)`: Emitted when a new NFT is minted.

## Deployment
### Steps to Deploy
1. Deploy `Base64.sol`.
2. Deploy `OnChainNFT.sol` with ERC721 and Ownable setup.
3. Call `mint()` with an SVG string to create an on-chain NFT.

## Security Considerations
- **Access Control**: Only the contract owner can mint NFTs to prevent unauthorized minting.
- **Immutability**: The contract is immutable once deployed, ensuring no modifications can be made.

## License
This project is licensed under the **MIT License**.

