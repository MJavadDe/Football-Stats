import { CsvFileReader } from "../CsvFileReader";
import { MatchDetails } from "../MatchDetails";
import { MatchReader } from "../MatchReader";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";


export class WinsAnalysis implements Analyzer {


  constructor(private team:string){}

  run(matches : MatchDetails[]):string {
    

    
    let wins = 0
    matches.map(match => {
      if ((match[1] === this.team && match[5] === MatchResult.homeWin) || (match[2] === this.team && match[5] === MatchResult.awayWin)) {
        wins++;
      }
      
    })
    
    return `${this.team} has one ${wins} games this season`

  }


}
