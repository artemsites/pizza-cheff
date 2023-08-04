/**
 * @source https://stackoverflow.com/questions/45905160/javascript-on-window-resize-end#answer-45905199
 * @author Artem Kuznecov - web-ascent.ru
 * @version 1.4 - 19.05.2023
 * @source https://gist.github.com/artemijeka/500e1d9071581d826d8e4b7380e63c2c
 * @param {Function} callbackByEventEnd - callback при окончании события | callback at the end of the event
 * @param {Object} optionsCallbackEnd - объект аргумент для функции callbackByEventEnd | object argument for the callbackByEventEnd function
 * @param {Number}   ms - временной промежуток после окончания события чтобы выполнить callbackByEventEnd | the time interval after the end of the event to execute callbackByEventEnd
 * @param {Function} callbackByEventStart - callback при старте события | callback at the start of the event
 * @param {Object} optionsCallbackStart - объект аргумент для функции callbackByEventStart | object argument for the callbackByEventStart function
 * 
 * window.addEventListener("resize", onEventEndThenStartCallback(moveSearchElemByResizeViewport, null, 250));
 */
export function onEventEndThenStartCallback(
  ms,
  callbackByEventEnd,
  optionsCallbackEnd = null,
  callbackByEventStart = null,
  optionsCallbackStart = null 
) {
  let timer;
  let eventStarted = false;

  return function (event) {
    if (callbackByEventStart && !eventStarted) {
      eventStarted = true;
      // console.log("callbackByEventStart");
      callbackByEventStart(optionsCallbackStart);
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(
      function () {
        eventStarted = false;
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> callback')
        callbackByEventEnd(optionsCallbackEnd);
      },
      ms,
      event
    );
  };
}
