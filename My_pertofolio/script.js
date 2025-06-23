var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");


function opentab(tabname){
    for( let tablink of tablinks){
tablink.classList.remove("active-link");
    }

     for( let tabcontent of tabcontents){
tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

document.getElementById(tabname).classList.add("active-tab");


}

var sidemenus = document.getElementById("sidemenu");
function openmenu(){
    sidemenus.style.right="0";

}

function closemenu(){
    sidemenus.style.right="-200px";
    
}
