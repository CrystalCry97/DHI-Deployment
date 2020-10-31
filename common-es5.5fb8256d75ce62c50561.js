function _defineProperty(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}function asyncGeneratorStep(t,n,e,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void e(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function _asyncToGenerator(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){asyncGeneratorStep(o,r,i,a,c,"next",t)}function c(t){asyncGeneratorStep(o,r,i,a,c,"throw",t)}a(void 0)}))}}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return c}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},c=function(){r.selectionEnd()},s=function(t){r.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},JYjC:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("fXoL"),i=function(){var t=function t(){_classCallCheck(this,t),this.teamMembers=[{memberImgURL:"assets/img/1c.jpg",memberName:"Assoc. Prof. Dr. Nurul Hashimah binti Ahamed Hassain Malim, PhD",memberProfession:"Lecturer",memberDepartment:"School of Computer Sciences, Universiti Sains Malaysia",memberEmail:"nurulhashimah@usm.my",memberContact:"604-6534645"},{memberImgURL:"assets/img/2c.jpg",memberName:"Assoc. Prof. Dr. Tan Mei Lan, PhD",memberProfession:"Lecturer",memberDepartment:"School of Pharmaceutical Sciences & Advanced Medical And Dental Institute, Universiti Sains Malaysia",memberEmail:"tanml@usm.my",memberContact:"604-5622309"},{memberImgURL:"assets/img/3c.jpg",memberName:"Fatini Nadhirah binti Mohd Nain",memberProfession:"Research assistant and web developer",memberDepartment:"School of Computer Sciences, Universiti Sains Malaysia",memberEmail:"fatininadhirahmohdnain96@gmail.com",memberContact:"604-6534645"}],this.aboutImages=[{aboutImgURL:"assets/img/about-1.png"},{aboutImgURL:"assets/img/about-2.png"},{aboutImgURL:"assets/img/about-3.png"}]};return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(n,e,r,i,o){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return a.classList.add(t)})),o&&Object.assign(a,o),e.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),i=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},PYW1:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("ePDZ"),i=e("ItpF"),o=e("2c9M"),a=function(t,n){var e,a,c=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(u(),s(o,i)):u()}},s=function(t,n){e=t,a||(a=e);var i=e;Object(r.g)((function(){return i.classList.add("ion-activated")})),n()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(r.g)((function(){return n.classList.remove("ion-activated")})),t&&a!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return c(t.currentX,t.currentY,o.a)},onMove:function(t){return c(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),a=void 0}})}},QuQm:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function t(){_classCallCheck(this,t),this.limit=0,this.totalAnnotations=0,this.totalPage=0,this.offset=0,this.orderBy="createdAt",this.isAscending=!0,this._id="",this.plant="",this.components="",this.study="",this.interactions="",this.significance="",this.approved=!1,this.articleId="",this.requestUser=!1,this.approvalUser=!1}},VQbp:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("fXoL"),i=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-annotation-info"]],inputs:{annotation:"annotation"},decls:2,vars:0,template:function(t,n){1&t&&(r.Qb(0,"p"),r.xc(1," annotation-info works!\n"),r.Pb())},styles:[""]}),t}()},hcCc:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return c}));var r=function(t,n){return null!==n.closest(t)},i=function(t){return"string"==typeof t&&t.length>0?_defineProperty({"ion-color":!0},"ion-color-"+t,!0):void 0},o=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(n,e,r,i){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||a.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,r,i){return t.apply(this,arguments)}}()},nF61:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("AytR"),i=e("fXoL"),o=e("tk/3"),a=function(){var t=function(){function t(n){_classCallCheck(this,t),this.http=n,this.href=r.a.api_endpoint+"/annotation"}return _createClass(t,[{key:"getAttributes",value:function(){return this.http.get(this.href+"/attr/get")}},{key:"addAnnotation",value:function(t){return console.log(t),this.http.post(this.href+"/add",t)}},{key:"getAnnotationList",value:function(t){return console.log(t),this.http.get("".concat(this.href,"/get?orderBy=").concat(t.orderBy,"&isAscending=").concat(t.isAscending,"&limit=").concat(t.limit,"&offset=").concat(t.offset,"&plant=").concat(t.plant,"&components=").concat(t.components,"&study=").concat(t.study,"&interactions=").concat(t.interactions,"&significance=").concat(t.significance,"&articleId=").concat(t.articleId,"&requestUser=").concat(t.requestUser,"&approvalUser=").concat(t.approvalUser,"&approved=").concat(t.approved))}},{key:"deleteAnnotation",value:function(t){var n={annotationId:t._id,confirm:!0};return console.log(n),this.http.post(this.href+"/remove",n)}},{key:"approveAnnotation",value:function(t){return this.http.post(this.href+"/approve",t)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(i.Ub(o.b))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);