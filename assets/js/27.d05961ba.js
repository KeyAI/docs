(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{381:function(t,r,a){"use strict";a.r(r);var n=a(42),e=Object(n.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_11-22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-22"}},[t._v("#")]),t._v(" 11-22")]),t._v(" "),a("blockquote",[a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zh.javascript.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代 JavaScript 教程"),a("OutboundLink")],1)])])]),t._v(" "),a("blockquote",[a("p",[t._v("进度：🍅*5")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zh.javascript.info/generators",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generator"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.javascript.info/async-iterators-generators",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步迭代和 generator"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.javascript.info/modules-intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("模块 (Module) 简介"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.javascript.info/import-export",target:"_blank",rel:"noopener noreferrer"}},[t._v("导出和导入"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.javascript.info/modules-dynamic-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态导入"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.javascript.info/eval",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eval：执行代码字符串"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.javascript.info/bigint",target:"_blank",rel:"noopener noreferrer"}},[t._v("BigInt"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"原子笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子笔记"}},[t._v("#")]),t._v(" 原子笔记")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果同一个模块被导入到多个其他位置，那么它的代码仅会在第一次导入时执行，然后将导出（export）的内容提供给所有的导入（importer）。即导出仅创建一次，然后会在导入之间共享。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 📁 1.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./admin.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nadmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pete"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 📁 2.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./admin.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pete")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("模块相较于常规脚本有几点差别：")]),t._v(" "),a("ul",[a("li",[t._v("默认是延迟解析的（deferred）。")]),t._v(" "),a("li",[t._v("Async 可用于内联脚本。")]),t._v(" "),a("li",[t._v("要从另一个源（域/协议/端口）加载外部脚本，需要 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS"),a("OutboundLink")],1),t._v(" header。")]),t._v(" "),a("li",[t._v("重复的外部脚本会被忽略。")])])]),t._v(" "),a("li",[a("p",[t._v("在代码块"),a("code",[t._v("{...}")]),t._v(" 中的 import/export 语句无效（即必须为顶级语句）。")])])])])}),[],!1,null,null,null);r.default=e.exports}}]);