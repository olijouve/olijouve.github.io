(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SourceDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SourceDto'));
  } else {
    // Browser globals (root is window)
    if (!root.LocalServerApi) {
      root.LocalServerApi = {};
    }
    root.LocalServerApi.TwainSourceResult = factory(root.LocalServerApi.ApiClient, root.LocalServerApi.SourceDto);
  }
}(this, function(ApiClient, SourceDto) {
  'use strict';




  /**
   * The TwainSourceResult model module.
   * @module model/TwainSourceResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>TwainSourceResult</code>.
   * @alias module:model/TwainSourceResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TwainSourceResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TwainSourceResult} obj Optional instance to populate.
   * @return {module:model/TwainSourceResult} The populated <code>TwainSourceResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sources')) {
        obj['sources'] = ApiClient.convertToType(data['sources'], [SourceDto]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SourceDto>} sources
   */
  exports.prototype['sources'] = undefined;




  return exports;
}));


