"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
/**
 * @param  {string} filePath
 *
 * @returns Promise<string|null>
 */
exports.default = (filePath) => {
    return new Promise((resolve) => {
        const ext = path_1.default.extname(filePath);
        if (ext !== '.csv') {
            throw new Error('Reader only accepts csv files.');
        }
        fs_1.default.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                resolve(null);
            }
            else {
                resolve(data);
            }
        });
    });
};
//# sourceMappingURL=reader.js.map