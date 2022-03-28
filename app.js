let userName = prompt("Please your enter name")
let nameArea = document.querySelector("#myName")

if (userName. length> 0){
    nameArea.innerHTML = userName
}
else {
    (nameArea.innerHTML="quest")
}

function showTime () {
    let d = new Date ();
    let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let time = document.querySelector("#myClock")
   
    
    time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay()]}`
    setTimeout(showTime, 1000);
}
showTime();

    