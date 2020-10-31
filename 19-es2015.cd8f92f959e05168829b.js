(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6H4R":function(o,e,t){"use strict";t.r(e),t.d(e,"LoginPageModule",(function(){return m}));var n=t("ofXK"),i=t("3Pt+"),s=t("TEn/"),r=t("tyNb"),a=t("mrSG"),l=t("fXoL"),c=t("lGQG");let b=(()=>{class o{constructor(o,e,t){this.modalController=o,this.toastController=e,this.authService=t}ngOnInit(){}dismissModal(){this.modalController.dismiss()}resetPassword(){this.authService.forgotPassword(this.email).subscribe(()=>Object(a.a)(this,void 0,void 0,(function*(){this.dismissModal(),(yield this.toastController.create({header:"Reset password successfully",message:"New temporary password has been sent to your email. Please change the password immediately.",color:"success",duration:2e3})).present()})),()=>Object(a.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:"Fail to reset password.",message:"Please try again.",color:"danger",duration:2e3})).present()})))}}return o.\u0275fac=function(e){return new(e||o)(l.Lb(s.P),l.Lb(s.U),l.Lb(c.a))},o.\u0275cmp=l.Fb({type:o,selectors:[["app-forgot-password"]],decls:31,vars:1,consts:[["color","tertiary"],["slot","end"],["shape","round","fill","clear",3,"click"],["name","close"],[1,"ion-text-center","ion-margin"],["size","12"],["name","mail","slot","start"],["position","floating"],[3,"ngModel","ngModelChange"],["expand","block",3,"click"]],template:function(o,e){1&o&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar",0),l.Qb(2,"ion-title"),l.xc(3,"Forgot Password"),l.Pb(),l.Qb(4,"ion-buttons",1),l.Qb(5,"ion-button",2),l.Yb("click",(function(){return e.dismissModal()})),l.Mb(6,"ion-icon",3),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(7,"ion-content"),l.Qb(8,"ion-grid"),l.Qb(9,"ion-row"),l.Qb(10,"ion-col"),l.Qb(11,"p",4),l.xc(12," Enter your "),l.Qb(13,"strong"),l.xc(14,"email"),l.Pb(),l.xc(15," and we will send a "),l.Qb(16,"strong"),l.xc(17,"temporary password"),l.Pb(),l.xc(18," to the email address we have for your account. Please "),l.Qb(19,"strong"),l.xc(20,"change your password"),l.Pb(),l.xc(21," after you login. "),l.Pb(),l.Pb(),l.Qb(22,"ion-col",5),l.Qb(23,"ion-item"),l.Mb(24,"ion-icon",6),l.Qb(25,"ion-label",7),l.xc(26,"Email"),l.Pb(),l.Qb(27,"ion-input",8),l.Yb("ngModelChange",(function(o){return e.email=o})),l.Pb(),l.Pb(),l.Pb(),l.Qb(28,"ion-col",5),l.Qb(29,"ion-button",9),l.Yb("click",(function(){return e.resetPassword()})),l.xc(30,"Reset Password"),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&o&&(l.zb(27),l.gc("ngModel",e.email))},directives:[s.o,s.L,s.K,s.f,s.e,s.p,s.m,s.n,s.z,s.l,s.r,s.s,s.q,s.T,i.d,i.g],styles:[""]}),o})();var d=t("Yhfc");const g=[{path:"",component:(()=>{class o{constructor(o,e,t,n,i,s,r,a){this.router=o,this.activatedRoute=e,this.location=t,this.authService=n,this.tokenHelper=i,this.loadingController=s,this.toastController=r,this.modalController=a,this.loginForm={email:"",password:""}}ngOnInit(){}prevPage(){this.location.back()}login(){return Object(a.a)(this,void 0,void 0,(function*(){const o=yield this.loadingController.create({cssClass:"my-custom-class",message:"Please wait..."});yield o.present(),this.authService.login(this.loginForm).subscribe(()=>Object(a.a)(this,void 0,void 0,(function*(){this.router.navigate(["/home"]),(yield this.toastController.create({header:"Login Success!",message:"You have successfully logged in.",color:"success",duration:2e3})).present(),o.dismiss()})),()=>Object(a.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({header:"Login Failed!",message:"Please make sure your username and password are correct.",color:"danger",duration:2e3})).present(),o.dismiss()})))}))}forgotPassword(){return Object(a.a)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:b});return yield o.present()}))}}return o.\u0275fac=function(e){return new(e||o)(l.Lb(r.g),l.Lb(r.a),l.Lb(n.g),l.Lb(c.a),l.Lb(d.a),l.Lb(s.O),l.Lb(s.U),l.Lb(s.P))},o.\u0275cmp=l.Fb({type:o,selectors:[["app-login"]],decls:40,vars:2,consts:[["color","light"],["slot","start"],[3,"click"],["name","chevron-back"],[1,"row-1"],["size","1","size-sm","1.5","size-xl","2"],["size","10","size-sm","9","size-xl","8"],[1,"card-row-1"],["size","12","size-lg","6",1,"vertically-aligned-img"],["src","assets/img/USM_logo.png","height","40%","width","40%"],["size","12","size-lg","6"],[1,"row-1-title"],["color","dark"],[1,"row-1-subtitle"],[3,"ngSubmit"],["name","mail","slot","start"],["position","floating"],["type","email","name","email","required","",3,"ngModel","ngModelChange"],["name","lock-closed","slot","start"],["type","password","name","password","required","",3,"ngModel","ngModelChange"],["size","default","type","submit","slot","end","expand","block",1,"send-btn"],["size","12"],["lines","none"],["fill","clear","slot","end",3,"click"]],template:function(o,e){1&o&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar",0),l.Qb(2,"ion-buttons",1),l.Qb(3,"ion-button",2),l.Yb("click",(function(){return e.prevPage()})),l.Mb(4,"ion-icon",3),l.xc(5," Back"),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(6,"ion-content"),l.Qb(7,"ion-row",4),l.Mb(8,"ion-col",5),l.Qb(9,"ion-col",6),l.Qb(10,"ion-card",7),l.Qb(11,"ion-card-content"),l.Qb(12,"ion-grid"),l.Qb(13,"ion-row"),l.Qb(14,"ion-col",8),l.Mb(15,"img",9),l.Pb(),l.Qb(16,"ion-col",10),l.Qb(17,"p",11),l.Qb(18,"ion-text",12),l.xc(19,"Log In"),l.Pb(),l.Pb(),l.Qb(20,"p",13),l.Qb(21,"ion-text"),l.xc(22,"Welcome back :)"),l.Pb(),l.Pb(),l.Qb(23,"form",14),l.Yb("ngSubmit",(function(){return e.login()})),l.Qb(24,"ion-item"),l.Mb(25,"ion-icon",15),l.Qb(26,"ion-label",16),l.xc(27,"Email"),l.Pb(),l.Qb(28,"ion-input",17),l.Yb("ngModelChange",(function(o){return e.loginForm.email=o})),l.Pb(),l.Pb(),l.Qb(29,"ion-item"),l.Mb(30,"ion-icon",18),l.Qb(31,"ion-label",16),l.xc(32,"Password"),l.Pb(),l.Qb(33,"ion-input",19),l.Yb("ngModelChange",(function(o){return e.loginForm.password=o})),l.Pb(),l.Pb(),l.Qb(34,"ion-button",20),l.xc(35,"Log In"),l.Pb(),l.Pb(),l.Pb(),l.Qb(36,"ion-col",21),l.Qb(37,"ion-item",22),l.Qb(38,"ion-button",23),l.Yb("click",(function(){return e.forgotPassword()})),l.xc(39,"Forgot password"),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&o&&(l.zb(28),l.gc("ngModel",e.loginForm.email),l.zb(5),l.gc("ngModel",e.loginForm.password))},directives:[s.o,s.L,s.f,s.e,s.p,s.m,s.z,s.l,s.g,s.h,s.n,s.I,i.i,i.e,i.f,s.r,s.s,s.q,s.T,i.h,i.d,i.g],styles:[".row-1[_ngcontent-%COMP%]{margin:40px 0;min-height:80vh}.card-row-1[_ngcontent-%COMP%]{margin-top:13vh}.vertically-aligned-img[_ngcontent-%COMP%]{text-align:center;margin:auto}.row-1-title[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.row-1-subtitle[_ngcontent-%COMP%]{font-size:16px}.send-btn[_ngcontent-%COMP%]{margin-top:30px}"]}),o})()}];let u=(()=>{class o{}return o.\u0275mod=l.Jb({type:o}),o.\u0275inj=l.Ib({factory:function(e){return new(e||o)},imports:[[r.i.forChild(g)],r.i]}),o})(),m=(()=>{class o{}return o.\u0275mod=l.Jb({type:o}),o.\u0275inj=l.Ib({factory:function(e){return new(e||o)},imports:[[n.c,i.a,s.M,u]]}),o})()}}]);