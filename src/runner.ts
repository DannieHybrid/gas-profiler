import { execa } from "execa";

export async function runHardhatTests(projectPath: string): Promise<string> {
  const { stdout } = await execa("npx", ["hardhat", "test"], {
    cwd: projectPath,
    all: true,
  });
  return stdout;
}
