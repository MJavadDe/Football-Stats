import { dateStringtoDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchDetails } from "./MatchDetails";
import { CsvFileReader } from "./CsvFileReader";


interface DataReader{
  read(): void;
  data:string[][]
}


export class MatchReader{

  static statciCsvReader(fileName:string):MatchReader {
    const file = new CsvFileReader(fileName)
    return new MatchReader(file)
  }


  matches: MatchDetails[] = []

  constructor(public reader: DataReader) { }
  
  load(): void{
    this.reader.read();
    this.matches = this.reader.data.map((item: string[]): MatchDetails => {
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
  }



  

}