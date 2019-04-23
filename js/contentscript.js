const Tracker = {
  'iNum-Story': 'bk-blue',
  'iNum-Bug': 'bk-red',

  'OPT-Story': 'bk-blue',
  'OPT-Bug': 'bk-red'
};

const changeColor = () => {
  $('.issue-id > strong').each((i, e) => {
    const text = e.innerText.split(' #')[0];
    $(e)
      .closest('.issue-card')
      .addClass(Tracker[text]);
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
