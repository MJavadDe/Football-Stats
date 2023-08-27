"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        matches.map(match => {
            if ((match[1] === this.team && match[5] === MatchResult_1.MatchResult.homeWin) || (match[2] === this.team && match[5] === MatchResult_1.MatchResult.awayWin)) {
                wins++;
            }
        });
        return `${this.team} has one ${wins} games this season`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
