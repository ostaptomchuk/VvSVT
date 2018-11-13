function cube(x) {
     return x*x*x;                  
}
    var x;
x=prompt("Введіть номер вашого варіанту");
alert("Ваш варіант піднесений до кубу = "+cube(x));

function dod(date,month,number)  {
	 return ((date+month)/number);
}
    var date=prompt("Введіть дату свого народження");
	var month=prompt("Введіть місяць народження");        
	var number=prompt("Введіть номер варіанту");
alert("Результат "+dod(+date,+month,+number).toFixed(2));

function dayWeek(n) {
	if(n==1){
	 alert("Понеділок");}
else if (n==2){
     alert("Вівторок");}
else if (n==3){
     alert("Середа");}
else if (n==4){                                        
     alert("Четвер");}
else if (n==5){
     alert("Пятниця");}
else if (n==6){
     alert("Субота");}
else if (n==7){
     alert("Неділя");}
	 return n;
}
var n=prompt("Введіть номер дня");
	  n=dayWeek(n);

	  var week2;
t=prompt("Введіть номер сьогоднішнього дня  знову");
    if( t == 1 )
week2= function(){		
alert("Сьогодні Понеділок");} 
     else if(t ==2 ) 
		week2= function(){
alert("Сьогодні Вівторок"); }
    else if(t ==3 ) 
	   week2= function(){
alert("Сьогодні Середа"); }                     
	 else if(t ==4 )
      week2= function(){		 
 alert("Сьогодні Четвер");} 
	 else if(t ==5 )
     week2= function(){		 
       alert("Сьогодні П'ятниця"); }
	 else if(t ==6 )
		 week2= function(){
         alert("Сьогодні Субота");} 
	 else if(t ==7 )
		 week2= function(){
	alert("Сьогодні Неділя");}
week2();

var n=prompt("Введіть номер варіанту");

function Factorial(n)
            {
                if (n === 0)
                    return 1;                                    
                else
                    return n * Factorial(n - 1);
            }
function db(n) {
     return n*n;                 
}
if (n % 2 == 0)  
alert(Factorial(n));
else alert(db(n));

var y=prompt("Введіть номер варіанту");

function factorial(y){
     var res = 1;
     while(y) res *= y--;
     return res;
}
if (n % 2 == 0)  
alert(factorial(y));

else
alert (n*n);
