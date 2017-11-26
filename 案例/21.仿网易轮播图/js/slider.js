/**
 * Created by andy on 2017/9/5 18:24:42.
 */
window.onload = function() {
    // 获取元素
    function $(id) { return document.getElementById(id); }
    var js_slider = $("js_slider"); // 获取最大的盒子
    var slider_main_block = $("slider_main_block"); // 图片的父亲
    var imgs = slider_main_block.children; // 获得图片组
    var slider_ctrl = $("slider_ctrl"); // 获得控制的父盒子

    // 操作元素
    // 生成span
    for (var i = 0; i < imgs.length; i++)
    {
        var span = document.createElement("span");
        span.innerHTML = i+1;
        span.className = "slider-ctrl-con";
        slider_ctrl.insertBefore(span, slider_ctrl.children[i+1]);
    }

    var spans = slider_ctrl.children;
    spans[1].setAttribute("class", "slider-ctrl-con current");

    var scrollWidth = js_slider.clientWidth; // 得到大盒子的宽度，也就是后面动画走的距离

    // 第一张图留下，其余的走到 310px 的位置上
    for (i = 1; i < imgs.length; i++)
    {
        imgs[i].style.left = scrollWidth + "px";
    }

    // 遍历三个按钮
    // spans 是8个按钮，他们都是span
    var iNow = 0; // 用来控制播放张数（哪个图片做动画）
    for(var k in spans)
    {
        spans[k].onclick = function() {
            // alert(this.innerHTML);
            if (this.className == "slider-ctrl-prev")
            {
                // alert("点击了左侧按钮！");
                animate(imgs[iNow], {left: scrollWidth});
                --iNow < 0 ? iNow = imgs.length - 1 : iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow], {left: 0});
                setSquare();
            }
            else if (this.className == "slider-ctrl-next")
            {
                // alert("点击了右侧按钮！");
                // iNow == 0
                animate(imgs[iNow], {left: -scrollWidth});
                ++iNow > imgs.length - 1 ? iNow = 0 : iNow;
                imgs[iNow].style.left = scrollWidth + "px";
                animate(imgs[iNow], {left: 0});
                setSquare();
            }
            else
            {
                // alert("点击了下面的span！");
                var that = this.innerHTML - 1;

                if (that > iNow)
                {
                    // 当前图片走向左侧
                    animate(imgs[iNow], {left: -scrollWidth});
                    // 目标图片快速放置右侧
                    imgs[that].style.left = scrollWidth + "px";
                }
                else if (that < iNow)
                {
                    // 当前图片走向右侧
                    animate(imgs[iNow], {left: scrollWidth});
                    // 目标图片快速放置左侧
                    imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;
                animate(imgs[iNow], {left: 0});
                setSquare();
            }
        }
    }

    // 控制播放span的函数
    function setSquare() {
        // 清除所有的span，留下满足需要的那一个
        for (var i = 1; i < spans.length - 1; i++)
        {
            spans[i].className = "slider-ctrl-con";
        }
        // iNow 从 0 开始，span 从 1 开始，所以 iNow 要加 1
        spans[iNow+1].className = "slider-ctrl-con current";
    }

    // 定时器：其实就是右侧按钮
    var timer = null;
    timer = setInterval(autoplay, 2000);
    function autoplay() {
        animate(imgs[iNow], {left: -scrollWidth});
        ++iNow > imgs.length - 1 ? iNow = 0 : iNow;
        imgs[iNow].style.left = scrollWidth + "px";
        animate(imgs[iNow], {left: 0});
        setSquare();
    }

    // 鼠标经过清除定时器
    js_slider.onmouseover = function() {
        clearInterval(timer);
    }
    js_slider.onmouseout = function() {
        clearInterval(timer); // 要执行定时器先清除定时器
        timer = setInterval(autoplay, 2000);
    }
}
