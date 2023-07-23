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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Group_1 = require("./Group");
const io5_1 = require("react-icons/io5");
const Button = (_a) => {
    var { value, children, onClick } = _a, props = __rest(_a, ["value", "children", "onClick"]);
    const { selectedValue, setSelectedValue, selectedComponent, unselectedComponent } = (0, react_1.useContext)(Group_1.GroupContext);
    if (selectedValue === value && selectedComponent) {
        return ((0, jsx_runtime_1.jsxs)("button", Object.assign({}, props, { onClick: (e) => clickHandle(e), children: [selectedComponent, children] })));
    }
    else if (selectedValue === value && !selectedComponent) {
        return ((0, jsx_runtime_1.jsxs)("button", Object.assign({}, props, { style: { display: 'flex', flexDirection: 'row', alignItems: 'center' }, onClick: (e) => clickHandle(e), children: [(0, jsx_runtime_1.jsx)(io5_1.IoRadioButtonOn, {}), children] })));
    }
    else if (selectedValue !== value && unselectedComponent) {
        return ((0, jsx_runtime_1.jsxs)("button", Object.assign({}, props, { children: [unselectedComponent, children] })));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("button", Object.assign({}, props, { style: { display: 'flex', flexDirection: 'row', alignItems: 'center' }, onClick: (e) => clickHandle(e), children: [(0, jsx_runtime_1.jsx)(io5_1.IoRadioButtonOff, {}), children] })));
    }
    function clickHandle(e) {
        return __awaiter(this, void 0, void 0, function* () {
            if (setSelectedValue != null) {
                setSelectedValue(value);
            }
            if (onClick) {
                onClick(e);
            }
        });
    }
};
exports.default = Button;
//# sourceMappingURL=Button.js.map