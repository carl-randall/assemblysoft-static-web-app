$(document).ready(function () {
    // FitVids - start
    var $postContent = $(".post-full-content");
    $postContent.fitVids();
    // FitVids - end

    // Hover on avatar
    var hoverTimeout;
    $('.author-list-item').hover(function () {
        var $this = $(this);

        clearTimeout(hoverTimeout);

        $('.author-card').removeClass('hovered');
        $(this).children('.author-card').addClass('hovered');

    }, function () {
        var $this = $(this);

        hoverTimeout = setTimeout(function () {
            $this.children('.author-card').removeClass('hovered');
        }, 800);
    });
});
