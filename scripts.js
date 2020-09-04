'use strict';

$(document).ready(function () {
  console.log('script ready')
  dropdownMenu();
})


function dropdownMenu() {
  $('#games_btn').click(function () {
    console.log('click');

    if ($('#games').css('display') == 'none') {
      $('#games').css('display', 'block');
      console.log('display changed on block');
    } else {
      $('#games').css('display', 'none');
      console.log('display changed on none');
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
