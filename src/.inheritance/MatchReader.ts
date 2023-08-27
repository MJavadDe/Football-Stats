import { CsvFileReader, MatchDetails } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringtoDate } from "./utils";

export class MatchReader extends CsvFileReader<MatchDetails> {

  mapRow(item: string[]): MatchDetails {
       return [
        dateStringtoDate(item[0]),
        item[1],
        item[2],
        parseInt(item[3]),
        parseInt(item[4]),
        item[5] as MatchResult,
        item[6]
      ]
  }
} 