(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{QuQm:function(t,n,i){"use strict";i.d(n,"a",(function(){return e}));class e{constructor(){this.limit=0,this.totalAnnotations=0,this.totalPage=0,this.offset=0,this.searchBy="product",this.orderBy="createdAt",this.isAscending=!0,this._id="",this.product="",this.plant="",this.components="",this.study="",this.interactions="",this.significance="",this.approved="pending",this.articleId="",this.requestUser=!1,this.approvalUser=!1,this.requestUserId=""}}},VQbp:function(t,n,i){"use strict";i.d(n,"a",(function(){return a}));var e=i("fXoL"),o=i("TEn/");let a=(()=>{class t{constructor(t){this.modalController=t}ngOnInit(){this.article=this.annotation.articleId,this.setArticle()}setArticle(){}dismissModal(){this.modalController.dismiss()}openExternal(){window.open(this.article.link)}}return t.\u0275fac=function(n){return new(n||t)(e.Mb(o.R))},t.\u0275cmp=e.Gb({type:t,selectors:[["app-annotation-info"]],inputs:{annotation:"annotation"},decls:31,vars:7,consts:[["color","tertiary"],["slot","end"],["shape","round","fill","clear",3,"click"],["name","close"],[3,"button"],[3,"innerHTML"],["expand","block",3,"click"]],template:function(t,n){1&t&&(e.Rb(0,"ion-header"),e.Rb(1,"ion-toolbar",0),e.Rb(2,"ion-title"),e.Ac(3,"Annotation Info"),e.Qb(),e.Rb(4,"ion-buttons",1),e.Rb(5,"ion-button",2),e.Zb("click",(function(){return n.dismissModal()})),e.Nb(6,"ion-icon",3),e.Qb(),e.Qb(),e.Qb(),e.Qb(),e.Rb(7,"ion-content"),e.Rb(8,"ion-grid"),e.Rb(9,"ion-row"),e.Rb(10,"ion-col"),e.Rb(11,"ion-card",4),e.Rb(12,"ion-card-header"),e.Rb(13,"ion-card-title"),e.Ac(14,"Annotation descriptions"),e.Qb(),e.Qb(),e.Rb(15,"ion-card-content"),e.Nb(16,"div",5),e.Qb(),e.Qb(),e.Qb(),e.Qb(),e.Rb(17,"ion-row"),e.Rb(18,"ion-col"),e.Rb(19,"ion-card",4),e.Rb(20,"ion-card-header"),e.Rb(21,"ion-card-subtitle"),e.Ac(22),e.Qb(),e.Rb(23,"ion-card-title"),e.Ac(24),e.Qb(),e.Rb(25,"ion-card-subtitle"),e.Ac(26),e.Qb(),e.Qb(),e.Rb(27,"ion-card-content"),e.Ac(28),e.Qb(),e.Rb(29,"ion-button",6),e.Zb("click",(function(){return n.openExternal()})),e.Ac(30,"Open External Link"),e.Qb(),e.Qb(),e.Qb(),e.Qb(),e.Qb(),e.Qb()),2&t&&(e.Ab(11),e.ic("button",!1),e.Ab(5),e.ic("innerHTML",n.annotation.descriptions,e.sc),e.Ab(3),e.ic("button",!1),e.Ab(3),e.Bc(n.article.category),e.Ab(2),e.Bc(n.article.title),e.Ab(2),e.Bc(n.article.year),e.Ab(2),e.Cc(" ",n.article.abstract," "))},directives:[o.q,o.N,o.M,o.f,o.e,o.r,o.n,o.p,o.C,o.m,o.g,o.i,o.k,o.h,o.j],styles:[""]}),t})()},nF61:function(t,n,i){"use strict";i.d(n,"a",(function(){return s}));var e=i("AytR"),o=i("fXoL"),a=i("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.href=e.a.api_endpoint+"/annotation"}getAttributes(){return this.http.get(this.href+"/attr/get")}addAnnotation(t){return this.http.post(this.href+"/add",{product:t.product,plant:t.plant,components:t.components,study:t.study,interactions:t.interactions,significance:t.significance,articleId:t.articleId,descriptions:t.descriptions})}getAnnotationList(t){return this.http.get(`${this.href}/get?orderBy=${t.orderBy}&isAscending=${t.isAscending}&limit=${t.limit}&offset=${t.offset}&product=${t.product}&plant=${t.plant}&components=${t.components}&study=${t.study}&interactions=${t.interactions}&significance=${t.significance}&articleId=${t.articleId}&requestUser=${t.requestUser}&requestUserId=${t.requestUserId}&approvalUser=${t.approvalUser}&approved=${t.approved}`)}editAnnotation(t){return this.http.post(this.href+"/patch",t)}deleteAnnotation(t){return this.http.post(this.href+"/remove",{annotationId:t._id,confirm:!0})}approveAnnotation(t){return this.http.post(this.href+"/approve",t)}}return t.\u0275fac=function(n){return new(n||t)(o.Vb(a.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},nKRM:function(t,n,i){"use strict";i.d(n,"a",(function(){return u}));var e=i("mrSG"),o=i("fXoL"),a=i("TEn/"),s=i("nF61"),c=i("CzEO"),r=i("3Pt+"),l=i("ofXK");function b(t,n){if(1&t&&(o.Rb(0,"ion-select-option",19),o.Ac(1),o.Qb()),2&t){const t=n.$implicit;o.ic("value",t),o.Ab(1),o.Cc("",t,"\xa0\xa0")}}function p(t,n){if(1&t&&(o.Rb(0,"ion-select-option",19),o.Ac(1),o.Qb()),2&t){const t=n.$implicit;o.ic("value",t),o.Ab(1),o.Cc("",t,"\xa0\xa0")}}function d(t,n){if(1&t&&(o.Rb(0,"ion-select-option",19),o.Ac(1),o.Qb()),2&t){const t=n.$implicit;o.ic("value",t),o.Ab(1),o.Cc("",t,"\xa0\xa0")}}let u=(()=>{class t{constructor(t,n,i){this.modalController=t,this.annotationService=n,this.toastController=i,this.typeOfStudy=new Array,this.typeOfInteractions=new Array,this.significance=new Array,this.getAttributes()}ngOnInit(){console.log("This>Annotation:",this.annotation)}dismissModal(){this.modalController.dismiss()}getAttributes(){this.annotationService.getAttributes().subscribe(t=>{this.typeOfStudy=t.find(t=>"Type of Study"===t.attr_name).attr_value,this.typeOfInteractions=t.find(t=>"Type of Interactions"===t.attr_name).attr_value,this.significance=t.find(t=>"Significance"===t.attr_name).attr_value})}editAnnotation(){this.annotationService.editAnnotation(this.annotation).subscribe(()=>Object(e.a)(this,void 0,void 0,(function*(){this.dismissModal(),(yield this.toastController.create({header:`Edit ${this.annotation.plant} success!`,color:"success",duration:2e3})).present()})),()=>Object(e.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:"Failed to edit "+this.annotation.plant,color:"danger",duration:2e3})).present()})))}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(a.R),o.Mb(s.a),o.Mb(a.Y))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-edit-annotation"]],inputs:{annotation:"annotation"},decls:54,vars:10,consts:[["color","tertiary"],["slot","end"],["shape","round","fill","clear",3,"click"],["name","close"],["lines","none"],["name","basket-outline","slot","start"],[1,"textfield",3,"ngModel","ngModelChange"],["name","leaf","slot","start"],["name","logo-web-component","slot","start"],["name","book","slot","start"],["interface","popover",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","chatbubbles","slot","start"],["name","thumbs-up","slot","start"],["name","chatbubble-ellipses","slot","start"],[1,"textarea",3,"ngModel","ngModelChange"],["lines","none",1,"ion-margin-top"],["slot","end","size","default",3,"click"],["name","save","slot","start"],[3,"value"]],template:function(t,n){1&t&&(o.Rb(0,"ion-header"),o.Rb(1,"ion-toolbar",0),o.Rb(2,"ion-title"),o.Ac(3,"Edit Annotation"),o.Qb(),o.Rb(4,"ion-buttons",1),o.Rb(5,"ion-button",2),o.Zb("click",(function(){return n.dismissModal()})),o.Nb(6,"ion-icon",3),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(7,"ion-content"),o.Rb(8,"ion-grid"),o.Rb(9,"ion-row"),o.Rb(10,"ion-col"),o.Rb(11,"ion-item",4),o.Nb(12,"ion-icon",5),o.Rb(13,"ion-label"),o.Ac(14,"Product Name"),o.Qb(),o.Qb(),o.Rb(15,"quill-editor",6),o.Zb("ngModelChange",(function(t){return n.annotation.product=t})),o.Qb(),o.Rb(16,"ion-item",4),o.Nb(17,"ion-icon",7),o.Rb(18,"ion-label"),o.Ac(19,"Name of Plant"),o.Qb(),o.Qb(),o.Rb(20,"quill-editor",6),o.Zb("ngModelChange",(function(t){return n.annotation.plant=t})),o.Qb(),o.Rb(21,"ion-item",4),o.Nb(22,"ion-icon",8),o.Rb(23,"ion-label"),o.Ac(24,"Active Components"),o.Qb(),o.Qb(),o.Rb(25,"quill-editor",6),o.Zb("ngModelChange",(function(t){return n.annotation.components=t})),o.Qb(),o.Rb(26,"ion-item"),o.Nb(27,"ion-icon",9),o.Rb(28,"ion-label"),o.Ac(29,"Type of Study"),o.Qb(),o.Rb(30,"ion-select",10),o.Zb("ngModelChange",(function(t){return n.annotation.study=t})),o.yc(31,b,2,2,"ion-select-option",11),o.Qb(),o.Qb(),o.Rb(32,"ion-item"),o.Nb(33,"ion-icon",12),o.Rb(34,"ion-label"),o.Ac(35,"Type of Interactions"),o.Qb(),o.Rb(36,"ion-select",10),o.Zb("ngModelChange",(function(t){return n.annotation.interactions=t})),o.yc(37,p,2,2,"ion-select-option",11),o.Qb(),o.Qb(),o.Rb(38,"ion-item"),o.Nb(39,"ion-icon",13),o.Rb(40,"ion-label"),o.Ac(41,"Significance"),o.Qb(),o.Rb(42,"ion-select",10),o.Zb("ngModelChange",(function(t){return n.annotation.significance=t})),o.yc(43,d,2,2,"ion-select-option",11),o.Qb(),o.Qb(),o.Rb(44,"ion-item",4),o.Nb(45,"ion-icon",14),o.Rb(46,"ion-label"),o.Ac(47,"Descriptions"),o.Qb(),o.Qb(),o.Rb(48,"quill-editor",15),o.Zb("ngModelChange",(function(t){return n.annotation.descriptions=t})),o.Qb(),o.Rb(49,"ion-item",16),o.Rb(50,"ion-button",17),o.Zb("click",(function(){return n.editAnnotation()})),o.Nb(51,"ion-icon",18),o.Rb(52,"ion-label"),o.Ac(53,"Save"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.Ab(15),o.ic("ngModel",n.annotation.product),o.Ab(5),o.ic("ngModel",n.annotation.plant),o.Ab(5),o.ic("ngModel",n.annotation.components),o.Ab(5),o.ic("ngModel",n.annotation.study),o.Ab(1),o.ic("ngForOf",n.typeOfStudy),o.Ab(5),o.ic("ngModel",n.annotation.interactions),o.Ab(1),o.ic("ngForOf",n.typeOfInteractions),o.Ab(5),o.ic("ngModel",n.annotation.significance),o.Ab(1),o.ic("ngForOf",n.significance),o.Ab(5),o.ic("ngModel",n.annotation.descriptions))},directives:[a.q,a.N,a.M,a.f,a.e,a.r,a.n,a.p,a.C,a.m,a.t,a.u,c.a,r.e,r.h,a.E,a.W,l.k,a.F],styles:[""]}),t})()},vU8m:function(t,n,i){"use strict";i.r(n),i.d(n,"MyAnnotationPageModule",(function(){return O}));var e=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),c=i("mrSG"),r=i("VQbp"),l=i("nKRM"),b=i("QuQm"),p=i("fXoL"),d=i("KJTt"),u=i("nF61"),g=i("Yhfc"),h=i("2MiI"),f=i("lDzL"),m=i("LmEr");function R(t,n){if(1&t){const t=p.Sb();p.Rb(0,"ion-item",41),p.Nb(1,"ion-text",42),p.Rb(2,"ion-buttons",43),p.Rb(3,"ion-button",44),p.Zb("click",(function(){p.rc(t);const i=n.$implicit;return p.bc().deleteAnnotation(i)})),p.Nb(4,"ion-icon",45),p.Rb(5,"ion-label"),p.Ac(6,"Delete"),p.Qb(),p.Qb(),p.Rb(7,"ion-button",46),p.Zb("click",(function(){p.rc(t);const i=n.$implicit;return p.bc().editAnnotation(i)})),p.Nb(8,"ion-icon",47),p.Rb(9,"ion-label"),p.Ac(10,"Edit"),p.Qb(),p.Qb(),p.Qb(),p.Qb()}if(2&t){const t=n.$implicit;p.Ab(1),p.ic("innerHTML",t.plant,p.sc)}}function Q(t,n){if(1&t&&p.Nb(0,"span",42),2&t){const t=p.bc().value;p.ic("innerHTML",t,p.sc)}}function A(t,n){if(1&t){const t=p.Sb();p.Rb(0,"span"),p.Rb(1,"ion-button",51),p.Zb("click",(function(){p.rc(t);const n=p.bc().row;return p.bc(2).openInfo(n)})),p.Nb(2,"ion-icon",52),p.Qb(),p.Qb()}}function y(t,n){if(1&t&&(p.yc(0,Q,1,1,"span",50),p.yc(1,A,3,0,"span",39)),2&t){const t=p.bc().$implicit;p.ic("ngIf","More Info"!==t.name),p.Ab(1),p.ic("ngIf","More Info"===t.name)}}function v(t,n){1&t&&(p.Rb(0,"ngx-datatable-column",48),p.yc(1,y,2,2,"ng-template",49),p.Qb()),2&t&&p.ic("name",n.$implicit.name)("width",200)}function M(t,n){if(1&t){const t=p.Sb();p.Rb(0,"ion-item",41),p.Nb(1,"ion-text",42),p.Rb(2,"ion-buttons",43),p.Rb(3,"ion-button",44),p.Zb("click",(function(){p.rc(t);const i=n.$implicit;return p.bc(2).deleteAnnotation(i)})),p.Nb(4,"ion-icon",45),p.Rb(5,"ion-label"),p.Ac(6,"Delete"),p.Qb(),p.Qb(),p.Rb(7,"ion-button",46),p.Zb("click",(function(){p.rc(t);const i=n.$implicit;return p.bc(2).editAnnotation(i)})),p.Nb(8,"ion-icon",47),p.Rb(9,"ion-label"),p.Ac(10,"Edit"),p.Qb(),p.Qb(),p.Qb(),p.Qb()}if(2&t){const t=n.$implicit;p.Ab(1),p.ic("innerHTML",t.plant,p.sc)}}function w(t,n){if(1&t&&(p.Rb(0,"ion-row"),p.Nb(1,"ion-col",10),p.Rb(2,"ion-col",25),p.yc(3,M,11,1,"ion-item",26),p.Qb(),p.Nb(4,"ion-col",10),p.Qb()),2&t){const t=p.bc();p.Ab(3),p.ic("ngForOf",t.selected2)}}function C(t,n){if(1&t&&p.Nb(0,"span",42),2&t){const t=p.bc().value;p.ic("innerHTML",t,p.sc)}}function N(t,n){if(1&t){const t=p.Sb();p.Rb(0,"span"),p.Rb(1,"ion-button",51),p.Zb("click",(function(){p.rc(t);const n=p.bc().row;return p.bc(2).openInfo(n)})),p.Nb(2,"ion-icon",52),p.Qb(),p.Qb()}}function S(t,n){if(1&t&&(p.yc(0,C,1,1,"span",50),p.yc(1,N,3,0,"span",39)),2&t){const t=p.bc().$implicit;p.ic("ngIf","More Info"!==t.name),p.Ab(1),p.ic("ngIf","More Info"===t.name)}}function I(t,n){1&t&&(p.Rb(0,"ngx-datatable-column",48),p.yc(1,S,2,2,"ng-template",49),p.Qb()),2&t&&p.ic("name",n.$implicit.name)("width",200)}const P=[{path:"",component:(()=>{class t{constructor(t,n,i,e,o,a,s){this.pagePositionService=t,this.annotationService=n,this.modalController=i,this.alertController=e,this.toastController=o,this.tokenHelper=a,this.loadingController=s,this.pageAtTop=!0,this.isSenior=!1,this.page=new b.a,this.rows=new Array,this.page2=new b.a,this.rows2=new Array,this.selected=[],this.selected2=[],this.searchText="",this.searchText2="",this.columns=[{name:"Product"},{name:"Plant"},{name:"Components"},{name:"Study"},{name:"Interactions"},{name:"Significance"},{name:"status"},{name:"comments"},{name:"More Info"}],this.page.limit=5,this.page2.limit=5,this.isSenior="senior data manager"===this.tokenHelper.getRole()}ngOnInit(){this.innerWidth=window.innerWidth,this.setPage({offset:0}),this.setPage2({offset:0})}setPage(t){this.page.offset=t.offset,this.page.requestUser=!0,this.page.approved="pending,unapproved",this.page.requestUserId=this.tokenHelper.getID(),this.annotationService.getAnnotationList(this.page).subscribe(t=>{this.page.offset=t.offset,this.page.totalAnnotations=t.total,this.page.totalPage=t.pages,console.log(t.result),this.rows=t.result.map(t=>({_id:t._id,product:t.product,plant:t.plant,components:t.components,study:t.study,interactions:t.interactions,significance:t.significance,comments:t.comments,articleId:t.articles,status:t.approved,descriptions:t.descriptions}))})}setPage2(t){this.page2.offset=t.offset,this.page2.requestUser=!0,this.page2.approved="approved",this.page2.requestUserId=this.tokenHelper.getID(),this.annotationService.getAnnotationList(this.page2).subscribe(t=>{console.log(t.result),this.page2.offset=t.offset,this.page2.totalAnnotations=t.total,this.page2.totalPage=t.pages,this.rows2=t.result.map(t=>({_id:t._id,product:t.product,plant:t.plant,components:t.components,study:t.study,interactions:t.interactions,significance:t.significance,comments:t.comments,articleId:t.articles,status:t.approved,descriptions:t.descriptions}))})}onSort(t){this.page.orderBy=t.column.name.toLowerCase(),this.page.isAscending="asc"===t.newValue,this.page.approved="pending,unapproved",this.annotationService.getAnnotationList(this.page).subscribe(t=>{this.page.offset=t.offset,this.page.totalAnnotations=t.total,this.page.totalPage=t.pages,this.rows=t.articles.map(t=>({_id:t._id,product:t.product,plant:t.plant,components:t.components,study:t.study,interactions:t.interactions,significance:t.significance,comments:t.comments,articleId:t.articles,descriptions:t.descriptions}))})}onSort2(t){this.page2.orderBy=t.column.name.toLowerCase(),this.page2.isAscending="asc"===t.newValue,this.page2.approved="approved",this.annotationService.getAnnotationList(this.page2).subscribe(t=>{this.page2.offset=t.offset,this.page2.totalAnnotations=t.total,this.page2.totalPage=t.pages,this.rows2=t.articles.map(t=>({_id:t._id,product:t.product,plant:t.plant,components:t.components,study:t.study,interactions:t.interactions,significance:t.significance,comments:t.comments,articleId:t.articles,descriptions:t.descriptions}))})}onSelect({}){}onSelect2({}){}search(t){this.presentLoading();const n=t?t.target.value:this.searchText;this.page.offset=0,this.page.product="",this.page.plant="",this.page.components="",this.page.study="",this.page.interactions="",this.page.significance="","product"===this.page.searchBy?this.page.product=n:"plant"===this.page.searchBy?this.page.plant=n:"components"===this.page.searchBy?this.page.components=n:"study"===this.page.searchBy?this.page.study=n:"interactions"===this.page.searchBy?this.page.interactions=n:"significance"===this.page.searchBy&&(this.page.significance=n),this.annotationService.getAnnotationList(this.page).subscribe(t=>{this.stopLoading(),this.page.offset=t.offset,this.page.totalAnnotations=t.total,this.page.totalPage=t.pages,this.rows=t.result.map(t=>({_id:t._id,product:t.product,plant:t.plant,components:t.components,study:t.study,interactions:t.interactions,significance:t.significance,descriptions:t.descriptions,approved:t.approved,articleId:t.articles}))},()=>{},()=>{this.stopLoading()})}search2(t){this.presentLoading();const n=t?t.target.value:this.searchText2;this.page2.offset=0,this.page2.product="",this.page2.plant="",this.page2.components="",this.page2.study="",this.page2.interactions="",this.page2.significance="","product"===this.page2.searchBy?this.page2.product=n:"plant"===this.page2.searchBy?this.page2.plant=n:"components"===this.page2.searchBy?this.page2.components=n:"study"===this.page2.searchBy?this.page2.study=n:"interactions"===this.page2.searchBy?this.page2.interactions=n:"significance"===this.page2.searchBy&&(this.page2.significance=n),this.annotationService.getAnnotationList(this.page2).subscribe(t=>{this.stopLoading(),this.page2.offset=t.offset,this.page2.totalAnnotations=t.total,this.page2.totalPage=t.pages,this.rows2=t.result.map(t=>({_id:t._id,product:t.product,plant:t.plant,components:t.components,study:t.study,interactions:t.interactions,significance:t.significance,descriptions:t.descriptions,approved:t.approved,articleId:t.articles}))},()=>{},()=>{this.stopLoading()})}presentLoading(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({cssClass:"my-custom-class",message:"Searching annotations..."});yield t.present()}))}stopLoading(){return Object(c.a)(this,void 0,void 0,(function*(){this.loadingController.dismiss()}))}onResize(t){this.innerWidth=window.innerWidth}onScroll(t){this.pageAtTop=this.pagePositionService.isPageAtTop(t)}editAnnotation(t){return Object(c.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({cssClass:"custom-lg-modal",component:l.a,componentProps:{annotation:t}});yield n.present(),yield n.onWillDismiss().then(()=>{this.ngOnInit()})}))}deleteAnnotation(t){return Object(c.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Permenantly delete",subHeader:"Are you sure you want to delete this annotation?",message:""+t.plant,buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>{this.annotationService.deleteAnnotation(t).subscribe(()=>Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:"Delete selected data annotation success!",color:"success",duration:2e3})).present(),this.ngOnInit()})),()=>Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:"Fail to delete selected data annotation!",color:"danger",duration:2e3})).present(),this.ngOnInit()})))}}]});yield n.present()}))}openInfo(t){return Object(c.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({cssClass:"custom-lg-modal",component:r.a,componentProps:{annotation:t}});return yield n.present()}))}changeResultPerPage(t){this.page.limit=t.detail.value,this.search(!1)}changeResultPerPage2(t){this.page2.limit=t.detail.value,this.search2(!1)}}return t.\u0275fac=function(n){return new(n||t)(p.Mb(d.a),p.Mb(u.a),p.Mb(a.R),p.Mb(a.a),p.Mb(a.Y),p.Mb(g.a),p.Mb(a.Q))},t.\u0275cmp=p.Gb({type:t,selectors:[["app-my-annotation"]],hostBindings:function(t,n){1&t&&p.Zb("resize",(function(t){return n.onResize(t)}),!1,p.qc)},decls:163,vars:38,consts:[[3,"pageAtTop"],[3,"fullscreen","scrollEvents","ionScroll"],["id","container"],["id","navi"],[1,"circle-1"],["id","infoi"],[1,"ion-no-padding","page-height"],["size","1"],["size","10","size-lg","6"],[1,"home-title"],["size","0","size-md","1"],["size","10","size-md","9"],["showCancelButton","never","animated","","placeholder","Enter your search",3,"ngModel","keyup.enter","ngModelChange"],["size","2","size-md","2"],["color","primary","fill","solid",2,"margin-top","10px",3,"click"],["name","search-outline"],[3,"ngModel","ngModelChange"],[2,"margin-left","7vw","margin-right","7vw"],["lines","none","color","none"],["slot","start","mode","md","item-left","","value","product"],["slot","start","mode","md","item-left","","value","plant"],["slot","start","mode","md","item-left","","value","components"],["slot","start","mode","md","item-left","","value","study"],["slot","start","mode","md","item-left","","value","interactions"],["slot","start","mode","md","item-left","","value","significance"],["size","12","size-md","10"],["lines","none","color","light",4,"ngFor","ngForOf"],[2,"margin","5px 5px"],["size","5","size-md","7"],["lines","none"],[2,"font-size","12px","color","grey"],["size","7","size-md","3"],["interface","popover","value","10",2,"font-size","12px","color","grey",3,"ionChange"],["value","10"],["value","25"],["value","50"],["value","100"],["rowHeight","auto",1,"material",2,"margin-bottom","20vh",3,"rows","columnMode","headerHeight","footerHeight","externalPaging","count","offset","limit","scrollbarH","selected","selectionType","externalSorting","page","select","sort"],[3,"name","width",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"innerWidth"],["lines","none","color","light"],[3,"innerHTML"],["slot","end"],["color","danger","fill","solid",3,"click"],["name","trash","slot","start"],["color","warning","fill","solid",3,"click"],["name","create-outline"],[3,"name","width"],["ngx-datatable-cell-template",""],[3,"innerHTML",4,"ngIf"],["shape","round","fill","clear",3,"click"],["name","information-circle","color","tertiary"]],template:function(t,n){1&t&&(p.Rb(0,"ion-header"),p.Nb(1,"app-header",0),p.Qb(),p.Rb(2,"ion-content",1),p.Zb("ionScroll",(function(t){return n.onScroll(t)})),p.Rb(3,"div",2),p.Rb(4,"div",3),p.Nb(5,"span",4),p.Qb(),p.Rb(6,"div",5),p.Rb(7,"ion-grid",6),p.Rb(8,"ion-row"),p.Nb(9,"ion-col",7),p.Rb(10,"ion-col",8),p.Rb(11,"h1",9),p.Ac(12,"My Pending/Unapproved Data Annotation"),p.Qb(),p.Qb(),p.Qb(),p.Rb(13,"ion-row"),p.Nb(14,"ion-col",10),p.Rb(15,"ion-col",11),p.Rb(16,"ion-searchbar",12),p.Zb("keyup.enter",(function(t){return n.search(t)}))("ngModelChange",(function(t){return n.searchText=t})),p.Qb(),p.Qb(),p.Rb(17,"ion-col",13),p.Rb(18,"ion-button",14),p.Zb("click",(function(){return n.search(!1)})),p.Nb(19,"ion-icon",15),p.Qb(),p.Qb(),p.Qb(),p.Rb(20,"ion-radio-group",16),p.Zb("ngModelChange",(function(t){return n.page.searchBy=t})),p.Rb(21,"ion-grid",17),p.Rb(22,"ion-row"),p.Rb(23,"ion-col"),p.Rb(24,"ion-item",18),p.Rb(25,"ion-label"),p.Ac(26,"Search by:"),p.Qb(),p.Qb(),p.Qb(),p.Rb(27,"ion-col"),p.Rb(28,"ion-item",18),p.Rb(29,"ion-label"),p.Ac(30,"Product"),p.Qb(),p.Nb(31,"ion-radio",19),p.Qb(),p.Qb(),p.Rb(32,"ion-col"),p.Rb(33,"ion-item",18),p.Rb(34,"ion-label"),p.Ac(35,"Plant"),p.Qb(),p.Nb(36,"ion-radio",20),p.Qb(),p.Qb(),p.Rb(37,"ion-col"),p.Rb(38,"ion-item",18),p.Rb(39,"ion-label"),p.Ac(40,"Components"),p.Qb(),p.Nb(41,"ion-radio",21),p.Qb(),p.Qb(),p.Rb(42,"ion-col"),p.Rb(43,"ion-item",18),p.Rb(44,"ion-label"),p.Ac(45,"Study"),p.Qb(),p.Nb(46,"ion-radio",22),p.Qb(),p.Qb(),p.Rb(47,"ion-col"),p.Rb(48,"ion-item",18),p.Rb(49,"ion-label"),p.Ac(50,"Interactions"),p.Qb(),p.Nb(51,"ion-radio",23),p.Qb(),p.Qb(),p.Rb(52,"ion-col"),p.Rb(53,"ion-item",18),p.Rb(54,"ion-label"),p.Ac(55,"Significance"),p.Qb(),p.Nb(56,"ion-radio",24),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Rb(57,"ion-row"),p.Nb(58,"ion-col",10),p.Rb(59,"ion-col",25),p.yc(60,R,11,1,"ion-item",26),p.Qb(),p.Nb(61,"ion-col",10),p.Qb(),p.Rb(62,"ion-row",27),p.Nb(63,"ion-col",10),p.Rb(64,"ion-col",28),p.Rb(65,"ion-item",29),p.Rb(66,"ion-label",30),p.Ac(67),p.Qb(),p.Qb(),p.Qb(),p.Rb(68,"ion-col",31),p.Rb(69,"ion-item",29),p.Rb(70,"ion-label",30),p.Ac(71,"Results per Page"),p.Qb(),p.Rb(72,"ion-select",32),p.Zb("ionChange",(function(t){return n.changeResultPerPage(t)})),p.Rb(73,"ion-select-option",33),p.Ac(74,"10"),p.Qb(),p.Rb(75,"ion-select-option",34),p.Ac(76,"25"),p.Qb(),p.Rb(77,"ion-select-option",35),p.Ac(78,"50"),p.Qb(),p.Rb(79,"ion-select-option",36),p.Ac(80,"100"),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Rb(81,"ion-row"),p.Nb(82,"ion-col",10),p.Rb(83,"ion-col",25),p.Rb(84,"ngx-datatable",37),p.Zb("page",(function(t){return n.setPage(t)}))("select",(function(t){return n.onSelect(t)}))("sort",(function(t){return n.onSort(t)})),p.yc(85,v,2,2,"ngx-datatable-column",38),p.Qb(),p.Qb(),p.Nb(86,"ion-col",10),p.Qb(),p.Rb(87,"ion-row"),p.Nb(88,"ion-col",7),p.Rb(89,"ion-col",8),p.Rb(90,"h1",9),p.Ac(91,"Approved Data Annotation"),p.Qb(),p.Qb(),p.Qb(),p.Rb(92,"ion-row"),p.Nb(93,"ion-col",10),p.Rb(94,"ion-col",11),p.Rb(95,"ion-searchbar",12),p.Zb("keyup.enter",(function(t){return n.search2(t)}))("ngModelChange",(function(t){return n.searchText2=t})),p.Qb(),p.Qb(),p.Rb(96,"ion-col",13),p.Rb(97,"ion-button",14),p.Zb("click",(function(){return n.search2(!1)})),p.Nb(98,"ion-icon",15),p.Qb(),p.Qb(),p.Qb(),p.Rb(99,"ion-radio-group",16),p.Zb("ngModelChange",(function(t){return n.page2.searchBy=t})),p.Rb(100,"ion-grid",17),p.Rb(101,"ion-row"),p.Rb(102,"ion-col"),p.Rb(103,"ion-item",18),p.Rb(104,"ion-label"),p.Ac(105,"Search by:"),p.Qb(),p.Qb(),p.Qb(),p.Rb(106,"ion-col"),p.Rb(107,"ion-item",18),p.Rb(108,"ion-label"),p.Ac(109,"Product"),p.Qb(),p.Nb(110,"ion-radio",19),p.Qb(),p.Qb(),p.Rb(111,"ion-col"),p.Rb(112,"ion-item",18),p.Rb(113,"ion-label"),p.Ac(114,"Plant"),p.Qb(),p.Nb(115,"ion-radio",20),p.Qb(),p.Qb(),p.Rb(116,"ion-col"),p.Rb(117,"ion-item",18),p.Rb(118,"ion-label"),p.Ac(119,"Components"),p.Qb(),p.Nb(120,"ion-radio",21),p.Qb(),p.Qb(),p.Rb(121,"ion-col"),p.Rb(122,"ion-item",18),p.Rb(123,"ion-label"),p.Ac(124,"Study"),p.Qb(),p.Nb(125,"ion-radio",22),p.Qb(),p.Qb(),p.Rb(126,"ion-col"),p.Rb(127,"ion-item",18),p.Rb(128,"ion-label"),p.Ac(129,"Interactions"),p.Qb(),p.Nb(130,"ion-radio",23),p.Qb(),p.Qb(),p.Rb(131,"ion-col"),p.Rb(132,"ion-item",18),p.Rb(133,"ion-label"),p.Ac(134,"Significance"),p.Qb(),p.Nb(135,"ion-radio",24),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.yc(136,w,5,1,"ion-row",39),p.Rb(137,"ion-row",27),p.Nb(138,"ion-col",10),p.Rb(139,"ion-col",28),p.Rb(140,"ion-item",29),p.Rb(141,"ion-label",30),p.Ac(142),p.Qb(),p.Qb(),p.Qb(),p.Rb(143,"ion-col",31),p.Rb(144,"ion-item",29),p.Rb(145,"ion-label",30),p.Ac(146,"Results per Page"),p.Qb(),p.Rb(147,"ion-select",32),p.Zb("ionChange",(function(t){return n.changeResultPerPage2(t)})),p.Rb(148,"ion-select-option",33),p.Ac(149,"10"),p.Qb(),p.Rb(150,"ion-select-option",34),p.Ac(151,"25"),p.Qb(),p.Rb(152,"ion-select-option",35),p.Ac(153,"50"),p.Qb(),p.Rb(154,"ion-select-option",36),p.Ac(155,"100"),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Rb(156,"ion-row"),p.Nb(157,"ion-col",10),p.Rb(158,"ion-col",25),p.Rb(159,"ngx-datatable",37),p.Zb("page",(function(t){return n.setPage2(t)}))("select",(function(t){return n.onSelect2(t)}))("sort",(function(t){return n.onSort2(t)})),p.yc(160,I,2,2,"ngx-datatable-column",38),p.Qb(),p.Qb(),p.Nb(161,"ion-col",10),p.Qb(),p.Qb(),p.Nb(162,"app-footer",40),p.Qb(),p.Qb(),p.Qb()),2&t&&(p.Ab(1),p.ic("pageAtTop",n.pageAtTop),p.Ab(1),p.ic("fullscreen",!0)("scrollEvents",!0),p.Ab(14),p.ic("ngModel",n.searchText),p.Ab(4),p.ic("ngModel",n.page.searchBy),p.Ab(40),p.ic("ngForOf",n.selected),p.Ab(7),p.Cc("",n.page.totalAnnotations," total"),p.Ab(17),p.ic("rows",n.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("externalPaging",!0)("count",n.page.totalAnnotations)("offset",n.page.offset)("limit",n.page.limit)("scrollbarH",!0)("selected",n.selected)("selectionType","single")("externalSorting",!0),p.Ab(1),p.ic("ngForOf",n.columns),p.Ab(10),p.ic("ngModel",n.searchText2),p.Ab(4),p.ic("ngModel",n.page2.searchBy),p.Ab(37),p.ic("ngIf",n.isSenior),p.Ab(6),p.Cc("",n.page2.totalAnnotations," total"),p.Ab(17),p.ic("rows",n.rows2)("columnMode","force")("headerHeight",50)("footerHeight",50)("externalPaging",!0)("count",n.page2.totalAnnotations)("offset",n.page2.offset)("limit",n.page2.limit)("scrollbarH",!0)("selected",n.selected2)("selectionType","single")("externalSorting",!0),p.Ab(1),p.ic("ngForOf",n.columns),p.Ab(2),p.ic("innerWidth",n.innerWidth))},directives:[a.q,h.a,a.n,a.p,a.C,a.m,a.D,a.X,o.e,o.h,a.e,a.r,a.A,a.W,a.t,a.u,a.z,a.U,e.k,a.E,a.F,f.c,e.l,m.a,a.K,a.f,f.b,f.a],styles:[".circle-1[_ngcontent-%COMP%]{right:-434px;top:-554px;height:868px;width:868px}.circle-1[_ngcontent-%COMP%], .circle-2[_ngcontent-%COMP%]{position:absolute;background-color:#bbb;border-radius:50%;display:inline-block;background:#6078ea;background:linear-gradient(201deg,#6078ea,#17ead9)}.circle-2[_ngcontent-%COMP%]{left:-200px;top:1200px;height:500px;width:500px}#container[_ngcontent-%COMP%]{position:relative}#infoi[_ngcontent-%COMP%], #navi[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}#infoi[_ngcontent-%COMP%]{z-index:1}.page-height[_ngcontent-%COMP%]{min-height:100vh}"]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(P)],s.i]}),t})();var k=i("iWjc");let O=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(n){return new(n||t)},imports:[[e.c,o.a,a.O,x,f.d,k.a]]}),t})()}}]);