function _objectDestructuringEmpty(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3zE6":function(e,t,n){"use strict";n.r(t),n.d(t,"AnnotationPublicPageModule",(function(){return S}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),c=n("mrSG"),s=n("9/eo"),l=n("VQbp"),u=n("QuQm"),p=n("nKRM"),d=n("fXoL"),f=n("KJTt"),b=n("nF61"),h=n("QY0l"),g=n("Yhfc"),m=n("2MiI"),v=n("lDzL"),w=n("LmEr");function y(e,t){if(1&e&&(d.Rb(0,"ion-row"),d.Nb(1,"ion-col",11),d.Rb(2,"ion-col",19),d.Rb(3,"ion-card"),d.Rb(4,"ion-card-header"),d.Rb(5,"ion-card-title"),d.Ac(6),d.Qb(),d.Rb(7,"ion-card-subtitle"),d.Rb(8,"strong"),d.Ac(9,"DOI"),d.Qb(),d.Ac(10),d.Qb(),d.Qb(),d.Rb(11,"ion-card-content"),d.Nb(12,"p",20),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&e){var n=d.bc();d.Ab(6),d.Cc(" ",n.articleInfo.title," "),d.Ab(4),d.Cc(" : ",n.articleInfo.doi,""),d.Ab(2),d.ic("innerHTML",n.articleInfo.abstract,d.sc)}}function R(e,t){if(1&e&&d.Nb(0,"span",20),2&e){var n=d.bc().value;d.ic("innerHTML",n,d.sc)}}function C(e,t){if(1&e){var n=d.Sb();d.Rb(0,"span"),d.Rb(1,"ion-button",24),d.Zb("click",(function(){d.rc(n);var e=d.bc().row;return d.bc(2).openInfo(e)})),d.Nb(2,"ion-icon",25),d.Qb(),d.Qb()}}function x(e,t){if(1&e&&(d.yc(0,R,1,1,"span",23),d.yc(1,C,3,0,"span",10)),2&e){var n=d.bc().$implicit;d.ic("ngIf","More Info"!==n.name),d.Ab(1),d.ic("ngIf","More Info"===n.name)}}function A(e,t){1&e&&(d.Rb(0,"ngx-datatable-column",21),d.yc(1,x,2,2,"ng-template",22),d.Qb()),2&e&&d.ic("name",t.$implicit.name)("width",200)}var I,k,M,P=[{path:"",component:(I=function(){function e(t,n,i,o,r,a,c,s){_classCallCheck(this,e),this.pagePositionService=t,this.annotationService=n,this.articleService=i,this.modalController=o,this.alertController=r,this.toastController=a,this.tokenHelper=c,this.route=s,this.pageAtTop=!0,this.isSenior=!1,this.page2=new u.a,this.rows2=new Array,this.selected=[],this.selected2=[],this.columns=[{name:"Product"},{name:"Plant"},{name:"Components"},{name:"Study"},{name:"Interactions"},{name:"Significance"},{name:"status"},{name:"comments"},{name:"More Info"}],this.page2.limit=5,this.articleId=this.route.snapshot.paramMap.get("article-id"),this.isSenior="senior data manager"===this.tokenHelper.getRole()}return _createClass(e,[{key:"ionViewWillEnter",value:function(){}},{key:"ngOnInit",value:function(){this.articleId=this.route.snapshot.paramMap.get("article-id"),this.innerWidth=window.innerWidth,this.getArticleInfo(),this.setPage2({offset:0})}},{key:"onResize",value:function(e){this.innerWidth=window.innerWidth}},{key:"onScroll",value:function(e){this.pageAtTop=this.pagePositionService.isPageAtTop(e)}},{key:"getArticleInfo",value:function(){var e=this;this.articleService.getArticleInfoById(this.articleId).subscribe((function(t){e.articleInfo=t.articles[0]}))}},{key:"setPage2",value:function(e){var t=this;this.page2.offset=e.offset,this.page2.articleId=this.articleId,this.page2.approved="approved",this.annotationService.getAnnotationList(this.page2).subscribe((function(e){t.page2.offset=e.offset,t.page2.totalAnnotations=e.total,t.page2.totalPage=e.pages,t.rows2=e.result.map((function(e){return{_id:e._id,product:e.product,plant:e.plant,components:e.components,study:e.study,interactions:e.interactions,significance:e.significance,comments:e.comments,articleId:e.articles,status:e.approved,descriptions:e.descriptions}}))}))}},{key:"onSort2",value:function(e){var t=this;this.page2.orderBy=e.column.name.toLowerCase(),this.page2.isAscending="asc"===e.newValue,this.page2.articleId=this.articleId,this.page2.approved="approved",this.annotationService.getAnnotationList(this.page2).subscribe((function(e){t.page2.offset=e.offset,t.page2.totalAnnotations=e.total,t.page2.totalPage=e.pages,t.rows2=e.articles.map((function(e){return{_id:e._id,product:e.product,plant:e.plant,components:e.components,study:e.study,interactions:e.interactions,significance:e.significance,comments:e.comments,articleId:e.articles,descriptions:e.descriptions}}))}))}},{key:"onSelect",value:function(e){_objectDestructuringEmpty(e)}},{key:"onSelect2",value:function(e){_objectDestructuringEmpty(e)}},{key:"openInfo",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({cssClass:"custom-lg-modal",component:l.a,componentProps:{annotation:e}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"openAddAnnotationModal",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({cssClass:"custom-lg-modal",component:s.a,componentProps:{articleId:this.articleId}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss().then((function(){n.ngOnInit()}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"editAnnotation",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({cssClass:"custom-lg-modal",component:p.a,componentProps:{annotation:e}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss().then((function(){i.ngOnInit()}));case 7:case"end":return t.stop()}}),t,this)})))}},{key:"deleteAnnotation",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Permenantly delete",subHeader:"Are you sure you want to delete this annotation?",message:""+e.plant,buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:function(){i.annotationService.deleteAnnotation(e).subscribe((function(){return Object(c.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({header:"Delete selected data annotation success!",color:"success",duration:2e3});case 2:e.sent.present(),this.ngOnInit();case 4:case"end":return e.stop()}}),e,this)})))}),(function(){return Object(c.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({header:"Fail to delete selected data annotation!",color:"danger",duration:2e3});case 2:e.sent.present(),this.ngOnInit();case 4:case"end":return e.stop()}}),e,this)})))}))}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}}]),e}(),I.\u0275fac=function(e){return new(e||I)(d.Mb(f.a),d.Mb(b.a),d.Mb(h.a),d.Mb(r.R),d.Mb(r.a),d.Mb(r.Y),d.Mb(g.a),d.Mb(a.a))},I.\u0275cmp=d.Gb({type:I,selectors:[["app-annotation-public"]],hostBindings:function(e,t){1&e&&d.Zb("resize",(function(e){return t.onResize(e)}),!1,d.qc)},decls:24,vars:18,consts:[[3,"pageAtTop"],["fixed",""],["slot","start"],["defaultHref","/search"],[3,"fullscreen","scrollEvents","ionScroll"],["id","container"],["id","navi"],[1,"circle-1"],["id","infoi"],[1,"ion-no-padding","page-height"],[4,"ngIf"],["size","1"],["size","10","size-lg","6"],[1,"home-title"],["size","0","size-md","1"],["size","12","size-md","10"],["rowHeight","auto",1,"material",2,"margin-bottom","20vh",3,"rows","columnMode","headerHeight","footerHeight","externalPaging","count","offset","limit","scrollbarH","selected","selectionType","externalSorting","page","select","sort"],[3,"name","width",4,"ngFor","ngForOf"],[3,"innerWidth"],["size","10"],[3,"innerHTML"],[3,"name","width"],["ngx-datatable-cell-template",""],[3,"innerHTML",4,"ngIf"],["shape","round","fill","clear",3,"click"],["name","information-circle","color","tertiary"]],template:function(e,t){1&e&&(d.Rb(0,"ion-header"),d.Nb(1,"app-header",0),d.Rb(2,"ion-toolbar",1),d.Rb(3,"ion-buttons",2),d.Nb(4,"ion-back-button",3),d.Qb(),d.Qb(),d.Qb(),d.Rb(5,"ion-content",4),d.Zb("ionScroll",(function(e){return t.onScroll(e)})),d.Rb(6,"div",5),d.Rb(7,"div",6),d.Nb(8,"span",7),d.Qb(),d.Rb(9,"div",8),d.Rb(10,"ion-grid",9),d.yc(11,y,13,3,"ion-row",10),d.Rb(12,"ion-row"),d.Nb(13,"ion-col",11),d.Rb(14,"ion-col",12),d.Rb(15,"h1",13),d.Ac(16,"Data Annotation"),d.Qb(),d.Qb(),d.Qb(),d.Rb(17,"ion-row"),d.Nb(18,"ion-col",14),d.Rb(19,"ion-col",15),d.Rb(20,"ngx-datatable",16),d.Zb("page",(function(e){return t.setPage2(e)}))("select",(function(e){return t.onSelect2(e)}))("sort",(function(e){return t.onSort2(e)})),d.yc(21,A,2,2,"ngx-datatable-column",17),d.Qb(),d.Qb(),d.Nb(22,"ion-col",14),d.Qb(),d.Qb(),d.Nb(23,"app-footer",18),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.Ab(1),d.ic("pageAtTop",t.pageAtTop),d.Ab(4),d.ic("fullscreen",!0)("scrollEvents",!0),d.Ab(6),d.ic("ngIf",t.articleInfo),d.Ab(9),d.ic("rows",t.rows2)("columnMode","force")("headerHeight",50)("footerHeight",50)("externalPaging",!0)("count",t.page2.totalAnnotations)("offset",t.page2.offset)("limit",t.page2.limit)("scrollbarH",!0)("selected",t.selected2)("selectionType","single")("externalSorting",!0),d.Ab(1),d.ic("ngForOf",t.columns),d.Ab(2),d.ic("innerWidth",t.innerWidth))},directives:[r.q,m.a,r.N,r.f,r.c,r.d,r.n,r.p,i.l,r.C,r.m,v.c,i.k,w.a,r.g,r.i,r.k,r.j,r.h,v.b,v.a,r.e,r.r],styles:[".circle-1[_ngcontent-%COMP%]{right:-434px;top:-554px;height:868px;width:868px}.circle-1[_ngcontent-%COMP%], .circle-2[_ngcontent-%COMP%]{position:absolute;background-color:#bbb;border-radius:50%;display:inline-block;background:#6078ea;background:linear-gradient(201deg,#6078ea,#17ead9)}.circle-2[_ngcontent-%COMP%]{left:-200px;top:1200px;height:500px;width:500px}#container[_ngcontent-%COMP%]{position:relative}#infoi[_ngcontent-%COMP%], #navi[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}#infoi[_ngcontent-%COMP%]{z-index:1}.page-height[_ngcontent-%COMP%]{min-height:100vh}"]}),I)}],Q=((k=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:k}),k.\u0275inj=d.Jb({factory:function(e){return new(e||k)},imports:[[a.i.forChild(P)],a.i]}),k),O=n("iWjc"),S=((M=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:M}),M.\u0275inj=d.Jb({factory:function(e){return new(e||M)},imports:[[i.c,o.a,r.O,Q,v.d,O.a]]}),M)}}]);