(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],[,,function(_,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return s}));var a={ADD:"ADD",THEME:"THEME",CALC:"CALC",DELETE:"DELETE"},s=[{display:"C",action:a.DELETE,class:"btn__op"},{display:"(",action:a.ADD,class:"btn__op"},{display:")",action:a.ADD,class:"btn__op"},{display:"/",action:a.ADD,class:"btn__op"},{display:"7",action:a.ADD,class:""},{display:"8",action:a.ADD,class:""},{display:"9",action:a.ADD,class:""},{display:"x",action:a.ADD,class:"btn__op"},{display:"4",action:a.ADD,class:""},{display:"5",action:a.ADD,class:""},{display:"6",action:a.ADD,class:""},{display:"-",action:a.ADD,class:"btn__op"},{display:"1",action:a.ADD,class:""},{display:"2",action:a.ADD,class:""},{display:"3",action:a.ADD,class:""},{display:"+",action:a.ADD,class:"btn__op"},{display:"\u2600\ufe0f",action:a.THEME,class:""},{display:"0",action:a.ADD,class:""},{display:".",action:a.ADD,class:""},{display:"=",action:a.CALC,class:"btn__op"}]},,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AppCalcu}));var C_Users_Win_10_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_AppCalcu_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_AppCalcu_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_AppCalcu_css__WEBPACK_IMPORTED_MODULE_2__),_btnConfig__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);function AppCalcu(){var btnsRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),expRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_Win_10_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),expression=_useState2[0],setExpression=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){Array.from(btnsRef.current.querySelectorAll("button")).forEach((function(_){return _.style.height=_.offsetWidth+"px"}))}),[]);var btnClick=function btnClick(item){console.log(item);var expDiv=expRef.current;if(item.action===_btnConfig__WEBPACK_IMPORTED_MODULE_3__.a.THEME&&document.body.classList.toggle("dark"),item.action===_btnConfig__WEBPACK_IMPORTED_MODULE_3__.a.ADD){addAnimSpan(item.display);var oper="x"!==item.display?item.display:"*";setExpression(expression+oper)}if(item.action===_btnConfig__WEBPACK_IMPORTED_MODULE_3__.a.DELETE&&(expDiv.parentNode.querySelector("div:last-child").innerHTML="",expDiv.innerHTML="",setExpression("")),item.action===_btnConfig__WEBPACK_IMPORTED_MODULE_3__.a.CALC){if(expression.trim().length<=0)return;expDiv.parentNode.querySelector("div:last-child").remove();var cloneNode=expDiv.cloneNode(!0);expDiv.parentNode.appendChild(cloneNode);var transform="translateY(".concat(-(expDiv.offsetHeight+10)+"px",") scale(0.4)");try{var res=eval(expression);setExpression(res.toString()),setTimeout((function(){cloneNode.style.transform=transform,expDiv.innerHTML="",addAnimSpan(Math.floor(1e8*res)/1e8)}),200)}catch(_unused){setTimeout((function(){cloneNode.style.transform=transform,cloneNode.innerHTML="Syntax Err"}),200)}finally{console.log("calc complete")}}},addAnimSpan=function(_){var e=expRef.current,t=document.createElement("span");t.innerHTML=_,t.style.opacity="0",e.appendChild(t);var a=t.offsetWidth+"px";t.style.width="0",setTimeout((function(){t.style.opacity="1",t.style.width=a}),100)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"calcu_result",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{ref:expRef,className:"calcu_result_exp"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"calcu_result_exp"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{ref:btnsRef,className:"calcu_btns",children:_btnConfig__WEBPACK_IMPORTED_MODULE_3__.b.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:function(){btnClick(_)},className:_.class,children:_.display},e)}))})]})}},,,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var a=t(1),s=t.n(a),c=t(4),n=t.n(c),i=(t(11),t(5)),r=t(0);var l=function(){return Object(r.jsx)(i.a,{})};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.78766ce4.chunk.js.map