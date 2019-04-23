const Tracker = {
  'iNum-Story': 'bk-blue',
  'iNum-Bug': 'bk-red',

  'OPT-Story': 'bk-blue',
  'OPT-Bug': 'bk-red'
};

(function() {
  $('.issue-id > strong').each((i, e) => {
    const text = e.innerText.split(' #')[0];
    $(e)
      .closest('.issue-card')
      .addClass(Tracker[text]);
  });
})();
