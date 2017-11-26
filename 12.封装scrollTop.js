
function scroll() {
    if (window.pageYOffset != null) // ie9+浏览器支持
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };
    else if (document.compatMode == "CSS1Compat") // 生命了 DTD
        // 检测是不是怪异模式的浏览器，就是有没有声明 <!DOCTYPE html>
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        };
    return { // 剩下的就是怪异模式了
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    };
}

window.onscroll = function() {
    console.log(scroll().top);
}
