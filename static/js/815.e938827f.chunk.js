"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[815,979],{5815:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return f}});var r=e(5861),a=e(885),c=e(7757),i=e.n(c),u=e(2791),o=e(6871),s=e(3216),p=e(979),l=e(184);function f(){var n=(0,o.UO)().movieId,t=(0,u.useState)([]),e=(0,a.Z)(t,2),c=e[0],f=e[1];return(0,u.useEffect)((function(){function t(){return(t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.y)(n);case 3:e=t.sent,f(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}n&&function(){t.apply(this,arguments)}()}),[n]),(0,l.jsx)(l.Fragment,{children:0===c.length?(0,l.jsx)("p",{children:"We haven't any information about movie"}):(0,l.jsx)("div",{children:(0,l.jsx)(p.List,{children:c.map((function(n){return(0,l.jsxs)(p.ListItem,{children:[n.profile_path&&(0,l.jsx)(p.ImgAct,{src:"https://image.tmdb.org/t/p/original/".concat(n.profile_path),alt:"actor",width:"100"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(p.Propert,{children:["Original name:"," ",(0,l.jsx)(p.PropertValue,{children:n.original_name})," "]}),(0,l.jsxs)(p.Propert,{children:["Character: ",(0,l.jsx)(p.PropertValue,{children:n.character})]}),(0,l.jsxs)(p.Propert,{children:["Popularity: ",(0,l.jsx)(p.PropertValue,{children:n.popularity})]})]})]},n.id)}))})})})}},979:function(n,t,e){e.r(t),e.d(t,{ImgAct:function(){return d},List:function(){return l},ListItem:function(){return p},Propert:function(){return f},PropertValue:function(){return h}});var r,a,c,i,u,o=e(168),s=e(6031),p=s.ZP.li(r||(r=(0,o.Z)(["\n\tdisplay: inline-flex;\n\n\tmargin: 10px 20px 10px 10px;\n\n\twidth: 300px;\n\theight: 160px;\n\tmin-width: 200px;\n\n\t&:nth-child(odd) {\n\t\tbackground-color: #aaaaaa;\n\t}\n\n\t&:nth-child(2n) {\n\t\tbackground-color: #777;\n\t}\n\n\t&:last-child {\n\t\tmargin: 0;\n\t}\n"]))),l=s.ZP.ul(a||(a=(0,o.Z)(["\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\tmargin: 40px;\n\tpadding: 10px;\n\n\tbackground-color: #bbb;\n"]))),f=s.ZP.p(c||(c=(0,o.Z)(["\n\tmargin: 10px 0 0 0;\n\tfont-weight: 500;\n"]))),h=s.ZP.span(i||(i=(0,o.Z)(["\n\tfont-weight: 400;\n"]))),d=s.ZP.img(u||(u=(0,o.Z)(["\n\tmargin: 0 20px 0 0;\n"])))},3216:function(n,t,e){e.d(t,{UC:function(){return f},Yx:function(){return p},fP:function(){return d},oO:function(){return x},y:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),i=e(4569),u=e.n(i),o="2092ea308ebb6e1cdae36d6ed4a357cb",s="https://api.themoviedb.org/3/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"trending/all/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=815.e938827f.chunk.js.map