$(function () {
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
});
