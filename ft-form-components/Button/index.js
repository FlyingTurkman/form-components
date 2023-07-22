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
const ai_1 = require("react-icons/ai");
const Button = (_a) => {
    var { loading, loadingComponent, onClick, children } = _a, props = __rest(_a, ["loading", "loadingComponent", "onClick", "children"]);
    return ((0, jsx_runtime_1.jsxs)("button", Object.assign({}, props, { onClick: loading ? () => { return; } : onClick, children: [loading && loadingComponent && (loadingComponent), loading && !loadingComponent && ((0, jsx_runtime_1.jsxs)("div", { className: "loading", children: [(0, jsx_runtime_1.jsx)("style", { children: `
                        .loading {
                            animation: rotation 2s infinite linear;
                        }
                        
                        @keyframes rotation {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(360deg);
                            }
                        }
                    ` }), (0, jsx_runtime_1.jsx)(ai_1.AiOutlineLoading3Quarters, {})] })), !loading && (children)] })));
};
exports.default = Button;
//# sourceMappingURL=index.js.map