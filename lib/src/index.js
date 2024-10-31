(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResponseScanResult', 'model/ResponseWacomResult', 'model/ScanResult', 'model/SourceDto', 'model/TwainSourceResult', 'model/WacomConsentDto', 'model/WacomResult', 'api/ScancontrollerApi', 'api/WacomcontrollerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ResponseScanResult'), require('./model/ResponseWacomResult'), require('./model/ScanResult'), require('./model/SourceDto'), require('./model/TwainSourceResult'), require('./model/WacomConsentDto'), require('./model/WacomResult'), require('./api/ScancontrollerApi'), require('./api/WacomcontrollerApi'));
  }
}(function(ApiClient, ResponseScanResult, ResponseWacomResult, ScanResult, SourceDto, TwainSourceResult, WacomConsentDto, WacomResult, ScancontrollerApi, WacomcontrollerApi) {
  'use strict';

  /**
   * API for interacting with local modules from REST.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var LocalServerApi = require('index'); // See note below*.
   * var xxxSvc = new LocalServerApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new LocalServerApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new LocalServerApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new LocalServerApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ResponseScanResult model constructor.
     * @property {module:model/ResponseScanResult}
     */
    ResponseScanResult: ResponseScanResult,
    /**
     * The ResponseWacomResult model constructor.
     * @property {module:model/ResponseWacomResult}
     */
    ResponseWacomResult: ResponseWacomResult,
    /**
     * The ScanResult model constructor.
     * @property {module:model/ScanResult}
     */
    ScanResult: ScanResult,
    /**
     * The SourceDto model constructor.
     * @property {module:model/SourceDto}
     */
    SourceDto: SourceDto,
    /**
     * The TwainSourceResult model constructor.
     * @property {module:model/TwainSourceResult}
     */
    TwainSourceResult: TwainSourceResult,
    /**
     * The WacomConsentDto model constructor.
     * @property {module:model/WacomConsentDto}
     */
    WacomConsentDto: WacomConsentDto,
    /**
     * The WacomResult model constructor.
     * @property {module:model/WacomResult}
     */
    WacomResult: WacomResult,
    /**
     * The ScancontrollerApi service constructor.
     * @property {module:api/ScancontrollerApi}
     */
    ScancontrollerApi: ScancontrollerApi,
    /**
     * The WacomcontrollerApi service constructor.
     * @property {module:api/WacomcontrollerApi}
     */
    WacomcontrollerApi: WacomcontrollerApi
  };

  return exports;
}));
