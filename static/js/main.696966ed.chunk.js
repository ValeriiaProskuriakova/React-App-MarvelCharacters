(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,r){},,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(9),i=r.n(c),s=r(2),l=r(3),o=r(5),j=r(4),h=(r(14),r(0)),m=function(){return Object(h.jsxs)("header",{className:"app__header",children:[Object(h.jsx)("h1",{className:"app__title",children:Object(h.jsxs)("a",{href:"#",children:[Object(h.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(h.jsx)("nav",{className:"app__menu",children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Characters"})})})})]})},d=(r(16),r.p+"static/media/mjolnir.61f31e18.png"),u=r(6),b=r.n(u),p=r(7),f=function e(){var t=this;Object(s.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="0add50672ad1856cc25c64440985be1a",this.getData=function(){var e=Object(p.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Error, status of the error is ".concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(p.a)(b.a.mark((function e(){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("".concat(t._apiBase,"characters?limit=9&apikey=").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(t.transformCharacter));case 4:case"end":return e.stop()}}),e)}))),this.getOneCharacter=function(){var e=Object(p.a)(b.a.mark((function e(r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("".concat(t._apiBase,"characters/").concat(r,"?apikey=").concat(t._apiKey));case 2:return a=e.sent,e.abrupt("return",t.transformCharacter(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.transformCharacter=function(e){return{id:e.id,imgSrc:e.thumbnail.path+"."+e.thumbnail.extension,name:e.name,description:e.description?e.description:"SORRY, DESCRIPTION IS NOT AVAILABLE",homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},O=function(){return Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(h.jsx)("g",{transform:"translate(80,50)",children:Object(h.jsx)("g",{transform:"rotate(0)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(h.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(h.jsx)("g",{transform:"rotate(45)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(h.jsx)("g",{transform:"translate(50,80)",children:Object(h.jsx)("g",{transform:"rotate(90)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(h.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(h.jsx)("g",{transform:"rotate(135)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(h.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(h.jsx)("g",{transform:"rotate(180)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(h.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(h.jsx)("g",{transform:"rotate(225)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(h.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(h.jsx)("g",{transform:"rotate(270)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(h.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(h.jsx)("g",{transform:"rotate(315)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},x=r.p+"static/media/error_.42292aa1.gif",v=function(){return Object(h.jsx)("img",{src:x})},g=function(e){Object(o.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).marvelService=new f,a.onGetDataLoaded=function(e){a.setState({char:e,spinner:!1})},a.onError=function(){a.setState({error:!0,spinner:!1})},a.onTryIt=function(){a.setState({spinner:!0,error:!1})},a.getData=function(){a.onTryIt();var e=Math.floor(400*Math.random()+1011e3);a.marvelService.getOneCharacter(e).then(a.onGetDataLoaded).catch(a.onError)},a.state={char:{},spinner:!0,error:!1},console.log("Constructor"),a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.char,r=e.spinner,a=e.error,n=a?Object(h.jsx)(v,{}):null,c=r?Object(h.jsx)(O,{}):null,i=r||a?null:Object(h.jsx)(y,{char:t});return Object(h.jsxs)("div",{className:"randomchar",children:[n,c,i,Object(h.jsxs)("div",{className:"randomchar__static",children:[Object(h.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(h.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(h.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(h.jsx)("button",{className:"button button__main",onClick:this.getData,children:Object(h.jsx)("div",{className:"inner",children:"try it"})}),Object(h.jsx)("img",{src:d,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),r}(a.Component),y=function(e){var t=e.char,r=t.imgSrc,a=t.name,n=t.description,c=t.homepage,i=t.wiki,s={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"==r&&(s={objectFit:"fill"}),Object(h.jsxs)("div",{className:"randomchar__block",children:[Object(h.jsx)("img",{style:s,src:r,alt:"Random character",className:"randomchar__img"}),Object(h.jsxs)("div",{className:"randomchar__info",children:[Object(h.jsx)("p",{className:"randomchar__name",children:a}),Object(h.jsx)("p",{className:"randomchar__descr",children:n}),Object(h.jsxs)("div",{className:"randomchar__btns",children:[Object(h.jsx)("a",{href:c,target:"blank",className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"Homepage"})}),Object(h.jsx)("a",{href:i,target:"blank",className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},_=g,N=(r(18),r.p,function(e){Object(o.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).marvelServices=new f,a.onCharListLoaded=function(e){a.setState({charList:e,spinner:!1})},a.onError=function(){a.setState({error:!0,spinner:!1})},a.createList=function(e){var t=e.map((function(e){var t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"==e.imgSrc&&(t={objectFit:"fill"}),Object(h.jsxs)("li",{className:"char__item",onClick:function(){a.props.onSelectedIdChar(e.id)},children:[Object(h.jsx)("img",{style:t,src:e.imgSrc,alt:e.name}),Object(h.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(h.jsx)("ul",{className:"char__grid",children:t})},a.state={charList:[],spinner:!0,error:!1},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.marvelServices.getAllCharacters().then(this.onCharListLoaded).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.spinner,r=e.error,a=e.charList,n=this.createList(a),c=r?Object(h.jsx)(v,{}):null,i=t?Object(h.jsx)(O,{}):null,s=t||r?null:n;return Object(h.jsxs)("div",{className:"char__list",children:[s,c,i,Object(h.jsx)("button",{className:"button button__main button__long",children:Object(h.jsx)("div",{className:"inner",children:"load more"})})]})}}]),r}(a.Component)),C=(r(19),r.p,function(e){Object(o.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).marvelService=new f,a.onCharInfoLoaded=function(e){a.setState({char:e,spinner:!1,error:!1})},a.onError=function(){a.setState({error:!0,spinner:!1})},a.state={char:{},spinner:!0,error:!1},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.charId;this.marvelService.getOneCharacter(e).then(this.onCharInfoLoaded).catch(this.onError)}},{key:"componentDidUpdate",value:function(e,t){if(e!==this.props){this.setState({spinner:!0});var r=this.props.charId;this.marvelService.getOneCharacter(r).then(this.onCharInfoLoaded).catch(this.onError)}}},{key:"render",value:function(){var e=this.state,t=e.char,r=e.spinner,a=e.error,n=this.props.charId,c=a?Object(h.jsx)(v,{}):null,i=r?Object(h.jsx)(O,{}):null,s=a||r?null:Object(h.jsx)(k,{char:t,charId:n});return Object(h.jsxs)("div",{className:"char__info",children:[c,i,s]})}}]),r}(a.Component)),k=function(e){var t=e.char,r=(e.charId,t.imgSrc),a=t.name,n=t.description,c=t.homepage,i=t.wiki,s={objectFit:"cover"};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"==r&&(s={objectFit:"fill"});var l=t.comics.map((function(e){return Object(h.jsx)("li",{className:"char__comics-item",children:e.name})}));return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"char__basics",children:[Object(h.jsx)("img",{style:s,src:r,alt:"abyss"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"char__info-name",children:a}),Object(h.jsxs)("div",{className:"char__btns",children:[Object(h.jsx)("a",{href:c,className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"homepage"})}),Object(h.jsx)("a",{href:i,className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(h.jsx)("div",{className:"char__descr",children:n}),Object(h.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(h.jsx)("ul",{className:"char__comics-list",children:l})]})},S=C,T=r.p+"static/media/vision.067d4ae1.png",w=function(e){Object(o.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedIdChar:"1011334"},e.onSelectedIdChar=function(t){e.setState({selectedIdChar:t})},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("main",{children:[Object(h.jsx)(_,{}),Object(h.jsxs)("div",{className:"char__content",children:[Object(h.jsx)(N,{onSelectedIdChar:this.onSelectedIdChar}),Object(h.jsx)(S,{charId:this.state.selectedIdChar})]}),Object(h.jsx)("img",{className:"bg-decoration",src:T,alt:"vision"})]})]})}}]),r}(a.Component);r(20);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.696966ed.chunk.js.map