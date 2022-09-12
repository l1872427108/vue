(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{440:function(t,a,n){"use strict";n.r(a);var s=n(56),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"key原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key原理"}},[t._v("#")]),t._v(" key原理")]),t._v(" "),n("h3",{attrs:{id:"应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li v"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item in items"')]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item.id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Item key"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+new Date()"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),n("p",[t._v("第一个就是使用 v-for 时，需要给单元加上 key。")]),t._v(" "),n("p",[t._v("第二个就是用 +new Date() 生成的时间戳作为 key，可以强制触发重新渲染。")]),t._v(" "),n("p",[t._v("key 是每一个 vnode 的唯一 id，是 diff 一种优化策略，可以根据 key，更加精准，快速的找到对应的 vnode 节点。")]),t._v(" "),n("h3",{attrs:{id:"如果选择是否使用-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果选择是否使用-key"}},[t._v("#")]),t._v(" 如果选择是否使用 key")]),t._v(" "),n("p",[t._v("一般是尽量加上为 for 加上 key 属性，除非遍历输出 DOM 非常的简单，或者是刻意依赖默认行为来提升性能。")]),t._v(" "),n("h3",{attrs:{id:"结合-vdom-来分析有-key-和-没有key-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结合-vdom-来分析有-key-和-没有key-的区别"}},[t._v("#")]),t._v(" 结合 vdom 来分析有 key 和 没有key 的区别")]),t._v(" "),n("p",[t._v("如果判定两个节点是同一个节点:")]),t._v(" "),n("ul",[n("li",[t._v("key相同. 默认没有的情况下，都是为 undefined, 是相同的。")]),t._v(" "),n("li",[t._v("tag 标签是否相同。")]),t._v(" "),n("li",[t._v("isComment 是否相同。")]),t._v(" "),n("li",[t._v("data 属性是否都是存在的。")]),t._v(" "),n("li",[t._v("如果是 input， type 必须相同。")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameVnode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isComment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isComment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameInputType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTrue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isAsyncPlaceholder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncFactory "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncFactory "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isUndef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncFactory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",[n("li",[t._v("没有 key 的情况\nnewCh 数组有六个字元素 d、e、b、f、d、a\noldCh 数组有五个字元素 a、b、c、d、e")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    判断一：查看 oldStartVnode 是否存在。\n    判断二：查看 oldEndVnode 是否存在。\n    判断三：比较新前与旧前。\n    判断四：比较新后与旧后。\n    判断五：比较新后与旧前。\n    判断六：比较新前与旧后。\n    判断七：比较 key。\n    \n    let oldStartIdx = 0\n    let oldEndIdx = oldCh.length - 1\n    let oldStartVnode = oldCh[0]\n    let oldEndVnode = oldCh[oldEndIdx]\n\n\n    let newStartIdx = 0\n    let newEndIdx = newCh.length - 1\n    let newStartVnode = newCh[0]\n    let newEndVnode = newCh[newEndIdx]\n\n    进入循环中\n    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {}\n\n    \n    第一次进入 while 循环。\n    进入判断五，a 和 a 相同的，就调用 patchVnode 复用 dom 元素并递归比较子元素， 然后移动元素将 a 移动到 e 后面。oldCh 起始指针后移一位。newCh的起始指针前移一位. 此时的 也没 dom 元素将为 b、c、d、e、a.  newStartIdx指向oldStartIdx指向d。 oldStartIdx指向 b.\n\n    第二次进入 while 循环。\n    进入判断七， 并且也是没有 key 的，然后创建元素，将 d 插入到 b 的前面。 此时 dom 变为 d、b、c、d、e、a.  将 newStartIdx 后移动一位。\n    \n    第三次进入 while 循环。第六种情况, e元素会把插入到b元素之前, dom变为 debcda.\n\n    第四次进入 while 循环. 第三种情况, 直接复用b元素。此时页面中dom依然为debcda.\n\n    第五次进入 while 循环, 第四种情况 , 直接复用d元素, dom依然为debcda.\n\n    第六次while循环, 第七种情况, 创建新的元素f并插入到c前面, dom变为debfcda.\n\n    newStartIdx会大于newEndIdx, 终止循环, 在循环之后还有删除无用的旧结点的操作.\n*/")]),t._v("\n\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("有 key 的情况\nnewCh: p[key=3]、span[key=2]、p、div[key=1]、a、span\noldCh: a、div[key=1]、footer[key=3]、span[key=2]、p，newCh")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    第一次while循环, 第七种情况， 此时会生成oldKeyToIdx\n    oldKeyToIdx = {\n        '1': 1,\n        '2': 3,\n        '3': 2\n    }\n    newStartVnode元素p[key=3]根据key值比较, elmToMove会指向footer[key=3]\n    标签名不一样，sameVNode判断会返回false。 直接插入到a前面， \n    dom变为p[key=3]、a、div[key=1]、footer[key=3]、span[key=2]、p\n\n\n\n    第二次进入 while 循环, 走到第七种情况\n    newStartVnode元素span[key=2]根据key值比较, elmToMove会指向span[k=2]，两元素可以复用\n    span[k=2]会被插入到a前面\n    dom变为p[key=1]、span[key=2]、a、div[key=1]、footer[k=3]、p\n    同时oldCh变为[a, div[key=1], footer[k=3], undefined, p]\n\n    第三次while循环, 第六种情况, p元素会插入到a元素\n    dom顺序变为p[key=1]、span[key=2]、p、a、div[key=1]、footer[k=3]\n\n\n    第四次while循环 oldEndVnode返回undefined所以会走到第二种情况.\n\n\n    第五次while循环, 第七种情况\n    newStartVnode根据key=1找到可以复用的div[key=1], 该元素会插入到a元素之前\n    dom变为p[key=1]、span[key=2]、p、div[key=1]、a、footer[k=3]\n    oldCh变为[a, undefined, footer[k=3], undefined, p]\n\n\n    第六次while循环, 第三种情况.\n\n    第七次while循环, oldStartVnode返回undefined所以会走到第一种情况.\n\n    第八次while循环，创建span，并插入到footer[k=3]之前。\n    dom变为p[key=1]、span[key=2]、p、div[key=1]、a、span、footer[k=3]\n\n    终止循环 删除多余的footer[k=3]\n*/")]),t._v("\n\n")])])]),n("p",[t._v("设置key能够大大减少对页面的DOM操作，提高了diff效率, 可以减少创建 DOM，而是更多的移动。")]),t._v(" "),n("p",[t._v("默认采用了 就地复用策略。Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单的复用每个元素。")])])}),[],!1,null,null,null);a.default=e.exports}}]);