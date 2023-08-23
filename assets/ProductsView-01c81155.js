import{p as re,b3 as ue,b4 as xe,b5 as ye,g as ie,D as ce,b6 as de,b7 as he,o as G,u as me,b8 as ve,b9 as L,ba as ee,c as t,H as j,bb as we,bc as ke,x as i,s as Ce,I as Pe,A as Fe,z as $,B as Se,bd as Be,be as Ie,ac as O,U as ae,aH as Ue,bf as Ae,bg as Re,bh as Me,aZ as X,bi as _e,v as De,y as Te,a1 as Ne,ah as Z,a5 as te,a6 as le,a7 as He,a8 as s,bj as ze,b1 as $e,K as q,ag as K,aC as oe,bk as ne,aQ as J,bl as Ee,V as Ge,a9 as je,aa as qe,af as r,aN as Ke,aA as Oe,ai as Le,aR as Qe,bm as Xe,ad as Ze,ab as Je,X as We}from"./index-85984785.js";import{c as Ye,d as W,a as ea,e as aa,u as ta,b as E,V as la}from"./vee-validate.esm-64e7703f.js";import{V as oa}from"./VContainer-b666e59f.js";import{V as na}from"./VRow-4a509c3b.js";import{V as se}from"./VCol-6f9d2bde.js";import"./_commonjsHelpers-725317a4.js";const sa=re({...ue(),...xe(ye(),["inline"])},"VCheckbox"),ra=ie()({name:"VCheckbox",inheritAttrs:!1,props:sa(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,U){let{attrs:k,slots:y}=U;const u=ce(e,"modelValue"),{isFocused:c,focus:C,blur:A}=de(e),_=he(),F=G(()=>e.id||`checkbox-${_}`);return me(()=>{const[D,h]=ve(k),[T,f]=L.filterProps(e),[g,R]=ee.filterProps(e);return t(L,j({class:["v-checkbox",e.class]},D,T,{modelValue:u.value,"onUpdate:modelValue":S=>u.value=S,id:F.value,focused:c.value,style:e.style}),{...y,default:S=>{let{id:B,messagesId:N,isDisabled:H,isReadonly:M}=S;return t(ee,j(g,{id:B.value,"aria-describedby":N.value,disabled:H.value,readonly:M.value},h,{modelValue:u.value,"onUpdate:modelValue":z=>u.value=z,onFocus:C,onBlur:A}),y)}})}),{}}});const ua=re({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ue(),...we()},"VTextarea"),ia=ie()({name:"VTextarea",directives:{Intersect:ke},inheritAttrs:!1,props:ua(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,U){let{attrs:k,emit:y,slots:u}=U;const c=ce(e,"modelValue"),{isFocused:C,focus:A,blur:_}=de(e),F=G(()=>typeof e.counterValue=="function"?e.counterValue(c.value):(c.value||"").toString().length),D=G(()=>{if(k.maxlength)return k.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function h(o,m){var d,V;!e.autofocus||!o||(V=(d=m[0].target)==null?void 0:d.focus)==null||V.call(d)}const T=i(),f=i(),g=Ce(""),R=i(),S=G(()=>e.persistentPlaceholder||C.value||e.active);function B(){var o;R.value!==document.activeElement&&((o=R.value)==null||o.focus()),C.value||A()}function N(o){B(),y("click:control",o)}function H(o){y("mousedown:control",o)}function M(o){o.stopPropagation(),B(),X(()=>{c.value="",_e(e["onClick:clear"],o)})}function z(o){var d;const m=o.target;if(c.value=m.value,(d=e.modelModifiers)!=null&&d.trim){const V=[m.selectionStart,m.selectionEnd];X(()=>{m.selectionStart=V[0],m.selectionEnd=V[1]})}}const p=i(),P=i(+e.rows),I=G(()=>["plain","underlined"].includes(e.variant));Pe(()=>{e.autoGrow||(P.value=+e.rows)});function b(){e.autoGrow&&X(()=>{if(!p.value||!f.value)return;const o=getComputedStyle(p.value),m=getComputedStyle(f.value.$el),d=parseFloat(o.getPropertyValue("--v-field-padding-top"))+parseFloat(o.getPropertyValue("--v-input-padding-top"))+parseFloat(o.getPropertyValue("--v-field-padding-bottom")),V=p.value.scrollHeight,n=parseFloat(o.lineHeight),a=Math.max(parseFloat(e.rows)*n+d,parseFloat(m.getPropertyValue("--v-input-control-height"))),x=parseFloat(e.maxRows)*n+d||1/0,w=Te(V??0,a,x);P.value=Math.floor((w-d)/n),g.value=De(w)})}Fe(b),$(c,b),$(()=>e.rows,b),$(()=>e.maxRows,b),$(()=>e.density,b);let v;return $(p,o=>{o?(v=new ResizeObserver(b),v.observe(p.value)):v==null||v.disconnect()}),Se(()=>{v==null||v.disconnect()}),me(()=>{const o=!!(u.counter||e.counter||e.counterValue),m=!!(o||u.details),[d,V]=ve(k),[{modelValue:n,...a}]=L.filterProps(e),[x]=Be(e);return t(L,j({ref:T,modelValue:c.value,"onUpdate:modelValue":w=>c.value=w,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":I.value},e.class],style:e.style},d,a,{centerAffix:P.value===1&&!I.value,focused:C.value}),{...u,default:w=>{let{isDisabled:l,isDirty:Q,isReadonly:fe,isValid:ge}=w;return t(Ie,j({ref:f,style:{"--v-textarea-control-height":g.value},onClick:N,onMousedown:H,"onClick:clear":M,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},x,{active:S.value||Q.value,centerAffix:P.value===1&&!I.value,dirty:Q.value||e.dirty,disabled:l.value,focused:C.value,error:ge.value===!1}),{...u,default:pe=>{let{props:{class:Y,...be}}=pe;return t(O,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ae(t("textarea",j({ref:R,class:Y,value:c.value,onInput:z,autofocus:e.autofocus,readonly:fe.value,disabled:l.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:B,onBlur:_},be,V),null),[[Ue("intersect"),{handler:h},null,{once:!0}]]),e.autoGrow&&ae(t("textarea",{class:[Y,"v-textarea__sizer"],"onUpdate:modelValue":Ve=>c.value=Ve,ref:p,readonly:!0,"aria-hidden":"true"},null),[[Ae,c.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:m?w=>{var l;return t(O,null,[(l=u.details)==null?void 0:l.call(u,w),o&&t(O,null,[t("span",null,null),t(Re,{active:e.persistentCounter||C.value,value:F.value,max:D.value},u.counter)])])}:void 0})}),Me({},T,f,R)}}),ca=Je("h1",{class:"text-center text-secondary"},"商品管理",-1),ba={__name:"ProductsView",setup(e){const U=Ne(),k=i(5),y=i([{key:"name",order:"asc"}]),u=i(1),c=i([]),C=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"說明",align:"center",sortable:!1,key:"description"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],A=i(!1),_=i(0),F=i(""),D=()=>{u.value=1,h()},h=async()=>{var n,a;A.value=!0;try{const{data:x}=await Z.get("/products/all",{params:{page:u.value,itemsPerPage:k.value,sortBy:((n=y.value[0])==null?void 0:n.key)||"_id",sortOrder:((a=y.value[0])==null?void 0:a.order)||"asc",search:F.value}});c.value.splice(0,c.value.length,...x.result.data),_.value=x.result.count}catch(x){console.log(x),U({text:x.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}A.value=!1};h();const T=n=>{g.value=n._id,p.value.value=n.name,P.value.value=n.price,I.value.value=n.description,b.value.value=n.category,v.value.value=n.sell,f.value=!0},f=i(!1),g=i(""),R=()=>{g.value="",f.value=!0},S=()=>{f.value=!1,z(),d.value.deleteFileRecord()},B=["新生兒","女童","男童","童鞋","汽車座椅","電器用品","學習餐椅","童書玩具","彌月禮盒","其他"],N=Ye({name:W().required("缺少名稱"),price:ea().typeError("缺少價格").required("缺少價格").min(0,"價格錯誤"),description:W().required("缺少說明"),category:W().required("缺少分類").test("isCategory",n=>B.includes(n)),sell:aa()}),{handleSubmit:H,isSubmitting:M,resetForm:z}=ta({validationSchema:N,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),p=E("name"),P=E("price"),I=E("description"),b=E("category"),v=E("sell"),o=i([]),m=i([]),d=i(null),V=H(async n=>{if(!(g.value.length===0&&o.value.length===0))try{const a=new FormData;a.append("name",n.name),a.append("price",n.price),a.append("description",n.description),a.append("category",n.category),a.append("sell",n.sell),o.value.length>0&&a.append("image",o.value[0].file),g.value.length>0?await Z.patch("/products/"+g.value,a):await Z.post("/products",a),U({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),S(),h()}catch(a){console.log(a),U({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(n,a)=>{const x=te("VDataTableServer"),w=te("VueFileAgent");return le(),He(O,null,[t(oa,null,{default:s(()=>[t(na,{class:"productsRow"},{default:s(()=>[t(se,{cols:"12"},{default:s(()=>[ca]),_:1}),t($e),t(se,{cols:"12",class:"productsTop"},{default:s(()=>[t(q,{color:"secondary",onClick:R},{default:s(()=>[K("新增商品")]),_:1}),t(x,{class:"productsDataTableServer","items-per-page":k.value,"onUpdate:itemsPerPage":[a[1]||(a[1]=l=>k.value=l),h],"sort-by":y.value,"onUpdate:sortBy":[a[2]||(a[2]=l=>y.value=l),h],page:u.value,"onUpdate:page":[a[3]||(a[3]=l=>u.value=l),h],items:c.value,headers:C,loading:A.value,"items-length":_.value,search:F.value,hover:""},{top:s(()=>[t(oe,{class:"mx-auto",color:"accent","max-width":"300"},{default:s(()=>[t(ne,null,{default:s(()=>[t(J,{loading:n.loading,density:"compact",variant:"solo",label:"搜尋","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"","onClick:appendInner":D,onKeydown:Ee(D,["enter"]),modelValue:F.value,"onUpdate:modelValue":a[0]||(a[0]=l=>F.value=l)},null,8,["loading","onKeydown","modelValue"])]),_:1})]),_:1})]),["item.image"]:s(({item:l})=>[t(Ge,{src:l.raw.image,width:"150px"},null,8,["src"])]),["item.sell"]:s(({item:l})=>[l.raw.sell?(le(),je(We,{key:0,color:"success",icon:"mdi-check"})):qe("",!0)]),["item.edit"]:s(({item:l})=>[t(q,{color:"error",icon:"mdi-pencil",onClick:Q=>T(l.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(ze,{persistent:"",width:"500px",scrollable:"",modelValue:f.value,"onUpdate:modelValue":a[11]||(a[11]=l=>f.value=l)},{default:s(()=>[t(la,{disabled:r(M),onSubmit:Ke(r(V),["prevent"])},{default:s(()=>[t(oe,null,{default:s(()=>[t(Oe,null,{default:s(()=>[K(Le(g.value.length>0?"編輯商品":"新增商品"),1)]),_:1}),t(ne,null,{default:s(()=>[t(J,{label:"名稱",modelValue:r(p).value.value,"onUpdate:modelValue":a[4]||(a[4]=l=>r(p).value.value=l),"error-messages":r(p).errorMessage.value},null,8,["modelValue","error-messages"]),t(J,{label:"價格",modelValue:r(P).value.value,"onUpdate:modelValue":a[5]||(a[5]=l=>r(P).value.value=l),modelModifiers:{number:!0},"error-messages":r(P).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","error-messages"]),t(ia,{label:"說明",modelValue:r(I).value.value,"onUpdate:modelValue":a[6]||(a[6]=l=>r(I).value.value=l),"error-messages":r(I).errorMessage.value},null,8,["modelValue","error-messages"]),t(Qe,{label:"分類",modelValue:r(b).value.value,"onUpdate:modelValue":a[7]||(a[7]=l=>r(b).value.value=l),"error-messages":r(b).errorMessage.value,items:B},null,8,["modelValue","error-messages"]),t(ra,{label:"上架",modelValue:r(v).value.value,"onUpdate:modelValue":a[8]||(a[8]=l=>r(v).value.value=l),"error-messages":r(v).errorMessage.value},null,8,["modelValue","error-messages"]),t(w,{modelValue:o.value,"onUpdate:modelValue":a[9]||(a[9]=l=>o.value=l),"raw-model-value":m.value,"onUpdate:rawModelValue":a[10]||(a[10]=l=>m.value=l),"max-files":1,"max-size":"1MB",accept:"image/jpg,image/jpeg,image/png",multiple:!1,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖放到這裡",deletable:"",ref_key:"fileAgent",ref:d},null,8,["modelValue","raw-model-value"])]),_:1}),t(Xe,null,{default:s(()=>[t(Ze),t(q,{color:"red",onClick:S,loading:r(M)},{default:s(()=>[K("取消")]),_:1},8,["loading"]),t(q,{color:"green",type:"submit",loading:r(M)},{default:s(()=>[K("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{ba as default};