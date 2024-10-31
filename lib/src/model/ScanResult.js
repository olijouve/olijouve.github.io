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
    root.LocalServerApi.ScanResult = factory(root.LocalServerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ScanResult model module.
   * @module model/ScanResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>ScanResult</code>.
   * @alias module:model/ScanResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ScanResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScanResult} obj Optional instance to populate.
   * @return {module:model/ScanResult} The populated <code>ScanResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));


