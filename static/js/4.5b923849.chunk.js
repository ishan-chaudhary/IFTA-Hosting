(this["webpackJsonppolbol-v2"]=this["webpackJsonppolbol-v2"]||[]).push([[4],{278:function(t,e,a){"use strict";var c=a(1);a(0);e.a=function(t){var e=t.c,a=t.type;return Object(c.jsxs)("div",{className:"award-categories-card",children:[Object(c.jsx)("div",{className:"img",style:{backgroundImage:"url(".concat(e.image,")")}}),Object(c.jsx)("div",{className:"data",children:Object(c.jsx)("span",{children:"cat"===a?e.name:e.heading})})]})}},286:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a(9),s=a.n(n),r=a(20),i=a(3),o=a(0),d=a(24),l=a(278),u=a(16);e.default=function(t){var e=t.match,a=Object(o.useState)([]),n=Object(i.a)(a,2),b=n[0],j=n[1];Object(o.useEffect)((function(){p(),window.scrollTo(0,0)}),[]);var p=function(){var t=Object(r.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("award/awardList?showId=".concat(e.params.showId)).then((function(t){console.log(t.data),j(t.data.payload)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"box",style:{backgroundColor:"#f5f5f5"},children:[Object(c.jsxs)("div",{style:{marginBottom:"2rem"},children:[Object(c.jsx)("h2",{}),Object(c.jsx)("span",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"Sub Categories"})]}),Object(c.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",justifyItems:"center"},children:b.map((function(t){return Object(c.jsx)(u.b,{to:"/categories/subcat/award/".concat(e.params.showId,"/").concat(t._id),children:Object(c.jsx)(l.a,{c:t,type:"sub"})})}))})]})}}}]);
//# sourceMappingURL=4.5b923849.chunk.js.map