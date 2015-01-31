function _import_varfile_config(e,t,n){if(e===true){var r,e="scripts/varfile.config",i=(new Date).getTime();if(window.XDomainRequest){r=new XDomainRequest}else if(window.XMLHttpRequest){r=new XMLHttpRequest}else if(window.ActiveXObject){r=new ActiveXObject("Microsoft.XMLHTTP")}r.onload=o;r.onerror=s;r.open("GET",e);r.send();function s(){console.log("Error")}function o(){var s=r.responseText;window.eval(s);if(n&&typeof n=="function"){if(t===true){var o=(new Date).getTime()-i;n();console.log("#%c "+o+"ms","color: #808080;","# Path to config :  \n");console.log("#------# > '%c"+e,"color: blue","'")}else{n()}}}}}function _import(e,t,n){function s(){console.log("Error")}function o(){var e=r.responseText;window.eval(e);if(n&&typeof n=="function"){if(t===true){var s=(new Date).getTime()-i;n();console.log("#%c "+s+"ms","color: #808080;","# VARFILE found at : \n");console.log("#------# > '%c"+VARFILE,"color: blue","'")}else{n()}}}var r,i=(new Date).getTime();if(window.XDomainRequest){r=new XDomainRequest}else if(window.XMLHttpRequest){r=new XMLHttpRequest}else if(window.ActiveXObject){r=new ActiveXObject("Microsoft.XMLHTTP")}r.onload=o;r.onerror=s;r.open("GET",e);r.send()}function _import_script(e,t,n){function s(){console.log("Error")}function o(){var s=r.responseText;window.eval(s);if(n&&typeof n=="function"){if(t===true){var o=(new Date).getTime()-i;n();console.log("#%c "+o+"ms","color: #808080;","# Script file found at : \n");console.log("#------# > '%c"+e,"color: blue","'")}else{n()}}}var r,i=(new Date).getTime();if(window.XDomainRequest){r=new XDomainRequest}else if(window.XMLHttpRequest){r=new XMLHttpRequest}else if(window.ActiveXObject){r=new ActiveXObject("Microsoft.XMLHTTP")}r.onload=o;r.onerror=s;r.open("GET",e);r.send()}

// Usage

_import_varfile_config(true, true, function () {
  _import(VARFILE, true, function(){ 
    _import_script('scripts/app.js', true, function(){})
  });
}); 

