"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_BACKUP_roles_RolesComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/ValidateInputComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ValidateInput: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/ValidateInputComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: ['edit_mode', 'form'],
  data: function data() {
    return {
      role: {},
      errors: []
    };
  },
  watch: {
    form: function form(collection) {
      this.errors = [];

      if (collection == null) {
        return this.restForm();
      }

      if (collection) {
        // this.errors = "";
        return this.role = collection;
      } else {
        this.restForm();
      }
    }
  },
  mounted: function mounted() {
    console.log("test m");
  },
  methods: {
    restForm: function restForm() {
      this.role = {};
      this.errors = [];
    },
    onSubmit: function onSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.edit_mode) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return axios.post('/role', _this.role).then(function (res) {
                  _this.$emit("created", _this.role);

                  _this.$root.alertNotify(res.status, 'Created Successfuly', 'success', res.data);

                  _this.restForm();
                })["catch"](function (err) {
                  _this.errors = err.response.data;

                  _this.$root.alertNotify(err.response.status, null, 'error', err.response.data);
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return axios.put('/role/' + _this.form.id, _this.role).then(function (res) {
                  console.log(_this.role);

                  _this.$emit("updated", _this.role);

                  _this.$root.alertNotify(res.status, 'Updated Successfuly', 'info', res.data); //   this.restForm();

                })["catch"](function (err) {
                  _this.errors = err.response.data;

                  _this.$root.alertNotify(err.response.status, null, 'error', err.response.data);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['roles'],
  methods: {
    deleteItem: function deleteItem(item) {
      return this.$emit("deleteItem", item);
    },
    editItem: function editItem(item) {
      return this.$emit("editItem", item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/BreadcrumbComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/SearchBoxComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _RoleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleForm */ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue");
/* harmony import */ var _RoleTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoleTable */ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    breadcrumb: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/BreadcrumbComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    SearchBox: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/SearchBoxComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    RoleForm: _RoleForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    RoleTable: _RoleTable__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      edit_mode: false,
      role: {},
      page_num: 1,
      loading: false,
      query: ""
    };
  },
  methods: {
    modalOpen: function modalOpen() {
      this.resetForm();
      $("#modal_id").modal("show");
    },
    closeModal: function closeModal(item) {
      if (item) {
        this.getRoles();
        $("#modal_id").modal("hide");
      } else {
        $("#modal_id").modal("hide");
      }

      this.resetForm();
    },
    resetForm: function resetForm() {
      this.role = {}, this.edit_mode = false, this.errors = [];
    },
    isQuery: function isQuery(query) {
      return this.query = query;
    },
    filterData: function filterData(data) {
      this.roles = data.roles;
    },
    loadingStart: function loadingStart(value) {
      this.loading = value;
    },
    editItem: function editItem(item) {
      this.edit_mode = true;
      this.role = item;
      $("#modal_id").modal("show");
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]("role/".concat(item.id)).then(function (res) {
            _this.$root.alertNotify(res.status, 'Destroyed Successfuly', 'info', res.data);

            _this.getRoles();
          });
        }
      });
    },
    getRoles: function getRoles() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loading = true;
      this.page_num = page;
      axios.get('/role?page=' + page).then(function (res) {
        _this2.roles = res.data.roles;
        _this2.users = res.data.users;
        _this2.loading = false;
      })["catch"](function (err) {});
    }
  },
  mounted: function mounted() {
    this.getRoles();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=template&id=184c0cdc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=template&id=184c0cdc ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bio-block"
};
var _hoisted_2 = {
  "class": "row g-3"
};
var _hoisted_3 = {
  "class": "col-12"
};
var _hoisted_4 = {
  "class": "form-group"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "firstname",
  "class": "form-label"
}, "Role Name", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "form-control-wrap"
};
var _hoisted_7 = {
  key: 0,
  type: "submit",
  "class": "btn btn-primary"
};
var _hoisted_8 = {
  key: 1,
  type: "submit",
  "class": "btn btn-success"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$errors, _ctx$errors2;

  var _component_validate_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validate-input");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h4 class=\"bio-block-title mb-4\">Edit Profile</h4> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.role.name = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors = _ctx.errors) === null || _ctx$errors === void 0 ? void 0 : _ctx$errors.errors, 'name'))),
    placeholder: "Role Name"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.role.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors2 = _ctx.errors) === null || _ctx$errors2 === void 0 ? void 0 : _ctx$errors2.errors,
    value: "name"
  }, null, 8
  /* PROPS */
  , ["errors"])])])]), !$props.edit_mode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_7, "Submit")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_8, "Update"))])], 32
  /* HYDRATE_EVENTS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=template&id=b0bebc20":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=template&id=b0bebc20 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "table-responsive"
};
var _hoisted_2 = {
  "class": "table table-middle mb-0"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "table-light table-head-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "tb-col"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "overline-title"
}, "Role Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "tb-col tb-col-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "overline-title"
}, "Status")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "tb-col tb-col-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "overline-title"
}, " Created")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "tb-col tb-col-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "overline-title"
}, " Action")])])], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "tb-col tb-col-end"
};
var _hoisted_5 = {
  "class": "media-group"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media media-md media-middle media-circle"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "media-text"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = {
  "class": "tb-col tb-col-end"
};
var _hoisted_10 = {
  key: 0,
  "class": "badge text-bg-success-soft"
};
var _hoisted_11 = {
  key: 1,
  "class": "badge text-bg-danger-soft"
};
var _hoisted_12 = {
  "class": "tb-col tb-col-end"
};
var _hoisted_13 = {
  "class": "tb-col tb-col-end"
};
var _hoisted_14 = ["onClick"];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", {
  "class": "icon ni ni-edit-fill text-primary"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = [_hoisted_15];
var _hoisted_17 = ["onClick"];

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", {
  "class": "icon ni ni-trash-empty-fill text-danger"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_18];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$roles;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$roles = $props.roles) === null || _$props$roles === void 0 ? void 0 : _$props$roles.data, function (role) {
    var _role$name, _ctx$item;

    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: role.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return $options.editItem(role);
      },
      "class": "title"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_role$name = role.name) !== null && _role$name !== void 0 ? _role$name : "N/A"), 9
    /* TEXT, PROPS */
    , _hoisted_8)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, [!((_ctx$item = _ctx.item) !== null && _ctx$item !== void 0 && _ctx$item.deleted_at) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, "Active")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, "InActive"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.DateTimeFormat(role.created_at)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      role: "button",
      onClick: function onClick($event) {
        return $options.editItem(role);
      }
    }, _hoisted_16, 8
    /* PROPS */
    , _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" | "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      role: "button",
      onClick: function onClick($event) {
        return $options.deleteItem(role);
      }
    }, _hoisted_19, 8
    /* PROPS */
    , _hoisted_17)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=template&id=7e81baf8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=template&id=7e81baf8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-xxl-12"
};
var _hoisted_2 = {
  "class": "card h-100"
};
var _hoisted_3 = {
  "class": "card-body py-2 flex-grow-0"
};
var _hoisted_4 = {
  "class": "card-title-group"
};
var _hoisted_5 = {
  "class": "card-title"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "title"
}, "Roles List", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "card-tools d-none d-sm-inline-block"
};
var _hoisted_8 = {
  "class": "modal fade",
  id: "modal_id",
  "aria-labelledby": "exampleModalLgLabel",
  tabindex: "-1",
  "aria-hidden": "true"
};
var _hoisted_9 = {
  "class": "modal-dialog modal-md"
};
var _hoisted_10 = {
  "class": "modal-content"
};
var _hoisted_11 = {
  "class": "modal-header"
};
var _hoisted_12 = {
  "class": "modal-title",
  id: "exampleModalLgLabel"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcrumb");

  var _component_search_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search-box");

  var _component_loader_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loader-box");

  var _component_role_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("role-table");

  var _component_role_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("role-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    active_name: "Roles"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_box, {
    label: "Search by name",
    apiurl: '/role?page=' + this.page_num,
    onQuery: _cache[0] || (_cache[0] = function ($event) {
      return $options.isQuery($event);
    }),
    onLoading: _cache[1] || (_cache[1] = function ($event) {
      return $options.loadingStart($event);
    }),
    onReload: _cache[2] || (_cache[2] = function ($event) {
      return $options.getRoles();
    }),
    onFilterData: _cache[3] || (_cache[3] = function ($event) {
      return $options.filterData($event);
    })
  }, null, 8
  /* PROPS */
  , ["apiurl"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    role: "button",
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.modalOpen && $options.modalOpen.apply($options, arguments);
    }),
    style: {
      "margin-left": "10px"
    },
    "class": "ml-2 btn btn-sm btn-primary gap"
  }, "Add Role")])])]), _ctx.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_loader_box, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_role_table, {
    key: 1,
    roles: _ctx.roles,
    query: _ctx.query,
    getRoles: $options.getRoles,
    onEditItem: _cache[5] || (_cache[5] = function ($event) {
      return $options.editItem($event);
    }),
    onDeleteItem: _cache[6] || (_cache[6] = function ($event) {
      return $options.deleteItem($event);
    })
  }, null, 8
  /* PROPS */
  , ["roles", "query", "getRoles"]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(!_ctx.edit_mode ? 'New Role' : 'Update Role'), 1
  /* TEXT */
  ), _hoisted_13]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_role_form, {
    edit_mode: _ctx.edit_mode,
    form: _ctx.role,
    onCreated: _cache[7] || (_cache[7] = function ($event) {
      return $options.closeModal($event);
    }),
    onUpdated: _cache[8] || (_cache[8] = function ($event) {
      return $options.closeModal($event);
    })
  }, null, 8
  /* PROPS */
  , ["edit_mode", "form"])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue":
/*!******************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RoleForm_vue_vue_type_template_id_184c0cdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleForm.vue?vue&type=template&id=184c0cdc */ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=template&id=184c0cdc");
/* harmony import */ var _RoleForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleForm.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RoleForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RoleForm_vue_vue_type_template_id_184c0cdc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue":
/*!*******************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RoleTable_vue_vue_type_template_id_b0bebc20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleTable.vue?vue&type=template&id=b0bebc20 */ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=template&id=b0bebc20");
/* harmony import */ var _RoleTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleTable.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RoleTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RoleTable_vue_vue_type_template_id_b0bebc20__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RolesComponent_vue_vue_type_template_id_7e81baf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RolesComponent.vue?vue&type=template&id=7e81baf8 */ "./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=template&id=7e81baf8");
/* harmony import */ var _RolesComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolesComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_gold_coin_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RolesComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RolesComponent_vue_vue_type_template_id_7e81baf8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RoleForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RoleForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RoleForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RoleTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RoleTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RoleTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RolesComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=template&id=184c0cdc":
/*!************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=template&id=184c0cdc ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RoleForm_vue_vue_type_template_id_184c0cdc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RoleForm_vue_vue_type_template_id_184c0cdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RoleForm.vue?vue&type=template&id=184c0cdc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleForm.vue?vue&type=template&id=184c0cdc");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=template&id=b0bebc20":
/*!*************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=template&id=b0bebc20 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RoleTable_vue_vue_type_template_id_b0bebc20__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RoleTable_vue_vue_type_template_id_b0bebc20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RoleTable.vue?vue&type=template&id=b0bebc20 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RoleTable.vue?vue&type=template&id=b0bebc20");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=template&id=7e81baf8":
/*!******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=template&id=7e81baf8 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesComponent_vue_vue_type_template_id_7e81baf8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RolesComponent_vue_vue_type_template_id_7e81baf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RolesComponent.vue?vue&type=template&id=7e81baf8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/BACKUP/roles/RolesComponent.vue?vue&type=template&id=7e81baf8");


/***/ })

}]);