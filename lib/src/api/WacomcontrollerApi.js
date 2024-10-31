(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResponseWacomResult', 'model/WacomConsentDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ResponseWacomResult'), require('../model/WacomConsentDto'));
  } else {
    // Browser globals (root is window)
    if (!root.LocalServerApi) {
      root.LocalServerApi = {};
    }
    root.LocalServerApi.WacomcontrollerApi = factory(root.LocalServerApi.ApiClient, root.LocalServerApi.ResponseWacomResult, root.LocalServerApi.WacomConsentDto);
  }
}(this, function(ApiClient, ResponseWacomResult, WacomConsentDto) {
  'use strict';

  /**
   * Wacomcontroller service.
   * @module api/WacomcontrollerApi
   * @version 1.0
   */

  /**
   * Constructs a new WacomcontrollerApi. 
   * @alias module:api/WacomcontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consentUsingPOST operation.
     * @callback module:api/WacomcontrollerApi~consentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * consent
     * @param {module:model/WacomConsentDto} wacomConsentDto wacomConsentDto
     * @param {module:api/WacomcontrollerApi~consentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.consentUsingPOST = function(wacomConsentDto, callback) {
      var postBody = wacomConsentDto;

      // verify the required parameter 'wacomConsentDto' is set
      if (wacomConsentDto == undefined || wacomConsentDto == null) {
        throw "Missing the required parameter 'wacomConsentDto' when calling consentUsingPOST";
      }


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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iAddScreenUsingPOST operation.
     * @callback module:api/WacomcontrollerApi~iAddScreenUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * iAddScreen
     * @param {module:model/WacomConsentDto} wacomConsentDto wacomConsentDto
     * @param {module:api/WacomcontrollerApi~iAddScreenUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.iAddScreenUsingPOST = function(wacomConsentDto, callback) {
      var postBody = wacomConsentDto;

      // verify the required parameter 'wacomConsentDto' is set
      if (wacomConsentDto == undefined || wacomConsentDto == null) {
        throw "Missing the required parameter 'wacomConsentDto' when calling iAddScreenUsingPOST";
      }


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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom/interactive/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iGetCallbackUsingGET operation.
     * @callback module:api/WacomcontrollerApi~iGetCallbackUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * iGetCallback
     * @param {module:api/WacomcontrollerApi~iGetCallbackUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.iGetCallbackUsingGET = function(callback) {
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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom/interactive/callback', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iGetCallbackUsingPOST operation.
     * @callback module:api/WacomcontrollerApi~iGetCallbackUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * iGetCallback
     * @param {module:api/WacomcontrollerApi~iGetCallbackUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.iGetCallbackUsingPOST = function(callback) {
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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom/interactive/callback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iInitUsingPOST operation.
     * @callback module:api/WacomcontrollerApi~iInitUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * iInit
     * @param {module:api/WacomcontrollerApi~iInitUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.iInitUsingPOST = function(callback) {
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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom/interactive/init', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPullEventUsingGET operation.
     * @callback module:api/WacomcontrollerApi~iPullEventUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * iPullEvent
     * @param {module:api/WacomcontrollerApi~iPullEventUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.iPullEventUsingGET = function(callback) {
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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom/interactive/pullEvent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPullEventUsingPOST operation.
     * @callback module:api/WacomcontrollerApi~iPullEventUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * iPullEvent
     * @param {module:api/WacomcontrollerApi~iPullEventUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.iPullEventUsingPOST = function(callback) {
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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom/interactive/pullEvent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iStartUsingPOST operation.
     * @callback module:api/WacomcontrollerApi~iStartUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * iStart
     * @param {module:api/WacomcontrollerApi~iStartUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.iStartUsingPOST = function(callback) {
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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom/interactive/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the killUsingPOST operation.
     * @callback module:api/WacomcontrollerApi~killUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWacomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * kill
     * @param {module:api/WacomcontrollerApi~killUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResponseWacomResult}
     */
    this.killUsingPOST = function(callback) {
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
      var returnType = ResponseWacomResult;

      return this.apiClient.callApi(
        '/wacom/kill', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
