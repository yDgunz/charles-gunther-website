const NUMERALS: [number, string][] = [
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
]

/** 1 → I, 4 → IV, 20 → XX. Plates are numbered the old-fashioned way. */
export function roman(n: number): string {
  let out = ''
  for (const [value, numeral] of NUMERALS) {
    while (n >= value) {
      out += numeral
      n -= value
    }
  }
  return out
}
