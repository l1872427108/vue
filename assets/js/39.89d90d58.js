(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{437:function(t,e,a){"use strict";a.r(e);var r=a(56),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"data-属性为什么是函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-属性为什么是函数"}},[t._v("#")]),t._v(" data 属性为什么是函数")]),t._v(" "),a("p",[t._v("每一个组件都是一个可复用的 Vue 实例，一个组件被创建好之后，可以被用在各个地方。如果 data 是一个存粹的对象，则所有的实例将会共享引用同一个数据对象。")]),t._v(" "),a("p",[t._v("如果 data 是一个函数，那么每次创建一个新的实例，调用调用一个新的 data 函数。将 data 数据指向一块新的内存地址。")]),t._v(" "),a("p",[t._v(".vue 文件将被 vue-loader 处理，.vue 文件内部的模版会在构建时预编译成渲染函数，所以不需要编译的，template 会被编译为 render 函数，script 会被编译成一个对象变量。")]),t._v(" "),a("p",[t._v("将 script 编译后的对象传入 render 中，并在 render 函数中调用 vue.createElement 构建 Vue 组件。")]),t._v(" "),a("p",[t._v("在 createElement 中，如果是 vue 组件的话，通过 createComponent 构建组件。")]),t._v(" "),a("p",[t._v("将 script 编译出来的对象变量通过上下文的 $options 中取出，使用 Vue.extends 构建出一个新的 Vue 对象。")]),t._v(" "),a("p",[t._v("vue 文件经过 babel 编译，导出的对象直接替换成一个对象变量，然后传入到对应的组件构造函数中。就会产生共享问题。")]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("ul",[a("li",[t._v("根实例对象 data 可以是一个对象也可以是函数（根实例是单例）, 不会产生数据污染情况。")]),t._v(" "),a("li",[t._v("data 必须是一个函数，在 initData 时会将其作为工厂函数返回全新的 data 对象。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);