import{$ as c,F as p,P as n,X as i,Z as m,_ as a,aa as s,ba as f,ca as l,da as d,fa as u,l as r}from"./chunk-YOSFPN57.js";var h=[{path:"boxes",loadChildren:()=>import("./chunk-EZKANXLW.js").then(t=>t.BOXES_ROUTES)},{path:"",pathMatch:"full",redirectTo:"boxes"},{path:"**",pathMatch:"full",redirectTo:"boxes"}];var C=(t,A)=>{let e="Basic "+btoa("max@tecnom.com.ar:b0x3sApp"),o=t.clone({setHeaders:{Authorization:e,"Content-Type":"application/json"}});return A(o)};var x={providers:[u(h),l(),m(c(),a([C]))]};var v=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=r({type:t,selectors:[["app-root"]],standalone:!0,features:[n],decls:1,vars:0,template:function(o,b){o&1&&p(0,"router-outlet")},dependencies:[d,i,s]})}}return t})();f(v,x).catch(t=>console.error(t));