# LocalServerApi.WacomcontrollerApi

All URIs are relative to *https://localhost:9123/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consentUsingPOST**](WacomcontrollerApi.md#consentUsingPOST) | **POST** /wacom | consent
[**iAddScreenUsingPOST**](WacomcontrollerApi.md#iAddScreenUsingPOST) | **POST** /wacom/interactive/add | iAddScreen
[**iGetCallbackUsingGET**](WacomcontrollerApi.md#iGetCallbackUsingGET) | **GET** /wacom/interactive/callback | iGetCallback
[**iGetCallbackUsingPOST**](WacomcontrollerApi.md#iGetCallbackUsingPOST) | **POST** /wacom/interactive/callback | iGetCallback
[**iInitUsingPOST**](WacomcontrollerApi.md#iInitUsingPOST) | **POST** /wacom/interactive/init | iInit
[**iPullEventUsingGET**](WacomcontrollerApi.md#iPullEventUsingGET) | **GET** /wacom/interactive/pullEvent | iPullEvent
[**iPullEventUsingPOST**](WacomcontrollerApi.md#iPullEventUsingPOST) | **POST** /wacom/interactive/pullEvent | iPullEvent
[**iStartUsingPOST**](WacomcontrollerApi.md#iStartUsingPOST) | **POST** /wacom/interactive/start | iStart
[**killUsingPOST**](WacomcontrollerApi.md#killUsingPOST) | **POST** /wacom/kill | kill


<a name="consentUsingPOST"></a>
# **consentUsingPOST**
> ResponseWacomResult consentUsingPOST(wacomConsentDto)

consent

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var wacomConsentDto = new LocalServerApi.WacomConsentDto(); // WacomConsentDto | wacomConsentDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.consentUsingPOST(wacomConsentDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wacomConsentDto** | [**WacomConsentDto**](WacomConsentDto.md)| wacomConsentDto | 

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="iAddScreenUsingPOST"></a>
# **iAddScreenUsingPOST**
> ResponseWacomResult iAddScreenUsingPOST(wacomConsentDto)

iAddScreen

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var wacomConsentDto = new LocalServerApi.WacomConsentDto(); // WacomConsentDto | wacomConsentDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iAddScreenUsingPOST(wacomConsentDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wacomConsentDto** | [**WacomConsentDto**](WacomConsentDto.md)| wacomConsentDto | 

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="iGetCallbackUsingGET"></a>
# **iGetCallbackUsingGET**
> ResponseWacomResult iGetCallbackUsingGET()

iGetCallback

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iGetCallbackUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="iGetCallbackUsingPOST"></a>
# **iGetCallbackUsingPOST**
> ResponseWacomResult iGetCallbackUsingPOST()

iGetCallback

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iGetCallbackUsingPOST(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="iInitUsingPOST"></a>
# **iInitUsingPOST**
> ResponseWacomResult iInitUsingPOST()

iInit

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iInitUsingPOST(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="iPullEventUsingGET"></a>
# **iPullEventUsingGET**
> ResponseWacomResult iPullEventUsingGET()

iPullEvent

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPullEventUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="iPullEventUsingPOST"></a>
# **iPullEventUsingPOST**
> ResponseWacomResult iPullEventUsingPOST()

iPullEvent

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPullEventUsingPOST(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="iStartUsingPOST"></a>
# **iStartUsingPOST**
> ResponseWacomResult iStartUsingPOST()

iStart

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iStartUsingPOST(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="killUsingPOST"></a>
# **killUsingPOST**
> ResponseWacomResult killUsingPOST()

kill

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.WacomcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.killUsingPOST(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseWacomResult**](ResponseWacomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

