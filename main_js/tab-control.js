const openTab = document.getElementsByClassName('btn-tag-control1');
const list = document.getElementsByClassName('listfilm');

function onTab(ids){
    for(var i= 0; i < list.length; i++ ){
        list[i].style.display = "none";
    }

    // list.style.display = "block";

    document.getElementById(ids).style.display = "block";
}

document.getElementById("default").click();