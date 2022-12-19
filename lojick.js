
var tabLinks = document.getElementsByClassName("tab-link");
var tabContents = document.getElementsByClassName("tab-contents");


function opentab (tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var sidbar = document.getElementById("sidbar");

function clos(){
    sidbar.style.right = ("-200px");
}
function opens(){
    sidbar.style.right = ("0px");
}