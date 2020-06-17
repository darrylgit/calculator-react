(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{23:function(n,e,t){n.exports=t(34)},33:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(16),o=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(9),u=t(3),l=t(4);function s(){var n=Object(u.a)(["\n  background-image: url(display-background.jpg);\n  background-size: 100% 100%;\n  height: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-bottom: 6.5rem;\n\n  .outputs {\n    color: #fff;\n\n    padding-right: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n\n    .main {\n      font-size: 5rem;\n      text-align: right;\n    }\n\n    .sub {\n      font-size: 2.5rem;\n      text-align: right;\n    }\n\n    @media only screen and (max-width: 20em) {\n      .main {\n        font-size: 4.5rem;\n      }\n    }\n  }\n\n  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {\n    background-image: linear-gradient(to left top, #35aaff 50%, #9ad2fb);\n    padding-bottom: 0.5rem;\n    height: 27%;\n\n    .outputs {\n      .main {\n        font-size: 4rem;\n      }\n    }\n  }\n"]);return s=function(){return n},n}var f=l.b.div(s()),d=Object(r.createContext)({values:[],pushValue:function(){}}),m=" ".concat(String.fromCharCode(247)," "),b=" ".concat(String.fromCharCode(215)," "),h=" ".concat(String.fromCharCode(8722)," "),v=" ".concat(String.fromCharCode(43)," "),p=function(n){return 2===n.length&&!Array.isArray(n[0])&&Array.isArray(n[1])&&n[1].length>0},g=t(1),O=function(n){return[m,b,h,v].includes(n)},j={mainOperations:{add:function(n,e){var t=parseFloat(n[e-1])+parseFloat(n[e+1]);n[e-1]=t.toString(),n.splice(e,2)},subtract:function(n,e){var t=n[e-1]-n[e+1];n[e-1]=t.toString(),n.splice(e,2)},multiply:function(n,e){var t=n[e-1]*n[e+1];n[e-1]=t.toString(),n.splice(e,2)},divide:function(n,e){var t=n[e-1]/n[e+1];n[e-1]=t.toString(),n.splice(e,2)}},multiplyAndDivide:function(n,e){n[e]===b?this.mainOperations.multiply(n,e):n[e]===m&&this.mainOperations.divide(n,e)},addAndSubtract:function(n,e){n[e]===h?this.mainOperations.subtract(n,e):n[e]===v&&this.mainOperations.add(n,e)}},E=function(n){for(;n.includes(b)||n.includes(m);)n.forEach((function(e,t){O(e)&&j.multiplyAndDivide(n,t)}));for(;n.includes(v)||n.includes(h);)n.forEach((function(e,t){O(e)&&j.addAndSubtract(n,t)}));return n},w=function(n){var e=parseFloat(n[0]).toPrecision(8).toString(),t=parseFloat(e);return t>=1e9?t.toExponential():t.toString()},A=function(n){var e=parseFloat(n);return"number"===typeof e&&e===e},C=function(n){return n.reduce((function(n,e){return"("===e?n+1:n}),0)-n.reduce((function(n,e){return")"===e?n+1:n}),0)},y=function(n){if(C(n)||n.length<2)return null;if(A(n.slice(-1)[0]))return n.slice(-2);if(")"===n.slice(-1)[0]){for(var e=-1;C(n.slice(e));)e--;return O(n.slice(e-1)[0])?n.slice(e-1):null}return null},S=function(n){if(C(n))return n;O.apply(void 0,Object(g.a)(n.slice(-1)))&&(n=n.slice(0,-1));for(var e=y(n);n.includes(")");){var t=n.indexOf(")"),r=n.slice(0,t).lastIndexOf("("),a=E(n.slice(r+1,t));n=[].concat(Object(g.a)(n.slice(0,r)),[a],Object(g.a)(n.slice(t+1)))}var c=w(E(n));return e?[c,e]:[c]},x=function(n){return n.filter((function(n){return!Array.isArray(n)})).filter((function(n,e,t){return!(n===b&&"("===t[e+1])})).join("")},k=function(n){if(p(n)||n.length<=1)return x(n);var e=n.slice(0,-1);return x(S(e))},N=function(){var n,e=Object(r.useContext)(d).values,t=Object(r.useState)(""),c=Object(i.a)(t,2),o=c[0],u=c[1];return function(n){if(!n.length)return!0;if(p(n)||1===n.length)return!0;var e=n.slice(0,-1);return e.length&&!C(e)&&!O(e.slice(-1))}(e)&&k(e)!==o&&u(k(e)),a.a.createElement(f,null,a.a.createElement("div",{className:"outputs"},a.a.createElement("div",{className:"sub"},!p(n=e)&&n.length>1?x(n):""),a.a.createElement("div",{className:"main"},o)))},z=t(20),I=t(21),L=a.a.createElement("div",null,a.a.createElement("strong",null,String.fromCharCode(43)),"/",a.a.createElement("strong",null,String.fromCharCode(8722)));function P(n,e,t){this.value=n,this.label=e,this.type=t}var R=[new P("CLEAR","C","clear"),new P("BACKSPACE",a.a.createElement(z.a,{icon:I.a}),"util"),new P("PARENTHESES","( )","util"),new P(m,m,"operator"),new P("7","7","num"),new P("8","8","num"),new P("9","9","num"),new P(b,b,"operator"),new P("4","4","num"),new P("5","5","num"),new P("6","6","num"),new P(h,h,"operator"),new P("1","1","num"),new P("2","2","num"),new P("3","3","num"),new P(v,v,"operator"),new P("NEGATIVE",L,"util"),new P("0","0","num"),new P("DECIMAL",".","util"),new P("EQUALS","=","equals")],T=a.a.createContext(R),F=t(22),M=t(6);function V(){var n=Object(u.a)(["\n  font-size: 5rem;\n  color: white;\n  background-color: ",";\n\n  &:hover {\n    color: white;\n    background-color: ",";\n  }\n\n  @media screen and (hover: none) {\n    &:hover {\n      color: white;\n      background-color: ",";\n    }\n  }\n"]);return V=function(){return n},n}function B(){var n=Object(u.a)(["\n  font-size: 5rem;\n  color: ",";\n  background-color: rgba(255, 255, 255, 0);\n\n  &:hover {\n    background-color: ",";\n    color: #fff;\n  }\n\n  @media screen and (hover: none) {\n    ","\n  }\n"]);return B=function(){return n},n}function D(){var n=Object(u.a)(["\n  font-size: 5rem;\n  color: ",";\n  background-color: rgba(255, 255, 255, 0);\n\n  &:hover {\n    background-color: ",";\n    color: white;\n  }\n\n  @media screen and (hover: none) {\n    ","\n  }\n"]);return D=function(){return n},n}function G(){var n=Object(u.a)(["\n    font-size: ",";\n    color: ",";\n    background-color: rgba(255, 255, 255, 0);\n\n    &:hover {\n      background-color: ",";\n      color: #fff;\n    }\n\n    @media screen and (hover: none) {\n      ","\n    }\n  "]);return G=function(){return n},n}function H(){var n=Object(u.a)(["\n  font-size: 5rem;\n  color: ",";\n  background-color: rgba(255, 255, 255, 0);\n\n  &:hover {\n    background-color: ",";\n    color: #fff;\n  }\n\n  @media screen and (hover: none) {\n    ","\n  }\n"]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n    &:hover,\n    &:active {\n      animation-name: ",";\n      animation-duration: 1s;\n      animation-fill-mode: forwards;\n      animation-delay: 0.5s;\n    }\n  "]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n    from {\n      background-color: ",";\n      color: '#fff';\n    }\n\n    to {\n      color: ",";\n      background-color: #fff;\n    }\n  "]);return Q=function(){return n},n}var U=function(n){return Object(l.a)(K(),function(n){return Object(l.c)(Q(),n,n)}(n))},q=Object(l.a)(H(),"#ff3545","#ff3545",U("#ff3545")),J=function(n){var e,t=(e={},Object(M.a)(e,"DECIMAL","5rem"),Object(M.a)(e,"NEGATIVE","3rem"),Object(M.a)(e,"PARENTHESES","4rem"),Object(M.a)(e,"BACKSPACE","3.5rem"),e);return Object(l.a)(G(),t[n],"#727272","#727272",U("#727272"))},W=Object(l.a)(D(),"#6fa7c6","#6fa7c6",U("#6fa7c6")),$=Object(l.a)(B(),"#ff8a35;","#ff8a35;",U("#ff8a35;")),X=Object(l.a)(V(),"#35aaff","#006097","#35aaff");function Y(){var n=Object(u.a)(["\n  min-width: 21%;\n\n  // Mobile landscape mode\n  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {\n    order: ",";\n    min-width: 17%;\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: 50%;\n  -webkit-transform: scale(1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  user-select: none;\n  -moz-user-select: none;\n  cursor pointer;\n\n  ","\n\n  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {\n    border-radius: 1rem;\n  }\n"]);return Z=function(){return n},n}function _(){var n=Object(u.a)(["\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n\n  // Mobile landscape mode\n  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {\n    padding-top: 5rem;\n  }\n"]);return _=function(){return n},n}var nn=l.b.div(_()),en=l.b.div(Z(),(function(n){var e=n.type,t=n.value;return{clear:q,util:J(t),num:W,operator:$,equals:X}[e]||""})),tn=l.b.div(Y(),(function(n){switch(n.value){case"CLEAR":return 0;case m:return 1;case b:return 2;case h:return 3;case v:return 4;case"6":return 5;case"7":return 6;case"8":return 7;case"9":return 8;case"PARENTHESES":return 9;case"2":return 10;case"3":return 11;case"4":return 12;case"5":return 13;case"DECIMAL":return 14;case"BACKSPACE":return 15;case"0":return 16;case"1":return 17;case"NEGATIVE":return 18;case"EQUALS":return 19;default:return 20}})),rn=function(n){var e=n.children,t=Object(F.a)(n,["children"]);return a.a.createElement(tn,t,a.a.createElement(nn,null,a.a.createElement(en,t,e)))},an=function(n){var e=n.label,t=n.type,c=n.value,o=Object(r.useContext)(d).pushValue;return a.a.createElement(rn,{type:t,label:e,value:c,onClick:function(){return o(c)}},e)};function cn(){var n=Object(u.a)(["\n  height: 65%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n\n  align-items: center;\n  align-content: space-around;\n\n  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {\n    height: 73%;\n  }\n"]);return cn=function(){return n},n}var on=l.b.div(cn()),un=function(){var n=Object(r.useContext)(T);return a.a.createElement(on,null,n.map((function(n){return a.a.createElement(an,Object.assign({key:n.value},n))})))};function ln(){var n=Object(u.a)(["\n  width: 36rem;\n  height: 64rem;\n  border: 2px solid #6fa7c6;\n  background-color: white;\n  border-radius: 20px;\n  padding: 0;\n  -webkit-transform: scale(1);\n  overflow: hidden;\n  background-repeat: no-repeat;\n  padding-bottom: 0.5rem;\n\n  @media only screen and (max-width: 26.55em) {\n    height: 100%;\n    width: 100%;\n    margin-top: 0;\n    border-radius: 0;\n  }\n\n  @media only screen and (max-height: 40em) {\n    height: 100%;\n  }\n\n  // Mobile landscape mode\n  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {\n    width: 100vw;\n    border-radius: 0;\n  }\n"]);return ln=function(){return n},n}var sn=l.b.div(ln()),fn=function(n,e){var t=n.pop()||"";if("0"===t)return[].concat(Object(g.a)(n),[t]);if(A(t)||""===t)return t+=e,[].concat(Object(g.a)(n),[t]);if(O(t))return[].concat(Object(g.a)(n),[t,e]);switch(t){case"-":return[].concat(Object(g.a)(n),[t+e]);case"(":return[].concat(Object(g.a)(n),[t,e]);case")":return[].concat(Object(g.a)(n),[t,b,e]);default:return[].concat(Object(g.a)(n),[t])}},dn=function(n,e){if(!n.length)return n;var t=n.pop();if(A(t))return t=parseFloat(t).toString(),[].concat(Object(g.a)(n),[t,e]);if(O(t))return[].concat(Object(g.a)(n),[e]);switch(t){case"(":case"-":return[].concat(Object(g.a)(n),[t]);case")":return[].concat(Object(g.a)(n),[t,e]);default:return[].concat(Object(g.a)(n),[e])}},mn=function(n){if(!n.length)return n;var e=n.pop();if(A(e)){var t=e.slice(0,-1);return t?[].concat(Object(g.a)(n),[t]):Object(g.a)(n)}if("("===e){var r=n.pop();return r?r===b?n:[].concat(Object(g.a)(n),[r]):[]}return n},bn=function(n){var e=Object(g.a)(n),t=e.reverse().indexOf("(");return"("===e[t+1]},hn=function(n){if(!n.length)return["("];var e=C(n),t=n.pop();if(A(t))return t=parseFloat(t).toString(),0===e?[].concat(Object(g.a)(n),[t,b,"("]):O(n[n.length-1])?[].concat(Object(g.a)(n),[t,")"]):[].concat(Object(g.a)(n),[t,b,"("]);if(O(t))return[].concat(Object(g.a)(n),[t,"("]);switch(t){case"-":return t="-1",[].concat(Object(g.a)(n),[t,b,"("]);case"(":return[].concat(Object(g.a)(n),[t,"("]);case")":return 0===e||bn(n)?[].concat(Object(g.a)(n),[t,b,"("]):[].concat(Object(g.a)(n),[t,")"]);default:return[].concat(Object(g.a)(n),[t])}},vn=function(n){if(!n.length)return["-"];var e=n.pop();if(A(e))return e="-"===e[0]?e.slice(1):"-"+e,[].concat(Object(g.a)(n),[e]);if(O(e))return[].concat(Object(g.a)(n),[e,"-"]);switch(e){case"-":return n;case"(":return[].concat(Object(g.a)(n),[e,"-"]);case")":return[].concat(Object(g.a)(n),[e,b,"-"]);default:return[].concat(Object(g.a)(n),[e])}},pn=function(n){if(!n.length)return["0."];var e=n.pop();if(A(e))return e.includes(".")?[].concat(Object(g.a)(n),[e]):[].concat(Object(g.a)(n),[e+"."]);if(O(e))return[].concat(Object(g.a)(n),[e,"0."]);switch(e){case"-":return[].concat(Object(g.a)(n),["-0."]);case"(":return[].concat(Object(g.a)(n),[e,"0."]);case")":return[].concat(Object(g.a)(n),[e,b,"0."]);default:return[].concat(Object(g.a)(n),[e])}},gn=function(){var n=Object(r.useState)([]),e=Object(i.a)(n,2),t=e[0],c=e[1];return a.a.createElement(sn,null,a.a.createElement(d.Provider,{value:{values:t,pushValue:function(n){return c(function(n,e){if(void 0===e&&console.error("ERR: No input value specified"),"EQUALS"===e)return p(n)&&(n=[n[0]].concat(Object(g.a)(n[1]))),S(n);var t=Object(g.a)(n).filter((function(n){return!Array.isArray(n)}));if(A(e))return fn(t,e);if(O(e))return dn(t,e);switch(e){case"CLEAR":return[];case"BACKSPACE":return mn(t);case"PARENTHESES":return hn(t);case"NEGATIVE":return vn(t);case"DECIMAL":return pn(t);default:return[].concat(Object(g.a)(t),[e])}}(t,n))}}},a.a.createElement(N,null),a.a.createElement(un,null)))},On=(t(33),function(){return a.a.createElement(gn,null)});o.a.render(a.a.createElement(On,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.306b7a13.chunk.js.map