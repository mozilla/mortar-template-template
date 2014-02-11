window.onload = function() {

  var statusMsg = document.getElementById('status');

  statusMsg.innerHTML = 'Ready';

  // Remove all this for packaged apps -----------------
  // The install button is initially hidden
  var loc = window.location;
  var proto = loc.protocol;
  var host = loc.host;
  var manifestPath = proto + '//' + host + '/manifest.webapp';
  var btnInstall = document.getElementById('install');

  AppInstall.isInstalled(manifestPath, function(err, installed) {

    if(err) {

      console.log('Error while finding app installed status', err);
      return;

    }

    if(installed) {

      statusMsg.innerHTML = 'This app is already installed';

    } else {

      console.log('App not installed--setting up install button');

      btnInstall.addEventListener('click', function() {

        AppInstall.install(manifestPath, onAppInstalled);

      }, false);

      btnInstall.classList.remove('hidden');

    }

  });


  function onAppInstalled(err, manifestPath) {

    if(!err) {

      statusMsg.innerHTML = 'Successfully installed';
      btnInstall.classList.add('hidden');

    } else {

      console.log('Error installing the app', err);
      statusMsg.innerHTML = err.name + ' ' + manifestPath;

    }

  }
  // ----------------------------------------------------
};
