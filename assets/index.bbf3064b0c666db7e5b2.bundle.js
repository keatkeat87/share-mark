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
scrollContainer.addEventListener('scroll', function () {
    var toolbar = document.querySelector('.toolbar');
    var scrollContainer = document.querySelector('.scrollContainer');
    var toolbarMaxAreaContainer = getMaxAreaContainer(toolbar);
    var containerRect = scrollContainer.getBoundingClientRect();
    var toobarRect = scrollContainer.getBoundingClientRect();
    var toolbarMaxAreaContainerRect = toolbarMaxAreaContainer.getBoundingClientRect();
    var toolbarStickPoint = containerRect.top + scrollContainer.clientTop;
    var originalToolbarRectTop = toobarRect.top - cacheToolbarTranslateY;
    if (originalToolbarRectTop < toolbarStickPoint) {
        cacheToolbarTranslateY = Math.abs(originalToolbarRectTop - toolbarStickPoint);
        toolbar.style.transform = "translateY(" + cacheToolbarTranslateY + "px)";
    }
    else {
        toolbar.style.removeProperty('transform');
    }
    // const header = document.querySelector<HTMLElement>('.header');
    // const headerMaxAreaContainer = getMaxAreaContainer(header);
    // const headerAreaTop = headerMaxAreaContainer.getBoundingClientRect().top;
    // console.log('headerAreaTop', headerAreaTop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRSxJQUFNLHVCQUF1QixHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdELElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlELElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzNELElBQU0sMkJBQTJCLEdBQUcsdUJBQXVCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUVwRixJQUFJLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUN0RSxJQUFNLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFFdkUsSUFBSSxzQkFBc0IsR0FBRyxpQkFBaUIsRUFBRTtRQUM1QyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMsc0JBQXNCLFFBQUssQ0FBQztLQUN2RTtTQUNJO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDN0M7SUFHRCxpRUFBaUU7SUFDakUsOERBQThEO0lBQzlELDRFQUE0RTtJQUM1RSwrQ0FBK0M7SUFDL0MsZ0VBQWdFO0lBQ2hFLHlHQUF5RztJQUN6Ryw4RkFBOEY7SUFDOUYsb0RBQW9EO0lBQ3BELG9GQUFvRjtJQUNwRix5RUFBeUU7SUFDekUsSUFBSTtJQUNKLFNBQVM7SUFDVCxnREFBZ0Q7SUFDaEQsSUFBSTtBQU1SLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmJiZjMwNjRiMGM2NjZkYjdlNWIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gMDtcclxuXHJcbnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy50b29sYmFyJyk7XHJcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIodG9vbGJhcik7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHNjcm9sbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRvb2JhclJlY3QgPSBzY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lclJlY3QgPSB0b29sYmFyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBsZXQgdG9vbGJhclN0aWNrUG9pbnQgPSBjb250YWluZXJSZWN0LnRvcCArIHNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBjb25zdCBvcmlnaW5hbFRvb2xiYXJSZWN0VG9wID0gdG9vYmFyUmVjdC50b3AgLSBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZO1xyXG5cclxuICAgIGlmIChvcmlnaW5hbFRvb2xiYXJSZWN0VG9wIDwgdG9vbGJhclN0aWNrUG9pbnQpIHtcclxuICAgICAgICBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gTWF0aC5hYnMob3JpZ2luYWxUb29sYmFyUmVjdFRvcCAtIHRvb2xiYXJTdGlja1BvaW50KTtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVUb29sYmFyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaGVhZGVyJyk7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcihoZWFkZXIpO1xyXG4gICAgLy8gY29uc3QgaGVhZGVyQXJlYVRvcCA9IGhlYWRlck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2hlYWRlckFyZWFUb3AnLCBoZWFkZXJBcmVhVG9wKTtcclxuICAgIC8vIGNvbnN0IGhlYWRlckFyZWFCb3JkZXJUb3AgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmNsaWVudFRvcDtcclxuICAgIC8vIGNvbnN0IGhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJBcmVhVG9wICsgaGVhZGVyQXJlYUJvcmRlclRvcCArIHRvb2xiYXIub2Zmc2V0SGVpZ2h0OyAvLyArIG9mZnNldEhlaWdodFxyXG4gICAgLy8gY29uc3Qgb3JpZ2luYWxIZWFkZXJTdGlja3lUb3AgPSBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY2FjaGVIZWFkZXJUcmFuc2xhdGVZO1xyXG4gICAgLy8gaWYgKG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wIDwgaGVhZGVyU3RpY2tQb2ludCkge1xyXG4gICAgLy8gICAgIGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wIC0gaGVhZGVyU3RpY2tQb2ludCk7XHJcbiAgICAvLyAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVIZWFkZXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICBoZWFkZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9