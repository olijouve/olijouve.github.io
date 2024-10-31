(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ScanResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScanResult'));
  } else {
    // Browser globals (root is window)
    if (!root.LocalServerApi) {
      root.LocalServerApi = {};
    }
    root.LocalServerApi.ResponseScanResult = factory(root.LocalServerApi.ApiClient, root.LocalServerApi.ScanResult);
  }
}(this, function(ApiClient, ScanResult) {
  'use strict';




  /**
   * The ResponseScanResult model module.
   * @module model/ResponseScanResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>ResponseScanResult</code>.
   * @alias module:model/ResponseScanResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ResponseScanResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseScanResult} obj Optional instance to populate.
   * @return {module:model/ResponseScanResult} The populated <code>ResponseScanResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Integer');
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], [ScanResult]);
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;
  /**
   * @member {Array.<module:model/ScanResult>} result
   */
  exports.prototype['result'] = undefined;
  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;




  return exports;
}));


