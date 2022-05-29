isRaining = confirm("Идёт дождь?");

if(isRaining)
{
    minutes = 0;
} 
else 
{
    temperature = prompt("Какая температура на улице?", "0");
    if(temperature < 0 || temperature > 35){
        minutes = 0;
    } else 
    {
        minutes = 20 - Math.abs(20 - temperature);
    }
}

alert("Длительность прогулки: " + minutes + " минут");
