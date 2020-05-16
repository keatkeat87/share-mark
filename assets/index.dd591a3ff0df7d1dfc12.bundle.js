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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLDhFQUE4RTtJQUM5RSxrRUFBa0U7SUFDbEUsbUVBQW1FO0lBQ25FLGlHQUFpRztJQUNqRyxzREFBc0Q7SUFDdEQsdUZBQXVGO0lBQ3ZGLDJFQUEyRTtJQUMzRSxJQUFJO0lBQ0osU0FBUztJQUNULGlEQUFpRDtJQUNqRCxJQUFJO0lBR0osSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELElBQU0sYUFBYSxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdEUsZ0VBQWdFO0lBQ2hFLHlHQUF5RztJQUN6Ryw4RkFBOEY7SUFDOUYsb0RBQW9EO0lBQ3BELG9GQUFvRjtJQUNwRix5RUFBeUU7SUFDekUsSUFBSTtJQUNKLFNBQVM7SUFDVCxnREFBZ0Q7SUFDaEQsSUFBSTtBQU1SLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmRkNTkxYTNmZjBkZjdkMWRmYzEyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gMDtcclxuXHJcbnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy50b29sYmFyJyk7XHJcbiAgICAvLyBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIodG9vbGJhcik7XHJcbiAgICAvLyBjb25zdCB0b29sYmFyQXJlYVRvcCA9IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIC8vIGNvbnN0IHRvb2xiYXJBcmVhQm9yZGVyVG9wID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuY2xpZW50VG9wO1xyXG4gICAgLy8gY29uc3QgdG9vbGJhclN0aWNrUG9pbnQgPSB0b29sYmFyQXJlYVRvcCArIHRvb2xiYXJBcmVhQm9yZGVyVG9wO1xyXG4gICAgLy8gY29uc3Qgb3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wID0gdG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZO1xyXG4gICAgLy8gaWYgKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCA8IHRvb2xiYXJTdGlja1BvaW50KSB7XHJcbiAgICAvLyAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCAtIHRvb2xiYXJTdGlja1BvaW50KTtcclxuICAgIC8vICAgICB0b29sYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVUb29sYmFyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgICAgdG9vbGJhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcihoZWFkZXIpO1xyXG4gICAgY29uc3QgaGVhZGVyQXJlYVRvcCA9IGhlYWRlck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgY29uc29sZS5sb2coJ2hlYWRlckFyZWFUb3AnLCBNYXRoLnJvdW5kKGhlYWRlckFyZWFUb3ApKTtcclxuICAgIGNvbnNvbGUubG9nKCdoZWFkZXInLCBNYXRoLnJvdW5kKGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApKTtcclxuXHJcbiAgICAvLyBjb25zdCBoZWFkZXJBcmVhQm9yZGVyVG9wID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJTdGlja1BvaW50ID0gaGVhZGVyQXJlYVRvcCArIGhlYWRlckFyZWFCb3JkZXJUb3AgKyB0b29sYmFyLm9mZnNldEhlaWdodDsgLy8gKyBvZmZzZXRIZWlnaHRcclxuICAgIC8vIGNvbnN0IG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlSGVhZGVyVHJhbnNsYXRlWTtcclxuICAgIC8vIGlmIChvcmlnaW5hbEhlYWRlclN0aWNreVRvcCA8IGhlYWRlclN0aWNrUG9pbnQpIHtcclxuICAgIC8vICAgICBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbEhlYWRlclN0aWNreVRvcCAtIGhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgLy8gICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlSGVhZGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==