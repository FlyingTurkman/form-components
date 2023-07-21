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
const react_1 = require("react");
function Steps(_a) {
    var { maxSteps, currentStep, completedStepColor, currentStepColor, uncompletedStepColor, children } = _a, props = __rest(_a, ["maxSteps", "currentStep", "completedStepColor", "currentStepColor", "uncompletedStepColor", "children"]);
    const [stepsArray, setStepsArray] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        let a = [];
        let i = maxSteps;
        let c = 0;
        while (c != i) {
            a.push(c);
            c++;
        }
        setStepsArray(a);
    }, [maxSteps, currentStep]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, props, { children: [(0, jsx_runtime_1.jsx)("style", { children: `
                .completedStep, .currentStep, .uncompletedStep {
                    margin-left: 4px;
                    margin-right: 4px;
                    padding-top: 2px;
                    padding-bottom: 2px;
                    height: 10px;
                    min-width: 10px;
                    width: calc((100% / ${maxSteps || 1}) - (${maxSteps || 1} * 2px));
                    float: left;
                }
                .completedStep {
                    background-color: ${completedStepColor || '#16a34a'};
                }
                .currentStep {
                    background-color: ${currentStepColor || '#ca8a04'};
                }
                .uncompletedStep {
                    background-color: ${uncompletedStepColor || '#dc2626'};
                }
            ` }), stepsArray.map((s, index) => {
                return ((0, jsx_runtime_1.jsx)("span", { className: currentStep > (index + 1) ? 'completedStep' : currentStep == (index + 1) ? 'currentStep' : 'uncompletedStep' }, `stepsKey${index}`));
            })] })));
}
exports.default = Steps;
//# sourceMappingURL=index.js.map