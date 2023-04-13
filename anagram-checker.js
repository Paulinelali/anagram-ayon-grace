module.exports = function (string1, string2) {

  if(string1.length !== string2.length){
    return false;
  }
  let str1 = string1.toLowerCase().split('').sort().join('');
  let str2 = string2.toLowerCase().split('').sort().join('');

  if(str1 === str2){
    return true;
  } else { 
    return false;
  }
}
