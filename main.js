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


//slide show
//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 1,5s
    setTimeout(showSlides, 1500);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex += n);
}

// prev/next 
function plusSlides(n){
  var slides = document.getElementsByClassName("slides");
  showSlides(slideIndex += n);
  if(slideIndex > slides.length - 1 ){
    slideIndex = 0;
  }

}






// turnoff ad
let ad = document.getElementById('ad');
 function off(){
   ad.style.display = 'none';
   
 }

// turn on chat box

let chatBox = document.getElementById('form-chat-box');
function onChat(){
    // chatBox.style.display = 'none';
    if(chatBox.style.display == 'block'){
      chatBox.style.display = 'none';
    }else{
      chatBox.style.display = 'block';
    }

}


// quảng cáo left
let adLeft = document.getElementById('ad-hide');

//ẩn quảng cáo
function hideAd(){
  adLeft.style.display = 'none';

// hiện btn open quảng cáo
  let open = document.getElementById('btn-open');
  open.style.display = 'block';
  
}

//hiện quảng cáo 
function unhide(){
  adLeft.style.display = 'block';
  
  //ẩn button
  let hideBtn = document.getElementById('btn-open');

  hideBtn.style.display = 'none';
}

