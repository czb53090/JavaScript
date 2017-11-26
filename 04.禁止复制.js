document.oncontextmenu = function(){
showDialog('本版块禁止复制，请尊重版权！', 'alert');
return false;
}
document.onkeydown = function(){
if (event.ctrlKey && window.event.keyCode==67 || window.event.keyCode==123){
showDialog('本版块禁止复制，请尊重版权！', 'alert');
return false;
}
}
document.body.oncopy = function (){
showDialog('本版块禁止复制，请尊重版权！', 'alert');
return false;
}

