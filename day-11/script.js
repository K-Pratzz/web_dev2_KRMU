//any change is event

function hick(){
    document.getElementById("btn").textContent="Clicked"
}
//when user click on button the color of heading tag wil change to tomato,and text will be new heating.
function halik(){
    const heading=document.getElementById("h1");
    heading.style.color="tomato";
    heading.textContent="New Heading";
}
//when automatically created every tag becomes inline..
//when button clicked span tag and image
function handleClick(){

    const button=document.getElementById("btn")
    const span=document.createElement("span")
    span.textContent="this is span text";

    const image=document.createElement("img")
    image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxly7qz8EdxJSXRfjttK5BXp0HrfVjTL4zg&s")
    image.setAttribute("alt","Flower")
    document.getElementById("content").append(span);
    
    document.getElementById("content").append(image);
}

document.getElementById("btn").addEventListener("click",()=>{
    
    const span=document.createElement("span")
    span.textContent="this is span text";

    const image=document.createElement("img")
    image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxly7qz8EdxJSXRfjttK5BXp0HrfVjTL4zg&s")
    image.setAttribute("alt","Flower")
    document.getElementById("content").append(span);
    
    document.getElementById("content").append(image);

})