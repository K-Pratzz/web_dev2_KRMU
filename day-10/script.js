const newp=document.createElement("p");
newp.textContent="whyyyyyyyyyyyyyyyy";
const di=document.getElementById("c");
di.appendChild(newp); //appends adds the elemnts as last child of parents ele..prepend adds it as the very first child of the parents ele..before adds it before the parent ele,,after adds it afetr the parent ele

document.querySelector("#c p").remove();

const image=document.createElement("img");
image.setAttribute("src","https://wallpapers.com/images/hd/red-and-blue-owl-483aq3pngvfprzuk.jpg");

image.setAttribute("alt","OWL");
const gall=document.getElementById("ga");
gall.appendChild(image);

//date method
 //used before using preddifned methods

// setInterval(()=>{
//     const today=new Date();
//     console.log(today);
//     const date=new Date();
//     const hr=date.getHours();
//     const min=data.getMinutes();
//     let second=date.getSeconds();

// },2000);

const now= new Date();
console.log(now);
now.setMonth(11);
console.log(now);


//hw convert clock into 12 hr format




