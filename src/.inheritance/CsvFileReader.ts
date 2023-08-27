import fs from 'fs'
import { dateStringtoDate } from "./utils";
import { MatchResult } from "./MatchResult";



export type MatchDetails = [Date, string,string,number,number,MatchResult,string];



export abstract class CsvFileReader<Type> {

  data: Type[]= [];
  
  constructor(public fileName: string) {
    
  }
  abstract mapRow(item: string[]): Type;


  read() {
    this.data = fs.readFileSync(this.fileName, {
      encoding: "utf-8"
    }).split("\n").map((item) => {
      return item.split(",")
    }).map(this.mapRow)
  }

 
}


