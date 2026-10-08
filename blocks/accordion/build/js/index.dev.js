"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./src/edit.js":
    /*!*********************!*\
      !*** ./src/edit.js ***!
      \*********************/

    /***/
    function srcEditJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            Edit
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! react */
      "react");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/
      __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @wordpress/i18n */
      "@wordpress/i18n");
      /* harmony import */


      var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/
      __webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @wordpress/block-editor */
      "@wordpress/block-editor");
      /* harmony import */


      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/
      __webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editor.scss */
      "./src/editor.scss");
      /**
       * Retrieves the translation of text.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
       */

      /**
       * React hook that is used to mark the block wrapper element.
       * It provides all the necessary props like the class name.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
       */

      /**
       * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
       * Those files can contain any CSS code that gets applied to the editor.
       *
       * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
       */

      /**
       * The edit function describes the structure of your block in the context of the
       * editor. This represents what the editor will render when the block is used.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
       *
       * @return {WPElement} Element to render.
       */


      function Edit(_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            clientId = _ref.clientId;
        return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", _objectSpread({}, (0, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
          className: 'section wp-block ' + (attributes.rightToLeft ? 'reverse' : '') + (attributes.imageSize ? ' ' + attributes.imageSize : '')
        })), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "wrapper flex"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "accordion_head"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "trigger"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
          tagName: "span",
          className: "nr",
          value: attributes.nr,
          onChange: function onChange(nr) {
            return setAttributes({
              nr: nr
            });
          },
          placeholder: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', '')
        })), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
          tagName: "h2",
          className: "title",
          value: attributes.title,
          onChange: function onChange(title) {
            return setAttributes({
              title: title
            });
          },
          placeholder: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'b-accordion')
        }), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
          tagName: "p",
          className: "subtitle",
          value: attributes.subtitle,
          onChange: function onChange(subtitle) {
            return setAttributes({
              subtitle: subtitle
            });
          },
          placeholder: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtitle', 'b-accordion')
        }))), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "inner"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "keepopen"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null)))));
      }
      /***/

    },

    /***/
    "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/

    /***/
    function srcIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! react */
      "react");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/
      __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @wordpress/blocks */
      "@wordpress/blocks");
      /* harmony import */


      var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/
      __webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./style.scss */
      "./src/style.scss");
      /* harmony import */


      var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit */
      "./src/edit.js");
      /* harmony import */


      var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./save */
      "./src/save.js");
      /* harmony import */


      var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./block.json */
      "./src/block.json");
      /**
       * Registers a new block provided a unique name and an object defining its behavior.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
       */

      /**
       * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
       * All files containing `style` keyword are bundled together. The code used
       * gets applied both to the front of your site and to the editor.
       *
       * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
       */

      /**
       * Internal dependencies
       */

      /**
       * Every block starts by registering a new block type definition.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
       */


      (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
        icon: (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          width: "86",
          height: "86",
          viewBox: "0 0 86 86",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
          cx: "43",
          cy: "43",
          r: "36.5",
          stroke: "#9C1006",
          "stroke-width": "13"
        })),
        attributes: {
          title: {
            type: 'string'
          },
          subtitle: {
            type: 'string'
          },
          nr: {
            type: 'string'
          }
        },

        /**
         * @see ./edit.js
         */
        edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

        /**
         * @see ./save.js
         */
        save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
      });
      /***/
    },

    /***/
    "./src/save.js":
    /*!*********************!*\
      !*** ./src/save.js ***!
      \*********************/

    /***/
    function srcSaveJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            save
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! react */
      "react");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/
      __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @wordpress/block-editor */
      "@wordpress/block-editor");
      /* harmony import */


      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/
      __webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
      /**
       * React hook that is used to mark the block wrapper element.
       * It provides all the necessary props like the class name.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
       */

      /**
       * The save function defines the way in which the different attributes should
       * be combined into the final markup, which is then serialized by the block
       * editor into `post_content`.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
       *
       * @return {WPElement} Element to render.
       */


      function save(_ref2) {
        var attributes = _ref2.attributes;

        var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
          className: 'section wp-block ' + (attributes.rightToLeft ? 'reverse' : '') + (attributes.imageSize ? ' ' + attributes.imageSize : '')
        });

        return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", _objectSpread({}, blockProps), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "wrapper"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "accordion_head"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "trigger"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.nr && attributes.nr, !attributes.nr && (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          width: "17",
          height: "28",
          viewBox: "0 0 17 28",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          d: "M2 2L14 14L2 26",
          stroke: "#ffffff",
          "stroke-width": "4",
          "stroke-linecap": "round"
        })))), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "h2",
          className: "title",
          value: attributes.title
        }), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "subtitle",
          value: attributes.subtitle
        }))), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "inner"
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)))));
      }
      /***/

    },

    /***/
    "./src/editor.scss":
    /*!*************************!*\
      !*** ./src/editor.scss ***!
      \*************************/

    /***/
    function srcEditorScss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__); // extracted by mini-css-extract-plugin

      /***/

    },

    /***/
    "./src/style.scss":
    /*!************************!*\
      !*** ./src/style.scss ***!
      \************************/

    /***/
    function srcStyleScss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__); // extracted by mini-css-extract-plugin

      /***/

    },

    /***/
    "react":
    /*!************************!*\
      !*** external "React" ***!
      \************************/

    /***/
    function react(module) {
      module.exports = window["React"];
      /***/
    },

    /***/
    "@wordpress/block-editor":
    /*!*************************************!*\
      !*** external ["wp","blockEditor"] ***!
      \*************************************/

    /***/
    function wordpressBlockEditor(module) {
      module.exports = window["wp"]["blockEditor"];
      /***/
    },

    /***/
    "@wordpress/blocks":
    /*!********************************!*\
      !*** external ["wp","blocks"] ***!
      \********************************/

    /***/
    function wordpressBlocks(module) {
      module.exports = window["wp"]["blocks"];
      /***/
    },

    /***/
    "@wordpress/i18n":
    /*!******************************!*\
      !*** external ["wp","i18n"] ***!
      \******************************/

    /***/
    function wordpressI18n(module) {
      module.exports = window["wp"]["i18n"];
      /***/
    },

    /***/
    "./src/block.json":
    /*!************************!*\
      !*** ./src/block.json ***!
      \************************/

    /***/
    function srcBlockJson(module) {
      module.exports =
      /*#__PURE__*/
      JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/accordion","version":"0.1.0","title":"Gabi Akkordion","category":"gp","description":"Gabi Akkordion","supports":{"html":false},"textdomain":"lsd","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = __webpack_modules__;
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/chunk loaded */

  /******/

  (function () {
    /******/
    var deferred = [];
    /******/

    __webpack_require__.O = function (result, chunkIds, fn, priority) {
      /******/
      if (chunkIds) {
        /******/
        priority = priority || 0;
        /******/

        for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) {
          deferred[i] = deferred[i - 1];
        }
        /******/


        deferred[i] = [chunkIds, fn, priority];
        /******/

        return;
        /******/
      }
      /******/


      var notFulfilled = Infinity;
      /******/

      for (var i = 0; i < deferred.length; i++) {
        /******/
        var _deferred$i = _slicedToArray(deferred[i], 3),
            chunkIds = _deferred$i[0],
            fn = _deferred$i[1],
            priority = _deferred$i[2];
        /******/


        var fulfilled = true;
        /******/

        for (var j = 0; j < chunkIds.length; j++) {
          /******/
          if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function (key) {
            return __webpack_require__.O[key](chunkIds[j]);
          })) {
            /******/
            chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/
            fulfilled = false;
            /******/

            if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/

        }
        /******/


        if (fulfilled) {
          /******/
          deferred.splice(i--, 1);
          /******/

          var r = fn();
          /******/

          if (r !== undefined) result = r;
          /******/
        }
        /******/

      }
      /******/


      return result;
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/compat get default export */

  /******/


  (function () {
    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function () {
        return module['default'];
      } :
      /******/
      function () {
        return module;
      };
      /******/

      __webpack_require__.d(getter, {
        a: getter
      });
      /******/


      return getter;
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/jsonp chunk loading */

  /******/


  (function () {
    /******/
    // no baseURI

    /******/

    /******/
    // object to store loaded and loading chunks

    /******/
    // undefined = chunk not loaded, null = chunk preloaded/prefetched

    /******/
    // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded

    /******/
    var installedChunks = {
      /******/
      "index": 0,

      /******/
      "./style-index": 0
      /******/

    };
    /******/

    /******/
    // no chunk on demand loading

    /******/

    /******/
    // no prefetching

    /******/

    /******/
    // no preloaded

    /******/

    /******/
    // no HMR

    /******/

    /******/
    // no HMR manifest

    /******/

    /******/

    __webpack_require__.O.j = function (chunkId) {
      return installedChunks[chunkId] === 0;
    };
    /******/

    /******/
    // install a JSONP callback for chunk loading

    /******/


    var webpackJsonpCallback = function webpackJsonpCallback(parentChunkLoadingFunction, data) {
      /******/
      var _data = _slicedToArray(data, 3),
          chunkIds = _data[0],
          moreModules = _data[1],
          runtime = _data[2];
      /******/
      // add "moreModules" to the modules object,

      /******/
      // then flag all "chunkIds" as loaded and fire callback

      /******/


      var moduleId,
          chunkId,
          i = 0;
      /******/

      if (chunkIds.some(function (id) {
        return installedChunks[id] !== 0;
      })) {
        /******/
        for (moduleId in moreModules) {
          /******/
          if (__webpack_require__.o(moreModules, moduleId)) {
            /******/
            __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/

        }
        /******/


        if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/


      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/

      for (; i < chunkIds.length; i++) {
        /******/
        chunkId = chunkIds[i];
        /******/

        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/
          installedChunks[chunkId][0]();
          /******/
        }
        /******/


        installedChunks[chunkId] = 0;
        /******/
      }
      /******/


      return __webpack_require__.O(result);
      /******/
    };
    /******/

    /******/


    var chunkLoadingGlobal = globalThis["webpackChunkaccordion"] = globalThis["webpackChunkaccordion"] || [];
    /******/

    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/

    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/
  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module depends on other loaded chunks and execution need to be delayed

  /******/


  var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function () {
    return __webpack_require__("./src/index.js");
  });
  /******/


  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/

  /******/
})();