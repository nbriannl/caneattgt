(this.webpackJsonpcaneattgt=this.webpackJsonpcaneattgt||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(5),A=c.n(a),s=(c(10),c(2)),r=(c(11),c(0)),l=function(){var e=Object(i.useState)(3),t=Object(s.a)(e,2),c=t[0],n=(t[1],Object(i.useState)(!0)),a=Object(s.a)(n,2),A=a[0],l=(a[1],Object(i.useState)(!0)),o=Object(s.a)(l,2),d=(o[0],o[1],Object(i.useState)(!0)),j=Object(s.a)(d,2),h=j[0],g=(j[1],Object(i.useState)(3)),b=Object(s.a)(g,2),m=b[0];b[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Smart Mode"}),Object(r.jsxs)("h1",{children:["Can you Dine-in Together? ",function(){if(c<=2)return!0;if(c>=6)return!1;if(!A)return!1;if(0===m)return!0;if(h)return m<=4;if(1===m)return!0;if(2===m){if(3===c)return!1;if(4===c||5===c)return!0}}()?"Can dine in together":"Cannot. Sad"]}),Object(r.jsx)("div",{children:"Section under construction"})]})},o=c(3),d=c.p+"static/media/child.71ec16c7.png",j=c.p+"static/media/adult.599fe2d4.png",h=c.p+"static/media/legend.9f8557a0.png",g=c.p+"static/media/can.079aac9a.png",b=c.p+"static/media/cannot.5399aa64.png",m=c.p+"static/media/fullyVaccinated.9ed57c67.png",u=c.p+"static/media/notVaccinated.f4a3f9cb.png",C=c.p+"static/media/recovered.7a790fb5.png",O=c.p+"static/media/negativeTest.ad05bed8.png",f=function(){var e={isChild:!1,isPartiallyVaccinated:!1,isFullyVaccinated:!1,isRecovered:!1,isNegativeTest:!1},t=Object(i.useState)([e,e]),c=Object(s.a)(t,2),n=c[0],a=c[1];console.log("ppl",n);var A=n.length,l=n.filter((function(e){return!1===e.isChild})).every((function(e){return e.isFullyVaccinated||e.isNegativeTest||e.isRecovered})),f=n.filter((function(e){return!0===e.isChild})).length,v=Object(i.useState)(!0),I=Object(s.a)(v,2),p=I[0],x=I[1],E=function(){return A>=15?"You have more than 5 people dining in. Oi, stop adding. cannot la. LOL. ok sure. whatever":A>=10?"You have more than 5 people dining in. Oi, stop adding. cannot la. ":A>=6?"You have more than 5 people dining in":l?p&&f>4?"Can't have more than 4 children 12 and under in a group":2===f&&3===A?"Children can't take up for than half the group if diners are from different households.":void 0:"Not everyone above 12 is (1) fully vaccinated or (2) has negative test or (3) recently recovered from COVID-19."};console.log(E());var Q=function(){if(A<=2)return!0;if(A>=6)return!1;if(!l)return!1;if(0===f)return!0;if(p)return f<=4;if(1===f)return!0;if(2===f){if(3===A)return!1;if(4===A||5===A)return!0}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"ST Mode"}),Object(r.jsx)("h1",{children:"Can you Dine-in Together? "}),Object(r.jsxs)("h1",{children:[Q()?Object(r.jsx)("img",{src:g}):Object(r.jsx)("img",{src:b}),Q()?"Can dine in together":"Cannot. Sad"]}),!1===Q()&&Object(r.jsx)("h2",{children:E()}),Object(r.jsx)("hr",{}),Object(r.jsx)("img",{className:"legend",src:h}),Object(r.jsx)("div",{className:"people",children:n.map((function(e,t){var c=e.isChild,i=e.isFullyVaccinated,n=e.isPartiallyVaccinated,a=e.isNegativeTest,A=e.isRecovered;return Object(r.jsxs)("div",{className:"person",children:[Object(r.jsxs)("div",{className:"status-icons",children:[!(i||n||a||A)&&Object(r.jsx)("img",{src:u}),n&&Object(r.jsx)("img",{src:"data:image/png;base64,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"}),i&&Object(r.jsx)("img",{src:m}),a&&Object(r.jsx)("img",{src:O}),A&&Object(r.jsx)("img",{src:C})]}),Object(r.jsx)("div",{className:"human",children:c?Object(r.jsx)("img",{className:"child",src:d}):Object(r.jsx)("img",{className:"adult",src:j})})]},t)}))}),Object(r.jsx)("button",{onClick:function(){var t=n.concat(e);a(t)},children:"Add person"}),n.length>2&&Object(r.jsx)("button",{onClick:function(){if(2!==n.length){var e=n.slice(0,-1);a(e)}},children:"Remove person"}),n.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:["Person ",t+1," "]}),Object(r.jsx)("input",{type:"checkbox",id:"isChild-".concat(t),name:"isChild-".concat(t),checked:e.isChild,onChange:function(){var e=n.map((function(e,c){return c===t?Object(o.a)(Object(o.a)({},e),{},{isChild:!e.isChild}):e}));a(e)}}),Object(r.jsx)("label",{htmlFor:"isChild-".concat(t),children:"Is a Child. 12 or Below."}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"checkbox",id:"isFullyVaccinatedOrEligible-".concat(t),name:"isFullyVaccinatedOrEligible-".concat(t),checked:e.isFullyVaccinated,onChange:function(){return function(e){console.log("cool",e);var t=n.map((function(t,c){return c===e?Object(o.a)(Object(o.a)({},t),{},{isFullyVaccinated:!t.isFullyVaccinated}):t}));a(t)}(t)}}),Object(r.jsx)("label",{htmlFor:"isFullyVaccinatedOrEligible-".concat(t),children:"Is Fully Vaccinated (including 2 weeks wait)"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"checkbox",id:"isPartiallyVaccinated-".concat(t),name:"isPartiallyVaccinated-".concat(t),checked:e.isPartiallyVaccinated,onChange:function(){var e=n.map((function(e,c){return c===t?Object(o.a)(Object(o.a)({},e),{},{isPartiallyVaccinated:!e.isPartiallyVaccinated}):e}));a(e)}}),Object(r.jsx)("label",{htmlFor:"isPartiallyVaccinated-".concat(t),children:"Is Partially Vaccinated (this is a useless irrelevant option lmao)"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"checkbox",id:"recovered-".concat(t),name:"recovered-".concat(t),checked:e.isRecovered,onChange:function(){var e=n.map((function(e,c){return c===t?Object(o.a)(Object(o.a)({},e),{},{isRecovered:!e.isRecovered}):e}));a(e)}}),Object(r.jsx)("label",{htmlFor:"recovered-".concat(t),children:"Recovered from Covid-19 in the past 270 days"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"checkbox",id:"testNegative-".concat(t),name:"testNegative-".concat(t),checked:e.isNegativeTest,onChange:function(){var e=n.map((function(e,c){return c===t?Object(o.a)(Object(o.a)({},e),{},{isNegativeTest:!e.isNegativeTest}):e}));a(e)}}),Object(r.jsx)("label",{htmlFor:"testNegative-".concat(t),children:"Negative pre-event test result"})]},t)})),Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"checkbox",id:"sameHousehold",name:"sameHousehold",checked:p,onChange:function(){x(!p)}}),Object(r.jsx)("label",{htmlFor:"sameHousehold",children:"Same household?"})]})]})},v=function(){var e=Object(i.useState)(!0),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){return n(!c)},children:c?"Go to Normal Mode":"Go to ST Mode"}),c?Object(r.jsx)(f,{}):Object(r.jsx)(l,{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("i",{children:["Hastily hacked up in response to this ",Object(r.jsx)("a",{href:"https://www.straitstimes.com/singapore/health/dine-in-group-size-cut-to-2-from-july-19-as-spore-tightens-covid-19-rules-but-up-to",children:"ST Infographic"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,A=t.getTTFB;c(e),i(e),n(e),a(e),A(e)}))};A.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),I()}},[[13,1,2]]]);
//# sourceMappingURL=main.927db602.chunk.js.map