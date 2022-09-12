(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{408:function(t,e,v){"use strict";v.r(e);var i=v(56),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"nexttick原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nexttick原理"}},[t._v("#")]),t._v(" $nextTick原理")]),t._v(" "),v("p",[t._v("Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的 一种应用")]),t._v(" "),v("p",[t._v("nextTick 的 核 心 是 利 用 了 如 Promise 、 MutationObserver 、 setImmediate、setTimeout 的原生 JavaScript 方法来模拟对应的 微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任 务队列来实现 Vue 框架中自己的异步回调队列。")]),t._v(" "),v("p",[t._v("nextTick 不仅是 Vue 内部的异步队列的调用方法, 同时也允许开发 者在实际项目中使用这个方法来满足实际应用中对 DOM 更新数据时 机的后续逻辑处理")]),t._v(" "),v("p",[t._v("nextTick 是典型的将底层 JavaScript 执行原理应用到具体案例中 的示例，引入异步更新队列机制的原因∶")]),t._v(" "),v("p",[t._v("如果是同步更新，则多次对一个或多个属性赋值，会频繁触发 UI/DOM 的渲染，可以减少一些无用渲染")]),t._v(" "),v("p",[t._v("同时由于 VirtualDOM 的引入，每一次状态发生变化后，状态变化的 信号会发送给组件，组件内部使用 VirtualDOM 进行计算得出需要更 新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后 的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所 以异步渲染变得更加至关重要")]),t._v(" "),v("p",[t._v("Vue 采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作 DOM。有时候，可能遇到这样的情况，DOM1 的数据发生了变化，而 DOM2 需要从 DOM1 中获取数据，那这时就会发现 DOM2 的视图并没有更新， 这时就需要用到了 nextTick 了")]),t._v(" "),v("p",[t._v("由于 Vue 的 DOM 操作是异步的，所以，在上面的情况中，就要将 DOM2 获取数据的操作写在$nextTick 中")]),t._v(" "),v("p",[t._v("在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变 化的 DOM 结构的时候，这个操作就需要方法在 nextTick()的回调函 数中。")]),t._v(" "),v("p",[t._v("在 vue 生命周期中，如果在 created()钩子进行 DOM 操作，也一定要 放在 nextTick()的回调函数中")]),t._v(" "),v("p",[t._v("因为在 created()钩子函数中，页面的 DOM 还未渲染，这时候也没办 法操作 DOM，所以，此时如果想要操作 DOM，必须将操作的代码放在 nextTick()的回调函数中")])])}),[],!1,null,null,null);e.default=n.exports}}]);