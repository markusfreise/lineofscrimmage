"use strict";

var _blocks = require("@wordpress/blocks");

require("./style.scss");

var _edit = _interopRequireDefault(require("./edit"));

var _save = _interopRequireDefault(require("./save"));

var _block = _interopRequireDefault(require("./block.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
(0, _blocks.registerBlockType)(_block["default"].name, {
  icon: {
    src: "<svg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.778 10L9.998 4.294V5.878L4.778 0.207999H7.568L11.744 4.6V5.572L7.568 10H4.778ZM0.404 6.148V4.06H9.854V6.148H0.404Z' fill='#B7956F' /></svg>"
  },
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
  edit: _edit["default"],

  /**
   * @see ./save.js
   */
  save: _save["default"]
});