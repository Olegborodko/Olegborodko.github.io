(function($){
  jQuery.fn.responsiveBlock = function(option){

    var setting={ rating: 5 };

    var make = function(){

      if (option){ $.extend(setting,option);}

      result = '';
      for (i = 1; i <= 10; i++) {
        if (i<=setting.rating) {
          result += '<i class="fa fa-circle" aria-hidden="true"></i> ';
        }else{
          result += '<i class="fa fa-circle-o" aria-hidden="true"></i> ';
        }
      }

      $(this).html(result);

    };

    return this.each(make);
  };

  $(".span_rating1").responsiveBlock({rating: 1});
  $(".span_rating2").responsiveBlock({rating: 2});
  $(".span_rating3").responsiveBlock({rating: 3});
  $(".span_rating4").responsiveBlock({rating: 4});
  $(".span_rating5").responsiveBlock({rating: 5});
  $(".span_rating6").responsiveBlock({rating: 6});
  $(".span_rating7").responsiveBlock({rating: 7});
  $(".span_rating8").responsiveBlock({rating: 8});
  $(".span_rating9").responsiveBlock({rating: 9});
  $(".span_rating10").responsiveBlock({rating: 10});


  //====================================cat

  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  step = 200;
  margin_top = 100;
  step_animate = 0;
  time_start = 400;

  setInterval(function() {
    step_animate+=1;

    if(step_animate == time_start) {
      top1 = randomInteger(10, $(document).height() - 100);
      left = randomInteger(10, $(document).width() - 100);

      $(".cat-div").css("left", left + "px");
      $(".cat-div").css("top", top1 + "px");
    }

    if (step_animate > time_start) {
      step = step - 1;
      if (step > 100) {
        margin_top -= 1;
        $(".cat-div img").css("margin-top", margin_top + "px");
      }
      if (step <= 100 && step > 0) {
        margin_top += 1;
        $(".cat-div img").css("margin-top", margin_top + "px");
      }
      if (step == 0) {
        step = 200;
        margin_top = 100;
        step_animate = 0;
      }
    }

  }, 10);

})(jQuery);