(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{yQt4:function(t,e,i){"use strict";i.r(e),i.d(e,"SearchPageModule",(function(){return Q}));var n=i("ofXK"),a=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),c=i("mrSG"),s=i("dfks"),l=i("Buy9"),g=i("fXoL"),b=i("KJTt"),p=i("QY0l"),h=i("2MiI"),d=i("lDzL"),u=i("LmEr");function f(t,e){if(1&t&&(g.Qb(0,"span"),g.xc(1),g.Pb()),2&t){const t=g.ac().value;g.zb(1),g.yc(t)}}function m(t,e){if(1&t){const t=g.Rb();g.Qb(0,"span"),g.Qb(1,"ion-button",27),g.Yb("click",(function(){g.oc(t);const e=g.ac().row;return g.ac(2).openAbstract(e)})),g.Mb(2,"ion-icon",28),g.Pb(),g.Qb(3,"ion-button",27),g.Yb("click",(function(){g.oc(t);const e=g.ac().row;return g.ac(2).navigateToArticle(e.link)})),g.Mb(4,"ion-icon",29),g.Pb(),g.Pb()}}function P(t,e){if(1&t&&(g.vc(0,f,2,1,"span",26),g.vc(1,m,5,0,"span",26)),2&t){const t=g.ac().$implicit;g.gc("ngIf","Actions"!==t.name),g.zb(1),g.gc("ngIf","Actions"===t.name)}}function y(t,e){1&t&&(g.Qb(0,"ngx-datatable-column",24),g.vc(1,P,2,2,"ng-template",25),g.Pb()),2&t&&g.gc("name",e.$implicit.name)("width",200)}const w=[{path:"",component:(()=>{class t{constructor(t,e,i){this.pagePositionService=t,this.articleService=e,this.modalController=i,this.pageAtTop=!0,this.page=new s.a,this.rows=new Array,this.selected=[],this.searchText="",this.columns=[{name:"Title"},{name:"Category"},{name:"Year"},{name:"Actions"}],this.page.limit=5}ngOnInit(){this.innerWidth=window.innerWidth,this.setPage({offset:0})}onResize(t){this.innerWidth=window.innerWidth}onScroll(t){this.pageAtTop=this.pagePositionService.isPageAtTop(t)}setPage(t){this.page.offset=t.offset,this.articleService.getArticleList(this.page).subscribe(t=>{this.page.offset=t.offset,this.page.totalArticles=t.totalArticles,this.page.totalPage=t.totalPage,this.rows=t.articles.map(t=>({_id:t._id,title:t.title,category:t.category,year:t.year,abstract:t.abstract,link:t.link}))})}search(t){this.page.offset=0,"title"===this.page.searchBy?(this.page.title=t.target.value,this.page.category="",this.page.year="",this.page.abstract=""):"category"===this.page.searchBy?(this.page.title="",this.page.category=t.target.value,this.page.year="",this.page.abstract=""):"year"===this.page.searchBy?(this.page.title="",this.page.category="",this.page.year=t.target.value,this.page.abstract=""):"abstract"===this.page.searchBy&&(this.page.title="",this.page.category="",this.page.year="",this.page.abstract=t.target.value),this.articleService.getArticleList(this.page).subscribe(t=>{this.page.offset=t.offset,this.page.totalArticles=t.totalArticles,this.page.totalPage=t.totalPage,this.rows=t.articles.map(t=>({_id:t._id,title:t.title,category:t.category,year:t.year,abstract:t.abstract,link:t.link}))})}onSort(t){this.page.orderBy=t.column.name.toLowerCase(),this.page.isAscending="asc"===t.newValue,this.articleService.getArticleList(this.page).subscribe(t=>{this.page.offset=t.offset,this.page.totalArticles=t.totalArticles,this.page.totalPage=t.totalPage,this.rows=t.articles.map(t=>({_id:t._id,title:t.title,category:t.category,year:t.year,abstract:t.abstract,link:t.link}))})}openAbstract(t){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:l.a,componentProps:{article:t}});return yield e.present()}))}navigateToArticle(t){window.open(t)}}return t.\u0275fac=function(e){return new(e||t)(g.Lb(b.a),g.Lb(p.a),g.Lb(o.P))},t.\u0275cmp=g.Fb({type:t,selectors:[["app-search"]],hostBindings:function(t,e){1&t&&g.Yb("resize",(function(t){return e.onResize(t)}),!1,g.nc)},decls:40,vars:17,consts:[[3,"pageAtTop"],[3,"fullscreen","scrollEvents","ionScroll"],["id","container"],["id","navi"],[1,"circle-1"],["id","infoi"],[1,"ion-no-padding","page-height"],["size","1"],["size","10","size-lg","6"],[1,"home-title"],[1,"home-subtitle"],["size","0","size-md","1"],["size","12","size-md","6"],["showCancelButton","focus","animated","","placeholder","Enter your search",3,"ngModel","keyup.enter","ngModelChange"],["size","12","size-md","4"],["interface","popover",3,"ngModel","ngModelChange"],["value","title"],["value","category"],["value","year"],["value","abstract"],["size","12","size-md","10"],["rowHeight","auto",1,"material",2,"margin-bottom","20vh",3,"rows","columnMode","headerHeight","footerHeight","externalPaging","count","offset","limit","scrollbarH","externalSorting","page","sort"],[3,"name","width",4,"ngFor","ngForOf"],[3,"innerWidth"],[3,"name","width"],["ngx-datatable-cell-template",""],[4,"ngIf"],["shape","round","fill","clear",3,"click"],["name","information-circle","color","tertiary"],["name","link","color","tertiary"]],template:function(t,e){1&t&&(g.Qb(0,"ion-header"),g.Mb(1,"app-header",0),g.Pb(),g.Qb(2,"ion-content",1),g.Yb("ionScroll",(function(t){return e.onScroll(t)})),g.Qb(3,"div",2),g.Qb(4,"div",3),g.Mb(5,"span",4),g.Pb(),g.Qb(6,"div",5),g.Qb(7,"ion-grid",6),g.Qb(8,"ion-row"),g.Mb(9,"ion-col",7),g.Qb(10,"ion-col",8),g.Qb(11,"h1",9),g.xc(12,"Search"),g.Pb(),g.Qb(13,"p",10),g.xc(14,"Let's start searching!"),g.Pb(),g.Pb(),g.Pb(),g.Qb(15,"ion-row"),g.Mb(16,"ion-col",11),g.Qb(17,"ion-col",12),g.Qb(18,"ion-searchbar",13),g.Yb("keyup.enter",(function(t){return e.search(t)}))("ngModelChange",(function(t){return e.searchText=t})),g.Pb(),g.Pb(),g.Qb(19,"ion-col",14),g.Qb(20,"ion-item"),g.Qb(21,"ion-label"),g.xc(22,"Search by"),g.Pb(),g.Qb(23,"ion-select",15),g.Yb("ngModelChange",(function(t){return e.page.searchBy=t})),g.Qb(24,"ion-select-option",16),g.xc(25,"Title"),g.Pb(),g.Qb(26,"ion-select-option",17),g.xc(27,"Category"),g.Pb(),g.Qb(28,"ion-select-option",18),g.xc(29,"Year"),g.Pb(),g.Qb(30,"ion-select-option",19),g.xc(31,"Abstract"),g.Pb(),g.Pb(),g.Pb(),g.Pb(),g.Mb(32,"ion-col",11),g.Pb(),g.Qb(33,"ion-row"),g.Mb(34,"ion-col",11),g.Qb(35,"ion-col",20),g.Qb(36,"ngx-datatable",21),g.Yb("page",(function(t){return e.setPage(t)}))("sort",(function(t){return e.onSort(t)})),g.vc(37,y,2,2,"ngx-datatable-column",22),g.Pb(),g.Pb(),g.Mb(38,"ion-col",11),g.Pb(),g.Pb(),g.Mb(39,"app-footer",23),g.Pb(),g.Pb(),g.Pb()),2&t&&(g.zb(1),g.gc("pageAtTop",e.pageAtTop),g.zb(1),g.gc("fullscreen",!0)("scrollEvents",!0),g.zb(16),g.gc("ngModel",e.searchText),g.zb(5),g.gc("ngModel",e.page.searchBy),g.zb(13),g.gc("rows",e.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("externalPaging",!0)("count",e.page.totalArticles)("offset",e.page.offset)("limit",e.page.limit)("scrollbarH",!0)("externalSorting",!0),g.zb(1),g.gc("ngForOf",e.columns),g.zb(2),g.gc("innerWidth",e.innerWidth))},directives:[o.o,h.a,o.m,o.n,o.z,o.l,o.A,o.T,a.d,a.g,o.r,o.s,o.D,o.S,o.E,d.c,n.j,u.a,d.b,d.a,n.k,o.e,o.p],styles:[".circle-1[_ngcontent-%COMP%]{right:-434px;top:-554px;height:868px;width:868px}.circle-1[_ngcontent-%COMP%], .circle-2[_ngcontent-%COMP%]{position:absolute;background-color:#bbb;border-radius:50%;display:inline-block;background:#6078ea;background:linear-gradient(201deg,#6078ea,#17ead9)}.circle-2[_ngcontent-%COMP%]{left:-200px;top:1200px;height:500px;width:500px}#container[_ngcontent-%COMP%]{position:relative}#infoi[_ngcontent-%COMP%], #navi[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}#infoi[_ngcontent-%COMP%]{z-index:1}.page-height[_ngcontent-%COMP%]{min-height:100vh}.home-title[_ngcontent-%COMP%]{font-size:4rem;white-space:pre-wrap;margin-top:50px}.home-subtitle[_ngcontent-%COMP%]{font-size:1.5rem!important}"]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=g.Jb({type:t}),t.\u0275inj=g.Ib({factory:function(e){return new(e||t)},imports:[[r.i.forChild(w)],r.i]}),t})();var M=i("iWjc");let Q=(()=>{class t{}return t.\u0275mod=g.Jb({type:t}),t.\u0275inj=g.Ib({factory:function(e){return new(e||t)},imports:[[n.c,a.a,o.M,v,d.d,M.a]]}),t})()}}]);