(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

var _this = this;
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
    var originalFooterRectTop = footerRect.bottom + Math.abs(cacheFooterTranslateY);
    if (originalStickyBottom >= stickPoint) {
        _this.cacheCurrentTransitionY = -Math.abs(originalStickyBottom - stickPoint);
        if (config.simulation) {
            _this.hostElement.nativeElement.style.transform = "translateY(" + _this.cacheCurrentTransitionY + "px)";
        }
        else {
            _this.hostElement.nativeElement.style.bottom = totalPrevOrNextOffsetHeight + "px";
            _this.hostElement.nativeElement.style.position = 'sticky';
        }
    }
    else {
        _this.cacheCurrentTransitionY = 0;
        _this.hostElement.nativeElement.style.removeProperty(config.simulation ? 'transform' : 'bottom');
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRWxGLElBQUksb0JBQW9CLElBQUksVUFBVSxFQUFFO1FBQ3BDLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDNUUsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ25CLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMsS0FBSSxDQUFDLHVCQUF1QixRQUFLLENBQUM7U0FDcEc7YUFDSTtZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sMkJBQTJCLE9BQUksQ0FBQztZQUNqRixLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1RDtLQUNKO1NBQ0k7UUFDRCxLQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNuRztBQUtMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LjJmOGQyNzcwYzMxMDE4ZTFlZDA1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gMDtcclxubGV0IGNhY2hlRm9vdGVyVHJhbnNsYXRlWSA9IDA7XHJcblxyXG5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnRvb2xiYXInKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaGVhZGVyJyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmZvb3RlcicpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdG9vbGJhclNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuICAgIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcih0b29sYmFyKTtcclxuXHJcbiAgICBjb25zdCB0b29sYmFyU2Nyb2xsQ29udGFpbmVyUmVjdCA9IHRvb2xiYXJTY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0b29iYXJSZWN0ID0gdG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyUmVjdCA9IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGxldCB0b29sYmFyU3RpY2tQb2ludCA9IHRvb2xiYXJTY3JvbGxDb250YWluZXJSZWN0LnRvcCArIHRvb2xiYXJTY3JvbGxDb250YWluZXIuY2xpZW50VG9wO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUb29sYmFyUmVjdFRvcCA9IHRvb2JhclJlY3QudG9wIC0gY2FjaGVUb29sYmFyVHJhbnNsYXRlWTtcclxuXHJcbiAgICBpZiAob3JpZ2luYWxUb29sYmFyUmVjdFRvcCA8IHRvb2xiYXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclJlY3RUb3AgLSB0b29sYmFyU3RpY2tQb2ludCk7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlVG9vbGJhclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyU2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJTY3JvbGxDb250YWluZXJSZWN0ID0gaGVhZGVyU2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaGVhZGVyUmVjdCA9IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXJSZWN0ID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblxyXG4gICAgbGV0IGhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJTY3JvbGxDb250YWluZXJSZWN0LnRvcCArIGhlYWRlclNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBoZWFkZXJTdGlja1BvaW50ICs9IHRvb2xiYXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXJCb3JkZXJCb3R0b20gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGhlYWRlck1heEFyZWFDb250YWluZXIpLmJvcmRlckJvdHRvbVdpZHRoKTtcclxuICAgIGNvbnN0IG1heEhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyUmVjdC5ib3R0b20gLSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyQm9yZGVyQm90dG9tIC0gaGVhZGVyLm9mZnNldEhlaWdodDsgLy8gdG9kbyBtYWdnaW5cclxuXHJcbiAgICBoZWFkZXJTdGlja1BvaW50ID0gTWF0aC5taW4oaGVhZGVyU3RpY2tQb2ludCwgbWF4SGVhZGVyU3RpY2tQb2ludCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbEhlYWRlclJlY3RUb3AgPSBoZWFkZXJSZWN0LnRvcCAtIGNhY2hlSGVhZGVyVHJhbnNsYXRlWTtcclxuXHJcbiAgICBpZiAob3JpZ2luYWxIZWFkZXJSZWN0VG9wIDwgaGVhZGVyU3RpY2tQb2ludCkge1xyXG4gICAgICAgIGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsSGVhZGVyUmVjdFRvcCAtIGhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlSGVhZGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmZvb3RlcicpO1xyXG4gICAgY29uc3QgZm9vdGVyU2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgZm9vdGVyTWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIoZm9vdGVyKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJTY3JvbGxDb250YWluZXJSZWN0ID0gZm9vdGVyU2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgZm9vdGVyUmVjdCA9IGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGZvb3Rlck1heEFyZWFDb250YWluZXJSZWN0ID0gZm9vdGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJTY3JvbGxDb250YWluZXJCb3JkZXJCb3R0b20gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZvb3RlclNjcm9sbENvbnRhaW5lcikuYm9yZGVyQm90dG9tV2lkdGgpO1xyXG5cclxuICAgIGxldCBmb290ZXJTdGlja1BvaW50ID0gZm9vdGVyU2Nyb2xsQ29udGFpbmVyUmVjdC5ib3R0b20gKyBmb290ZXJTY3JvbGxDb250YWluZXJCb3JkZXJCb3R0b207XHJcbiAgICBjb25zdCBvcmlnaW5hbEZvb3RlclJlY3RUb3AgPSBmb290ZXJSZWN0LmJvdHRvbSArIE1hdGguYWJzKGNhY2hlRm9vdGVyVHJhbnNsYXRlWSk7XHJcblxyXG4gICAgaWYgKG9yaWdpbmFsU3RpY2t5Qm90dG9tID49IHN0aWNrUG9pbnQpIHtcclxuICAgICAgICB0aGlzLmNhY2hlQ3VycmVudFRyYW5zaXRpb25ZID0gLU1hdGguYWJzKG9yaWdpbmFsU3RpY2t5Qm90dG9tIC0gc3RpY2tQb2ludCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zaW11bGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RoaXMuY2FjaGVDdXJyZW50VHJhbnNpdGlvbll9cHgpYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSBgJHt0b3RhbFByZXZPck5leHRPZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RpY2t5JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhY2hlQ3VycmVudFRyYW5zaXRpb25ZID0gMDtcclxuICAgICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoY29uZmlnLnNpbXVsYXRpb24gPyAndHJhbnNmb3JtJyA6ICdib3R0b20nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9