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
var cacheFooterTranslateY = 0;
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
    var footer = document.querySelector('.footer');
    var footerScrollContainer = document.querySelector('.scrollContainer');
    var footerMaxAreaContainer = getMaxAreaContainer(footer);
    var footerScrollContainerRect = footerScrollContainer.getBoundingClientRect();
    var footerRect = footer.getBoundingClientRect();
    var footerMaxAreaContainerRect = footerMaxAreaContainer.getBoundingClientRect();
    var footerScrollContainerBorderBottom = parseFloat(window.getComputedStyle(footerScrollContainer).borderBottomWidth);
    var footerStickPoint = footerScrollContainerRect.bottom + footerScrollContainerBorderBottom;
    var originalFooterRectBottom = footerRect.bottom + Math.abs(cacheFooterTranslateY);
    if (originalFooterRectBottom >= footerStickPoint) {
        cacheFooterTranslateY = -Math.abs(originalFooterRectBottom - footerStickPoint);
        footer.style.transform = "translateY(" + cacheFooterTranslateY + "px)";
    }
    else {
        footer.style.removeProperty('transform');
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFFckYsSUFBSSx3QkFBd0IsSUFBSSxnQkFBZ0IsRUFBRTtRQUM5QyxxQkFBcUIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxnQkFBYyxxQkFBcUIsUUFBSyxDQUFDO0tBQ3JFO1NBQ0k7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM1QztBQUtMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LjM1MTZkYzBkMGZhNjMyNDczNGYyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gMDtcclxubGV0IGNhY2hlRm9vdGVyVHJhbnNsYXRlWSA9IDA7XHJcblxyXG5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnRvb2xiYXInKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaGVhZGVyJyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmZvb3RlcicpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdG9vbGJhclNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuICAgIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcih0b29sYmFyKTtcclxuXHJcbiAgICBjb25zdCB0b29sYmFyU2Nyb2xsQ29udGFpbmVyUmVjdCA9IHRvb2xiYXJTY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0b29iYXJSZWN0ID0gdG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyUmVjdCA9IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGxldCB0b29sYmFyU3RpY2tQb2ludCA9IHRvb2xiYXJTY3JvbGxDb250YWluZXJSZWN0LnRvcCArIHRvb2xiYXJTY3JvbGxDb250YWluZXIuY2xpZW50VG9wO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUb29sYmFyUmVjdFRvcCA9IHRvb2JhclJlY3QudG9wIC0gY2FjaGVUb29sYmFyVHJhbnNsYXRlWTtcclxuXHJcbiAgICBpZiAob3JpZ2luYWxUb29sYmFyUmVjdFRvcCA8IHRvb2xiYXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclJlY3RUb3AgLSB0b29sYmFyU3RpY2tQb2ludCk7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlVG9vbGJhclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyU2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJTY3JvbGxDb250YWluZXJSZWN0ID0gaGVhZGVyU2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaGVhZGVyUmVjdCA9IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXJSZWN0ID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblxyXG4gICAgbGV0IGhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJTY3JvbGxDb250YWluZXJSZWN0LnRvcCArIGhlYWRlclNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBoZWFkZXJTdGlja1BvaW50ICs9IHRvb2xiYXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXJCb3JkZXJCb3R0b20gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGhlYWRlck1heEFyZWFDb250YWluZXIpLmJvcmRlckJvdHRvbVdpZHRoKTtcclxuICAgIGNvbnN0IG1heEhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyUmVjdC5ib3R0b20gLSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyQm9yZGVyQm90dG9tIC0gaGVhZGVyLm9mZnNldEhlaWdodDsgLy8gdG9kbyBtYWdnaW5cclxuXHJcbiAgICBoZWFkZXJTdGlja1BvaW50ID0gTWF0aC5taW4oaGVhZGVyU3RpY2tQb2ludCwgbWF4SGVhZGVyU3RpY2tQb2ludCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbEhlYWRlclJlY3RUb3AgPSBoZWFkZXJSZWN0LnRvcCAtIGNhY2hlSGVhZGVyVHJhbnNsYXRlWTtcclxuXHJcbiAgICBpZiAob3JpZ2luYWxIZWFkZXJSZWN0VG9wIDwgaGVhZGVyU3RpY2tQb2ludCkge1xyXG4gICAgICAgIGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsSGVhZGVyUmVjdFRvcCAtIGhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlSGVhZGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmZvb3RlcicpO1xyXG4gICAgY29uc3QgZm9vdGVyU2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgZm9vdGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoZm9vdGVyKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJTY3JvbGxDb250YWluZXJSZWN0ID0gZm9vdGVyU2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgZm9vdGVyUmVjdCA9IGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGZvb3Rlck1heEFyZWFDb250YWluZXJSZWN0ID0gZm9vdGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJTY3JvbGxDb250YWluZXJCb3JkZXJCb3R0b20gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZvb3RlclNjcm9sbENvbnRhaW5lcikuYm9yZGVyQm90dG9tV2lkdGgpO1xyXG5cclxuICAgIGxldCBmb290ZXJTdGlja1BvaW50ID0gZm9vdGVyU2Nyb2xsQ29udGFpbmVyUmVjdC5ib3R0b20gKyBmb290ZXJTY3JvbGxDb250YWluZXJCb3JkZXJCb3R0b207XHJcbiAgICBjb25zdCBvcmlnaW5hbEZvb3RlclJlY3RCb3R0b20gPSBmb290ZXJSZWN0LmJvdHRvbSArIE1hdGguYWJzKGNhY2hlRm9vdGVyVHJhbnNsYXRlWSk7XHJcblxyXG4gICAgaWYgKG9yaWdpbmFsRm9vdGVyUmVjdEJvdHRvbSA+PSBmb290ZXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVGb290ZXJUcmFuc2xhdGVZID0gLU1hdGguYWJzKG9yaWdpbmFsRm9vdGVyUmVjdEJvdHRvbSAtIGZvb3RlclN0aWNrUG9pbnQpO1xyXG4gICAgICAgIGZvb3Rlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlRm9vdGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9vdGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9