(function() {
  if (!$('#content').has('.contextual').length) {
    $('#content').prepend('<div class="contextual"></div>');
  }

  $('.contextual').prepend(
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
    $('#top-menu').toggle(!fullscreen);
    $('#header').toggle(!fullscreen);
    $('#sidebar').toggle(!fullscreen);
    if (fullscreen) {
      $('#content').width('auto');
    } else {
      $('#content').width('75%');
    }
  };

  toggleFullscreen();
})();
