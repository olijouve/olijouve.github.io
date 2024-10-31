(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LocalServerApi) {
      root.LocalServerApi = {};
    }
    root.LocalServerApi.WacomResult = factory(root.LocalServerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WacomResult model module.
   * @module model/WacomResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>WacomResult</code>.
   * @alias module:model/WacomResult
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>WacomResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WacomResult} obj Optional instance to populate.
   * @return {module:model/WacomResult} The populated <code>WacomResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bitmap')) {
        obj['bitmap'] = ApiClient.convertToType(data['bitmap'], 'String');
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
      if (data.hasOwnProperty('numPage')) {
        obj['numPage'] = ApiClient.convertToType(data['numPage'], 'Integer');
      }
      if (data.hasOwnProperty('optionCheckedSerialized')) {
        obj['optionCheckedSerialized'] = ApiClient.convertToType(data['optionCheckedSerialized'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} bitmap
   */
  exports.prototype['bitmap'] = undefined;
  /**
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;
  /**
   * @member {Integer} numPage
   */
  exports.prototype['numPage'] = undefined;
  /**
   * @member {String} optionCheckedSerialized
   */
  exports.prototype['optionCheckedSerialized'] = undefined;
  /**
   * @member {module:model/WacomResult.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "CHANGE_PAGE"
     * @const
     */
    "CHANGE_PAGE": "CHANGE_PAGE",
    /**
     * value: "CANCEL"
     * @const
     */
    "CANCEL": "CANCEL",
    /**
     * value: "SIGNATURE"
     * @const
     */
    "SIGNATURE": "SIGNATURE",
    /**
     * value: "CONSENT"
     * @const
     */
    "CONSENT": "CONSENT",
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR",
    /**
     * value: "I_SETUP"
     * @const
     */
    "I_SETUP": "I_SETUP",
    /**
     * value: "I_ADD"
     * @const
     */
    "I_ADD": "I_ADD",
    /**
     * value: "I_WAITING"
     * @const
     */
    "I_WAITING": "I_WAITING"  };


  return exports;
}));


