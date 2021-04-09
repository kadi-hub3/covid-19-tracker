(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),s=a(6),i=a.n(s),u=a(11),d=a(71),l=a(72),j=a(83),b=a(82),f=a(228),h=a(232),p=a(229),x=a(230),v=a(30),O=a.n(v),m=a(31),y=a.n(m),_=a(14),k=a.n(_),w=a(2),C=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(w.jsx)("div",{className:k.a.container,children:Object(w.jsxs)(f.a,{container:!0,spacing:3,justify:"center",children:[Object(w.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:y()(k.a.card,k.a.infected),children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(x.a,{color:"textSecondary",children:"Infected"}),Object(w.jsx)(x.a,{variant:"h4",children:Object(w.jsx)(O.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(w.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(x.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(w.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:y()(k.a.card,k.a.recovered),children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(x.a,{color:"textSecondary",children:"Recovered"}),Object(w.jsx)(x.a,{variant:"h4",children:Object(w.jsx)(O.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(w.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(x.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(w.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:y()(k.a.card,k.a.deaths),children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(x.a,{color:"textSecondary",children:"Deaths"}),Object(w.jsx)(x.a,{variant:"h4",children:Object(w.jsx)(O.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(w.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(x.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):"loading"},g=a(29),D=a(32),S=a.n(D),N="https://covid19.mathdro.id/api",I=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.confirmed.total,recovered:e.recovered.total,deaths:e.deaths.total}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(44),U=a(78),V=a.n(U),E=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=e.country,s=Object(n.useState)([]),d=Object(g.a)(s,2),l=d[0],j=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,M();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=void 0!==l&&l.length?Object(w.jsx)(A.Line,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#00a9fe",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#fd6bb6",fill:!0}]}}):null,f=a?Object(w.jsx)(A.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#00a9fe","#d9eb4b","#fd6bb6"],data:[a.value,r.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(o)}}}):null;return Object(w.jsx)("div",{className:V.a.container,children:o?f:b})},G=a(233),z=a(231),B=a(79),J=a.n(B),P=function(e){var t=e.handleCountry,a=Object(n.useState)([]),r=Object(g.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,T();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(w.jsx)(G.a,{className:J.a.formControl,children:Object(w.jsxs)(z.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},variant:"filled",children:[Object(w.jsx)("option",{value:"global",children:"Global"}),c.map((function(e,t){return Object(w.jsx)("option",{value:e,children:e},t)}))]})})},Q=a(45),R=a.n(Q),q=function(){return Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"checkbox",className:R.a.checkbox}),Object(w.jsx)("span",{className:R.a.check})]})},L=a(80),W=a.n(L),Y=function(e){var t=e.title,a=e.subtitle;return Object(w.jsxs)("h2",{className:W.a.title,children:[t,Object(w.jsxs)("span",{children:[" ",a]})]})},Z=a(81),F=a.n(Z),H=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountry=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(w.jsxs)("div",{className:F.a.container,children:[Object(w.jsx)(q,{}),Object(w.jsx)(Y,{title:"Covid-19 Tracker",subtitle:"All Around The World"}),Object(w.jsx)(C,{data:t}),Object(w.jsx)(P,{handleCountry:this.handleCountry}),Object(w.jsx)(E,{data:t,country:a})]})}}]),a}(r.a.Component);o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(H,{})}),document.getElementById("root"))},45:function(e,t,a){e.exports={checkbox:"DarkMode_checkbox__3kGiC",check:"DarkMode_check__3Tcwi"}},78:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},79:function(e,t,a){},80:function(e,t,a){e.exports={title:"Title_title__1jlrO",glow:"Title_glow__21bkD"}},81:function(e,t,a){e.exports={container:"App_container__1MQN3"}}},[[210,1,2]]]);
//# sourceMappingURL=main.87278bb6.chunk.js.map