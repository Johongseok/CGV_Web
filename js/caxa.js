/* 탑배너 메뉴닫기기능 */
$('.btn_ad_close').click(function(){
  $('aside').hide();
});

/* 인기영화 탭메뉴 기능 */
var sec2 = $('.chart_img').find('a');
console.log('메뉴 li갯수 : ' + sec2.length);
var i;
function chart_menu(num) {
    for(i=0;i<sec2.length;i++){
        if(num == i){
            sec.eq(i).addClass('active');
            $('.pick_tab_content_0'+i).show();
          }else{
            sec.eq(i).removeClass('active');
            $('.pick_tab_content_0'+i).hide();
          }
        }
      };


/* 특별관 탭메뉴 기능 */
var sec = $('#real_time_nav').find('li');
console.log('메뉴 li갯수 : ' + sec.length);

var i;
function sec_menu(num) {
    for(i=0;i<sec.length;i++){
        if(num == i){
            sec.eq(i).addClass('active');
            $('.tab_content_0'+i).show();
          }else{
            sec.eq(i).removeClass('active');
            $('.tab_content_0'+i).hide();
          }
        }
      };

/* 메인 광고 기능 */
const video = $('.video');
const doBtn = $('#car_btn');

doBtn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        doBtn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        video.get(0).pause();
        doBtn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});

/* Sound Control Button */
const soundBtn = $('#car_sound');
/* 사운드 무음 상태로 초기값 지정 */
video.prop('muted',true);
soundBtn.click(function(){
    /* muted 상태일 때 */
    if(video.prop('muted')){
        video.prop('muted',false); //음 재생
        soundBtn.html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
    }else{
        video.prop('muted',true); //음소거
        soundBtn.html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
    }
});