
import { initSliders, modals, tabs } from "./modules/index";

window.addEventListener('DOMContentLoaded', () => {
  modals();

  tabs({
    headerSelector: '.glazing_slider',
    tabsSelector: '.glazing_block',
    contentSelector: '.glazing_content',
    activeClass: 'active',
  });

  tabs({
    headerSelector: '.decoration_slider ',
    tabsSelector: '.no_click',
    contentSelector: '.decoration_content > div > div',
    activeClass: 'after_click'
  });
});





