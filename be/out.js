var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (_) try {
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
define("routers/index", ["require", "exports", "fs", "path", "express"], function (require, exports, fs_1, path_1, express_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_1 = __importDefault(fs_1);
    path_1 = __importDefault(path_1);
    var prefix = '/';
    var router = (0, express_1.Router)();
    var routes = fs_1.default.readdirSync(__dirname);
    routes.filter(function (o) { return o !== 'index.ts'; })
        .forEach(function (route) { return router.use(prefix, require(path_1.default.join(__dirname, route)).default); });
    exports.default = router;
});
define("express", ["require", "exports", "express", "cors", "routers/index"], function (require, exports, express_2, cors_1, routers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    express_2 = __importStar(express_2);
    cors_1 = __importDefault(cors_1);
    routers_1 = __importDefault(routers_1);
    var app = (0, express_2.default)();
    app.use((0, cors_1.default)());
    app.use((0, express_2.json)());
    app.use((0, express_2.urlencoded)({ limit: '50mb', extended: true }));
    app.use('/', routers_1.default);
    exports.default = app;
});
define("config/index", ["require", "exports", "dotenv"], function (require, exports, dotenv_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    dotenv_1 = __importDefault(dotenv_1);
    dotenv_1.default.config();
    var ENVS = [
        'PORT',
        'MONGO_HOST',
        'MONGO_PORT',
        'MONGO_USER',
        'MONGO_PASSWORD',
        'MONGO_DB'
    ];
    global.Config = {
        PORT: process.env.PORT,
        MONGO_HOST: process.env.MONGO_HOST,
        MONGO_PORT: process.env.MONGO_PORT,
        MONGO_USER: process.env.MONGO_USER,
        MONGO_PASSWORD: process.env.MONGO_PASSWORD,
        MONGO_DB: process.env.MONGO_DB,
        JWT: process.env.JWT,
    };
});
define("helpers/connectDB", ["require", "exports", "mongoose"], function (require, exports, mongoose_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mongoose_1 = __importDefault(mongoose_1);
    var _a = global.Config, MONGO_USER = _a.MONGO_USER, MONGO_PASSWORD = _a.MONGO_PASSWORD, MONGO_HOST = _a.MONGO_HOST, MONGO_PORT = _a.MONGO_PORT, MONGO_DB = _a.MONGO_DB;
    var auth = MONGO_USER && MONGO_PASSWORD ? MONGO_USER + ':' + encodeURIComponent(MONGO_PASSWORD) + '@' : '';
    var dbURI = "mongodb://".concat(auth).concat(MONGO_HOST, ":").concat(MONGO_PORT, "/").concat(MONGO_DB).concat(auth ? '?authSource=admin' : '');
    mongoose_1.default.connect(dbURI, {})
        .then(function () {
        console.log('connected db');
    })
        .catch(function (e) {
        console.log(e);
    });
});
define("server", ["require", "exports", "http", "express"], function (require, exports, http_1, express_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    http_1 = __importDefault(http_1);
    express_3 = __importDefault(express_3);
    var server = http_1.default.createServer(express_3.default);
    server.listen(global.Config.PORT);
    exports.default = server;
});
define("index", ["require", "exports", "module-alias/register", "config/index", "helpers/connectDB", "server"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("amd-loader");
});
define("interfaces/Admin", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/Discount", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/User", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("models/Admins", ["require", "exports", "mongoose"], function (require, exports, mongoose_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminSchema = new mongoose_2.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String },
        role: [{ type: Number }],
    }, {
        timestamps: true
    });
    var Admins = (0, mongoose_2.model)('admins', AdminSchema);
    exports.default = Admins;
});
define("models/Discounts", ["require", "exports", "mongoose"], function (require, exports, mongoose_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DiscountSchema = new mongoose_3.Schema({
        min: { type: Number },
        max: { type: Number },
        total: { type: Number },
        left: { type: Number },
        name: { type: String },
        code: { type: String },
        status: { type: Number, default: 1 },
        expire: { type: Date },
        value: { type: Number, },
        discountBy: { type: String },
        createBy: { type: mongoose_3.Schema.Types.ObjectId, ref: 'admins' },
    }, {
        timestamps: true
    });
    var Discounts = (0, mongoose_3.model)('discounts', DiscountSchema);
    exports.default = Discounts;
});
define("models/Users", ["require", "exports", "mongoose"], function (require, exports, mongoose_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UsersSchema = new mongoose_4.Schema({
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        dob: { type: Date, },
        address: { type: String },
        name: { type: String },
        phone: { type: String },
    }, {
        timestamps: true
    });
    var Users = (0, mongoose_4.model)('users', UsersSchema);
    exports.default = Users;
});
define("models/index", ["require", "exports", "models/Admins", "models/Discounts", "models/Users"], function (require, exports, Admins_1, Discounts_1, Users_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Users = exports.Discounts = exports.Admins = void 0;
    Object.defineProperty(exports, "Admins", { enumerable: true, get: function () { return __importDefault(Admins_1).default; } });
    Object.defineProperty(exports, "Discounts", { enumerable: true, get: function () { return __importDefault(Discounts_1).default; } });
    Object.defineProperty(exports, "Users", { enumerable: true, get: function () { return __importDefault(Users_1).default; } });
});
define("controllers/admin", ["require", "exports", "models/index"], function (require, exports, models_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var admin = {
        get: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.Admins.find({})];
                    case 1:
                        data = _a.sent();
                        res.send({ status: 1, data: data });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        post: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.Admins.create(__assign({}, req.body))];
                    case 1:
                        _a.sent();
                        res.send({ status: 1 });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.send(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        put: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var _id, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = req.query._id;
                        return [4 /*yield*/, models_1.Admins.findByIdAndUpdate(_id, req.body)];
                    case 1:
                        _a.sent();
                        res.send({ status: 1 });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.send(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        delete: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.Admins.findByIdAndDelete(req.query._id)];
                    case 1:
                        _a.sent();
                        res.send({ status: 1 });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        res.send(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }
    };
    exports.default = admin;
});
define("controllers/auth", ["require", "exports", "bcrypt", "jsonwebtoken"], function (require, exports, bcrypt_1, jsonwebtoken_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jsonwebtoken_1 = __importDefault(jsonwebtoken_1);
    var auth = {
        adminAuth: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, username, password, validPassword, token;
            return __generator(this, function (_b) {
                try {
                    _a = req.body, username = _a.username, password = _a.password;
                    validPassword = (0, bcrypt_1.compareSync)(password, username.password);
                    if (!validPassword)
                        return [2 /*return*/, res.send({ status: 100 })];
                    token = jsonwebtoken_1.default.sign({ _id: username._id, role: username.role }, 'adminToken');
                    res.send({ status: 1, token: token });
                }
                catch (error) {
                    res.send(error);
                }
                return [2 /*return*/];
            });
        }); },
        userAuth: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, email, password, validPassword, token;
            return __generator(this, function (_b) {
                try {
                    _a = req.body, email = _a.email, password = _a.password;
                    validPassword = (0, bcrypt_1.compareSync)(password, email.password);
                    if (!validPassword)
                        return [2 /*return*/, res.send({ status: 100 })];
                    token = jsonwebtoken_1.default.sign({ _id: email._id }, 'userToken');
                    res.send({ status: 1, token: token });
                }
                catch (error) {
                    res.send(error);
                }
                return [2 /*return*/];
            });
        }); },
    };
    exports.default = auth;
});
define("controllers/discount", ["require", "exports", "models/index"], function (require, exports, models_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var discount = {
        get: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, createBy, createFrom, createTo, status, skip, limit, query, data, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, createBy = _a.createBy, createFrom = _a.createFrom, createTo = _a.createTo, status = _a.status, skip = _a.skip, limit = _a.limit;
                        query = {};
                        if (createBy)
                            query.createBy = createBy;
                        if (new Date(createFrom).getTime()) {
                            query.createdAt = { $gt: new Date(createFrom) };
                        }
                        if (new Date(createTo).getTime()) {
                            query.createdAt = { $gt: new Date(createTo) };
                        }
                        if (status) {
                            query.status = Number(status);
                        }
                        return [4 /*yield*/, models_2.Discounts.find(query)
                                .sort({
                                createdAt: -1
                            })
                                .skip(Number(skip) || 0)
                                .limit(Number(limit) || 20)
                                .populate('createBy')];
                    case 1:
                        data = _b.sent();
                        return [4 /*yield*/, models_2.Discounts.countDocuments(query)];
                    case 2:
                        total = _b.sent();
                        res.send({ status: 1, data: data, total: total });
                        return [2 /*return*/];
                }
            });
        }); },
        post: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, min, _c, max, _d, total, _e, expire, _f, discountBy, _g, value, _h, name, _j, code, payload;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _a = req.body, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 0 : _c, _d = _a.total, total = _d === void 0 ? 10 : _d, _e = _a.expire, expire = _e === void 0 ? Date.now() : _e, _f = _a.discountBy, discountBy = _f === void 0 ? 'fixed' : _f, _g = _a.value, value = _g === void 0 ? 10 : _g, _h = _a.name, name = _h === void 0 ? "" : _h, _j = _a.code, code = _j === void 0 ? Date.now() : _j;
                        payload = req.body.payload;
                        return [4 /*yield*/, models_2.Discounts.create({
                                min: min,
                                max: max,
                                total: total,
                                left: total,
                                expire: expire,
                                discountBy: discountBy,
                                value: value,
                                createBy: payload._id,
                                name: name,
                                code: code
                            })];
                    case 1:
                        _k.sent();
                        res.send({ status: 1 });
                        return [2 /*return*/];
                }
            });
        }); },
        put: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var _id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.query._id;
                        return [4 /*yield*/, models_2.Discounts.findByIdAndUpdate(_id, req.body)];
                    case 1:
                        _a.sent();
                        res.send({ status: 1 });
                        return [2 /*return*/];
                }
            });
        }); },
        delete: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var _id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.query._id;
                        return [4 /*yield*/, models_2.Discounts.findByIdAndDelete(_id)];
                    case 1:
                        _a.sent();
                        res.send({ status: 1 });
                        return [2 /*return*/];
                }
            });
        }); },
    };
    exports.default = discount;
});
define("controllers/user", ["require", "exports", "models/index"], function (require, exports, models_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var user = {
        get: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var _id, user_1, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = req.body.payload._id;
                        return [4 /*yield*/, models_3.Users.findById(_id)];
                    case 1:
                        user_1 = _a.sent();
                        res.send({ status: 1, data: user_1 });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.send(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        post: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_3.Users.create(__assign({}, req.body))];
                    case 1:
                        _a.sent();
                        res.send({ status: 1 });
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        res.send(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
    exports.default = user;
});
define("controllers/index", ["require", "exports", "controllers/admin", "controllers/auth", "controllers/discount", "controllers/user"], function (require, exports, admin_1, auth_1, discount_1, user_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.user = exports.discount = exports.auth = exports.admin = void 0;
    Object.defineProperty(exports, "admin", { enumerable: true, get: function () { return __importDefault(admin_1).default; } });
    Object.defineProperty(exports, "auth", { enumerable: true, get: function () { return __importDefault(auth_1).default; } });
    Object.defineProperty(exports, "discount", { enumerable: true, get: function () { return __importDefault(discount_1).default; } });
    Object.defineProperty(exports, "user", { enumerable: true, get: function () { return __importDefault(user_2).default; } });
});
define("middleware/isAuth", ["require", "exports", "jsonwebtoken"], function (require, exports, jsonwebtoken_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUser = exports.isAdminAny = exports.isAdminDiscount = exports.isMaster = void 0;
    var isMaster = function (req, res, next) {
        var _a, _b, _c, _d, _e, _f;
        if (((_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) === 'Bearer') {
            try {
                var token = (_f = (_e = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1];
                var payload = (0, jsonwebtoken_2.verify)(token, 'adminToken');
                console.log(payload.role);
                if (payload.role.includes(0)) {
                    req.body.payload = payload;
                    return next();
                }
                res.status(401).send({ msg: 'unauth' });
            }
            catch (error) {
                res.status(401).send({ msg: 'unauth' });
            }
        }
        else {
            res.status(401).send({ msg: 'unauth' });
        }
    };
    exports.isMaster = isMaster;
    var isAdminDiscount = function (req, res, next) {
        var _a, _b, _c, _d, _e, _f;
        if (((_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) === 'Bearer') {
            try {
                var token = (_f = (_e = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1];
                var payload = (0, jsonwebtoken_2.verify)(token, 'adminToken');
                if (payload.role.includes(0) || payload.role.includes(4)) {
                    req.body.payload = payload;
                    return next();
                }
                res.status(401).send({ msg: 'unauth' });
            }
            catch (error) {
                res.status(401).send({ msg: 'unauth' });
            }
        }
        else {
            res.status(401).send({ msg: 'unauth' });
        }
    };
    exports.isAdminDiscount = isAdminDiscount;
    var isAdminAny = function (req, res, next) {
        var _a, _b, _c, _d, _e, _f;
        if (((_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) === 'Bearer') {
            try {
                var token = (_f = (_e = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1];
                var payload = (0, jsonwebtoken_2.verify)(token, 'adminToken');
                req.body.payload = payload;
                return next();
            }
            catch (error) {
                res.status(401).send({ msg: 'unauth' });
            }
        }
        else {
            res.status(401).send({ msg: 'unauth' });
        }
    };
    exports.isAdminAny = isAdminAny;
    var isUser = function (req, res, next) {
        var _a, _b, _c, _d, _e, _f;
        if (((_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) === 'Bearer') {
            try {
                var token = (_f = (_e = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1];
                var payload = (0, jsonwebtoken_2.verify)(token, 'userToken');
                req.body.payload = payload;
                return next();
            }
            catch (error) {
                res.status(401).send({ msg: 'unauth' });
            }
        }
        else {
            res.status(401).send({ msg: 'unauth' });
        }
    };
    exports.isUser = isUser;
});
define("middleware/validator", ["require", "exports", "mongoose", "bcrypt"], function (require, exports, mongoose_5, bcrypt_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmail = exports.isObjectId = exports.encript = exports.isExist = exports.isUnique = exports.isInRange = exports.isLength = void 0;
    var validator = function (requestField, key) {
        var validateFunction = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            validateFunction[_i - 2] = arguments[_i];
        }
        return function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var fields, keys, index, field, jndex, _key, data, kndex, fn, _a, result, msg, mapedData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            fields = requestField.split(' ');
                            keys = key.split(' ');
                            index = 0;
                            _b.label = 1;
                        case 1:
                            if (!(index < fields.length)) return [3 /*break*/, 8];
                            field = fields[index];
                            jndex = 0;
                            _b.label = 2;
                        case 2:
                            if (!(jndex < keys.length)) return [3 /*break*/, 7];
                            _key = keys[jndex];
                            data = req[field][_key];
                            kndex = 0;
                            _b.label = 3;
                        case 3:
                            if (!(kndex < validateFunction.length)) return [3 /*break*/, 6];
                            fn = validateFunction[kndex];
                            return [4 /*yield*/, fn(data)];
                        case 4:
                            _a = _b.sent(), result = _a.result, msg = _a.msg, mapedData = _a.mapedData;
                            if (mapedData)
                                req[field][_key] = mapedData;
                            if (!result) {
                                return [2 /*return*/, res.status(400).send({
                                        msg: msg,
                                        field: field,
                                        key: _key
                                    })];
                            }
                            _b.label = 5;
                        case 5:
                            kndex++;
                            return [3 /*break*/, 3];
                        case 6:
                            jndex++;
                            return [3 /*break*/, 2];
                        case 7:
                            index++;
                            return [3 /*break*/, 1];
                        case 8:
                            next();
                            return [2 /*return*/];
                    }
                });
            });
        };
    };
    var notValid = function (msg) {
        return { result: false, msg: msg };
    };
    var valid = function (msg) {
        return { result: true, msg: msg };
    };
    var isLength = function (options) {
        var notValidResult = notValid('wrong length');
        var validResult = valid('');
        return function (data) {
            var _a = options.min, min = _a === void 0 ? 0 : _a, _b = options.max, max = _b === void 0 ? 99999 : _b, _c = options.trim, trim = _c === void 0 ? false : _c;
            if (typeof data !== 'string')
                return notValidResult;
            if (trim)
                data = data.trim();
            if (data.length < min || data.length > max)
                return notValidResult;
            return validResult;
        };
    };
    exports.isLength = isLength;
    var isInRange = function (options) {
        var notValidResult = notValid('wrong length');
        var validResult = valid('');
        return function (data) {
            var _a = options.min, min = _a === void 0 ? 0 : _a, _b = options.max, max = _b === void 0 ? Infinity : _b;
            if (isNaN(data))
                return notValidResult;
            if (Number(data) < min || Number(data) > max)
                return notValidResult;
            return __assign(__assign({}, validResult), { mapedData: Number(data) });
        };
    };
    exports.isInRange = isInRange;
    var isUnique = function (model, field) {
        var notValidResult = notValid('existed');
        var validResult = valid('');
        return function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var exist;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, model.exists((_a = {}, _a[field] = data, _a))];
                        case 1:
                            exist = _b.sent();
                            if (exist)
                                return [2 /*return*/, notValidResult];
                            return [2 /*return*/, validResult];
                    }
                });
            });
        };
    };
    exports.isUnique = isUnique;
    var isExist = function (model, field) {
        var notValidResult = notValid('not existed');
        var validResult = valid('');
        return function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var findData;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, model.findOne((_a = {}, _a[field] = data, _a))];
                        case 1:
                            findData = _b.sent();
                            if (!findData)
                                return [2 /*return*/, notValidResult];
                            return [2 /*return*/, __assign(__assign({}, validResult), { mapedData: findData })];
                    }
                });
            });
        };
    };
    exports.isExist = isExist;
    var encript = function () {
        var validResult = valid('');
        return function (data) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, __assign(__assign({}, validResult), { mapedData: (0, bcrypt_2.hashSync)(data, 5) })];
            });
        }); };
    };
    exports.encript = encript;
    var isObjectId = function () {
        var notValidResult = notValid('not valid query');
        var validResult = valid('');
        return function (data) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!(0, mongoose_5.isValidObjectId)(data))
                    return [2 /*return*/, notValidResult];
                return [2 /*return*/, validResult];
            });
        }); };
    };
    exports.isObjectId = isObjectId;
    var isEmail = function () {
        var notValidResult = notValid('not valid email');
        var validResult = valid('');
        return function (data) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))
                    return [2 /*return*/, validResult];
                return [2 /*return*/, notValidResult];
            });
        }); };
    };
    exports.isEmail = isEmail;
    exports.default = validator;
});
define("routers/api/admin", ["require", "exports", "express", "controllers/index", "middleware/validator", "models/index", "middleware/isAuth"], function (require, exports, express_4, controllers_1, validator_1, models_4, isAuth_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    validator_1 = __importStar(validator_1);
    var router = (0, express_4.Router)();
    router.route('/admin')
        .get(isAuth_1.isMaster, controllers_1.admin.get)
        .post(isAuth_1.isMaster, (0, validator_1.default)('body', 'username password', (0, validator_1.isLength)({ min: 6, max: 18, trim: true })), (0, validator_1.default)('body', 'username', (0, validator_1.isUnique)(models_4.Admins, 'username')), (0, validator_1.default)('body', 'password', (0, validator_1.encript)()), controllers_1.admin.post)
        .put(isAuth_1.isMaster, (0, validator_1.default)('query', '_id', (0, validator_1.isObjectId)()), (0, validator_1.default)('body', 'username', (0, validator_1.isLength)({ min: 6, max: 18, trim: true })), controllers_1.admin.put)
        .delete(isAuth_1.isMaster, (0, validator_1.default)('query', '_id', (0, validator_1.isObjectId)()), controllers_1.admin.delete);
    exports.default = router;
});
define("routers/api/auth", ["require", "exports", "express", "controllers/index", "middleware/validator", "models/index"], function (require, exports, express_5, controllers_2, validator_2, models_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    validator_2 = __importStar(validator_2);
    var router = (0, express_5.Router)();
    router.route('/auth-admin')
        .post((0, validator_2.default)('body', 'username password', (0, validator_2.isLength)({ min: 6, max: 18, trim: true })), (0, validator_2.default)('body', 'username', (0, validator_2.isExist)(models_5.Admins, 'username')), controllers_2.auth.adminAuth);
    router.route('/auth')
        .post((0, validator_2.default)('body', 'email', (0, validator_2.isEmail)(), (0, validator_2.isExist)(models_5.Users, 'email')), controllers_2.auth.userAuth);
    exports.default = router;
});
define("routers/api/discount", ["require", "exports", "express", "controllers/index", "middleware/validator", "middleware/isAuth"], function (require, exports, express_6, controllers_3, validator_3, isAuth_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    validator_3 = __importStar(validator_3);
    var router = (0, express_6.Router)();
    router.route('/discount')
        .get(isAuth_2.isAdminDiscount, controllers_3.discount.get)
        .post(isAuth_2.isAdminDiscount, (0, validator_3.default)('body', 'min max total value', (0, validator_3.isInRange)({ min: 0 })), (0, validator_3.default)('body', 'code', (0, validator_3.isLength)({ min: 1 })), controllers_3.discount.post)
        .put(isAuth_2.isAdminDiscount, (0, validator_3.default)('body', 'min max total value', (0, validator_3.isInRange)({ min: 0 })), (0, validator_3.default)('body', 'code', (0, validator_3.isLength)({ min: 1 })), controllers_3.discount.put)
        .delete(isAuth_2.isAdminDiscount, controllers_3.discount.delete);
    exports.default = router;
});
define("routers/api/index", ["require", "exports", "fs", "path", "express"], function (require, exports, fs_2, path_2, express_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_2 = __importDefault(fs_2);
    path_2 = __importDefault(path_2);
    var router = (0, express_7.Router)();
    var routes = fs_2.default.readdirSync(__dirname);
    var prefix = path_2.default.basename(__dirname);
    routes.filter(function (o) { return o !== 'index.ts'; })
        .forEach(function (route) { return router.use("/".concat(prefix), require(path_2.default.join(__dirname, route)).default); });
    exports.default = router;
});
define("routers/api/user", ["require", "exports", "express", "controllers/index", "middleware/validator", "models/index", "middleware/isAuth"], function (require, exports, express_8, controllers_4, validator_4, models_6, isAuth_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    validator_4 = __importStar(validator_4);
    var router = (0, express_8.Router)();
    router.route('/user')
        .get(isAuth_3.isUser, controllers_4.user.get)
        .post((0, validator_4.default)('body', 'password', (0, validator_4.isLength)({ min: 6, max: 18, trim: true }), (0, validator_4.encript)()), (0, validator_4.default)('body', 'email', (0, validator_4.isEmail)(), (0, validator_4.isUnique)(models_6.Users, 'email')), controllers_4.user.post);
    exports.default = router;
});
define("socket/index", ["require", "exports", "socket.io", "jsonwebtoken", "server", "models/index"], function (require, exports, socket_io_1, jsonwebtoken_3, server_1, models_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    server_1 = __importDefault(server_1);
    var io = new socket_io_1.Server(server_1.default, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });
    var updateSocket = function (io, _id) { return __awaiter(void 0, void 0, void 0, function () {
        var ids, idsArray, ids_1, ids_1_1, id, update;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, io.in(_id + '').allSockets()];
                case 1:
                    ids = _b.sent();
                    idsArray = [];
                    try {
                        for (ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
                            id = ids_1_1.value;
                            idsArray.push(id);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    update = {
                        sockets: idsArray
                    };
                    if (idsArray.length === 0) {
                        update.lastOnline = Date.now();
                    }
                    return [4 /*yield*/, models_7.Users.findByIdAndUpdate(_id, update)];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    io.use(function (socket, next) {
        var token = socket.handshake.auth.token;
        if (!token)
            return socket.disconnect();
        try {
            var payload = (0, jsonwebtoken_3.verify)(token, global.Config.JWT);
            var _id = payload._id;
            socket.data = { _id: _id };
            socket.join(_id + '');
        }
        catch (error) {
            socket.disconnect();
            return;
        }
        next();
    });
    io.on('connection', function (socket) {
        updateSocket(io, socket.data._id);
        socket.on('disconnect', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                updateSocket(io, socket.data._id);
                return [2 /*return*/];
            });
        }); });
    });
    exports.default = io;
});
//# sourceMappingURL=out.js.map