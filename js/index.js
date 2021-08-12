window.onload = function init() {

        
    var dep1_menus = document.querySelector('.dep1_menus')
    function darkOrLight (red, green, blue){
        var brightness;
        brightness = (red * 299) + (green * 587) + (blue * 114);
        brightness = brightness / 255000;
        // values range from 0 to 1
        // anything greater than 0.5 should be bright enough for dark text
        if (brightness >= 0.5) {
            return "dep1_menus.style.color='#666'";
        } else {
            return "dep1_menus.style.color='white'";
        }
    };
    darkOrLight ();
    




    // const menuli = document.querySelectorAll('.dep1_menus');
    // const subMenu = document.querySelectorAll('.sub_wrap');

    // menuli.addEventListener('mouseenter', function(){
    //     subMenu.slidedown(300);
    // })




    
    // header.addEventListener('mouseover', () =>
    // todo 헤더에 마우스 오버하면 배경 생김
    // 헤더에 마우스 아웃하면 배경 없어짐)



    
    // function getTextColorByBackgroundColor(dep1Menu) {
    //     const c = dep1Menu.substring(1)      // 색상 앞의 # 제거
    //     const rgb = parseInt(c, 16)   // rrggbb를 10진수로 변환
    //     const r = (rgb >> 16) & 0xff  // red 추출
    //     const g = (rgb >>  8) & 0xff  // green 추출
    //     const b = (rgb >>  0) & 0xff  // blue 추출
    //     const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
    //     // 색상 선택
    //     return luma < 127.5 ? "white" : "black" // 글자색이
    // }
    

    // const dep1Menu = document.querySelector('.dep1_menus > a');
    // getTextColorByBackgroundColor(dep1Menu);
    // console.log(dep1Menu)

    



// 슬라이드다운 : 실패. 금방 내려감
function navFun(){
    $('.dep1_menus').on({
        mouseenter:function(){
            $('header').stop().slideDown(200);
        },
        mouseleave:function(){
            $('header').stop().slideUp(200);
        }
    });


    $('header').on({
        mouseenter:function(){
            $('header').stop().slideDown(200);
        },
        mouseleave:function(){
            $('header').stop().slideUp(200);
        }
    });
}    


// 헤더 배경 하얗게 

function headerBg (){
    $(header).on({
        mouseenter:function(){
            $(this).style.background('white')
        }
    })
}

    // 네비 스크롤시 하이드 쇼 
    (function(){

        var doc = document.documentElement;
        var w = window;
        var prevScroll = w.scrollY ||  doc.scrollTop;
        var curScroll;
        var direction = 0;
        var prevDirection = 0;
        var header = document.querySelector('.header');
        var checkScroll = function() {
        
                /*
            ** Find the direction of scroll
            ** 0 - initial, 1 - up, 2 - down
            */
            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > prevScroll) { 
                //scrolled up
                direction = 2;
            } else if (curScroll < prevScroll) { 
                //scrolled down
                direction = 1;
            }

            if (direction !== prevDirection) {
                toggleHeader(direction, curScroll);
            }
            prevScroll = curScroll;
        };


        var toggleHeader = function(direction, curScroll) {
            if (direction === 2 && curScroll > 64) { 
                header.classList.add('hide');
                prevDirection = direction;

            } else if (direction === 1) {
                header.classList.remove('hide');
                prevDirection = direction;

            }
        };
        
        window.addEventListener('scroll', checkScroll);
    })();






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
        arrows:true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed:3000,
        speed:1000
    });


}
