//const textinput=document.getElementById("myInput");
// textinput.addEventListener("change",(event)=>{
//     event.preventDefault();
//     console.log(event.target.id); //event.target.value


// })

const form=document.getElementById("formInput");
const textinput=document.getElementById("myInput");
const courseinput=document.getElementById("course");
const output=document.getElementById("output");

form.addEventListener("submit",(event)=>{
    event.preventDefault(); //prevents the form from from submiting and refrehing
    const name=textinput.value;
    const course=courseinput.value;
    console.log(name);
    output.innerText=name+" "+course
})

