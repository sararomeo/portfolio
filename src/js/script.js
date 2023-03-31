/**
 * Set the margin-bottom of the main content area to be the same as the height of the navbar.
 */
function setContentMarginBottom() {
    var footerHeight = $("#footer").outerHeight(true);
    $('#content-container').attr('style', 'margin-bottom:' + footerHeight + 'px !important');
}
