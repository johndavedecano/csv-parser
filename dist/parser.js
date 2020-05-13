"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reader_1 = __importDefault(require("./reader"));
/**
 * @param str
 *
 * @returns string
 */
const splitByLine = (str) => str.split(/\r?\n/);
/**
 * @param str
 *
 * @returns string
 */
const splitByComma = (str) => str.split(';').map((col) => {
    const parsed = Number(col);
    return isNaN(parsed) ? col.replace(/['"]+/g, '') : parsed;
});
/**
 * @param  {string} filePath
 *
 * @returns Promise<string|null>
 */
exports.default = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = [];
        const str = yield reader_1.default(filePath);
        if (str === '' || str === null) {
            return [];
        }
        const lines = splitByLine(str);
        if (lines.length === 0) {
            return [];
        }
        const columns = splitByComma(lines[0]);
        const rows = lines.slice(1);
        for (let i = 0; i < rows.length; i++) {
            const items = splitByComma(rows[i]);
            for (let x = 0; x < columns.length; x++) {
                if (!data[i]) {
                    data[i] = {};
                }
                data[i][columns[x]] = items[x];
            }
        }
        return data;
    }
    catch (err) {
        return [];
    }
});
//# sourceMappingURL=parser.js.map