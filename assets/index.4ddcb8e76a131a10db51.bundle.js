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
        cacheToolbarTranslateY = 0;
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
    maxHeaderStickPoint -= footer.offsetHeight;
    headerStickPoint = Math.min(headerStickPoint, maxHeaderStickPoint);
    var originalHeaderRectTop = headerRect.top - cacheHeaderTranslateY;
    if (originalHeaderRectTop < headerStickPoint) {
        cacheHeaderTranslateY = Math.abs(originalHeaderRectTop - headerStickPoint);
        header.style.transform = "translateY(" + cacheHeaderTranslateY + "px)";
    }
    else {
        cacheHeaderTranslateY = 0;
        header.style.removeProperty('transform');
    }
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
        cacheFooterTranslateY = 0;
        footer.style.removeProperty('transform');
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0IsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUVyRixJQUFJLHdCQUF3QixJQUFJLGdCQUFnQixFQUFFO1FBQzlDLHFCQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFjLHFCQUFxQixRQUFLLENBQUM7S0FDckU7U0FDSTtRQUNELHFCQUFxQixHQUFHLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM1QztBQUVMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LjRkZGNiOGU3NmExMzFhMTBkYjUxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gMDtcclxubGV0IGNhY2hlRm9vdGVyVHJhbnNsYXRlWSA9IDA7XHJcblxyXG5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnRvb2xiYXInKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaGVhZGVyJyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmZvb3RlcicpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdG9vbGJhclNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuICAgIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcih0b29sYmFyKTtcclxuXHJcbiAgICBjb25zdCB0b29sYmFyU2Nyb2xsQ29udGFpbmVyUmVjdCA9IHRvb2xiYXJTY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0b29iYXJSZWN0ID0gdG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyUmVjdCA9IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGxldCB0b29sYmFyU3RpY2tQb2ludCA9IHRvb2xiYXJTY3JvbGxDb250YWluZXJSZWN0LnRvcCArIHRvb2xiYXJTY3JvbGxDb250YWluZXIuY2xpZW50VG9wO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUb29sYmFyUmVjdFRvcCA9IHRvb2JhclJlY3QudG9wIC0gY2FjaGVUb29sYmFyVHJhbnNsYXRlWTtcclxuXHJcbiAgICBpZiAob3JpZ2luYWxUb29sYmFyUmVjdFRvcCA8IHRvb2xiYXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclJlY3RUb3AgLSB0b29sYmFyU3RpY2tQb2ludCk7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlVG9vbGJhclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyU2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJTY3JvbGxDb250YWluZXJSZWN0ID0gaGVhZGVyU2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaGVhZGVyUmVjdCA9IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXJSZWN0ID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblxyXG4gICAgbGV0IGhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJTY3JvbGxDb250YWluZXJSZWN0LnRvcCArIGhlYWRlclNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBoZWFkZXJTdGlja1BvaW50ICs9IHRvb2xiYXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXJCb3JkZXJCb3R0b20gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGhlYWRlck1heEFyZWFDb250YWluZXIpLmJvcmRlckJvdHRvbVdpZHRoKTtcclxuICAgIGxldCBtYXhIZWFkZXJTdGlja1BvaW50ID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lclJlY3QuYm90dG9tIC0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lckJvcmRlckJvdHRvbSAtIGhlYWRlci5vZmZzZXRIZWlnaHQ7IC8vIHRvZG8gbWFnZ2luXHJcbiAgICBtYXhIZWFkZXJTdGlja1BvaW50IC09IGZvb3Rlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgaGVhZGVyU3RpY2tQb2ludCA9IE1hdGgubWluKGhlYWRlclN0aWNrUG9pbnQsIG1heEhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxIZWFkZXJSZWN0VG9wID0gaGVhZGVyUmVjdC50b3AgLSBjYWNoZUhlYWRlclRyYW5zbGF0ZVk7XHJcblxyXG4gICAgaWYgKG9yaWdpbmFsSGVhZGVyUmVjdFRvcCA8IGhlYWRlclN0aWNrUG9pbnQpIHtcclxuICAgICAgICBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbEhlYWRlclJlY3RUb3AgLSBoZWFkZXJTdGlja1BvaW50KTtcclxuICAgICAgICBoZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZUhlYWRlclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IDA7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGZvb3RlclNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuICAgIGNvbnN0IGZvb3Rlck1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKGZvb3Rlcik7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyU2Nyb2xsQ29udGFpbmVyUmVjdCA9IGZvb3RlclNjcm9sbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGZvb3RlclJlY3QgPSBmb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBmb290ZXJNYXhBcmVhQ29udGFpbmVyUmVjdCA9IGZvb3Rlck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyU2Nyb2xsQ29udGFpbmVyQm9yZGVyQm90dG9tID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb290ZXJTY3JvbGxDb250YWluZXIpLmJvcmRlckJvdHRvbVdpZHRoKTtcclxuICAgIGxldCBmb290ZXJTdGlja1BvaW50ID0gZm9vdGVyU2Nyb2xsQ29udGFpbmVyUmVjdC5ib3R0b20gKyBmb290ZXJTY3JvbGxDb250YWluZXJCb3JkZXJCb3R0b207XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbEZvb3RlclJlY3RCb3R0b20gPSBmb290ZXJSZWN0LmJvdHRvbSArIE1hdGguYWJzKGNhY2hlRm9vdGVyVHJhbnNsYXRlWSk7XHJcblxyXG4gICAgaWYgKG9yaWdpbmFsRm9vdGVyUmVjdEJvdHRvbSA+PSBmb290ZXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVGb290ZXJUcmFuc2xhdGVZID0gLU1hdGguYWJzKG9yaWdpbmFsRm9vdGVyUmVjdEJvdHRvbSAtIGZvb3RlclN0aWNrUG9pbnQpO1xyXG4gICAgICAgIGZvb3Rlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlRm9vdGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2FjaGVGb290ZXJUcmFuc2xhdGVZID0gMDtcclxuICAgICAgICBmb290ZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=