const Tracker = {
  'iNum-Story': 'bk-blue',
  'iNum-Task': 'is-task',
  'iNum-Bug': 'bk-red',

  'OPT-Story': 'bk-blue',
  // 'OPT-Task': 'is-task',
  'OPT-Bug': 'bk-red',

  Requirements: 'bk-orange br-orange',
};

const Name = {
  Web: ['[Web]', '【WEB】'],
  BO: ['[BO]', '【BO】'],
};

const changeColor = () => {
  $('.issue-card').each((i, card) => {
    const tracker = $(card).find('.issue-id > strong').text().split(' #')[0];
    $(card).addClass(Tracker[tracker]);

    const name = $(card).find('.name').text();

    if (name.includes('[iNL]')) {
      $(card).addClass('br-blue');
    }

    // if ($(card).hasClass('is-task')) {
    //   Name.Web.forEach(o => {
    //     if (name.indexOf(o) > -1) {
    //       $(card).addClass('br-turquoise');
    //       return;
    //     }
    //   });
    //   Name.BO.forEach(o => {
    //     if (name.indexOf(o) > -1) {
    //       $(card).addClass('br-gray');
    //       return;
    //     }
    //   });
    // }
  });
};
changeColor();

chrome.extension.onMessage.addListener((msg, sender, sendResponse) => {
  msg.action === 'change_color' && changeColor();
});

// let list = document.getElementsByClassName('issue-status-col');
// var observer = new MutationObserver(function(mutations) {
//   let card = mutations.find(function(mutation) {
//     return mutation.addedNodes.find(el => {
//       return el.className.includes('issue-card');
//     });
//   });
//   console.log(card)
//   // card && changeColor();
// });

// for (let o of list) {
//   // o.addEventListener(
//   //   'DOMNodeInserted',
//   //   function(e) {
//   //     console.log(e);
//   //   },
//   //   false
//   // );
//   observer.observe(o, { childList: true });
// }

// var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutation) {
//     for (var i = 0; i < mutation.addedNodes.length; i++)
//       insertedNodes.push(mutation.addedNodes[i]);
//   });
// });
// observer.observe(document, { childList: true });
