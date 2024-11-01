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
    root.LocalServerApi.SourceDto = factory(root.LocalServerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SourceDto model module.
   * @module model/SourceDto
   * @version 1.0
   */

  /**
   * Constructs a new <code>SourceDto</code>.
   * @alias module:model/SourceDto
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SourceDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SourceDto} obj Optional instance to populate.
   * @return {module:model/SourceDto} The populated <code>SourceDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('manufacturer')) {
        obj['manufacturer'] = ApiClient.convertToType(data['manufacturer'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} manufacturer
   */
  exports.prototype['manufacturer'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));


