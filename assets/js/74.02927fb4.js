(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{472:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"路由的hash和history模式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由的hash和history模式的区别"}},[t._v("#")]),t._v(" 路由的hash和history模式的区别")]),t._v(" "),a("p",[t._v("Vue-Router 有两种模式：hash 模式和 history 模式。默认的路由模式是 hash 模式。")]),t._v(" "),a("ol",[a("li",[t._v("hash 模式\nhash 模式是开发中默认的模式，它的URL带着一个#，例如：http://www.cbc/#/vue, 它的hash就是#/vue。")])]),t._v(" "),a("p",[t._v("特点：hash 值会出现在URL里面，但是不会出现在 HTTP 请求中，对后端完全没有影响。所以改变 hash 值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的 IE 浏览器也支持这种模式。hash 路由被称为是前端路由，已经成为 SPA（单页面应用）的标配")]),t._v(" "),a("p",[t._v("原理：hash 模式的主要原理就是 onhashchange()事件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onhashchange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用 omhashchange() 事件的好处就是，在页面的 hash 值发送变化时，无需向后端发起请求,\nwindow 就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash值变化对应的 URL 都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退了。虽然是没有请求后端服务器，但是页面的hash值和对应的URL关联起来了。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("history 模式\n简介：history 模式的 URL 中没有 #, 它使用的是传统的路由分发模式，用户在输入一个URL时，服务器会收到这个请求，并解析这个URL，然后做出相应的逻辑处理。")])]),t._v(" "),a("p",[t._v("特点：当使用 history 模式时，URL就像 http://abc.com/user/id。相比 hash 模式更加好看。但是，history 模块需要后台配置支持。如果后台没有正确配置，访问时会返回 404.")]),t._v(" "),a("p",[t._v("API: history api 可以分为两大部分，切换历史状态和修改历史状态：")]),t._v(" "),a("p",[t._v("修改历史状态：包括了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了 url，但浏览器不会立即向后端发送请求。如果要做到改变 url 但又不刷新页面的效果，就需要用上这两个 API。")]),t._v(" "),a("p",[t._v("切换历史记录：包括 forward()、back()、go() 三个方法，对应浏览器的前进，后退，跳转操作。")]),t._v(" "),a("p",[t._v("虽然 history 模式丢弃了丑陋的 #。但是，它也有自己的缺点，就是在刷新页面时，如果没有相应的路由或资源，就会刷出 404.")]),t._v(" "),a("p",[t._v("如果想要切换到 history，就要进行配置（后端也需要进行配置）")]),t._v(" "),a("p",[t._v("const router = new VueRouter({\nmode: 'history'\n})")]),t._v(" "),a("h3",{attrs:{id:"两种模式对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种模式对比"}},[t._v("#")]),t._v(" 两种模式对比")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("调用 history.pushState() 相比于直接修改 hash，存在以下优势: pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash只可以修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL。")])]),t._v(" "),a("li",[a("p",[t._v("pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中。")])]),t._v(" "),a("li",[a("p",[t._v("pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只能添加短字符串。")])]),t._v(" "),a("li",[a("p",[t._v("pushState() 可额外设置 title 属性供后续使用")])]),t._v(" "),a("li",[a("p",[t._v("hash 模式下，仅 hash 符号之前的 url 会被包含在请求中，后端如果没有对路由的全覆盖，也不会返回 404 错误；\nhistory 模式下，前端的 URL 必须和实际向后端发起请求的 url 一致，如果没有对路由处理，将返回 404 错误。")])]),t._v(" "),a("li",[a("p",[t._v("hash 模式和 history 模式都有各自的优势和缺陷，还是要根据实际情况选择性的使用。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);