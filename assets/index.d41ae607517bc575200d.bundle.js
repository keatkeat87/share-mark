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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFFL0IsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsSUFBTSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDN0QsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0lBQ2pELElBQU0sVUFBVSxHQUFHLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDM0MsSUFBTSx3QkFBd0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFDOUYsSUFBSSx3QkFBd0IsR0FBRyxVQUFVLEVBQUU7UUFDdkMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxnQkFBYyxzQkFBc0IsUUFBSyxDQUFDO0tBQ3ZFO1NBQ0k7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM3QztBQXdCTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5kNDFhZTYwNzUxN2JjNTc1MjAwZC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0TWF4QXJlYUNvbnRhaW5lcihzdGlja3lFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGxvb3BQYXJlbnQgPSBzdGlja3lFbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGlmIChsb29wUGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWF4QXJlYUNvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb29wUGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbG9vcFBhcmVudCA9IGxvb3BQYXJlbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gMDtcclxuXHJcbnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy50b29sYmFyJyk7XHJcbiAgICBjb25zdCBtYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcih0b29sYmFyKTtcclxuICAgIGNvbnN0IGFyZWFUb3AgPSBtYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGNvbnN0IGFyZWFCb3JkZXJUb3AgPSBtYXhBcmVhQ29udGFpbmVyLmNsaWVudFRvcDtcclxuICAgIGNvbnN0IHN0aWNrUG9pbnQgPSBhcmVhVG9wICsgYXJlYUJvcmRlclRvcDtcclxuICAgIGNvbnN0IG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCA9IHRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY2FjaGVUb29sYmFyVHJhbnNsYXRlWTtcclxuICAgIGlmIChvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgPCBzdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCAtIHN0aWNrUG9pbnQpO1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZVRvb2xiYXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==