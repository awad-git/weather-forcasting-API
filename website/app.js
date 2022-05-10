// Personal API Key for OpenWeatherMap API
const apiKey = 'e75b599daac5e6b3226ca6ed16dc7942&units=metric';
let d=new Date()
let date=d.toDateString()

/* Function to GET Project Data -update UI*/
const updateUI=async()=>{
    const result=await fetch('http://localhost:5000/all')
    const all=await result.json()
    document.getElementById('date').innerHTML =`Today's Date is : ${all.date}`;
    document.getElementById('temp').innerHTML = `Temperature is : ${all.temp}`;
    document.getElementById('content').innerHTML =`Your input : ${all.feelings}`;

}
// Event listener to add function to existing HTML DOM element-function
//document.getElementById('generate').addEventListener('click',genData)

const genData=async ()=>{
    const zip=document.getElementById('zip').value 
    const feelings=document.getElementById('feelings').value
    const baseURL=`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`

    /* Function to GET Web API Data*/
    const fetched=await fetch(baseURL)
 console.log(fetched)
try{
    const data=await fetched.json()
    //console.log(data)
    //const temp=await data.main.temp
    //console.log('temp is ',temp)
    const temp=await data.main.temp
    const sentData= await {temp:data.main.temp,date:date,feelings:feelings}
    console.log(sentData)
    /* Function to POST data */
   await fetch('http://localhost:5000/addData',{
       method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},
       body:JSON.stringify(sentData),
       
   }).then(
       updateUI()
   )
}
catch(error){
    console.log('error found ',error)

}

}
 document.getElementById('generate').addEventListener('click',genData)


