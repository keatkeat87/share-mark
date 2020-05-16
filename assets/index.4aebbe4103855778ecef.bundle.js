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
    var toobarRect = toolbar.getBoundingClientRect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRSxJQUFNLHVCQUF1QixHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdELElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ25ELElBQU0sMkJBQTJCLEdBQUcsdUJBQXVCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUVwRixJQUFJLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUN0RSxJQUFNLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFFdkUsSUFBSSxzQkFBc0IsR0FBRyxpQkFBaUIsRUFBRTtRQUM1QyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMsc0JBQXNCLFFBQUssQ0FBQztLQUN2RTtTQUNJO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDN0M7SUFHRCxpRUFBaUU7SUFDakUsOERBQThEO0lBQzlELDRFQUE0RTtJQUM1RSwrQ0FBK0M7SUFDL0MsZ0VBQWdFO0lBQ2hFLHlHQUF5RztJQUN6Ryw4RkFBOEY7SUFDOUYsb0RBQW9EO0lBQ3BELG9GQUFvRjtJQUNwRix5RUFBeUU7SUFDekUsSUFBSTtJQUNKLFNBQVM7SUFDVCxnREFBZ0Q7SUFDaEQsSUFBSTtBQU1SLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LjRhZWJiZTQxMDM4NTU3NzhlY2VmLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gMDtcclxuXHJcbnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy50b29sYmFyJyk7XHJcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIodG9vbGJhcik7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHNjcm9sbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRvb2JhclJlY3QgPSB0b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgdG9vbGJhck1heEFyZWFDb250YWluZXJSZWN0ID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgbGV0IHRvb2xiYXJTdGlja1BvaW50ID0gY29udGFpbmVyUmVjdC50b3AgKyBzY3JvbGxDb250YWluZXIuY2xpZW50VG9wO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUb29sYmFyUmVjdFRvcCA9IHRvb2JhclJlY3QudG9wIC0gY2FjaGVUb29sYmFyVHJhbnNsYXRlWTtcclxuXHJcbiAgICBpZiAob3JpZ2luYWxUb29sYmFyUmVjdFRvcCA8IHRvb2xiYXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclJlY3RUb3AgLSB0b29sYmFyU3RpY2tQb2ludCk7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlVG9vbGJhclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmhlYWRlcicpO1xyXG4gICAgLy8gY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoaGVhZGVyKTtcclxuICAgIC8vIGNvbnN0IGhlYWRlckFyZWFUb3AgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdoZWFkZXJBcmVhVG9wJywgaGVhZGVyQXJlYVRvcCk7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJBcmVhQm9yZGVyVG9wID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJTdGlja1BvaW50ID0gaGVhZGVyQXJlYVRvcCArIGhlYWRlckFyZWFCb3JkZXJUb3AgKyB0b29sYmFyLm9mZnNldEhlaWdodDsgLy8gKyBvZmZzZXRIZWlnaHRcclxuICAgIC8vIGNvbnN0IG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlSGVhZGVyVHJhbnNsYXRlWTtcclxuICAgIC8vIGlmIChvcmlnaW5hbEhlYWRlclN0aWNreVRvcCA8IGhlYWRlclN0aWNrUG9pbnQpIHtcclxuICAgIC8vICAgICBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbEhlYWRlclN0aWNreVRvcCAtIGhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgLy8gICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlSGVhZGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==