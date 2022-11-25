$(function () {
  // 드롭다운 메뉴
  $("nav .depth1 > li").hover(
    function () {
      // mouseover
      // $(this).children().addClass("show");
      $("nav .depth2").addClass("show");
    },
    function () {
      //mouseout
      // $(this).children().removeClass("show");
      $("nav .depth2").removeClass("show");
    }
  );

  //이미지슬라이드
  let img_num = 0;
  setInterval(function () {
    img_num++;
    if (img_num > 2) {
      img_num = 0;
    }
    $(".slider > .sliders").css({
      transform: `translateY(${-img_num * 300}px)`,
    });
  }, 3000);
});
