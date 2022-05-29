let getSortedArray = function (arrayOfObjects, key) 
{
  let swap;
  for (let i = 0; i < arrayOfObjects.length - 1; i ++) 
  {
    for (let j = i + 1; j < arrayOfObjects.length; j ++) 
    {
      if (arrayOfObjects[j][key] < arrayOfObjects[i][key]) 
      {
        swap = arrayOfObjects[i];
        arrayOfObjects[i] = arrayOfObjects[j];
        arrayOfObjects[j] = swap;
      }
    }
    
  }
  return (arrayOfObjects);
}
