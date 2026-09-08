node <<'EOF'
const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider(process.env.RPC);
const wallet = new ethers.Wallet(process.env.PK, provider);

(async () => {
  const tx = await wallet.sendTransaction({
    to: process.env.TO,
    value: ethers.parseEther("0.999")
  });
  console.log(tx.hash);
})();
EOF
