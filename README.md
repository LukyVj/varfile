# varfile

### Usage

#### Basic 
```javascript
_import_varfile_config(true, false, function () {
  _import(VARFILE, false, function(){ 
    _import_script('app.js', false, function(){})
  });
}); 
```

#### Debug
```javascript
_import_varfile_config(true, true, function () {
  _import(VARFILE, true, function(){ 
    _import_script('app.js', true, function(){})
  });
}); 
```
