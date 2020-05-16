(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

var scrollContainer = document.querySelector('.scrollContainer');
function getMaxAreaContainer(stickyElement) {
    var loopParent = stickyElement.parentNode;
    while (true) {
        if (loopParent.classList.contains('maxAreaContainer')) {
            return loopParent;
        }
        else {
            loopParent = loopParent.parentNode;
        }
    }
}
var cacheToolbarTranslateY = 0;
var cacheHeaderTranslateY = 0;
setInterval(function () {
    var header = document.querySelector('.header');
    var headerMaxAreaContainer = getMaxAreaContainer(header);
    var headerAreaTop = headerMaxAreaContainer.getBoundingClientRect().top;
    console.log('headerAreaTop', Math.round(headerAreaTop));
    console.log('header', Math.round(header.getBoundingClientRect().top));
}, 1500);
return;
scrollContainer.addEventListener('scroll', function () {
    // const toolbar = document.querySelector<HTMLElement>('.toolbar');
    // const toolbarMaxAreaContainer = getMaxAreaContainer(toolbar);
    // const toolbarAreaTop = toolbarMaxAreaContainer.getBoundingClientRect().top;
    // const toolbarAreaBorderTop = toolbarMaxAreaContainer.clientTop;
    // const toolbarStickPoint = toolbarAreaTop + toolbarAreaBorderTop;
    // const originalToolbarStickyTop = toolbar.getBoundingClientRect().top - cacheToolbarTranslateY;
    // if (originalToolbarStickyTop < toolbarStickPoint) {
    //     cacheToolbarTranslateY = Math.abs(originalToolbarStickyTop - toolbarStickPoint);
    //     toolbar.style.transform = `translateY(${cacheToolbarTranslateY}px)`;
    // }
    // else {
    //     toolbar.style.removeProperty('transform');
    // }
    var header = document.querySelector('.header');
    var headerMaxAreaContainer = getMaxAreaContainer(header);
    var headerAreaTop = headerMaxAreaContainer.getBoundingClientRect().top;
    console.log('headerAreaTop', Math.round(headerAreaTop));
    console.log('header', Math.round(header.getBoundingClientRect().top));
    // const headerAreaBorderTop = headerMaxAreaContainer.clientTop;
    // const headerStickPoint = headerAreaTop + headerAreaBorderTop + toolbar.offsetHeight; // + offsetHeight
    // const originalHeaderStickyTop = header.getBoundingClientRect().top - cacheHeaderTranslateY;
    // if (originalHeaderStickyTop < headerStickPoint) {
    //     cacheHeaderTranslateY = Math.abs(originalHeaderStickyTop - headerStickPoint);
    //     header.style.transform = `translateY(${cacheHeaderTranslateY}px)`;
    // }
    // else {
    //     header.style.removeProperty('transform');
    // }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsV0FBVyxDQUFDO0lBQ1IsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELElBQU0sYUFBYSxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFMUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRVQsT0FBTztBQUNQLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDdkMsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSw4RUFBOEU7SUFDOUUsa0VBQWtFO0lBQ2xFLG1FQUFtRTtJQUNuRSxpR0FBaUc7SUFDakcsc0RBQXNEO0lBQ3RELHVGQUF1RjtJQUN2RiwyRUFBMkU7SUFDM0UsSUFBSTtJQUNKLFNBQVM7SUFDVCxpREFBaUQ7SUFDakQsSUFBSTtJQUdKLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWMsU0FBUyxDQUFDLENBQUM7SUFDOUQsSUFBTSxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxJQUFNLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRFLGdFQUFnRTtJQUNoRSx5R0FBeUc7SUFDekcsOEZBQThGO0lBQzlGLG9EQUFvRDtJQUNwRCxvRkFBb0Y7SUFDcEYseUVBQXlFO0lBQ3pFLElBQUk7SUFDSixTQUFTO0lBQ1QsZ0RBQWdEO0lBQ2hELElBQUk7QUFNUixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC41MThkNTczY2U5NWU4ZDZkOTRmNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0TWF4QXJlYUNvbnRhaW5lcihzdGlja3lFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGxvb3BQYXJlbnQgPSBzdGlja3lFbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGlmIChsb29wUGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWF4QXJlYUNvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb29wUGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbG9vcFBhcmVudCA9IGxvb3BQYXJlbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gMDtcclxubGV0IGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IDA7XHJcblxyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmhlYWRlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoaGVhZGVyKTtcclxuICAgIGNvbnN0IGhlYWRlckFyZWFUb3AgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGNvbnNvbGUubG9nKCdoZWFkZXJBcmVhVG9wJywgTWF0aC5yb3VuZChoZWFkZXJBcmVhVG9wKSk7XHJcbiAgICBjb25zb2xlLmxvZygnaGVhZGVyJywgTWF0aC5yb3VuZChoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSk7XHJcblxyXG59LCAxNTAwKTtcclxuXHJcbnJldHVybjtcclxuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnRvb2xiYXInKTtcclxuICAgIC8vIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcih0b29sYmFyKTtcclxuICAgIC8vIGNvbnN0IHRvb2xiYXJBcmVhVG9wID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgLy8gY29uc3QgdG9vbGJhckFyZWFCb3JkZXJUb3AgPSB0b29sYmFyTWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICAvLyBjb25zdCB0b29sYmFyU3RpY2tQb2ludCA9IHRvb2xiYXJBcmVhVG9wICsgdG9vbGJhckFyZWFCb3JkZXJUb3A7XHJcbiAgICAvLyBjb25zdCBvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgPSB0b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVk7XHJcbiAgICAvLyBpZiAob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIDwgdG9vbGJhclN0aWNrUG9pbnQpIHtcclxuICAgIC8vICAgICBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gTWF0aC5hYnMob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIC0gdG9vbGJhclN0aWNrUG9pbnQpO1xyXG4gICAgLy8gICAgIHRvb2xiYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZVRvb2xiYXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICB0b29sYmFyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKGhlYWRlcik7XHJcbiAgICBjb25zdCBoZWFkZXJBcmVhVG9wID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBjb25zb2xlLmxvZygnaGVhZGVyQXJlYVRvcCcsIE1hdGgucm91bmQoaGVhZGVyQXJlYVRvcCkpO1xyXG4gICAgY29uc29sZS5sb2coJ2hlYWRlcicsIE1hdGgucm91bmQoaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkpO1xyXG5cclxuICAgIC8vIGNvbnN0IGhlYWRlckFyZWFCb3JkZXJUb3AgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmNsaWVudFRvcDtcclxuICAgIC8vIGNvbnN0IGhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJBcmVhVG9wICsgaGVhZGVyQXJlYUJvcmRlclRvcCArIHRvb2xiYXIub2Zmc2V0SGVpZ2h0OyAvLyArIG9mZnNldEhlaWdodFxyXG4gICAgLy8gY29uc3Qgb3JpZ2luYWxIZWFkZXJTdGlja3lUb3AgPSBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY2FjaGVIZWFkZXJUcmFuc2xhdGVZO1xyXG4gICAgLy8gaWYgKG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wIDwgaGVhZGVyU3RpY2tQb2ludCkge1xyXG4gICAgLy8gICAgIGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wIC0gaGVhZGVyU3RpY2tQb2ludCk7XHJcbiAgICAvLyAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVIZWFkZXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICBoZWFkZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9