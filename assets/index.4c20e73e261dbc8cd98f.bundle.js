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
    var scrollContainer = document.querySelector('.scrollContainer');
    var toolbarMaxAreaContainer = getMaxAreaContainer(toolbar);
    var containerRect = scrollContainer.getBoundingClientRect();
    var toobarRect = scrollContainer.getBoundingClientRect();
    var toolbarMaxAreaContainerRect = toolbarMaxAreaContainer.getBoundingClientRect();
    var stickPoint = containerRect.top + scrollContainer.clientTop;
    var originalToolbarStickyTop = toobarRect.top - cacheToolbarTranslateY;
    var toolbarAreaTop = toolbarMaxAreaContainer.getBoundingClientRect().top;
    var toolbarAreaBorderTop = toolbarMaxAreaContainer.clientTop;
    var toolbarStickPoint = toolbarAreaTop + toolbarAreaBorderTop;
    if (originalToolbarStickyTop < toolbarStickPoint) {
        cacheToolbarTranslateY = Math.abs(originalToolbarStickyTop - toolbarStickPoint);
        toolbar.style.transform = "translateY(" + cacheToolbarTranslateY + "px)";
    }
    else {
        toolbar.style.removeProperty('transform');
    }
    var header = document.querySelector('.header');
    var headerMaxAreaContainer = getMaxAreaContainer(header);
    var headerAreaTop = headerMaxAreaContainer.getBoundingClientRect().top;
    console.log('headerAreaTop', headerAreaTop);
    var headerAreaBorderTop = headerMaxAreaContainer.clientTop;
    var headerStickPoint = headerAreaTop + headerAreaBorderTop + toolbar.offsetHeight; // + offsetHeight
    var originalHeaderStickyTop = header.getBoundingClientRect().top - cacheHeaderTranslateY;
    if (originalHeaderStickyTop < headerStickPoint) {
        cacheHeaderTranslateY = Math.abs(originalHeaderStickyTop - headerStickPoint);
        header.style.transform = "translateY(" + cacheHeaderTranslateY + "px)";
    }
    else {
        header.style.removeProperty('transform');
    }
});


/***/ })

},[["./index.ts","runtime~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHbkUsU0FBUyxtQkFBbUIsQ0FBQyxhQUEwQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBeUIsQ0FBQztJQUN6RCxPQUFPLElBQUksRUFBRTtRQUNULElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUNJO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUF5QixDQUFDO1NBQ3JEO0tBQ0o7QUFDTCxDQUFDO0FBRUQsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRSxJQUFNLHVCQUF1QixHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdELElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlELElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzNELElBQU0sMkJBQTJCLEdBQUcsdUJBQXVCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUVwRixJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7SUFDL0QsSUFBTSx3QkFBd0IsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLHNCQUFzQixDQUFDO0lBSXpFLElBQU0sY0FBYyxHQUFHLHVCQUF1QixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0lBQzNFLElBQU0sb0JBQW9CLEdBQUcsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0lBQy9ELElBQU0saUJBQWlCLEdBQUcsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ2hFLElBQUksd0JBQXdCLEdBQUcsaUJBQWlCLEVBQUU7UUFDOUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFjLHNCQUFzQixRQUFLLENBQUM7S0FDdkU7U0FDSTtRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzdDO0lBR0QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELElBQU0sYUFBYSxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLElBQU0sbUJBQW1CLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDO0lBQzdELElBQU0sZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxpQkFBaUI7SUFDdEcsSUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUM7SUFDM0YsSUFBSSx1QkFBdUIsR0FBRyxnQkFBZ0IsRUFBRTtRQUM1QyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMscUJBQXFCLFFBQUssQ0FBQztLQUNyRTtTQUNJO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDNUM7QUFNTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC40YzIwZTczZTI2MWRiYzhjZDk4Zi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsQ29udGFpbmVyJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0TWF4QXJlYUNvbnRhaW5lcihzdGlja3lFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGxvb3BQYXJlbnQgPSBzdGlja3lFbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGlmIChsb29wUGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWF4QXJlYUNvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb29wUGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbG9vcFBhcmVudCA9IGxvb3BQYXJlbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjYWNoZVRvb2xiYXJUcmFuc2xhdGVZID0gMDtcclxubGV0IGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IDA7XHJcblxyXG5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcudG9vbGJhcicpO1xyXG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdG9vbGJhck1heEFyZWFDb250YWluZXIgPSBnZXRNYXhBcmVhQ29udGFpbmVyKHRvb2xiYXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBzY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0b29iYXJSZWN0ID0gc2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgdG9vbGJhck1heEFyZWFDb250YWluZXJSZWN0ID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgbGV0IHN0aWNrUG9pbnQgPSBjb250YWluZXJSZWN0LnRvcCArIHNjcm9sbENvbnRhaW5lci5jbGllbnRUb3A7XHJcbiAgICBjb25zdCBvcmlnaW5hbFRvb2xiYXJTdGlja3lUb3AgPSB0b29iYXJSZWN0LnRvcCAtIGNhY2hlVG9vbGJhclRyYW5zbGF0ZVk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB0b29sYmFyQXJlYVRvcCA9IHRvb2xiYXJNYXhBcmVhQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGNvbnN0IHRvb2xiYXJBcmVhQm9yZGVyVG9wID0gdG9vbGJhck1heEFyZWFDb250YWluZXIuY2xpZW50VG9wO1xyXG4gICAgY29uc3QgdG9vbGJhclN0aWNrUG9pbnQgPSB0b29sYmFyQXJlYVRvcCArIHRvb2xiYXJBcmVhQm9yZGVyVG9wO1xyXG4gICAgaWYgKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCA8IHRvb2xiYXJTdGlja1BvaW50KSB7XHJcbiAgICAgICAgY2FjaGVUb29sYmFyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsVG9vbGJhclN0aWNreVRvcCAtIHRvb2xiYXJTdGlja1BvaW50KTtcclxuICAgICAgICB0b29sYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVUb29sYmFyVHJhbnNsYXRlWX1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdG9vbGJhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJNYXhBcmVhQ29udGFpbmVyID0gZ2V0TWF4QXJlYUNvbnRhaW5lcihoZWFkZXIpO1xyXG4gICAgY29uc3QgaGVhZGVyQXJlYVRvcCA9IGhlYWRlck1heEFyZWFDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgY29uc29sZS5sb2coJ2hlYWRlckFyZWFUb3AnLCBoZWFkZXJBcmVhVG9wKTtcclxuICAgIGNvbnN0IGhlYWRlckFyZWFCb3JkZXJUb3AgPSBoZWFkZXJNYXhBcmVhQ29udGFpbmVyLmNsaWVudFRvcDtcclxuICAgIGNvbnN0IGhlYWRlclN0aWNrUG9pbnQgPSBoZWFkZXJBcmVhVG9wICsgaGVhZGVyQXJlYUJvcmRlclRvcCArIHRvb2xiYXIub2Zmc2V0SGVpZ2h0OyAvLyArIG9mZnNldEhlaWdodFxyXG4gICAgY29uc3Qgb3JpZ2luYWxIZWFkZXJTdGlja3lUb3AgPSBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY2FjaGVIZWFkZXJUcmFuc2xhdGVZO1xyXG4gICAgaWYgKG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wIDwgaGVhZGVyU3RpY2tQb2ludCkge1xyXG4gICAgICAgIGNhY2hlSGVhZGVyVHJhbnNsYXRlWSA9IE1hdGguYWJzKG9yaWdpbmFsSGVhZGVyU3RpY2t5VG9wIC0gaGVhZGVyU3RpY2tQb2ludCk7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Y2FjaGVIZWFkZXJUcmFuc2xhdGVZfXB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBoZWFkZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9