#!/usr/bin/env node
import { Command } from "commander";
import { runHardhatTests } from "./runner.js"; // <-- ADD .js
import { extractGasUsage } from "./parser.js"; // <-- ADD .js
import chalk from "chalk";

const program = new Command();

program
  .name("gas-profiler")
  .description("Run Hardhat tests and report gas usage")
  .argument("<projectPath>", "Path to the Hardhat project")
  .action(async (projectPath) => {
    console.log(chalk.cyan(`🔍 Running tests in ${projectPath}`));

    try {
      const output = await runHardhatTests(projectPath);
      const gasUsed = extractGasUsage(output);

      console.log(chalk.green(`\n✅ Gas Report:`));
      gasUsed.forEach((entry, i) => {
        console.log(`  #${i + 1}: ${entry} gas`);
      });

      const total = gasUsed.reduce((a, b) => a + b, 0);
      const avg = total / gasUsed.length;

      console.log(chalk.yellow(`\n📊 Total Gas: ${total}`));
      console.log(chalk.yellow(`📉 Average Gas: ${Math.round(avg)}`));
    } catch (e) {
      console.error(chalk.red("❌ Failed to run gas profiler:"), e);
    }
  });

program.parse();
