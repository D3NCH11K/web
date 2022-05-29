let time = prompt();
let goToStore = false;
let goToMarket = false;
let goToDairy = false;

if (time >= 7 && time < 20)
  {
    if(time >= 8 && time < 19)
      {
        if (!(time >= 13 && time < 14))
          {goToDairy = true;}
        else{ goToStore = true;}
      }
    else{
      if (time >= 14 && time <15)
        {
         goToMarket = true;
        }
      else{
        if(time >= 9 && time < 17){
        goToStore = true;}
        else{goToMarket = true;}
      }
    }
  }
if(goToStore)
  {alert("В магазин");}
if(goToMarket)
  {alert("На рынок");}
if (goToDairy)
  {alert("На фабрику");}
