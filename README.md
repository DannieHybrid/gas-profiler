# ⚡️ gas-profiler

**`gas-profiler`** is a simple CLI tool that runs Hardhat tests and extracts gas usage from the output — helping smart contract engineers understand and optimize gas consumption during development.

---

## 🚀 Features

- 🔍 Runs Hardhat test suite inside any target Hardhat project.
- 📊 Parses and displays total and average gas used.
- ✅ Works with local-only setups — no Sepolia or .env needed.
- 💬 Friendly CLI with color-coded output.

---

## 📦 Installation

```bash
npm install -g gas-profiler
Or use it directly with npx:

bash
Copy
Edit
npx gas-profiler ../my-hardhat-project
🧪 Usage
Basic
bash
Copy
Edit
gas-profiler <project-path>
<project-path> is the relative path to the Hardhat project you want to profile.

Example:

bash
Copy
Edit
npx gas-profiler ../oracle-verifier
📂 Example Output
bash
Copy
Edit
🔍 Running tests in ../oracle-verifier

✅ Gas Report:
  #1: 105134 gas
  #2: 88234 gas
  #3: 121443 gas

📊 Total Gas: 314811
📉 Average Gas: 104937
🧠 How It Works
Spawns npx hardhat test inside the target project.

Collects the stdout output.

Extracts gas usage lines using regex.

Computes total and average values.

🛠 Requirements
Node.js v18+

The target project must be a Hardhat project with working tests

No need for .env or deployment configs

🔧 Development
Clone and link locally
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/gas-profiler.git
cd gas-profiler
npm install
npm run build
npm link
Now you can run it globally with:

bash
Copy
Edit
gas-profiler ../oracle-verifier
🔍 Project Structure
pgsql
Copy
Edit
gas-profiler/
├── dist/               # Compiled JS output
├── src/
│   ├── index.ts        # CLI entry point
│   ├── runner.ts       # Runs Hardhat tests using execa
│   └── parser.ts       # Parses gas usage from output
├── package.json
├── tsconfig.json
└── README.md
🧪 Sample Target Hardhat Config
The target Hardhat repo (like oracle-verifier) can use a basic config like:

ts
Copy
Edit
// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

export default config;
📄 License
MIT ©
