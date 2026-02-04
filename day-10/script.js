const newp=document.createElement("p");
newp.textContent="whyyyyyyyyyyyyyyyy";
const di=document.getElementById("c");
di.appendChild(newp);

document.querySelector("#c p").remove();

const image=document.createElement("img");
image.setAttribute("src","https://wallpapers.com/images/hd/red-and-blue-owl-483aq3pngvfprzuk.jpg");

image.setAttribute("alt","OWL");
const gall=document.getElementById("ga");
gall.appendChild(image);

//date method
 //used before using preddifned methods

setInterval(()=>{
    const today=new Date();
    console.log(today);
    const date=new Date();
    const hr=date.getHours();
    const min=data.getMinutes();
    let second=date.getSeconds();

},2000);

//hw convert clock into 12 hr format




