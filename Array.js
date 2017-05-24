var a  = new Array();

var b = new Array(10);

var c  = new Array(5,4,3,2,1,"testing, testing");

//稀疏数组: 数组长度大于元素个数
a = new Array(5);

a=[];

a[1000]=0;

var a = [1,2,3];

a.join(); // "1,2,3"

a.join(" "); //"1 2 3"

a.join("");  //"123""

Array.isArray([]); //true

Array.isArray({});//false

var a={};
var i=0;
while(i<10){
    a[i] = i*i;
    i++;
}
a.length=i;

var total=0;
for(var j=0;j<a.length;j++)
    total+=a[j];

