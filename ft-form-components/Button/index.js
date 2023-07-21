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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ai_1 = require("react-icons/ai");
const Loading_1 = __importDefault(require("./Loading"));
const Button = (_a) => {
    var { loading, loadingComponent, onClick, children } = _a, props = __rest(_a, ["loading", "loadingComponent", "onClick", "children"]);
    return ((0, jsx_runtime_1.jsxs)("button", Object.assign({}, props, { onClick: () => clickHandle(), children: [loading && loadingComponent && (loadingComponent), loading && !loadingComponent && ((0, jsx_runtime_1.jsx)("div", { className: "animate-spin", children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlineLoading3Quarters, {}) })), !loading && (children)] })));
    function clickHandle() {
        return __awaiter(this, void 0, void 0, function* () {
            if (loading)
                return;
        });
    }
};
Button.Loading = Loading_1.default;
exports.default = Button;
//# sourceMappingURL=index.js.map