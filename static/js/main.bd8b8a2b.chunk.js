(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(10),s=a.n(c),i=a(2),o=a(3),l=a(5),j=a(4),h=(a(15),a(0)),d=function(){return Object(h.jsxs)("header",{className:"app__header",children:[Object(h.jsx)("h1",{className:"app__title",children:Object(h.jsxs)("a",{href:"#",children:[Object(h.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(h.jsx)("nav",{className:"app__menu",children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Characters"})})})})]})},m=(a(17),a.p+"static/media/mjolnir.61f31e18.png"),u=a(6),b=a.n(u),f=a(7),p=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="0add50672ad1856cc25c64440985be1a",this.getData=function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Error, status of the error is ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=function(){var e=Object(f.a)(b.a.mark((function e(a,r){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("".concat(t._apiBase,"characters?limit=").concat(a,"&offset=").concat(r,"&apikey=").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(t.transformCharacter));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getOneCharacter=function(){var e=Object(f.a)(b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData("".concat(t._apiBase,"characters/").concat(a,"?apikey=").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t.transformCharacter(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.transformCharacter=function(e){return{id:e.id,imgSrc:e.thumbnail.path+"."+e.thumbnail.extension,name:e.name,description:e.description?e.description:"SORRY, DESCRIPTION IS NOT AVAILABLE",homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},O=function(){return Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(h.jsx)("g",{transform:"translate(80,50)",children:Object(h.jsx)("g",{transform:"rotate(0)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(h.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(h.jsx)("g",{transform:"rotate(45)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(h.jsx)("g",{transform:"translate(50,80)",children:Object(h.jsx)("g",{transform:"rotate(90)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(h.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(h.jsx)("g",{transform:"rotate(135)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(h.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(h.jsx)("g",{transform:"rotate(180)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(h.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(h.jsx)("g",{transform:"rotate(225)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(h.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(h.jsx)("g",{transform:"rotate(270)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(h.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(h.jsx)("g",{transform:"rotate(315)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},x=a.p+"static/media/error_.42292aa1.gif",v=function(){return Object(h.jsx)("img",{src:x})},g=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).marvelService=new p,r.onGetDataLoaded=function(e){r.setState({char:e,spinner:!1})},r.onError=function(){r.setState({error:!0,spinner:!1})},r.onTryIt=function(){r.setState({spinner:!0,error:!1})},r.getData=function(){r.onTryIt();var e=Math.floor(400*Math.random()+1011e3);r.marvelService.getOneCharacter(e).then(r.onGetDataLoaded).catch(r.onError)},r.state={char:{},spinner:!0,error:!1},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.spinner,r=e.error,n=r?Object(h.jsx)(v,{}):null,c=a?Object(h.jsx)(O,{}):null,s=a||r?null:Object(h.jsx)(y,{char:t});return Object(h.jsxs)("div",{className:"randomchar",children:[n,c,s,Object(h.jsxs)("div",{className:"randomchar__static",children:[Object(h.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(h.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(h.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(h.jsx)("button",{className:"button button__main",onClick:this.getData,children:Object(h.jsx)("div",{className:"inner",children:"try it"})}),Object(h.jsx)("img",{src:m,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(r.Component),y=function(e){var t=e.char,a=t.imgSrc,r=t.name,n=t.description,c=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"fill"}),Object(h.jsxs)("div",{className:"randomchar__block",children:[Object(h.jsx)("img",{style:i,src:a,alt:"Random character",className:"randomchar__img"}),Object(h.jsxs)("div",{className:"randomchar__info",children:[Object(h.jsx)("p",{className:"randomchar__name",children:r}),Object(h.jsx)("p",{className:"randomchar__descr",children:n}),Object(h.jsxs)("div",{className:"randomchar__btns",children:[Object(h.jsx)("a",{href:c,target:"blank",className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"Homepage"})}),Object(h.jsx)("a",{href:s,target:"blank",className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},_=g,N=a(9),C=(a(19),a.p,function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).marvelServices=new p,r.setOffset=function(){var e=r.state.offset+9;r.setState({offset:e,spinner:!0})},r.loadMoreCharacters=function(){r.setOffset(),r.marvelServices.getAllCharacters("9",r.state.offset+9).then(r.onCharListLoaded).catch(r.onError)},r.onCharListLoaded=function(e){r.setState((function(t){return{charList:[].concat(Object(N.a)(t.charList),Object(N.a)(e)),spinner:!1}}))},r.onError=function(){r.setState({error:!0,spinner:!1})},r.createList=function(e){var t=e.map((function(e){var t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"==e.imgSrc&&(t={objectFit:"fill"}),Object(h.jsxs)("li",{className:"char__item",onClick:function(){r.props.onSelectedIdChar(e.id)},children:[Object(h.jsx)("img",{style:t,src:e.imgSrc,alt:e.name}),Object(h.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(h.jsx)("ul",{className:"char__grid",children:t})},r.state={charList:[],spinner:!0,error:!1,offset:9},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.marvelServices.getAllCharacters("9",0).then(this.onCharListLoaded).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.spinner,a=e.error,r=e.charList,n=this.createList(r),c=a?Object(h.jsx)(v,{}):null,s=t?Object(h.jsx)(O,{}):null,i=t||a?null:n;return Object(h.jsxs)("div",{className:"char__list",children:[i,c,s,Object(h.jsx)("button",{className:"button button__main button__long",children:Object(h.jsx)("div",{className:"inner",onClick:this.loadMoreCharacters,children:"load more"})})]})}}]),a}(r.Component)),k=(a(20),a.p,function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).marvelService=new p,r.onCharInfoLoaded=function(e){r.setState({char:e,spinner:!1,error:!1})},r.onError=function(){r.setState({error:!0,spinner:!1})},r.state={char:{},spinner:!0,error:!1},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.charId;this.marvelService.getOneCharacter(e).then(this.onCharInfoLoaded).catch(this.onError)}},{key:"componentDidUpdate",value:function(e){if(e.charId!==this.props.charId){this.setState({spinner:!0});var t=this.props.charId;this.marvelService.getOneCharacter(t).then(this.onCharInfoLoaded).catch(this.onError)}}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.spinner,r=e.error,n=this.props.charId,c=r?Object(h.jsx)(v,{}):null,s=a?Object(h.jsx)(O,{}):null,i=r||a?null:Object(h.jsx)(S,{char:t,charId:n});return Object(h.jsxs)("div",{className:"char__info",children:[c,s,i]})}}]),a}(r.Component)),S=function(e){var t=e.char,a=(e.charId,t.imgSrc),r=t.name,n=t.description,c=t.homepage,s=t.wiki,i={objectFit:"cover"};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"fill"});var o=t.comics.map((function(e){return Object(h.jsx)("li",{className:"char__comics-item",children:e.name})}));return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"char__basics",children:[Object(h.jsx)("img",{style:i,src:a,alt:"abyss"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"char__info-name",children:r}),Object(h.jsxs)("div",{className:"char__btns",children:[Object(h.jsx)("a",{href:c,className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"homepage"})}),Object(h.jsx)("a",{href:s,className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(h.jsx)("div",{className:"char__descr",children:n}),Object(h.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(h.jsx)("ul",{className:"char__comics-list",children:o})]})},T=k,w=a.p+"static/media/vision.067d4ae1.png",I=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedIdChar:"1011334"},e.onSelectedIdChar=function(t){e.setState({selectedIdChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(d,{}),Object(h.jsxs)("main",{children:[Object(h.jsx)(_,{}),Object(h.jsxs)("div",{className:"char__content",children:[Object(h.jsx)(C,{onSelectedIdChar:this.onSelectedIdChar}),Object(h.jsx)(T,{charId:this.state.selectedIdChar})]}),Object(h.jsx)("img",{className:"bg-decoration",src:w,alt:"vision"})]})]})}}]),a}(r.Component);a(21);s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.bd8b8a2b.chunk.js.map