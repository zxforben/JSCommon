var scope="global scope";
function checkscope(){
    var scope="local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo=checkscope();
foo(); //local scope


/*fContext={
    Scope:[AO,checkscopeContext.AO,globalContext.VO],
}*/

///////////////////////////////////////////////////////////////
var data=[];

for(var i=0;i<=3;i++){
    data[i] = function(){
        console.log(i);
    };
}

data[0]();  //3
data[1]();  //3
data[2]();  //3

/*globalContext={
    VO:{
        data:[...],
        i:3
    }
}

data[0]Context={
    Scope:[AO,globalContext.VO]
}*/

//////////////////////////////////////////////////////////////////////////



var data=[];

for(var i=0;i<=3;i++){
    data[i] = (function(i){
        return function(){
            console.log(i);
        }
    })(i);
}

data[0]();  //0
data[1]();  //1
data[2]();  //2

/*globalContext={
    VO:{
        data:[...],
        i:3
    }
}

data[0]Context={
    Scope:[AO,匿名函数Context.AO,globalContext.VO]
    
}

匿名函数的执行上下文的AO为：

匿名函数Context={
    AO:{
        arguments:{
            0:1,
            length:1
        },
        i:0
    }
}
*/

