# varfile

### Settings 
##### In varfile :
Demo purpose.
```javascript
/*! VARFILE */

//# ELEMENTS
//# COLORS / STYLES
//# CONFIG PROPERTIES

var
//# ELEMENT
BODY    = document.getElementById('body'),

//# COLORS / STYLES
COLOR   = 'red',

//# CONFIG PROPERTIES
SCROLL  = false,
SPEED   = 1;

//# END
```

##### In varfile.config : 
```javascript
var VARFILE = 'scripts/varfile';
```

##### In app.js : 
```javascript
BODY.style.background = COLOR
```

##### Basic (main.js) : 
```javascript
/* load the import function here */
_import_varfile_config(true, false, function () {
  _import(VARFILE, false, function(){ 
    _import_script('app.js', false, function(){})
  });
}); 
```

##### Debug (main.js) :
```javascript
/* load the import function here */
_import_varfile_config(true, true, function () {
  _import(VARFILE, true, function(){ 
    _import_script('app.js', true, function(){})
  });
}); 
```
