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
    var header = document.querySelector('.header');
    var headerMaxAreaContainer = getMaxAreaContainer(header);
    var headerAreaTop = headerMaxAreaContainer.getBoundingClientRect().top;
    console.log('headerAreaTop', headerAreaTop);
    var headerAreaBorderTop = headerMaxAreaContainer.clientTop;
    var headerStickPoint = headerAreaTop + headerAreaBorderTop + toolbar.offsetHeight; // + offsetHeight
    var originalHeaderStickyTop = header.getBoundingClientRect().top - cacheHeaderTranslateY;
    if (originalHeaderStickyTop < headerStickPoint) {
        cacheHeaderTranslateY = Math.abs(originalHeaderStickyTop - headerStickPoint);
        header.style.transform = "translateY(" + cacheHeaderTranslateY + "px)";
    }
    else {
        header.style.removeProperty('transform');
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSI6ImluZGV4LmJjNmNmYTMzYTMxY2VjZDZlNGMzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gMDtcclxuXHJcbnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy50b29sYmFyJyk7XHJcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIodG9vbGJhcik7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHNjcm9sbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRvb2JhclJlY3QgPSBzY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lclJlY3QgPSB0b29sYmFyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBsZXQgdG9vbGJhclN0aWNrUG9pbnQgPSBjb250YWluZXJSZWN0LnRvcCArIHNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luYWxUb29sYmFyUmVjdFRvcCA9IHRvb2JhclJlY3QudG9wIC0gY2FjaGVUb29sYmFyVHJhbnNsYXRlWTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBpZiAob3JpZ2luYWxUb29sYmFyUmVjdFRvcCA8IHRvb2xiYXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclJlY3RUb3AgLSB0b29sYmFyU3RpY2tQb2ludCk7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlVG9vbGJhclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmhlYWRlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoaGVhZGVyKTtcclxuICAgIGNvbnN0IGhlYWRlckFyZWFUb3AgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGNvbnNvbGUubG9nKCdoZWFkZXJBcmVhVG9wJywgaGVhZGVyQXJlYVRvcCk7XHJcbiAgICBjb25zdCBoZWFkZXJBcmVhQm9yZGVyVG9wID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBjb25zdCBoZWFkZXJTdGlja1BvaW50ID0gaGVhZGVyQXJlYVRvcCArIGhlYWRlckFyZWFCb3JkZXJUb3AgKyB0b29sYmFyLm9mZnNldEhlaWdodDsgLy8gKyBvZmZzZXRIZWlnaHRcclxuICAgIGNvbnN0IG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlSGVhZGVyVHJhbnNsYXRlWTtcclxuICAgIGlmIChvcmlnaW5hbEhlYWRlclN0aWNreVRvcCA8IGhlYWRlclN0aWNrUG9pbnQpIHtcclxuICAgICAgICBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbEhlYWRlclN0aWNreVRvcCAtIGhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlSGVhZGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==