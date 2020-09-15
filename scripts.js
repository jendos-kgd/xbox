'use strict';

$(document).ready(function () {
  dropdownMenu();
  closeDropdown();
  changeSLides();
  gamesSlides();
  // console.log($('.main_game_item').css('width'));
})

function closeDropdown() {
  $(document).click(function (e){ // событие клика по странице
    if ($('#games').css('display') == 'block' || $('#consoles').css('display') == 'block' || $('#my_xbox').css('display') == 'block') { // если открыт какой-то dropdown
      if (!$('.dropdown_menu').is(e.target) && // если клик сделан не по элементу
          $('.dropdown_menu').has(e.target).length === 0 && // если клик сделан не по вложенным элементам
          !$('.dropdown_title').is(e.target)) {  //если клик сделан не по кнопке открытия dropdown
          $('.dropdown_menu').css('display', 'none'); // скрываем блок
      }
    }
  });
}

function dropdownMenu() {
  $('#games_btn').click(function () {
    if ($('#games').css('display') == 'none') {
      $('#games').css('display', 'block');
    } else {
      $('#games').css('display', 'none');
    };
  });

  $('#console_btn').click(function () {
    if ($('#consoles').css('display') == 'none') {
      $('#consoles').css('display', 'block');
    } else {
      $('#consoles').css('display', 'none');
    };
  });

  $('#my_xbox_btn').click(function () {
    if ($('#my_xbox').css('display') == 'none') {
      $('#my_xbox').css('display', 'block');
    } else {
      $('#my_xbox').css('display', 'none');
    };
  });
}
function changeSLides() {
  // Определяем переменные:
  let slideRight = $('.main_game_item').css('width');
  let slideOverRight = parseInt(slideRight) * 2 + 'px' ;
  let slideLeft = '-' + slideRight;
  let slideOverLeft = +parseInt(slideLeft) * 2 + 'px';
  let show = '0px';
  let strokeCircle = 'img/logo and icons/stroke_circle.png';
  let fillCircle = 'img/logo and icons/fill_circle.png';
  let game1link = 'https://www.youtube.com/embed/_q51LZ2HpbE';
  let game2link = 'https://www.youtube.com/embed/l5eGNqppGUs';
  let game3link = 'https://www.youtube.com/embed/iZzZKdIoOEI';


  $('#next_slide').click(function () {
    if ($('#first_slide').css('left') == show) {
      $('#first_slide').css('left', slideLeft);
      $('#second_slide').css('left', show);
      $('#third_slide').css('left', slideRight);

      $('#trailer').attr('action', game2link);

      $('#first_dote').attr('src', strokeCircle);
      $('#second_dote').attr('src', fillCircle);
      $('#third_dote').attr('src',strokeCircle);
    } else if ($('#second_slide').css('left') == show) {
      $('#first_slide').css('left', slideOverLeft);
      $('#second_slide').css('left', slideLeft);
      $('#third_slide').css('left', show);

      $('#trailer').attr('action', game3link);

      $('#first_dote').attr('src', strokeCircle);
      $('#second_dote').attr('src', strokeCircle);
      $('#third_dote').attr('src', fillCircle);
    }
  })

  $('#prev_slide').click(function () {
    if ($('#second_slide').css('left') == show) {
      $('#first_slide').css('left', show);
      $('#second_slide').css('left', slideRight);
      $('#third_slide').css('left', slideOverRight);

      $('#trailer').attr('action', game1link);

      $('#first_dote').attr('src', fillCircle);
      $('#second_dote').attr('src', strokeCircle);
      $('#third_dote').attr('src',strokeCircle);
    } else if ($('#third_slide').css('left') == show) {
      $('#first_slide').css('left', slideLeft);
      $('#second_slide').css('left', show);
      $('#third_slide').css('left', slideRight);

      $('#trailer').attr('action', game2link);

      $('#first_dote').attr('src', strokeCircle);
      $('#second_dote').attr('src', fillCircle);
      $('#third_dote').attr('src',strokeCircle);
    }
  })
}

function gamesSlides() {
  let leftPosition = 0;
  let gamesCounter = $('.games_card').length;
  let gamesField = parseInt($('.games_cards_container').css('width'), 10);
  let maxRightPosition = gamesCounter * 350;
  let maxLeftPosition = gamesField - maxRightPosition -65;


  console.log('gamesCounter:' + gamesCounter);
  console.log('gamesField:' + gamesField);
  console.log('maxRightPosition:' + maxRightPosition);
  console.log('maxLeftPosition:' + maxLeftPosition);


  $('#games_forward').click(function () {
    if ((leftPosition - 640) < maxLeftPosition) {
      leftPosition = maxLeftPosition;
    } else {
      leftPosition -= 640;
    }
    console.log(leftPosition);
    $('.games_cards_container').css('left', leftPosition + 'px')
  })
}
