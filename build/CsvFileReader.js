"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    get read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: "utf-8"
        }).split("\n").map((item) => {
            return item.split(",");
        }).map((item) => {
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
        return this.data;
    }
}
exports.CsvFileReader = CsvFileReader;
