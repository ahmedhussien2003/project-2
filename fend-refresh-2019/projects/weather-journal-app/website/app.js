import { json } from "body-parser";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
/* Global Variables */
const apikey='87abd87a8546425472f1af04aaa393bb';
const Urll='file:///D:/cources/web/projects/2nd%20project/fend-refresh-2019/projects/weather-journal-app/website/index.html';
const zipcodeelement=document.getElementById('zip');
const feelingselement=document.getElementById('feelings');
const dateelement=document.getElementById('date');
const tempelement=document.getElementById('temp');

//add listener 
document.getElementById('generate').addEventListener('click',events);
//post data to api
function events(){
    let data={
        date:d,
        zipcode:zipcodeelement.value,
        content:feelingselement.value,
        temp:tempelement.value
    };
    getWeather(data.zipcode,apikey,Urll)
    .then((siteData)=>{
console.log(siteData);
postData('/all-data',data)
    })
};
//get zip from the api
async function getzipinformation(zipcode){
    return await
    (await fetch(`http://api.openweathermap.org/data/2.2/forecast?zip=${zipcode}${apikey}`)).json()
}
//post data
async function postDateToServer(date){
    const response=await fetch(`${apiurl}postData`,{
        method:'post',
        headers: {'content-Type:':'application/json'},
        body:JSON.stringify(data)
    });
    try{
if(!response.ok){
    alert('not success');
    return;
}
response.json().then(data=>{
    if(response.ok)
    updateUI();
    else
    alert('sorry!!,not success');
})
    }
    catch(error){
        console.log("error!",error);
    }
}
//update UI
async function updateUI(){
    const ahmed=await fetch('/allinfo');
    try{
        ahmed.json().then(data=>{
            dateelement.innerHTML=`our date :${data.date}`;
            tempelement.innerHTML=`the temp :${data.temp}`;
            document.getElementById('content').innerHTML=`your feelings are:${data.content}`;
    
        })

    }
    catch (error){
        console.log("sorry!!error",error);
    }
}
