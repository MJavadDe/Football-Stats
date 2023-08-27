import { log } from "console";
import { WinsAnalysis } from "./Analyzers/WinAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTarget/consoleReport";
import { HtmlReport } from "./reportTarget/HtmlReport";

const data = MatchReader.statciCsvReader("football.csv")

data.load()

Summary.analysisWithHtml("Tottenham").buildAndPrintReport(data.matches)
