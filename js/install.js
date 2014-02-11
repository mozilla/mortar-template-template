var AppInstall = (function() {

  function isInstallable() {
    return(navigator.mozApps !== undefined);
  }


  function isInstalled(manifestPath, callback) {

    var request = window.navigator.mozApps.checkInstalled(manifestPath);

    request.onsuccess = function() {
        console.log(request.result);
        if(request.result) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    };

    request.onerror = function() {
        callback(request.error);
    };
    
  }


  function install(manifestPath, callback) {

    if(callback === undefined) {
      callback = function() {
      };
    }

    console.log('installing from manifest = ', manifestPath);

    var installRequest = navigator.mozApps.install(manifestPath);

    installRequest.onsuccess = function() {
      callback(null, manifestPath);
    };

    installRequest.onerror = function() {
      callback(installRequest.error, manifestPath);
    };

  }


  return {
    install: install,
    isInstalled: isInstalled,
    isInstallable: isInstallable
  };

}());
