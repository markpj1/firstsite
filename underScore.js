//underScore.js

each =  function(obj, array) {
    var i, length;
    if (Array.isArray(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        array(obj[i], i, obj);
      }
    } else {
      var keys;
      if(!null && typeof obj === "object") {
      var keys = Object.keys(obj)
      for(i = 0;  i < keys.length; i++) {
        array(keys[i], obj[keys[i]], obj);
       } 
      }
    }
    return obj;
  };

var myArray = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,100,1000000];
var myObj = {
	name: "Mark P Jaramillo",
	city: "Petaluma",
	state: "Ca"
};

each(myObj, function(val, index, arr){
	console.log(val + ":", "= index # " + index + ")", arr);
})

var doSearch = function(array, targetValue) {
	var min = 0; 
  var max = array.length -1;
	var guess;
	
  while(min <= max) {
		guess = Math.floor((min+max) / 2);
    
    if(array[guess] === targetValue) {
      return guess;
    }
    else {
      if(array[guess] < targetValue) {
        console.log(min = guess + 1);
      }
      else {
        console.log(max = guess -1);
      }
    }
	}
  return -1 
};

console.log(doSearch(myArray,5));

