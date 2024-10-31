# LocalServerApi.ScancontrollerApi

All URIs are relative to *https://localhost:9123/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScannerSourcesUsingGET**](ScancontrollerApi.md#getScannerSourcesUsingGET) | **GET** /scanner/sources | getScannerSources
[**getScannerSourcesUsingPOST**](ScancontrollerApi.md#getScannerSourcesUsingPOST) | **POST** /scanner/sources | getScannerSources
[**scanUsingGET**](ScancontrollerApi.md#scanUsingGET) | **GET** /scanner/scan | scan
[**scanUsingPOST**](ScancontrollerApi.md#scanUsingPOST) | **POST** /scanner/scan | scan


<a name="getScannerSourcesUsingGET"></a>
# **getScannerSourcesUsingGET**
> TwainSourceResult getScannerSourcesUsingGET()

getScannerSources

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.ScancontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScannerSourcesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TwainSourceResult**](TwainSourceResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getScannerSourcesUsingPOST"></a>
# **getScannerSourcesUsingPOST**
> TwainSourceResult getScannerSourcesUsingPOST()

getScannerSources

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.ScancontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScannerSourcesUsingPOST(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TwainSourceResult**](TwainSourceResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="scanUsingGET"></a>
# **scanUsingGET**
> ResponseScanResult scanUsingGET(opts)

scan

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.ScancontrollerApi();

var opts = { 
  'duplex': true // Boolean | duplex
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scanUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **duplex** | **Boolean**| duplex | [optional] 

### Return type

[**ResponseScanResult**](ResponseScanResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="scanUsingPOST"></a>
# **scanUsingPOST**
> ResponseScanResult scanUsingPOST(opts)

scan

### Example
```javascript
var LocalServerApi = require('local-server-api');

var apiInstance = new LocalServerApi.ScancontrollerApi();

var opts = { 
  'duplex': true // Boolean | duplex
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scanUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **duplex** | **Boolean**| duplex | [optional] 

### Return type

[**ResponseScanResult**](ResponseScanResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

