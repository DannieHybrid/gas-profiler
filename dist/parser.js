export function extractGasUsage(output) {
    const regex = /Gas used:\s+(\d+)/gi;
    const matches = [...output.matchAll(regex)];
    return matches.map((m) => parseInt(m[1], 10));
}
