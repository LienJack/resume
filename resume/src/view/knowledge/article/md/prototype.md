# 构造函数
## 执行过程
1. 使用new这个关键词来创建对象
2. 在构造函数内部把新创建出来的对象赋予给this
3. 在构造函数内部把新创建（将来new的对象）的属性方法绑到this上
4. 默认是返回新创建的对象，特别需要注意的是如果显式return一个对象数据类型，那么将来new的对象，就是显式return的对象

```
function Person(name,age){
 // 2.给这个对象赋属性、方法，需要我们自己操作
    this.name = name
    this.age = age
    this.eat = function(){
        console.log(name + '吃饭')
    }
    
    // 3.系统自动返回创建的对象
    // return this
}

let p1 = new Person("邵威儒",28)
console.log(p1.constructor) // Person 指向的构造函数是Person

function Dog(name,age){
    this.name = name
    this.age = age
}

let dog = new Dog("旺财",10)
console.log(dog.constructor) // Dog 指向的构造函数是Dog

// 默认是返回新创建的对象，特别需要注意的是
// 如果显式return一个对象数据类型，那么将来new的对象，就是显式return的对象
// 这个是之前一个小伙伴问的，我们看下面的例子

// 当我们显式return一个原始数据类型
function Person(name,age){
    this.name = name
    this.age = age
    
    return "1"
}


let p = new Person("邵威儒",28) // { name: '邵威儒', age: 28 }

// 当我们显式return一个对象数据类型时
function Person(name,age){
    this.name = name
    this.age = age
    
    return [1,2,3]
}

let p = new Person("邵威儒",28) // [ 1, 2, 3 ]
// 我们发现，当显式return一个对象数据类型时，我们new出来的对象，得到的是return的值
```
# 手动实现
## 初步实现
分析：
因为 new 的结果是一个新对象，所以在模拟实现的时候，我们也要建立一个新对象，假设这个对象叫 obj，因为 obj 会具有 Otaku 构造函数里的属性，想想经典继承的例子，我们可以使用 Otaku.apply(obj, arguments)来给 obj 添加新的属性。
```javascript
function objectFactory() {
  var obj = {}
  Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  Constructor.apply(obj, arguments)
  return obj
}
```
在这一版中，我们：
1.用new Object() 的方式新建了一个对象 obj

2.取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments
会被去除第一个参数

3.将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性

4.使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性

5.返回 obj

```javascript
function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj;
};

var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin
```
# 返回值效果实现
接下来我们再来看一种情况，假如构造函数有返回值，举个例子：
```javascript
function Otaku (name, age) {
    this.strength = 60;
    this.age = age;

    return {
        name: name,
        habit: 'Games'
    }
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined
```
结果完全颠倒过来，这次尽管有返回值，但是相当于没有返回值进行处理。
所以我们还需要判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么。
再来看第二版的代码，也是最后一版的代码：
```javascript
// 第二版的代码
function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
};
```

