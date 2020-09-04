'use strict';

$(document).ready(function () {
  dropdownMenu();
  closeDropdown();
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
