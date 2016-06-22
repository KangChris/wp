/**
 * Created by ChrisKang on 16/6/21.
 */
$('.arrow').click(function () {
    console.log("have clicked");
    $('html,body').animate({scrollTop: $('.culture').offset().top}, 1100);
});
jQuery.easing.def = "easeOutCubic";
