(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(e,a,t){"use strict";t.d(a,"d",function(){return n}),t.d(a,"a",function(){return o}),t.d(a,"b",function(){return r}),t.d(a,"e",function(){return p}),t.d(a,"c",function(){return l}),t.d(a,"f",function(){return i});t(35),t(241),t(36),t(634);function n(e){return"/"===e?"undefined"!=typeof window&&"zh-CN"===(localStorage?localStorage.getItem("locale"):"en-US"):/-cn/.test(e)}function o(e,a){var t=e.startsWith("/")?e:"/"+e;return"/"===(t=t.replace("-cn",""))||"/index"===t?a?"/index-cn":"/":a?t+"-cn":""+t}function r(e,a){var t=e.map(function(e){return e.meta}),n={};return t.sort(function(e,a){return(e.order||0)-(a.order||0)}).forEach(function(e){var t=e.category&&e.category[a]||e.category||"topLevel";n[t]||(n[t]={});var o=e.type||"topLevel";n[t][o]||(n[t][o]=[]),n[t][o].push(e)}),n}function p(e){var a,t=new Image,n=function(n){a||(a=!0,t.src="",e(n))};return t.onload=function(){return n("responded")},t.onerror=function(){return n("error")},t.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",setTimeout(function(){return n("timeout")},1500)}function l(){var e=window.localStorage;try{return e.setItem("test","1"),e.removeItem("test"),!0}catch(a){return!1}}var i=function(e){var a=e.title;return Object.assign({},e,{title:{"zh-CN":a.zh_CN,"en-US":a.en_US}})}},244:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(4),p=t.n(r),l=t(37),i=t.n(l);t.d(a,"a",function(){return i.a});t(403),o.a.createContext({});p.a.object,p.a.string.isRequired,p.a.func,p.a.func},393:function(e,a,t){"use strict";t(611);var n,o=t(450),r=t.n(o),p=(t(35),t(79)),l=t.n(p),i=t(7),c=t.n(i),s=t(0),m=t.n(s),d=t(180),u=t(772),f=t.n(u),h=t(139),g=t(606),E=t(631),b={locale:"en-US",data:t.n(E).a,messages:{"app.header.search":"Search...","app.header.search.all":"Search in Google: ","app.header.search.doc":"Docs","app.header.search.component":"Components","app.header.menu.home":"Home","app.header.menu.docs":"Docs","app.header.menu.components":"Components","app.header.menu.resource":"Resources","app.header.lang":"中文","app.content.edit-page":"Edit this page on GitHub!","app.content.edit-demo":"Edit this demo on GitHub!","app.component.examples":"Examples","app.component.refer.title":"Usage:","app.component.refer.desc":"Learning more to visit: ","app.component.refer.link":"Using Pro Components Alone","app.demo.copy":"Copy code","app.demo.copied":"Copied!","app.demo.codepen":"Open in CodePen","app.demo.riddle":"Open in Riddle","app.demo.codesandbox":"Open in CodeSandbox","app.home.slogan":"Out-of-box UI solution for enterprise applications","app.home.preview":"Preview","app.home.start":"Getting Started","app.home.download":"Download","app.home.letspro":"Run commands below, explore it!","app.home.openbrowser":"open browser and visit","app.home.needhelp":"Need help? You can see {docs} and {faq} first, and {ask} in GitHub if they don't help.","app.home.docs":"documentation","app.home.faq":"faq","app.home.ask":"ask questions","app.footer.repo":"GitHub Repository","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"China Mirror 🇨🇳","app.footer.primary-color-changed":"Change primary color successfully!","app.footer.scaffold":"Scaffold","app.footer.kitchen":"Sketch Toolkit","app.footer.landing":"Landing Templates","app.footer.scaffolds":"Scaffold Market","app.footer.dev-tools":"Developer Tools","app.footer.dva":"Framework","app.footer.resources":"Resources","app.footer.data-vis":"Data Visualization","app.footer.eggjs":"Enterprise Node Framework","app.footer.motion":"Motion Solution","app.footer.antd-library":"Axure library","app.footer.design-platform":"Ant Financial Design Platform","app.footer.antux":"Sitemap Template","app.footer.community":"Community","app.footer.help":"Help","app.footer.change-log":"Change Log","app.footer.faq":"FAQ","app.footer.feedback":"Feedback","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"Chat Room (English)","app.footer.discuss-cn":"Chat Room (中文)","app.footer.bug-report":"Bug Report","app.footer.issues":"Issues","app.footer.version":"Version: ","app.footer.author":"Created by AFX","app.footer.work_with_us":"Work with Us","app.footer.more-product":"More Products","app.footer.company":"AFX","app.footer.ant-design":"UI Design Language","app.footer.yuque":"YuQue","app.footer.yuque.slogan":"Write your document as a team","app.footer.fengdie":"FengDie","app.footer.fengdie.slogan":"Mobile web app builder","app.footer.zhihu":"Zhihu","app.footer.zhihu.xtech":"Experience Cloud Blog","app.footer.seeconf":"Seeking Experience & Engineering Conference","app.footer.xcloud":"Ant Experience Cloud","app.publish.title":"Ant Desgin Pro@2.0.0 has been released! 🎉 🎉 🎉","app.publish.greeting":"Hello, ","app.publish.intro":"has been released","app.publish.tips":", welcome to upgrade and experience. ","app.publish.url":"https://medium.com/ant-design/beautiful-and-powerful-ant-design-pro-2-0-release-51358da5af95","app.publish.old-version-guide":"If you need documentation of older version, please visit ","app.publish.old-version-tips":",It can also be viewed by clicking on the v1 menu in the top right corner of the page."}},v=t(632),w={locale:"zh-CN",data:t.n(v).a,messages:{"app.header.search":"搜索...","app.header.search.all":"全文本搜索：","app.header.search.doc":"文档","app.header.search.component":"组件","app.header.menu.home":"首页","app.header.menu.docs":"文档","app.header.menu.components":"组件","app.header.menu.resource":"资源","app.header.lang":"English","app.content.edit-page":"在 Github 上编辑此页！","app.content.edit-demo":"在 Github 上编辑此示例！","app.component.examples":"代码演示","app.component.refer.title":"引用方式：","app.component.refer.desc":"详细使用方式请参照：","app.component.refer.link":"独立使用 pro 组件","app.demo.copy":"复制代码","app.demo.copied":"复制成功","app.demo.codepen":"在 CodePen 中打开","app.demo.riddle":"在 Riddle 中打开","app.demo.codesandbox":"在 CodeSandbox 中打开","app.home.slogan":"开箱即用的中台前端/设计解决方案","app.home.preview":"预览","app.home.start":"开始使用","app.home.download":"下载","app.home.letspro":"命令行运行下列命令，快速启动开发服务：","app.home.openbrowser":"打开浏览器访问","app.home.needhelp":"需要帮助？请先阅读 {docs} 和 {faq}， 如果未能解决，可以到 GitHub 上 {ask}。","app.home.docs":"开发文档","app.home.faq":"常见问题","app.home.ask":"进行提问","app.footer.repo":"GitHub 仓库","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"国内镜像站点 🇨🇳","app.footer.primary-color-changed":"修改主题色成功！","app.footer.kitchen":"Sketch 工具集","app.footer.landing":"Landing 模板集","app.footer.scaffold":"脚手架","app.footer.scaffolds":"脚手架市场","app.footer.dev-tools":"开发工具","app.footer.dva":"应用框架","app.footer.resources":"相关资源","app.footer.data-vis":"数据可视化","app.footer.eggjs":"企业级 Node 开发框架","app.footer.motion":"设计动效","app.footer.antd-library":"Axure 部件库","app.footer.design-platform":"蚂蚁金服设计平台","app.footer.antux":"页面逻辑素材","app.footer.community":"社区","app.footer.help":"帮助","app.footer.change-log":"更新记录","app.footer.faq":"常见问题","app.footer.feedback":"反馈和建议","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"在线讨论 (English)","app.footer.discuss-cn":"在线讨论 (中文)","app.footer.bug-report":"报告 Bug","app.footer.issues":"讨论列表","app.footer.version":"文档版本：","app.footer.author":"蚂蚁金服体验技术部出品 @ AFX","app.footer.work_with_us":"加入我们","app.footer.more-product":"更多产品","app.footer.company":"AFX","app.footer.ant-design":"蚂蚁 UI 体系","app.footer.yuque":"语雀","app.footer.yuque.slogan":"知识创作·协作平台","app.footer.fengdie":"云凤蝶","app.footer.fengdie.slogan":"移动建站平台","app.footer.zhihu":"知乎专栏","app.footer.zhihu.xtech":"体验科技专栏","app.footer.seeconf":"蚂蚁体验科技大会","app.footer.xcloud":"蚂蚁体验云","app.publish.title":"Ant Desgin Pro@2.0.0 发布！🎉 🎉 🎉","app.publish.greeting":"你好，","app.publish.intro":" 已正式发布","app.publish.tips":"，欢迎升级和体验。","app.publish.url":"https://www.yuque.com/ant-design/ant-design-pro/gg1e9a","app.publish.old-version-guide":"如果您还需要使用旧版，请查阅 ","app.publish.old-version-tips":"，也可通过点击页面右上角的 v1 菜单查看。"}},y=t(173),k=(t(635),t(636),t(637),t(638),t(221),t(183)),x=t.n(k),C=(t(242),t(175)),S=t.n(C),_=(t(641),t(215)),A=t.n(_),M=(t(222),t(184)),N=t.n(M),q=(t(643),t(441)),D=t.n(q),z=(t(243),t(152)),O=t.n(z),j=(t(308),t(202)),I=t.n(j),R=(t(75),t(648),t(416)),F=t.n(R),L=(t(36),t(244)),G="antd-pro@2.0.0-notification-sent";"undefined"!=typeof window&&(n=t(651));var U=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).state={menuVisible:!1,menuMode:"horizontal"},a.setMenuMode=function(e){a.setState({menuMode:e?"inline":"horizontal"})},a.handleHideMenu=function(){a.setState({menuVisible:!1})},a.handleShowMenu=function(){a.setState({menuVisible:!0})},a.onMenuVisibleChange=function(e){a.setState({menuVisible:e})},a.handleSelect=function(e){window.location.href=e},a.infoNewVersion=function(){var e=a.props.intl.formatMessage;F.a.info({title:e({id:"app.publish.title"}),content:m.a.createElement("div",null,m.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Ant Design"}),m.a.createElement("p",null,e({id:"app.publish.greeting"}),m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e({id:"app.publish.url"})},"Ant Desgin Pro ",e({id:"app.publish.intro"})),e({id:"app.publish.tips"}),e({id:"app.publish.old-version-guide"}),m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://v1.pro.ant.design"},"v1.pro.ant.design"),e({id:"app.publish.old-version-tips"}))),okText:"OK",onOk:function(){return localStorage.setItem(G,"true")},className:"new-version-info-modal",width:470})},a.handleLangChange=function(){var e=a.props.location.pathname,t=window.location.protocol+"//",n=window.location.href.substr(t.length);y.c()&&localStorage.setItem("locale",y.d(e)?"en-US":"zh-CN"),window.location.href=t+n.replace(window.location.pathname,y.a(e,!y.d(e)))},a}c()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.searchInput;document.addEventListener("keyup",function(a){83===a.keyCode&&a.target===document.body&&e.focus()}),"true"!==localStorage.getItem(G)&&Date.now()<new Date("2018/9/5").getTime()&&this.infoNewVersion(),function(e){n&&n({apiKey:"dfba5eddecb719460b9fd232af57748d",indexName:"pro_ant_design",inputSelector:"#search-box input",algoliaOptions:{facetFilters:["tags:"+("zh-CN"===e?"cn":"en")]},transformData:function(e){return e.forEach(function(e){e.url=e.url.replace("ant.design.pro",window.location.host),e.url=e.url.replace("https:",window.location.protocol)}),e},debug:!0})}(this.props.intl.locale)},t.componentDidUpdate=function(e){var a=this.props.isMobile;a!==e.isMobile&&this.setMenuMode(a)},t.render=function(){var e=this,a=this.state,t=a.menuMode,n=a.menuVisible,o=this.props,r=o.location,p=o.intl,l=r.pathname,i=r.pathname.replace(/(^\/|\/$)/g,"").split("/").slice(0,-1).join("/")||"home";/^components/.test(l)?i="components":/docs/.test(l)?i="docs":"/"===l&&(i="home");var c="zh-CN"===p.locale,s=[m.a.createElement(I.a,{mode:t,selectedKeys:[i],id:"nav",key:"nav"},m.a.createElement(I.a.Item,{key:"home"},m.a.createElement(L.a,{to:y.a("/",c)},m.a.createElement(d.a,{id:"app.header.menu.home"}))),m.a.createElement(I.a.Item,{key:"docs"},m.a.createElement(L.a,{to:y.a("/docs/getting-started",c)},m.a.createElement(d.a,{id:"app.header.menu.docs"}))),m.a.createElement(I.a.Item,{key:"components"},m.a.createElement(L.a,{to:y.a("/components/avatar-list",c)},m.a.createElement(d.a,{id:"app.header.menu.components"}))),m.a.createElement(I.a.Item,{key:"v1"},m.a.createElement("a",{href:"https://v1.pro.ant.design",target:"_blank",rel:"noopener noreferrer"},"v1")),"inline"===t&&m.a.createElement(I.a.Item,{key:"preview"},m.a.createElement("a",{target:"_blank",href:"http://preview.pro.ant.design/",rel:"noopener noreferrer"},m.a.createElement(d.a,{id:"app.home.preview"}))))];return m.a.createElement("div",{id:"header",className:"header"},"inline"===t?m.a.createElement(D.a,{overlayClassName:"popover-menu",placement:"bottomRight",content:s,trigger:"click",visible:n,arrowPointAtCenter:!0,onVisibleChange:this.onMenuVisibleChange},m.a.createElement(O.a,{className:"nav-phone-icon",type:"menu",onClick:this.handleShowMenu})):null,m.a.createElement(x.a,null,m.a.createElement(N.a,{xxl:4,xl:5,lg:8,md:8,sm:24,xs:24},m.a.createElement(L.a,{id:"logo",to:"/"},m.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"logo"}),m.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/tNoOLUAkyuGLXoZvaibF.svg",alt:"Ant Design Pro"}))),m.a.createElement(N.a,{xxl:20,xl:19,lg:16,md:16,sm:0,xs:0},m.a.createElement("div",{id:"search-box"},m.a.createElement(O.a,{type:"search"}),m.a.createElement(A.a,{ref:function(a){e.searchInput=a},placeholder:p.formatMessage({id:"app.header.search"})})),m.a.createElement("div",{className:"header-meta"},m.a.createElement("div",{id:"preview"},m.a.createElement("a",{id:"preview-button",target:"_blank",href:"https://v2-preview-ant-design-pro.netlify.com",rel:"noopener noreferrer"},m.a.createElement(S.a,{icon:"eye-o"},m.a.createElement(d.a,{id:"app.home.preview"})))),m.a.createElement("div",{id:"lang"},m.a.createElement(S.a,{onClick:this.handleLangChange},m.a.createElement(d.a,{id:"app.header.lang"}))),"horizontal"===t?m.a.createElement("div",{id:"menu"},s):null))))},a}(m.a.Component),H=Object(d.d)(U),P=(t(334),t(249)),V=t.n(P),T=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).handleLangChange=function(){var e=a.props.location.pathname,t=window.location.protocol+"//",n=window.location.href.substr(t.length);y.c()&&localStorage.setItem("locale",y.d(e)?"en-US":"zh-CN"),window.location.href=t+n.replace(window.location.pathname,y.a(e,!y.d(e)))},a}return c()(a,e),a.prototype.render=function(){return m.a.createElement("footer",{id:"footer"},m.a.createElement("div",{className:"footer-wrap"},m.a.createElement(x.a,null,m.a.createElement(N.a,{md:6,sm:24,xs:24},m.a.createElement("div",{className:"footer-center"},m.a.createElement("h2",null,m.a.createElement(d.a,{id:"app.footer.resources"})),m.a.createElement("div",null,m.a.createElement("a",{href:"http://ant.design"},"Ant Design")),m.a.createElement("div",null,m.a.createElement("a",{href:"http://mobile.ant.design"},"Ant Design Mobile")),m.a.createElement("div",null,m.a.createElement("a",{href:"http://ng.ant.design"},"NG-ZORRO"),m.a.createElement("span",null," - "),"Ant Design of Angular"),m.a.createElement("div",null,m.a.createElement("a",{href:"https://ng.mobile.ant.design/"},"NG-ZORRO-MOBILE")),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank ",href:"https://github.com/websemantics/awesome-ant-design"},m.a.createElement(d.a,{id:"app.footer.awesome"}))),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://kitchen.alipay.com"},"Kitchen"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.kitchen"})),m.a.createElement("div",null,m.a.createElement(V.a,{dot:!0,offset:[3,0]},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://landing.ant.design"},"Ant Design Landing"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.landing"}))),m.a.createElement("div",null,m.a.createElement("a",{href:"http://scaffold.ant.design"},"Scaffolds"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.scaffolds"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dvajs/dva"},"dva")," ","- ",m.a.createElement(d.a,{id:"app.footer.dva"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://motion.ant.design"},"Ant Motion"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.motion"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://library.ant.design/"},"Axure Library"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.antd-library"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://ux.ant.design"},"Ant UX"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.antux"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank ",href:"https://ant-design-pro.gitee.io/"},m.a.createElement(d.a,{id:"app.footer.chinamirror"}))))),m.a.createElement(N.a,{md:6,sm:24,xs:24},m.a.createElement("div",{className:"footer-center"},m.a.createElement("h2",null,m.a.createElement(d.a,{id:"app.footer.community"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://zhuanlan.zhihu.com/antdesign"},m.a.createElement(d.a,{id:"app.footer.zhihu"}))),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://medium.com/ant-design/"},"Medium")),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://twitter.com/antdesignui"},"Twitter")),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://zhuanlan.zhihu.com/xtech"},m.a.createElement(d.a,{id:"app.footer.zhihu.xtech"}))),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://seeconf.alipay.com/"},"SEE Conf"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.seeconf"})))),m.a.createElement(N.a,{md:6,sm:24,xs:24},m.a.createElement("div",{className:"footer-center"},m.a.createElement("h2",null,m.a.createElement(d.a,{id:"app.footer.help"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank ",href:"https://github.com/ant-design/ant-design-pro"},"GitHub")),m.a.createElement("div",null,m.a.createElement("a",{href:"/docs/changelog"},m.a.createElement(d.a,{id:"app.footer.change-log"}))),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design/wiki/FAQ"},m.a.createElement(d.a,{id:"app.footer.faq"}))),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gitter.im/ant-design/ant-design-pro"},m.a.createElement(d.a,{id:"app.footer.discuss-cn"}))),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design/issues"},m.a.createElement(d.a,{id:"app.footer.issues"}))),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://stackoverflow.com/questions/tagged/antd"},m.a.createElement(d.a,{id:"app.footer.stackoverflow"}))),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://segmentfault.com/t/antd"},m.a.createElement(d.a,{id:"app.footer.segmentfault"}))))),m.a.createElement(N.a,{md:6,sm:24,xs:24},m.a.createElement("div",{className:"footer-center"},m.a.createElement("h2",null,m.a.createElement("img",{className:"title-icon",src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"AFX Cloud"}),m.a.createElement(d.a,{id:"app.footer.more-product"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yuque.com/"},m.a.createElement(d.a,{id:"app.footer.yuque"})),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.yuque.slogan"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yunfengdie.com/"},m.a.createElement(d.a,{id:"app.footer.fengdie"})),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.fengdie.slogan"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://antv.alipay.com/"},"AntV"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.data-vis"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://eggjs.org/"},"Egg"),m.a.createElement("span",null," - "),m.a.createElement(d.a,{id:"app.footer.eggjs"})),m.a.createElement("div",null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://xcloud.alipay.com/"},m.a.createElement(d.a,{id:"app.footer.xcloud"}))))))),m.a.createElement("div",{className:"bottom-bar"},"Made with ",m.a.createElement("span",{className:"heart"},"❤")," by",m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yuque.com/afx/blog"},m.a.createElement(d.a,{id:"app.footer.company"}))))},a}(m.a.Component),K=Object(d.d)(T),X=function(e){function a(a){var t;t=e.call(this,a)||this;var n=a.location.pathname,o=y.d(n)?w:b;return Object(d.c)(o.data),t.state={appLocale:o},t}c()(a,e);var t=a.prototype;return t.componentDidMount=function(){Object(h.setTheme)({defaultColor:"#1089ff",shape:{interval:{fillOpacity:1}}})},t.render=function(){var e=this.props,a=e.children,t=e.location,n=l()(e,["children","location"]),o=t.pathname,p=this.state.appLocale;return m.a.createElement(d.b,{locale:p.locale,messages:p.messages},m.a.createElement(r.a,{locale:f.a},m.a.createElement("div",{className:"page-wrapper "+(("/"===o||"index-cn"===o)&&"index-page-wrapper")},m.a.createElement(H,Object.assign({},n,{location:t})),m.a.cloneElement(a,Object.assign({},a.props,{isMobile:n.isMobile})),m.a.createElement(K,Object.assign({},n,{location:t})))))},a}(m.a.PureComponent);a.a=function(e){return m.a.createElement(g.a,{query:"(max-width: 996px)"},function(a){var t="undefined"==typeof window;return m.a.createElement(X,Object.assign({},e,{isMobile:a&&!t}))})}},403:function(e,a,t){var n;e.exports=(n=t(650))&&n.default||n},613:function(e,a){},621:function(e,a){},628:function(e,a){},650:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),o=t.n(n),r=t(4),p=t.n(r),l=t(71),i=t(2),c=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?o.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},a.default=c}}]);
//# sourceMappingURL=2-aa270fd0a927d7b7c30a.js.map