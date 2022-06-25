$(function () {
    const parent = $('#first').closest('div');
    const elements = parent.find('p');
    let active = 0;

    function nextSlide() {
        elements.eq(active).removeAttr('id');
        if (active + 1 === elements.length) {
            active = 0;
        } else {
            active++;
        }
        elements.eq(active).attr('id','first');
    }

    $('#next').on('click', nextSlide);

    function prevSlide() {
        elements.eq(active).removeAttr('id');
        if (active === 0) {
            active = elements.length - 1;
        } else {
            active--;
        }
        elements.eq(active).attr('id','first');
    }

    $('#prev').on('click', prevSlide);
})