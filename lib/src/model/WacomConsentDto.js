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
    root.LocalServerApi.WacomConsentDto = factory(root.LocalServerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WacomConsentDto model module.
   * @module model/WacomConsentDto
   * @version 1.0
   */

  /**
   * Constructs a new <code>WacomConsentDto</code>.
   * @alias module:model/WacomConsentDto
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>WacomConsentDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WacomConsentDto} obj Optional instance to populate.
   * @return {module:model/WacomConsentDto} The populated <code>WacomConsentDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currentConsentPageNumber')) {
        obj['currentConsentPageNumber'] = ApiClient.convertToType(data['currentConsentPageNumber'], 'Integer');
      }
      if (data.hasOwnProperty('groupNumber')) {
        obj['groupNumber'] = ApiClient.convertToType(data['groupNumber'], 'Integer');
      }
      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
      }
      if (data.hasOwnProperty('listCheckBoxDisplay')) {
        obj['listCheckBoxDisplay'] = ApiClient.convertToType(data['listCheckBoxDisplay'], ['Boolean']);
      }
      if (data.hasOwnProperty('listConsentCode')) {
        obj['listConsentCode'] = ApiClient.convertToType(data['listConsentCode'], ['String']);
      }
      if (data.hasOwnProperty('listMandatory')) {
        obj['listMandatory'] = ApiClient.convertToType(data['listMandatory'], ['Boolean']);
      }
      if (data.hasOwnProperty('pdfPageNum')) {
        obj['pdfPageNum'] = ApiClient.convertToType(data['pdfPageNum'], 'Integer');
      }
      if (data.hasOwnProperty('requestsign')) {
        obj['requestsign'] = ApiClient.convertToType(data['requestsign'], 'Boolean');
      }
      if (data.hasOwnProperty('totalConsentPageNumber')) {
        obj['totalConsentPageNumber'] = ApiClient.convertToType(data['totalConsentPageNumber'], 'Integer');
      }
      if (data.hasOwnProperty('txt')) {
        obj['txt'] = ApiClient.convertToType(data['txt'], 'String');
      }
      if (data.hasOwnProperty('typeconsent')) {
        obj['typeconsent'] = ApiClient.convertToType(data['typeconsent'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} currentConsentPageNumber
   */
  exports.prototype['currentConsentPageNumber'] = undefined;
  /**
   * @member {Integer} groupNumber
   */
  exports.prototype['groupNumber'] = undefined;
  /**
   * @member {Array.<String>} labels
   */
  exports.prototype['labels'] = undefined;
  /**
   * @member {Array.<Boolean>} listCheckBoxDisplay
   */
  exports.prototype['listCheckBoxDisplay'] = undefined;
  /**
   * @member {Array.<String>} listConsentCode
   */
  exports.prototype['listConsentCode'] = undefined;
  /**
   * @member {Array.<Boolean>} listMandatory
   */
  exports.prototype['listMandatory'] = undefined;
  /**
   * @member {Integer} pdfPageNum
   */
  exports.prototype['pdfPageNum'] = undefined;
  /**
   * @member {Boolean} requestsign
   */
  exports.prototype['requestsign'] = undefined;
  /**
   * @member {Integer} totalConsentPageNumber
   */
  exports.prototype['totalConsentPageNumber'] = undefined;
  /**
   * @member {String} txt
   */
  exports.prototype['txt'] = undefined;
  /**
   * @member {String} typeconsent
   */
  exports.prototype['typeconsent'] = undefined;




  return exports;
}));


