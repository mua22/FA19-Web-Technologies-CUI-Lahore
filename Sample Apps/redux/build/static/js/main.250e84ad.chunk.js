(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(35)},27:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(5),l=n.n(o),c=(n(27),n(28),n(7)),i=n(16),u=n(12),s="ADD_TODO",d="DELETE_TODO",m="SWITCH_TODO",f="SET_FILTER",b="SHOW_ALL",h="COMPLETED",E="NOT_COMPLETED";function p(t){window.store.dispatch({type:f,filter:t})}var w=Object(c.b)(function(t){return t})(function(t){var e=t.todos,n=t.filter,a=function(t,e){switch(e){case b:return t;case h:return t.filter(function(t){return t.status});case E:return t.filter(function(t){return!t.status});default:return t}}(e,n);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"btn-group float-left"},r.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return p(b)}},"Show All"),r.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){return p(h)}},"Completed"),r.a.createElement("button",{onClick:function(){return p(E)},className:"btn btn-sm btn-dark"},"Not Completed")),r.a.createElement("p",{className:"float-right"},n+" Todos "),r.a.createElement("table",{className:"table table-dark  table-bordered table-collapsed text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"SR"),r.a.createElement("th",null,"TODO "),r.a.createElement("th",null,"STATUS"),r.a.createElement("th",null,"Remove Todo"))),r.a.createElement("tbody",null,a.map(function(t,e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e+1),r.a.createElement("td",{style:{textDecoration:t.status?"line-through":""}},t.text),r.a.createElement("td",null,r.a.createElement(i.a,{style:{color:"lightgreen",fontSize:"25px"},onClick:function(){return function(t){window.store.dispatch({type:m,index:t})}(e)},icon:t.status?u.a:u.b})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return function(t){window.store.dispatch({type:d,index:t})}(e)},className:"btn btn-danger"},"Remove Todo")))}))))}),O=n(17),v=n(18),g=n(20),x=n(19),T=n(21),y=function(t){function e(){var t,n;Object(O.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(g.a)(this,(t=Object(x.a)(e)).call.apply(t,[this].concat(r)))).state={text:""},n.hanldeSubmit=function(t){t.preventDefault(),window.store.dispatch({type:s,todo:{text:n.state.text,status:!1}}),n.setState({text:""})},n.hanldeChange=function(t){n.setState({text:t.target.value})},n}return Object(T.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.hanldeSubmit,className:"text-center"},r.a.createElement("input",{type:"text",className:"ml-auto mr-auto mt-2 mb-2 form-control col-3",placeholder:"Enter A Todo",onChange:this.hanldeChange,value:this.state.text}))}}]),e}(a.Component),k=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(4),S={todos:[{text:"Pakistan Zindabad",status:!0}],filter:b};var N=n(6),j=Object(N.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(C.a)(t,function(t){t.todos.push(e.todo)});case f:return Object(C.a)(t,function(t){t.filter=e.filter});case m:return Object(C.a)(t,function(t){t.todos[e.index].status=!t.todos[e.index].status});case d:return Object(C.a)(t,function(t){t.todos.splice(e.index,1)});default:return t}});window.store=j,l.a.render(r.a.createElement(c.a,{store:j},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.250e84ad.chunk.js.map