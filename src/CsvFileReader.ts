import fs from 'fs'
import { dateStringtoDate } from "./utils";
import { MatchResult } from "./MatchResult";



export type MatchDetails = [Date, string,string,number,number,MatchResult,string];



export class CsvFileReader {

  data: MatchDetails[] =[];

  constructor(public fileName: string) {
    
  }
  get read() {
    this.data = fs.readFileSync(this.fileName, {
      encoding:"utf-8"
    }).split("\n").map((item) => {
      return item.split(",")
    }).map((item: string[]): MatchDetails => {
      return [
        dateStringtoDate(item[0]),
        item[1],
        item[2],
        parseInt(item[3]),
        parseInt(item[4]),
        item[5] as MatchResult,
        item[6]
      ]
    })
    return this.data
  }

}
