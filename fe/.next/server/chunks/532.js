"use strict";
exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 7346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5873);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207);
/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios_retry__WEBPACK_IMPORTED_MODULE_2__]);
axios_retry__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const create = ()=>{
    const jwt = _helpers_storage__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getToken */ .Z.getToken();
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: _constant__WEBPACK_IMPORTED_MODULE_3__/* .DOMAIN */ .y,
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
};
const callAPI = {
    get: async (route)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.get(route);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    },
    post: async (route, body)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.post(route, body);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    },
    put: async (route, body)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.put(route, body);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    },
    patch: async (route, body)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.patch(route, body);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    },
    delete: async (route)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.delete(route);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callAPI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Banner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Banner/Banner.tsx


const Banner = ({ items , loop =true , interval =5000  })=>{
    const { 0: Current , 1: setCurrent  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        let timeout;
        if (loop) {
            timeout = setTimeout(()=>{
                if (Current + 1 > items.length - 1) setCurrent(0);
                else setCurrent(Current + 1);
            }, interval);
        }
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        Current,
        items,
        loop
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "banner",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "track",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            "--total": items.length,
                            "--current": Current
                        },
                        className: "list",
                        children: items.map((o, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "cover",
                                    src: o.img,
                                    alt: ""
                                })
                            }, o.img + i)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dots",
                        children: items.map((o, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>setCurrent(index)
                                ,
                                className: `dot ${Current === index ? "active" : ""}`
                            }, o.link + "index")
                        )
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Banner_Banner = (Banner);

;// CONCATENATED MODULE: ./src/components/Banner/index.ts

/* harmony default export */ const components_Banner = (Banner_Banner);


/***/ }),

/***/ 2725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Footer"
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Footer/index.ts

/* harmony default export */ const components_Footer = (Footer_Footer);


/***/ }),

/***/ 6529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Form/Form.tsx


const Form = ({ onSubmit , onReset , children  })=>{
    const form = (0,external_react_.useRef)();
    const handleForm = (e)=>{
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {};
        for (const field of formData){
            data[field[0]] = field[1];
        }
        onSubmit && onSubmit(data);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: handleForm,
            ref: form,
            children: children
        })
    });
};
/* harmony default export */ const Form_Form = (Form);

;// CONCATENATED MODULE: ./src/components/Form/index.ts

/* harmony default export */ const components_Form = (Form_Form);


/***/ }),

/***/ 2690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7346);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
/* harmony import */ var helpers_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5873);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_initActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5230);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9997);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([call__WEBPACK_IMPORTED_MODULE_3__, components__WEBPACK_IMPORTED_MODULE_4__, store_initActions__WEBPACK_IMPORTED_MODULE_10__]);
([call__WEBPACK_IMPORTED_MODULE_3__, components__WEBPACK_IMPORTED_MODULE_4__, store_initActions__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Header = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.user
    );
    const popoverRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)();
    const { 0: ShowModalLogin , 1: setShowModalLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: ShowModalSignup , 1: setShowModalSignup  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: ShowPopover , 1: setShowPopover  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const handleLogin = async (data)=>{
        const res = await call__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post("/auth", {
            ...data
        });
        if (res.msg === "not existed" || res.msg === "not valid email" || res.status === 100) return (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Email ho\u1EB7c m\u1EADt kh\u1EA9u kh\xf4ng ch\xednh x\xe1c");
        if (res.status === 1) (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("\u0110\u0103ng nh\u1EADp th\xe0nh c\xf4ng");
        setShowModalLogin(false);
        helpers_storage__WEBPACK_IMPORTED_MODULE_5__/* ["default"].setToken */ .Z.setToken(res.token);
        dispatch((0,store_initActions__WEBPACK_IMPORTED_MODULE_10__/* .asyncGetUser */ .FP)());
    };
    const handleSignup = async (data)=>{
        if (data.password !== data.repassword) {
            return (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u kh\xf4ng kh\u1EDBp");
        }
        const res = await call__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post("/user", data);
        if (res.msg === "not valid email") return (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Email kh\xf4ng h\u1EE3p l\u1EC7");
        if (res.msg === "wrong length") return (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("M\u1EADt kh\u1EA9u ph\u1EA3i t\u1EEB 6-18 k\xed t\u1EF1");
        if (res.msg === "existed") return (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Email \u0111\xe3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng");
        if (res.status === 1) (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng");
        setShowModalSignup(false);
        setShowModalLogin(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const toggle = (event)=>{
            if (!event.path.includes(popoverRef.current)) {
                setShowPopover(false);
            }
        };
        window.addEventListener("click", toggle);
        return ()=>{
            window.removeEventListener("click", toggle);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                show: ShowModalLogin,
                onClose: ()=>setShowModalLogin(false)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .l0, {
                    onSubmit: handleLogin,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title",
                            children: "\u0110\u0103ng nh\u1EADp"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .II, {
                            name: "email",
                            placeholder: "Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .II, {
                            name: "password",
                            type: "password",
                            placeholder: "M\u1EADt kh\u1EA5u"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "button highlight",
                            children: "\u0110\u0103ng nh\u1EADp"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                show: ShowModalSignup,
                onClose: ()=>setShowModalSignup(false)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .l0, {
                    onSubmit: handleSignup,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title",
                            children: "\u0110\u0103ng k\xfd"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .II, {
                            name: "email",
                            placeholder: "Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .II, {
                            name: "password",
                            type: "password",
                            placeholder: "M\u1EADt kh\u1EA5u"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .II, {
                            name: "repassword",
                            type: "password",
                            placeholder: "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA5u"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "button highlight",
                            children: "\u0110\u0103ng k\xfd"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/images/logo.png",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "menu",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: _const__WEBPACK_IMPORTED_MODULE_11__/* .MENU.map */ .s.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: o.link,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: o.text
                                        })
                                    })
                                }, o.text)
                            )
                        })
                    }),
                    !user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "profile",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setShowModalLogin(true)
                                ,
                                className: "button",
                                children: "\u0110\u0103ng nh\u1EADp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setShowModalSignup(true)
                                ,
                                className: "button highlight",
                                children: "\u0110\u0103ng k\xfd"
                            })
                        ]
                    }),
                    user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: popoverRef,
                        onClick: ()=>setShowPopover(!ShowPopover)
                        ,
                        className: "profile loged",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "name",
                                children: user.email
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "icon",
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUser
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `popover ${ShowPopover ? "show" : ""} `,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                href: "/cart",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: " Gi\u1ECF h\xe0ng"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                href: "/history",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "\u0110\u01A1n h\xe0ng"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                href: "/profile",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "Th\xf4ng tin c\xe1 nh\xe2n"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>window.location.reload()
                                            ,
                                            children: "\u0110\u0103ng xu\u1EA5t"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        text: "Thi\u1EBFt k\u1EBF",
        link: "/upload"
    }, 
];


/***/ }),

/***/ 3077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Header__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Input/Input.tsx




const Input = function({ label , type ="text" , name ="" , placeholder ="" , onChange =()=>{} , onFocus =()=>{} , onBlur =()=>{} , defaultValue ="" , ...rest }) {
    const { 0: CurrentType , 1: setCurrentType  } = (0,external_react_.useState)(type);
    const { 0: IsPassword , 1: setIsPassword  } = (0,external_react_.useState)(type === "password");
    const { 0: Active , 1: setActive  } = (0,external_react_.useState)(!!defaultValue || false);
    const { 0: Value , 1: setValue  } = (0,external_react_.useState)(defaultValue);
    (0,external_react_.useEffect)(()=>{
        defaultValue !== "" && setActive(true);
        setValue(defaultValue);
    }, [
        defaultValue
    ]);
    const onChangeInput = (e)=>{
        setValue(e.target.value);
        onChange(e.target.value);
    };
    const onFocusInput = ()=>{
        onFocus();
        setActive(true);
    };
    const onBlurInput = ()=>{
        Value === "" && setActive(false);
        onBlur();
    };
    (0,external_react_.useEffect)(()=>{
        setCurrentType(IsPassword ? "password" : "text");
    }, [
        IsPassword
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row-input",
            ...rest,
            children: [
                label && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "label",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: label,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `input-placeholder ${Active ? "active" : ""}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "placeholder",
                            children: placeholder
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            autoComplete: "off",
                            onFocus: onFocusInput,
                            onBlur: onBlurInput,
                            onChange: onChangeInput,
                            name: name,
                            value: Value,
                            type: CurrentType
                        }),
                        type === "password" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>setIsPassword(!IsPassword)
                            ,
                            className: "eye",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: !IsPassword ? free_solid_svg_icons_.faEyeSlash : free_solid_svg_icons_.faEye
                            })
                        }) : null
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Input_Input = (Input);

;// CONCATENATED MODULE: ./src/components/Input/index.ts

/* harmony default export */ const components_Input = (Input_Input);


/***/ }),

/***/ 8365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h4, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$_, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__]);
_Layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Modal/Modal.tsx

const Modal = ({ show , onClose =()=>{} , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `modal ${show ? "show" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mask",
                    onClick: onClose
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "body",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./src/components/Modal/index.ts

/* harmony default export */ const components_Modal = (Modal_Modal);


/***/ }),

/***/ 9176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Ar": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "II": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "jL": () => (/* reexport safe */ _Banner__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "l0": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3473);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3077);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2725);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1615);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6582);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6529);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__, _Header__WEBPACK_IMPORTED_MODULE_1__]);
([_Layout__WEBPACK_IMPORTED_MODULE_0__, _Header__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ DOMAIN)
/* harmony export */ });
const DOMAIN = "http://localhost:8000/api";


/***/ }),

/***/ 2069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const readFile = (file)=>{
    return new Promise((r)=>{
        const reader = new FileReader();
        reader.onload = (e)=>{
            var ref;
            const buffer = (ref = e.target) === null || ref === void 0 ? void 0 : ref.result;
            const blob = new Blob([
                new Uint8Array(buffer)
            ]);
            const url = window.URL.createObjectURL(blob);
            r(url);
        };
        reader.readAsArrayBuffer(file);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readFile);


/***/ }),

/***/ 5873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keyJwt = "jwt";
const keyRefresh = "refresh";
const storage = {
    getToken () {
        return JSON.parse(localStorage.getItem(keyJwt));
    },
    setToken (jwtToken) {
        localStorage.setItem(keyJwt, JSON.stringify(jwtToken));
    },
    clearToken () {
        localStorage.removeItem(keyJwt);
    },
    getRefresh () {
        return JSON.parse(localStorage.getItem(keyRefresh));
    },
    setRefresh (refreshToken) {
        localStorage.setItem(keyRefresh, JSON.stringify(refreshToken));
    },
    clearRefresh () {
        localStorage.removeItem(keyRefresh);
    },
    getItem (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    setItem (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    clearItem (key) {
        localStorage.removeItem(key);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ }),

/***/ 1767:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__]);
components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Home = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .Ar, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .Banner */ .jL, {
                    items: [
                        {
                            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                        },
                        {
                            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                        },
                        {
                            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                        },
                        {
                            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                        }
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Home"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Home__WEBPACK_IMPORTED_MODULE_0__]);
_Home__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Home__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var helpers_readFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2069);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_3__]);
components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const baseData = {
    img: null,
    border: "full-black",
    ratioX: 1,
    ratioY: 1,
    x: 0,
    y: 0
};
const Upload = ()=>{
    const { 0: Data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        {
            ...baseData
        }
    ]);
    const { 0: ModalData , 1: setModalData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const handleChangeImage = async (event, index)=>{
        var ref, ref1;
        event.persist();
        console.log(index);
        const file = event === null || event === void 0 ? void 0 : (ref = event.target) === null || ref === void 0 ? void 0 : (ref1 = ref.files) === null || ref1 === void 0 ? void 0 : ref1[0];
        if (!file) return;
        const url = await (0,helpers_readFile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(file);
        setData((_data)=>{
            _data[index].img = url;
            if (_data[_data.length - 1].img) _data.push({
                ...baseData
            });
            return [
                ..._data
            ];
        });
    };
    const handleDelete = (e, index)=>{
        e.preventDefault();
        Data.splice(index, 1);
        setData([
            ...Data
        ]);
    };
    const handleEdit = (e, o, index)=>{
        e.preventDefault();
        setModalData({
            ...o,
            index
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (ModalData) {
            Data[ModalData.index] = {
                ...ModalData
            };
            setData([
                ...Data
            ]);
        }
    }, [
        ModalData,
        Data
    ]);
    const handleChangeEdit = (value)=>{
        setModalData({
            ...ModalData,
            ...value
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "upload",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u_, {
                        show: ModalData,
                        onClose: ()=>setModalData(null)
                        ,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "edit-modal",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label",
                                            children: "V\u1ECB tr\xed ngang"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            onChange: (e)=>handleChangeEdit({
                                                    x: e.target.value
                                                })
                                            ,
                                            type: "number",
                                            value: ModalData === null || ModalData === void 0 ? void 0 : ModalData.x
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label",
                                            children: "V\u1ECB tr\xed d\u1ECDc"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            onChange: (e)=>handleChangeEdit({
                                                    y: e.target.value
                                                })
                                            ,
                                            type: "number",
                                            value: ModalData === null || ModalData === void 0 ? void 0 : ModalData.y
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label",
                                            children: "Vi\u1EC1n"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            onChange: (e)=>handleChangeEdit({
                                                    border: e.target.value
                                                })
                                            ,
                                            value: ModalData === null || ModalData === void 0 ? void 0 : ModalData.border,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "full-black",
                                                    children: "Vi\u1EC1n \u0111en"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "full-white",
                                                    children: "Vi\u1EC1n tr\u1EAFng"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label",
                                            children: "T\u1EC9 l\u1EC7 ngang"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            onChange: (e)=>handleChangeEdit({
                                                    ratioX: e.target.value
                                                })
                                            ,
                                            value: ModalData === null || ModalData === void 0 ? void 0 : ModalData.ratioX,
                                            type: "number"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label",
                                            children: "T\u1EC9 l\u1EC7 d\u1ECDc"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            onChange: (e)=>handleChangeEdit({
                                                    ratioY: e.target.value
                                                })
                                            ,
                                            value: ModalData === null || ModalData === void 0 ? void 0 : ModalData.ratioY,
                                            type: "number"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "list-image",
                        children: Data.map((o, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "imagepick" + index,
                                style: {
                                    aspectRatio: `${o.ratioX / o.ratioY}`,
                                    "--x": `${o.x}px`,
                                    "--y": `${o.y}px`
                                },
                                className: `image ${o.border} ${o.img ? "picked" : ""}`,
                                children: [
                                    !o.img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "plus"
                                        })
                                    }),
                                    o.img && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: (e)=>handleDelete(e, index)
                                                ,
                                                className: "delete",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTrashCan
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: (e)=>handleEdit(e, o, index)
                                                ,
                                                className: "edit",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEdit
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: o.img,
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        onChange: (e)=>handleChangeImage(e, index)
                                        ,
                                        type: "file",
                                        name: "",
                                        id: "imagepick" + index
                                    })
                                ]
                            }, `img${index}`)
                        )
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Upload);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Upload__WEBPACK_IMPORTED_MODULE_0__]);
_Upload__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Upload__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "g": () => (/* reexport safe */ _Upload__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3915);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Home__WEBPACK_IMPORTED_MODULE_0__, _Upload__WEBPACK_IMPORTED_MODULE_1__]);
([_Home__WEBPACK_IMPORTED_MODULE_0__, _Upload__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FP": () => (/* binding */ asyncGetUser)
/* harmony export */ });
/* unused harmony exports CHANGE_USER, actionChangeUser */
/* harmony import */ var call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7346);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([call__WEBPACK_IMPORTED_MODULE_0__]);
call__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CHANGE_USER = "CHANGE_USER";
const actionChangeUser = function(user) {
    return {
        type: CHANGE_USER,
        payload: {
            user
        }
    };
};
const asyncGetUser = ()=>async (dispatch)=>{
        const { data  } = await call__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/user`);
        dispatch(actionChangeUser(data));
    }
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;