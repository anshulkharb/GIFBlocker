document.querySelectorAll('img[src*=".gif"]').forEach(function (item, index) {
    if (!item.src.includes('cleardot')) {
        item.setAttribute('style', 'display: none;');
    }
})
document.querySelectorAll('a[href*=".gif"]').forEach(function (item, index) {
    if (!item.src.includes('cleardot')) {
        item.setAttribute('style', 'display: none;');
    }
})