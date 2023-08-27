import { MatchDetails } from "./MatchDetails"
import { HtmlReport } from "./reportTarget/HtmlReport"
import { WinsAnalysis } from "./Analyzers/WinAnalysis"
export interface Analyzer {
  run(matches:MatchDetails[]):string
}

export interface OutputTarget{
  print(report:string):void
}

export class Summary {

  static analysisWithHtml(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { } 

  buildAndPrintReport(matches:MatchDetails[]) {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output)
  }
}