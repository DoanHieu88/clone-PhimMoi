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

