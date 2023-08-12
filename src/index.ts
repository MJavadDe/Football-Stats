import fs from 'fs'
import { CsvFileReader } from "./CsvFileReader";
import { MatchDetails } from "./CsvFileReader";
import { log } from "console";


class Analyse {
  winPer: number = 0;

  constructor(public team: string, public data: MatchDetails[]) { }
  
  get winRatio(): string{

    let quan = 0;
    this.data.map(stat => {
      if (stat[1] === this.team && stat[5] === "H" ||stat[2] === this.team && stat[5] === "A" ) {
        quan++;
      }
    })
    
    return `${this.team} has won ${Math.round((quan * 100) / 38) + "%"} of their games this season`
    }

} 



  


