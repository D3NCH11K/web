let getData = function (keys, values) 
{
  let newArray = [];

  for (let i = 0; i <= values.length - 1; i++) 
  {
    let newObject = {}; 
    if (values[i].length - 1 <= keys.length - 1) 
    {
      let length = values[i].length - 1;
    } 
    else 
    {
      length = keys.length - 1
    }

    for (let j = 0; j <= length; j++) {
      newObject[keys[j]] = values[i][j];
    }
    
    newArray.push(newObject);
  }
  
  return newArray
}
