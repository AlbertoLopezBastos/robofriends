(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),a=n(8),s=n.n(a),i=n(7),u=n(9),h=n(16),b=n(17),d=n(3),l=n(4),j=n(6),O=n(5),p=function(e){var t=e.id,n=e.name,o=e.email;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robot"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:o})]})]})},f=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e){return Object(r.jsx)(p,{id:e.id,name:e.name,email:e.email},e.id)}))})},v=function(e){var t=e.searchField,n=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"search robots",onChange:n,value:t})})},g=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"750px"},children:e.children})},x=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ups! That is not good"}):this.props.children}}]),n}(c.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return Object(r.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(c.a.Component),y=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{color:"red"}),Object(r.jsx)("h1",{className:"f2",children:"RoboFriends"})]})}}]),n}(c.a.Component),C=(n(30),n(31),"CHANGE_SEARCHFIELD"),R="REQUEST_ROBOTS_PENDING",E="REQUEST_ROBOTS_SUCCESS",S="REQUEST_ROBOTS_FAILED",k=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,c=e.isPending,a=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(y,{}),Object(r.jsx)(v,{searchField:t,searchChange:n}),Object(r.jsx)(g,{children:Object(r.jsx)(x,{children:Object(r.jsx)(f,{robots:a})})})]})}}]),n}(c.a.Component),w=Object(u.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:C,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:R}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:E,payload:t})})).catch((function(t){return e({type:S,payload:t})}))}))}}}))(k),F=(n(32),n(2)),N={searchField:""},P={isPending:!1,robots:[],error:""},T=Object(h.createLogger)(),U=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:return Object(F.a)(Object(F.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case R:return Object(F.a)(Object(F.a)({},e),{},{isPending:!0});case E:return Object(F.a)(Object(F.a)({},e),{},{robots:t.payload,isPending:!1});case S:return Object(F.a)(Object(F.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(U,Object(i.a)(b.a,T));s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u.a,{store:_,children:Object(r.jsx)(w,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.20937389.chunk.js.map