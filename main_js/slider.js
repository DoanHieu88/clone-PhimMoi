//slide show
//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex = 0;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
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
  showSlides(slideIndex = n);
}

// prev/next 
function plusSlides(x){
  var slides = document.getElementsByClassName("slides");
  showSlides(slideIndex += x);
  if(slideIndex > slides.length - 1 ){
    slideIndex = 0;
  }
}


function prevSlides(x){
  var slides = document.getElementsByClassName("slides");
  showSlides(slideIndex = x--);
  if(slideIndex > slides.length - 1 ){
    slideIndex = 0 ;
  }

}
