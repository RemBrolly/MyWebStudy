/*
//循环
let a = [1,2,3,4,5,'tianjin'] ;
for (let i = 0; i < a.length; i++) {
    console.log( a[i] + '\n' ) ;            //使用普通的for循环遍历数组
}
for (let string in a) {
    console.log( a[string] + '\n' ) ; //使用for/in循环遍历数组
}
*/

/*
//对象直接量：
let point = { x: 5 , y : 0 };
let point2 = { x : point.x , y : point.y + 1 };
let book = {
    "main title" : "JavaScript", /!*属性名里有空格，必须使用引号*!/
    'sub-title' : 'The Definitive Guide',/!*属性名里有连接符-，必须使用引号*!/
    'for' : 'all audiences' ,/!*属性名是关键字，必须使用引号*!/
    author:{              /!*该属性的值是一个对象*!/
        firstname:'David',
        surname:'Flanagan'
    }
}
console.log( book.for + point2.x) ;
console.log( book.author["surname"] + point.x + book['main title']);
//使用方括号[]时，方括号内的表达式必须返回一个字符串或者可转化为字符串的值
*/

/*
//Object.create()
let o =  Object.create(null) ; //通过给Object.create传入一个null值创建一个不继承任何原型的对象o
let o2 = Object.create(Object.prototype) ; //创建一个普通的空对象，和下一句代码等价
let o3 = new Object() ; //和上一句等价
console.log(typeof o2 === typeof o3 ) ; //=>输出为ture
*/

/*
let customer = {
    address0:'beijng',
    address1:'chongqing',
    address2:'guangxi',
    address3:'tianjin',
}
let address = "" ;
for ( let i = 0; i < 4; i++) {
    address += customer['address'+i]+'\n';
    //可以通过为字符串添加内容并使用方括号[]来依次访问customer对象里的属性值
}
console.log( address ) ;
*/

/*
//对象的属性：
let test = {
    x: 5 ,
    d:8
}
console.log('x' in test); //=>true，表明x是对象test的属性
console.log('y' in test); //=>false,表明y不是对象test的属性
console.log('toString' in test); //=>true，toString是test的继承方法，所以属于test对象的属性
console.log(test.hasOwnProperty ('x')); //=>true，表明x是对象test的自有属性
console.log(test.hasOwnProperty ('toString')); //=>false，表明toString不是对象test的自有属性
console.log(test.propertyIsEnumerable('x')); //=>true，表明x是对象test的自有且可枚举的属性
console.log(test.propertyIsEnumerable('toString'));//=>false，表明toString属性在test对象中是不可枚举的
console.log(Object.getOwnPropertyNames(test)) ;
//=> ['x' , 'd' ] ; Object.getOwnPropertyNames()返回test对象包含的所有自有属性的属性名组成的数组
console.log(Object.keys(test).toString()) ; //=> x,d ; Object.keys()返回test对象包含的可枚举属性的属性名组成的数组
console.log(Object.getOwnPropertyDescriptor(test,'d')) ;
/!*=>{ value: 8, writable: true, enumerable: true, configurable: true }
  Object.getOwnPropertyDescriptor()返回所查询的test对象的d的属性描述符，其中value表示值，writable表示可写性，enumerable表示可枚举性
  configurable表示可配置性*!/
console.log(Object.getOwnPropertyDescriptor(test,'toString')) ;
//=>undefined ;因为Object.getOwnPropertyDescriptor()只能获取自有属性的属性描述符，而不能获取继承的属性的描述符
*/

/*
//函数式编程：
//求一个数组中所有元素的平均值和标准差
let data = [1,1,3,5,5] ; //待处理数组
let sum = function(x,y){ return x+y ;} ; //求和函数
let square = function (x){ return x*x ; } ; //求平方函数
let mean = data.reduce(sum) / data.length ;
/!*求平均值，数组的reduce()方法会将数组中从头到尾依次两两相加（参数为求和函数，则数组中1+1=3，然后3会占据数组首元素位置，然后首元素的3
又与后边的3相加得66又占据数组首元素得位置，然后6又和后边的5相加得11，以此类推，最后只剩下最终结果16在首元素得位置，
reduce()方法不会改变原数组内容）*!/
console.log(data.toString()) ; //=>1,1,3,5,5;使用reduce()方法后数组内容没变
let deviations = data.map(function(x){ return x-mean ;}) ;//使用数组的map()方法求数组中每个值与平均值的差值
//map()方法可以将数组中的每个元素传递给作为参数的函数function(x)的参数x,并将返回值返回每个元素的位置代替原来的值，即返回一个新数组
console.log(deviations.toString()+'\n'+data.toString());//=>-2,-2,0,2,2;查看上句map()方法的返回值,data数组内容也没有改变
let stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1)) ;//偏差先平方再求和再求平均值最后开方即可得方差值
console.log(mean+'\n'+stddev) ;//=>3 2 ;平均值和方差正确
*/

/*
//类和构造函数：
Range:   //创建一个判定值的范围的类
    function Range(from, to) {   //这是一个构造函数
        this.from = from;        //为该类的属性赋值
        this.to = to;/!*为该类的属性赋值*!/
    }
//该类的所有对象都会继承自下面这个对象，这个对象就是所有该类创建的对象的原型对象
Range.prototype = {  //这里的Rang.prototype是一个强制的命名，对Rang()构造函数的调用会自动使用Rang.prototype作为新Rang对象的原型
    //该对象的一个属性
    includes:
        function (x) {
            return this.from <= x && x <= this.to;
        },
    //该对象的一个属性
    foreach:
        function (f) {
            for (let x = Math.ceil(this.from); x <= this.to; x++) f(x);
        },
    //该对象的一个属性
    toString:
        function () {
            return '(' + this.from + '...' + this.to + ')';
        }
};
let r = new Range(1, 3);  //创建一个范围对象,此处通过new来调用构造函数来创建该类的对象
console.log(r.includes(2));//=>true ; 2 在范围1~3内
r.foreach(console.log); //=>1 2 3
console.log(r); // =>{ from: 1, to: 3 }
r.x = 5; //为对象r增添新的变量x；
console.log(r.x); //=>5 ；输出新加的值，表明添加成功；
Range.prototype.addnew = 50; //通过Rang.prototype(原型对象)为类添加新变量（所有定义的对象都会有该值
console.log(r.addnew); //=> 50 ; 表明上一句的操作是成功的
Range.prototype.constructor = Range; //为Range类添加它的constructor属性
Range.prototype.equals = function (that) {   //为Range类添加一个比较的方法
    if (that == null) return false;  //null值和undefined返回false
    if (that.constructor !== Range) return false; //如果对象不属于Range类也返回false
    return that.from == this.from && that.to == this.to; //比较两个被比较对象的属性及其属性值是否相同 ；
};
let a = new Range(2, 4);  //定义Range的一个对象a
let b = new Range(1, 3);  //定义Range的一个对象b
console.log(a.equals(b)); //=> false ; 比较对象a和b是否相等,显然不相等
console.log(b.equals(r)); //=> true ; 比较对象b和r是否相等，显然相等

//constructor属性
let f = function () {
}; //创建一个函数
let c = new f();  //将函数作为类的构造函数，使用new运算符调用
console.log(c.constructor === f); //=>true ；说明constructor属性指代这个类


//可以判断值的类型的type()函数：
function type(o) {
    let t, c, n; // type , class , name
    if (o === null) return 'null'; //处理null值的特殊情形
    if (o !== NaN) return 'nan'; //处理NaN值，NaN和它自身不相等
    if ((t = typeof (o)) !== 'object') return t; //判别原始值的类型和函数
    if ((c = classof(o)) !== 'Object') return c; //返回对象的类名，可以识别大多数的内置对象
    if (o.constructor && typeof o.constructor == 'function' &&
        (n = o.constructor.getName())) return n; //返回某个对象的类名，通过构造函数判定
    return 'Object';  //无法判别的类型一律返回Object
};

//classof函数：
function classof(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
};
//getName函数：
Function.prototype.getName = function () {     //通过为Function类添加新的值（函数），来获取函数名
    if ('name' in this) return this.name; //返回函数的名字，不是函数的话返回null
    return this.name = this.toString().match(/function\s*([^(]*)\(/) [1];
};
*/

/*
//正则表达式
let s = 'javascript,Javascript,JavaScript,javaScript';
console.log(s.search(/Script/)); //=> 26;返回匹配到的字符串的起始位置的值
console.log(s.replace(/javascript/, 'JavaScript'));
//=>JavaScript,Javascript,JavaScript,javaScript ;将所有指定的javascript字符串替换为指定的JavaScript字符串
console.log(s.replace(/javascript/gi, 'JavaScript'));
//=>JavaScript,JavaScript,JavaScript,JavaScript ;
//相比上一句代码注意多出来的修饰符gi，将所有的javascript字符串（不区分大小写）替换为指定的JavaScript字符串
console.log(s.match(/[a-j]+/)); //=>['ja'] ;返回一个由匹配结果组成的数组（只包含第一个匹配到的字符串的）
console.log(s.match(/[a-j]+/g)); //=>['ja'] ;注意多出来的修饰符g，返回一个由匹配结果组成的数组（包含匹配到的所有字符串）
console.log(s.split('a')); //=>['j','v','script,J','v','script,J','v','Script,j','v','Script'];
//此处的split方法以字符‘a’为分隔符将字符串s拆分放入数组中
console.log(s.split(',')); //=>['javascript', 'Javascript', 'JavaScript', 'javaScript'];同上，此处是以逗号分隔


//使用正则表达式来解析一个URL：
let url = /(\w+):\/\/([\w.]+)\/(\S*)/; //设置正则表达式直接量
let text = 'Welcome to baidu : https://www.baidu.com/img_ppch'; //设置一串字符串文本
let result = text.match(url); //根据正则表达式来检索文本内容中的url地址
//根据正则表达式里的圆括号内容将匹配的内容放入变量数组中
let fullurl , protocol,host,path ;
if (result != null) {
    fullurl = result[0]; //=>https://www.baidu.com/img_ppch
    // 根据正则表达式，首元素是match匹配的完整结果
    protocol = result[1]; //=>https
    // 根据正则表达式，索引1处是正则表达式中第一个圆括号匹配的结果
    host = result[2]; //www.baidu.com
    // 根据正则表达式，索引2处是正则表达式中第二个圆括号匹配的结果
    path = result[3]; //img_ppch
    // 根据正则表达式，索引3处是正则表达式中第三个圆括号匹配的结果
}
console.log(fullurl + '\n' + protocol + '\n' + host + '\n' + path);
*/

/*
//模板字面量：
let st = `<style>   
.a{
width:100px ;
height:100px ;
}
</style>` ; //模板内容使用反引号括起来，注意反引号内的内容里的空格数
console.log(st) ;
//字符串插值：
let value = 5 ; //定义一个值
let exp = 'Second' ; //定义一个字符串
let output = value + ' to the ' + exp + ' power is ' + (value*value) ; //使用常规的字符串连接
console.log( output ) ; //=>5 to the Second power is 25
let output_pro  = `${value} to the ${exp} power is ${value*value}` ; //使用模板字面量中的字符串插值来输出（注意反引号）
console.log( output_pro ) ; //5 to the Second power is 25
//通过String.raw获取模板字面量的原始内容：
let fs = `first\nsecond` ; //注意这里的换行符
console.log(fs) ; //注意输出内容会将换行符转换
console.log(String.raw`first\nsecond`) ; //=>first\nsecond ;输出原始内容
*/

/*
//获取一个随机整数：
console.log(Math.floor(Math.random() * 10));
//数组的from()方法：
console.log(Array.from('中华人民共和国')); //使用from方法将字符串转换为数组实例
const a = Array.from('中华人民共和国');  //复制上一个数组
console.log(Array.from(a.keys())); //获取数组a的索引数组
console.log(Array.from(a.values())); //获取数组a的元素数组
console.log(Array.from(a.entries())); //获取数组a的 索引/元素 数组
//Map集合：
// const m1 = new Map() ; //创建一个空的映射
// const m1 = new Map().set('key1','value2') ; //创建一个空的映射,并通过set方法添加键值对
const m1 = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]); //使用嵌套数组初始化映射
console.log(m1.size); //=>3;查询键值对数
console.log(m1.get('key2')); //=>value2;查询相应键对应的值
console.log(m1.has('key1')); //=>true;查询相应键对应的值是否存在
m1.delete('key1'); //删除相应的键值对；
console.log(m1.has('key1')); //=>false;该键值对已被删除
m1.set('key1', 'value1').set('key4', 'value4'); //添加两个键值对
console.log(Array.from(m1)); //查看Map集合中的所有键值对
//Set集合：(大多数用法与Map类似)
const s1 = new Set(['val1', 'val2', 'val3']);
console.log(s1.has('val1')); //=>true; has查询该值是否存在集合中
s1.add('value4').add('value5'); //使用add向集合中添加值
console.log(Array.from(s1)); //查看集合内容
s1.clear(); //清空集合内容
console.log(Array.from(s1)); //查看集合内容
//for-of循环迭代：
let iter = [       //创建一个含有不同集合元素的数组
    Array.of(1, 2),
    new Map([[3, 4], [5, 6]]),
    new Set([7, 'j'])
];
for (const iterElement of iter) {  //使用for-of循环顺序迭代iter数组内容，外层循环迭代iter数组每个元素
    for (const x of iterElement) {  //内层for-of循环迭代每个元素的内部数组元素或者值
        console.log(x);  //输出迭代结果
    }
}
*/

/*
//迭代器：
let num = 1;
let str = 'abc';
console.log(num[Symbol.iterator]); //=>undefined; 数字类型没有迭代方法
console.log(str[Symbol.iterator]); //=>[Function: [Symbol.iterator]] ; //字符串类型有迭代方法

let arr = ['foo', 'bar', 'tur'];  //定义一个数组
let iter = arr[Symbol.iterator]();  //获取该数组的迭代器
console.log(iter); //=>Object [Array Iterator] {} ;表明该数组的迭代器类型
//执行迭代：
console.log(iter.next()); //=>{ value: 'foo', done: false }
console.log(iter.next()); //=>{ value: 'bar', done: false }
console.log(iter.next()); //=>{ value: 'tur', done: false }
console.log(iter.next()); //=>{ value: undefined, done: true }
//这里通过创建迭代器并调用next()方法按顺序迭代了数组
//以上执行迭代后的输出结果中done表示迭代是否完成，为false则表示未完成，可以继续通过使用next()方法继续迭代下一个值，
//为true则表示迭代完成（即“耗尽”状态），无法产生新的值

//创建新的迭代器并在迭代器迭代的过程中修改数组内容，再查看迭代内容：
let iter2 = arr[Symbol.iterator](); //获取该数组的一个新迭代器
//执行迭代：
console.log(iter2.next()); //=>{ value: 'foo', done: false }
console.log(iter2.next()); //=>{ value: 'bar', done: false }
//突然修改数组内容：
arr.splice(2, 0, 'abc');
console.log(arr.toString()); //查看数组内容；=>foo,bar,abc,tur
//此时在使用迭代器继续迭代：
console.log(iter2.next()); //=>{ value: 'abc', done: false }
console.log(iter2.next()); //=>{ value: 'tur', done: false }

//现在修改数组内容后再输出第一个迭代器的内容：
console.log(arr.toString()) //输出数组内容:=>foo,bar,abc,tur
console.log(iter.next()); //=>{ value: undefined, done: true }
arr.splice(4, 0, 'cde'); //扩展数组元素
console.log(iter.next()); //=>{ value: undefined, done: true } ,表明迭代器一旦done值为true则会停止迭代（这也体现了迭代器一次性使用的特性）
//由上例子看出，在迭代器遍历到迭代对象的某个位置时，修改迭代对象在该位置后的内容时，迭代器继续向迭代时也会迭代到修改的内容，
//但是修改迭代对象该位置之前的内容，迭代对象无法再迭代到修改的内容，且当迭代器的属性值done为true时
//无论迭代对象后边是否还有新增内容或修改内容，迭代器都不会再继续迭代了
let iter3 = arr[Symbol.iterator]() ; //新的迭代器
console.log(iter3.next().value === 'foo') ; //判断值是否相等：=>true

//自定义迭代器：
class Counter{
    constructor(limit){
        this.limit = limit ;
    }
    //以下代码为该类自定义了迭代器：
    [Symbol.iterator](){      //迭代器函数
        //将计数器变量放在闭包里，最后通过闭包返回迭代器，这样可以使一个实例对象可以创建多个迭代器
        let count = 1 , limit = this.limit ;
        return {
            next(){   //next方法
                if( count <= limit ){
                    return { done:false , value:count++ } ;
                }
                else{
                    return { done:true , value:undefined } ;
                }
            }
        } ;
    }
}
//定义Counter的一个对象：
let counter = new Counter(5) ;
for (let counterElement of counter) { //因为Counter类内定义了迭代器所以其实例对象可以使用for-of循环来进行迭代
    console.log(counterElement) ;
}
*/

/*
//生成器：
function* gen1(){  //创建一个生成器函数
    return 5 ;
};
const g1 = gen1() ; //生成器对象，调用该函数
console.log(g1);  //=>Object [Generator] {} ; 表明该函数是个生成器函数
console.log(g1.next()) ; //=>{ value: 5, done: true } ; value是函数的返回值

function* gen2(){  //创建一个生成器函数
    console.log('foo') ;  //函数体
}
gen2() ; //调用该函数，发现输出结果为空，即该函数并没有执行；
const g2 = gen2() ; //将该函数赋给一个变量，该函数依旧没有执行
g2.next() ;  //=>foo ; 在调用next()方法后该函数才执行了

function* gen3(){  //创建一个生成器函数
    let x = 5 ;
    yield x++ ;  //yield关键字中断函数执行
    yield x++ ;
    yield x-- ;
    return x ;
}
const g3 = gen3() ; //生成器对象，此时gen3并没有调用
console.log(g3) ; //=>Object [Generator] {} ;表明g3是个生成器对象
console.log(g3.next()) ; //=>{ value: 5, done: false } ;此时的yield类似return的作用
console.log(g3.next()) ; //=>{ value: 6, done: false }
console.log(g3.next()) ; //=>{ value: 7, done: false }
console.log(g3.next()) ; //=>{ value: 6, done: true } ; done:true表明函数体执行结束了
//生成器常用的方法：(当成可迭代对象使用)
function* nTimer(n){  //生成器函数
    while(n--){
        yield;      //yield关键字控制循环
    }
}
let g4 = nTimer(5) ;  //生成器对象
for (const never of g4) {  //让生成器作为一个可迭代对象进行迭代
    console.log('yield') ; //输出5次yield
}

function* gen5(x){ //定义一个生成器函数
    console.log(x);
    console.log(yield); //yield关键字在这里作为输出的参数，也会让函数执行时中断在此处
    console.log(yield);
};
//通过向next函数传入参数来控制输出：
let g5 = gen5('foo') ; //生成器对象
g5.next('abc') ; //=>foo ;这里第一次给next函数传入参数是不起作用的，因为第一次调用next函数是为了开始执行函数
g5.next('def') ; //=>aef ;这里传给next的参数会传到生成器函数的yield关键字处
g5.next('aqw') ; //=>aqw ;这里同上也会传到yield关键字处
//yield关键字同时作为输入和输出：
function* gen6(){  //生成器函数
    return yield 'foo' ;  //这里的yield关键字即作为return作用又作为参数作用
}
let g6 = gen6() ; //生成器对象
console.log(g6.next()) ; //=>{ value: 'foo', done: false } ; 因为yield后边跟着一个常量，所以yield在这会先作为return功能
console.log(g6.next('bar')) ; //=>{ value: 'bar', done: true } ; 因为常量foo已经返回过了，所以此时yield关键字作为参数接收next里的参数

//yield*：
function* gen7(){  //生成器函数
    yield* [1,2] ;  //加了*的yield现在可以迭代一个可迭代变量了（即此处的数组）
    yield* [3,4] ;
    yield* [5,6] ;
}
let g7 = gen7() ;
for (const number of g7) {  //for-of循环依次遍历可迭代变量，先迭代到数组[1,2],再在该数组中迭代每个元素
    console.log(number);
}
//使用yield*实现递归算法：
function* gen8(n){ //生成器函数，该函数本身就是可迭代变量
    if (n>0) {
        yield* gen8(n - 1);  //使用yield*来迭代可迭代变量即可实现递归
        yield n - 1;
    }
}
for (const number of gen8(3)) {
    console.log(number) ; //=> 0 1 2 ;递归输出
}
//return函数提前终止生成器的迭代：
function* gen9() {  //生成器函数
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g9= gen9(); //生成器对象
console.log(g9.next()); // { done: false, value: 1 }
console.log(g9.return(7)); // { done: true, value: 7 } //使用return函数提前终止迭代
console.log(g9.next()); // { done: true, value: undefined }
console.log(g9.next()); // { done: true, value: undefined }
console.log(g9.next()); // { done: true, value: undefined }
*/

/*
//构造函数中的一个有趣现象：（使用语法特性来实现类）
function Person(name, age, sex) {  //创建一个构造函数（其实就是个函数而已，只是因为其名字首字母大写）
    this.name = name;  //成员赋值
    this.age = age; //成员赋值
    this.sex = sex; //成员赋值
    this.sayName = sayName; //成员函数赋值，所赋函数在该构造函数外定义
    this.ages = ages ; //成员函数赋值，所赋函数在该构造函数外定义
}
function sayName() {  //在构造函数外定义函数
    console.log(`the age of ${this.name} is ${this.age}`);
    this.age++;
}
function ages(){  //在构造函数外定义函数
    this.age++ ;
}
let per1 = new Person('matt', '18', 'man'); //使用构造函数定义一个新对象
let per2 = new Person('Jon', '18', 'woman'); //使用构造函数定义一个新对象
per1.sayName(); //调用该对象的方法：=>the age of matt is 18
per2.sayName(); //调用该对象的方法：=>the age of Jon is 18
per2.ages(); //调用该对象的方法;
per1.sayName(); //调用该对象的方法：=>the age of matt is 19
//有上述输出结果可以看出per2对象调用ages函数将age值+1后，per1的age值居然也加1了！
//所以将构造函数的成员函数的实例定义在构造函数的外部可以解决一个类定义多个对象时函数重复定义的问题但也会让这个类的所有对象都共享该成员函数了

//使用ES6中的新关键字class来实现类：
class Person_class{} ; //创建一个空类
console.log(Person_class) ;//=>[class Person_class] ; 输出类的说明符
console.log(typeof Person_class ) ; //输出该类的类型：=>function ; 该类类型为函数，即ES中没有类这个类型，创建的类都是特殊的函数
//类的立即实例化：
let foo = new class Foo{  //立即实例化类并创建该类的对象
    constructor(x){  //构造函数
        console.log('\n') ;
    }
} ;

class Cla1{  //创建一个类
    constructor(){  //构造函数，定义的所有方法和属性都是定义在每一各对象实例上的
        this.log = function(){
            console.log('instance') ;
        }
        this.name = 'matt' ; //普通成员
};
    static age = 18 ; //静态成员
     //this.name = 15 ;  //此处将原始值（或者对象）定义在构造函数外会报错
    log(){  //类块中的一个方法，方法定义在构造函数外是不会报错的，但该方法是处于类的原型上的
        console.log('instance_off') ;
    };
}
let cla1 = new Cla1() ;  //该类的一个实例化对象
console.log(cla1.name) ;
// console.log(cla1.age) ; //此处调用不了静态成员，因为静态成员是定义在类上的
console.log(Cla1.age) ; //=>18 ; 静态成员只存在与类上，所以只能通过类名调用
cla1.log() ;  //=>instance ;
Cla1.prototype.log(); //=>instance_off ;
//由上述结果说明类块内的所有内容是定义在类的原型上，构造函数中的同名属性会覆盖原型上的同名属性；
//使用静态方法实现实例工厂：
class Worker{  //新建一个类
    constructor(salary){  //构造函数
        this.salary = salary ;  //实例成员
    } ;

    saySalary(){  //原型方法
        console.log(this.salary) ;
    };

    static create(){  //静态方法
        return new Worker(Math.floor(Math.random()*10000)) ;
    }
};
console.log(Worker.create()) ; //调用静态方法
//使用ES6中的新继承特性（extends关键字）
class Test{
    static output(){
        console.log(this) ;
    }
}
Test.output() ; //=>[ class Test ] ;
*/

/*
//函数扩展操作符：
let values = [1, 2, 3, 4, 5]; //数组
function getsum() { //定义函数
    for (let i = 0; i < arguments.length; i++) { //依次遍历传入的参数
        console.log(arguments[i]);
    }
    console.log(arguments.length); //输出参数数组长度
}

getsum(...values); //使用扩展操作符扩展参数，即自动将数组内的元素依次独立作为参数传入函数参数中

//函数的caller属性：
function outer() { //定义一个函数
    inner(); //函数体内部调用一个函数
}

function inner() {  //定义另一个函数
    console.log(inner.caller); //输出调用该函数的函数
}

outer(); //=>[Function: outer] ;
*/


/*
function double(value) {
    setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
}
double(3);
// 6（大约 1000 毫秒之后）

new Promise(() => setTimeout(console.log, 0, 'executor'));
setTimeout(console.log, 0, 'promise initialized');
*/

/*let p1 = Promise.reject('err0') ;
console.log(Promise.resolve(p1)) ; //该方法会保留传入的期约的状态
let p2 = Promise.resolve(3) ;
console.log(Promise.reject(p2)) ;*/

/*
function delayedResolve(str) { //工厂函数，将期约生成代码包含在里边
    return new Promise((resolve, reject) => { //返回一个Promise实例
        console.log(str);
        setTimeout(resolve, 1000);
    });
}
delayedResolve('p1 executor')
    .then(() => delayedResolve('p2 executor'))
    .then(() => delayedResolve('p3 executor'))
    .then(() => delayedResolve('p4 executor')) ;
*/

/*
let p = Promise.all([
    Promise.resolve(),
    new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p); // Promise <pending>
p.then(() => setTimeout(console.log, 0, 'all() resolved!'));
*/

/*
async function foo() {
    console.log(1);
}
// 给返回的期约添加一个解决处理程序
foo().then(console.log);
console.log(2);
*/

/*
async function foo(){
    console.log(await 'foo') ;
}
function bar(){
    console.log('bar') ;
}
foo() ;
bar() ;
*/

/*
async function foo() { //异步函数
    console.log(2); //正常输出2
    console.log(await Promise.resolve(8)); //该部分及其之后的部分会阻塞
    console.log(9); //该部分在前一句执行完毕时才能执行
}
async function bar() { //异步函数
    console.log(4); //正常输出4
    console.log(await 6); //该部分及其之后的部分会阻塞
    console.log(7);  //该部分在前一句执行完毕时才能执行
}
console.log(1); //正常输出1
foo(); //先执行正常输出部分，
console.log(3); //正常输出3
bar(); //先执行正常输出部分，
console.log(5); //正常输出5
*/


//通过异步函数实现类似Java中的sleep()函数：
async function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
async function foo() {
    const t0 = Date.now();
    await sleep(1500); // 暂停约 1500 毫秒
    console.log(Date.now() - t0);
}
foo();
// 1502





































