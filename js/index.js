$(function(){

    $('header').on('mouseenter', function(){
        $(this).css('background','white');
        $('.header_svg > path').css('fill','black')
        $('.dep1_menus > a').css('color','black')
        $('.current_lang').css('color','black')
        $('.icon_search > span').css('color','black')
        $('.header').addClass('h_underline');


    })
    $('header').on('mouseleave', function(){
        $(this).css('background','transparent');
        $('.header_svg > path').css('fill','white')
        $('.dep1_menus > a').css('color','white')
        $('.current_lang').css('color','white')
        $('.icon_search > span').css('color','white')
        $('.header').removeClass('h_underline');

        
    })

    $('.dep1_menus').on('mouseenter',function(){
        $('main').addClass('blur');
        $('.header').addClass('white');
        $('.header').addClass('h_underline');
        
    });
    
    $('.dep1_menus').on('mouseleave',function(){
        $('main').removeClass('blur');
        $('.header').removeClass('white');
        $('.header').removeClass('h_underline');
        
    });






    //스크롤 업 다운에 따라 메뉴 숨기기
    let pos = {y:0,y2:0,state:true}
    $(window).on('scroll',function(){
        pos.y = $(this).scrollTop();
        if(pos.y > pos.y2){
            //scroll down
            pos.state = true;
        }else{
            //scroll up
            pos.state = false;
        }
        pos.y2 = pos.y;
        
        if(pos.state){
            $('.header').addClass('active');
            $(this).css('background','white');

        }else{
            $('.header').removeClass('active');
            $(this).css('background','transparent');

        }

        if($(this).scrollTop() > $(window).height()){
            $('.header').addClass('white');
            $('.header').css('background','white');

            $('.header_svg > path').css('fill','black')
            $('.dep1_menus > a').css('color','black')
            $('.current_lang').css('color','black')
            $('.icon_search > span').css('color','black')
    
        }else{
            $('.header').removeClass('white');
            $('.header').css('background','transparent');

        }

    });










    // 슬릭슬라이더
    $(".main_slider").slick({
        arrows:false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed:3000,
        speed:1000
    });
    
    $(".lounge_slider").slick({
        centerMode: true,
        centerPadding: '60px',
        arrows:true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed:3000,
        speed:1000
    });



// 라운지 슬라이더 프로그레스바    

$(".lounge_slider").on('afterChange',function(event,slick, currentSlide){
    // var curIdx = $(".lounge_slider .slick-active").attr("data-slick-index"); 
    //-> function(event,slick, currentSlide) 대체가능

    // curIdx = parseInt(curIdx);

    $(".control_bar > span").animate({
        "width": (33.3 * (currentSlide+1))+"%"
    },300);

    $('.swipe_current').text(currentSlide+1) 
});




    


// scroll시 fadein

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
        console.log('scroll')
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(70px)';
    } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
    }
    })
}

window.addEventListener('scroll', handleScroll);
;









});