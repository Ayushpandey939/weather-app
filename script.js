const button=document.getElementById("search-button");
const input=document.getElementById("city-input");
const cityName=document.getElementById("city-name");
const cityTemp=document.getElementById("city-temp");
const cityTime=document.getElementById("city-time");
async function getData(cityName){

   const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=b701550a5080f8765cdaf3998a5598ca&q=${cityName}&aqi=yes`);
   return await promise.json()
}

button.addEventListener("click",async ()=>{
    const value=input.value;
    const result=await getData(value);
    cityName.innerText=`${result.location.name},${result.location.region},${result.location.country}`
   console.log(result);
})
//http://api.weatherapi.com/v1/current.json?key=6e9781d133274a23976204757263006&q=London&aqi=yes 

