(this["webpackJsonpmovie-searcher"]=this["webpackJsonpmovie-searcher"]||[]).push([[0],{29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c(14),i=c.n(s),o=c(10),r=c(3),j=c(5),l=c.p+"static/media/lupa.5ba32183.svg",d=c.p+"static/media/notFoundImage.f3ca89bf.jpg",b=c.p+"static/media/logo MovieDB.caee7457.svg",u=(c(29),function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),s=c[0],i=c[1],u=Object(n.useState)(""),h=Object(j.a)(u,2),p=h[0],O=h[1],m=Object(n.useState)(!1),v=Object(j.a)(m,2),f=v[0],x=v[1],g=Object(r.f)();return Object(n.useEffect)((function(){console.log("text",s),fetch("https://api.themoviedb.org/3/search/tv?api_key=b2907782d07859a652052d3bae537475&language=en-US&page=1&query=".concat(s,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){console.log("data",e),O(e)})).catch((function(){i(null)}))}),[s]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"HeaderContainer",children:[Object(a.jsx)(o.b,{to:"/",className:"HeaderTittle",children:Object(a.jsx)("img",{className:"logoImg",src:b,alt:"logo"})}),Object(a.jsxs)("div",{className:"searchContainer",onSelect:function(){x(!0)},children:[Object(a.jsxs)("div",{className:"inputContainer",onBlur:function(){setTimeout((function(){x(!1)}),100)},children:[Object(a.jsx)("input",{type:"text",onChange:function(e){i(e.target.value),e.target.value=e.target.value.replace(/[#@]/g,"")}}),Object(a.jsx)("button",{onClick:function(){g.push("/Search/".concat(s))},children:Object(a.jsx)("img",{className:"lupa",src:l,alt:"lupa"})})]}),f&&p&&!p.errors&&Object(a.jsx)("div",{className:"resultContainer",children:Object(a.jsx)("div",{className:"results",children:p.results.map((function(e,t){return t<9?Object(a.jsxs)("div",{className:"itemResult",onClick:function(){x(!1),console.log("item.id",e.id),g.push("/DetailTv/".concat(e.id))},children:[e.backdrop_path?Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w220_and_h330_face/".concat(e.backdrop_path),alt:e.backdrop_path}):e.poster_path?Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w220_and_h330_face/".concat(e.poster_path),alt:e.poster_path}):Object(a.jsx)("img",{src:d,alt:d}),Object(a.jsxs)("div",{className:"DataContainer",children:[Object(a.jsx)("strong",{children:e.name}),Object(a.jsxs)("span",{children:[Object(a.jsx)("strong",{children:"first air date:"}),e.first_air_date]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("strong",{children:"vote average:"}),e.vote_average]})]})]},e.id):null}))})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:"https://co.linkedin.com/in/cristian-florez-a291b3161",children:Object(a.jsx)("h4",{children:"Cristian Florez"})}),Object(a.jsx)("a",{href:"https://github.com/krisyupher",children:Object(a.jsx)("h4",{children:"Developer FrontEnd"})})]})]}),console.log("result",p)]})}),h=c(12),p=c.p+"static/media/404.441829b6.jpg",O=(c(35),function(e){var t=e.movie,c=Object(r.f)();return Object(a.jsxs)("div",{className:"CardMovieContainer",onClick:function(){c.push("/DetailTv/".concat(t.id))},children:[null!==t.poster_path?Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w220_and_h330_face/".concat(t.poster_path),alt:t.poster_path}):null!==t.backdrop_path?Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w220_and_h330_face/".concat(t.backdrop_path),alt:t.backdrop_path}):Object(a.jsx)("img",{src:p,alt:"AuxImagen"}),Object(a.jsxs)("div",{className:"DataContainer",children:[Object(a.jsx)("h2",{children:t.original_name}),Object(a.jsx)("p",{children:t.overview}),Object(a.jsxs)("div",{className:"Data",children:[Object(a.jsx)("strong",{children:"Range:"}),Object(a.jsx)("span",{children:t.vote_average})]}),Object(a.jsxs)("div",{className:"Data",children:[Object(a.jsx)("strong",{children:"Popularity:"}),Object(a.jsx)("span",{children:t.popularity})]})]})]})}),m=(c(36),function(){var e=Object(r.f)();return Object(a.jsxs)("div",{className:"NotFoundContainer",children:[Object(a.jsx)("h3",{children:"your search was unsuccessful"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"P404",children:"404"}),Object(a.jsx)("p",{className:!0,children:"Page not found"})]}),Object(a.jsx)("button",{onClick:function(){e.push("/")},children:"Go back"})]})}),v=(c(37),function(e){var t=e.match,c=(e.history,Object(h.c)((function(e){return e.moviesList}))),s=Object(h.c)((function(e){return e.resultList})),i=Object(n.useState)(1),o=Object(j.a)(i,2),r=o[0],l=o[1],d=Object(n.useState)([]),b=Object(j.a)(d,2),u=b[0],p=b[1],v=Object(h.b)();window.onscroll=function(){var e=window.scrollY;document.body.scrollHeight-1e3<=e&&l(r+1)};return Object(n.useEffect)((function(){"string"===typeof t.params.id?fetch("https://api.themoviedb.org/3/search/tv?api_key=b2907782d07859a652052d3bae537475&language=en-US&page=".concat(r,"&query=").concat(t.params.id,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){v({type:"SET_RESULT_LIST",payload:e})})).catch((function(){console.log("Grave error")})):function(e){fetch("https://api.themoviedb.org/3/tv/popular?api_key=b2907782d07859a652052d3bae537475&language=en-US&page=".concat(e)).then((function(e){return e.json()})).then((function(e){v({type:"SET_MOVIES_LIST",payload:e})})).catch((function(){console.log("Grave error")}))}(r)}),[r,t]),Object(n.useEffect)((function(){"string"===typeof t.params.id?(l(1),v({type:"SET_MOVIES_CLEAR",payload:[]}),v({type:"SET_RESULT_CLEAR",payload:[]})):(l(1),v({type:"SET_RESULT_CLEAR",payload:[]}))}),[t]),Object(n.useEffect)((function(){0!==s.length?p(s):p(c)}),[c,s]),Object(a.jsxs)("div",{className:"HeroContainer",children:[Object(a.jsx)("div",{className:"CardMovies",children:void 0!==u&&u.length>0?u.map((function(e,t){return Object(a.jsx)(O,{movie:e},t)})):Object(a.jsx)(m,{})}),console.log("moviesList",c)]})}),f=(c(38),function(e){var t=e.match,c=e.history,s=Object(n.useState)(),i=Object(j.a)(s,2),o=i[0],r=i[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=b2907782d07859a652052d3bae537475")).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(){console.log("Grave error")}))}),[]),Object(a.jsxs)("div",{className:"MovieDetailContainer",children:[Object(a.jsx)("button",{className:"back",onClick:function(){c.goBack()},children:"\u2190 Back"}),void 0!==o&&Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(O,{movie:o}),Object(a.jsxs)("div",{className:"DataContainer",children:[Object(a.jsx)("h1",{children:o.original_title}),Object(a.jsx)("h3",{children:o.genres.map((function(e){return e.name}))}),Object(a.jsxs)("h4",{children:["promedio de votos",o.vote_average]}),Object(a.jsx)("p",{children:o.overview})]})]})]})}),x=(c(39),c(40),function(e){var t=e.match,c=e.history,s=Object(n.useState)(""),i=Object(j.a)(s,2),o=i[0],r=i[1],l=Object(n.useState)(),d=Object(j.a)(l,2),b=d[0],u=d[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/".concat(t.params.id,"?api_key=b2907782d07859a652052d3bae537475")).then((function(e){return e.json()})).then((function(e){r(e),h(0)})).catch((function(){console.log("Grave error")}))}),[t]);var h=function(e){fetch("https://api.themoviedb.org/3/tv/".concat(t.params.id,"/season/").concat(e,"?api_key=b2907782d07859a652052d3bae537475")).then((function(e){return e.json()})).then((function(e){u(e)})).catch((function(){console.log("Grave error")}))};return Object(a.jsxs)("div",{className:"TvDetailContainer",children:[o&&""!==o&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"BackContainer",children:Object(a.jsx)("button",{className:"back",onClick:function(){c.goBack()},children:"\u2190 Back"})}),Object(a.jsx)(O,{movie:o})]}),Object(a.jsxs)("div",{className:"Tabs",children:[Object(a.jsx)("h3",{children:"SEASONS"}),Object(a.jsx)("div",{className:"TabList",children:o&&o.seasons.length>0&&o.seasons.map((function(e,t){return Object(a.jsx)("div",{className:"Tab",onClick:function(){return h(t)},children:t+1},t)}))}),b&&b.episodes&&b.episodes.length>0&&b.episodes.map((function(e,t){return Object(a.jsxs)("div",{className:"episodesContainer",children:[Object(a.jsx)("p",{children:t+1}),Object(a.jsx)("p",{children:e.name})]},t)}))]})]}),console.log("tvShow.poster_path",o)]})}),g=c(4),_=function(){var e=Object(n.useState)({email:"",radio:""}),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),o=Object(j.a)(i,2),r=o[0],l=o[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"text",onChange:function(e){s(Object(g.a)(Object(g.a)({},c),{},{email:e.target.value}))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"radioPrueba",value:"lala",onChange:function(e){s(Object(g.a)(Object(g.a)({},c),{},{radio:e.target.value}))}})," lala",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"radio",name:"radioPrueba",value:"lele",onChange:function(e){s(Object(g.a)(Object(g.a)({},c),{},{radio:e.target.value}))}})," lele",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"radio",name:"radioPrueba",value:"lili",onChange:function(e){s(Object(g.a)(Object(g.a)({},c),{},{radio:e.target.value}))}})," lili"]}),console.log("data",c),console.log("validacion",r),!1===r&&Object(a.jsx)("div",{children:"Todo mal"}),Object(a.jsx)("button",{onClick:function(){l(!0),Object.keys(c).map((function(e){""===c[e]&&l(!1)}))},children:"Validar"})]})},S=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(u,{}),Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/Movie-Searcher-TMDB/",component:v}),Object(a.jsx)(r.a,{exact:!0,path:"/",component:v}),Object(a.jsx)(r.a,{exact:!0,path:"/Search",component:v}),Object(a.jsx)(r.a,{exact:!0,path:"/Search/:id",component:v}),Object(a.jsx)(r.a,{exact:!0,path:"/Detail/:id",component:f}),Object(a.jsx)(r.a,{exact:!0,path:"/DetailTv/:id",component:x}),Object(a.jsx)(r.a,{exact:!0,path:"/prueba",component:_})]})]})},y=(c(41),c(16)),E=function(e,t){switch(t.type){case"SET_MOVIES_LIST":var c=e.moviesList.concat(t.payload.results);return Object(g.a)(Object(g.a)({},e),{},{moviesList:c});case"SET_MOVIES_CLEAR":return Object(g.a)(Object(g.a)({},e),{},{moviesList:t.payload});case"SET_RESULT_LIST":var a=e.resultList.concat(t.payload.results);return Object(g.a)(Object(g.a)({},e),{},{resultList:a});case"SET_RESULT_CLEAR":return Object(g.a)(Object(g.a)({},e),{},{resultList:t.payload});default:return e}},N={moviesList:[],resultList:[]},C=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),k=Object(y.b)(E,N,C);i.a.render(Object(a.jsx)(h.a,{store:k,children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.cdf57f38.chunk.js.map