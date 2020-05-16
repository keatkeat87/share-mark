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
scrollContainer.addEventListener('scroll', function () {
    var toolbar = document.querySelector('.toolbar');
    var toolbarMaxAreaContainer = getMaxAreaContainer(toolbar);
    var areaTop = maxAreaContainer.getBoundingClientRect().top;
    var areaBorderTop = maxAreaContainer.clientTop;
    var stickPoint = areaTop + areaBorderTop;
    var originalToolbarStickyTop = toolbar.getBoundingClientRect().top - cacheToolbarTranslateY;
    if (originalToolbarStickyTop < stickPoint) {
        cacheToolbarTranslateY = Math.abs(originalToolbarStickyTop - stickPoint);
        toolbar.style.transform = "translateY(" + cacheToolbarTranslateY + "px)";
    }
    else {
        toolbar.style.removeProperty('transform');
    }
    var header = document.querySelector('.header');
    var maxAreaContainer = getMaxAreaContainer(header);
    var areaTop = maxAreaContainer.getBoundingClientRect().top;
    var areaBorderTop = maxAreaContainer.clientTop;
    var stickPoint = areaTop + areaBorderTop;
    var originalToolbarStickyTop = toolbar.getBoundingClientRect().top - cacheToolbarTranslateY;
    if (originalToolbarStickyTop < stickPoint) {
        cacheToolbarTranslateY = Math.abs(originalToolbarStickyTop - stickPoint);
        toolbar.style.transform = "translateY(" + cacheToolbarTranslateY + "px)";
    }
    else {
        toolbar.style.removeProperty('transform');
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFFL0IsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sdUJBQXVCLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsSUFBTSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDN0QsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0lBQ2pELElBQU0sVUFBVSxHQUFHLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDM0MsSUFBTSx3QkFBd0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFDOUYsSUFBSSx3QkFBd0IsR0FBRyxVQUFVLEVBQUU7UUFDdkMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxnQkFBYyxzQkFBc0IsUUFBSyxDQUFDO0tBQ3ZFO1NBQ0k7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM3QztJQUdELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWMsU0FBUyxDQUFDLENBQUM7SUFDOUQsSUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxJQUFNLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUM3RCxJQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7SUFDakQsSUFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLGFBQWEsQ0FBQztJQUMzQyxJQUFNLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQztJQUM5RixJQUFJLHdCQUF3QixHQUFHLFVBQVUsRUFBRTtRQUN2QyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFjLHNCQUFzQixRQUFLLENBQUM7S0FDdkU7U0FDSTtRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzdDO0FBcUJMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmViZGIxNmZhNDBiZDJhODI1ZGQzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5cclxuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnRvb2xiYXInKTtcclxuICAgIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcih0b29sYmFyKTtcclxuICAgIGNvbnN0IGFyZWFUb3AgPSBtYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGNvbnN0IGFyZWFCb3JkZXJUb3AgPSBtYXhBcmVhQ29udGFpbmVyLmNsaWVudFRvcDtcclxuICAgIGNvbnN0IHN0aWNrUG9pbnQgPSBhcmVhVG9wICsgYXJlYUJvcmRlclRvcDtcclxuICAgIGNvbnN0IG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCA9IHRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY2FjaGVUb29sYmFyVHJhbnNsYXRlWTtcclxuICAgIGlmIChvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgPCBzdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCAtIHN0aWNrUG9pbnQpO1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZVRvb2xiYXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IG1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKGhlYWRlcik7XHJcbiAgICBjb25zdCBhcmVhVG9wID0gbWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBjb25zdCBhcmVhQm9yZGVyVG9wID0gbWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBjb25zdCBzdGlja1BvaW50ID0gYXJlYVRvcCArIGFyZWFCb3JkZXJUb3A7XHJcbiAgICBjb25zdCBvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgPSB0b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVk7XHJcbiAgICBpZiAob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIDwgc3RpY2tQb2ludCkge1xyXG4gICAgICAgIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgLSBzdGlja1BvaW50KTtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVUb29sYmFyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=