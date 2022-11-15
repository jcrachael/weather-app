"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["bundle"],{

/***/ 426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBALS */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Roboto+Mono\", Helvetica, Arial, sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  text-align: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n#container {\r\n  position: relative;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n  padding: 2rem;\r\n}\r\n\r\n/* MAIN */\r\n\r\n/* ENTER CITY FORM */\r\n\r\nform {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: auto auto;\r\n}\r\n\r\n.form-control {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\nlabel,\r\nlegend {\r\n  padding: 0rem 0.5rem;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  width: 150px;\r\n  padding: 0.3rem;\r\n  margin-right: 1rem;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  border: 1px #dcdcdc solid;\r\n  background-color: #ffffff;\r\n}\r\n\r\ninput[type=\"text\"]:focus {\r\n  outline: 1px #77b11a solid;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n#buttons {\r\n  grid-column: 1/3;\r\n}\r\n\r\ninput[type=\"submit\"],\r\ninput[type=\"reset\"] {\r\n  padding: 0.5rem 1rem;\r\n  margin: 0rem 0.5rem;\r\n  border-radius: 20px;\r\n  border: none;\r\n  color: #fff;\r\n  letter-spacing: 0.25px;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"reset\"]:hover {\r\n  opacity: 1;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  background-color: #77b11a;\r\n}\r\n\r\ninput[type=\"reset\"] {\r\n  background-color: #b90e0e;\r\n}\r\n\r\n/* CITY INFO PANEL */\r\n\r\nsection {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\nh2 {\r\n  padding: 1rem 0rem;\r\n}\r\n\r\n.row {\r\n  padding-bottom: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.label {\r\n  padding-right: 0.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  padding-top: 2rem;\r\n  padding-bottom: 0.3rem;\r\n  font-size: 10pt;\r\n  width: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,YAAY;;AAEZ;EACE,SAAS;EACT,UAAU;EACV,wDAAwD;EACxD,sBAAsB;AACxB;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,WAAW;;AAEX;EACE,aAAa;AACf;;AAEA,SAAS;;AAET,oBAAoB;;AAEpB;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,aAAa;EACb,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,eAAe;EACf,YAAY;AACd;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,oBAAoB;;AAEpB;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,sBAAsB;EACtB,eAAe;EACf,WAAW;AACb","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n\r\n/* GLOBALS */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Roboto+Mono\", Helvetica, Arial, sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  text-align: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n#container {\r\n  position: relative;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n  padding: 2rem;\r\n}\r\n\r\n/* MAIN */\r\n\r\n/* ENTER CITY FORM */\r\n\r\nform {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: auto auto;\r\n}\r\n\r\n.form-control {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\nlabel,\r\nlegend {\r\n  padding: 0rem 0.5rem;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  width: 150px;\r\n  padding: 0.3rem;\r\n  margin-right: 1rem;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  border: 1px #dcdcdc solid;\r\n  background-color: #ffffff;\r\n}\r\n\r\ninput[type=\"text\"]:focus {\r\n  outline: 1px #77b11a solid;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n#buttons {\r\n  grid-column: 1/3;\r\n}\r\n\r\ninput[type=\"submit\"],\r\ninput[type=\"reset\"] {\r\n  padding: 0.5rem 1rem;\r\n  margin: 0rem 0.5rem;\r\n  border-radius: 20px;\r\n  border: none;\r\n  color: #fff;\r\n  letter-spacing: 0.25px;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"reset\"]:hover {\r\n  opacity: 1;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  background-color: #77b11a;\r\n}\r\n\r\ninput[type=\"reset\"] {\r\n  background-color: #b90e0e;\r\n}\r\n\r\n/* CITY INFO PANEL */\r\n\r\nsection {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\nh2 {\r\n  padding: 1rem 0rem;\r\n}\r\n\r\n.row {\r\n  padding-bottom: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.label {\r\n  padding-right: 0.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  padding-top: 2rem;\r\n  padding-bottom: 0.3rem;\r\n  font-size: 10pt;\r\n  width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 654:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 426);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 628:
/*!************************!*\
  !*** ./src/Weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
function Weather(
  name,
  deg,
  feelsLikeTemp,
  currentTemp,
  humidity,
  pressure,
  cloud,
  shortDesc,
  longDesc,
  windDir,
  windSpeed,
  windGust,
  speed,
  speedMultiplier
) {
  this.name = name;
  this.deg = deg;
  this.feelsLikeTemp = feelsLikeTemp;
  this.currentTemp = currentTemp;
  this.humidity = humidity;
  this.pressure = pressure;
  this.cloud = cloud;
  this.shortDesc = shortDesc;
  this.longDesc = longDesc;
  this.windDir = windDir;
  this.windSpeed = windSpeed;
  this.windGust = windGust;
  this.speed = speed;
  this.speedMultiplier = speedMultiplier;
}




/***/ }),

/***/ 434:
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDisplay */ 842);


function form() {
  // Event handler for submit button
  function submitEventHandler() {
    const WeatherDisplay = new _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__.weatherDisplay();
    const panel = document.getElementById("panel");
    if (panel) {
      WeatherDisplay.clearDisplay();
    }

    WeatherDisplay.build();
    WeatherDisplay.getWeather();

    WeatherDisplay.updateDisplay();
  }
  // Event handler for reset button
  function resetEventListener() {
    const panel = document.getElementById("panel");
    if (panel) {
      panel.classList.add("hidden");
    }
  }

  // Build the form
  function build() {
    const form = document.createElement("form");
    const formControl = document.createElement("div");
    formControl.classList.add("form-control");
    form.appendChild(formControl);
    const labelCity = document.createElement("label");
    labelCity.setAttribute("for", "city");
    labelCity.innerText = "City:";
    formControl.appendChild(labelCity);
    const inputCity = document.createElement("input");
    inputCity.setAttribute("type", "text");
    inputCity.setAttribute("name", "city");
    inputCity.setAttribute("id", "city");
    inputCity.setAttribute("placeholder", "e.g. Brussels");
    inputCity.setAttribute("required", "true");
    formControl.appendChild(inputCity);

    const formControl2 = document.createElement("div");
    formControl2.classList.add("form-control");
    form.appendChild(formControl2);

    const radioCels = document.createElement("input");
    radioCels.setAttribute("type", "radio");
    radioCels.setAttribute("name", "units");
    radioCels.setAttribute("id", "cels");
    radioCels.setAttribute("value", "Celsius");
    radioCels.setAttribute("required", "true");
    formControl2.appendChild(radioCels);
    const labelCels = document.createElement("label");
    labelCels.setAttribute("for", "cels");
    labelCels.innerText = "Celsius";
    formControl2.appendChild(labelCels);
    const radioFahr = document.createElement("input");
    radioFahr.setAttribute("type", "radio");
    radioFahr.setAttribute("name", "units");
    radioFahr.setAttribute("id", "fahr");
    radioFahr.setAttribute("value", "Fahrenheit");
    formControl2.appendChild(radioFahr);
    const labelFahr = document.createElement("label");
    labelFahr.setAttribute("for", "fahr");
    labelFahr.innerText = "Fahrenheit";
    formControl2.appendChild(labelFahr);

    const formControl3 = document.createElement("div");
    formControl3.classList.add("form-control");
    formControl3.setAttribute("id", "buttons");
    form.appendChild(formControl3);
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    const reset = document.createElement("input");
    reset.setAttribute("type", "reset");
    reset.setAttribute("id", "clear");

    submit.addEventListener("click", function (e) {
      e.preventDefault();
      submitEventHandler();
    });

    reset.addEventListener("click", resetEventListener);

    formControl3.appendChild(submit);
    formControl3.appendChild(reset);

    return form;
  }

  return {
    build: build
  };
}




/***/ }),

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ 654);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ 434);



const Form = new _form__WEBPACK_IMPORTED_MODULE_1__.form();
let newForm = Form.build();
const main = document.querySelector("main");
main.appendChild(newForm);


/***/ }),

/***/ 842:
/*!*******************************!*\
  !*** ./src/weatherDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherDisplay": () => (/* binding */ weatherDisplay)
/* harmony export */ });
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ 628);


function weatherDisplay() {
  const MyWeather = new _Weather__WEBPACK_IMPORTED_MODULE_0__.Weather();

  function build() {
    const main = document.querySelector("main");
    const container = document.createElement("section");
    container.setAttribute("id", "panel");
    main.appendChild(container);
    const header = document.createElement("h2");
    header.setAttribute("id", "cityname");
    container.appendChild(header);
    const row1 = document.createElement("div");
    row1.classList.add("row");
    container.appendChild(row1);
    const tempLabel = document.createElement("span");
    tempLabel.classList.add("label");
    tempLabel.innerText = "Current temperature:";
    row1.appendChild(tempLabel);
    const tempData = document.createElement("span");
    tempData.classList.add("data");
    tempData.setAttribute("id", "current");
    row1.appendChild(tempData);
    const row2 = document.createElement("div");
    row2.classList.add("row");
    container.appendChild(row2);
    const feelslikeLabel = document.createElement("span");
    feelslikeLabel.classList.add("label");
    feelslikeLabel.innerText = "Feels like:";
    row2.appendChild(feelslikeLabel);
    const feelsLikeData = document.createElement("span");
    feelsLikeData.classList.add("data");
    feelsLikeData.setAttribute("id", "feels-like");
    row2.appendChild(feelsLikeData);
    const row3 = document.createElement("div");
    row3.classList.add("row");
    container.appendChild(row3);
    const humidityLabel = document.createElement("span");
    humidityLabel.classList.add("label");
    humidityLabel.innerText = "Humidity:";
    row3.appendChild(humidityLabel);
    const humidityData = document.createElement("span");
    humidityData.classList.add("data");
    humidityData.setAttribute("id", "humidity");
    row3.appendChild(humidityData);
    const row4 = document.createElement("div");
    row4.classList.add("row");
    container.appendChild(row4);
    const pressureLabel = document.createElement("span");
    pressureLabel.classList.add("label");
    pressureLabel.innerText = "Pressure:";
    row4.appendChild(pressureLabel);
    const pressureData = document.createElement("span");
    pressureData.classList.add("data");
    pressureData.setAttribute("id", "pressure");
    row4.appendChild(pressureData);
    const row5 = document.createElement("div");
    row5.classList.add("row");
    container.appendChild(row5);
    const cloudLabel = document.createElement("span");
    cloudLabel.classList.add("label");
    cloudLabel.innerText = "Cloud coverage:";
    row5.appendChild(cloudLabel);
    const cloudData = document.createElement("span");
    cloudData.classList.add("data");
    cloudData.setAttribute("id", "clouds");
    row5.appendChild(cloudData);
    const row6 = document.createElement("div");
    row6.classList.add("row");
    container.appendChild(row6);
    const descLabel = document.createElement("span");
    descLabel.classList.add("label");
    descLabel.innerText = "Description:";
    row6.appendChild(descLabel);
    const shortDescData = document.createElement("span");
    shortDescData.classList.add("data");
    shortDescData.setAttribute("id", "shortDescription");
    row6.appendChild(shortDescData);
    const longDescData = document.createElement("span");
    longDescData.classList.add("data");
    longDescData.setAttribute("id", "longDescription");
    row6.appendChild(longDescData);
    const row7 = document.createElement("div");
    row7.classList.add("row");
    container.appendChild(row7);
    const windLabel = document.createElement("span");
    windLabel.classList.add("label");
    windLabel.innerText = "Wind:";
    row7.appendChild(windLabel);
    const windSpeedData = document.createElement("span");
    windSpeedData.classList.add("data");
    windSpeedData.setAttribute("id", "windSpeed");
    row7.appendChild(windSpeedData);
    const windDirData = document.createElement("span");
    windDirData.classList.add("data");
    windDirData.setAttribute("id", "windDir");
    row7.appendChild(windDirData);
    const windGustData = document.createElement("span");
    windGustData.classList.add("data");
    windGustData.setAttribute("id", "windGust");
    row7.appendChild(windGustData);
  }

  function getWeather() {
    // Units:
    // For temperature in Fahrenheit use units=imperial
    // For temperature in Celsius use units=metric
    let units = "metric"; // Celsius by default
    let deg = "C";
    let speed = "m/s";
    let chosencity = document.getElementById("city").value;

    // get the unit
    let celsRadio = document.getElementById("cels");
    let fahrRadio = document.getElementById("fahr");
    if (celsRadio.checked) {
      deg = "C";
      speed = "m/s";
      units = "metric";
    } else if (fahrRadio.checked) {
      deg = "F";
      speed = "m.p.h";
      units = "imperial";
    } else {
      deg = "K";
      units = "standard";
    }

    const key = "15616b88f662a39612975210bd21e2b8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${chosencity}&appid=${key}&units=${units}`;
    fetch(url, {
      method: "GET",
      mode: "cors"
    })
      .then(function (response) {
        return response.json();
      }) // get the response as a JSON object
      .then(function (response) {
        let cityname = response.name;
        let feelsLikeTemp = response.main.feels_like;
        let currentTemp = response.main.temp;
        let humidity = response.main.humidity;
        let pressure = response.main.pressure;
        let cloudCoverage = response.clouds.all;
        let shortDescription = response.weather[0]["main"];
        let longDescription = response.weather[0]["description"];
        let windDir = response.wind.deg;
        let windSpeed = response.wind.speed;
        let windGust = response.wind.gust;
        let pressureRate;
        let windDirCardinal;
        let speedMultiplier;
        // get units
        if (units === "metric") {
          deg = "C";
          speed = "km/h";
          speedMultiplier = 3.6;
        } else if (units === "imperial") {
          deg = "F";
          speed = "m.p.h";
          speedMultiplier = 1;
        }
        // get pressure
        if (pressure > 1020) {
          pressureRate = "High";
        } else if (pressure > 989 && pressure < 1020) {
          pressureRate = "Medium";
        } else {
          pressureRate = "Low";
        }
        // get wind direction
        if (windDir > 348 || windDir <= 11) {
          windDirCardinal = "N";
        } else if (windDir >= 11 && windDir <= 33) {
          windDirCardinal = "NNE";
        } else if (windDir > 34 && windDir < 56) {
          windDirCardinal = "NE";
        } else if (windDir >= 56 && windDir < 79) {
          windDirCardinal = "ENE";
        } else if (windDir >= 79 && windDir < 101) {
          windDirCardinal = "E";
        } else if (windDir >= 101 && windDir <= 123) {
          windDirCardinal = "ESE";
        } else if (windDir >= 124 && windDir < 146) {
          windDirCardinal = "SE";
        } else if (windDir >= 146 && windDir <= 168) {
          windDirCardinal = "SSE";
        } else if (windDir >= 169 && windDir < 191) {
          windDirCardinal = "S";
        } else if (windDir >= 191 && windDir <= 213) {
          windDir = "SSW";
        } else if (windDir > 213 && windDir < 236) {
          windDirCardinal = "SW";
        } else if (windDir >= 236 && windDir <= 258) {
          windDirCardinal = "WSW";
        } else if (windDir >= 259 && windDir <= 280) {
          windDirCardinal = "W";
        } else if (windDir >= 281 && windDir <= 303) {
          windDirCardinal = "WNW";
        } else if (windDir >= 304 && windDir <= 325) {
          windDirCardinal = "NW";
        } else if (windDir >= 326 && windDir <= 348) {
          windDirCardinal = "NNW";
        }
        // Set the properties of MyWeather object
        MyWeather.name = cityname;
        MyWeather.deg = deg;
        MyWeather.feelsLikeTemp = feelsLikeTemp;
        MyWeather.currentTemp = currentTemp;
        MyWeather.humidity = humidity;
        MyWeather.pressure = pressureRate;
        MyWeather.cloud = cloudCoverage;
        MyWeather.shortDesc = shortDescription;
        MyWeather.longDesc = longDescription;
        MyWeather.windDir = windDirCardinal;
        MyWeather.windSpeed = windSpeed;
        MyWeather.windGust = windGust;
        MyWeather.speed = speed;
        MyWeather.speedMultiplier = speedMultiplier;
        updateDisplay();
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function clearDisplay() {
    const main = document.querySelector("main");
    const panel = document.querySelector("section");
    main.removeChild(panel);
  }

  function updateDisplay() {
    // Get the displays
    const panel = document.getElementById("panel");
    const datacityname = document.getElementById("cityname");
    const current = document.getElementById("current");
    const feelsLike = document.getElementById("feels-like");
    const humidityEl = document.getElementById("humidity");
    const pressureEl = document.getElementById("pressure");
    const cloudCoverageEl = document.getElementById("clouds");
    const shortDescEl = document.getElementById("shortDescription");
    const longDescEl = document.getElementById("longDescription");
    const windDirEl = document.getElementById("windDir");
    const windSpeedEl = document.getElementById("windSpeed");
    const windGustEl = document.getElementById("windGust");

    // Display the values to the screen
    panel.classList.remove("hidden");
    datacityname.innerText = `Weather for ${MyWeather.name}`;
    current.innerText = `${MyWeather.currentTemp}\u00B0 ${MyWeather.deg}`;
    feelsLike.innerText = `${MyWeather.feelsLikeTemp}\u00B0 ${MyWeather.deg}`;
    humidityEl.innerText = `${MyWeather.humidity}%`;
    pressureEl.innerText = `${MyWeather.pressure}`;
    cloudCoverageEl.innerText = `${MyWeather.cloud}%`;
    shortDescEl.innerText = `${MyWeather.shortDesc}: `;
    longDescEl.innerText = `${MyWeather.longDesc}`;
    windDirEl.innerText = `${MyWeather.windDir}; `;
    windSpeedEl.innerText = `${Math.round(
      MyWeather.windSpeed * MyWeather.speedMultiplier
    )} ${MyWeather.speed} `;
    if (MyWeather.windGust != null) {
      windGustEl.innerText = `gusts of up to ${Math.round(
        MyWeather.windGust * MyWeather.speedMultiplier
      )} ${MyWeather.speed}`;
    }
  }

  return {
    build: build,
    getWeather: getWeather,
    updateDisplay: updateDisplay,
    clearDisplay: clearDisplay,
    MyWeather: MyWeather
  };
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=bundle-63a7a100718f919c28c4.js.map