(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RNiq:function(n,e,a){"use strict";a.r(e);var t=a("h4VS"),r=a("q1tI"),i=a.n(r),o=a("zYfa"),c=a("lTCR"),l=a.n(c),u=a("ttZb"),d=a("YFqc"),s=a.n(d),m=a("vOnD"),p=a("PNaD"),f=a("LAiw"),h=a("jhR0"),g=a("Ogzj"),b=i.a.createElement;function w(){var n=Object(t.a)(["\n  query CharNames($number: Int) {\n    charsNames(page: $number) {\n      characters {\n        id\n        name\n      }\n    }\n  }\n"]);return w=function(){return n},n}var v=l()(w()),_=function(n){var e=n.onChoice,a=Object(u.b)(v,{variables:{number:1}}),t=a.data,r=a.loading,i=a.error;if(r)return b(f.a,{icon:"ThreeDots",height:"40",width:"40"});if(i)return b(h.a,{error:i});var o=t.charsNames.characters.sort((function(n,e){return n.name<e.name?-1:n.name>e.name?1:0}));return b("select",{onChange:function(n){return e(n.target.value)}},b("option",{value:"DEFAULT"},"Selecione"),o.map((function(n){return b("option",{key:n.id,value:n.name},n.name)})))},C=i.a.createElement;function y(){var n=Object(t.a)(["\n  query AllCharacters($number: Int) {\n    allCharacters(page: $number) {\n      characters {\n        id\n        name\n      }\n    }\n  }\n"]);return y=function(){return n},n}var N=l()(y()),x=m.a.div.withConfig({displayName:"pages__Grid",componentId:"f4aolq-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:5px;grid-row-gap:20px;justify-items:center;align-items:center;@media only screen  and (min-device-width:375px)  and (max-device-width:812px){grid-template-columns:repeat(2,1fr);}"]),j=Math.floor(4*Math.random()+1),q="/images/card_close_v".concat(j,".png"),O=m.a.div.withConfig({displayName:"pages__Card",componentId:"f4aolq-1"})(["background-image:url(",");width:187px;height:315px;display:flex;justify-content:center;align-items:center;color:#000000;"],q),k=m.a.ul.withConfig({displayName:"pages__List",componentId:"f4aolq-2"})(["list-style:none;padding:0;margin:220px 0 0 0;"]),E=m.a.button.withConfig({displayName:"pages__Button",componentId:"f4aolq-3"})(["background-color:#FCE62E;color:#000000;border:none;font-size:14px;margin-top:5px;width:100%;font-weight:bold;outline:none;"]);e.default=Object(o.a)((function(n){var e=Object(r.useState)(""),a=e[0],t=e[1],o=Object(u.b)(N,{variables:{number:1}}),c=o.data,l=o.loading,d=o.error;if(l)return C(f.a,{icon:"Puff",height:"100",width:"100"});if(d)return C(h.a,{error:d});var m=c.allCharacters.characters;function b(n){t(n)}return C(i.a.Fragment,null,C(p.a,{value:n},(function(n){return C(i.a.Fragment,null,C(g.a,{total:n}),C(x,null,m.map((function(e){return n.choice=a,C(O,{key:e.id},C(k,null,C("li",null,C(_,{onChoice:b})),C("li",null,C(s.a,{href:"/details?id=".concat(e.id)},C(E,{onClick:function(){return n.chosen=e.id}},"See")))))}))))})))}))},vlRD:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",1,0,2,3]]]);