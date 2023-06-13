import type { IAuthor } from "./IAuthor";

export interface IResearch {
  order: number,
  title: string,
  date: string,
  sourceLink?: string,
  downloadLink?: string,
  for: string,
  bib: string,
  extra?: string,
  authors: Array<string | IAuthor>
}