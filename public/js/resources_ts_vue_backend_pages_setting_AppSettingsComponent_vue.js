(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_setting_AppSettingsComponent_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['loading']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_media_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-media-upload */ "./node_modules/vue-media-upload/index.js");
/* harmony import */ var _components_LoaderBoxComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoaderBoxComponent.vue */ "./resources/ts/vue/backend/components/LoaderBoxComponent.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    UploadMedia: vue_media_upload__WEBPACK_IMPORTED_MODULE_1__.UploadMedia,
    LoaderBox: _components_LoaderBoxComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      app_settings: {},
      media: [],
      url: this.hosturl,
      api_url: '/app-thumbnail-upload',
      updateImage: false,
      loading: false,
      countries: []
    };
  },
  methods: {
    Media: function Media(value) {
      if (this.media.length > 1) {
        this.media.splice(0, 1);
        if (this.$refs['upload-media'] != undefined) this.$refs['upload-media'].reset();
      }

      this.media = [];
      this.media = value;

      if (this.media) {
        var _this$media$;

        console.log(this === null || this === void 0 ? void 0 : this.$refs['upload-media'].media); // console.log(this.$refs?.upload-media?.media);

        this.app_settings.thumbnail = (_this$media$ = this.media[0]) === null || _this$media$ === void 0 ? void 0 : _this$media$.name;
      }
    },
    onSubmit: function onSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return axios.post('dashboard/app-settings', _this.app_settings).then(function (res) {
                  _this.$root.alertNotify(res.status, 'Updated Successfuly', 'success', res.data);

                  _this.getAppSettings();

                  _this.loading = false;
                })["catch"](function (err) {
                  _this.$root.alertNotify(err.response.status, null, 'error', err.response.data);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAppSettings: function getAppSettings() {
      var _this2 = this;

      this.loading = true;
      axios.get('dashboard/app-settings').then(function (res) {
        _this2.app_settings = res.data.app_settings;
        _this2.countries = res.data.countries;
        _this2.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.getAppSettings();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=template&id=7bf837fc":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=template&id=7bf837fc ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex justify-content-center my-1 mt-4 text-dark spinner-border",
  role: "status"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "visually-hidden"
}, "Loading...", -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=template&id=407ad3ef":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=template&id=407ad3ef ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row pd-40"
};
var _hoisted_2 = {
  "class": "card"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "card-title text-muted"
}, "Platform Base Data")], -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 1,
  "class": "card-body"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-xl-6 col-lg-6"
};
var _hoisted_7 = {
  "class": "row"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3 mb-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Company Image")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "col-sm-9 mb-1"
};
var _hoisted_10 = {
  key: 1,
  "class": "profile-img app-setting-image"
};
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "row"
};
var _hoisted_13 = {
  "class": "col-12"
};
var _hoisted_14 = {
  "class": "mb-1 row"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Company Name")], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "col-sm-9"
};
var _hoisted_17 = {
  "class": "col-12"
};
var _hoisted_18 = {
  "class": "mb-1 row"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Tax ID")], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "col-sm-9"
};
var _hoisted_21 = {
  "class": "col-12"
};
var _hoisted_22 = {
  "class": "mb-1 row"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "VAT No")], -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "col-sm-9"
};
var _hoisted_25 = {
  "class": "col-12"
};
var _hoisted_26 = {
  "class": "mb-1 row"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "HBR No")], -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "col-sm-9"
};
var _hoisted_29 = {
  "class": "col-12"
};
var _hoisted_30 = {
  "class": "mb-1 row"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Provisional Client")], -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "col-sm-9"
};
var _hoisted_33 = {
  "class": "col-12"
};
var _hoisted_34 = {
  "class": "mb-1 row"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Provisional Contractor")], -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "col-sm-9"
};
var _hoisted_37 = {
  "class": "col-12"
};
var _hoisted_38 = {
  "class": "mb-1 row"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Handling Fee")], -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "col-sm-9"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 offset-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary me-1 waves-effect waves-float waves-light float-right"
}, " Submit ")], -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "col-xl-6 col-lg-6"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Address "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-plus-circle"
})], -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "row"
};
var _hoisted_45 = {
  "class": "col-12"
};
var _hoisted_46 = {
  "class": "mb-1 row"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Country Name")], -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "col-sm-9"
};
var _hoisted_49 = ["value"];
var _hoisted_50 = {
  "class": "col-12"
};
var _hoisted_51 = {
  "class": "mb-1 row"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Street / House No")], -1
/* HOISTED */
);

var _hoisted_53 = {
  "class": "col-sm-6"
};
var _hoisted_54 = {
  "class": "col-sm-3"
};
var _hoisted_55 = {
  "class": "col-12"
};
var _hoisted_56 = {
  "class": "mb-1 row"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Zip code / Town")], -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "col-sm-3"
};
var _hoisted_59 = {
  "class": "col-sm-6"
};
var _hoisted_60 = {
  "class": "col-12"
};
var _hoisted_61 = {
  "class": "mb-1 row"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "State")], -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "col-sm-9"
};
var _hoisted_64 = {
  "class": "form-check form-check-primary form-switch"
};
var _hoisted_65 = ["checked"];

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Use as billing address?", -1
/* HOISTED */
);

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 offset-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary me-1 waves-effect waves-float waves-light float-right"
}, " Submit ")], -1
/* HOISTED */
);

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-plus-circle"
})], -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "row"
};
var _hoisted_70 = {
  "class": "col-12"
};
var _hoisted_71 = {
  "class": "mb-1 row"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Billing E-mail")], -1
/* HOISTED */
);

var _hoisted_73 = {
  "class": "col-sm-9"
};
var _hoisted_74 = {
  "class": "col-12"
};
var _hoisted_75 = {
  "class": "mb-1 row"
};

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Support Email")], -1
/* HOISTED */
);

var _hoisted_77 = {
  "class": "col-sm-9"
};
var _hoisted_78 = {
  "class": "col-12"
};
var _hoisted_79 = {
  "class": "mb-1 row"
};

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Phone")], -1
/* HOISTED */
);

var _hoisted_81 = {
  "class": "col-sm-9"
};
var _hoisted_82 = {
  "class": "col-12"
};
var _hoisted_83 = {
  "class": "mb-1 row"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Mobile")], -1
/* HOISTED */
);

var _hoisted_85 = {
  "class": "col-sm-9"
};

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 offset-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary me-1 waves-effect waves-float waves-light float-right"
}, " Submit ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this$app_settings;

  var _component_loader_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loader-box");

  var _component_upload_media = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("upload-media");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, $data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_loader_box, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$data.updateImage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_upload_media, {
    key: 0,
    "class": "round",
    server: "/app-thumbnail-upload",
    onMedia: $options.Media,
    ref: "upload-media"
  }, null, 8
  /* PROPS */
  , ["onMedia"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "round",
    src: "".concat($data.url, "/img/app/").concat((_this$app_settings = this.app_settings) === null || _this$app_settings === void 0 ? void 0 : _this$app_settings.thumbnail),
    height: "150",
    width: "150",
    alt: "img-placeholder"
  }, null, 8
  /* PROPS */
  , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.updateImage = true;
    }),
    "class": "fa fa-close ml-4 cursor-pointer"
  })]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form form-horizontal",
    onSubmit: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "company-name",
    "class": "form-control",
    name: "company_name",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.app_settings.company_name = $event;
    }),
    placeholder: "Company Name"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.company_name]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "tax_id",
    "class": "form-control",
    name: "tax_id",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.app_settings.tax_id = $event;
    }),
    placeholder: "Tax Name"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.tax_id]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "vat_no",
    "class": "form-control",
    name: "vat_no",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.app_settings.vat_no = $event;
    }),
    placeholder: "VAT No"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.vat_no]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "hbr_no",
    "class": "form-control",
    name: "hbr_no",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.app_settings.hbr_no = $event;
    }),
    placeholder: "HBR No"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.hbr_no]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    id: "provisional_client",
    "class": "form-control",
    name: "provisional_client",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.app_settings.provisional_client = $event;
    }),
    placeholder: "Provisional Client"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.provisional_client]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    id: "provisional_contractor",
    "class": "form-control",
    name: "provisional_contractor",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.app_settings.provisional_contractor = $event;
    }),
    placeholder: "Provisional Contractor"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.provisional_contractor]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    id: "handling_fee",
    "class": "form-control",
    name: "handling_fee",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.app_settings.handling_fee = $event;
    }),
    placeholder: "Handling Fee"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.handling_fee]])])])]), _hoisted_41])], 32
  /* HYDRATE_EVENTS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form form-horizontal",
    onSubmit: _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input\n                                              type=\"text\"\n                                              id=\"country\"\n                                              class=\"form-control\"\n                                              name=\"country\"\n                                              v-model=\"app_settings.country\"\n                                              placeholder=\"Country Name\"\n                                            /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    id: "selectDefault",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.app_settings.country = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.countries, function (country, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index,
      value: country.country_code
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(country.country_name), 9
    /* TEXT, PROPS */
    , _hoisted_49);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.app_settings.country]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "street",
    "class": "form-control",
    name: "street",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.app_settings.street = $event;
    }),
    placeholder: "Street"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.street]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "house_no",
    "class": "form-control",
    name: "house_no",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.app_settings.house_no = $event;
    }),
    placeholder: "House No"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.house_no]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "zip_code",
    "class": "form-control",
    name: "zip_code",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.app_settings.zip_code = $event;
    }),
    placeholder: "Zip code"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.zip_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "town",
    "class": "form-control",
    name: "town",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.app_settings.town = $event;
    }),
    placeholder: "Town"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.town]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "state",
    "class": "form-control",
    name: "state",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.app_settings.state = $event;
    }),
    placeholder: "State"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.state]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    name: "use_as_billing",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.app_settings.use_as_billing = $event;
    }),
    checked: $data.app_settings.use_as_billing == 1,
    "class": "form-check-input mt-6",
    id: "customSwitch3"
  }, null, 8
  /* PROPS */
  , _hoisted_65), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.app_settings.use_as_billing]]), _hoisted_66])]), _hoisted_67])], 32
  /* HYDRATE_EVENTS */
  ), _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form form-horizontal",
    onSubmit: _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "billing_email",
    "class": "form-control",
    name: "billing_email",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.app_settings.billing_email = $event;
    }),
    placeholder: "Billing E-mail"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.billing_email]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "support_email",
    "class": "form-control",
    name: "support_email",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.app_settings.support_email = $event;
    }),
    placeholder: "Support Email"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.support_email]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "phone",
    "class": "form-control",
    name: "phone",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.app_settings.phone = $event;
    }),
    placeholder: "Phone"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.phone]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "mobile",
    "class": "form-control",
    name: "mobile",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.app_settings.mobile = $event;
    }),
    placeholder: "Mobile"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.app_settings.mobile]])])])]), _hoisted_86])], 32
  /* HYDRATE_EVENTS */
  )])])]))])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-wraper[data-v-3904557e]{\r\n    min-height: 200px !important;\n}\n.gallery[data-v-3904557e]{\r\n    background-color: #fbfbfb !important;\r\n    border-radius: 5px !important;\r\n    border-style: solid !important;\r\n    border: 1px solid #bbbbbb !important;\r\n    line-height: 1 !important;\r\n    box-sizing: border-box !important;\r\n    height: auto !important;\n}\n.image-container[data-v-3904557e]{\r\n    display: inline-table !important;\r\n    height: 90px !important;\r\n    width: 140px !important;\r\n    display: flex !important;\n}\n.images-preview[data-v-3904557e] {\r\n    border-radius: 5px !important;\r\n    border: 1px solid #ccc !important;\r\n    display: inline-block !important;\r\n    width: 140px !important;\r\n    height: 88px !important;\r\n    transition: filter 0.1s linear;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center;\r\n       object-position: center;\n}\n.images-preview[data-v-3904557e]:hover{\r\n    filter: brightness(90%);\n}\n.button-container[data-v-3904557e]{\r\n    display: inline-flex !important;\r\n    height: 90px !important;\r\n    width: 140px !important;\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\n}\n.images-upload[data-v-3904557e] {\r\n    background-color: #ffffff !important;\r\n    border-radius: 5px !important;\r\n    border: 1px dashed #ccc !important;\r\n    display: inline-block !important;\r\n    cursor: pointer !important;\r\n    width: 140px !important;\r\n    height: 88px !important;\r\n    text-align: center;\n}\n.images-upload[data-v-3904557e]:hover{\r\n    background-color: #f1f1f1 !important;\n}\n.close-btn[data-v-3904557e]{\r\n    background: none !important;\r\n\tcolor:white !important;\r\n\tborder: none !important;\r\n\tpadding: 0px !important;\r\n    margin:0px !important;\r\n\tfont: inherit !important;\r\n\tcursor: pointer !important;\r\n\toutline: inherit !important;\r\n    position: relative !important;\r\n    right: 34px !important;\r\n    top: -27px !important;\r\n    width: 0px !important;\n}\n.times-icon[data-v-3904557e]{\r\n    font-size: 3rem !important;\r\n    padding: 0px !important;\r\n    margin:0px !important;\r\n    filter: drop-shadow(0px 0px 1px black);\n}\n.custum-icon[data-v-3904557e]{\r\n    color: #00afca !important;\r\n    font-size: 3rem !important;\r\n    margin-top: 18px !important;\n}\n.custum-icon[data-v-3904557e]:hover{\r\n    color: #29818f !important;\n}\n.close-btn[data-v-3904557e]:hover{\r\n    color: red !important;\n}\r\n\r\n/* -------------------- */\n.width-100[data-v-3904557e] {\r\n  width: 100% !important;\n}\n.red-border[data-v-3904557e] {\r\n    border: 1px solid #dc3545 !important;\r\n    border-color: #dc3545 !important;\n}\n.elements-wraper[data-v-3904557e] {\r\n  padding: 1rem !important;\r\n  display: flex !important;\r\n  flex-wrap: wrap !important;\n}\n.align-center[data-v-3904557e] {\r\n  text-align: center !important;\n}\n.m-top-1[data-v-3904557e] {\r\n  margin-top: 0.25rem !important;\n}\n.image-margin[data-v-3904557e] {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\n}\n.red-text[data-v-3904557e] {\r\n    color: #d82335;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-wraper[data-v-7beb41ee]{\r\n    min-height: 200px !important;\n}\n.gallery[data-v-7beb41ee]{\r\n    background-color: #fbfbfb !important;\r\n    border-radius: 5px !important;\r\n    border-style: solid !important;\r\n    border: 1px solid #bbbbbb !important;\r\n    line-height: 1 !important;\r\n    box-sizing: border-box !important;\r\n    height: auto !important;\n}\n.image-container[data-v-7beb41ee]{\r\n    display: inline-table !important;\r\n    height: 90px !important;\r\n    width: 140px !important;\r\n    display: flex !important;\n}\n.images-preview[data-v-7beb41ee] {\r\n    border-radius: 5px !important;\r\n    border: 1px solid #ccc !important;\r\n    display: inline-block !important;\r\n    width: 140px !important;\r\n    height: 88px !important;\r\n    transition: filter 0.1s linear;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center;\r\n       object-position: center;\n}\n.images-preview[data-v-7beb41ee]:hover{\r\n    filter: brightness(90%);\n}\n.button-container[data-v-7beb41ee]{\r\n    display: inline-flex !important;\r\n    height: 90px !important;\r\n    width: 140px !important;\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\n}\n.images-upload[data-v-7beb41ee] {\r\n    background-color: #ffffff !important;\r\n    border-radius: 5px !important;\r\n    border: 1px dashed #ccc !important;\r\n    display: inline-block !important;\r\n    cursor: pointer !important;\r\n    width: 140px !important;\r\n    height: 88px !important;\r\n    text-align: center;\n}\n.images-upload[data-v-7beb41ee]:hover{\r\n    background-color: #f1f1f1 !important;\n}\n.close-btn[data-v-7beb41ee]{\r\n    background: none !important;\r\n\tcolor:white !important;\r\n\tborder: none !important;\r\n\tpadding: 0px !important;\r\n    margin:0px !important;\r\n\tfont: inherit !important;\r\n\tcursor: pointer !important;\r\n\toutline: inherit !important;\r\n    position: relative !important;\r\n    right: 34px !important;\r\n    top: -27px !important;\r\n    width: 0px !important;\n}\n.times-icon[data-v-7beb41ee]{\r\n    font-size: 3rem !important;\r\n    padding: 0px !important;\r\n    margin:0px !important;\r\n    filter: drop-shadow(0px 0px 1px black);\n}\n.custum-icon[data-v-7beb41ee]{\r\n    color: #00afca !important;\r\n    font-size: 3rem !important;\r\n    margin-top: 18px !important;\n}\n.custum-icon[data-v-7beb41ee]:hover{\r\n    color: #29818f !important;\n}\n.close-btn[data-v-7beb41ee]:hover{\r\n    color: red !important;\n}\r\n\r\n\r\n/* -------------------- */\n.width-100[data-v-7beb41ee] {\r\n  width: 100% !important;\n}\n.red-border[data-v-7beb41ee] {\r\n    border: 1px solid #dc3545 !important;\r\n    border-color: #dc3545 !important;\n}\n.elements-wraper[data-v-7beb41ee] {\r\n  padding: 1rem !important;\r\n  display: flex !important;\r\n  flex-wrap: wrap !important;\n}\n.align-center[data-v-7beb41ee] {\r\n  text-align: center !important;\n}\n.m-top-1[data-v-7beb41ee] {\r\n  margin-top: 0.25rem !important;\n}\n.image-margin[data-v-7beb41ee] {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\n}\n.red-text[data-v-7beb41ee] {\r\n    color: #d82335;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-enter-active[data-v-7a28fd80], .fade-leave-active[data-v-7a28fd80] {\r\n  transition: opacity .3s;\n}\n.fade-enter[data-v-7a28fd80], .fade-leave-to[data-v-7a28fd80] {\r\n  opacity: 0;\n}\n.velmld-overlay[data-v-7a28fd80] {\r\n  position: absolute;\r\n  z-index: 3000;\r\n  margin: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  transition: opacity .3s;\n}\n.velmld-spinner[data-v-7a28fd80] {\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  position: absolute;\r\n  text-align: center\n}\n.velmld-full-screen[data-v-7a28fd80] {\r\n  position: fixed;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.velmld-parent {\r\n  position: relative !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-container .images-preview{\n    height: 100px !important;\n    width: 130px !important;\n    border: 1px solid #e1e1e1;\n    padding: 10px;\n    border-radius: 8px;\n    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMedia_vue_vue_type_style_index_0_id_3904557e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMedia_vue_vue_type_style_index_0_id_3904557e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMedia_vue_vue_type_style_index_0_id_3904557e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_UploadMedia_vue_vue_type_style_index_0_id_7beb41ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_UploadMedia_vue_vue_type_style_index_0_id_7beb41ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_UploadMedia_vue_vue_type_style_index_0_id_7beb41ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_7a28fd80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_7a28fd80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_7a28fd80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_7a28fd80_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=7a28fd80&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_7a28fd80_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_7a28fd80_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_style_index_0_id_407ad3ef_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_style_index_0_id_407ad3ef_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_style_index_0_id_407ad3ef_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/UpdateMedia.vue":
/*!****************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/UpdateMedia.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateMedia_vue_vue_type_template_id_3904557e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateMedia.vue?vue&type=template&id=3904557e&scoped=true */ "./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=template&id=3904557e&scoped=true");
/* harmony import */ var _UpdateMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateMedia.vue?vue&type=script&lang=js */ "./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=script&lang=js");
/* harmony import */ var _UpdateMedia_vue_vue_type_style_index_0_id_3904557e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css */ "./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_UpdateMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UpdateMedia_vue_vue_type_template_id_3904557e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3904557e"],['__file',"node_modules/vue-media-upload/uploader/UpdateMedia.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/index.vue */ "./node_modules/vue-media-upload/uploader/loader/index.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

    
    

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
        
        data(){
            return{
                addedMedia:[],
            
                savedMedia:[],
                deletedMedia:[],

                loading:true
            }
        },
        methods:{
            async fileChange(event){
                this.loading=true
                let files = event.target.files
                for(var i=0; i < files.length; i++){
                    let formData = new FormData
                    let url = URL.createObjectURL(files[i])
                    formData.set('image', files[i])
                    const {data} = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.server, formData)
                        
                    this.addedMedia.push({url:url, name:data.name, size:files[i].size, type:files[i].type});
                }
                this.loading=false
                this.mediaEmit()
            },
            remove(index){
                this.addedMedia.splice(index,1)
                this.mediaEmit()
            },
            removeSavedMedia(index){
                this.deletedMedia.push({name:this.savedMedia[index].name});
                this.savedMedia.splice(index,1)
                this.mediaEmit()
            },
            mediaEmit(){
                this.$emit('addedMedia',this.addedMedia)
                this.$emit('deletedMedia', this.deletedMedia)
                this.$emit('savedMedia', this.savedMedia)
            }
            
        },
        props:{
            mediaServer:{
                type: String,
                required : true,
            },
            error: {
                type: String,
                default: null,
            },
            server: {
                type: String,
                default: '/api/upload',
            },
            mediaFilePath:{
                type: String,
                required : true,
            }
        },
        mounted() {
            axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.mediaServer)
                .then(response=>{
                    this.savedMedia=response.data.media
                    this.loading = false
                    
                    this.mediaEmit()
                })
                
        },
        components:{Loader: _loader_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]}
    });
        


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/UploadMedia.vue":
/*!****************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/UploadMedia.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UploadMedia_vue_vue_type_template_id_7beb41ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadMedia.vue?vue&type=template&id=7beb41ee&scoped=true */ "./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=template&id=7beb41ee&scoped=true");
/* harmony import */ var _UploadMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadMedia.vue?vue&type=script&lang=js */ "./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=script&lang=js");
/* harmony import */ var _UploadMedia_vue_vue_type_style_index_0_id_7beb41ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css */ "./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_UploadMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UploadMedia_vue_vue_type_template_id_7beb41ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7beb41ee"],['__file',"node_modules/vue-media-upload/uploader/UploadMedia.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/index.vue */ "./node_modules/vue-media-upload/uploader/loader/index.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

    
    
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
        data(){
            return{
                media:[],
                loading:false,
            }
        },
        methods:{
            async fileChange(event){
                this.loading=true
                let files = event.target.files
                for(var i=0; i < files.length; i++){
                    let formData = new FormData
                    let url = URL.createObjectURL(files[i])
                    formData.set('image', files[i])
                    const {data} = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.server, formData)
                        
                    this.media.push({url:url, name:data.name, size:files[i].size, type:files[i].type});
                        
                }
                this.loading=false
                this.mediaEmit()
                
            },
            remove(index){
                this.media.splice(index,1)
                this.mediaEmit()
            },
            mediaEmit(){
                this.$emit('media',this.media)
            }
        },
        mounted() {
            this.$emit('media',this.media)
        },
        props:{
            error: {
                type: String,
                default: null,
            },
            server: {
                type: String,
                default: '/api/upload',
            }
        },
        components:{Loader: _loader_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]} 
    });


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/index.vue":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_7a28fd80_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7a28fd80&scoped=true */ "./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=template&id=7a28fd80&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_7a28fd80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css */ "./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_7a28fd80_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=7a28fd80&lang=css */ "./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_7a28fd80_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7a28fd80"],['__file',"node_modules/vue-media-upload/uploader/loader/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loaders */ "./node_modules/vue-media-upload/uploader/loader/loaders/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'vue-element-loading',
  props: {
    active: Boolean,
    spinner: {
      type: String,
      default: 'spinner'
    },
    text: {
      type: String,
      default: ''
    },
    textStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    color: {
      type: String,
      default: '#000'
    },
    isFullScreen: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, .9)'
    },
    size: {
      type: String,
      default: '40'
    },
    duration: {
      type: String,
      default: '0.6'
    },
    delay: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      isActive: this.active || false,
      isActiveDelay: false
    }
  },
  /**
   * Append class 'velmld-parent' to parent container.
   */
  mounted () {
    this.$refs.velmld.parentNode.classList.add('velmld-parent')

    if (this.delay) {
      const delayMs = (+this.delay) * 1000
      this.delayActive(delayMs)
    }
  },
  methods: {
    delayActive (ms) {
      this.isActiveDelay = true

      setTimeout(() => {
        this.isActiveDelay = false  
      }, ms)
    }
  },
  watch: {
    /**
     * Binding outside component value and inside component value.
     * Append class 'velmld-parent' to parent container.
     */
    active (value) {
      this.isActive = value
      if (value) {
        this.$refs.velmld.parentNode.classList.add('velmld-parent')
      }
    }
  },
  components: _loaders__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _line_scale_vue_vue_type_template_id_a1132fbc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-scale.vue?vue&type=template&id=a1132fbc */ "./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=template&id=a1132fbc");
/* harmony import */ var _line_scale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-scale.vue?vue&type=script&lang=js */ "./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_line_scale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_line_scale_vue_vue_type_template_id_a1132fbc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'line-scale',
  props: {
    color: {
      type: String,
      default: '#CCC'
    },
    size: {
      type: String,
      default: '40px'
    },
    duration: {
      type: String,
      default: '0.6s'
    }
  }
});


/***/ }),

/***/ "./resources/ts/vue/backend/components/LoaderBoxComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/ts/vue/backend/components/LoaderBoxComponent.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoaderBoxComponent_vue_vue_type_template_id_7bf837fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoaderBoxComponent.vue?vue&type=template&id=7bf837fc */ "./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=template&id=7bf837fc");
/* harmony import */ var _LoaderBoxComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoaderBoxComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoaderBoxComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoaderBoxComponent_vue_vue_type_template_id_7bf837fc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/components/LoaderBoxComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppSettingsComponent_vue_vue_type_template_id_407ad3ef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSettingsComponent.vue?vue&type=template&id=407ad3ef */ "./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=template&id=407ad3ef");
/* harmony import */ var _AppSettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSettingsComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _AppSettingsComponent_vue_vue_type_style_index_0_id_407ad3ef_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css */ "./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AppSettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppSettingsComponent_vue_vue_type_template_id_407ad3ef__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoaderBoxComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoaderBoxComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoaderBoxComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSettingsComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=template&id=7bf837fc":
/*!**************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=template&id=7bf837fc ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoaderBoxComponent_vue_vue_type_template_id_7bf837fc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoaderBoxComponent_vue_vue_type_template_id_7bf837fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoaderBoxComponent.vue?vue&type=template&id=7bf837fc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/LoaderBoxComponent.vue?vue&type=template&id=7bf837fc");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=template&id=407ad3ef":
/*!*******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=template&id=407ad3ef ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_template_id_407ad3ef__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_template_id_407ad3ef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSettingsComponent.vue?vue&type=template&id=407ad3ef */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=template&id=407ad3ef");


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMedia_vue_vue_type_style_index_0_id_3904557e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=style&index=0&id=3904557e&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_UploadMedia_vue_vue_type_style_index_0_id_7beb41ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=style&index=0&id=7beb41ee&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_7a28fd80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=0&id=7a28fd80&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_7a28fd80_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=7a28fd80&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=style&index=1&id=7a28fd80&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_style_index_0_id_407ad3ef_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/setting/AppSettingsComponent.vue?vue&type=style&index=0&id=407ad3ef&lang=css");


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateMedia.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_UploadMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_UploadMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./UploadMedia.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_line_scale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_line_scale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./line-scale.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=template&id=3904557e&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=template&id=3904557e&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMedia_vue_vue_type_template_id_3904557e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMedia_vue_vue_type_template_id_3904557e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateMedia.vue?vue&type=template&id=3904557e&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=template&id=3904557e&scoped=true");


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=template&id=7beb41ee&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=template&id=7beb41ee&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_UploadMedia_vue_vue_type_template_id_7beb41ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_UploadMedia_vue_vue_type_template_id_7beb41ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./UploadMedia.vue?vue&type=template&id=7beb41ee&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=template&id=7beb41ee&scoped=true");


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=template&id=7a28fd80&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=template&id=7a28fd80&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_7a28fd80_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_7a28fd80_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=7a28fd80&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=template&id=7a28fd80&scoped=true");


/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=template&id=a1132fbc":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=template&id=a1132fbc ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_line_scale_vue_vue_type_template_id_a1132fbc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_line_scale_vue_vue_type_template_id_a1132fbc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./line-scale.vue?vue&type=template&id=a1132fbc */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=template&id=a1132fbc");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=template&id=3904557e&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UpdateMedia.vue?vue&type=template&id=3904557e&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3904557e"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "" }
const _hoisted_2 = { class: "elements-wraper" }
const _hoisted_3 = { class: "button-container image-margin" }
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "images-upload",
  class: "images-upload"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    class: "custum-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24"
  }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", { fill: "none" }, [
      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z",
        fill: "currentColor"
      })
    ])
  ])
], -1 /* HOISTED */))
const _hoisted_5 = ["src"]
const _hoisted_6 = ["onClick"]
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  class: "times-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.65em",
  height: "0.65em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 352 512"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    fill: "currentColor"
  })
], -1 /* HOISTED */))
const _hoisted_8 = [
  _hoisted_7
]
const _hoisted_9 = ["src"]
const _hoisted_10 = ["onClick"]
const _hoisted_11 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  class: "times-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.65em",
  height: "0.65em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 352 512"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    fill: "currentColor"
  })
], -1 /* HOISTED */))
const _hoisted_12 = [
  _hoisted_11
]
const _hoisted_13 = ["value"]
const _hoisted_14 = ["value"]
const _hoisted_15 = {
  key: 0,
  class: "m-top"
}
const _hoisted_16 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  name: "media",
  value: "1",
  hidden: ""
}, null, -1 /* HOISTED */))
const _hoisted_17 = [
  _hoisted_16
]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loader")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["gallery width-100", $props.error?'red-border':''])
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Loader, {
          color: "#0275d8",
          active: $data.loading,
          spinner: "line-scale",
          "background-color": "rgba(255, 255, 255, .4)"
        }, null, 8 /* PROPS */, ["active"]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("UPLOAD BUTTON"),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            _hoisted_4,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              onChange: _cache[0] || (_cache[0] = (...args) => ($options.fileChange && $options.fileChange(...args))),
              id: "images-upload",
              type: "file",
              accept: "image/*",
              multiple: "",
              hidden: ""
            }, null, 32 /* HYDRATE_EVENTS */)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMAGES PREVIEW"),
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.savedMedia, (image, index) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: index,
              class: "image-container image-margin"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                src: $props.mediaFilePath +'/'+ image.name,
                alt: "",
                class: "images-preview"
              }, null, 8 /* PROPS */, _hoisted_5),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: $event => ($options.removeSavedMedia(index)),
                class: "close-btn",
                type: "button"
              }, _hoisted_8, 8 /* PROPS */, _hoisted_6)
            ]))
          }), 128 /* KEYED_FRAGMENT */)),
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.addedMedia, (image, index) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: index,
              class: "image-container image-margin"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                src: image.url,
                alt: "",
                class: "images-preview"
              }, null, 8 /* PROPS */, _hoisted_9),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: $event => ($options.remove(index)),
                class: "close-btn",
                type: "button"
              }, _hoisted_12, 8 /* PROPS */, _hoisted_10)
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ], 2 /* CLASS */)
    ]),
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.addedMedia, (image, index) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: index,
        class: "m-top"
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          name: "added_media[]",
          value: image.name,
          hidden: ""
        }, null, 8 /* PROPS */, _hoisted_13)
      ]))
    }), 128 /* KEYED_FRAGMENT */)),
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.deletedMedia, (image, index) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: index,
        class: "m-top"
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          name: "deleted_media[]",
          value: image.name,
          hidden: ""
        }, null, 8 /* PROPS */, _hoisted_14)
      ]))
    }), 128 /* KEYED_FRAGMENT */)),
    ($data.addedMedia.length||$data.savedMedia.length)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, _hoisted_17))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=template&id=7beb41ee&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/UploadMedia.vue?vue&type=template&id=7beb41ee&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7beb41ee"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "" }
const _hoisted_2 = { class: "elements-wraper" }
const _hoisted_3 = { class: "button-container image-margin" }
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "images-upload",
  class: "images-upload"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    class: "custum-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24"
  }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", { fill: "none" }, [
      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z",
        fill: "currentColor"
      })
    ])
  ])
], -1 /* HOISTED */))
const _hoisted_5 = ["src"]
const _hoisted_6 = ["onClick"]
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  class: "times-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.65em",
  height: "0.65em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 352 512"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    fill: "currentColor"
  })
], -1 /* HOISTED */))
const _hoisted_8 = [
  _hoisted_7
]
const _hoisted_9 = ["value"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loader")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["gallery width-100", $props.error?'red-border':''])
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Loader, {
          color: "#0275d8",
          active: $data.loading,
          spinner: "line-scale",
          "background-color": "rgba(255, 255, 255, .4)"
        }, null, 8 /* PROPS */, ["active"]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("UPLOAD BUTTON"),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            _hoisted_4,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              onChange: _cache[0] || (_cache[0] = (...args) => ($options.fileChange && $options.fileChange(...args))),
              id: "images-upload",
              type: "file",
              accept: "image/*",
              multiple: "",
              hidden: ""
            }, null, 32 /* HYDRATE_EVENTS */)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMAGES PREVIEW"),
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.media, (image, index) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: index,
              class: "image-container image-margin"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                src: image.url,
                alt: "",
                class: "images-preview"
              }, null, 8 /* PROPS */, _hoisted_5),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: $event => ($options.remove(index)),
                class: "close-btn",
                type: "button"
              }, _hoisted_8, 8 /* PROPS */, _hoisted_6)
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ], 2 /* CLASS */),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.media, (image, index) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          class: "m-top"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            name: "media[]",
            value: image.name,
            hidden: ""
          }, null, 8 /* PROPS */, _hoisted_9)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=template&id=7a28fd80&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/index.vue?vue&type=template&id=7a28fd80&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7a28fd80"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "velmld-spinner" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{ 'velmld-full-screen': $props.isFullScreen }, "velmld-overlay"]),
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ backgroundColor: $props.backgroundColor }),
        ref: "velmld"
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.spinner), {
              color: $props.color,
              size: `${$props.size}px`,
              duration: `${$props.duration}s`
            }, null, 8 /* PROPS */, ["color", "size", "duration"]))
          ], true),
          ($props.text.length)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 0,
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ color: $props.color, ...$props.textStyle })
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.text), 5 /* TEXT, STYLE */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ])
      ], 6 /* CLASS, STYLE */), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isActive || $data.isActiveDelay]
      ])
    ]),
    _: 3 /* FORWARDED */
  }))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=template&id=a1132fbc":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue?vue&type=template&id=a1132fbc ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = ["width", "height"]
const _hoisted_2 = ["fill"]
const _hoisted_3 = ["dur"]
const _hoisted_4 = ["dur"]
const _hoisted_5 = ["fill"]
const _hoisted_6 = ["dur"]
const _hoisted_7 = ["dur"]
const _hoisted_8 = ["fill"]
const _hoisted_9 = ["dur"]
const _hoisted_10 = ["dur"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 24 30",
    style: {"enable-background":"new 0 0 50 50"},
    "xml:space": "preserve"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
      x: "0",
      y: "13",
      width: "4",
      height: "5",
      fill: $props.color
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "height",
        attributeType: "XML",
        values: "5;21;5",
        begin: "0s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_3),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "y",
        attributeType: "XML",
        values: "13; 5; 13",
        begin: "0s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_4)
    ], 8 /* PROPS */, _hoisted_2),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
      x: "10",
      y: "13",
      width: "4",
      height: "5",
      fill: $props.color
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "height",
        attributeType: "XML",
        values: "5;21;5",
        begin: "0.15s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_6),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "y",
        attributeType: "XML",
        values: "13; 5; 13",
        begin: "0.15s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_7)
    ], 8 /* PROPS */, _hoisted_5),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
      x: "20",
      y: "13",
      width: "4",
      height: "5",
      fill: $props.color
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "height",
        attributeType: "XML",
        values: "5;21;5",
        begin: "0.3s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_9),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "y",
        attributeType: "XML",
        values: "13; 5; 13",
        begin: "0.3s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_10)
    ], 8 /* PROPS */, _hoisted_8)
  ], 8 /* PROPS */, _hoisted_1))
}

/***/ }),

/***/ "./node_modules/vue-media-upload/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-media-upload/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateMedia": () => (/* reexport safe */ _uploader_UpdateMedia_vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "UploadMedia": () => (/* reexport safe */ _uploader_UploadMedia_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _uploader_UploadMedia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploader/UploadMedia.vue */ "./node_modules/vue-media-upload/uploader/UploadMedia.vue");
/* harmony import */ var _uploader_UpdateMedia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploader/UpdateMedia.vue */ "./node_modules/vue-media-upload/uploader/UpdateMedia.vue");



    



/***/ }),

/***/ "./node_modules/vue-media-upload/uploader/loader/loaders/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-media-upload/uploader/loader/loaders/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _line_scale_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-scale.vue */ "./node_modules/vue-media-upload/uploader/loader/loaders/line-scale.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  LineScale: _line_scale_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ })

}]);