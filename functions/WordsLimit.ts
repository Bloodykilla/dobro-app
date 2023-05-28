export function WordsLimit(text: string, limit: number) {
  return text.slice(0, limit).concat("...");
}
