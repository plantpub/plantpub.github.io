window.onload = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.setAttribute('class', 'mobile');
    } else {
        document.body.setAttribute('class', 'desktop');
    }
    var iOS8 = navigator.userAgent.match(/(iPad|iPhone|iPod).*OS 8_\d/i);
}