(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TwainSourceResult', 'model/ResponseScanResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TwainSourceResult'), require('../model/ResponseScanResult'));
  } else {
    // Browser globals (root is window)
    if (!root.LocalServerApi) {
      root.LocalServerApi = {};
    }
    root.LocalServerApi.ScancontrollerApi = factory(root.LocalServerApi.ApiClient, root.LocalServerApi.TwainSourceResult, root.LocalServerApi.ResponseScanResult);
  }
}(this, function(ApiClient, TwainSourceResult, ResponseScanResult) {
  'use strict';

  /**
   * Scancontroller service.
   * @module api/ScancontrollerApi
   * @version 1.0
   */

  /**
   * Constructs a new ScancontrollerApi. 
   * @alias module:api/ScancontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getScannerSourcesUsingGET operation.
     * @callback module:api/ScancontrollerApi~getScannerSourcesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TwainSourceResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getScannerSources
     * @param {module:api/ScancontrollerApi~getScannerSourcesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TwainSourceResult}
     */
    this.getScannerSourcesUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = TwainSourceResult;

      return this.apiClient.callApi(
        '/scanner/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getScannerSourcesUsingPOST operation.
     * @callback module:api/ScancontrollerApi~getScannerSourcesUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TwainSourceResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getScannerSources
     * @param {module:api/ScancontrollerApi~getScannerSourcesUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TwainSourceResult}
     */
    this.getScannerSourcesUsingPOST = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = TwainSourceResult;

      return this.apiClient.callApi(
        '/scanner/sources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scanUsingGET operation.
     * @callback module:api/ScancontrollerApi~scanUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseScanResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * scan
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.duplex duplex
     * @param {module:api/ScancontrollerApi~scanUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseScanResult}
     */
    this.scanUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'duplex': opts['duplex']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseScanResult;

      return this.apiClient.callApi(
        '/scanner/scan', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scanUsingPOST operation.
     * @callback module:api/ScancontrollerApi~scanUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseScanResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * scan
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.duplex duplex
     * @param {module:api/ScancontrollerApi~scanUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseScanResult}
     */
    this.scanUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'duplex': opts['duplex']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseScanResult;

      return this.apiClient.callApi(
        '/scanner/scan', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
