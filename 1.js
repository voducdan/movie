document.addEventListener('DOMContentLoaded',function(){
	var btn=document.querySelector(".btn");
	console.log(btn[0]);
	 btn.onclick = function(){
		var move=document.querySelector('.move');
		move.classList.add('right');
	}
},false);
