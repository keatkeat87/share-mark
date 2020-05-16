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
    return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsV0FBVyxDQUFDO0lBQ1IsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELElBQU0sYUFBYSxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFMUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRVQsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxPQUFPO0lBQ1AsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSw4RUFBOEU7SUFDOUUsa0VBQWtFO0lBQ2xFLG1FQUFtRTtJQUNuRSxpR0FBaUc7SUFDakcsc0RBQXNEO0lBQ3RELHVGQUF1RjtJQUN2RiwyRUFBMkU7SUFDM0UsSUFBSTtJQUNKLFNBQVM7SUFDVCxpREFBaUQ7SUFDakQsSUFBSTtJQUdKLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWMsU0FBUyxDQUFDLENBQUM7SUFDOUQsSUFBTSxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxJQUFNLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRFLGdFQUFnRTtJQUNoRSx5R0FBeUc7SUFDekcsOEZBQThGO0lBQzlGLG9EQUFvRDtJQUNwRCxvRkFBb0Y7SUFDcEYseUVBQXlFO0lBQ3pFLElBQUk7SUFDSixTQUFTO0lBQ1QsZ0RBQWdEO0lBQ2hELElBQUk7QUFNUixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5mYjBkNzBkYTM5YTViZjI0MDRjOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0TWF4QXJlYUNvbnRhaW5lcihzdGlja3lFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGxvb3BQYXJlbnQgPSBzdGlja3lFbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGlmIChsb29wUGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWF4QXJlYUNvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb29wUGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbG9vcFBhcmVudCA9IGxvb3BQYXJlbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gMDtcclxubGV0IGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IDA7XHJcblxyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmhlYWRlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoaGVhZGVyKTtcclxuICAgIGNvbnN0IGhlYWRlckFyZWFUb3AgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGNvbnNvbGUubG9nKCdoZWFkZXJBcmVhVG9wJywgTWF0aC5yb3VuZChoZWFkZXJBcmVhVG9wKSk7XHJcbiAgICBjb25zb2xlLmxvZygnaGVhZGVyJywgTWF0aC5yb3VuZChoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSk7XHJcblxyXG59LCAxNTAwKTtcclxuXHJcbnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICByZXR1cm47XHJcbiAgICAvLyBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy50b29sYmFyJyk7XHJcbiAgICAvLyBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIodG9vbGJhcik7XHJcbiAgICAvLyBjb25zdCB0b29sYmFyQXJlYVRvcCA9IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIC8vIGNvbnN0IHRvb2xiYXJBcmVhQm9yZGVyVG9wID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuY2xpZW50VG9wO1xyXG4gICAgLy8gY29uc3QgdG9vbGJhclN0aWNrUG9pbnQgPSB0b29sYmFyQXJlYVRvcCArIHRvb2xiYXJBcmVhQm9yZGVyVG9wO1xyXG4gICAgLy8gY29uc3Qgb3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wID0gdG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZO1xyXG4gICAgLy8gaWYgKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCA8IHRvb2xiYXJTdGlja1BvaW50KSB7XHJcbiAgICAvLyAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCAtIHRvb2xiYXJTdGlja1BvaW50KTtcclxuICAgIC8vICAgICB0b29sYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVUb29sYmFyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgICAgdG9vbGJhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcihoZWFkZXIpO1xyXG4gICAgY29uc3QgaGVhZGVyQXJlYVRvcCA9IGhlYWRlck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgY29uc29sZS5sb2coJ2hlYWRlckFyZWFUb3AnLCBNYXRoLnJvdW5kKGhlYWRlckFyZWFUb3ApKTtcclxuICAgIGNvbnNvbGUubG9nKCdoZWFkZXInLCBNYXRoLnJvdW5kKGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApKTtcclxuXHJcbiAgICAvLyBjb25zdCBoZWFkZXJBcmVhQm9yZGVyVG9wID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJTdGlja1BvaW50ID0gaGVhZGVyQXJlYVRvcCArIGhlYWRlckFyZWFCb3JkZXJUb3AgKyB0b29sYmFyLm9mZnNldEhlaWdodDsgLy8gKyBvZmZzZXRIZWlnaHRcclxuICAgIC8vIGNvbnN0IG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlSGVhZGVyVHJhbnNsYXRlWTtcclxuICAgIC8vIGlmIChvcmlnaW5hbEhlYWRlclN0aWNreVRvcCA8IGhlYWRlclN0aWNrUG9pbnQpIHtcclxuICAgIC8vICAgICBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbEhlYWRlclN0aWNreVRvcCAtIGhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgLy8gICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlSGVhZGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==