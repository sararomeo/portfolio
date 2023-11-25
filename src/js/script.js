/**
 * Set the margin-bottom of the main content area to be the same as the height of the footer.
 */
function adjustPaddingBottom() {
    var footerHeight = document.querySelector('footer').offsetHeight;
    document.getElementById('content-container').style.paddingBottom = footerHeight + 'px';
}

// Call the function on document ready and window resize
document.addEventListener('DOMContentLoaded', function() {
    adjustPaddingBottom();
});

window.addEventListener('resize', function() {
    adjustPaddingBottom();
});
