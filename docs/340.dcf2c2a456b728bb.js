"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[340],{8340:(v,c,i)=>{i.r(c),i.d(c,{YoutubeViewModule:()=>y});var r=i(6814),g=i(5290),t=i(4769),p=i(2689),a=i(6472),m=i(2024);function l(e,u){if(1&e&&(t.TgZ(0,"div",5)(1,"div",6),t._UZ(2,"iframe",7),t.ALo(3,"youtubeSafeurl"),t.TgZ(4,"p",8),t._uU(5),t.qZA()()()),2&e){const n=u.$implicit;t.xp6(2),t.Q6J("src",t.lcZ(3,2,n.url),t.uOi),t.xp6(3),t.Oqu(n.title)}}const d=function(e,u){return{itemsPerPage:e,currentPage:u}},f=[{path:"",component:(()=>{class e{constructor(n){this.dataServ=n,this.paginationSize=25,this.paginationCurrentPage=1,this.youtubes=[],this.Subscriptions=[]}ngOnInit(){this.getData()}getData(){this.youtubes=[],this.Subscriptions.push(this.dataServ.getyoutubes().subscribe({next:n=>{for(const o in n)this.youtubes.push(n[o])},complete:()=>this.youtubes.reverse()}))}ngOnDestroy(){for(const n of this.Subscriptions)n.unsubscribe()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p.A))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-youtube-view"]],decls:6,vars:7,consts:[[1,"col-12"],[1,"container","front-page","bottom-page","d-flex","justify-content-center","flex-wrap"],["class","col-lg-4 col-md-4 col-sm-6",4,"ngFor","ngForOf"],[1,"col-12","pagination-class","d-flex","justify-content-center","mt-5"],[3,"pageChange"],[1,"col-lg-4","col-md-4","col-sm-6"],[1,"card","m-1","p-1"],["frameborder","0",3,"src"],[1,"text-center","text-capitalize","title"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,l,6,4,"div",2),t.ALo(3,"paginate"),t.TgZ(4,"div",3)(5,"pagination-controls",4),t.NdJ("pageChange",function(C){return s.paginationCurrentPage=C}),t.qZA()()()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",t.xi3(3,1,s.youtubes,t.WLB(4,d,s.paginationSize,s.paginationCurrentPage))))},dependencies:[r.sg,a.LS,m.J,a._s],styles:["iframe[_ngcontent-%COMP%]{height:280px}",".title[_ngcontent-%COMP%]{font-size:18px;color:#008a8a;font-weight:700;padding:8px;font-family:system-ui;margin-bottom:0}.details[_ngcontent-%COMP%]{font-size:14px;padding:8px;font-weight:700;font-family:system-ui;margin-bottom:0}.front-page[_ngcontent-%COMP%]{margin-top:170px}.bottom-page[_ngcontent-%COMP%]{margin-bottom:200px}.product-image[_ngcontent-%COMP%]{height:220px}@media screen and (max-width:700px){.product-image[_ngcontent-%COMP%]{height:auto}}"]})}return e})()}];let h=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(f),g.Bz]})}return e})();var b=i(5444);let y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[r.ez,h,b.YoutubeModule,a.JX]})}return e})()}}]);