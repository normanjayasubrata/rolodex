(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),o=n.n(s),a=(n(13),n(4)),i=n(5),h=n(7),l=n(6),u=n(8),d=(n(14),n(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:e.name,src:"https://robohash.org/".concat(e.id,"?set=set2&size=180x180")}),Object(d.jsx)("h2",{children:e.name})]})},f=(n(16),function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(j,Object(u.a)({},e),e.id)}))})}),b=(n(17),function(e){var t=e.searchEventHandler,n=e.placeholder;return Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})})}),m=(n(18),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return console.log(c),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monster Rolodex"}),Object(d.jsx)(b,{searchEventHandler:this.onSearchChange,placeholder:"Search Monster"}),Object(d.jsx)(f,{monsters:c})]})}}]),n}(c.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.c255f6e9.chunk.js.map