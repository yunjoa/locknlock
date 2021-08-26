window.onload = function init() {


  let delta, num = 0, move;
    
  $(window).on('mousewheel DOMMouseScroll', function(e){
      delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -40;

      clearTimeout(move);
      move = setTimeout(function (){
          if(delta < 0){
              //up
              num++;
          }else{
              //down
              num--;
          }

          $('html,body').animate({
          scrollTop : window.innerHeight * num
          });

          console.log(num);
      },100);
  });


  
  
}