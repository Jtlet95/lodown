'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * type of : this will tell of what the data type or value of anytype passed through 
 * 
 * @param: any data type 
 * 
 * @returns: the data and its type either string, array, objecct, undefined, number, boolean, null, function
 * 
 * **/ 
 
 //we are using decalring q variable as an underscore 
_.typeOf = function(value){
     if(typeof value === "string"){
        return "string";
    }else if(Array.isArray(value)){
        return "array";
        
    }else if(typeof value === "object" && value instanceof Date) {
     return "date";   
    }else if (typeof value === "undefined"){
        return "undefined";
    }else if(typeof value ==="number"){
        return "number";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(value === null){
        return "null";
    }else if(typeof value === "function"){
        return "function";
    }else return "object"
}    

module.exports.each = typeof







/**
 * identity: takes a value and returns it unchanged 
 * 
 * @param {Any DataType} value: can be any datatype/ value
 * 
 * 
 * @return {Any DataType}: will be the same value as our input value 
 * */
 function identity(value){
    return value;

_.identity = function(value){
    return value;
};

module.exports.each = identity;


/** first: checks to see if the data is an array if not returns the first element
 * 
 * @param: (array) used to see what data type is and be viewed at the first element
 * 
 * @param:(number) used to see where in the element it should search and if the data is a number 
 * 
 * @return: the array with the first index and the number spot selected  */
                                                                                
 _.first = function(array,number) {
    let newArray = []; //creating new space array for uneeded data 
    if (number > array.length) {    //creating a conditional to check if nnumber is larger than the array 
      return array;  //will just return the array if it is 
    } else if (Array.isArray(array) === false || number < 0) { 
        return [];  // checks to make sure it is an array and the number isnt negative 
    } else if (number === null || number === undefined || isNaN(number) === true) {
        return array[0];  // if the number is null , undefined or NaN it will return the first element  
    } else {
        for (let x = 0; x < number; x++) { //for loop for stoping at nuber to make shure we do not go to far 
            newArray.push(array[x]);
        } return newArray; 
    }
}
module.exports.each = first; 

/**
 * 
** last: checks to see if the data is an array if not returns the last element and a range to that index
 * 
 * @param: (array) used to see what data type is and be viewed at the last element to the index
 * 
 * @param:(number) used to see where in the element it should search and if the data is a number 
 * 
 * @return: the array with the last index and the number spot selected  */

_.last = function(array,number) {
    let newArray = []; //creating new space array for uneeded data 
    if (number > array.length) {    //creating a conditional to check if nnumber is larger than the array 
      return array;  //will just return the array if it is 
    } else if (Array.isArray(array) === false || number < 0) { 
        return [];  // checks to make sure it is an array and the number isnt negative 
    } else if (number === null || number === undefined || isNaN(number) === true) {
        return array[array.length-1];  // if the number is null , undefined or NaN it will return the first element  
    } else {
        for (let x = array.length-1; x > array.length-1-number; x--) { //for  the decrament loop for stoping at number to itterate from the end 
            newArray.unshift(array[x]);
        } return newArray; 
    }
}

module.exports.each = last;

/**
 * index of: this function we made returns the index of the array and returns negative 1 if its nt in the array 
 * 
 * @param: (array) used as a container for our data for the index or negative one 
 * 
 * @param: (value) used a pointer or marker in the array of where the addres sor index would be 
 * 
 * @return : the array index or negative one if there is not value at that selected location */
 
 
 .indexOf = function (array, value) {
    for (let x = 0; x < array.length; x++) { //forward loop to go through the array elements 
        if (value === array[x]) { //if value is found return the index 
            return x;
        } 
    } return -1  // if not return negative 1 
}

module.exports.each = indexOf;

/**
 * contains: checks to see if an array contains a value 
 * 
 * @param: an array that contains/or does not a particular value
 * 
 * @value: check to see if there is a value with the array 
 * 
 * @returns: true if there is a value in the array false otherwise 
 * */
 _.contains = function(array, value) {
    let truthArray = []; // contaioner variable array litteral []; 
    for(var x = 0; x < array.length; x++){  //forward loop to conditional  statement 
       value === array[x] ? truthArray.push(true) : truthArray.push(false);
    }    //results of true of false 
    if (truthArray.indexOf(true) !== -1) {
        return true}
    else return false;

}
module.exports.each = contains;

/**
 * Identity: To define a piece of data and provite its value unchanged
 * 
 * @param: any value
 * 
 * @return: a value as a string 
 * 
 **/ 
 
 _.identity = function(value){
    return value;
};
module.exports.each = identity;

/**
 * unique: to remove all duplocates from an array 
 * 
 * @param: (array) used to hold the data
 * 
 * @return: new array with all duplocates removed **/
 
 _.unique = function(array) {
    //create an array that will hold our unique values
    let uniqueArray = [];
    //make a for loop to access array elements
    for (let x = 0; x < array.length; x++) {
        //indexOf will check our unique array for array[x]. if it is -1, that means that array[x] isn't in unique array and is in array, so we can push it into the unique array
        if (uniqueArray.indexOf(array[x]) === -1) {
            uniqueArray.push(array[x]);
        }
    }
    // must be outside of the loop
    return uniqueArray;
};
module.export.each = unique;

/**
 * filter: to  go throug han array and look for a value and then push to new array 
 * 
 * @param: (array) to give data to test for a value
 * 
 * @param: (function) to test for each element in an array 
 * 
 * return: returning a new array where the values returned true 
 **/ 
 _.filter = function (array, fun) {
    // new array to hold data
    let newArray = [];
    //for loop to access array elements
    for (let x = 0; x < array.length; x++) {
        //call the function for each element and test if it's true or not. if it is true push the element into our newArray
        if (fun(array[x], x, array) === true) {
            newArray.push(array[x]);
        }
      }
      return newArray;
};

module.exports.each = filter;

/** reject: to go through a new array and push in the false values
 * 
 * @param: (array) to give data to test for a value
 * 
 * @param: (function) to test for a flase value in an array 
 * 
 * return: an array full of false values *//
 
 //this will create an array filled with all the truth values from the array, the oppostite of what we want
      let trueArray = _.filter(array,fun);
      //we will push all our false values into this array
      let rejectArray = [];
      for (let x = 0; x < array.length; x++) {
          //we want to search through our trueArray and compare them to the values in original array. if array[x] isn't in trueArray, that means it's false, and so 
          // we should push that into the rejectArray
          if (_.contains(trueArray,array[x]) === false) {
              rejectArray.push(array[x]);
          }
      }
      return rejectArray;
};

/** partition: create two sub arrays of numbers in an incriment 
 * 
 * @param: (array) holding the values of the data and seperated data 
 * 
 * @param: (function) to seperate the data into sub arrays
 * 
 * return: 2 arrays with seperate values
 * */
 _.partition = function(array, fun){
    //im making containers to hold my  truthy and falsy values so i can push them in the correct place 
    var truthArray = [];
    var falseArray = []; 
    for(var i = 0; i < array.length; i++){
        // im going to make a condtional to make truthy or falsey known to me 
            //element   index  array    
        if(fun(array[i], i, array)){
            truthArray.push(array[i])
        }else {
            falseArray.push(array[i])
        }  //combing the two arrays to one array 
    } return [truthArray, falseArray]
    
}
module.export.each = partition;

/**
 * map: if the collection passed arguments about either array or object then push it to array or object
 * 
 * @param: (collection) an array or object
 * 
 * @param (function) to test where the the data should be store in what ollection 
 * 
 * return: new array
 **/ 
 _.map = function (collection, fun){
    var newArray = []; //array to hold data 
    if(Array.isArray(collection)){
  for(var i = 0; i < collection.length; i ++){
      newArray.push(fun(collection[i], i, collection))
  } 
    } else if(typeof collection === "object"){
  for(var key in collection){
      newArray.push(fun(collection[key], key, collection))
  }
    
} return newArray
}
module.exports.each = map;

/**
 * pluck: return an array contaiong every value of each element
 * 
 * @param:(array of objects): to have a target 
 * 
 * @param(property) a value to test if returned 
 * 
 * return: the object key **/
 
 _.pluck = function(array, key){
   return  _.map(array, function(element, index, collection){
      // returning the key value of the object 
      return element[key]; 
      
    }); 
}

module.exports.each = pluck;

/**
 * every: to check it every value in the array or object is true
 * 
 * @param (collection) holding data to test array or object and true
 * 
 * @param(function) to help test if either collection intake through their key/values or elements
 * 
 * return: true or false */ 
 
 _.every = function(collection, action){
let value = true;
if(action === undefined){
        for(var i = 0; i < collection.length; i++){
            if (collection[i]){
                return true;
            }else {return false}
        }
    }
_.each(collection, function(ele, i, collection){
    if(!(action(collection[i], i, collection))){
        value = false;
    }
});
return value;
}
module.exports.each = every;

/** some: to check if some of the values are true 
 * 
 * @param: (collection) holding data to test if some values in collection are true
 * 
 * @param: (function) to help test if either collection intake through their key/values or elements
 * 
 * return: a truthy or falsey */
 
 _.some = function(collection, action){
let value = false;
if (action === undefined){
    for(var i = 0; i < collection.length; i++){
        if(collection[i]){
            return true;
        }else {return false}
    }
}
_.each(collection, function(ele, i, collection){
    if(action(collection[i], i, collection)){
        value = true;
    }
})
return value;
}

module.exports.each = some;


/**
 *reduce : to reduce to a single value 
 * 
 * @param: (array) for holding the values 
 * 
 * @param:(function) to call upon for each value
 * 
 *@param (seed) the value held at tha total and current 
 * 
 * return: the single value reduced */
 
 _.reduce = (array, func, seed) => {
  let place;
  if(seed <= 0){
      return 0;
  } else if(!seed){
    place = array[0];
    for(let i = 1; i < array.length; i++){
      place = func(place,array[i],i);
    }
    return place;
  }else{
    for(let i = 0; i < array.length; i++){
      seed = func(seed,array[i],i);
    }
    return seed;
  }
};
module.exports.each = reduce;


/**
 * extend: to make a copy of data from one object to another 
 * 
 * @param(objects) to place the key and values within and export copys of the data to another object
 * 
 * return: the updated object */
 
 _.extend = (object1, ...args) => {
  for(let i = 0; i < args.length; i++){
    for(let key in args[i]){
      object1[key] = args[i][key];
    }
  }
  return object1;
};

module.exports.each = extend;