(function () {
  if (!$('#content').has('.contextual').length) {
    $('#content').prepend('<div class="contextual"></div>');
  }

  $('#content > .contextual').eq(0).prepend(
    '<a class="icon icon-fullscreen" href="javascript:void(0)">Full screen</a>'
    // '<a href="#" onclick="$(&quot;html&quot;).toggleClass(&quot;agile-board-fullscreen&quot;); saveFullScreenState(); return false;" class="icon icon-fullscreen">Full screen</a>'
  );

  let fullscreen = !!JSON.parse(sessionStorage.getItem('fullscreen'));

  $('.icon.icon-fullscreen').click(() => {
    fullscreen = !fullscreen;
    sessionStorage.setItem('fullscreen', fullscreen);

    toggleFullscreen();
  });

  const toggleFullscreen = () => {
    // top-menu toggle
    $('#top-menu').toggle(!fullscreen);

    // header toggle
    $('#header > a').toggle(!fullscreen);
    $('#header > #quick-search').toggle(!fullscreen);
    $('#header > h1').toggle(!fullscreen);

    // sidebar toggle
    $('#sidebar').toggle(!fullscreen);
    if (fullscreen) {
      $('#content').width('auto');
      $('#header').css('min-height', 'auto');
    } else {
      $('#content').width('75%');
      $('#header').css('min-height', '5.3em');
    }
  };

  toggleFullscreen();
})();
