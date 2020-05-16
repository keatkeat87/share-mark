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
    var maxAreaContainer = getMaxAreaContainer(toolbar);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFFL0IsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsSUFBTSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDN0QsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0lBQ2pELElBQU0sVUFBVSxHQUFHLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDM0MsSUFBTSx3QkFBd0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFDOUYsSUFBSSx3QkFBd0IsR0FBRyxVQUFVLEVBQUU7UUFDdkMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxnQkFBYyxzQkFBc0IsUUFBSyxDQUFDO0tBQ3ZFO1NBQ0k7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM3QztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LjZlMTFhZjZjYzY5MWU2NzQ3OWI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxDb250YWluZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRNYXhBcmVhQ29udGFpbmVyKHN0aWNreUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgbG9vcFBhcmVudCA9IHN0aWNreUVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGxvb3BQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXhBcmVhQ29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvb3BQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb29wUGFyZW50ID0gbG9vcFBhcmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNhY2hlVG9vbGJhclRyYW5zbGF0ZVkgPSAwO1xyXG5cclxuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnRvb2xiYXInKTtcclxuICAgIGNvbnN0IG1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKHRvb2xiYXIpO1xyXG4gICAgY29uc3QgYXJlYVRvcCA9IG1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgY29uc3QgYXJlYUJvcmRlclRvcCA9IG1heEFyZWFDb250YWluZXIuY2xpZW50VG9wO1xyXG4gICAgY29uc3Qgc3RpY2tQb2ludCA9IGFyZWFUb3AgKyBhcmVhQm9yZGVyVG9wO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wID0gdG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZO1xyXG4gICAgaWYgKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCA8IHN0aWNrUG9pbnQpIHtcclxuICAgICAgICBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gTWF0aC5hYnMob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIC0gc3RpY2tQb2ludCk7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlVG9vbGJhclRyYW5zbGF0ZVl9cHgpYDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==