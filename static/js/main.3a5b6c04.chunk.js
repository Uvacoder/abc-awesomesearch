(this["webpackJsonpawesome-search-react"]=this["webpackJsonpawesome-search-react"]||[]).push([[0],{103:function(e,t,s){e.exports={AwesomeListMenu:"AwesomeListMenu_AwesomeListMenu__u0wy6"}},105:function(e,t,s){e.exports={AwesomeRwdMenu:"AwesomeRwdMenu_AwesomeRwdMenu__2Ejey"}},109:function(e,t,s){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},128:function(e,t){},130:function(e,t){},29:function(e,t,s){e.exports={AwesomeReadme:"AwesomeReadme_AwesomeReadme__24nUX",ViewOnGithubBtn:"AwesomeReadme_ViewOnGithubBtn__2qOcM",ReadmeInfo:"AwesomeReadme_ReadmeInfo__2gfYD",ReadmeCategory:"AwesomeReadme_ReadmeCategory__STOnr",scrollToTop:"AwesomeReadme_scrollToTop__3Qv4E"}},300:function(e,t,s){},301:function(e,t,s){},302:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(102),o=s.n(n),r=s(18),i=s(5),l=s(6),h=s(13),u=s(12),d=s(16),m=s(103),j=s.n(m),p=s(0),b=function(e){var t=e.topics,s=e.topicOnClickHandler;return Object(p.jsx)("div",{className:"menu ".concat(j.a.AwesomeListMenu),children:t.map((function(e){return Object(p.jsx)(d.b,{className:"menu-item",to:"/",onClick:function(){s(e)},children:e},e)}))})},O=s(105),w=s.n(O),x=function(e){var t=e.topics,s=e.topicOnClickHandler;return Object(p.jsx)("div",{className:"menu ".concat(w.a.AwesomeRwdMenu),children:t.map((function(e){return Object(p.jsx)(d.b,{className:"menu-item",to:"/",onClick:function(){s(e)},children:e},e)}))})},f=s(63),g=s.n(f),v=function(e){var t=e.topic,s=e.subjects;return""===t?Object(p.jsxs)("div",{className:g.a.HomePage,children:[Object(p.jsx)("div",{className:"alert alert-success",children:"New 2021 version of Awesome Search is released!"}),Object(p.jsxs)("p",{style:{backgroundColor:"grey",padding:"5px",color:"white",textAlign:"center"},children:[Object(p.jsx)("span",{style:{color:"#F8BBD0"},children:"Awesome"}),Object(p.jsx)("span",{style:{color:"#BBDEFB"},children:"Search"})," makes you find what you want in awesome lists more quickly."]}),Object(p.jsx)("p",{children:Object(p.jsx)("img",{src:"https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg",alt:"awesome badge."})}),Object(p.jsx)("h1",{children:"Why we did this"}),Object(p.jsxs)("section",{children:["There are soooo many awesome lists in the Awesome lists. ",Object(p.jsx)("br",{}),"We hope to build a web application to access them more quickly ."]}),Object(p.jsx)("h1",{children:"Features"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Access and search every awesome repo listed in"," ",Object(p.jsx)("a",{href:"https://github.com/sindresorhus/awesome",children:"sindresorhus/awesome"})," ","inside of a single page without pain."]}),Object(p.jsxs)("li",{children:["Access an awesome repo by"," ",Object(p.jsx)("a",{href:"https://dev.awesomelists.top/#/sindresorhus/awesome-nodejs",children:"https://dev.awesomelists.top/#/sindresorhus/awesome-nodejs"}),".(you can bookmark your favorite one!)"]}),Object(p.jsx)("li",{children:'Navigate smoothly to what you want to see using "Table of content" if that repo has toc.'})]}),Object(p.jsx)("h1",{children:"Get started with a repo"}),Object(p.jsxs)("section",{children:["Check out -"," ",Object(p.jsx)("a",{href:"https://dev.awesomelists.top/#/sindresorhus/awesome-nodejs",children:"Awesome Node.js"}),"!"]}),Object(p.jsx)("h1",{children:"Credit to"}),Object(p.jsxs)("section",{children:[Object(p.jsx)("a",{href:"https://github.com/sindresorhus/awesome",children:"sindresorhus/awesome"}),","," ",Object(p.jsx)("a",{href:"https://github.com/sindresorhus/awesome/graphs/contributors",children:"all authors of awesome lists"})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("section",{style:{textAlign:"right"},children:[Object(p.jsx)("a",{href:"https://github.com/lockys/AwesomeSearchReact",children:"Awesome search"})," ","is built with love by ",Object(p.jsx)("a",{href:"https://github.com/lockys",children:"lockys"}),","," ",Object(p.jsx)("a",{href:"https://github.com/John-Lin",children:"John-Lin"})]})]}):(s.sort((function(e,t){var s=e.name.toUpperCase(),c=t.name.toUpperCase();return s<c?-1:s>c?1:0})),Object(p.jsxs)("div",{className:g.a.AwesomeLists,children:[Object(p.jsx)("div",{className:"alert alert-success",children:"Lists are sorted alphabetically! You can easily find it :)"}),Object(p.jsx)("h1",{children:t}),s.map((function(e,t){return Object(p.jsxs)(d.b,{style:{margin:"10px",display:"inline-block"},to:"/".concat(e.repo),children:["# ",e.name," "]},e+t)}))]}))},y=s(3),A=s(23),_=s(24),k=s(64),S=s.n(k),C=Object(y.e)((function(e){return Object(p.jsx)("div",{className:S.a.AwesomeInput,children:Object(p.jsxs)("fieldset",{className:"form-group",children:[Object(p.jsxs)("label",{htmlFor:"subject",children:[Object(p.jsx)(A.a,{icon:_.c,style:{marginRight:"2px"},onClick:function(){e.homeOnClick("")}}),"AwesomeSearch"]}),Object(p.jsx)("input",{id:"subject",type:"text",placeholder:"Try To Search Node.js",className:"form-control",onChange:e.searchOnchange,value:e.value,onFocus:e.searchInputOnFocus}),e.showResult?Object(p.jsx)("div",{className:S.a.SearchResult,children:Object(p.jsxs)("ul",{children:[0===e.searchResult.length?Object(p.jsx)("span",{children:"Please input something :)"}):null,e.searchResult.map((function(e,t){return Object(p.jsxs)("li",{children:[e.item.cate,"/",Object(p.jsx)(d.b,{to:"/".concat(e.item.repo),children:e.item.name})]},e.item.name+t)}))]})}):null]})})})),R=s(106),N=s(29),T=s.n(N),B=s(110),M=s(107),H=s.n(M),I=s(108),L=s.n(I),E=s(36),F=s.n(E),V=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={_html:"<br/><b># Waiting for content loading...</b>",stars:0,updateAt:null,user:"",repo:"",md:"## loading",showTOC:!1},e.showTocHandler=function(){e.setState({showTOC:!e.state.showTOC})},e.scrollToTop=function(){document.getElementById("anchor-top").scrollIntoView()},e}return Object(l.a)(s,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.user!==this.props.match.params.user&&this.state.repo!==this.props.match.params.repo||this.state.md!==t.md||this.state.showTOC!==t.showTOC}},{key:"componentDidMount",value:function(){var e=this;F.a.get("https://api.github.com/repos/".concat(this.props.match.params.user,"/").concat(this.props.match.params.repo,"/readme"),{headers:{Accept:"application/vnd.github.v3.html"}}).then((function(t){var s=e.props.match.params.user,c=e.props.match.params.repo,a="https://raw.githubusercontent.com/".concat(s,"/").concat(c,"/master"),n=t.data.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(e,t){return t.includes("https")?e:(a="/"===t[0]?a:a+"/",e.replace(t,"".concat(a).concat(t)))})).replace(/user-content-/g,"");e.setState({_html:n,user:s,repo:c})})).catch((function(t){e.setState({_html:"Error when loading repo ".concat(t.message)})})),F.a.get("https://api.github.com/repos/".concat(this.props.match.params.user,"/").concat(this.props.match.params.repo)).then((function(t){e.setState({stars:t.data.stargazers_count,updateAt:t.data.pushed_at})}))}},{key:"componentDidUpdate",value:function(){var e=this,t=document.querySelectorAll('a:not(.menu-item)[href^="#"]');if(t.length>0){var s,c=Object(R.a)(t);try{var a=function(){var t=s.value,c=t.href.replace("".concat(document.location.origin,"/#"),"");t.href="/#/".concat(e.props.match.params.user,"/").concat(e.props.match.params.repo),t.addEventListener("click",(function(){document.getElementById(c).scrollIntoView({behavior:"smooth",block:"center"}),document.getElementById(c).parentNode.style.backgroundColor="red",setTimeout((function(){document.getElementById(c).parentNode.style.backgroundColor="white"}),5e3)}))};for(c.s();!(s=c.n()).done;)a()}catch(n){c.e(n)}finally{c.f()}}}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:T.a.AwesomeReadme,children:[Object(p.jsx)("div",{id:"anchor-top"}),Object(p.jsxs)("div",{className:T.a.ReadmeInfo,children:[Object(p.jsx)("a",{className:T.a.ViewOnGithubBtn,href:"https://github.com/".concat(this.props.match.params.user,"/").concat(this.props.match.params.repo),target:"_blank",rel:"noreferrer",children:"View On Github"}),Object(p.jsx)("span",{children:Object(p.jsx)("strong",{children:this.props.match.params.repo})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(A.a,{icon:_.e})," stars:",this.state.stars]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(A.a,{icon:_.b})," Last update at"," ",Object(p.jsx)(B.a,{datetime:this.state.updateAt})]})]}),!0===this.state.showTOC?Object(p.jsx)("div",{className:T.a.ReadmeCategory,children:Object(p.jsx)(L.a,{children:H()(this.state.md,{firsth1:!0,maxdepth:3}).content})}):null,Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state._html}}),Object(p.jsx)("div",{className:T.a.scrollToTop,onClick:this.scrollToTop,children:Object(p.jsxs)("a",{onClick:this.scrollToTop,children:[Object(p.jsx)(A.a,{icon:_.d})," Go To Top"]})})]})}}]),s}(c.Component),G=function(e){return Object(p.jsx)("div",{className:"loading"})},U=s(111),D=s(109),q=s.n(D),P=function(e){var t=e.show?Object(p.jsx)("div",{onClick:e.closeSearchModal,className:q.a.Backdrop}):null;return t},J=s(65),W=s.n(J),K=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={errorMessage:null,subjects:null,selectedSubject:"",subjectsArray:[],search:"",searchResult:[],showResult:!1,showMenu:!1,md:""},e.getSubjectEntries=function(){F.a.get("https://raw.githubusercontent.com/lockys/awesome.json/master/awesome/awesome.json").then((function(t){e.setState({subjects:t.data,errorMessage:""});var s=Object.keys(t.data).map((function(e){return t.data[e]})).reduce((function(e,t){return e.concat(t)}),[]);e.setState({subjectsArray:s}),e.state.subjects||e.setState({errorMessage:"There was an error. Unable to load the Awesome subjects."})})).catch((function(t){e.setState({errorMessage:"There was an error. Unable to load the Awesome subjects: ".concat(t,".")})}))},e.topicOnClickHandler=function(t){e.setState({selectedSubject:t,showMenu:!1})},e.searchInputOnChangeHandler=function(t){e.setState({search:t.target.value});var s=new U.a(e.state.subjectsArray,{keys:["name"]}).search(t.target.value);e.setState({searchResult:s.slice(0,20)})},e.searchInputOnFocusHandler=function(){e.setState({showResult:!0})},e.searchInputOnCloseHandler=function(){e.setState({showResult:!1})},e.setMdHandler=function(t){e.setState({md:t})},e.burgerButtonClickHandler=function(){e.setState((function(e){return{showMenu:!e.showMenu}}))},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getSubjectEntries()}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:W.a.AwesomeSearch,children:[Object(p.jsx)("div",{className:"grid",children:Object(p.jsxs)("div",{className:"cell -12of12",children:[Object(p.jsx)(C,{searchOnchange:this.searchInputOnChangeHandler,value:this.state.search,searchResult:this.state.searchResult,searchInputOnFocus:this.searchInputOnFocusHandler,showResult:this.state.showResult,homeOnClick:this.topicOnClickHandler}),Object(p.jsx)("div",{className:W.a.BurgerButton,onClick:this.burgerButtonClickHandler,children:Object(p.jsx)(A.a,{icon:_.a})})]})}),this.state.subjects?Object(p.jsxs)("div",{className:"grid",children:[Object(p.jsxs)("div",{className:"cell -2of12",style:{width:"100%"},children:[this.state.showMenu?Object(p.jsx)(x,{topics:Object.keys(this.state.subjects),topicOnClickHandler:this.topicOnClickHandler}):null,Object(p.jsx)(b,{topics:Object.keys(this.state.subjects),topicOnClickHandler:this.topicOnClickHandler})]}),Object(p.jsxs)("div",{className:"cell -10of12",style:{width:"100%"},children:[Object(p.jsx)(y.a,{path:"/",exact:!0,render:function(){return Object(p.jsx)(v,{topic:e.state.selectedSubject,subjects:e.state.subjects[e.state.selectedSubject]})}}),Object(p.jsx)(y.a,{path:"/:user/:repo",render:function(t){return Object(p.jsx)(V,Object(r.a)({setMdHandler:e.setMdHandler},t),t.match.params.repo)}})]}),Object(p.jsx)(P,{show:this.state.showResult,closeSearchModal:this.searchInputOnCloseHandler})]}):Object(p.jsx)(G,{})]})}}]),s}(c.Component),Y=Object(y.e)(K);s(300);var z=function(){return Object(p.jsx)(d.a,{children:Object(p.jsx)("div",{className:"hack",children:Object(p.jsx)(Y,{})})})};s(301);o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root"))},63:function(e,t,s){e.exports={AwesomeLists:"AwesomeLists_AwesomeLists__1huAZ",HomePage:"AwesomeLists_HomePage__2znWu"}},64:function(e,t,s){e.exports={AwesomeInput:"AwesomeInput_AwesomeInput__4uL0v",SearchResult:"AwesomeInput_SearchResult__3P019"}},65:function(e,t,s){e.exports={AwesomeSearch:"AwesomeSearch_AwesomeSearch__2VueG",BurgerButton:"AwesomeSearch_BurgerButton__334Ks",TocButton:"AwesomeSearch_TocButton__k5yK-",StarButton:"AwesomeSearch_StarButton__2gOqY"}}},[[302,1,2]]]);
//# sourceMappingURL=main.3a5b6c04.chunk.js.map