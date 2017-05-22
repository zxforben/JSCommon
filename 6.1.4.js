function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create)
        return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError;
    function f() { };
    f.prototype = p;
    return new f();
}

function library_function(o){

}

var o={x:"don't change this value"};
library_function(inherit(o));

function getValue(portfolio){
    var total=0.0;
    for(stock in portfolio){
        var shares=portfolio[stock];
        var price = getquote(stock);
        total+=shares*price;
    }

    return total;
}

