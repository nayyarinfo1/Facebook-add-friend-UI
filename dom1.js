let text = document.querySelector('#text');
let addbtn = document.querySelector('#add');
let removebtn = document.querySelector('#remove');

addbtn.addEventListener("click",()=>{
	text.style.color="green";
	text.innerHTML="Friends";

})

removebtn.addEventListener("click",()=>{
	text.style.color="red";
	text.innerHTML="Unfriend";
})

