(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2MiI":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("mrSG");const s={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};var r=i("fXoL"),o=i("TEn/");let l=(()=>{class t{constructor(t){this.modalController=t}ngOnInit(){}toggleMenu(){return Object(n.a)(this,void 0,void 0,(function*(){const t=document.querySelector("ion-split-pane");window.matchMedia(s[t.when]||t.when).matches&&t.classList.toggle("split-pane-visible")}))}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(o.R))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-header"]],inputs:{pageAtTop:"pageAtTop"},decls:4,vars:1,consts:[[3,"color"],["slot","start","auto-hide","false"],["fill","clear",3,"click"],["name","menu","slot","icon-only"]],template:function(t,e){1&t&&(r.Rb(0,"ion-toolbar",0),r.Rb(1,"ion-menu-toggle",1),r.Rb(2,"ion-button",2),r.Zb("click",(function(){return e.toggleMenu()})),r.Nb(3,"ion-icon",3),r.Qb(),r.Qb(),r.Qb()),2&t&&r.ic("color",e.pageAtTop?"":"dark")},directives:[o.N,o.y,o.e,o.r],styles:[".header-btn[_ngcontent-%COMP%]{margin:10px 50px}"]}),t})()},"4M3O":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("fXoL");let s=(()=>{class t{transform(t,e){try{if(t&&e&&void 0!==typeof t&&void 0!==typeof e&&(t=t.toString(),(e=e.toString().trim()).length>0)){let i=(e=e.replace(",","")).trim().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");i=i.split(" ").filter(t=>t.length>0).join("|");let n=new RegExp(i,"gi");t=t.replace(n,t=>`<span><mark><b>${t}</b></mark></span>`)}}catch(i){console.error("Error in Highlighting..")}return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Lb({name:"keyhighlight",type:t,pure:!0}),t})()},CzEO:function(t,e,i){"use strict";i.d(e,"a",(function(){return f})),i.d(e,"b",(function(){return p}));var n=i("ofXK"),s=i("fXoL");function r(t,e,i,n){return new(i||(i=Promise))((function(s,r){function o(t){try{a(n.next(t))}catch(e){r(e)}}function l(t){try{a(n.throw(t))}catch(e){r(e)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,l)}a((n=n.apply(t,e||[])).next())}))}var o=i("jhN1"),l=i("3Pt+");const a=[[["","quill-editor-toolbar",""]]],h=["[quill-editor-toolbar]"],c={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},d=(t,e)=>t||e||"html",u=new s.q("config");let g=(()=>{class t{constructor(t){this.config=t,this.count=0,this.config||(this.config={modules:c})}getQuill(){return this.count++,this.Quill||1!==this.count||(this.$importPromise=new Promise(t=>r(this,void 0,void 0,(function*(){var e,n;const s=yield i.e(76).then(i.t.bind(null,"kzlf",7));this.Quill=s.default?s.default:s,null===(e=this.config.customOptions)||void 0===e||e.forEach(t=>{const e=this.Quill.import(t.import);e.whitelist=t.whitelist,this.Quill.register(e,!0,this.config.suppressGlobalRegisterWarning)}),null===(n=this.config.customModules)||void 0===n||n.forEach(({implementation:t,path:e})=>{this.Quill.register(e,t,this.config.suppressGlobalRegisterWarning)}),t(this.Quill)})))),this.$importPromise}}return t.\u0275fac=function(e){return new(e||t)(s.Vb(u))},t.\u0275prov=Object(s.Ib)({factory:function(){return new t(Object(s.Vb)(u))},token:t,providedIn:"root"}),t})(),m=(()=>{class t{constructor(t,e,i,n,r,o,l){this.elementRef=t,this.domSanitizer=e,this.doc=i,this.platformId=n,this.renderer=r,this.zone=o,this.service=l,this.required=!1,this.customToolbarPosition="top",this.sanitize=!1,this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.onEditorCreated=new s.n,this.onEditorChanged=new s.n,this.onContentChanged=new s.n,this.onSelectionChanged=new s.n,this.onFocus=new s.n,this.onBlur=new s.n,this.disabled=!1,this.valueGetter=(t,e)=>{let i=e.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==i&&"<div><br></div>"!==i||(i=null);let n=i;const s=d(this.format,this.service.config.format);if("text"===s)n=t.getText();else if("object"===s)n=t.getContents();else if("json"===s)try{n=JSON.stringify(t.getContents())}catch(r){n=t.getText()}return n},this.valueSetter=(t,e)=>{const i=d(this.format,this.service.config.format);if("html"===i)return this.sanitize&&(e=this.domSanitizer.sanitize(s.H.HTML,e)),t.clipboard.convert(e);if("json"===i)try{return JSON.parse(e)}catch(n){return[{insert:e}]}return e},this.selectionChangeHandler=(t,e,i)=>{const n=!t&&!!this.onModelTouched;(this.onBlur.observers.length||this.onFocus.observers.length||this.onSelectionChanged.observers.length||n)&&this.zone.run(()=>{null===t?this.onBlur.emit({editor:this.quillEditor,source:i}):null===e&&this.onFocus.emit({editor:this.quillEditor,source:i}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:e,range:t,source:i}),n&&this.onModelTouched()})},this.textChangeHandler=(t,e,i)=>{const n=this.quillEditor.getText(),s=this.quillEditor.getContents();let r=this.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==r&&"<div><br></div>"!==r||(r=null);const o=this.trackChanges||this.service.config.trackChanges,l=("user"===i||o&&"all"===o)&&!!this.onModelChange;(this.onContentChanged.observers.length||l)&&this.zone.run(()=>{l&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:s,delta:t,editor:this.quillEditor,html:r,oldDelta:e,source:i,text:n})})},this.editorChangeHandler=(t,e,i,n)=>{if(this.onEditorChanged.observers.length)if("text-change"===t){const s=this.quillEditor.getText(),r=this.quillEditor.getContents();let o=this.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==o&&"<div><br></div>"!==o||(o=null),this.zone.run(()=>{this.onEditorChanged.emit({content:r,delta:e,editor:this.quillEditor,event:t,html:o,oldDelta:i,source:n,text:s})})}else this.onEditorChanged.emit({editor:this.quillEditor,event:t,oldRange:i,range:e,source:n})}}static normalizeClassNames(t){return t.trim().split(" ").reduce((t,e)=>{const i=e.trim();return i&&t.push(i),t},[])}ngAfterViewInit(){return r(this,void 0,void 0,(function*(){if(Object(n.t)(this.platformId))return;const t=yield this.service.getQuill();this.elementRef.nativeElement.insertAdjacentHTML("top"===this.customToolbarPosition?"beforeend":"afterbegin",this.preserveWhitespace?"<pre quill-editor-element></pre>":"<div quill-editor-element></div>"),this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const e=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),i=Object.assign({},this.modules||this.service.config.modules);e?i.toolbar=e:void 0===i.toolbar&&(i.toolbar=c.toolbar);let s=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===s&&(s="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(t=>{this.renderer.setStyle(this.editorElem,t,this.styles[t])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(e=>{const i=t.import(e.import);i.whitelist=e.whitelist,t.register(i,!0)}),this.customModules.forEach(({implementation:e,path:i})=>{t.register(i,e)});let r=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;r||(r=this.service.config.bounds?this.service.config.bounds:this.doc.body);let o=this.debug;!o&&!1!==o&&this.service.config.debug&&(o=this.service.config.debug);let l=this.readOnly;l||!1===this.readOnly||(l=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let a=this.scrollingContainer;a||null===this.scrollingContainer||(a=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let h=this.formats;if(h||void 0!==h||(h=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{var e,n,c;if(this.quillEditor=new t(this.editorElem,{bounds:r,debug:o,formats:h,modules:i,placeholder:s,readOnly:l,scrollingContainer:a,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const t=null===(n=null===(e=this.quillEditor)||void 0===e?void 0:e.theme)||void 0===n?void 0:n.tooltip,i=null===(c=null==t?void 0:t.root)||void 0===c?void 0:c.querySelector("input[data-link]");(null==i?void 0:i.dataset)&&(i.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===d(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const t=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(t,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.quillEditor.on("editor-change",this.editorChangeHandler),this.quillEditor.on("selection-change",this.selectionChangeHandler),this.quillEditor.on("text-change",this.textChangeHandler),setTimeout(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){this.quillEditor&&(this.quillEditor.off("selection-change",this.selectionChangeHandler),this.quillEditor.off("text-change",this.textChangeHandler),this.quillEditor.off("editor-change",this.editorChangeHandler))}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.styles){const e=t.styles.currentValue,i=t.styles.previousValue;i&&Object.keys(i).forEach(t=>{this.renderer.removeStyle(this.editorElem,t)}),e&&Object.keys(e).forEach(t=>{this.renderer.setStyle(this.editorElem,t,this.styles[t])})}if(t.classes){const e=t.classes.currentValue,i=t.classes.previousValue;i&&this.removeClasses(i),e&&this.addClasses(e)}}}addClasses(e){t.normalizeClassNames(e).forEach(t=>{this.renderer.addClass(this.editorElem,t)})}removeClasses(e){t.normalizeClassNames(e).forEach(t=>{this.renderer.removeClass(this.editorElem,t)})}writeValue(t){if(this.filterNull&&null===t)return;if(this.content=t,!this.quillEditor)return;const e=d(this.format,this.service.config.format),i=this.valueSetter(this.quillEditor,t);if(this.compareValues){const t=this.quillEditor.getContents();if(JSON.stringify(t)===JSON.stringify(i))return}t?"text"===e?this.quillEditor.setText(t):this.quillEditor.setContents(i):this.quillEditor.setText("")}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;const t={};let e=!0;const i=this.quillEditor.getText(),n=this.trimOnValidation?i.trim().length:1===i.length&&0===i.trim().length?0:i.length-1;return this.minLength&&n&&n<this.minLength&&(t.minLengthError={given:n,minLength:this.minLength},e=!1),this.maxLength&&n>this.maxLength&&(t.maxLengthError={given:n,maxLength:this.maxLength},e=!1),this.required&&!n&&(t.requiredError={empty:!0},e=!1),e?null:t}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(s.l),s.Mb(o.b),s.Mb(n.d),s.Mb(s.B),s.Mb(s.D),s.Mb(s.z),s.Mb(g))},t.\u0275dir=s.Hb({type:t,inputs:{required:"required",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",customOptions:"customOptions",customModules:"customModules",preserveWhitespace:"preserveWhitespace",trimOnValidation:"trimOnValidation",compareValues:"compareValues",filterNull:"filterNull",valueGetter:"valueGetter",valueSetter:"valueSetter",format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",formats:"formats",scrollingContainer:"scrollingContainer",bounds:"bounds",trackChanges:"trackChanges",classes:"classes",linkPlaceholder:"linkPlaceholder"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[s.yb]}),t})(),f=(()=>{class t extends m{constructor(t,e,i,n,s,r,o){super(t,e,i,n,s,r,o)}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(s.l),s.Mb(o.b),s.Mb(n.d),s.Mb(s.B),s.Mb(s.D),s.Mb(s.z),s.Mb(g))},t.\u0275cmp=s.Gb({type:t,selectors:[["quill-editor"]],features:[s.zb([{multi:!0,provide:l.c,useExisting:Object(s.S)(()=>t)},{multi:!0,provide:l.b,useExisting:Object(s.S)(()=>t)}]),s.xb],ngContentSelectors:h,decls:1,vars:0,template:function(t,e){1&t&&(s.hc(a),s.gc(0))},encapsulation:2}),t})(),p=(()=>{class t{static forRoot(e){return{ngModule:t,providers:[{provide:u,useValue:e}]}}}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},providers:[g],imports:[[n.c]]}),t})()},KJTt:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("fXoL");let s=(()=>{class t{constructor(){}isPageAtTop(t){return t.detail.currentY<70}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},LmEr:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("fXoL"),s=i("TEn/");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-footer"]],inputs:{innerWidth:"innerWidth"},decls:5,vars:0,consts:[["color","dark",1,"footer-toolbar"],["slot","start"]],template:function(t,e){1&t&&(n.Rb(0,"ion-footer"),n.Rb(1,"ion-toolbar",0),n.Rb(2,"ion-text",1),n.Rb(3,"small"),n.zc(4,"Copyright \xa92020 All Rights Reserved | Universiti Sains Malaysia"),n.Qb(),n.Qb(),n.Qb(),n.Qb())},directives:[s.o,s.N,s.K],styles:[".footer-toolbar[_ngcontent-%COMP%]{padding:0 20px}"]}),t})()},iWjc:function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var n=i("ofXK"),s=i("TEn/"),r=i("3Pt+"),o=i("4M3O"),l=i("CzEO"),a=i("fXoL");let h=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},providers:[o.a],imports:[[n.c,r.a,s.O.forRoot(),l.b.forRoot({modules:{toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{header:1},{header:2}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],["clean"]]}})]]}),t})()}}]);