"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringtoDate = void 0;
const dateStringtoDate = (dateString) => {
    const dateArray = dateString.split("/").map(item => {
        return parseInt(item);
    }).reverse().toString();
    const newDate = new Date(dateArray);
    return newDate;
};
exports.dateStringtoDate = dateStringtoDate;
