const section=document.getElementById("profile")
section.style.backgroundColor="cyan";
section.style.padding='15px';
section.style.textAlign='center';

const task2=document.getElementsByClassName("para")
for(let i=0;i<task2.length;i++){
    task2[i].style.color="red";
    task2[i].style.fontSize="70px";

}

const m=document.querySelector("#prof p")
m.style.backgroundColor="cyan";
console.log(task2.length)

const content=document.getElementById("proof");
const t=content.querySelectorAll("p");

t.style.color="brown";