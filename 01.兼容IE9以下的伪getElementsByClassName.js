// 方法1：
function getClass(id, classname) // 支持父类中的class元素
{
    if (document.getElementsByClassName)
    {
        if (id)
        {
            var eleId = document.getElementById(id);
            return eleId.getElementsByClassName(classname);
        }
        else
            return document.getElementsByClassName(classname);
    }

    if (id)
    {
        var eleId = document.getElementById(id);
        var dom = eleId.getElementsByTagName("*");
    }
    else
        var dom = document.getElementsByTagName("*");

    var arr = [];
    for (var i=0; i<dom.length; i++)
    {
        var classArr = dom[i].className.split(" ");
        for (var j=0; j<classArr.length; j++)
            if (classArr[j] == classname)
                arr.push(dom[i]);
    }

    return arr;
}

var tests = getClass("one", "test");
for (var i=0; i<tests.length; i++)
{
    tests[i].style.backgroundColor = "purple";
}

// 方法2：
function getClass(classname)
{
    // 如果浏览器支持
    if (document.getElementsByClassName)
        return document.getElementsByClassName(classname);

    var arr = [];
    var dom = document.getElementsByTagName("*");
    for (var i=0,len_dom=dom.length; i<len_dom; i++)
    {
        var classArr = dim[i].className.split(" ");
        for (var j=0,len_dom=classArr.length; j<len_classArr; j++)
            if (classArr[j] == classname);
                arr.push(dom[i]);
    }
    return arr;
}


// 方法3：
function getClassName(name, tagPos){
    // name是要传的类名，tagPos参数可以使得这个函数功能更灵活；
    tagPos = tagPos || document.body;

    //利用通配符的特性，获取页面上所有的标签；
    var tags  = tagPos.getElementByTagName('*');

    // 申明一个数组，等会用来接收所有包括你想求的这个类名的元素；
    var resultArr = [];

    for(var i = 0;  i < tags.length; i++){
        //  遍历每一个元素；
        var tempArr = tags[i].className.split(' ');
        /// 把每个元素的所有类名都切割成数组形式存到tempArr中(有时候标签会有很多类名)；

        for( var j = 0; j < tempArr.length; j++ ){
        //遍历每个标签的所有类名；
            if(tempArr[j] ==  name){ // 如果有一个元素中的任意一个类名与我们要找的类名相同

                resultArr [ resultArr.length ]= tags[i];
                // 我们就把这个标签放进先前的空数组中；
            }
        }
    }
    return resultArr;
}