"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    static statciCsvReader(fileName) {
        const file = new CsvFileReader_1.CsvFileReader(fileName);
        return new MatchReader(file);
    }
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((item) => {
            return [
                (0, utils_1.dateStringtoDate)(item[0]),
                item[1],
                item[2],
                parseInt(item[3]),
                parseInt(item[4]),
                item[5],
                item[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
