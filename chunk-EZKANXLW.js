import{A as m,B as ue,C as _,D as s,E as o,F as E,G,H as h,I as c,J as l,K as f,L as ce,M as de,N as he,O as B,P as fe,Q as pe,R as V,S as ge,T as me,U as _e,V as X,W as ve,X as ye,Y as Ce,a as v,aa as Ve,b,c as oe,d as O,e as se,ea as be,f as k,g as W,ga as De,h as $,i as D,j as M,k as P,l as ae,m as q,n as y,o as z,p,q as g,r as Z,s as Y,t as T,u as a,v as d,w as K,x as A,y as C,z as le}from"./chunk-YOSFPN57.js";var Oe=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||n)(d(K),d(Y))}}static{this.\u0275dir=y({type:n})}}return n})(),Ke=(()=>{class n extends Oe{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Z(n)))(r||n)}})()}static{this.\u0275dir=y({type:n,features:[A]})}}return n})(),ke=new D("");var Xe={provide:ke,useExisting:k(()=>H),multi:!0};function Je(){let n=X()?X().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Qe=new D(""),H=(()=>{class n extends Oe{constructor(t,i,r){super(t,i),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Je())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||n)(d(K),d(Y),d(Qe,8))}}static{this.\u0275dir=y({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&h("input",function(w){return r._handleInput(w.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(w){return r._compositionEnd(w.target.value)})},features:[B([Xe]),A]})}}return n})();function et(n){return n!=null&&typeof n.length=="number"}var Pe=new D(""),tt=new D("");function nt(n){return e=>et(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function Me(n){return null}function Te(n){return n!=null}function Ge(n){return ge(n)?oe(n):n}function Be(n){let e={};return n.forEach(t=>{e=t!=null?v(v({},e),t):e}),Object.keys(e).length===0?null:e}function je(n,e){return e.map(t=>t(n))}function it(n){return!n.validate}function Re(n){return n.map(e=>it(e)?e:t=>e.validate(t))}function rt(n){if(!n)return null;let e=n.filter(Te);return e.length==0?null:function(t){return Be(je(t,e))}}function Ue(n){return n!=null?rt(Re(n)):null}function ot(n){if(!n)return null;let e=n.filter(Te);return e.length==0?null:function(t){let i=je(t,e).map(Ge);return se(i).pipe(O(Be))}}function He(n){return n!=null?ot(Re(n)):null}function Ae(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function st(n){return n._rawValidators}function at(n){return n._rawAsyncValidators}function J(n){return n?Array.isArray(n)?n:[n]:[]}function R(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ee(n,e){let t=J(e);return J(n).forEach(r=>{R(t,r)||t.push(r)}),t}function xe(n,e){return J(e).filter(t=>!R(n,t))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ue(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Q=class extends U{get formDirective(){return null}get path(){return null}},S=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ee=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},lt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},sn=b(v({},lt),{"[class.ng-submitted]":"isSubmitted"}),Le=(()=>{class n extends ee{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(d(S,2))}}static{this.\u0275dir=y({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ue("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[A]})}}return n})();var F="VALID",j="INVALID",x="PENDING",I="DISABLED";function ut(n){return(L(n)?n.validators:n)||null}function ct(n){return Array.isArray(n)?Ue(n):n||null}function dt(n,e){return(L(e)?e.asyncValidators:n)||null}function ht(n){return Array.isArray(n)?He(n):n||null}function L(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var te=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===j}get pending(){return this.status==x}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=x,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(i=>{i.disable(b(v({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(b(v({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable(b(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(b(v({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===x)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator=!0;let t=Ge(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new T,this.statusChanges=new T}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(j)?j:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}};var We=new D("CallSetDisabledState",{providedIn:"root",factory:()=>ne}),ne="always";function ft(n,e){return[...e.path,n]}function pt(n,e,t=ne){mt(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),_t(n,e),yt(n,e),vt(n,e),gt(n,e)}function we(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function gt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function mt(n,e){let t=st(n);e.validator!==null?n.setValidators(Ae(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=at(n);e.asyncValidator!==null?n.setAsyncValidators(Ae(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();we(e._rawValidators,r),we(e._rawAsyncValidators,r)}function _t(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&$e(n,e)})}function vt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&$e(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function $e(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function yt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Ct(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Vt(n){return Object.getPrototypeOf(n.constructor)===Ke}function bt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(u=>{u.constructor===H?t=u:Vt(u)?i=u:r=u}),r||i||t||null}function Fe(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ie(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Dt=class extends te{constructor(e=null,t,i){super(ut(t),dt(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Mt={provide:S,useExisting:k(()=>ie)},Se=Promise.resolve(),ie=(()=>{class n extends S{constructor(t,i,r,u,w,Ye){super(),this._changeDetectorRef=w,this.callSetDisabledState=Ye,this.control=new Dt,this._registered=!1,this.name="",this.update=new T,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=bt(this,u)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ct(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){pt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Se.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&_e(i);Se.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ft(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||n)(d(Q,9),d(Pe,10),d(tt,10),d(ke,10),d(me,8),d(We,8))}}static{this.\u0275dir=y({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[P.None,"disabled","isDisabled"],model:[P.None,"ngModel","model"],options:[P.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[B([Mt]),A,z]})}}return n})();function At(n){return typeof n=="number"?n:parseInt(n,10)}var Et=(()=>{class n{constructor(){this._validator=Me}ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Me,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=y({type:n,features:[z]})}}return n})();var xt={provide:Pe,useExisting:k(()=>re),multi:!0},re=(()=>{class n extends Et{constructor(){super(...arguments),this.inputName="maxlength",this.normalizeInput=t=>At(t),this.createValidator=t=>nt(t)}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Z(n)))(r||n)}})()}static{this.\u0275dir=y({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&le("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},features:[B([xt]),A]})}}return n})();var wt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=$({})}}return n})();var qe=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:We,useValue:t.callSetDisabledState??ne}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=$({imports:[wt]})}}return n})();var ze=(()=>{class n{constructor(){this.API_URL_WORKSHOP="https://dev.tecnomcrm.com/api/v1/places/workshops",this.API_URL_SURVEY="https://dev.tecnomcrm.com/api/v1/boxes/config/encuestas",this.http=M(Ce)}getFirstWorkshop(){return this.http.get(this.API_URL_WORKSHOP).pipe(O(t=>t[0]))}getSurveyConfig(){return this.http.get(this.API_URL_SURVEY)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=W({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var N=(n,e)=>({"rate-selected":n,"btn-outline-secondary":e}),It=(n,e)=>({"mb-4":n,"no-text-spacing":e}),St=(n,e)=>({"btn-pink":n,"btn-disabled":e}),Nt=n=>({"btn-disabled-text":n});function Ot(n,e){if(n&1){let t=G();s(0,"div",4)(1,"h4",15),l(2," \xA1Gracias por compartir sus comentarios con nosotros! "),o(),s(3,"a",16),h("click",function(){p(t);let r=c();return g(r.resetParams())}),l(4,"Volver a calificarnos"),o()()}}function kt(n,e){if(n&1&&(s(0,"div",20),l(1),o()),n&2){let t=c(2);a(),f(t.texts[0])}}function Pt(n,e){if(n&1&&(s(0,"div",20),l(1),o()),n&2){let t=c(2);a(),f(t.texts[1])}}function Tt(n,e){if(n&1&&(s(0,"div",20),l(1),o()),n&2){let t=c(2);a(),f(t.texts[2])}}function Gt(n,e){if(n&1&&(s(0,"div",20),l(1),o()),n&2){let t=c(2);a(),f(t.texts[3])}}function Bt(n,e){if(n&1&&(s(0,"div",20),l(1),o()),n&2){let t=c(2);a(),f(t.texts[4])}}function jt(n,e){if(n&1){let t=G();s(0,"textarea",25),he("ngModelChange",function(r){p(t);let u=c(2);return de(u.feedback,r)||(u.feedback=r),g(r)}),o()}if(n&2){let t=c(2);ce("ngModel",t.feedback)}}function Rt(n,e){if(n&1){let t=G();s(0,"div",1)(1,"p"),l(2,"Hola Nicol\xE1s, gracias por confiar en nosotros."),o()(),s(3,"div",1)(4,"h5"),l(5),o()(),s(6,"div",17)(7,"div",18)(8,"button",19),h("click",function(){p(t);let r=c();return g(r.setRating(1))}),l(9," 1 "),o(),C(10,kt,2,1,"div",20),o(),s(11,"div",18)(12,"button",19),h("click",function(){p(t);let r=c();return g(r.setRating(2))}),l(13," 2 "),o(),C(14,Pt,2,1,"div",20),o(),s(15,"div",18)(16,"button",19),h("click",function(){p(t);let r=c();return g(r.setRating(3))}),l(17," 3 "),o(),C(18,Tt,2,1,"div",20),o(),s(19,"div",18)(20,"button",19),h("click",function(){p(t);let r=c();return g(r.setRating(4))}),l(21," 4 "),o(),C(22,Gt,2,1,"div",20),o(),s(23,"div",18)(24,"button",19),h("click",function(){p(t);let r=c();return g(r.setRating(5))}),l(25," 5 "),o(),C(26,Bt,2,1,"div",20),o()(),s(27,"div",21),C(28,jt,1,1,"textarea",22),o(),s(29,"div",23)(30,"button",24),h("click",function(){p(t);let r=c();return g(r.submitFeedback())}),s(31,"span",21),l(32,"ENVIAR"),o()()()}if(n&2){let t=c();a(5),f(t.surveyConfig.pregunta),a(3),m("ngClass",V(16,N,t.rating===1,t.rating!==1)),a(2),_(10,t.rating===1||t.showInitialTexts?10:-1),a(2),m("ngClass",V(19,N,t.rating===2,t.rating!==2)),a(2),_(14,t.rating===2?14:-1),a(2),m("ngClass",V(22,N,t.rating===3,t.rating!==3)),a(2),_(18,t.rating===3?18:-1),a(2),m("ngClass",V(25,N,t.rating===4,t.rating!==4)),a(2),_(22,t.rating===4?22:-1),a(2),m("ngClass",V(28,N,t.rating===5,t.rating!==5)),a(2),_(26,t.rating===5||t.showInitialTexts?26:-1),a(),m("ngClass",V(31,It,t.rating!==0,t.rating==0)),a(),_(28,t.rating!==0?28:-1),a(2),m("ngClass",V(34,St,t.rating!==0,t.rating==0))("disabled",t.rating==0),a(),m("ngClass",pe(37,Nt,t.rating==0))}}var Ze=(()=>{class n{constructor(){this.boxesService=M(ze),this.router=M(be),this.rating=0,this.feedback="",this.workshop={},this.surveyConfig={},this.texts=[],this.locationData="",this.phoneNumber="541134675692",this.showThanksMessage=!1,this.showInitialTexts=!0,this.loadWorkshopData(),this.loadSurveyConfig()}loadWorkshopData(){this.boxesService.getFirstWorkshop().subscribe(t=>{this.workshop=t,this.locationData=t.address},t=>{console.error("Error al cargar el taller:",t)})}loadSurveyConfig(){this.boxesService.getSurveyConfig().subscribe(t=>{this.surveyConfig=t,this.ratingText(t.mapping)},t=>{console.error("Error al cargar la configuraci\xF3n de la encuesta:",t)})}ratingText(t){t&&typeof t=="object"?this.texts=Object.values(t):console.error("El objeto de puntajes no es v\xE1lido:",t)}setRating(t){this.rating=t,this.showInitialTexts=!1}openGoogleMaps(){let t=JSON.parse(this.locationData),{lat:i,lng:r}=t.geometry.location,u=`https://www.google.com/maps?q=${i},${r}`;window.open(u,"_blank")}openWhatsApp(){let t=`https://wa.me/${this.phoneNumber}`;window.open(t,"_blank")}resetParams(){window.location.reload()}submitFeedback(){let t={calificacion:this.texts[this.rating],comentarios:this.feedback};localStorage.setItem("feedback",JSON.stringify(t)),this.showThanksMessage=!0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=ae({type:n,selectors:[["app-boxes"]],standalone:!0,features:[fe],decls:28,vars:6,consts:[[1,"container","py-5"],[1,"text-center","mb-4"],[1,"text-muted"],[1,"header-line","mx-auto"],[1,"thanks-text-container"],[1,"text-center"],[1,"mb-1"],[1,"d-flex","justify-content-center","gap-3","mb-3"],["type","button",1,"btn","btn-link-info","btn-whatsapp",3,"click"],[1,"bi","bi-whatsapp","whatsapp-icon"],["type","button",1,"btn","btn-map","btn-link-info",3,"click"],["src","assets/icon/maps.png","alt","",1,"map-icon"],["src","assets/icon/phone.png","alt","",1,"map-icon"],[1,"contact-text"],[1,"bi","bi-envelope","secondary-contacts"],[1,"thanks-text"],[1,"mt-5",3,"click"],[1,"d-flex","justify-content-center","mb-3","gap-4"],[1,"text-center","rate-container"],["type","button",1,"btn","border-rate-selected",3,"click","ngClass"],[1,"text-muted","text-font","mt-2"],[3,"ngClass"],["maxlength","500","rows","4","placeholder","Contanos tu experiencia",1,"form-control","no-resize",3,"ngModel"],[1,"d-grid","mb-4"],["type","button",1,"btn","text-white","fw-bold",3,"click","ngClass","disabled"],["maxlength","500","rows","4","placeholder","Contanos tu experiencia",1,"form-control","no-resize",3,"ngModelChange","ngModel"]],template:function(i,r){i&1&&(s(0,"div",0)(1,"div",1)(2,"h6",2),l(3),o(),E(4,"div",3),o(),C(5,Ot,5,0,"div",4)(6,Rt,33,39),s(7,"div",5)(8,"h6",6),l(9),o(),s(10,"p",2),l(11),o()(),s(12,"div",7)(13,"button",8),h("click",function(){return r.openWhatsApp()}),E(14,"i",9),l(15," Whatsapp "),o(),s(16,"button",10),h("click",function(){return r.openGoogleMaps()}),E(17,"img",11),l(18,"Ver en mapa "),o()(),s(19,"div",5)(20,"p",6),E(21,"img",12),s(22,"span",13),l(23,"(+54) 123 4567500"),o()(),s(24,"p"),E(25,"i",14),s(26,"span",13),l(27),o()()()()),i&2&&(a(3),f(r.workshop.name||"DEV TALLER"),a(2),_(5,r.showThanksMessage?5:-1),a(),_(6,r.showThanksMessage?-1:6),a(3),f(r.workshop.name),a(2),f(r.workshop.formatted_address),a(16),f(r.workshop.email))},dependencies:[ye,ve,qe,H,Le,re,ie,Ve,De],styles:[".header-line[_ngcontent-%COMP%]{width:95%;height:2px;background-color:#adb5bd;margin-top:4px;margin-bottom:8px;border-radius:1px}.btn-pink[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c70615 70%,#f39 80%);border-radius:20px;border:none}.btn-disabled[_ngcontent-%COMP%]{background:linear-gradient(90deg,#cfcfcf 47%,#d5dadb 70%);border-radius:20px;border:none}.btn-disabled-text[_ngcontent-%COMP%]{color:gray}.btn-pink[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#e6006b,#e62e8a)}.btn-link-info[_ngcontent-%COMP%]{display:flex;border-radius:20px}.btn-whatsapp[_ngcontent-%COMP%]{border-color:#25d366}.btn-map[_ngcontent-%COMP%]{border-color:#cbc9c9}.whatsapp-icon[_ngcontent-%COMP%]{color:#25d366;padding-right:5px}.map-icon[_ngcontent-%COMP%]{height:23px;width:23px}.text-font[_ngcontent-%COMP%]{font-family:cursive}@media (max-width: 768px){.text-font[_ngcontent-%COMP%]{font-size:smaller}}textarea[_ngcontent-%COMP%]::placeholder{color:#adb5bd}.border-rate-selected[_ngcontent-%COMP%]{border-radius:4px}.rate-selected[_ngcontent-%COMP%]{background-color:#14acf3;color:#fff}.rate-container[_ngcontent-%COMP%]{width:90px}.secondary-contacts[_ngcontent-%COMP%]{color:#1080b5}.contact-text[_ngcontent-%COMP%]{padding-left:20px}.no-resize[_ngcontent-%COMP%]{resize:none}.no-text-spacing[_ngcontent-%COMP%]{margin-top:12rem}.thanks-text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:center;justify-content:center;align-items:center;margin-bottom:5rem;margin-top:8rem}.thanks-text[_ngcontent-%COMP%]{color:#14acf3}"]})}}return n})();var Mn=[{path:"",component:Ze}];export{Mn as BOXES_ROUTES};
