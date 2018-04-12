
/* ----------------------------------
   ナビ
------------------------------------- */

$(function() {
  $('a[href*=#], area[href*=#]').click(function() {
    var speed = 400,
        href = $(this).prop("href"),
        hrefPageUrl = href.split("#")[0],
        currentUrl = location.href,
        currentUrl = currentUrl.split("#")[0];
    if (hrefPageUrl == currentUrl) {
      href = href.split("#");
      href = href.pop();
      href = "#" + href;
      var target = $(href == "#" || href == "" ? 'html' : href),
          position = target.offset().top,
          body = 'body',
          userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || userAgent.indexOf("firefox") > -1) { /* IE */
        body = 'html';
      }
      $(body).animate({
        scrollTop: position
      }, speed, 'swing', function() {
        if (href != "#top" && href != "#") {
          location.href = href;
        }
      });
      return false;
    }
  });
});

jQuery(function($) {
  var jump = function(e) {
    if (e) {
      e.preventDefault();
      var target = $(this).attr('href');
    } else {
      var target = location.hash;
    }
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800, function() {
      location.hash = target;
    });
  };
  $(document).ready(function() {
    $('a[href^=#]').bind('click', jump);
    if (location.hash) {
      setTimeout(function() {
        $('html, body').scrollTop(0);
        jump();
      }, 0);
    }
  });
});

/* サブ */
$(function() {
  $('#side dt').click(function() {
    $(this).toggleClass('close');
    $(this).next().slideToggle();
  });
  if(document.URL.match('basic01')) {
    $('#side dl').children('dt')[0].click();
  }else if(document.URL.match('basic02')){
    $('#side dl').children('dt')[1].click();
  }else if(document.URL.match('basic03')){
    $('#side dl').children('dt')[2].click();
  }else if(document.URL.match('basic04')){
    $('#side dl').children('dt')[3].click();
  }else if(document.URL.match('basic05')){
    $('#side dl').children('dt')[4].click();
  }else if(document.URL.match('template01')){
    $('#side dl').children('dt')[5].click();
  }else{
  }
});
