const filterInput = document.getElementById("filter");

/*filterInput.onfocus = function(){
	console.log("Merhaba");
}*/

//sayfadaki nesneye odaklanma ile olan olay
filterInput.addEventListener("focus",function(e){
e.target.placeholder = "Yeni içerik";
console.log(e.target.placeholder);
});