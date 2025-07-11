const granted = document.getElementById("hidden");

var ipAddressArray = ["102.182.93.12","196.39.38.201","196.50.213.18","197.245.113.150"]


fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => {
    ipAddress = data.ip
    myFunction(data.ip)
  })

  function myFunction(ip){
    if (ipAddressArray.includes(ip)) {
        document.getElementById("hidden").classList.remove("hidden")
    } else {
    }
  }



 

