const filterInput = document.getElementById("filter");

/*filterInput.onfocus = function(){
	console.log("Merhaba");
}*/

//sayfadaki nesneye odaklanma ile olan olay
filterInput.addEventListener("focus",function(e){
e.target.placeholder = "Yeni içerik";
console.log(e.target.placeholder);
});


//submit ile sayfa yenilenmesini kapatma
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit",submitForm);
function submitForm(e){
	console.log("Submit Event");
	e.preventDefault();  //sayfa yenilenmiyor artık
}


//Klavye Eventleri

//Keypress eventleri

//document.addEventListener("keypress",run);

//function run(e){
	//console.log(e.which);
	//console.log(e.key);
//}


//Keyup eventleri
todoInput.addEventListener("keyup",changeText);

function run(e){
	console.log(e.which);
	console.log(e.key);
}
