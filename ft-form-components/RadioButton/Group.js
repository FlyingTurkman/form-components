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
exports.GroupContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.GroupContext = (0, react_1.createContext)({ selectedValue: null, setSelectedValue: null, selectedComponent: null, unselectedComponent: null });
const Group = (_a) => {
    var { children, values, selectedValue, setSelectedValue, selectedComponent, unselectedComponent } = _a, props = __rest(_a, ["children", "values", "selectedValue", "setSelectedValue", "selectedComponent", "unselectedComponent"]);
    return ((0, jsx_runtime_1.jsx)(exports.GroupContext.Provider, Object.assign({ value: { selectedValue, setSelectedValue, selectedComponent, unselectedComponent } }, props, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({}, props, { children: children })) })));
};
exports.default = Group;
//# sourceMappingURL=Group.js.map