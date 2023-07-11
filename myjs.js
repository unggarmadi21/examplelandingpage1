 // Parralax

 $(window).scroll(function () {
     var myScroll = $(this).scrollTop();

     //features
     if (myScroll > $('.brands').offset().top - 3000) {
         $('.brands .img-fluid').each(function (i) {
             setTimeout(function () {
                 $('.brands .img-fluid').eq(i).addClass('run');
             }, 200 * i + 1);
         });
     }

     //product
     if (myScroll > $('.figure').offset().top - 6500) {
         $('.figure .figure-img').each(function (i) {
             setTimeout(function () {
                 $('.figure .figure-img').eq(i).addClass('run');
             }, 200 * i + 1);
         });
     }

 });
 //     $('.brands img').css({
 //         'transform': 'translate(0px, ' + myScroll + '%)'
 //     });

 // });