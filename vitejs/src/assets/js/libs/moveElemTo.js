/**
 * @version        1.1 - 29.04.2023
 * @author         Artem Kuznecov
 * @email          artem@web-ascent.ru
 * @website        web-ascent.ru
 * @link           
 * @param {Object} args
 * @param {String} args.elem  - (селектор - элемент который перемещаем)
 * @param {String} args.to    - (селектор - элемент куда перемещаем)
 * @param {String} args.where - (команда в каком месте от элемента вставляем)
 */
export function moveElemTo(args) {
  let elem = args.elem;
  let to = args.to;
  let where = args.where;

  if (typeof elem === "string") {
    elem = document.querySelector(elem);
  }  
  
  if (typeof to === "string") {
    to = document.querySelector(to);
  }

  if (where === "append") {
    to.append(elem);
  } else if (where === "prepend") {
    to.prepend(elem);
  } else if (where === "before") {
    to.parentNode.insertBefore(elem, to);
  } else if (where === "after") {
    to.after(elem);
  }
  
}