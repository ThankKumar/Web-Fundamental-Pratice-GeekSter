var ccanvasElement = document.getElementById("cookieChart");
var config={

    type:"bar",
    data:{
        labels: ["red","blue","yellow","green","purpole","Orange"],
        datasets:[{label:"# of Video",data:(12,18,14,11,2,3)}],

},
};
var cookieChart = new Chart(ccanvasElement,config)