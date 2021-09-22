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
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex = n++);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("btn-radio");
  if (n > 6) {slideIndex = 1}
  if (n < 1) {slideIndex = 6}
  for (i = 0; i < 6; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = btn-radio[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//automatic silde
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
      slideIndex = 1
    }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); // Change image every 2 seconds
}


// //mutislide
// //var slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// // var slideId = ["slides1", "slides2"]
// // showSlides(1, 0);
// // showSlides(1, 1);

// // function plusSlides(n, no) {
// //   showSlides(slideIndex[no] += n, no);
// // }

// // function showSlides(n, no) {
// //   var i;
// //   var x = document.getElementsByClassName(slideId[no]);
// //   if (n > x.length) {slideIndex[no] = 1}
// //   if (n < 1) {slideIndex[no] = x.length}
// //   for (i = 0; i < x.length; i++) {
// //     x[i].style.display = "none";
// //   }
// //   x[slideIndex[no]-1].style.display = "block";
// // }



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

