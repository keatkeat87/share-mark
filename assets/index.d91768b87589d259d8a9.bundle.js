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
    var toolbarTranslateY = toolbar.getBoundingClientRect().top - cacheToolbarTranslateY;
    if (toolbarTranslateY < stickPoint) {
    }
    else {
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFFL0IsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsSUFBTSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDN0QsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0lBQ2pELElBQU0sVUFBVSxHQUFHLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDM0MsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFDdkYsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLEVBQUU7S0FFbkM7U0FDSTtLQUdKO0FBSUwsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguZDkxNzY4Yjg3NTg5ZDI1OWQ4YTkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE1heEFyZWFDb250YWluZXIoc3RpY2t5RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBsb29wUGFyZW50ID0gc3RpY2t5RWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAobG9vcFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21heEFyZWFDb250YWluZXInKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9vcFBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxvb3BQYXJlbnQgPSBsb29wUGFyZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IDA7XHJcblxyXG5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcudG9vbGJhcicpO1xyXG4gICAgY29uc3QgbWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIodG9vbGJhcik7XHJcbiAgICBjb25zdCBhcmVhVG9wID0gbWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBjb25zdCBhcmVhQm9yZGVyVG9wID0gbWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBjb25zdCBzdGlja1BvaW50ID0gYXJlYVRvcCArIGFyZWFCb3JkZXJUb3A7XHJcbiAgICBjb25zdCB0b29sYmFyVHJhbnNsYXRlWSA9IHRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY2FjaGVUb29sYmFyVHJhbnNsYXRlWTtcclxuICAgIGlmICh0b29sYmFyVHJhbnNsYXRlWSA8IHN0aWNrUG9pbnQpIHtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==