(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{39:function(t,n,e){"use strict";e.r(n);var c=e(0),o=e(2),r=e(15),a=e.n(r),i=e(6),u=e(4),s=function(t){var n=t.note,e=t.toggleImportance,o=n.important?"make not important":"make important";return Object(c.jsxs)("li",{children:[n.content,Object(c.jsx)("button",{onClick:e,children:o})]})},j=e(3),l=e.n(j),b="https://boiling-taiga-28653.herokuapp.com/api/notes",d=function(){return l.a.get(b)},f=function(t){return l.a.post(b,t)},p=function(t,n){return l.a.put("".concat(b,"/").concat(t),n)},h=function(){var t=Object(o.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],a=Object(o.useState)(""),j=Object(u.a)(a,2),l=j[0],b=j[1],h=Object(o.useState)(!0),m=Object(u.a)(h,2),O=m[0],g=m[1];Object(o.useEffect)((function(){d().then((function(t){r(t.data)}))}),[]);var v=O?e:e.filter((function(t){return!0===t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!O)},children:["show ",O?"important":"all"]})}),Object(c.jsx)("ul",{children:v.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(i.a)(Object(i.a)({},n),{},{important:!n.important});p(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n.data})))})).catch((function(c){alert("the note '".concat(n.content,"' was already deleted from server")),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:e.length+1,content:l,date:(new Date).toISOString(),important:Math.random()<.5};f(n).then((function(t){r(e.concat(t.data)),b("")}))},children:[Object(c.jsx)("input",{value:l,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]})]})};a.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c709c756.chunk.js.map