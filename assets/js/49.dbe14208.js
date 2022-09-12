(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{447:function(t,s,a){"use strict";a.r(s);var n=a(56),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"v-if和v-for不建议一起使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-for不建议一起使用"}},[t._v("#")]),t._v(" v-if和v-for不建议一起使用")]),t._v(" "),a("p",[t._v("v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 true值的时候被渲染")]),t._v(" "),a("p",[t._v("v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组或者对象，而 item 则是被迭代的数组元素的别名")]),t._v(" "),a("h3",{attrs:{id:"优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),a("p",[t._v("v-if与v-for都是vue模板系统中的指令")]),t._v(" "),a("p",[t._v("在vue模板编译的时候，会将指令系统转化成可执行的render函数")]),t._v(" "),a("p",[t._v("_l 是 vue 的列表渲染函数，函数内部会进行一次 if 判断")]),t._v(" "),a("p",[t._v("v-for 优先级要高于 v-if")]),t._v(" "),a("p",[t._v("再将 v-for 与 v-if 置于不同标签")]),t._v(" "),a("p",[t._v('<template v-if=">\n[(isShow)?[v(\\n), _l]]')]),t._v(" "),a("p",[t._v("v-for 与 v-if 作用在不同标签的时候，是先进行判断，再进行列表的渲染")]),t._v(" "),a("p",[t._v("在进行 if 判断的时候，v-for 是先比 v-if 判断")]),t._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("p",[t._v("永远不要把 v-if 和 v-for 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）")]),t._v(" "),a("p",[t._v("如果避免出现这种情况，则在外层嵌套template（页面渲染不生成dom节点），在这一层进行v-if判断，然后在内部进行v-for循环")]),t._v(" "),a("p",[t._v("如果条件出现在循环内部，可通过计算属性computed提前过滤掉那些不需要显示的项")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("items")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isShow\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);