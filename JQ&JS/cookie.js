//设置cookie；
function setCookie(c_name, c_val, e_day) {
    var date = new Date();
    date.setDate(date.getDate() + e_day);
    document.cookie = c_name + '=' + escape(c_val) + (e_day == null ? '' : ';expires=' + date.toString());
}

//清除cookie;
function delCookie(c_name) {
    setCookie(c_name, '', -1);
}

//获取cookie;
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + '=');
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexof(';', c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return '';
}