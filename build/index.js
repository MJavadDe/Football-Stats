"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const data = MatchReader_1.MatchReader.statciCsvReader("football.csv");
data.load();
Summary_1.Summary.analysisWithHtml("Tottenham").buildAndPrintReport(data.matches);
