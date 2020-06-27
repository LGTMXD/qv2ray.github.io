(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{402:function(v,r,a){"use strict";a.r(r);var t=a(25),_=Object(t.a)({},(function(){var v=this,r=v.$createElement,a=v._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"使用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[v._v("#")]),v._v(" 使用插件")]),v._v(" "),a("ul",[a("li",[v._v("本页主要说明 Qv2ray 插件系统的使用方法")]),v._v(" "),a("li",[v._v("要使用插件，Qv2ray 的版本至少应为 "),a("strong",[a("code",[v._v("Qv2ray v2.5.0-pre1 BuildVersion: 5264")])])])]),v._v(" "),a("h2",{attrs:{id:"何为插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何为插件"}},[v._v("#")]),v._v(" 何为插件")]),v._v(" "),a("p",[v._v("一个 Qv2ray 插件，技术上地说，是一个实现了 "),a("code",[v._v("QvPlugin")]),v._v(" 接口、从而能扩展 Qv2ray 功能的共享库文件。")]),v._v(" "),a("p",[v._v("实际上，Qv2ray 插件是 Qv2ray 的扩展，能让你使用更多特性。")]),v._v(" "),a("p",[v._v("当前，Qv2ray 项目组共发布如下 4 个我们维护的插件：")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Qv2ray/QvPlugin-SSR",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[v._v("QvSSRPlugin")]),a("OutboundLink")],1),v._v(" - 让你能在 Qv2ray 中使用 ShadowsocksR")]),v._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Qv2ray/QvPlugin-Trojan",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[v._v("QvTrojanPlugin")]),a("OutboundLink")],1),v._v(" - 让你能在 Qv2ray 中使用 Trojan")]),v._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Qv2ray/QvPlugin-NaiveProxy",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[v._v("QvNaiveProxyPlugin")]),a("OutboundLink")],1),v._v(" - 让你能在 Qv2ray 中使用 NaiveProxy")]),v._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Qv2ray/QvPlugin-Command",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[v._v("QvCommandPlugin")]),a("OutboundLink")],1),v._v(" - 当特殊事件发生时，运行任意指定的命令")])]),v._v(" "),a("h2",{attrs:{id:"插件的获取与使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件的获取与使用"}},[v._v("#")]),v._v(" 插件的获取与使用")]),v._v(" "),a("p",[v._v("你可以下载并启用任意数量的插件。")]),v._v(" "),a("p",[v._v("要安装一个插件，你需要进行下面的操作：")]),v._v(" "),a("h3",{attrs:{id:"_1-获取插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取插件"}},[v._v("#")]),v._v(" 1. 获取插件")]),v._v(" "),a("ul",[a("li",[v._v("部分插件可能会通过包管理系统（如 "),a("RouterLink",{attrs:{to:"/getting-started/step1.html#scoop-针对-windows-用户"}},[v._v("Scoop")]),v._v("）分发，若合意可直接使用。\n"),a("ul",[a("li",[a("em",[v._v("若你已通过此方法安装了插件，接下来请转至 "),a("strong",[v._v("第三步")]),v._v("。")])])])],1),v._v(" "),a("li",[v._v("根据实际的操作系统，从插件的 Release 页面下载。")])]),v._v(" "),a("h3",{attrs:{id:"_2-放置插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-放置插件"}},[v._v("#")]),v._v(" 2. 放置插件")]),v._v(" "),a("ul",[a("li",[v._v("点击 "),a("strong",[a("a",{attrs:{href:"qv2ray://open/plugin/metadata"}},[v._v("插件管理器")])]),v._v(" 窗口中的 "),a("strong",[a("a",{attrs:{href:"qv2ray://open/plugin/plugindir"}},[v._v("打开本地插件文件夹")])]),v._v(" 按钮，此时应自动打开一个名为 "),a("code",[v._v("plugins")]),v._v(" 的文件夹。")]),v._v(" "),a("li",[v._v("将您所下载的插件文件（"),a("code",[v._v(".dll")]),v._v(" / "),a("code",[v._v(".dylib")]),v._v(" / "),a("code",[v._v(".so")]),v._v("）放入此目录。")]),v._v(" "),a("li",[v._v("关闭 Qv2ray 并重新打开。这将让 Qv2ray 重新扫描插件目录。")])]),v._v(" "),a("h3",{attrs:{id:"_3-启用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启用插件"}},[v._v("#")]),v._v(" 3. 启用插件")]),v._v(" "),a("ul",[a("li",[v._v("打开"),a("a",{attrs:{href:"qv2ray://open/plugin/metadata"}},[v._v("插件管理器")]),v._v("，你将看到所找到的插件。")]),v._v(" "),a("li",[v._v("在插件列表中勾选所希望使用的插件即可。")]),v._v(" "),a("li",[v._v("某些插件，尤其是核心插件（如 Trojan、ShadowsocksR 等），"),a("strong",[v._v("需要重新启动 Qv2ray 后才会生效")]),v._v("。")])]),v._v(" "),a("h3",{attrs:{id:"_4-享受！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-享受！"}},[v._v("#")]),v._v(" 4. 享受！")]),v._v(" "),a("ul",[a("li",[v._v("插件已经可以用了！")])]),v._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[v._v("#")]),v._v(" 常见问题")]),v._v(" "),a("h3",{attrs:{id:"qv2ray-没有检测到插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qv2ray-没有检测到插件"}},[v._v("#")]),v._v(" Qv2ray 没有检测到插件")]),v._v(" "),a("ul",[a("li",[v._v("请确认插件位于 Qv2ray 的插件目录（"),a("code",[v._v("config\\plugins")]),v._v("）下。")]),v._v(" "),a("li",[v._v("请确认插件版本与 Qv2ray 版本匹配。目前，"),a("code",[v._v("2.0.0")]),v._v(" 及之后版本的插件需要使用 Qv2ray "),a("code",[v._v("v2.6.0-rc2")]),v._v(" 版本。")]),v._v(" "),a("li",[v._v("如果问题仍然存在，建议直接向插件提供者进行反映。请包含下面的信息，以助开发者定位您的问题：\n"),a("ul",[a("li",[v._v("Qv2ray 的"),a("a",{attrs:{href:"qv2ray://open/preference/about"}},[v._v("详细版本")]),v._v("，包括在哪里下载的、具体的版本号和构建号。")]),v._v(" "),a("li",[v._v("对应插件的详细版本，有条件的请带上插件文件的 "),a("code",[v._v("sha256")]),v._v(" 和 "),a("code",[v._v("md5")]),v._v("。")]),v._v(" "),a("li",[v._v("Qv2ray 的日志，可以使用 "),a("code",[v._v("qv2ray(.exe) --debug > log.txt")]),v._v(" 命令进行收集。")])])])]),v._v(" "),a("h3",{attrs:{id:"插件没有适合我操作系统的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件没有适合我操作系统的文件"}},[v._v("#")]),v._v(" 插件没有适合我操作系统的文件")]),v._v(" "),a("ul",[a("li",[v._v("通常是插件作者懒得支持你的操作系统，或者：")]),v._v(" "),a("li",[v._v("这个插件不适用于你的操作系统：\n"),a("ul",[a("li",[v._v("例如：一个针对 Linux 系统的 "),a("code",[v._v("iptables")]),v._v(" 设置插件可能就不适合 macOS 和 Windows。")])])])]),v._v(" "),a("h3",{attrs:{id:"插件导致-qv2ray-崩溃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件导致-qv2ray-崩溃"}},[v._v("#")]),v._v(" 插件导致 Qv2ray 崩溃")]),v._v(" "),a("ul",[a("li",[v._v("可以试试用 "),a("code",[v._v("qv2ray(.exe) --noPlugin")]),v._v(" 禁用所有插件的加载.")]),v._v(" "),a("li",[v._v("如果 Qv2ray 成功启动了（证明的确是插件的问题），请同上述方法报告问题。")])])])}),[],!1,null,null,null);r.default=_.exports}}]);