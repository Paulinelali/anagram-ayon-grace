module.exports = function (string1, string2) {
  let noSpace1 = string1.replace(/\s+/g, '');
  let noSpace2 = string2.replace(/\s+/g, '');
  let noSpecialChar1 = noSpace1.replace(/[^a-zA-Z ]/g, "");
  let noSpecialChar2 = noSpace2.replace(/[^a-zA-Z ]/g, "")

  if(noSpecialChar1.length !== noSpecialChar2.length){
    return false
  }

  let str1 = noSpecialChar1.toLowerCase().split('').sort().join('');
  let str2 = noSpecialChar2.toLowerCase().split('').sort().join('');
  console.log(str1)
  console.log(str2)
  
  if(str1 === str2){
    return true;
  } else { 
    return false;
  }
}
