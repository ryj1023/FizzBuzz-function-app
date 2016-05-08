$(document).ready(function(){
var value = prompt("Enter a value between 1 and 100");
var a = parseInt(value);
 
	var changeNumber = function(){
	 for (i=1; i<=a;i++){
		var b;
		if(i % 15 === 0){
 	   	b = $('#list').append('<li class="numbers"> <span>' + "FizzBuzz" + '</span> </li>');
	} else if(i % 5 === 0){
		
		b = $('#list').append('<li class="numbers"> <span>' + "Fizz" + '</span> </li>');
		
	} else if(i % 3 === 0 ){
		b = $('#list').append('<li class="numbers"> <span>' + "Buzz" + '</span> </li>');
	}

	else{
		b = $('#list').append('<li class="numbers"> <span>' + i + '</span> </li>');	 
		}
		console.log(b);
	}
}
  changeNumber();
});



	
 
