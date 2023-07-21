"use strict";
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
const io5_1 = require("react-icons/io5");
function CheckBox(_a) {
    var { checked, checkChanged, checkedComponent, uncheckedComponent, children } = _a, props = __rest(_a, ["checked", "checkChanged", "checkedComponent", "uncheckedComponent", "children"]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, props, { onClick: () => checkChanged(!checked), children: [checked && checkedComponent && (checkedComponent), !checked && uncheckedComponent && (uncheckedComponent), checked && !checkedComponent && ((0, jsx_runtime_1.jsx)(io5_1.IoCheckmark, {})), !checked && !uncheckedComponent && ((0, jsx_runtime_1.jsx)(io5_1.IoClose, {})), children] })));
}
exports.default = CheckBox;
//# sourceMappingURL=index.js.map