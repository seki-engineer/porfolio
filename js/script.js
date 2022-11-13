$(function () {

  //loading
  $(window).on('load', function () {
    //ローディングアニメーションをフェードアウト
    $('.loading').delay(600).fadeOut(600);
  });
  setTimeout(function () {
    $('.loading').fadeOut(600);
  }, 1000);

  //枠線追加/削除
  $(".gnav-item").on('mouseover', function () {
    $(this).css('border', '1px solid white');
  });
  $(".gnav-item").on('mouseout', function () {
    $(this).css('border', '');
  });

  //MVのフェードイン
  $(".mv > img").delay(1000)
  $(".mv > img").fadeIn(2000, function () {
    $(".mv > h1").fadeIn(1000);
  });

  //worksの透明化
  $(".works-img >img").on('mouseover', function () {
    $(this).css('opacity', '0.6');
  });
  $(".works-img > img").on('mouseout', function () {
    $(this).css('opacity', '1.0');
  });

  //contactの透明化
  $(".contact-list >img").on('mouseover', function () {
    $(this).css('opacity', '1.0');
  });
  $(".contact-list > img").on('mouseout', function () {
    $(this).css('opacity', '0.6');
  });


  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});
