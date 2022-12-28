$(document).ready(function(){
    /* scroll 플러그인 사용 */
    //이벤트 객체 e
    $('.gnb a').on('click',function(e){
        e.preventDefault();
        // scrollTo(링크될 # || y축픽셀값, 애니메이션 시간)
        $(window).scrollTo(this.hash || 0,500);
    });

    /* 스크롤: 100px이상 되었을때 TOP버튼 나오도록 코딩 */
    /* if~else , scrollTop(), 이벤트 scroll */
    /* 1. 스크롤시 alert(); */

    // 선생님 방법
    /* var sa = 100;
    $(window).on('scroll',function(){
        var num = $(window).scrollTop();
        console.log(num);
        if(num>sa){
            $('aside div').stop().fadeIn();
        }else{
            $('aside div').stop().fadeOut();
        }
    }); */

    // 내가 한 방법
    $(window).on('scroll',function(){
        var scrT = $(this).scrollTop();
        console.log(scrT);
        if(scrT>=100){
            $('aside div').show();
        }else {
            $('aside div').hide();
        }
    });

    /* animate 부드러운 스크롤탑 이동 */
    $('.top').on('click',function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},1000);
    });
});