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
scrollContainer.addEventListener('scroll', function () {
    var toolbar = document.querySelector('.toolbar');
    var maxAreaContainer = getMaxAreaContainer(toolbar);
    var areaTop = maxAreaContainer.getBoundingClientRect().top;
    var areaBorderTop = maxAreaContainer.clientTop;
    var stickPoint = areaTop + areaBorderTop;
    var originalToolbarStickyTop = toolbar.getBoundingClientRect().top - cacheToolbarTranslateY;
    if (originalToolbarStickyTop < stickPoint) {
        _this.cacheCurrentTransitionY = Math.abs(originalStickyTop - stickPoint);
        toolbar.style.transform = "translateY(" + cacheToolbarTranslateY + "px)";
    }
    else {
        toolbar.style.removeProperty('transform');
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFnQ0E7QUFoQ0EsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBR25FLFNBQVMsbUJBQW1CLENBQUMsYUFBMEI7SUFDbkQsSUFBSSxVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQXlCLENBQUM7SUFDekQsT0FBTyxJQUFJLEVBQUU7UUFDVCxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDbkQsT0FBTyxVQUFVLENBQUM7U0FDckI7YUFDSTtZQUNELFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBeUIsQ0FBQztTQUNyRDtLQUNKO0FBQ0wsQ0FBQztBQUVELElBQUksc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0FBRS9CLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDdkMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxVQUFVLENBQUMsQ0FBQztJQUNoRSxJQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELElBQU0sT0FBTyxHQUFHLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0lBQzdELElBQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztJQUNqRCxJQUFNLFVBQVUsR0FBRyxPQUFPLEdBQUcsYUFBYSxDQUFDO0lBQzNDLElBQU0sd0JBQXdCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLHNCQUFzQixDQUFDO0lBQzlGLElBQUksd0JBQXdCLEdBQUcsVUFBVSxFQUFFO1FBQ3ZDLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFjLHNCQUFzQixRQUFLLENBQUM7S0FDdkU7U0FDSTtRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzdDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguNmI2YzA5NDAwMDJhOGJlNzcyNjkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE1heEFyZWFDb250YWluZXIoc3RpY2t5RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBsb29wUGFyZW50ID0gc3RpY2t5RWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAobG9vcFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21heEFyZWFDb250YWluZXInKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9vcFBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxvb3BQYXJlbnQgPSBsb29wUGFyZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IDA7XHJcblxyXG5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcudG9vbGJhcicpO1xyXG4gICAgY29uc3QgbWF4QXJlYUNvbnRhaW5lciA9IGdldE1heEFyZWFDb250YWluZXIodG9vbGJhcik7XHJcbiAgICBjb25zdCBhcmVhVG9wID0gbWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBjb25zdCBhcmVhQm9yZGVyVG9wID0gbWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBjb25zdCBzdGlja1BvaW50ID0gYXJlYVRvcCArIGFyZWFCb3JkZXJUb3A7XHJcbiAgICBjb25zdCBvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgPSB0b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVk7XHJcbiAgICBpZiAob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIDwgc3RpY2tQb2ludCkge1xyXG4gICAgICAgIHRoaXMuY2FjaGVDdXJyZW50VHJhbnNpdGlvblkgPSBNYXRoLmFicyhvcmlnaW5hbFN0aWNreVRvcCAtIHN0aWNrUG9pbnQpO1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZVRvb2xiYXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=