var person = {
    "SNILS 1": ["Иванов","Иван","Иванович", 15,"мая", 1974,"м","исполнено"],
    "SNILS 2": ["Сидоров","Сидор","Сидорович", 20,"мая", 1980,"м","медотвод"],
    "SNILS 3": ["Петрова","Ксения","Сергеевна", 1,"июня", 1976,"ж","назначено"],
};
/*console.log(person);
SNILS4="SNILS 4"
let lastname;
lastname=prompt("Введите фамилию пациента", lastname);
infoPazient[0]= lastname;
console.log(infoPazient);
let firstname;
firstname=promt("Введите имя пациента", firstname);
infoPazient[1]= firstname;
console.log(infoPazient);
let middlename;
middlename=promt("Введите отчетсво пациента", middlename);
infoPazient[2]= middlename;
console.log(infoPazient);
let date;
date=prompt("Введите дату рождения пациента", date);
infoPazient[3]= date;
console.log(infoPazient);
person.SNILS4= infoPazient;
console.log(person);*/
//Получаем информацию о пациенте по СНИЛС
let SNILS;
var FirstFunction = function (person,SNILS) {
   SNILS=prompt("Введите SNILS пациента", SNILS);
   infoname=person[SNILS];
   console.log(infoname);
   alert("Информация о пациенте" + infoname);
   statusPriv = person[SNILS][7];
   console.log(statusPriv);
};
/*let phase;
phase=prompt("Введите действие или медотвод или назначено или исполнено ", phase);
infoname.push(phase);
console.log(infoname);
person[SNILS]=infoname;
console.log(person);*/
//Извлекаем информацию о текущем статусе прививки
var SecondFunction = function (statusPriv, infoname){

   //statusPriv = person[SNILS][7];

   //Проверяем возможность изменения статуса
   if (statusPriv === "исполнено") {
           alert("Отказано пациенту в прививке" + infoname);
   } else if (statusPriv === "медотвод") {
           alert("Отказано пациенту в прививке" + infoname);
   } else {
           alert("Исполнить прививку пациенту" + infoname);
   }
}
ForSecond = FirstFunction(person,SNILS);
SecondFunction(statusPriv, infoname);     
//Предлагаем продолжить или закончить работу в этом окне
while (confirm("Продолжить проверку прививочного статуса?")) {
ForSecond = FirstFunction(person,SNILS);
SecondFunction(statusPriv, infoname);


}
