document.addEventListener("DOMContentLoaded",function(){
	var item = document.querySelectorAll(".porfolio-item");
	for(x of item){
		x.onclick = function(){
			for(let i = 0;i<item.length;i++){
			if(item[i]!=this){
			item[i].classList.remove("list-focus");
				}
			}
			this.classList.toggle("list-focus");
		}
	}
},false);
