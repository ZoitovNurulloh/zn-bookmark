const elsTabsItem = document.querySelectorAll(`.tabs__item`);
const elsTabsPanel = document.querySelectorAll(`.tabs__panel`);
const elsTabLink = document.querySelectorAll(`.js-tab-link`);


const elsAccordionItem  = document.querySelectorAll(`.accordion__item`);
const elsAccordionItemToggler  = document.querySelectorAll(`.accordion__item-toggler`);


function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove(`tabs__item--active`);
  });
}

function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove(`tabs__panel--active`);
  });
}

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(`accordion__item--open`)
  })
}

elsTabLink.forEach( function (elTabLink) {
  elTabLink.addEventListener(`click`, function (evt) {

    evt.preventDefault();

      deactivateTabItems();

      elTabLink.parentElement.classList.add(`tabs__item--active`);

      deactivateTabPanels();

      // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
      const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
      elTargetPanel.classList.add('tabs__panel--active');
  })
})


elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener(`click`, function () {
    closeAccordionItems();

    elAccordionItemToggler.closest(`.accordion__item`).classList.add(`accordion__item--open`);
  })
})
