//封装StringBuilder

function StringBuilder() {
    this._string_ = new Array();
}

StringBuilder.prototype.Append = function(str) {
    this._string_.push(str);
}

StringBuilder.prototype.toString = function() {
    return this._string_.join("");
}

//trim去掉字符串两边的指定字符,默去空格

String.prototype.Trim = function(str) {
    if (!str) {
        str = '\\s';
    } else {
        if (str == '\\') {
            str = '\\\\';
        } else if (str == ',' || str == '|' || str == ';') {
            str = '\\' + str;
        } else {
            str = '\\s';
        }
    }
    eval('var reg=/(^' + str + '+)|(' + str + '+$)/g;');
    return this.replace(reg, '');
};

String.prototype.trim = function(str) {
    return this.Trim(str);
};

//判断一个字符串是否为NULL或者空字符串

String.prototype.isNull = function() {
    return this == null || this.trim().length == 0;
}

String.prototype.equals = function(str) {
    return this == str;
}

//字符串截取后面加入...

String.prototype.interceptString = function(len) {

    if (this.length > len) {

        return this.substring(0, length - 1) + "...";

    } else {

        return this;

    }

}

//获得一个字符串的字节数

String.prototype.countLength = function() {
    var strLength = 0;
    for (var i = 0; i < this.length; i++) {
        if (this.charAt(i) > '~') strLength += 2;
        else strLength += 1;
    }
    return strLength;
}

//根据指定的字节数截取字符串

String.prototype.cutString = function(cutLength) {
    if (!cutLength) {
        cutLength = this.countLength();
    }
    var strLength = 0;
    var cutStr = "";
    if (cutLength > this.countLength()) {
        cutStr = this;
    } else {
        for (var i = 0; i < this.length; i++) {
            if (this.charAt(i) > '~') {
                strLength += 2;
            } else {
                strLength += 1;
            }
            if (strLength >= cutLength) {
                cutStr = this.substring(0, i + 1);
                break;
            }
        }
    }
    return cutStr;
};

//关于链接的操作命名空间

var Link = {};

//把一个字符串变成链接

Link.Filter = function(str) {

    var urlReg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=])?[^ <>\[\]*(){}\u4E00-\u9FA5]+/gi; //lio 2012-4-25 eidt   //         /^[\u4e00-\u9fa5\w]+$/;\u4E00-\u9FA5

    return str.replace(urlReg, function(m) {
        return '<a target="_blank" href="' + m + '">' + m + '</a>';
    });

}



//验证一个字符串时候是email

RegExp.isEmail = function(str) {

    var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*\.[\w-]+$/i;

    return emailReg.test(str);

}

//验证一个字符串是否是URL

RegExp.isUrl = function(str) {

    var patrn = /^http(s)?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\:+!]*([^<>])*$/;

    return patrn.exec(str);

}

//验证一个字符串是否是电话或传真

RegExp.isTel = function(str) {

    var pattern = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;

    return pattern.exec(str);

}

//验证一个字符串是否是手机号码

RegExp.isMobile = function(str) {

    var patrn = /^((13[0-9])|(15[0-35-9])|(18[0,2,3,5-9]))\d{8}$/;

    return patrn.exec(str);

}

//验证一个字符串是否是汉字

RegExp.isZHCN = function(str) {

    var p = /^[\u4e00-\u9fa5\w]+$/;

    return p.exec(str);

}

//验证一个字符串是否是数字

RegExp.isNum = function(str) {

    var p = /^\d+$/;

    return p.exec(str);

}

//验证一个字符串是否是纯英文

RegExp.isEnglish = function(str) {

    var p = /^[a-zA-Z., ]+$/;

    return p.exec(str);

}

// 判断是否为对象类型

RegExp.isObject = function(obj) {

    return (typeof obj == 'object') && obj.constructor == Object;

}

//验证字符串是否不包含特殊字符 返回bool

RegExp.isUnSymbols = function(str) {

    var p = /^[\u4e00-\u9fa5\w \.,()，ê?。¡ê（ê¡§）ê?]+$/;

    return p.exec(str);

}



//将一个字符串用给定的字符变成数组，

String.prototype.toArray = function(str) {

    if (this.indexOf(str) != -1) {

        return this.split(str);

    } else {

        if (this != '') {

            return [this.toString()];

        } else {

            return [];

        }

    }

};

//根据数据取得再数组中的索引

Array.prototype.getIndex = function(obj) {

    for (var i = 0; i < this.length; i++) {

        if (obj == this[i] || obj.equals(this[i])) {

            return i;

        }

    }

    return -1;

}

//移除数组中的某元素

Array.prototype.remove = function(obj) {

    for (var i = 0; i < this.length; i++) {

        if (obj.equals(this[i])) {

            this.splice(i, 1);

            break;

        }

    }

    return this;

};

//判断元素是否在数组中

Array.prototype.contains = function(obj) {

    for (var i = 0; i < this.length; i++) {

        if (obj == this[i] || obj.equals(this[i])) {

            return true;

        }

    }

    return false;

};


// 判断是否是中文名字（2个以上的中文），包含少数名族含有‘·’ 点号

function rr(val) {

    reg = /^[\u4E00-\u9FA5]{2,}(?:·[\u4E00-\u9FA5]{2,})*$/;

    if (!reg.test(val)) {

        document.getElementById('t').innerHTML = '不符合标准！';

    } else {

        document.getElementById('t').innerHTML = '符合标准！';

    }

}
