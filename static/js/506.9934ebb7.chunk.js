"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[506,513],{7506:function(n,t,e){e.r(t),e.d(t,{MovieDetailPage:function(){return f}});var r=e(5861),i=e(885),a=e(7757),c=e.n(a),o=e(2791),s=e(6871),u=e(3216),p=e(6725),l=e(6513),d=e(184);function f(){var n=(0,o.useState)(""),t=(0,i.Z)(n,2),e=t[0],a=t[1],f=(0,s.UO)().movieId,x=(0,s.s0)();if((0,o.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.fP)(f);case 3:t=n.sent,a(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}f&&function(){n.apply(this,arguments)}()}),[f]),e)return(0,d.jsxs)(l.ComponentWrap,{children:[(0,d.jsx)(l.ButtonBack,{type:"button",onClick:function(){x(-1)},children:"GO BACK"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)(l.MovieWrap,{children:[(0,d.jsx)(l.MoviePoster,{src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:"poster"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.MovieTitle,{children:e.original_title}),(0,d.jsx)(l.MovieSubTitle,{children:"User score"}),(0,d.jsx)(l.MovieSubDiscr,{children:e.vote_average}),(0,d.jsx)(l.MovieSubTitle,{children:"Overview:"}),(0,d.jsx)(l.MovieSubDiscr,{children:e.overview}),(0,d.jsx)(l.MovieSubTitle,{children:"Genres"}),(0,d.jsx)(l.GenreList,{children:e.genres.map((function(n){return(0,d.jsxs)(l.ListItem,{children:[n.name," "]},n.id)}))})]})]}),e&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(p.R,{children:[(0,d.jsx)(p.M,{to:"cast",replace:!0,children:"Cast"}),(0,d.jsx)(p.M,{to:"review",replace:!0,children:"Review"})]}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("h1",{children:"Loading..."}),children:(0,d.jsx)(s.j3,{})})]})]})]})}},6513:function(n,t,e){e.r(t),e.d(t,{ButtonBack:function(){return h},ComponentWrap:function(){return x},GenreList:function(){return w},ListItem:function(){return k},MoviePoster:function(){return v},MovieSubDiscr:function(){return b},MovieSubTitle:function(){return y},MovieTitle:function(){return m},MovieWrap:function(){return g}});var r,i,a,c,o,s,u,p,l,d=e(168),f=e(6031),x=f.ZP.div(r||(r=(0,d.Z)(["\n\tmargin: 0 20px 20px 40px;\n"]))),h=f.ZP.button(i||(i=(0,d.Z)(["\n\tdisplay: inline-flex;\n\tjustify-content: center;\n\n\tfont-size: 20px;\n\tfont-weight: 500;\n\n\tbackground-color: lightgray;\n\tborder-radius: 5px;\n\tborder: 2px solid darkgrey;\n\n\twidth: 150px;\n\tmargin: 0 0 20px 0;\n\tpadding: 5px;\n\n\ttransition: 200ms linear;\n\n\t&:hover {\n\t\tcolor: orange;\n\t\tbackground-color: #222222;\n\t\tbox-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.75);\n\t\ttransform: translateY(-1px);\n\t}\n"]))),g=f.ZP.div(a||(a=(0,d.Z)(["\n\tdisplay: inline-flex;\n\tbackground-color: lightgoldenrodyellow;\n\tpadding: 10px;\n"]))),v=f.ZP.img(c||(c=(0,d.Z)(["\n\tmargin-right: 30px;\n\twidth: 35%;\n\tmin-width: 240px;\n"]))),m=f.ZP.h3(o||(o=(0,d.Z)(["\n\tfont-size: 36px;\n\tmargin: 0;\n\tpadding: 0;\n"]))),y=f.ZP.h4(s||(s=(0,d.Z)(["\n\tfont-size: 18px;\n\tmargin: 0;\n\tpadding: 0;\n"]))),b=f.ZP.p(u||(u=(0,d.Z)(["\n\tdisplay: inline-flex;\n\tfont-size: 14px;\n\tmargin: 0 0 10px 0;\n\tpadding: 0;\n"]))),w=f.ZP.ul(p||(p=(0,d.Z)(["\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\tflex-direction: column;\n\tpadding: 0;\n"]))),k=f.ZP.li(l||(l=(0,d.Z)(["\n\tdisplay: inline-flex;\n\n\theight: 20px;\n\n\toverflow: hidden;\n"])))},3216:function(n,t,e){e.d(t,{UC:function(){return d},Yx:function(){return p},fP:function(){return x},oO:function(){return g},y:function(){return m}});var r=e(5861),i=e(7757),a=e.n(i),c=e(4569),o=e.n(c),s="2092ea308ebb6e1cdae36d6ed4a357cb",u="https://api.themoviedb.org/3/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"trending/all/day?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=506.9934ebb7.chunk.js.map