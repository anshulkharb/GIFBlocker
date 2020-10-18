document.querySelectorAll('img[src$=".gif"]').forEach(function (item, index) {
    item.setAttribute('style', 'display: none;');
})
document.querySelectorAll('a[href$=".gif"]').forEach(function (item, index) {
    item.setAttribute('style', 'display: none;');
})