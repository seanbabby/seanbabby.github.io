(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3603],{6812:function(n,t,e){"use strict";e.d(t,{Z:function(){return N}});var i=e(8646),o=e(7437),r=e(7163),a=e.n(r),s=e(2265);let l=/^[A-Za-z][-.+A-Za-z0-9]+:/,c=/^[A-Za-z][-.+A-Za-z0-9]+:\/\//,p=/:[^\s]*?[A-Za-z]/,d=/^[\w]\/\//,u=/^(https?:\/\/)?(www\.)?/i,m=/^mailto:/,h=/^\/\//;class _{getUrl(){let n=this._url;return this._protocolMailtoMatch||this._protocolRelativeMatch||this._protocolUrlMatch||this.protocolPrepended||(n=this._url="http://"+n,this.protocolPrepended=!0),n}getAnchorHref(){return this.getUrl().replace(/&amp;/g,"&")}getAnchorText(){let n=this.getUrl();return this.disableUrlStripping?n:(this._protocolRelativeMatch&&(n=this.stripProtocolRelativePrefix(n)),this._protocolMailtoMatch&&(n=this.stripMailtoPrefix(n)),n=this.stripUrlPrefix(n),n=this.removeTrailingSlash(n))}stripUrlPrefix(n){return n.replace(u,"")}stripMailtoPrefix(n){return n.replace(m,"")}stripProtocolRelativePrefix(n){return n.replace(h,"")}removeTrailingSlash(n){return"/"===n.charAt(n.length-1)&&(n=n.slice(0,-1)),n}constructor(n,t,e,i,o,r){this._url=n,this._protocolMailtoMatch=t,this._protocolUrlMatch=e,this._protocolRelativeMatch=i,this.position=o,this.disableUrlStripping=r,this.protocolPrepended=!1}}let g=/(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,f=/[A-Za-z0-9.-]*[A-Za-z0-9-]/,x=/^(.)?\/\//,b=["(?:","(",g.source,/(?:(?:[^<>()\\[\]\\.,;:\s@"]+(?:\.[^<>()\\[\]\\.,;:\s@"]+)*)|(?:".+"))@(?:(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.source,")","|","(",g.source,f.source,")","|","(?:","(.?//)?",/(?:www\.)/.source,f.source,")","|","(?:","(.?//)?",f.source,/\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/.source,")",")","(?:"+/[-A-Za-z0-9+&@#/%=~_()|'$*[\]?!:,.;]*[-A-Za-z0-9+&@#/%=~_()|'$*[\]]/.source+")?"].join("");class v extends s.PureComponent{prepareElements(n,t){let e=[],i=0;return n.forEach(n=>{0!==n.position.start&&e.push(s.createElement("span",{className:this.props.className},t.slice(i,n.position.start))),e.push(s.createElement("a",Object.assign({href:n.getAnchorHref(),className:this.props.linkClassName},this.props.linkProps),n.getAnchorText())),i=n.position.end}),i<t.length&&e.push(s.createElement("span",{},t.slice(i))),e}truncate(n){if(!this.props.maxLength)return n;let t=[],e=0;return n.some(n=>{if((e+=n.props.children.length)>this.props.maxLength){let i=n.props.children.slice(0,-(e-this.props.maxLength));return t.push(s.cloneElement(n,{},i)),!0}t.push(n)}),t.push(s.createElement("span",{}," ...")),t}keyElements(n){return n.map((n,t)=>s.cloneElement(n,{key:t}))}render(){let n=this.props.text||"",t=this.keyElements(this.truncate(this.prepareElements(function(n){let t,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=RegExp(b,"gi"),o=[];for(;null!==(t=i.exec(n));){var r;let[n,a,s,u,m]=t,h=u||m;if(h&&h.match(x)[1]&&(n=n.slice(1),t.index++),r=n,!(s&&!function(n){let t=n.match(l)[0].toLowerCase();return"javascript:"!==t&&"vbscript:"!==t}(s)||r&&(!s||!c.test(s))&&-1===r.indexOf(".")||r&&s&&!p.test(r)||h&&d.test(h))){let r={start:t.index,end:i.lastIndex};o.push(new _(n,a,s,h,r,e))}}return o}(n,this.props.disableUrlStripping),n)));return s.createElement("div",{className:this.props.rootName},t)}}var w=e(7185),k=e(9958),y=e.n(k);function Z(n){let{children:t,...e}=n,[i,r]=(0,s.useState)(!1),[a,l]=(0,s.useState)(!1),c=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let n=c.current;null!==n&&(n.scrollHeight>25?l(!0):l(!1))},[t,25]),(0,o.jsx)(w.Z,{className:y().container,...e,children:(0,o.jsxs)(w.Z.Body,{style:{padding:"0",margin:"0"},children:[(0,o.jsx)("div",{className:y().content,ref:c,style:{maxHeight:i?"none":"".concat(25,"px"),overflow:"hidden",lineHeight:"".concat(25,"px"),whiteSpace:"pre-wrap",wordBreak:"break-all"},children:t}),a&&(0,o.jsx)("div",{className:y().btn_more,onClick:()=>r(!i),style:{display:i?"none":"block"},children:i?"":"更多"})]})})}var j=e(9631);function z(){let n=(0,i._)(["\n  font-size: 16px;\n\n  @media (max-width: ",") {\n    font-size: 14px;\n  }\n"]);return z=function(){return n},n}let P=(0,e(1392).iv)(z(),j.Z.breakpoints.phone);function N(n){let{text:t,disableUrlStripping:e,linkProps:i,...r}=n;return(0,o.jsx)(Z,{...r,children:(0,o.jsx)(v,{className:"".concat(a().web_16pt_body_platinum_L," ").concat(P),linkClassName:"".concat(a().web_16pt_body_linktext_L," ").concat(P),disableUrlStripping:null!=e&&e,linkProps:i,text:t})})}},5977:function(n,t,e){"use strict";e.d(t,{Z:function(){return p}});var i=e(7437),o=e(4029),r=e.n(o),a=e(2265),s=e(9039),l=e(2448),c=e(8404);function p(n){let{path:t}=n,[e,o]=(0,a.useState)(null);return(0,a.useEffect)(()=>{o(window.location.protocol)},[]),(0,i.jsx)("div",{className:r().commodity_avatar,style:{position:"relative",borderRadius:"50%",overflow:"hidden"},children:(0,i.jsx)(function(){let{data:n,error:e,isLoading:o}=(0,s.ZP)("item_img",()=>fetch(null!=t?t:new URL("")).then(n=>n.blob()),{revalidateOnFocus:!1});if(n&&"image/png"===n.type){let t=URL.createObjectURL(n);return(0,i.jsx)(l.Z,{className:r().commodity_avatar,src:t,alt:""})}return(0,i.jsx)(l.Z,{className:r().commodity_avatar,src:c.M.desktop_pic_commodity_avatar_default,alt:""})},{})})}},4097:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var i=e(7437),o=e(4029),r=e.n(o);function a(n){let{children:t}=n;return(0,i.jsx)("div",{className:r().card,children:t})}},6907:function(n,t,e){"use strict";e.d(t,{Z:function(){return f}});var i=e(8646),o=e(7437),r=e(5538),a=e(4398),s=e(7163),l=e.n(s),c=e(4999),p=e(4653);function d(){let n=(0,i._)(["\n  background-color: var(--maya-blue);\n  border-radius: 4px;\n  width: 280px;\n  height: 44px;\n  line-height: 44px !important;\n  font-size: 18px;\n  color: var(--oxford-blue);\n  font-align: center;\n  cursor: pointer;\n  align-self: center;\n  margin-bottom: 24px;\n  margin-top: 24px;\n"]);return d=function(){return n},n}function u(){let n=(0,i._)([""]);return u=function(){return n},n}function m(){let n=(0,i._)(["\n  margin-top: 16px;\n  margin-bottom: 24px;\n"]);return m=function(){return n},n}let h=r.Z.div(d()),_=r.Z.div(u()),g=r.Z.div(m());function f(n){let{content:t,id:e,mobileContent:i}=n,r=(0,c.Z)();return a.tq?(0,o.jsxs)(o.Fragment,{children:[i&&(0,o.jsx)(_,{className:l().web_16pt_body_platinum_L,children:i}),(0,o.jsx)(h,{className:l().mobile_18pt_title_m_oxford_blue_C,onClick:()=>{window.location.href=t},children:"106203"===e?null==r?void 0:r.information.__openQPP_received:null==r?void 0:r.information.__openQPP})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{content:t}),(0,o.jsx)(g,{className:l().web_16pt_body_canary_yellow_C,children:"106203"===e?null==r?void 0:r.commodity_info.scan_viaQPP_received:null==r?void 0:r.commodity_info.scan_viaQPP})]})}},2562:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var i=e(8646),o=e(7437),r=e(5538),a=e(8404),s=e(9039),l=e(2265);function c(){let n=(0,i._)(["\n  position: relative;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  min-height: 292px;\n  width: 100%;\n  background-position: 50%;\n  padding-top: ",";\n  @media (max-width: 576px) {\n    background-image: url(",");\n    min-height: ",";\n    padding-top: ",";\n  }\n"]);return c=function(){return n},n}function p(){let n=(0,i._)(["\n  background-color: var(--mask);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]);return p=function(){return n},n}let d=r.Z.div(c(),n=>n.$customPath||a.M.desktop_pic_commodity_largepic_sample_general,n=>n.$isUserInfo?"35px":"82px",n=>n.$customPath||"/assets/mobile-pic-commodity-largepic-sample-general.png",n=>n.$isUserInfo?"196px":"229px",n=>n.$isUserInfo?"24px":"64px"),u=r.Z.div(p());function m(n){let{children:t,path:e,mask:i}=n,[r,a]=(0,l.useState)(void 0),{data:c}=(0,s.ZP)("info_bg",()=>fetch(null!=e?e:new URL("")).then(n=>n.blob()),{revalidateOnFocus:!1});return(0,l.useEffect)(()=>{c&&void 0!==e&&"image/png"===c.type&&a(URL.createObjectURL(c))},[c,e]),(0,o.jsxs)(d,{$customPath:r,$isUserInfo:null!=i&&i,children:[i&&(0,o.jsx)(u,{}),t]})}},8709:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return A}});var i=e(8646),o=e(7437),r=e(9759),a=e(2398),s=e(5538),l=e(4999),c=e(7163),p=e.n(c),d=e(9631),u=e(2265),m=e(6907),h=e(4398);function _(){let n=(0,i._)(["\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin-top: 100px;\n  padding-left: 5%;\n  padding-right: 5%;\n\n  @media (max-width: ",") {\n    margin-top: 24px;\n  }\n"]);return _=function(){return n},n}function g(){let n=(0,i._)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return g=function(){return n},n}function f(){let n=(0,i._)(["\n  background-image: url(/assets/desktop-pic-qpp-text.png);\n  background-size: cover;\n  width: 103px;\n  height: 36px;\n\n  @media (max-width: ",") {\n    width: 69px;\n    height: 24px;\n  }\n"]);return f=function(){return n},n}function x(){let n=(0,i._)(["\n  margin-left: 12px;\n\n  @media (max-width: ",") {\n    font-size: 28px;\n  }\n"]);return x=function(){return n},n}function b(){let n=(0,i._)(["\n  width: 100%;\n  max-width: 1280px;\n  min-width: 327px;\n  margin-top: 48px;\n  margin-bottom: 50px;\n  padding-bottom: 20px;\n  background-color: var(--oxford-blue);\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  padding-left: 12%;\n  align-items: center;\n  position: relative;\n\n  @media (max-width: ",") {\n    margin-top: 24px;\n    margin-bottom: 24px;\n    flex-direction: column;\n    padding-top: 36px;\n    padding-left: 23px;\n    padding-right: 23px;\n    padding-bottom: 48px;\n  }\n"]);return b=function(){return n},n}function v(){let n=(0,i._)(["\n  background-image: url(/assets/desktop-image-error.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 184px;\n  height: 166px;\n  position: relative;\n  flex: 0 0 auto;\n\n  @media (max-width: ",") {\n    width: 120px;\n    height: 109px;\n  }\n"]);return v=function(){return n},n}function w(){let n=(0,i._)(["\n  position: relative;\n  padding-left: 6%;\n  padding-right: 6%;\n\n  @media (max-width: ",") {\n    margin-top: 36px;\n    font-size: 14px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]);return w=function(){return n},n}function k(){let n=(0,i._)(["\n  position: relative;\n  padding-left: 6%;\n  padding-right: 6%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  @media (max-width: ",") {\n    margin-top: 36px;\n    font-size: 14px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]);return k=function(){return n},n}let y=s.Z.div(_(),d.Z.breakpoints.phone),Z=s.Z.div(g()),j=s.Z.div(f(),d.Z.breakpoints.phone),z=s.Z.div(x(),d.Z.breakpoints.phone),P=s.Z.div(b(),d.Z.breakpoints.phone),N=s.Z.div(v(),d.Z.breakpoints.phone),C=s.Z.div(w(),d.Z.breakpoints.phone),U=s.Z.div(k(),d.Z.breakpoints.phone);function A(n){let{isUniversal:t}=n,[e,i]=(0,u.useState)(null),s=(0,l.Z)();return(0,u.useEffect)(()=>{i(window.location.href)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{}),(0,o.jsx)(a.Z,{}),(0,o.jsxs)(y,{children:[(0,o.jsxs)(Z,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(z,{className:p().web_44pt_Display_L_white_L,children:null==s?void 0:s.home["section-1"].__title})]}),(0,o.jsxs)(P,{children:[(0,o.jsx)(N,{}),t?(0,o.jsxs)(U,{className:p().web_16pt_body_platinum_L,children:[(0,o.jsx)("div",{children:null==s?void 0:s.vendor_login.__title}),(0,o.jsx)("div",{children:null==s?void 0:s.vendor_login.__text1}),(0,o.jsx)("div",{children:null==s?void 0:s.vendor_login.__text2}),(0,o.jsx)("div",{children:h.tq?null==s?void 0:s.vendor_login.__text3_mb:null==s?void 0:s.vendor_login.__text3_pc})]}):(0,o.jsx)(C,{className:p().web_16pt_body_platinum_L,children:null==s?void 0:s.errPage.__text1})]}),e&&(0,o.jsx)(m.Z,{content:e,id:"0",mobileContent:null==s?void 0:s.errPage.__open_downloadQPP})]})]})}},3231:function(n){n.exports={content:"layout_content__fEDSU"}},4029:function(n){n.exports={card:"InfoCard_card__ESetf",top:"InfoCard_top__g0Oht",commodity_avatar:"InfoCard_commodity_avatar__J1Ii1",commodity_name:"InfoCard_commodity_name__2gZ_D",row_title:"InfoCard_row_title__YkNfP",category_row_name:"InfoCard_category_row_name__kzel3",category_row_item_serial:"InfoCard_category_row_item_serial__gwSrg",category_icon:"InfoCard_category_icon__vAiG3",creator_official_icon:"InfoCard_creator_official_icon__ZWX3M",row:"InfoCard_row__EAkQL",row_links:"InfoCard_row_links__eTP94",btn_more:"InfoCard_btn_more__q4ZiU",autolinktext_container:"InfoCard_autolinktext_container__0L41Y"}},9958:function(n){n.exports={container:"Spoiler_container__fDDvK",btn_more:"Spoiler_btn_more__HL5_d",content:"Spoiler_content__N8_oT"}}}]);