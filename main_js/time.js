// Hàm khởi tạo đồng hồ
function startTime(){
    //lấy object ngày hiện tai
    var today = new Date();
    //giờ phút giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

       document.getElementById("Timer").innerHTML = h + ": " + m + ":" + s;

    // thiết lập gọi lại 

    var t = setTimeout(function() {
        startTime();
    }, 500);
}

function checkTime(i){

    if (i<10){
        i = "0" + i;
    }
    return i ;
}