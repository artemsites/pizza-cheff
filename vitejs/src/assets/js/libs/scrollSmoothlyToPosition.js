/**
 * @title Scroll smoothly to position | Плавная прокрутка в положение
 * @author1 https://stackoverflow.com/questions/51689653/how-to-smoothly-scroll-to-an-element-in-pure-javascript#answer-51689657
 * @author2  web-dev-artem.ru
 *
 * @version 1.6 - 17.05.2023
 * @cacher  https://snippets.cacher.io/snippet/1530dfc32408f9682b30
 * @gist    https://gist.github.com/artemijeka/860cfcd079b1f42cace732c31b5e3a29
 *
 * @param {String} params.selectorTarget       | target element selector
 * @param {Number} params.y                    | scroll to Y position
 * @param {Number || String } params.marginTop | additional scroll size, 
 *   если установлено число то это значение в px
 *   если указывается строка то можно применить rem: "5rem" при условии что у :root или html установлен font-size
 **/
export function scrollSmoothlyToPosition(params) {
  params.selectorTarget = params.selectorTarget || false;
  params.marginTop = params.marginTop || 0;

  let posOfTop;
  if (params.selectorTarget) {
    posOfTop = document
      .querySelectorAll(params.selectorTarget)[0]
      .getBoundingClientRect().top;
    
    // Если marginTop задан в "rem"
    if (typeof params.marginTop==='string' && params.marginTop.substring('rem')) {
      const elRoot = document.querySelector(':root');
      let fs = getComputedStyle(elRoot).getPropertyValue('font-size'); 
      let fsPx = fs.slice(0,-2)// del 'px'
      const countRem = params.marginTop.slice(0,-3)
      params.marginTop = fsPx * countRem
    }

    posOfTop = Number(posOfTop - params.marginTop);

    window.scrollBy({
      top: posOfTop, // could be negative value
      left: 0,
      behavior: "smooth",
    });
  } else {
    posOfTop = Number(params.y);

    window.scroll({
      top: posOfTop, // could be negative value
      left: 0,
      behavior: "smooth",
    });
  }
}