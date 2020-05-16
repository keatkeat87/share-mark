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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsV0FBVyxDQUFDO0lBQ1IsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELElBQU0sYUFBYSxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFMUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRVQsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLDhFQUE4RTtJQUM5RSxrRUFBa0U7SUFDbEUsbUVBQW1FO0lBQ25FLGlHQUFpRztJQUNqRyxzREFBc0Q7SUFDdEQsdUZBQXVGO0lBQ3ZGLDJFQUEyRTtJQUMzRSxJQUFJO0lBQ0osU0FBUztJQUNULGlEQUFpRDtJQUNqRCxJQUFJO0lBR0osSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELElBQU0sYUFBYSxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdEUsZ0VBQWdFO0lBQ2hFLHlHQUF5RztJQUN6Ryw4RkFBOEY7SUFDOUYsb0RBQW9EO0lBQ3BELG9GQUFvRjtJQUNwRix5RUFBeUU7SUFDekUsSUFBSTtJQUNKLFNBQVM7SUFDVCxnREFBZ0Q7SUFDaEQsSUFBSTtBQU1SLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmU0NDViMDUyMjEzNDUyZjhlN2M1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gMDtcclxuXHJcbnNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcihoZWFkZXIpO1xyXG4gICAgY29uc3QgaGVhZGVyQXJlYVRvcCA9IGhlYWRlck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgY29uc29sZS5sb2coJ2hlYWRlckFyZWFUb3AnLCBNYXRoLnJvdW5kKGhlYWRlckFyZWFUb3ApKTtcclxuICAgIGNvbnNvbGUubG9nKCdoZWFkZXInLCBNYXRoLnJvdW5kKGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApKTtcclxuXHJcbn0sIDE1MDApO1xyXG5cclxuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnRvb2xiYXInKTtcclxuICAgIC8vIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcih0b29sYmFyKTtcclxuICAgIC8vIGNvbnN0IHRvb2xiYXJBcmVhVG9wID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgLy8gY29uc3QgdG9vbGJhckFyZWFCb3JkZXJUb3AgPSB0b29sYmFyTWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICAvLyBjb25zdCB0b29sYmFyU3RpY2tQb2ludCA9IHRvb2xiYXJBcmVhVG9wICsgdG9vbGJhckFyZWFCb3JkZXJUb3A7XHJcbiAgICAvLyBjb25zdCBvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgPSB0b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVk7XHJcbiAgICAvLyBpZiAob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIDwgdG9vbGJhclN0aWNrUG9pbnQpIHtcclxuICAgIC8vICAgICBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gTWF0aC5hYnMob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIC0gdG9vbGJhclN0aWNrUG9pbnQpO1xyXG4gICAgLy8gICAgIHRvb2xiYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZVRvb2xiYXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICB0b29sYmFyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKGhlYWRlcik7XHJcbiAgICBjb25zdCBoZWFkZXJBcmVhVG9wID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBjb25zb2xlLmxvZygnaGVhZGVyQXJlYVRvcCcsIE1hdGgucm91bmQoaGVhZGVyQXJlYVRvcCkpO1xyXG4gICAgY29uc29sZS5sb2coJ2hlYWRlcicsIE1hdGgucm91bmQoaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkpO1xyXG5cclxuICAgIC8vIGNvbnN0IGhlYWRlckFyZWFCb3JkZXJUb3AgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmNsaWVudFRvcDtcclxuICAgIC8vIGNvbnN0IGhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJBcmVhVG9wICsgaGVhZGVyQXJlYUJvcmRlclRvcCArIHRvb2xiYXIub2Zmc2V0SGVpZ2h0OyAvLyArIG9mZnNldEhlaWdodFxyXG4gICAgLy8gY29uc3Qgb3JpZ2luYWxIZWFkZXJTdGlja3lUb3AgPSBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY2FjaGVIZWFkZXJUcmFuc2xhdGVZO1xyXG4gICAgLy8gaWYgKG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wIDwgaGVhZGVyU3RpY2tQb2ludCkge1xyXG4gICAgLy8gICAgIGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wIC0gaGVhZGVyU3RpY2tQb2ludCk7XHJcbiAgICAvLyAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVIZWFkZXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICBoZWFkZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9