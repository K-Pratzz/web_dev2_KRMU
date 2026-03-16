async function getdata(city){
    try{
        const api="0201f292126f678a397019e6aabd74df";
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={api}`);
        const json= await res.json();
        console.log(json)

    }catch(err){
        console.error(err)
    }
    
}
getdata("gurugram");