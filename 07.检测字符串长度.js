window.onload = function() {
	var txt = "what are you 弄啥咧!好的";
    console.log(txt.length);
    function getStringLength(str) {
        var len = 0; //存储总长度
        var c = 0;  // 存储每一个编码
        for(var i=0;i<str.length;i++)
        {
            c = str.charCodeAt(i);
            //alert(c);
            if(c>=0 && c<=127)
            {
                len++;
            }
            else
            {
                len += 2;
            }
        }
        return len;
    }

    console.log(getStringLength(txt));
}
    