//HTML5 LOCAL STORAGE
//
//NAME: iStorage
//AUTHOR: Alexander L. Wolfe
//DEPENDANICES: MooTools Core https://ajax.googleapis.com/ajax/libs/mootools/1.3.0/mootools-yui-compressed.js
//COMPATIBILITY: IE8+, FF 3.5+, Safari 4.0+, Chrome 4.0+, Opera 10.5+, iPhone 1.0+, Android 2.0+ 

//NATIVE Object
//window.localStorage 
//
//NATIVE METHODS
//setItem(key, item)
//getItem(key)
//removeItem(key)
//clear()
//key()
//length
//
//NATIVE EVENTS
//'storage' (for all modern browsers)
//window.event (for ie)
//
//NATIVE STORAGE SIZE
//5mb
//QUTOA_EXCEEDED_ERR 


var iStorage = new Class({
    Implements:[Options, Events], 
    options: {
        'prefix': 'istore_'
    }, 
    
	initialize: function(options) {
	   this.setOptions(options); 
		if(this.supportsStorage) {
		  
		} else {
		  return false;
		}
	}, 
	
	clear: function() {
	   localStorage.clear(); 
	}, 
	
	count: function() {
	   return localStorage.length; 
	},
	
	get: function(key) {
	   var skey = this.options.prefix + key; 
	   var item = localStorage.getItem(skey); 
	   if(item) {
	       var data = JSON.decode(item); 
	       this.fireEvent('yes_item');
	       return data.data;  
	   } else {
	       this.fireEvent('no_item');
	       return false; 
	   }
	}, 
	
	remove: function(key) {
	   localStorage.removeItem(this.options.prefix + key); 
	}, 
	
	set: function(key, value) {
        var data = JSON.encode({type: value.constructor,data: value}); 	   
        localStorage.setItem(this.options.prefix + key, data); 
        this.fireEvent('set_item');
	}, 
	
	supportsStorage: function() {
	   return ('localStorage' in window) && window['localStorage'] !== null;
	}
}); 