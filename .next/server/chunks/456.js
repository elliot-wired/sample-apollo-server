"use strict";
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 456:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(966), exports);


/***/ }),

/***/ 210:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBody = void 0;
var isNextApiRequest_1 = __webpack_require__(144);
var getBody = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if ((0, isNextApiRequest_1.isNextApiRequest)(req)) {
            return [2 /*return*/, req.body];
        }
        return [2 /*return*/, req.headers.get('content-type') === 'application/json' ? req.json() : req.text()];
    });
}); };
exports.getBody = getBody;


/***/ }),

/***/ 175:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHeaders = void 0;
var isNextApiRequest_1 = __webpack_require__(144);
var server_1 = __webpack_require__(83);
var getHeaders = function (req) {
    var e_1, _a;
    var headers = new server_1.HeaderMap();
    if ((0, isNextApiRequest_1.isNextApiRequest)(req)) {
        try {
            for (var _b = __values(Object.entries(req.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (typeof value === 'string') {
                    headers.set(key, value);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        req.headers.forEach(function (value, key) {
            headers.set(key, value);
        });
    }
    return headers;
};
exports.getHeaders = getHeaders;


/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNextApiRequest = void 0;
var isNextApiRequest = function (req) { return 'query' in req; };
exports.isNextApiRequest = isNextApiRequest;


/***/ }),

/***/ 966:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startServerAndCreateNextHandler = void 0;
var getBody_1 = __webpack_require__(210);
var getHeaders_1 = __webpack_require__(175);
var isNextApiRequest_1 = __webpack_require__(144);
var url_1 = __webpack_require__(310);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var defaultContext = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, ({})];
}); }); };
function startServerAndCreateNextHandler(server, options) {
    server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();
    var contextFunction = (options === null || options === void 0 ? void 0 : options.context) || defaultContext;
    function handler(req, res) {
        var _a, e_1, _b, _c, _d, e_2, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var httpGraphQLResponse, _g, _h, _j, _k, _l, key, value, _m, _o, _p, chunk, e_1_1, body, _q, _r, _s, chunk, e_2_1, headers, _t, _u, _v, key, value;
            var _w, _x, e_3, _y, e_4, _z;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        _h = (_g = server).executeHTTPGraphQLRequest;
                        _w = {
                            context: function () { return contextFunction(req, res); }
                        };
                        _x = {};
                        return [4 /*yield*/, (0, getBody_1.getBody)(req)];
                    case 1: return [4 /*yield*/, _h.apply(_g, [(_w.httpGraphQLRequest = (_x.body = _0.sent(),
                                _x.headers = (0, getHeaders_1.getHeaders)(req),
                                _x.method = req.method || 'POST',
                                _x.search = req.url ? (0, url_1.parse)(req.url).search || '' : '',
                                _x),
                                _w)])];
                    case 2:
                        httpGraphQLResponse = _0.sent();
                        if (!(0, isNextApiRequest_1.isNextApiRequest)(req)) return [3 /*break*/, 15];
                        if (!res) {
                            throw new Error('API Routes require you to pass both the req and res object.');
                        }
                        try {
                            for (_j = __values(httpGraphQLResponse.headers), _k = _j.next(); !_k.done; _k = _j.next()) {
                                _l = __read(_k.value, 2), key = _l[0], value = _l[1];
                                res.setHeader(key, value);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_k && !_k.done && (_y = _j.return)) _y.call(_j);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        res.statusCode = httpGraphQLResponse.status || 200;
                        if (!(httpGraphQLResponse.body.kind === 'complete')) return [3 /*break*/, 3];
                        res.send(httpGraphQLResponse.body.string);
                        return [3 /*break*/, 14];
                    case 3:
                        _0.trys.push([3, 8, 9, 14]);
                        _m = true, _o = __asyncValues(httpGraphQLResponse.body.asyncIterator);
                        _0.label = 4;
                    case 4: return [4 /*yield*/, _o.next()];
                    case 5:
                        if (!(_p = _0.sent(), _a = _p.done, !_a)) return [3 /*break*/, 7];
                        _c = _p.value;
                        _m = false;
                        chunk = _c;
                        res.write(chunk);
                        _0.label = 6;
                    case 6:
                        _m = true;
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _0.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _0.trys.push([9, , 12, 13]);
                        if (!(!_m && !_a && (_b = _o.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _b.call(_o)];
                    case 10:
                        _0.sent();
                        _0.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14:
                        res.end();
                        return [2 /*return*/];
                    case 15:
                        body = [];
                        if (!(httpGraphQLResponse.body.kind === 'complete')) return [3 /*break*/, 16];
                        body.push(httpGraphQLResponse.body.string);
                        return [3 /*break*/, 27];
                    case 16:
                        _0.trys.push([16, 21, 22, 27]);
                        _q = true, _r = __asyncValues(httpGraphQLResponse.body.asyncIterator);
                        _0.label = 17;
                    case 17: return [4 /*yield*/, _r.next()];
                    case 18:
                        if (!(_s = _0.sent(), _d = _s.done, !_d)) return [3 /*break*/, 20];
                        _f = _s.value;
                        _q = false;
                        chunk = _f;
                        body.push(chunk);
                        _0.label = 19;
                    case 19:
                        _q = true;
                        return [3 /*break*/, 17];
                    case 20: return [3 /*break*/, 27];
                    case 21:
                        e_2_1 = _0.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 27];
                    case 22:
                        _0.trys.push([22, , 25, 26]);
                        if (!(!_q && !_d && (_e = _r.return))) return [3 /*break*/, 24];
                        return [4 /*yield*/, _e.call(_r)];
                    case 23:
                        _0.sent();
                        _0.label = 24;
                    case 24: return [3 /*break*/, 26];
                    case 25:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 26: return [7 /*endfinally*/];
                    case 27:
                        headers = {};
                        try {
                            for (_t = __values(httpGraphQLResponse.headers), _u = _t.next(); !_u.done; _u = _t.next()) {
                                _v = __read(_u.value, 2), key = _v[0], value = _v[1];
                                headers[key] = value;
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_u && !_u.done && (_z = _t.return)) _z.call(_t);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        // eslint-disable-next-line consistent-return
                        return [2 /*return*/, new Response(body.join(''), { headers: headers, status: httpGraphQLResponse.status || 200 })];
                }
            });
        });
    }
    return handler;
}
exports.startServerAndCreateNextHandler = startServerAndCreateNextHandler;


/***/ })

};
;