'use strict';

$(document).ready(function () {
  dropdownMenu();
  closeDropdown();
  changeSLides();
  console.log($('.main_game_item').css('width'));
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

  $('#next_slide').click(function () {
    if ($('#first_slide').css('left') == show) {
      $('#first_slide').css('left', slideLeft);
      $('#second_slide').css('left', show);
      $('#third_slide').css('left', slideRight);
    } else if ($('#second_slide').css('left') == show) {
      $('#first_slide').css('left', slideOverLeft);
      $('#second_slide').css('left', slideLeft);
      $('#third_slide').css('left', show);
    }
  })

  $('#prev_slide').click(function () {
    if ($('#second_slide').css('left') == show) {
      $('#first_slide').css('left', show);
      $('#second_slide').css('left', slideRight);
      $('#third_slide').css('left', slideOverRight);
    } else if ($('#third_slide').css('left') == show) {
      $('#first_slide').css('left', slideLeft);
      $('#second_slide').css('left', show);
      $('#third_slide').css('left', slideRight);
    }
  })
}
