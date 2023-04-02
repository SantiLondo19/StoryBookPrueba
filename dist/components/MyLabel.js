"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "No label" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.allCaps, allCaps = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? "primary" : _e, fontColor = _a.fontColor, _f = _a.backgroundColor, backgroundColor = _f === void 0 ? 'transparent' : _f, props = __rest(_a, ["label", "size", "allCaps", "color", "fontColor", "backgroundColor"]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "label ".concat(size, " ").concat(allCaps && "upperCase", " ").concat(!fontColor && "text-".concat(color), " "), style: { color: fontColor, backgroundColor: backgroundColor } }, { children: label })));
};
exports.MyLabel = MyLabel;
