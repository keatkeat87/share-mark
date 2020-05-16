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
    var originalFooterRectBottom = footerRect.bottom + Math.abs(cacheFooterTranslateY);
    if (originalFooterRectBottom >= footerStickPoint) {
        cacheFooterTranslateY = -Math.abs(originalFooterRectBottom - footerStickPoint);
        footer.style.transform = "translateY(" + _this.cacheFooterTranslateY + "px)";
    }
    else {
        header.style.removeProperty('transform');
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFvR0E7QUFwR0EsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBR25FLFNBQVMsbUJBQW1CLENBQUMsYUFBMEI7SUFDbkQsSUFBSSxVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQXlCLENBQUM7SUFDekQsT0FBTyxJQUFJLEVBQUU7UUFDVCxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDbkQsT0FBTyxVQUFVLENBQUM7U0FDckI7YUFDSTtZQUNELFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBeUIsQ0FBQztTQUNyRDtLQUNKO0FBQ0wsQ0FBQztBQUVELElBQUksc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0FBRTlCLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFFdkMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxVQUFVLENBQUMsQ0FBQztJQUNoRSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFNBQVMsQ0FBQyxDQUFDO0lBQzlELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWMsU0FBUyxDQUFDLENBQUM7SUFJOUQsSUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUUsSUFBTSx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU3RCxJQUFNLDBCQUEwQixHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDbEYsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDbkQsSUFBTSwyQkFBMkIsR0FBRyx1QkFBdUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBRXBGLElBQUksaUJBQWlCLEdBQUcsMEJBQTBCLENBQUMsR0FBRyxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQztJQUMxRixJQUFNLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFFdkUsSUFBSSxzQkFBc0IsR0FBRyxpQkFBaUIsRUFBRTtRQUM1QyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMsc0JBQXNCLFFBQUssQ0FBQztLQUN2RTtTQUNJO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDN0M7SUFJRCxJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RSxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNELElBQU0seUJBQXlCLEdBQUcscUJBQXFCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNoRixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNsRCxJQUFNLDBCQUEwQixHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFHbEYsSUFBSSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDO0lBQ3ZGLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFFekMsSUFBTSxrQ0FBa0MsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6SCxJQUFNLG1CQUFtQixHQUFHLDBCQUEwQixDQUFDLE1BQU0sR0FBRyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYztJQUV4SSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsSUFBTSxxQkFBcUIsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLHFCQUFxQixDQUFDO0lBRXJFLElBQUkscUJBQXFCLEdBQUcsZ0JBQWdCLEVBQUU7UUFDMUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFjLHFCQUFxQixRQUFLLENBQUM7S0FDckU7U0FDSTtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzVDO0lBS0QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RSxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNELElBQU0seUJBQXlCLEdBQUcscUJBQXFCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNoRixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNsRCxJQUFNLDBCQUEwQixHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFFbEYsSUFBTSxpQ0FBaUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUV2SCxJQUFJLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDLE1BQU0sR0FBRyxpQ0FBaUMsQ0FBQztJQUM1RixJQUFNLHdCQUF3QixHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRXJGLElBQUksd0JBQXdCLElBQUksZ0JBQWdCLEVBQUU7UUFDOUMscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFDL0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMsS0FBSSxDQUFDLHFCQUFxQixRQUFLLENBQUM7S0FDMUU7U0FDSTtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzVDO0FBS0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguODMyY2Q4ODgzNmJiMWNmYWU5ODcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE1heEFyZWFDb250YWluZXIoc3RpY2t5RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBsb29wUGFyZW50ID0gc3RpY2t5RWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAobG9vcFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21heEFyZWFDb250YWluZXInKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9vcFBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxvb3BQYXJlbnQgPSBsb29wUGFyZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IDA7XHJcbmxldCBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSAwO1xyXG5sZXQgY2FjaGVGb290ZXJUcmFuc2xhdGVZID0gMDtcclxuXHJcbnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcudG9vbGJhcicpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZm9vdGVyJyk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB0b29sYmFyU2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdG9vbGJhck1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKHRvb2xiYXIpO1xyXG5cclxuICAgIGNvbnN0IHRvb2xiYXJTY3JvbGxDb250YWluZXJSZWN0ID0gdG9vbGJhclNjcm9sbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRvb2JhclJlY3QgPSB0b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgdG9vbGJhck1heEFyZWFDb250YWluZXJSZWN0ID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgbGV0IHRvb2xiYXJTdGlja1BvaW50ID0gdG9vbGJhclNjcm9sbENvbnRhaW5lclJlY3QudG9wICsgdG9vbGJhclNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBjb25zdCBvcmlnaW5hbFRvb2xiYXJSZWN0VG9wID0gdG9vYmFyUmVjdC50b3AgLSBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZO1xyXG5cclxuICAgIGlmIChvcmlnaW5hbFRvb2xiYXJSZWN0VG9wIDwgdG9vbGJhclN0aWNrUG9pbnQpIHtcclxuICAgICAgICBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gTWF0aC5hYnMob3JpZ2luYWxUb29sYmFyUmVjdFRvcCAtIHRvb2xiYXJTdGlja1BvaW50KTtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVUb29sYmFyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoZWFkZXJTY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcihoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlclNjcm9sbENvbnRhaW5lclJlY3QgPSBoZWFkZXJTY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBoZWFkZXJSZWN0ID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lclJlY3QgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHJcbiAgICBsZXQgaGVhZGVyU3RpY2tQb2ludCA9IGhlYWRlclNjcm9sbENvbnRhaW5lclJlY3QudG9wICsgaGVhZGVyU2Nyb2xsQ29udGFpbmVyLmNsaWVudFRvcDtcclxuICAgIGhlYWRlclN0aWNrUG9pbnQgKz0gdG9vbGJhci5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyTWF4QXJlYUNvbnRhaW5lckJvcmRlckJvdHRvbSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoaGVhZGVyTWF4QXJlYUNvbnRhaW5lcikuYm9yZGVyQm90dG9tV2lkdGgpO1xyXG4gICAgY29uc3QgbWF4SGVhZGVyU3RpY2tQb2ludCA9IGhlYWRlck1heEFyZWFDb250YWluZXJSZWN0LmJvdHRvbSAtIGhlYWRlck1heEFyZWFDb250YWluZXJCb3JkZXJCb3R0b20gLSBoZWFkZXIub2Zmc2V0SGVpZ2h0OyAvLyB0b2RvIG1hZ2dpblxyXG5cclxuICAgIGhlYWRlclN0aWNrUG9pbnQgPSBNYXRoLm1pbihoZWFkZXJTdGlja1BvaW50LCBtYXhIZWFkZXJTdGlja1BvaW50KTtcclxuICAgIGNvbnN0IG9yaWdpbmFsSGVhZGVyUmVjdFRvcCA9IGhlYWRlclJlY3QudG9wIC0gY2FjaGVIZWFkZXJUcmFuc2xhdGVZO1xyXG5cclxuICAgIGlmIChvcmlnaW5hbEhlYWRlclJlY3RUb3AgPCBoZWFkZXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVIZWFkZXJUcmFuc2xhdGVZID0gTWF0aC5hYnMob3JpZ2luYWxIZWFkZXJSZWN0VG9wIC0gaGVhZGVyU3RpY2tQb2ludCk7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVIZWFkZXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZm9vdGVyJyk7XHJcbiAgICBjb25zdCBmb290ZXJTY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBmb290ZXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcihmb290ZXIpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlclNjcm9sbENvbnRhaW5lclJlY3QgPSBmb290ZXJTY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBmb290ZXJSZWN0ID0gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgZm9vdGVyTWF4QXJlYUNvbnRhaW5lclJlY3QgPSBmb290ZXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlclNjcm9sbENvbnRhaW5lckJvcmRlckJvdHRvbSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZm9vdGVyU2Nyb2xsQ29udGFpbmVyKS5ib3JkZXJCb3R0b21XaWR0aCk7XHJcblxyXG4gICAgbGV0IGZvb3RlclN0aWNrUG9pbnQgPSBmb290ZXJTY3JvbGxDb250YWluZXJSZWN0LmJvdHRvbSArIGZvb3RlclNjcm9sbENvbnRhaW5lckJvcmRlckJvdHRvbTtcclxuICAgIGNvbnN0IG9yaWdpbmFsRm9vdGVyUmVjdEJvdHRvbSA9IGZvb3RlclJlY3QuYm90dG9tICsgTWF0aC5hYnMoY2FjaGVGb290ZXJUcmFuc2xhdGVZKTtcclxuXHJcbiAgICBpZiAob3JpZ2luYWxGb290ZXJSZWN0Qm90dG9tID49IGZvb3RlclN0aWNrUG9pbnQpIHtcclxuICAgICAgICBjYWNoZUZvb3RlclRyYW5zbGF0ZVkgPSAtTWF0aC5hYnMob3JpZ2luYWxGb290ZXJSZWN0Qm90dG9tIC0gZm9vdGVyU3RpY2tQb2ludCk7XHJcbiAgICAgICAgZm9vdGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dGhpcy5jYWNoZUZvb3RlclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==