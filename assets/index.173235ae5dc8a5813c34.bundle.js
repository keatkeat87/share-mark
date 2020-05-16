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
    var toolbarMaxAreaContainer = getMaxAreaContainer(toolbar);
    var toolbarAreaTop = toolbarMaxAreaContainer.getBoundingClientRect().top;
    var toolbarAreaBorderTop = toolbarMaxAreaContainer.clientTop;
    var toolbarStickPoint = toolbarAreaTop + toolbarAreaBorderTop;
    var originalToolbarStickyTop = toolbar.getBoundingClientRect().top - cacheToolbarTranslateY;
    if (originalToolbarStickyTop < toolbarStickPoint) {
        cacheToolbarTranslateY = Math.abs(originalToolbarStickyTop - toolbarStickPoint);
        toolbar.style.transform = "translateY(" + cacheToolbarTranslateY + "px)";
    }
    else {
        toolbar.style.removeProperty('transform');
    }
    // const header = document.querySelector<HTMLElement>('.header');
    // const headerMaxAreaContainer = getMaxAreaContainer(header);
    // const headerAreaTop = headerMaxAreaContainer.getBoundingClientRect().top;
    // const headerAreaBorderTop = headerMaxAreaContainer.clientTop;
    // const headerStickPoint = headerAreaTop + headerAreaBorderTop + toolbar.offsetHeight; // + offsetHeight
    // const originalHeaderStickyTop = header.getBoundingClientRect().top - cacheHeaderTranslateY;
    // if (originalHeaderStickyTop < headerStickPoint) {
    //     cacheHeaderTranslateY = Math.abs(originalHeaderStickyTop - headerStickPoint);
    //     header.style.transform = `translateY(${cacheHeaderTranslateY}px)`;
    // }
    // else {
    //     header.style.removeProperty('transform');
    // }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sdUJBQXVCLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsSUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDM0UsSUFBTSxvQkFBb0IsR0FBRyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7SUFDL0QsSUFBTSxpQkFBaUIsR0FBRyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDaEUsSUFBTSx3QkFBd0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFDOUYsSUFBSSx3QkFBd0IsR0FBRyxpQkFBaUIsRUFBRTtRQUM5QyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLGlCQUFpQixDQUFDLENBQUM7UUFDaEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMsc0JBQXNCLFFBQUssQ0FBQztLQUN2RTtTQUNJO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDN0M7SUFHRCxpRUFBaUU7SUFDakUsOERBQThEO0lBQzlELDRFQUE0RTtJQUM1RSxnRUFBZ0U7SUFDaEUseUdBQXlHO0lBQ3pHLDhGQUE4RjtJQUM5RixvREFBb0Q7SUFDcEQsb0ZBQW9GO0lBQ3BGLHlFQUF5RTtJQUN6RSxJQUFJO0lBQ0osU0FBUztJQUNULGdEQUFnRDtJQUNoRCxJQUFJO0FBTVIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguMTczMjM1YWU1ZGM4YTU4MTNjMzQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE1heEFyZWFDb250YWluZXIoc3RpY2t5RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBsb29wUGFyZW50ID0gc3RpY2t5RWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAobG9vcFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21heEFyZWFDb250YWluZXInKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9vcFBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxvb3BQYXJlbnQgPSBsb29wUGFyZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IDA7XHJcbmxldCBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSAwO1xyXG5cclxuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnRvb2xiYXInKTtcclxuICAgIGNvbnN0IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcih0b29sYmFyKTtcclxuICAgIGNvbnN0IHRvb2xiYXJBcmVhVG9wID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgY29uc3QgdG9vbGJhckFyZWFCb3JkZXJUb3AgPSB0b29sYmFyTWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBjb25zdCB0b29sYmFyU3RpY2tQb2ludCA9IHRvb2xiYXJBcmVhVG9wICsgdG9vbGJhckFyZWFCb3JkZXJUb3A7XHJcbiAgICBjb25zdCBvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgPSB0b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVk7XHJcbiAgICBpZiAob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIDwgdG9vbGJhclN0aWNrUG9pbnQpIHtcclxuICAgICAgICBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gTWF0aC5hYnMob3JpZ2luYWxUb29sYmFyU3RpY2t5VG9wIC0gdG9vbGJhclN0aWNrUG9pbnQpO1xyXG4gICAgICAgIHRvb2xiYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtjYWNoZVRvb2xiYXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5oZWFkZXInKTtcclxuICAgIC8vIGNvbnN0IGhlYWRlck1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKGhlYWRlcik7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJBcmVhVG9wID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJBcmVhQm9yZGVyVG9wID0gaGVhZGVyTWF4QXJlYUNvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJTdGlja1BvaW50ID0gaGVhZGVyQXJlYVRvcCArIGhlYWRlckFyZWFCb3JkZXJUb3AgKyB0b29sYmFyLm9mZnNldEhlaWdodDsgLy8gKyBvZmZzZXRIZWlnaHRcclxuICAgIC8vIGNvbnN0IG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNhY2hlSGVhZGVyVHJhbnNsYXRlWTtcclxuICAgIC8vIGlmIChvcmlnaW5hbEhlYWRlclN0aWNreVRvcCA8IGhlYWRlclN0aWNrUG9pbnQpIHtcclxuICAgIC8vICAgICBjYWNoZUhlYWRlclRyYW5zbGF0ZVkgPSBNYXRoLmFicyhvcmlnaW5hbEhlYWRlclN0aWNreVRvcCAtIGhlYWRlclN0aWNrUG9pbnQpO1xyXG4gICAgLy8gICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2NhY2hlSGVhZGVyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgICAgaGVhZGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==