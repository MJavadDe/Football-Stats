"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Analyse {
    constructor(team, data) {
        this.team = team;
        this.data = data;
        this.winPer = 0;
    }
    get winRatio() {
        let quan = 0;
        this.data.map(stat => {
            if (stat[1] === this.team && stat[5] === "H" || stat[2] === this.team && stat[5] === "A") {
                quan++;
            }
        });
        return `${this.team} has won ${Math.round((quan * 100) / 38) + "%"} of their games this season`;
    }
}
