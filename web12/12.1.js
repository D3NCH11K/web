let age = prompt("Укажите возраст", "0");

let ageGroup;
if(age <= 1)
{
    ageGroup = "Щенки";
} 
else 
{
    if(age > 1 && age <= 3)
    {
        ageGroup = "Молодые собаки";
    } 
    else 
    {
        if(age > 3 && age <= 7)
        {
            ageGroup = "Собаки средних лет";
        } 
        else 
        {
            ageGroup = "Почтенные таксоны";
        }
    }
}

alert(ageGroup);
