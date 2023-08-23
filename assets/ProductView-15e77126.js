import{av as A,a1 as J,x as Y,ar as Z,a6 as V,a7 as H,c as r,a8 as o,af as q,ac as z,au as Q,at as ee,ae as te,ag as G,ab as p,a9 as ae,H as ne}from"./index-3270b4ee.js";import{c as ie,P as se,_ as re}from"./ProductCard-445f35a9.js";import{V as K}from"./VContainer-a55f873c.js";import{V as S}from"./VRow-914a1202.js";import{V as f}from"./VCol-52f5edf9.js";function oe(B){let{swiper:e,extendParams:D,on:c,emit:l}=B;D({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const d=t=>(Array.isArray(t)?t:[t]).filter(a=>!!a);function y(t){let a;return t&&typeof t=="string"&&e.isElement&&(a=e.el.querySelector(t),a)?a:(t&&(typeof t=="string"&&(a=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&typeof t=="string"&&a.length>1&&e.el.querySelectorAll(t).length===1&&(a=e.el.querySelector(t))),t&&!a?t:a)}function E(t,a){const n=e.params.navigation;t=d(t),t.forEach(s=>{s&&(s.classList[a?"add":"remove"](...n.disabledClass.split(" ")),s.tagName==="BUTTON"&&(s.disabled=a),e.params.watchOverflow&&e.enabled&&s.classList[e.isLocked?"add":"remove"](n.lockClass))})}function _(){const{nextEl:t,prevEl:a}=e.navigation;if(e.params.loop){E(a,!1),E(t,!1);return}E(a,e.isBeginning&&!e.params.rewind),E(t,e.isEnd&&!e.params.rewind)}function T(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),l("navigationPrev"))}function m(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),l("navigationNext"))}function v(){const t=e.params.navigation;if(e.params.navigation=ie(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(t.nextEl||t.prevEl))return;let a=y(t.nextEl),n=y(t.prevEl);Object.assign(e.navigation,{nextEl:a,prevEl:n}),a=d(a),n=d(n);const s=(u,x)=>{u&&u.addEventListener("click",x==="next"?m:T),!e.enabled&&u&&u.classList.add(...t.lockClass.split(" "))};a.forEach(u=>s(u,"next")),n.forEach(u=>s(u,"prev"))}function L(){let{nextEl:t,prevEl:a}=e.navigation;t=d(t),a=d(a);const n=(s,u)=>{s.removeEventListener("click",u==="next"?m:T),s.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach(s=>n(s,"next")),a.forEach(s=>n(s,"prev"))}c("init",()=>{e.params.navigation.enabled===!1?b():(v(),_())}),c("toEdge fromEdge lock unlock",()=>{_()}),c("destroy",()=>{L()}),c("enable disable",()=>{let{nextEl:t,prevEl:a}=e.navigation;t=d(t),a=d(a),[...t,...a].filter(n=>!!n).forEach(n=>n.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass))}),c("click",(t,a)=>{let{nextEl:n,prevEl:s}=e.navigation;n=d(n),s=d(s);const u=a.target;if(e.params.navigation.hideOnClick&&!s.includes(u)&&!n.includes(u)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===u||e.pagination.el.contains(u)))return;let x;n.length?x=n[0].classList.contains(e.params.navigation.hiddenClass):s.length&&(x=s[0].classList.contains(e.params.navigation.hiddenClass)),l(x===!0?"navigationShow":"navigationHide"),[...n,...s].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const C=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),v(),_()},b=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),L()};Object.assign(e.navigation,{enable:C,disable:b,update:_,init:v,destroy:L})}function le(B){let{swiper:e,extendParams:D,on:c,emit:l,params:d}=B;e.autoplay={running:!1,paused:!1,timeLeft:0},D({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let y,E,_=d&&d.autoplay?d.autoplay.delay:3e3,T=d&&d.autoplay?d.autoplay.delay:3e3,m,v=new Date().getTime,L,C,b,t,a,n;function s(i){!e||e.destroyed||!e.wrapperEl||i.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",s),k())}const u=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?L=!0:L&&(T=m,L=!1);const i=e.autoplay.paused?m:v+T-new Date().getTime();e.autoplay.timeLeft=i,l("autoplayTimeLeft",i,i/_),E=requestAnimationFrame(()=>{u()})},x=()=>{let i;return e.virtual&&e.params.virtual.enabled?i=e.slides.filter(g=>g.classList.contains("swiper-slide-active"))[0]:i=e.slides[e.activeIndex],i?parseInt(i.getAttribute("data-swiper-autoplay"),10):void 0},w=i=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(E),u();let h=typeof i>"u"?e.params.autoplay.delay:i;_=e.params.autoplay.delay,T=e.params.autoplay.delay;const g=x();!Number.isNaN(g)&&g>0&&typeof i>"u"&&(h=g,_=g,T=g),m=h;const P=e.params.speed,j=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(P,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,P,!0,!0),l("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(P,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,P,!0,!0),l("autoplay")),e.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{w()})))};return h>0?(clearTimeout(y),y=setTimeout(()=>{j()},h)):requestAnimationFrame(()=>{j()}),h},I=()=>{e.autoplay.running=!0,w(),l("autoplayStart")},N=()=>{e.autoplay.running=!1,clearTimeout(y),cancelAnimationFrame(E),l("autoplayStop")},O=(i,h)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(y),i||(n=!0);const g=()=>{l("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",s):k()};if(e.autoplay.paused=!0,h){a&&(m=e.params.autoplay.delay),a=!1,g();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-v),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),g())},k=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(v=new Date().getTime(),n?(n=!1,w(m)):w(),e.autoplay.paused=!1,l("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const i=A();i.visibilityState==="hidden"&&(n=!0,O(!0)),i.visibilityState==="visible"&&k()},F=i=>{i.pointerType==="mouse"&&(n=!0,O(!0))},R=i=>{i.pointerType==="mouse"&&e.autoplay.paused&&k()},W=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",F),e.el.addEventListener("pointerleave",R))},X=()=>{e.el.removeEventListener("pointerenter",F),e.el.removeEventListener("pointerleave",R)},U=()=>{A().addEventListener("visibilitychange",M)},$=()=>{A().removeEventListener("visibilitychange",M)};c("init",()=>{e.params.autoplay.enabled&&(W(),U(),v=new Date().getTime(),I())}),c("destroy",()=>{X(),$(),e.autoplay.running&&N()}),c("beforeTransitionStart",(i,h,g)=>{e.destroyed||!e.autoplay.running||(g||!e.params.autoplay.disableOnInteraction?O(!0,!0):N())}),c("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){N();return}C=!0,b=!1,n=!1,t=setTimeout(()=>{n=!0,b=!0,O(!0)},200)}}),c("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!C)){if(clearTimeout(t),clearTimeout(y),e.params.autoplay.disableOnInteraction){b=!1,C=!1;return}b&&e.params.cssMode&&k(),b=!1,C=!1}}),c("slideChange",()=>{e.destroyed||!e.autoplay.running||(a=!0)}),Object.assign(e.autoplay,{start:I,stop:N,pause:O,resume:k})}const ue=p("img",{src:"https://i.imgur.com/CzXBowz.png"},null,-1),de=p("img",{src:"https://i.imgur.com/zvlP3xT.png"},null,-1),ce=p("img",{src:"https://i.imgur.com/HEn5VLx.png"},null,-1),pe=p("img",{src:"https://i.imgur.com/WDynz2M.png"},null,-1),me=p("img",{src:"https://i.imgur.com/9hDTRma.png"},null,-1),fe=p("img",{src:"https://i.imgur.com/qvvsGXK.png"},null,-1),ge=p("img",{src:"https://i.imgur.com/5GmQdQ8.png"},null,-1),ye=p("img",{src:"https://i.imgur.com/so4BROK.png"},null,-1),ve=p("img",{src:"https://i.imgur.com/2AfmsOo.png"},null,-1),he=p("a",{href:"https://liff.line.me/1645278921-kWRPP32q/?accountId=906dydrs"},[p("img",{src:"https://i.imgur.com/j5Qldq4.png"})],-1),Ee=p("img",{src:"",alt:""},null,-1),_e=p("div",{id:"designer",class:"text-white"},[p("p",null,"泰山職訓前端網頁專題"),p("p",null,"by Hui-Ru Chen")],-1),Ce={__name:"ProductView",setup(B){const e=[le,se,oe],D=J(),c=Y([]);return(async()=>{try{const{data:l}=await Z.get("/products");c.value.push(...l.result)}catch(l){D({text:l.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(l,d)=>(V(),H(z,null,[r(q(ee),{id:"productsSwiper",spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!1,modules:e,class:"mySwiper"},{default:o(()=>[r(q(Q),null,{default:o(()=>[ue]),_:1}),r(q(Q),null,{default:o(()=>[de]),_:1})]),_:1}),r(K,null,{default:o(()=>[r(S,null,{default:o(()=>[(V(!0),H(z,null,te(c.value,y=>(V(),ae(f,{cols:"6",md:"4",lg:"3",key:y._id},{default:o(()=>[r(re,ne({class:"productsTableCard"},y),null,16)]),_:2},1024))),128))]),_:1})]),_:1}),r(K,{fluid:"",id:"footer2"},{default:o(()=>[r(S,{id:"footerbottom"},{default:o(()=>[r(f)]),_:1}),r(S,{id:"footerlogo"},{default:o(()=>[r(f,null,{default:o(()=>[ce]),_:1})]),_:1}),r(S,{id:"footerinfo",class:"justify-center"},{default:o(()=>[r(f,{class:"footerimg",cols:"6",md:"4",lg:"1"},{default:o(()=>[pe]),_:1}),r(f,{class:"footerimg",cols:"6",md:"4",lg:"1"},{default:o(()=>[me]),_:1}),r(f,{class:"footerimg",cols:"6",md:"4",lg:"1"},{default:o(()=>[fe]),_:1}),r(f,{class:"footerimg",cols:"6",md:"4",lg:"1"},{default:o(()=>[ge]),_:1}),r(f,{class:"footerimg",cols:"6",md:"4",lg:"1"},{default:o(()=>[ye]),_:1}),r(f,{class:"footerimg",cols:"6",md:"4",lg:"1"},{default:o(()=>[ve]),_:1})]),_:1}),r(S,{id:"footercontact"},{default:o(()=>[r(f,{class:"contactweek",cols:"12"},{default:o(()=>[G("聯絡我們")]),_:1}),r(f,{class:"contactweek",cols:"12"},{default:o(()=>[G("週一到週五： 10:00–12:30、13:30–17:00")]),_:1}),r(f,{class:"contactsns",cols:"12"},{default:o(()=>[he,Ee]),_:1})]),_:1}),r(S,{id:"footerbottom"},{default:o(()=>[r(f)]),_:1}),_e]),_:1})],64))}};export{Ce as default};