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
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var toolbarScrollContainer = document.querySelector('.scrollContainer');
    var toolbarMaxAreaContainer = getMaxAreaContainer(toolbar);
    var toolbarScrollContainerRect = toolbarScrollContainer.getBoundingClientRect();
    var toobarRect = toolbar.getBoundingClientRect();
    var toolbarMaxAreaContainerRect = toolbarMaxAreaContainer.getBoundingClientRect();
    var toolbarStickPoint = toolbarScrollContainerRect.top + toolbarScrollContainer.clientTop;
    var originalToolbarRectTop = toobarRect.top - cacheToolbarTranslateY;
    if (originalToolbarRectTop < toolbarStickPoint) {
        cacheToolbarTranslateY = Math.abs(originalToolbarRectTop - toolbarStickPoint);
        toolbar.style.transform = "translateY(" + cacheToolbarTranslateY + "px)";
    }
    else {
        toolbar.style.removeProperty('transform');
    }
    var headerScrollContainer = document.querySelector('.scrollContainer');
    var headerMaxAreaContainer = getMaxAreaContainer(header);
    var headerScrollContainerRect = headerScrollContainer.getBoundingClientRect();
    var headerRect = header.getBoundingClientRect();
    var headerMaxAreaContainerRect = headerMaxAreaContainer.getBoundingClientRect();
    var headerStickPoint = headerScrollContainerRect.top + headerScrollContainer.clientTop;
    headerStickPoint += toolbar.offsetHeight;
    var headerMaxAreaContainerBorderBottom = parseFloat(window.getComputedStyle(headerMaxAreaContainer).borderBottomWidth);
    var maxHeaderStickPoint = headerMaxAreaContainerRect.bottom - headerMaxAreaContainerBorderBottom - header.offsetHeight; // todo maggin
    headerStickPoint = Math.min(headerStickPoint, maxHeaderStickPoint);
    var originalHeaderRectTop = headerRect.top - cacheHeaderTranslateY;
    if (originalHeaderRectTop < headerStickPoint) {
        cacheHeaderTranslateY = Math.abs(originalHeaderRectTop - headerStickPoint);
        header.style.transform = "translateY(" + cacheHeaderTranslateY + "px)";
    }
    else {
        header.style.removeProperty('transform');
    }
    // const footer = document.querySelector<HTMLElement>('.footer');
    // const footerScrollContainer = document.querySelector('.scrollContainer');
    // const footerMaxAreaContainer = getMaxAreaContainer(footer);
    // const footerScrollContainerRect = footerScrollContainer.getBoundingClientRect();
    // const footerRect = footer.getBoundingClientRect();
    // const footerMaxAreaContainerRect = footerMaxAreaContainer.getBoundingClientRect();
    // let footerStickPoint = footerScrollContainerRect.top + footerScrollContainer.clientTop;
    // footerStickPoint += toolbar.offsetHeight;
    // const originalFooterRectTop = footerRect.top - cacheFooterTranslateY;
    // if (originalFooterRectTop < footerStickPoint) {
    //     cacheFooterTranslateY = Math.abs(originalFooterRectTop - footerStickPoint);
    //     footer.style.transform = `translateY(${cacheFooterTranslateY}px)`;
    // }
    // else {
    //     footer.style.removeProperty('transform');
    // }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRXhJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNuRSxJQUFNLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUM7SUFFckUsSUFBSSxxQkFBcUIsR0FBRyxnQkFBZ0IsRUFBRTtRQUMxQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFDM0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMscUJBQXFCLFFBQUssQ0FBQztLQUNyRTtTQUNJO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDNUM7SUFNRCxpRUFBaUU7SUFDakUsNEVBQTRFO0lBQzVFLDhEQUE4RDtJQUU5RCxtRkFBbUY7SUFDbkYscURBQXFEO0lBQ3JELHFGQUFxRjtJQUVyRiwwRkFBMEY7SUFDMUYsNENBQTRDO0lBQzVDLHdFQUF3RTtJQUV4RSxrREFBa0Q7SUFDbEQsa0ZBQWtGO0lBQ2xGLHlFQUF5RTtJQUN6RSxJQUFJO0lBQ0osU0FBUztJQUNULGdEQUFnRDtJQUNoRCxJQUFJO0FBTVIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguYjhhZWM2NGQyMjM5MDM1MWY5YTguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE1heEFyZWFDb250YWluZXIoc3RpY2t5RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBsb29wUGFyZW50ID0gc3RpY2t5RWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAobG9vcFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21heEFyZWFDb250YWluZXInKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9vcFBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxvb3BQYXJlbnQgPSBsb29wUGFyZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IDA7XHJcbmxldCBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSAwO1xyXG5cclxuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy50b29sYmFyJyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmhlYWRlcicpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5mb290ZXInKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHRvb2xiYXJTY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIodG9vbGJhcik7XHJcblxyXG4gICAgY29uc3QgdG9vbGJhclNjcm9sbENvbnRhaW5lclJlY3QgPSB0b29sYmFyU2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgdG9vYmFyUmVjdCA9IHRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0b29sYmFyTWF4QXJlYUNvbnRhaW5lclJlY3QgPSB0b29sYmFyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBsZXQgdG9vbGJhclN0aWNrUG9pbnQgPSB0b29sYmFyU2Nyb2xsQ29udGFpbmVyUmVjdC50b3AgKyB0b29sYmFyU2Nyb2xsQ29udGFpbmVyLmNsaWVudFRvcDtcclxuICAgIGNvbnN0IG9yaWdpbmFsVG9vbGJhclJlY3RUb3AgPSB0b29iYXJSZWN0LnRvcCAtIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVk7XHJcblxyXG4gICAgaWYgKG9yaWdpbmFsVG9vbGJhclJlY3RUb3AgPCB0b29sYmFyU3RpY2tQb2ludCkge1xyXG4gICAgICAgIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbFRvb2xiYXJSZWN0VG9wIC0gdG9vbGJhclN0aWNrUG9pbnQpO1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZVRvb2xiYXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyU2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJTY3JvbGxDb250YWluZXJSZWN0ID0gaGVhZGVyU2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaGVhZGVyUmVjdCA9IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXJSZWN0ID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblxyXG4gICAgbGV0IGhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJTY3JvbGxDb250YWluZXJSZWN0LnRvcCArIGhlYWRlclNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBoZWFkZXJTdGlja1BvaW50ICs9IHRvb2xiYXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXJCb3JkZXJCb3R0b20gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGhlYWRlck1heEFyZWFDb250YWluZXIpLmJvcmRlckJvdHRvbVdpZHRoKTtcclxuICAgIGNvbnN0IG1heEhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyUmVjdC5ib3R0b20gLSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyQm9yZGVyQm90dG9tIC0gaGVhZGVyLm9mZnNldEhlaWdodDsgLy8gdG9kbyBtYWdnaW5cclxuXHJcbiAgICBoZWFkZXJTdGlja1BvaW50ID0gTWF0aC5taW4oaGVhZGVyU3RpY2tQb2ludCwgbWF4SGVhZGVyU3RpY2tQb2ludCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbEhlYWRlclJlY3RUb3AgPSBoZWFkZXJSZWN0LnRvcCAtIGNhY2hlSGVhZGVyVHJhbnNsYXRlWTtcclxuXHJcbiAgICBpZiAob3JpZ2luYWxIZWFkZXJSZWN0VG9wIDwgaGVhZGVyU3RpY2tQb2ludCkge1xyXG4gICAgICAgIGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsSGVhZGVyUmVjdFRvcCAtIGhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlSGVhZGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5mb290ZXInKTtcclxuICAgIC8vIGNvbnN0IGZvb3RlclNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuICAgIC8vIGNvbnN0IGZvb3Rlck1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKGZvb3Rlcik7XHJcblxyXG4gICAgLy8gY29uc3QgZm9vdGVyU2Nyb2xsQ29udGFpbmVyUmVjdCA9IGZvb3RlclNjcm9sbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIC8vIGNvbnN0IGZvb3RlclJlY3QgPSBmb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAvLyBjb25zdCBmb290ZXJNYXhBcmVhQ29udGFpbmVyUmVjdCA9IGZvb3Rlck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgLy8gbGV0IGZvb3RlclN0aWNrUG9pbnQgPSBmb290ZXJTY3JvbGxDb250YWluZXJSZWN0LnRvcCArIGZvb3RlclNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICAvLyBmb290ZXJTdGlja1BvaW50ICs9IHRvb2xiYXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgLy8gY29uc3Qgb3JpZ2luYWxGb290ZXJSZWN0VG9wID0gZm9vdGVyUmVjdC50b3AgLSBjYWNoZUZvb3RlclRyYW5zbGF0ZVk7XHJcblxyXG4gICAgLy8gaWYgKG9yaWdpbmFsRm9vdGVyUmVjdFRvcCA8IGZvb3RlclN0aWNrUG9pbnQpIHtcclxuICAgIC8vICAgICBjYWNoZUZvb3RlclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbEZvb3RlclJlY3RUb3AgLSBmb290ZXJTdGlja1BvaW50KTtcclxuICAgIC8vICAgICBmb290ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZUZvb3RlclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2Uge1xyXG4gICAgLy8gICAgIGZvb3Rlci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=