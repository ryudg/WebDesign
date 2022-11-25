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
  let img_num = 0; // 이미지 번호
  let img_height = 300;
  let IntervalTime = 3000;

  setInterval(function () {
    img_num++; //3000ms 마다 1씩 증가
    // 마지막이면 처음으로
    if (img_num > 2) {
      img_num = 0;
    }
    // 이동값 = 이미지번호 * 이미지 높이값
    $(".slider > .sliders").css({
      transform: `translateY(${-img_num * img_height}px)`,
    });
  }, IntervalTime);
});
