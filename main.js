import './modules/slider';
import { modals, tabs, form, changeModalState, timer, images } from "./modules";
window.addEventListener('DOMContentLoaded', () => {
  let modalState = {};
  const deadline = '2023-03-20';

  changeModalState(modalState);
  modals();
  tabs({
    headerSelector: '.glazing_slider',
    tabsSelector: '.glazing_block',
    contentSelector: '.glazing_content',
    activeClass: 'active',
    display: 'block',
  });
  tabs({
    headerSelector: '.decoration_slider',
    tabsSelector: '.no_click',
    contentSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
    display: 'block',
  });
  tabs({
    headerSelector: '.balcon_icons',
    tabsSelector: '.balcon_icons_img',
    contentSelector: '.big_img > img',
    activeClass: 'do_image_more',
    display: 'inline-block',
  });
  form(modalState);
  timer('.container1', deadline);
  images();
});
