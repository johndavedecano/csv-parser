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
const path_1 = __importDefault(require("path"));
const parser_1 = __importDefault(require("./parser"));
test('should return empty array if empty', () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield parser_1.default('notfound.csv');
    expect(data).toEqual([]);
}));
test('should return data', () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield parser_1.default(path_1.default.join(__dirname, 'data.csv'));
    expect(data.length > 0).toBeTruthy();
}));
//# sourceMappingURL=parser.spec.js.map