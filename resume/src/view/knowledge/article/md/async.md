# 当前JavaScript编程主要是异步编程
当前JavaScript编程主要是异步编程。为什么这么说呢？网页或Web开发最早从2005年Ajax流行开始，逐步向重交互时代迈进。特别是SPA（Single Page Application，单页应用）流行之后，一度有人提出“Web页面要转向Web应用，而且要媲美原生应用”。如今在前端开发组件化的背景下催生的Angular、React和Vue，都是SPA进一步演化的结果。

Web应用或开发重交互的特征越来越明显，意味着什么？意味着按照浏览器这个运行时的特性，页面在首次加载过程中，与JavaScript相关的主要任务就是加载基础运行库和扩展库（包括给低版本浏览器打补丁的脚本），然后初始化和设置页面的状态。首次加载之后，用户对页面的操作、数据I/O以及DOM更新，就全部交由异步JavaScript脚本管理。所以，目前JavaScript编程最大的应用是Web交互，而Web交互的核心就是异步逻辑

然而，ES6之前JavaScript中控制异步流程的手段只有事件和回调。比如下面的示例展示了通过原生XMLHttpRequest对象发送异步请求，然后给onload和onerror事件分别注册成功和错误处理函数：

```

var req = new XMLHttpRequest();
req.open('GET', url);
 
req.onload = function () {
    if (req.status == 200) {
        processData(req.response);
    } 
};
 
req.onerror = function () {
    console.log('Network Error');
};
 
req.send();
```
事件和回调有很多问题，主要是它们只适用于简单的情况。逻辑一复杂，代码的编写和维护成本就成倍上升。比如，大家熟知的“回调地狱”。更重要的是，回调模式的异步本质与人类同步、顺序的思维模式是相悖的。
为了应对越来越复杂的异步编程需求，ES6推出了解决上述问题的Promise。
# Promise
Promise，人们普遍的理解就是：“Promise是一个未来值的占位符”。也就是说，从语义上讲，一个Promise对象代表一个对未来值的“承诺”（promise），这个承诺将来如果“兑现”（fulfill），就会“解决”（resolve）为一个有意义的数据；如果“拒绝”（reject），就会“解决”为一个“拒绝理由”（rejection reason），就是一个错误消息。

Promise对象的状态很简单，一生下来的状态是pending（待定），将来兑现了，状态变成fulfilled；拒绝了，状态变成rejected。fulfilled和rejected显然是一种“确定”（settled）状态。以上状态转换是不可逆的，所以Promise很单纯，好控制，哈哈。

![image](https://file.webstacks.cn/2018/08/2018082709034577.png)


以下是Promise相关的所有API。前3个是创建Promise对象的（稍后有例子），后4个中的前2个是用于注册反应函数的（稍后有例子），后2个是用于控制并发和抢占的：

![image](https://file.webstacks.cn/2018/08/2018082709043541.png)


以下是通过Prmoise(executor)构造函数创建Promise实例的详细过程：要传入一个“执行函数”（executor），这个执行函数又接收两个参数“解决函数”（resolver）和“拒绝函数”（rejector），代码中分别对应变量resolve和reject，作用分别是将新建对象的状态由pending改为fulfilled和rejected，同时返回“兑现值”（fulfillment）和“拒绝理由”（rejection）。当然，resolve和reject都是在异步操作的回调中调用的。调用之后，运行时环境（浏览器引擎或Node.js的libuv）中的事件循环调度机制会把与之相关的反应函数——兑现反应函数或拒绝反应函数以及相关的参数添加到“微任务”队列，以便下一次“循检”（tick）时调度到JavaScript线程去执行。

[微任务](http://note.youdao.com/noteshare?id=60f3511e29305697e4235876b8eb193b&sub=2094F3F092B8479290A0AA45E358984D)

![image](https://file.webstacks.cn/2018/08/2018082709061866.png)

如前所述，Promise对象的状态由pending变成fulfilled，就会执行“兑现反应函数”（fulfillment reaction）；而变成rejected，就会执行“拒绝反应函数”（rejection reaction）。如下例所示，常规的方式是通过p.then()注册兑现函数，通过p.catch()注册拒绝函数：


```
p.then(res => { // 兑现反应函数
  // res === 'random success'
})
p.catch(err => { // 拒绝反应函数
  // err === 'random failure'
})
```

当然还有非常规的方式，而且有时候非常规方式可能更好用：


```
// 通过一个.then()方法同时注册兑现和拒绝函数
p.then(
  res => {
    // handle response
  },
  err => {
    // handle error
  }
)
// 通过.then()方法只注册一个函数：兑现函数
p.then(res => {
  // handle response
})
// 通过.then()方法只传入拒绝函数，兑现函数的位置传null
p.then(null, err => {
  // handle error
})
```

关于Promise就这样吧。ES6除了Promise，还推出了Iterator（迭代器）和Generator（生成器），于是就有成就Async函数的PIG组合。下面我们分别简单看一看Iterator和Generator。

# Iterator
要理解Iterator或者迭代器，最简单的方式是看它的接口：

```
interface IteratorResult {
  done: boolean;
  value: any;
}
interface Iterator {
  next(): IteratorResult;
}
interface Iterable {
  [Symbol.iterator](): Iterator
}
```
先从中间的Iterator看。

什么是迭代器？它是一个对象，有一个next()方法，每次调用next()方法，就会返回一个迭代器结果（看第一个接口IteratorResult）。而这个迭代器结果，同样还是一个对象，这个对象有两个属性：done和value，其中done是一个布尔值，false表示迭代器迭代的序列没有结束；true表示迭代器迭代的序列结束了。而value就是迭代器每次迭代真正返回的值。

再看最后一个接口Iterable，翻译成“可迭代对象”，它有一个[Symbol.iterator]()方法，这个方法会返回一个迭代器。

可以结合前面的接口定义和下面这张图来理解可迭代对象（实现了“可迭代协议”）、迭代器（实现了“迭代器协议”）和迭代器结果这3个简单而又重要的概念（暂时理解不了也没关系，后面还有一个无穷序列的例子，可以帮助大家理解）。

![image](851F007D17674795A7A2BF487E93267E)

可迭代对象是一个我们非常熟悉的概念，数组、字符串以及ES6新增的集合类型Set和Map都是可迭代对象。这意味着什么呢？意味着我们可以通过E6新增的3个用于操作可迭代对象的语法：
- for...of
- [...iterable]
- Array.from(iterable)

下面再看一个通过迭代器创建无穷序列的小例子，通过这个例子我们再来深入理解与迭代器相关的概念。


```
const random = {
  [Symbol.iterator]: () => ({
    next: () => ({ value: Math.random() })
  })
}
 
// 运行这行代码会怎么样？
[...random]
// 这行呢？
Array.from(random)
```
这个例子使用两个ES6的箭头函数定义了两个方法，创建了三个对象。

最内层的对象{ value: Math.random() }很明显是一个“迭代器结果”（IteratorResult）对象，因为它有一个value属性和一个……，等等，done属性呢？这里没有定义done属性，所以每次迭代（调用next()）时访问IteratorResult.done都会返回false；所以这个迭代器结果的定义相当于{ value: Math.random() , done: false }。显然，done永远不可能是true，所以这是一个无穷随机数序列！


```
interface IteratorResult {
  done: boolean;
  value: any;
}
```
再往外看，返回这个迭代器结果对象的箭头函数被赋值给了外层对象的next()方法。根据Iterator接口的定义，如果一个对象包含一个next()方法，而这个方法的返回值又是一个迭代器结果，那么这个对象是什么？没错，就是迭代器。好，第二个对象是一个迭代器！


```
interface Iterator {
  next(): IteratorResult;
}
```

再往外看，返回这个迭代器对象的箭头函数被赋值给了外层对象的[Symbol.iterator]()方法。根据Iterable接口的定义，如果一个对象包含一个[Symbol.iterator]()方法，而这个方法的返回值又是一个迭代器，那么这个对象是什么？没错，就是可迭代对象。


```
interface Iterable {
  [Symbol.iterator](): Iterator
}
```

好，到现在我们应该彻底理解迭代器及其相关概念了。下面继续看例子。前面的例子定义了一个可迭代对象random，这个对象的迭代器可以无限返回随机数，所以：


```
// 运行这行代码会怎么样？
[...random]
// 这行呢？
Array.from(random)
```
是的，这两行代码都会导致程序（或运行时）崩溃！因为迭代器会不停地运行，阻塞JavaScript执行线程，最终可能因占满可用内存导致运行时停止响应，甚至崩溃。

# Generator

依例，上接口：

```
interface Generator extends Iterator {
    next(value?: any): IteratorResult;
    [Symbol.iterator](): Iterator;
    throw(exception: any);
}
```
能看来出生成器是什么吗？仅从它的接口来看，它既是一个迭代器，又是一个可迭代对象。没错，生成器因此又是迭代器的“加强版”，为什么？因为生成器还提供了一个关键字yield，它返回的序列值会自动包装在一个IteratorResult（迭代器结果）对象中，省去了我们手工编写相应代码的麻烦。下面就是一个生成器函数的定义：


```
function *gen() {
  yield 'a'
  yield 'b'
  return 'c'
}
```

哎，接口定义的生成器不是一个对象吗，怎么是一个函数啊？
实际上，说生成器是对象或是函数都不确切。但我们知道，调用生成器函数会返回一个迭代器（接口描述的就是这个对象），这个迭代器可以控制返回它的生成器函数封装的逻辑和数据。从这个意义上说，生成器由生成器函数及其返回的迭代器两部分组成。再换句话说，生成器是一个笼统的概念，是一个统称。（别急，一会你就明白这样理解生成器的意义何在了。）

本节刚开始说了，生成器（返回的对象）“既是一个迭代器，又是一个可迭代对象”。下面我们就来验证一下：


```
const chars = gen()
typeof chars[Symbol.iterator] === 'function' // chars是可迭代对象
typeof chars.next === 'function'  // chars是迭代器
chars[Symbol.iterator]() === chars  // chars的迭代器就是它本身
console.log(Array.from(chars))  // 可以对它使用Array.from
// ['a', 'b']
console.log([...chars]) // 可以对它使用Array.from
// ['a', 'b']
```

通过代码中的注释我们得到了全部答案。这里有个小问题：“为什么迭代这个生成器返回的序列值中不包含字符'c'呢？”

原因在于，yield返回的迭代器结果对象的done属性值都为false，所以'a'和'b'都是有效的序列值；而return返回的虽然也是迭代器结果对象，但done属性的值却是true，true表示序列结束，所以'c'不会包含在迭代结果中。（如果没有return语句，代码执行到生成器函数末尾，会隐式返回{ value: undefined, done: true}。相信这一点不说你也知道。）

以上只是生成器作为“加强版”迭代器的一面。接下来，我们要接触生成器真正强大的另一面了！

生成器真正强大的地方，也是它有别于迭代器的地方，在于它不仅能在每次迭代返回值，而且还能接收值。（当然，生成器的概念里本身就有生成器函数嘛！函数当然可以接收参数喽。）等等，可不仅仅是可以给生成器函数传参，而是还可以给yield表达式传参！


```
function *gen(x) {
  const y = x * (yield)
  return y
}

const it = gen(6)
it.next()
// {value: undefined, done: false}
it.next(7)
// {value: 42, done: true}
```

在上面这个简单的生成器的例子中。我们定义了一个生成器函数*gen()，它接收一个参数x。函数体内只有一个yield表达式，好像啥也没干。但是，yield表达式似乎是一个“值的占位符”，因为代码在某个时刻会计算变量x与这个“值”的乘积，并把该乘积赋值给变量y。最后，函数返回y。

这有点费解，下面我们一步一步分析。

1. 调用gen(6)创建生成器的迭代器it（前面说了，生成器包含迭代器及返回它的生成器函数），传入数值6。
2. 调用it.next()启动生成器。此时生成器函数的代码执行到第一个yield表达式处暂停，并返回undefined。（yield并没闲着，它看后面没有显式要返回的值，就只能返回默认的undefined。）
3. 调用it.next(7)恢复生成器执行。此时yield接收到传入的数值7，立即恢复生成器函数代码的执行，并把自己替换成数值7。
4. 代码计算：6 * 7，得到42，并把42赋给变量y，最后返回y。
5. 生成器函数最终返回的值就是：{value: 42, done: true}

这个例子中只有一个yield，假如还有更多的yield，则第4步会到第二个yield处再次暂停生成器函数的执行，返回一个值，之后重复第3、4步，即还可以通过再调用it.next()向生成器函数中传入值。

我们简单总结一下，每次调用it.next()，可能有下列4种情况导致生成器暂停或停止执行：

- yield表达式返回序列中下一个值
- return语句返回生成器函数的值（{ done: true }）
- throw语句完全停止生成器执行（后面会详细解释）
- 到达生成器函数最后，隐式返回{ value: undefined, done: true}

下面来看一个使用 await 的例子：

```
let a = 0
let b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 1
```
对于以上代码你可能会有疑惑，让我来解释下原因
- 首先函数 b 先执行，在执行到 await 10 之前变量 a 还是 0，因为 await 内部实现了 generator ，generator 会保留堆栈中东西，所以这时候 a = 0 被保存了下来
- 因为 await 是异步操作，后来的表达式不返回 Promise 的话，就会包装成 Promise.reslove(返回值)，然后会去执行函数外的同步代码
- 同步代码执行完毕后开始执行异步代码，将保存下来的值拿出来使用，这时候 a = 0 + 10

# 异步迭代生成器
前面我们看到的对生成器的迭代传值，包括传递错误，都是同步的。实际上，生成器的yield表达式真正（哦，又一个“真正”）强大的地方在于：它在暂停生成器代码执行以后，不是必须等待迭代器代码同步调用it.next()方法给它返回值，而是可以让迭代器在一个异步操作的回调中取得返回值，然后再通过it.next(res)把值传给它。

明白了吗？yield可以等待一个异步操作的结果。从而让本文开始提到的这种看似不可能的情况变成可能：


```
const r1 = ajax('url')
console.log(r1)
// undefined
```

怎么变呢，在异步操作前加个yield呀：


```
const r1 = yield ajax('url')
console.log(r1)
// 这次r1就是真正的响应结果了
```

我们还是以一个返回Promise的异步操作为例来说明这一点比较好。因为基于回调的异步操作，很容易可以转换成基于Promise的异步操作（比如jQuery的$.ajax()或通过util.promisify把Node.js中的异步方法转换成Promise）。

例子来了。这是一个纯Promise的例子。


```
function foo(x,y) {
  return request(
    "http://some.url.1/?x=" + x + "&y=" + y
  );
}

foo(11, 31)
  .then(
    function(text){
      console.log(text);
    },
    function(err){
      console.error(err);
    }
);
```

函数foo(x, y)封装了一个异步request请求，返回一个Promise。调用foo(11, 31)传入参数后，request就向拼接好的URL发送请求，返回待定（pending）状态的Promise对象。请求成功，则执行then()中注册的兑现反应函数，处理响应；请求失败，则执行拒绝反应函数，处理错误。

接下来我们要做的，就是将上面的代码与生成器结合，让生成器只关注发送请求和取得响应结果，而把异步操作的等待和回调处理逻辑作为实现细节抽象出来。（“作为细节”，对，我们的目标是只关注请求和结果，过程嘛，都是细节，哈哈～。）

```
function foo(x, y) {
  return request(
    "http://some.url.1/?x=" + x + "&y=" + y
  );
}
function *main() {
  try {
    const result = yield foo(11, 31);  // 异步函数调用！
    console.log( result );
  } catch (err) {
    console.error( err );
  }
}
const it = main(); 
const p = it.next().value; // 启动生成器并取得Promise `p`

p.then( // 等待Promise `p`解决
  function(res){
    it.next(res);  // 把`text`传给`*main()`并恢复其执行
  },
  function(err){
    it.throw(err);  // 把`err`抛到`*main()`
  }
);
```

注意，生成器函数（*main）的yield表达式中出现了异步函数调用：foo(11, 31)。而我们就要做的，就是在迭代器代码中通过it.next()拿到这个异步函数调用返回的Promise，然后正确地处理它。怎么处理？我们看代码。

创建生成器的迭代器之后，const p = it.next().value;返回了Promise p。在p的兑现反应函数中，我们把拿到的响应res通过it.next(res)调用传回了生成器函数中的yield。yield拿到响应结果res之后，立即恢复生成器代码的执行，把res赋值给变量result。于是，我们成功地在生成器函数中，以同步代码的书写方式取得了异步请求的响应结果！神奇不？

好啦，目标达成：我们利用生成器的同步代码，实现了对异步操作的完美控制。然而，还有一个问题。上面例子中的生成器只包装了一个异步操作，如果是多个异步操作怎么办呢？这时候，最好有一段通用的用于处理生成器函数的代码，无论其中包含多少异步操作，这段代码都能自动完成对Promise的接收、等待和响应/错误传递等这些“细节”工作。

那不就是一个基于Promise的生成器运行程序吗？

# 通用的生成器运行程序
综前所述，我们想要的是这样一个结果：


```
function example() {
  return run(function *() {
    const r1 = yield new Promise(resolve =>
      setTimeout(resolve, 500, 'slowest')
    )
    const r2 = yield new Promise(resolve =>
      setTimeout(resolve, 200, 'slow')
    )
    return [r1, r2]
  })
}
 
example().then(result => console.log(result))
// ['slowest', 'slow']
```

即定义一个通用的运行函数run，它负责处理传给它的生成器函数中包装的任意多个异步操作。针对每个操作，它都会正确地返回异步结果，或者向生成器函数中抛出异常。而运行这个函数的最终结果，也是返回一个Promise，这个Promise包含生成器函数返回的所有异步操作的结果（上例）。

# 为什么说Async函数是语法糖
有了这个运行函数，我们可以比较一下下面两个example()函数:

![image](184441792CB74C90BA8ABBAC80DDD908)

第一个example()是通过生成器运行程序控制异步代码；第二个example()是一个异步（Async）函数，通过async/await控制异步代码。

它们的区别只在于前者多了一层run函数封装，使用yield而不是await，而且没有async关键字修饰。除此之外，核心代码完全一样！

现在，大家再看到类似下面的异步函数，能想到什么？


```
async function example() {
  const r1 = await new Promise(resolve =>
    setTimeout(resolve, 500, 'slowest')
  )
  const r2 = await new Promise(resolve =>
    setTimeout(resolve, 200, 'slow')
  )
  return [r1, r2]
}
 
example().then(result => console.log(result))
// ['slowest', 'slow']
```

是的，Async函数或者说async/await就是基于Promise、Iterator和Generator构造的一块充满苦涩和香甜、让人回味无穷的“语法糖”！记住，Async function = Promise + Iterator + Generator，或者“Async函数原来是PIG”。

# 链接
[Async函数原来是PIG](https://www.webstacks.cn/tutorial/1584.html)





