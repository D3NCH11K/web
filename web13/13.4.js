function getPrice(time, isUrgent) 
{
  let standardPrice = 1500;
  let urgentPrice = 3750;
  let discount = 250;
  let standardPriceTime = 150;
  
  if (time < (standardPriceTime * 2) && isUrgent) 
  {
    discount = 0;
  }
  if (isUrgent && time <= standardPriceTime) 
  {
    return (time / 2) * urgentPrice;
  }  
  else if (isUrgent && time > standardPriceTime) 
  {
    return (time / 2) * (urgentPrice - discount);
  }  
  else if (!isUrgent && time <= standardPriceTime) 
  {
    return time * standardPrice;
  }  
  else if (!isUrgent && time > standardPriceTime) 
  {
    return time * (standardPrice - discount);
  }
}
alert(getPrice(160, true))
