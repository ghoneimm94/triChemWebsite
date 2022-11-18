// window.onhashchange = function() {
//   alert('dflkdfk');
// };

var currentPage = window.location.href;
var map = '';

// listen for changes
setInterval(function() {
  if (currentPage != window.location.href) {
    if (currentPage.includes('home') || currentPage.includes('categories')) {
    }
    // page has changed, set new page as 'current'
    currentPage = window.location.href;
    onInIt();
  }
}, 500);

$(window).scroll(function() {
  if ($(window).scrollTop() <= 50) {
    $('.navbar').css({ 'background-color': '#fff' });
  } else {
    $('.navbar').css({ 'background-color': '#f8f8f8' });
  }
});

$(document).ready(function() {
  setTimeout(() => {
    onInIt();
  }, 0);
});

function onInIt() {
  var dom = document.getElementById('map');
  if (dom) {
    map = new google.maps.Map(dom, {
      center: { lat: 29.938915, lng: 30.847701 },
      zoom: 13
    });

    var marker = new google.maps.Marker({
      position: { lat: 29.938915, lng: 30.847701 },
      map: map,
      icon: 'assets/imgs/rsz_2rsz_logo2.png',
      draggable: true,
      animation: google.maps.Animation.BOUNCE
    });

    marker.addListener('click', function() {
      var win = window.open('https://goo.gl/maps/bLAHbSMiqNx', '_blank');
      win.focus();
    });
  }

  $('.nav-link').on('click', function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass('show');
  });
  var screensize = $(window).width();

  $('.pro-box').on({
    mouseover: function() {
      $(this)
        .find('.hovering-overlay')
        .fadeIn();
      $(this)
        .find('.pro-caption')
        .addClass('center-caption');
    },
    mouseleave: function() {
      $(this)
        .find('.hovering-overlay')
        .fadeOut();
      $(this)
        .find('.pro-caption')
        .removeClass('center-caption');
    }
  });

  // $('.demo').slick({
  //   dots: false,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   touchMove: false
  // });
  if (screensize <= 768) {
    $('.demo').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchMove: false,
      autoplay: true,
      autoplaySpeed: 3000
    });
  } else {
    $('.demo').slick({
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      touchMove: false,
      autoplay: true,
      autoplaySpeed: 3000
    });
  }
  // $('body').niceScroll({
  //   cursorcolor: '#FFA200',
  //   cursorwidth: '6px'
  // });

  //Make bootstrap carousel swappable in the mobile view
  $('.carousel').bcSwipe({ threshold: 50 });

  $('.collapser').click(function(e) {
    $(this)
      .find('.collapse')
      .collapse('toggle');
  });
  $('.collapse').click(function(e) {
    e.stopPropagation();
  });
}
