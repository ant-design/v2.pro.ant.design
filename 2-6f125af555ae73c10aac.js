(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(e,a,t){"use strict";t.d(a,"d",function(){return n}),t.d(a,"a",function(){return o}),t.d(a,"b",function(){return r}),t.d(a,"e",function(){return p}),t.d(a,"c",function(){return l}),t.d(a,"f",function(){return i});t(35),t(237),t(36),t(618);function n(e){return"/"===e?"undefined"!=typeof window&&"zh-CN"===(localStorage?localStorage.getItem("locale"):"en-US"):/-cn/.test(e)}function o(e,a){var t=e.startsWith("/")?e:"/"+e;return"/"===(t=t.replace("-cn",""))||"/index"===t?a?"/index-cn":"/":a?t+"-cn":""+t}function r(e,a){var t=e.map(function(e){return e.meta}),n={};return t.sort(function(e,a){return(e.order||0)-(a.order||0)}).forEach(function(e){var t=e.category&&e.category[a]||e.category||"topLevel";n[t]||(n[t]={});var o=e.type||"topLevel";n[t][o]||(n[t][o]=[]),n[t][o].push(e)}),n}function p(e){var a,t=new Image,n=function(n){a||(a=!0,t.src="",e(n))};return t.onload=function(){return n("responded")},t.onerror=function(){return n("error")},t.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",setTimeout(function(){return n("timeout")},1500)}function l(){var e=window.localStorage;try{return e.setItem("test","1"),e.removeItem("test"),!0}catch(a){return!1}}var i=function(e){var a=e.title;return Object.assign({},e,{title:{"zh-CN":a.zh_CN,"en-US":a.en_US}})}},239:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(4),p=t.n(r),l=t(37),i=t.n(l);t.d(a,"a",function(){return i.a});t(393),o.a.createContext({});p.a.object,p.a.string.isRequired,p.a.func,p.a.func},385:function(e,a,t){"use strict";t(593);var n=t(430),o=t.n(n),r=(t(35),t(79)),p=t.n(r),l=t(7),i=t.n(l),c=t(0),s=t.n(c),m=t(171),d=t(727),u=t.n(d),h=t(138),f=t(588),g=t(615),E={locale:"en-US",data:t.n(g).a,messages:{"app.header.search":"Search...","app.header.search.all":"Search in Google: ","app.header.search.doc":"Docs","app.header.search.component":"Components","app.header.menu.home":"Home","app.header.menu.docs":"Docs","app.header.menu.components":"Components","app.header.menu.resource":"Resources","app.header.lang":"中文","app.content.edit-page":"Edit this page on GitHub!","app.content.edit-demo":"Edit this demo on GitHub!","app.component.examples":"Examples","app.component.refer.title":"Usage:","app.component.refer.desc":"Learning more to visit: ","app.component.refer.link":"Using Pro Components Alone","app.demo.copy":"Copy code","app.demo.copied":"Copied!","app.demo.codepen":"Open in CodePen","app.demo.riddle":"Open in Riddle","app.demo.codesandbox":"Open in CodeSandbox","app.home.slogan":"Out-of-box UI solution for enterprise applications","app.home.preview":"Preview","app.home.start":"Getting Started","app.home.download":"Download","app.home.letspro":"Run commands below, explore it!","app.home.openbrowser":"open browser and visit","app.home.needhelp":"Need help? You can see {docs} and {faq} first, and {ask} in GitHub if they don't help.","app.home.docs":"documentation","app.home.faq":"faq","app.home.ask":"ask questions","app.footer.repo":"GitHub Repository","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"China Mirror 🇨🇳","app.footer.primary-color-changed":"Change primary color successfully!","app.footer.scaffold":"Scaffold","app.footer.kitchen":"Sketch Toolkit","app.footer.landing":"Landing Templates","app.footer.scaffolds":"Scaffold Market","app.footer.dev-tools":"Developer Tools","app.footer.dva":"Framework","app.footer.resources":"Resources","app.footer.data-vis":"Data Visualization","app.footer.eggjs":"Enterprise Node Framework","app.footer.motion":"Motion Solution","app.footer.antd-library":"Axure library","app.footer.design-platform":"Ant Financial Design Platform","app.footer.antux":"Sitemap Template","app.footer.community":"Community","app.footer.help":"Help","app.footer.change-log":"Change Log","app.footer.faq":"FAQ","app.footer.feedback":"Feedback","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"Chat Room (English)","app.footer.discuss-cn":"Chat Room (中文)","app.footer.bug-report":"Bug Report","app.footer.issues":"Issues","app.footer.version":"Version: ","app.footer.author":"Created by AFX","app.footer.work_with_us":"Work with Us","app.footer.more-product":"More Products","app.footer.company":"AFX","app.footer.ant-design":"UI Design Language","app.footer.yuque":"YuQue","app.footer.yuque.slogan":"Write your document as a team","app.footer.fengdie":"FengDie","app.footer.fengdie.slogan":"Mobile web app builder","app.footer.zhihu":"Zhihu","app.footer.zhihu.xtech":"Experience Cloud Blog","app.footer.seeconf":"Seeking Experience & Engineering Conference","app.footer.xcloud":"Ant Experience Cloud","app.publish.title":"Ant Desgin Pro@2.0.0 has been released! 🎉 🎉 🎉","app.publish.greeting":"Hello, ","app.publish.intro":"has been released","app.publish.tips":", welcome to upgrade and experience. ","app.publish.url":"https://medium.com/ant-design/beautiful-and-powerful-ant-design-pro-2-0-release-51358da5af95","app.publish.old-version-guide":"If you need documentation of older version, please visit ","app.publish.old-version-tips":",It can also be viewed by clicking on the v1 menu in the top right corner of the page."}},b=t(616),v={locale:"zh-CN",data:t.n(b).a,messages:{"app.header.search":"搜索...","app.header.search.all":"全文本搜索：","app.header.search.doc":"文档","app.header.search.component":"组件","app.header.menu.home":"首页","app.header.menu.docs":"文档","app.header.menu.components":"组件","app.header.menu.resource":"资源","app.header.lang":"English","app.content.edit-page":"在 Github 上编辑此页！","app.content.edit-demo":"在 Github 上编辑此示例！","app.component.examples":"代码演示","app.component.refer.title":"引用方式：","app.component.refer.desc":"详细使用方式请参照：","app.component.refer.link":"独立使用 pro 组件","app.demo.copy":"复制代码","app.demo.copied":"复制成功","app.demo.codepen":"在 CodePen 中打开","app.demo.riddle":"在 Riddle 中打开","app.demo.codesandbox":"在 CodeSandbox 中打开","app.home.slogan":"开箱即用的中台前端/设计解决方案","app.home.preview":"预览","app.home.start":"开始使用","app.home.download":"下载","app.home.letspro":"命令行运行下列命令，快速启动开发服务：","app.home.openbrowser":"打开浏览器访问","app.home.needhelp":"需要帮助？请先阅读 {docs} 和 {faq}， 如果未能解决，可以到 GitHub 上 {ask}。","app.home.docs":"开发文档","app.home.faq":"常见问题","app.home.ask":"进行提问","app.footer.repo":"GitHub 仓库","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"国内镜像站点 🇨🇳","app.footer.primary-color-changed":"修改主题色成功！","app.footer.kitchen":"Sketch 工具集","app.footer.landing":"Landing 模板集","app.footer.scaffold":"脚手架","app.footer.scaffolds":"脚手架市场","app.footer.dev-tools":"开发工具","app.footer.dva":"应用框架","app.footer.resources":"相关资源","app.footer.data-vis":"数据可视化","app.footer.eggjs":"企业级 Node 开发框架","app.footer.motion":"设计动效","app.footer.antd-library":"Axure 部件库","app.footer.design-platform":"蚂蚁金服设计平台","app.footer.antux":"页面逻辑素材","app.footer.community":"社区","app.footer.help":"帮助","app.footer.change-log":"更新记录","app.footer.faq":"常见问题","app.footer.feedback":"反馈和建议","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"在线讨论 (English)","app.footer.discuss-cn":"在线讨论 (中文)","app.footer.bug-report":"报告 Bug","app.footer.issues":"讨论列表","app.footer.version":"文档版本：","app.footer.author":"蚂蚁金服体验技术部出品 @ AFX","app.footer.work_with_us":"加入我们","app.footer.more-product":"更多产品","app.footer.company":"AFX","app.footer.ant-design":"蚂蚁 UI 体系","app.footer.yuque":"语雀","app.footer.yuque.slogan":"知识创作·协作平台","app.footer.fengdie":"云凤蝶","app.footer.fengdie.slogan":"移动建站平台","app.footer.zhihu":"知乎专栏","app.footer.zhihu.xtech":"体验科技专栏","app.footer.seeconf":"蚂蚁体验科技大会","app.footer.xcloud":"蚂蚁体验云","app.publish.title":"Ant Desgin Pro@2.0.0 发布！🎉 🎉 🎉","app.publish.greeting":"你好，","app.publish.intro":" 已正式发布","app.publish.tips":"，欢迎升级和体验。","app.publish.url":"https://www.yuque.com/ant-design/ant-design-pro/gg1e9a","app.publish.old-version-guide":"如果您还需要使用旧版，请查阅 ","app.publish.old-version-tips":"，也可通过点击页面右上角的 v1 菜单查看。"}},w=t(172),y=(t(619),t(620),t(621),t(217),t(183)),k=t.n(y),x=(t(260),t(174)),C=t.n(x),S=(t(218),t(184)),A=t.n(S),M=(t(624),t(423)),_=t.n(M),O=(t(238),t(151)),N=t.n(O),q=(t(300),t(199)),D=t.n(q),j=(t(75),t(36),t(629),t(418)),z=t.n(j),R=(t(82),t(631),t(219)),F=t.n(R),I=t(239),L=t(636),P=t.n(L),V=F.a.Option,G=F.a.OptGroup,U="https://yewbnylvlw-dsn.algolia.net/1/indexes/antd pro/query?x-algolia-agent=Algolia for vanilla JavaScript 3.21.1&x-algolia-application-id=YEWBNYLVLW&x-algolia-api-key=b42bc1a0c8ab7be447666944228a3176",H="antd-pro@2.0.0-notification-sent",T=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).state={inputValue:"",menuVisible:!1,menuMode:"horizontal",searchOption:[],searching:!1},a.setMenuMode=function(e){a.setState({menuMode:e?"inline":"horizontal"})},a.search=function(e,t,n){clearTimeout(a.timer),e?a.timer=setTimeout(function(){a.setState({searching:!0}),P.a.post(U,{params:"query="+e+"&hitsPerPage=20&facets=*&maxValuesPerFacet=10&facetFilters=[]"}).then(function(e){a.setState({searching:!1}),t&&t(e)}).catch(function(e){a.setState({searching:!1}),n&&n(e)})},200):t()},a.handleHideMenu=function(){a.setState({menuVisible:!1})},a.handleShowMenu=function(){a.setState({menuVisible:!0})},a.onMenuVisibleChange=function(e){a.setState({menuVisible:e})},a.handleSelect=function(e){window.location.href=e},a.handleChange=function(e){a.setState({inputValue:e}),a.search(e,function(e){e&&e.data&&e.data.hits&&a.setState({searchOption:e.data.hits})})},a.infoNewVersion=function(){var e=a.props.intl.formatMessage;z.a.info({title:e({id:"app.publish.title"}),content:s.a.createElement("div",null,s.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Ant Design"}),s.a.createElement("p",null,e({id:"app.publish.greeting"}),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e({id:"app.publish.url"})},"Ant Desgin Pro ",e({id:"app.publish.intro"})),e({id:"app.publish.tips"}),e({id:"app.publish.old-version-guide"}),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://v1.pro.ant.design"},"v1.pro.ant.design"),e({id:"app.publish.old-version-tips"}))),okText:"OK",onOk:function(){return localStorage.setItem(H,"true")},className:"new-version-info-modal",width:470})},a.handleLangChange=function(){var e=a.props.location.pathname,t=window.location.protocol+"//",n=window.location.href.substr(t.length);w.c()&&localStorage.setItem("locale",w.d(e)?"en-US":"zh-CN"),window.location.href=t+n.replace(window.location.pathname,w.a(e,!w.d(e)))},a}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.searchInput;document.addEventListener("keyup",function(a){83===a.keyCode&&a.target===document.body&&e.focus()}),"true"!==localStorage.getItem(H)&&Date.now()<new Date("2018/9/5").getTime()&&this.infoNewVersion()},t.componentDidUpdate=function(e){var a=this.props.isMobile;a!==e.isMobile&&this.setMenuMode(a)},t.render=function(){var e=this.state,a=e.inputValue,t=e.menuMode,n=e.menuVisible,o=e.searchOption,r=e.searching,p=this.props,l=p.location,i=p.intl,c=l.pathname,d=l.pathname.replace(/(^\/|\/$)/g,"").split("/").slice(0,-1).join("/")||"home";/^components/.test(c)?d="components":/docs/.test(c)?d="docs":"/"===c&&(d="home");var u="zh-CN"===i.locale,h=[s.a.createElement(D.a,{mode:t,selectedKeys:[d],id:"nav",key:"nav"},s.a.createElement(D.a.Item,{key:"home"},s.a.createElement(I.a,{to:w.a("/",u)},s.a.createElement(m.a,{id:"app.header.menu.home"}))),s.a.createElement(D.a.Item,{key:"docs"},s.a.createElement(I.a,{to:w.a("/docs/getting-started",u)},s.a.createElement(m.a,{id:"app.header.menu.docs"}))),s.a.createElement(D.a.Item,{key:"components"},s.a.createElement(I.a,{to:w.a("/components/avatar-list",u)},s.a.createElement(m.a,{id:"app.header.menu.components"}))),s.a.createElement(D.a.Item,{key:"v1"},s.a.createElement("a",{href:"https://v1.pro.ant.design",target:"_blank",rel:"noopener noreferrer"},"v1")),"inline"===t&&s.a.createElement(D.a.Item,{key:"preview"},s.a.createElement("a",{target:"_blank",href:"http://preview.pro.ant.design/",rel:"noopener noreferrer"},s.a.createElement(m.a,{id:"app.home.preview"}))))],f=o.filter(function(e){return"component"===e.type}).map(function(e){return s.a.createElement(V,{key:e.url},e.title," ",u&&e.subTitle)}),g=o.filter(function(e){return"doc"===e.type}).map(function(e){return s.a.createElement(V,{key:e.url},u?e.title:e["title-en"]||e.title)}),E=[];return f&&E.push(s.a.createElement(G,{label:i.formatMessage({id:"app.header.search.component"}),key:"component"},f)),g&&E.push(s.a.createElement(G,{label:i.formatMessage({id:"app.header.search.doc"}),key:"doc"},g)),a&&E.push(s.a.createElement(V,{key:"https://www.google.com/search?q=site:pro.ant.design+"+a},s.a.createElement(m.a,{id:"app.header.search.all"}),a)),s.a.createElement("div",{id:"header",className:"header"},"inline"===t?s.a.createElement(_.a,{overlayClassName:"popover-menu",placement:"bottomRight",content:h,trigger:"click",visible:n,arrowPointAtCenter:!0,onVisibleChange:this.onMenuVisibleChange},s.a.createElement(N.a,{className:"nav-phone-icon",type:"menu",onClick:this.handleShowMenu})):null,s.a.createElement(k.a,null,s.a.createElement(A.a,{xxl:4,xl:5,lg:8,md:8,sm:24,xs:24},s.a.createElement(I.a,{id:"logo",to:"/"},s.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"logo"}),s.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/tNoOLUAkyuGLXoZvaibF.svg",alt:"Ant Design Pro"}))),s.a.createElement(A.a,{xxl:20,xl:19,lg:16,md:16,sm:0,xs:0},s.a.createElement("div",{id:"search-box"},s.a.createElement(N.a,{type:"search"}),s.a.createElement(F.a,{mode:"combobox",value:a,placeholder:i.formatMessage({id:"app.header.search"}),notFoundContent:"",defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,optionLabelProp:"label",onSelect:this.handleSelect,onChange:this.handleChange},r&&s.a.createElement(V,{className:"search-loading",key:"search"},s.a.createElement(N.a,{type:"loading"})),E)),s.a.createElement("div",{className:"header-meta"},s.a.createElement("div",{id:"preview"},s.a.createElement("a",{id:"preview-button",target:"_blank",href:"http://preview.pro.ant.design",rel:"noopener noreferrer"},s.a.createElement(C.a,{icon:"eye-o"},s.a.createElement(m.a,{id:"app.home.preview"})))),s.a.createElement("div",{id:"lang"},s.a.createElement(C.a,{onClick:this.handleLangChange},s.a.createElement(m.a,{id:"app.header.lang"}))),"horizontal"===t?s.a.createElement("div",{id:"menu"},h):null))))},a}(s.a.Component),K=Object(m.d)(T),X=(t(324),t(243)),W=t.n(X),B=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).handleLangChange=function(){var e=a.props.location.pathname,t=window.location.protocol+"//",n=window.location.href.substr(t.length);w.c()&&localStorage.setItem("locale",w.d(e)?"en-US":"zh-CN"),window.location.href=t+n.replace(window.location.pathname,w.a(e,!w.d(e)))},a}return i()(a,e),a.prototype.render=function(){return s.a.createElement("footer",{id:"footer"},s.a.createElement("div",{className:"footer-wrap"},s.a.createElement(k.a,null,s.a.createElement(A.a,{md:6,sm:24,xs:24},s.a.createElement("div",{className:"footer-center"},s.a.createElement("h2",null,s.a.createElement(m.a,{id:"app.footer.resources"})),s.a.createElement("div",null,s.a.createElement("a",{href:"http://ant.design"},"Ant Design")),s.a.createElement("div",null,s.a.createElement("a",{href:"http://mobile.ant.design"},"Ant Design Mobile")),s.a.createElement("div",null,s.a.createElement("a",{href:"http://ng.ant.design"},"NG-ZORRO"),s.a.createElement("span",null," - "),"Ant Design of Angular"),s.a.createElement("div",null,s.a.createElement("a",{href:"https://ng.mobile.ant.design/"},"NG-ZORRO-MOBILE")),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank ",href:"https://github.com/websemantics/awesome-ant-design"},s.a.createElement(m.a,{id:"app.footer.awesome"}))),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://kitchen.alipay.com"},"Kitchen"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.kitchen"})),s.a.createElement("div",null,s.a.createElement(W.a,{dot:!0,offset:[3,0]},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://landing.ant.design"},"Ant Design Landing"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.landing"}))),s.a.createElement("div",null,s.a.createElement("a",{href:"http://scaffold.ant.design"},"Scaffolds"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.scaffolds"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dvajs/dva"},"dva")," ","- ",s.a.createElement(m.a,{id:"app.footer.dva"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://motion.ant.design"},"Ant Motion"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.motion"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://library.ant.design/"},"Axure Library"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.antd-library"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://ux.ant.design"},"Ant UX"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.antux"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank ",href:"https://ant-design-pro.gitee.io/"},s.a.createElement(m.a,{id:"app.footer.chinamirror"}))))),s.a.createElement(A.a,{md:6,sm:24,xs:24},s.a.createElement("div",{className:"footer-center"},s.a.createElement("h2",null,s.a.createElement(m.a,{id:"app.footer.community"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://zhuanlan.zhihu.com/antdesign"},s.a.createElement(m.a,{id:"app.footer.zhihu"}))),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://medium.com/ant-design/"},"Medium")),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://twitter.com/antdesignui"},"Twitter")),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://zhuanlan.zhihu.com/xtech"},s.a.createElement(m.a,{id:"app.footer.zhihu.xtech"}))),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://seeconf.alipay.com/"},"SEE Conf"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.seeconf"})))),s.a.createElement(A.a,{md:6,sm:24,xs:24},s.a.createElement("div",{className:"footer-center"},s.a.createElement("h2",null,s.a.createElement(m.a,{id:"app.footer.help"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank ",href:"https://github.com/ant-design/ant-design-pro"},"GitHub")),s.a.createElement("div",null,s.a.createElement("a",{href:"/docs/changelog"},s.a.createElement(m.a,{id:"app.footer.change-log"}))),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design/wiki/FAQ"},s.a.createElement(m.a,{id:"app.footer.faq"}))),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gitter.im/ant-design/ant-design-pro"},s.a.createElement(m.a,{id:"app.footer.discuss-cn"}))),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design/issues"},s.a.createElement(m.a,{id:"app.footer.issues"}))),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://stackoverflow.com/questions/tagged/antd"},s.a.createElement(m.a,{id:"app.footer.stackoverflow"}))),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://segmentfault.com/t/antd"},s.a.createElement(m.a,{id:"app.footer.segmentfault"}))))),s.a.createElement(A.a,{md:6,sm:24,xs:24},s.a.createElement("div",{className:"footer-center"},s.a.createElement("h2",null,s.a.createElement("img",{className:"title-icon",src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"AFX Cloud"}),s.a.createElement(m.a,{id:"app.footer.more-product"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yuque.com/"},s.a.createElement(m.a,{id:"app.footer.yuque"})),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.yuque.slogan"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yunfengdie.com/"},s.a.createElement(m.a,{id:"app.footer.fengdie"})),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.fengdie.slogan"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://antv.alipay.com/"},"AntV"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.data-vis"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://eggjs.org/"},"Egg"),s.a.createElement("span",null," - "),s.a.createElement(m.a,{id:"app.footer.eggjs"})),s.a.createElement("div",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://xcloud.alipay.com/"},s.a.createElement(m.a,{id:"app.footer.xcloud"}))))))),s.a.createElement("div",{className:"bottom-bar"},"Made with ",s.a.createElement("span",{className:"heart"},"❤")," by",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yuque.com/afx/blog"},s.a.createElement(m.a,{id:"app.footer.company"}))))},a}(s.a.Component),Z=Object(m.d)(B),J=function(e){function a(a){var t;t=e.call(this,a)||this;var n=a.location.pathname,o=w.d(n)?v:E;return Object(m.c)(o.data),t.state={appLocale:o},t}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){Object(h.setTheme)({defaultColor:"#1089ff",shape:{interval:{fillOpacity:1}}})},t.render=function(){var e=this.props,a=e.children,t=e.location,n=p()(e,["children","location"]),r=t.pathname,l=this.state.appLocale;return s.a.createElement(m.b,{locale:l.locale,messages:l.messages},s.a.createElement(o.a,{locale:u.a},s.a.createElement("div",{className:"page-wrapper "+(("/"===r||"index-cn"===r)&&"index-page-wrapper")},s.a.createElement(K,Object.assign({},n,{location:t})),s.a.cloneElement(a,Object.assign({},a.props,{isMobile:n.isMobile})),s.a.createElement(Z,Object.assign({},n,{location:t})))))},a}(s.a.PureComponent);a.a=function(e){return s.a.createElement(f.a,{query:"(max-width: 996px)"},function(a){var t="undefined"==typeof window;return s.a.createElement(J,Object.assign({},e,{isMobile:a&&!t}))})}},393:function(e,a,t){var n;e.exports=(n=t(635))&&n.default||n},595:function(e,a){},603:function(e,a){},610:function(e,a){},635:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),o=t.n(n),r=t(4),p=t.n(r),l=t(71),i=t(2),c=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?o.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},a.default=c}}]);
//# sourceMappingURL=2-6f125af555ae73c10aac.js.map