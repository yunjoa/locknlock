window.onload = function init() {


    // const menuli = document.querySelectorAll('.dep1_menus');
    // const subMenu = document.querySelectorAll('.sub_wrap');

    // menuli.addEventListener('mouseenter', function(){
    //     subMenu.slidedown(300);
    // })




    
    // header.addEventListener('mouseover', () =>
    // todo 헤더에 마우스 오버하면 배경 생김
    // 헤더에 마우스 아웃하면 배경 없어짐)
    
    function getTextColorByBackgroundColor(dep1Menu) {
        const c = dep1Menu.substring(1)      // 색상 앞의 # 제거
        const rgb = parseInt(c, 16)   // rrggbb를 10진수로 변환
        const r = (rgb >> 16) & 0xff  // red 추출
        const g = (rgb >>  8) & 0xff  // green 추출
        const b = (rgb >>  0) & 0xff  // blue 추출
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
        // 색상 선택
        return luma < 127.5 ? "white" : "black" // 글자색이
    }
    

    const dep1Menu = document.querySelector('.dep1_menu');
    getTextColorByBackgroundColor(dep1Menu);
    console.log(dep1Menu)


}
