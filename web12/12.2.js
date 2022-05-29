let isRaining = confirm("Идёт дождь?");

let minutes;
if(isRaining)
{
    minutes = 0;
} 
else 
{
    let temperature = prompt("Какая температура на улице?");
    if(temperature >= 10 && temperature < 15){
        minutes = 30;
    } 
    else 
    {
        if(temperature >= 15 && temperature < 25){
            minutes = 40;
        } 
        else
        {
            if(temperature >= 25 && temperature <= 35){
                minutes = 20;
            } 
            else 
            {
                minutes = 0;
            }
        }
    }
}

console.log("Длительность прогулки: " + minutes + " минут");
