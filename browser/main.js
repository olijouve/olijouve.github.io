var LocalServerApi = require('local-server-api');

window.getScanApi = function(){
  return new LocalServerApi.ScancontrollerApi();
};