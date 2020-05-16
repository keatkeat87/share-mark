const scrollContainer = document.querySelector('.scrollContainer');


function getMaxAreaContainer(stickyElement: HTMLElement) {
    let loopParent = stickyElement.parentNode as HTMLElement;
    while (true) {
        if (loopParent.classList.contains('maxAreaContainer')) {
            return loopParent;
        }
        else {
            loopParent = loopParent.parentNode as HTMLElement;
        }
    }
}

let cacheToolbarTranslateY = 0;
let cacheHeaderTranslateY = 0;
let cacheFooterTranslateY = 0;

scrollContainer.addEventListener('scroll', () => {

    const toolbar = document.querySelector<HTMLElement>('.toolbar');
    const header = document.querySelector<HTMLElement>('.header');
    const footer = document.querySelector<HTMLElement>('.footer');



    const toolbarScrollContainer = document.querySelector('.scrollContainer');
    const toolbarMaxAreaContainer = getMaxAreaContainer(toolbar);

    const toolbarScrollContainerRect = toolbarScrollContainer.getBoundingClientRect();
    const toobarRect = toolbar.getBoundingClientRect();
    const toolbarMaxAreaContainerRect = toolbarMaxAreaContainer.getBoundingClientRect();

    let toolbarStickPoint = toolbarScrollContainerRect.top + toolbarScrollContainer.clientTop;
    const originalToolbarRectTop = toobarRect.top - cacheToolbarTranslateY;

    if (originalToolbarRectTop < toolbarStickPoint) {
        cacheToolbarTranslateY = Math.abs(originalToolbarRectTop - toolbarStickPoint);
        toolbar.style.transform = `translateY(${cacheToolbarTranslateY}px)`;
    }
    else {
        cacheToolbarTranslateY = 0;
        toolbar.style.removeProperty('transform');
    }


    const headerScrollContainer = document.querySelector('.scrollContainer');
    const headerMaxAreaContainer = getMaxAreaContainer(header);

    const headerScrollContainerRect = headerScrollContainer.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
    const headerMaxAreaContainerRect = headerMaxAreaContainer.getBoundingClientRect();


    let headerStickPoint = headerScrollContainerRect.top + headerScrollContainer.clientTop;
    headerStickPoint += toolbar.offsetHeight;

    const headerMaxAreaContainerBorderBottom = parseFloat(window.getComputedStyle(headerMaxAreaContainer).borderBottomWidth);
    let maxHeaderStickPoint = headerMaxAreaContainerRect.bottom - headerMaxAreaContainerBorderBottom - header.offsetHeight; // todo maggin
    maxHeaderStickPoint -= footer.offsetHeight;

    headerStickPoint = Math.min(headerStickPoint, maxHeaderStickPoint);
    const originalHeaderRectTop = headerRect.top - cacheHeaderTranslateY;

    if (originalHeaderRectTop < headerStickPoint) {
        cacheHeaderTranslateY = Math.abs(originalHeaderRectTop - headerStickPoint);
        header.style.transform = `translateY(${cacheHeaderTranslateY}px)`;
    }
    else {
        cacheHeaderTranslateY = 0;
        header.style.removeProperty('transform');
    }



    const footerScrollContainer = document.querySelector('.scrollContainer');
    const footerMaxAreaContainer = getMaxAreaContainer(footer);

    const footerScrollContainerRect = footerScrollContainer.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    const footerMaxAreaContainerRect = footerMaxAreaContainer.getBoundingClientRect();

    const footerScrollContainerBorderBottom = parseFloat(window.getComputedStyle(footerScrollContainer).borderBottomWidth);
    let footerStickPoint = footerScrollContainerRect.bottom + footerScrollContainerBorderBottom;

    const footerMaxAreaContainerBorderTop = footerMaxAreaContainer.clientTop;
    let minFooterStickPoint = footerMaxAreaContainerRect.top + footerMaxAreaContainerBorderTop + footer.offsetHeight; // todo maggin
    minFooterStickPoint += header.offsetHeight;

    footerStickPoint = Math.max(footerStickPoint, minFooterStickPoint);

    const originalFooterRectBottom = footerRect.bottom + Math.abs(cacheFooterTranslateY);

    if (originalFooterRectBottom >= footerStickPoint) {
        cacheFooterTranslateY = -Math.abs(originalFooterRectBottom - footerStickPoint);
        footer.style.transform = `translateY(${cacheFooterTranslateY}px)`;
    }
    else {
        cacheFooterTranslateY = 0;
        footer.style.removeProperty('transform');
    }

});
