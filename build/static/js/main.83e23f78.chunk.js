(this["webpackJsonpmovie-search-2"]=this["webpackJsonpmovie-search-2"]||[]).push([[0],{12:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(22),r=c.n(i),o=(c(12),c(5)),s=c(6),l=c.n(s),d=c(9),j=(c(13),c(3)),u=c(4),b=c.n(u),h="GET",m="get-data",v="error";function p(e,t){switch(t.type){case h:return{loading:!0,movies:[]};case m:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,movies:t.payload.movies});case v:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.payload.error,movies:[]});default:return e}}var f=c(0);function O(e){var t=e.movie,c=e.movieId,a=Object(n.useState)([]),i=Object(o.a)(a,2),r=i[0],s=i[1];console.log(c);var j="".concat("47b41b8d27mshbe69129491e3e82p1feba9jsnc57a7f91450a"),u={method:"GET",url:"https://streaming-availability.p.rapidapi.com/get/basic",params:{country:"us",imdb_id:c,output_language:"en"},headers:{"x-rapidapi-host":"streaming-availability.p.rapidapi.com","x-rapidapi-key":j}},h=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request(u,{movieId:{movieId:c}}).then((function(e){console.log(e.data.streamingInfo),s([e.data.streamingInfo]),console.log(r[0]),console.log(Object.keys(r[0]))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"card m-1",style:{width:"20vw",border:"1px solid black"},children:[Object(f.jsx)("div",{style:{width:"100%",objectFit:"contain"},children:Object(f.jsx)("img",{className:"card-img-top img-responsive",src:t.Poster,alt:"movie poster",style:{height:"40vh",width:"20vw"}})}),Object(f.jsxs)("div",{className:"card-body mt-2",style:{fontSize:"0.7rem",height:"20vh"},children:[Object(f.jsxs)("p",{className:"card-title",style:{fontSize:"0.8rem",fontWeight:"bold"},children:[t.Title,"(",t.Year,")"]}),Object(f.jsxs)("p",{children:["Rated ",t.Rated]}),Object(f.jsx)("p",{children:t.Genre}),Object(f.jsxs)("p",{children:["IMDb Rating: ",t.imdbRating," / 10"]})]}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("button",{onClick:h,children:"check for streaming"}),Object(f.jsx)("p",{children:r.length>0?Object.keys(r[0]).map((function(e,t){return Object(f.jsx)("ul",{children:Object(f.jsx)("li",{children:e})},t)})):""})]}),Object(f.jsx)("div",{className:"card-body",style:{height:"40vh",fontSize:"0.7rem"},children:Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:["Released: ",t.Released]}),Object(f.jsxs)("li",{children:["Runtime: ",t.Runtime]}),Object(f.jsxs)("li",{children:["Director: ",t.Director]}),Object(f.jsxs)("li",{children:["Actors: ",t.Actors]}),Object(f.jsxs)("li",{children:["Language: ",t.Language]}),Object(f.jsxs)("li",{children:["Country: ",t.Country]}),Object(f.jsxs)("li",{children:["Box Office: ",t.BoxOffice]})]})})]})}function g(e){var t=e.movieId,c=function(e){var t=Object(n.useReducer)(p,{movies:[],loading:!0}),c=Object(o.a)(t,2),a=c[0],i=c[1];console.log(e);var r="https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat("4079f89d");return Object(n.useEffect)((function(){var t=b.a.CancelToken.source();return i({type:h}),b.a.get(r,{cancelToken:t.token,movieId:{movieId:e}}).then((function(e){i({type:m,payload:{movies:[e.data]}})})).catch((function(e){b.a.isCancel(e)||i({type:v,payload:{error:e}})})),function(){t.cancel()}}),[e]),a}(t),a=c.movies,i=c.loading,r=c.error;return console.log(a),Object(f.jsxs)("div",{children:[i&&Object(f.jsx)("h1",{children:"Loading..."}),r&&Object(f.jsx)("h1",{children:"Error"}),a.length>0?a.map((function(e){return Object(f.jsx)(O,{movie:e,movieId:t},e.imdbID)})):""]})}function x(e){var t=e.search,c=e.setSearch,a=e.movieId,i=e.setMovieId;Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://www.omdbapi.com/?s=".concat(t,"&apikey=").concat("4079f89d","&plot=full")).then((function(e){console.log(e.data.Search),i(e.data.Search||[]),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{className:"m-2",onChange:function(e){c(e.target.value)},value:t,onKeyDown:function(e){"Enter"===e.key&&r()},type:"text",placeholder:"Enter A Movie Title",style:{width:"50vw"}}),Object(f.jsx)("button",{style:{background:"maroon"},sz:"sm",onClick:function(){console.log(t),r()},onChange:function(){c("")},children:"Search"})]}),Object(f.jsx)("div",{id:"results",children:a.length>0?a.map((function(e){return Object(f.jsx)(g,{movieId:e.imdbID},e.imdbID)})):""})]})}var y=c(51);var w=function(){var e=Object(n.useState)("batman"),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),r=Object(o.a)(i,2),s=r[0],l=r[1];return Object(f.jsx)(y.a,{children:Object(f.jsx)(x,{search:c,setSearch:a,movieId:s,setMovieId:l})})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.83e23f78.chunk.js.map