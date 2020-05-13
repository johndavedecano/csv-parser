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
const reader_1 = __importDefault(require("./reader"));
test('should throw an error if correct file is not given', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(reader_1.default('')).rejects.toThrow('Reader only accepts csv files.');
}));
test('should return null', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(reader_1.default('notfound.csv')).resolves.toBeNull();
}));
test('should return data', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect(reader_1.default(path_1.default.join(__dirname, './data.csv'))).resolves.toBeTruthy();
}));
//# sourceMappingURL=reader.spec.js.map