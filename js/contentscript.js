const Story = 'iNum-Story';
const Task = 'iNum-Story';
const Bug = 'iNum-Story';

(function() {
  $('.issue-id > strong').each((i, e) => {
    const text = e.innerText.split(' #')[0];

    switch (text) {
      case Story:
        $(e)
          .closest('.issue-card')
          .addClass('bk-blue');
        break;
      case Bug:
        $(e)
          .closest('.issue-card')
          .addClass('bk-red');
        break;
    }
  });
})();
