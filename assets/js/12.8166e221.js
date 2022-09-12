(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{410:function(e,v,l){"use strict";l.r(v);var o=l(56),_=Object(o.a)({},(function(){var e=this,v=e.$createElement,l=e._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"mvc和mvvm"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mvc和mvvm"}},[e._v("#")]),e._v(" MVC和MVVM")]),e._v(" "),l("p",[e._v("前端架构模式，通过分离关注点来改进代码组织方式，一种架构模式往往能使用多种设计模式.")]),e._v(" "),l("h3",{attrs:{id:"mvc"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[e._v("#")]),e._v(" MVC")]),e._v(" "),l("p",[e._v("全名是 Model View Controller，代表模块-视图-控制器的缩写。是一种将业务逻辑、数据、界面相分离的组织结构。")]),e._v(" "),l("p",[e._v("Model: 是用于封装和应用程序业务逻辑相关的数据以及处理数据的方法。")]),e._v(" "),l("p",[e._v("View: 作为视图层，主要是要来在页面展示数据, 通常依据模型数据创建.")]),e._v(" "),l("p",[e._v("Controller: 作为模型和视图之间的纽带存在，Controller 把 Model 数据赋予 View 来显示，或者将 View 接收到的用户输入把这些数据传给 Model 来保存到本地或服务器。MVC 将响应机制封装在 Controller 之上。")]),e._v(" "),l("p",[e._v("交互：")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("view和Controller\n就比如页面上点击事件，由 view 来接收的，但是处理这个事件的是Controller，View 只负责传递事件，但不关系命中谁，这是 View 和 Controller 的一种交互方式，叫 action-targer。")])]),e._v(" "),l("li",[l("p",[e._v("Model和Controller\nModel 可以看作是数据的管理者，一旦数据发生了变化，View 的显示数据就应该发生变化，它们之间是一种同步关系，Controller 就会发生作用。")])])]),e._v(" "),l("p",[e._v("优点：耦合性低、重用性高、生命周期成本低、可维护高。")]),e._v(" "),l("p",[e._v("缺点：")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("MVC 模式的业务逻辑主要集中在 Controller，前端的 View 其实已经具备了独立处理用户事件的能力，当每个事件都流经Controller时，这层会变得十分臃肿，视图与控制器相互分离却紧密连接，妨碍了它们的独立性。")])]),e._v(" "),l("li",[l("p",[e._v("Model负责数据的取和存，但是除了存和取之外，还有一个重要的操作：解析。比如：可能需要把原始数据转为View才能使用的数据，就需要进一步的解析，把不属于 controller 的操作放到 控件里。为了更近一步的抽分，也就迫使调整架构。")])]),e._v(" "),l("li",[l("p",[e._v("视图对模型数据的低效访问。")])])]),e._v(" "),l("h3",{attrs:{id:"mvvm"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[e._v("#")]),e._v(" MVVM")]),e._v(" "),l("p",[e._v("除了上述架构确实是缺点的，其实随着前端项目的越来越复杂，混杂 html、css、js ，代码的组织和维护难度更加复杂。视图结构也需要进行进行调整。")]),e._v(" "),l("p",[e._v("早期我们将数据写入节点中，我们需要操作 DOM 节点，使用浏览器提供的原声 API。")]),e._v(" "),l("p",[e._v("随着 jQuery 的横空出世，我们可以使用简洁的 API 来操作 DOM，更加的轻巧。但是也需要我们进行操作 DOM。")]),e._v(" "),l("p",[e._v("MVVM：")]),e._v(" "),l("ol",[l("li",[e._v("Model: 可以称为是数据层，仅仅关注数据本身。")]),e._v(" "),l("li",[e._v("view: 通过使用模版语法来声明式的将数据渲染进 DOM。当ViewModel对Model进行更新的时候，会通过数据绑定更新到View")]),e._v(" "),l("li",[e._v("ViewModel: 业务逻辑也主要集中在这里, ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。")])]),e._v(" "),l("p",[e._v("这样我们就可以不用关注DOM结构，把关注点分在代码逻辑上即可，关注点分离。")]),e._v(" "),l("p",[e._v("当用户操作了界面，如果需要进行业务的处理，都会进行网络请求，去请求后端的服务器，此时，我们的1这个请求，就会被后端的 APP.js 监听到。Controller 不是不存在了，只是弱化了它的功能，Controller 来持有 VM。这样可以使得架构功能更加清晰。")]),e._v(" "),l("p",[e._v("优点：低耦合、可重用性、独立开发。")]),e._v(" "),l("h3",{attrs:{id:"mvvm的优缺点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mvvm的优缺点"}},[e._v("#")]),e._v(" MVVM的优缺点")]),e._v(" "),l("ol",[l("li",[e._v('优点：\n分离视图（View）和模型（Model），降低代码耦合, 提⾼视图或者 逻辑的重⽤性: ⽐如视图（View）可以独⽴于 Model 变化和修改，⼀ 个 ViewModel 可以绑定不同的"View"上, 当 View 变化的时候 Model 不可以不变，当 Model 变化的时候 View 也可以不变。你可以把⼀些 视图逻辑放在⼀个 ViewModel⾥⾯，让很多 view 重⽤这段视图逻辑')])]),e._v(" "),l("p",[e._v("提⾼可测试性: ViewModel 的存在可以帮助开发者更好地编写测试代码。")]),e._v(" "),l("p",[e._v("⾃动更新dom: 利⽤双向绑定,数据更新后视图⾃动更新,让开发者从 繁琐的⼿动 dom 中解放")]),e._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[e._v("缺点:\nBug 很难被调试: 因为使⽤双向绑定的模式，当你看到界⾯异常了，有可能是你 View 的代码有 Bug，也可能是 Model 的代码有问题。数 据绑定使得⼀个位置的 Bug 被快速传递到别的位置，要定位原始出问 题的地⽅就变得不那么容易了。另外，数据绑定的声明是指令式地写 在 View 的模版当中的，这些内容是没办法去打断点 debug 的。")])]),e._v(" "),l("p",[e._v("⼀个⼤的模块中 model 也会很⼤，虽然使⽤⽅便了也很容易保证了数 据的⼀致性，当时⻓期持有，不释放内存就造成了花费更多的内存。")]),e._v(" "),l("p",[e._v("对于⼤型的图形应⽤程序，视图状态较多，ViewModel 的构建和维护 的成本都会⽐较⾼")])])}),[],!1,null,null,null);v.default=_.exports}}]);