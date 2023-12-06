This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

# Inco PaySmart :  Decentralized Freelancer / Agent Escrow platform

## Introduction

A new and secure way to get paid for freelancing through an agent escrow contract using fully homomorphic encryption (FHE) . Try it out!.

This is an escrow module for freelancer service operated by agents. The sender deposit money for recipient and set agent for the payment. If the sender want to release the payment, then he can ask the agent to release the payment for the recipient.

Deployer will set the owner fee percent and agent fee percent. The fee percent and cancelLockTime are fixed values.

## Web 3.0 technologies Used

Frontend: NextJS, postcss, tailwindcss, Theme
web3 technologies: Web3 Modal, metamask wallet, Hardhat,  XMTP
Backend: Solidity + TFHE, Node.js, EncryptedERC20 Module

Blockchain: Inco Network

Project initiated and created for Inco - Hackathon 2023:  

## Description

This project was made using several technologies. The front-end was designed using a server-side-rendering javascript tech known as NextJS. the latest version of Next was used because of how fast it was to build the project.  
A user can creates a new pool by clicking either of the following

1. Add Pool (Native) MATIC or
2. Add Pool (ERC20) PST Token Mint PST Token.

When you create a pool a pool with the PST token, you have to approve the contract to spend the PST token on your behalf before transferring token to the smart contract.

Once deal is completed, the agent releases token to the receiver and get its percentage.

If you do not have the PaySmart (PST) Token, you can mint it by clicking on Mint PST Token.
The entire project demo was deployed to Vercel

## Live DApp hosted on

Live Dapp on Vercel: - <https://paysmart.vercel.app/>

## Deployed Contract addresses

screwAddress = "0x8204861156bedE45f0aBaaf2bB752D702FCbF23A"
https://Inco.polygonscan.com/address/0x8204861156bedE45f0aBaaf2bB752D702FCbF23A
tokenAddress = "0x10Eb05edeA0F1d0dB7907d23541607F07CC6c35E"
https://Inco.polygonscan.com/address/0x10Eb05edeA0F1d0dB7907d23541607F07CC6c35E

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Connect with me and send me a mail

E-mail - holyaustin@yahoo.com

stay connected on twitter @holyaustin

erc20
<https://Inco.polygonscan.com/address/0x10Eb05edeA0F1d0dB7907d23541607F07CC6c35E>

escrow
<https://Inco.polygonscan.com/address/0x8204861156bedE45f0aBaaf2bB752D702FCbF23A>
