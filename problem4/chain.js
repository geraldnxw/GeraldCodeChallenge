// Use it when in .html file
<script
  src="https://cdn.ethers.io/lib/ethers-5.0.umd.min.js"
  type="application/javascript"
></script>


//Interacting with smart contract
// For simplicity, only keep balanceof and transfer
const ERC20TransferABI = [
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ]

  // One of the addresses to look up
  const DAI_ADDRESS = "0x123d475e13aa54a43a7421d94caa4459da021c77"

//instantiate smart contract
const web3 = new Web3("http://localhost:8545")

const daiToken = new web3.eth.Contract(ERC20TransferABI, DAI_ADDRESS)

// set up 2 addresses
//1 unlocked that will send it
const senderAddress = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c"
//1 will receive the transfer
// const receiverAddress = "0x19dE91Af973F404EDF5B4c093983a7c6E3EC8ccE"

//Access smart contract methods by using call function
daiToken.methods.balanceOf(senderAddress).call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    console.log("The balance is: ", res)
  })
  

