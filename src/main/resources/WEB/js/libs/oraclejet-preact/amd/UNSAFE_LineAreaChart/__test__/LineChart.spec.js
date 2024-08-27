define(['require', 'exports', 'preact/jsx-runtime', '@testing-library/preact', 'chai', '../../LineAreaChart-b68c4620', '../../mockUseTextDimensionsDependencies-f4c09bc5', '../../matchTranslationBundle-e243f90d', '../../LayerHost-0a244de8', '../../EnvironmentProvider-9e71b5c2', '@testing-library/user-event', '../../Menu-6a5d7fce', '../../MenuItem-644f8619', 'preact/hooks', 'preact', '../../useTooltipControlled-18271c7a', 'css!./../../IconStyle.styles.css', '../../SelectMenuGroupContext-67f24a8f', '../../logger-0f873e29', '../../UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./../../MenuSeparatorStyles.styles.css', 'module', '../../UNSAFE_Menu/themes/redwood/MenuSeparatorVariants.css', 'preact/compat', '../../TabbableModeContext-a9c97640', '../../domUtil-b56997de', '../../layoutUtils-09c68ca9', '../../scale-3ae48ed5', '../../labelUtils-79523a0e', '../../textUtils-47cf29da', '../../accUtils-1557920a', '../../clientHints-030d25aa', '../../utils-2e2a48d1', '../../dimensionUtils-61978138', '../../getLocale-ae79e654', '../../dataStyleUtils-8c4452c2', '../../colorUtils-31010e27', '../../utils-61ef4ad6', '../../Common/themes/themeContract.css', '../../colorUtils-7c069766', '../../_curry1-df649359', '../../pathUtils-ec75f879', '../../Marker-8ff23a04', 'css!./../../SvgShapesStyles.styles.css', '../../useTranslationBundle-20bfc0f3', '../../useUser-9b166ca3', '../../PRIVATE_Chart/themes/ChartStyles.css', 'css!./../../ChartStyles.styles.css', '../../Chart-4796be31', '../../TrackResizeContainer-905caab2', '../../useSize-535990b2', '../../useResizeObserver-c63865cc', '../../size-4e81acac', '../../useTextDimensions-b37344b4', '../../useCssVars-7efb591d', '../../useTheme-45e3b0b3', '../../useColorScheme-3ffd80c4', '../../useScale-fe3420c6', '../../Gridlines-8ca4f9ee', '../../PRIVATE_PlotArea/themes/PlotAreaStyles.css', 'css!./../../PlotAreaStyles.styles.css', '../../classNames-08d99695', '../../useId-c9578d26', '../../Axis-7e8809af', '../../PRIVATE_Axis/themes/AxisStyles.css', 'css!./../../AxisStyles.styles.css', '../../MultilineText-880bf22f', '../../PRIVATE_Axis/themes/redwood/AxisTheme', '../../PRIVATE_Axis/themes/redwood/AxisBaseTheme.css', 'module', '../../PRIVATE_Axis/themes/redwood/AxisVariants.css', '../../vanilla-extract-recipes-createRuntimeFn.esm-d881c69a', '../../useComponentTheme-5aa41a8f', '../../useChartViewport-ca564baa', '../../eventsUtils-5d567a9d', '../../usePinch-4ec01706', '../../usePointerGesture-0ef1dd89', '../../mergeProps-bcfa6a92', '../../useChartNav-5ff92999', '../../layoutUtils-3c2d340e', '../../useVisHover-28319fef', '../../ScrollBar-4046f84f', '../../PRIVATE_ChartScrollBar/themes/ScrollBarStyles.css', 'css!./../../ScrollBarStyles.styles.css', '../../useSelectDrill-f69d15aa', '../../useChartDataCursor-79f2b3ec', '../../hooks/PRIVATE_useChartDataCursor/themes/DataCursorStyles.css', 'css!./../../DataCursorStyles.styles.css', '../../useChartDatatip-34e2636c', '../../useDatatip-34fb67d2', '../../Layer-8d7bbd69', '../../UNSAFE_Layer/themes/LayerStyles.css', 'css!./../../LayerStyles.styles.css', '../../useThemeInterpolations-1f5fd8f3', '../../theme-a8f3d819', '../../Theme-d945adae', '../../mergeInterpolations-9ede4cf7', '../../mergeDeepWithKey-aaab9019', '../../_curry3-83878f86', '../../_curry2-86c52b86', '../../_isObject-42bafc94', '../../Floating-8f519f4d', '../../useFloating-30975c41', '../../positionUtils-3193ab54', '../../refUtils-d354a169', '../../useOutsideClick-90052c27', '../../arrayUtils-6ee96a35', '../../UNSAFE_Floating/themes/redwood/FloatingTheme', '../../UNSAFE_Floating/themes/FloatingStyles.css', 'css!./../../FloatingStyles.styles.css', '../../UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', '../../UNSAFE_Floating/themes/redwood/FloatingVariants.css', '../../vanilla-extract-dynamic.esm-eceadd82', '../../UNSAFE_Floating/themes/FloatingContract.css', '../../hooks/PRIVATE_useDatatip/themes/useDatatip.css', 'css!./../../useDatatip.styles.css', '../../datatipUtils-1b8ab042', '../../clientUtils-95c1280f', '../../util-5bb1f200', '../../VisTabularDatatip-e945d6f6', '../../PRIVATE_VisTabularDatatip/themes/VisTabularDatatipStyles.css', 'css!./../../VisTabularDatatipStyles.styles.css', '../../useChartDrill-253f676b', '../../useVisDrill-3cfa2c71', '../../useDoubleTap-b6bf5458', '../../useSelection-91c04393', '../../BaseButton-83ce1d00', '../../usePress-a9ed1488', '../../useHover-1890d6a0', '../../useToggle-a29f97af', '../../useActive-59e52f97', '../../useTabbableMode-dc440317', '../../dimensions-89f18413', '../../UNSAFE_BaseButton/themes/redwood/BaseButtonTheme', '../../UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./../../BaseButtonStyles.styles.css', '../../UNSAFE_BaseButton/themes/redwood/BaseButtonVariants.css', 'module', '../../useTestId-f3b8b319', '../../Text-e132dec0', '../../UNSAFE_Text/themes/TextStyles.css', 'css!./../../TextStyles.styles.css', '../../hooks/PRIVATE_useVisSelection/themes/ClearSelection.css', 'css!./../../ClearSelection.styles.css', '../../cssUtils-b0572a20', '../../useChartContextMenu-c50617f2', '../../useContextMenu-e6b10380', '../../useContextMenuGesture-06cf28ca', '../../textSelectionUtils-06c7855d', '../../useTooltip-e965a559', '../../useChartMarquee-0e818e77', '../../Button-346df48a', '../../Icon-599f55f3', '../../UNSAFE_Icon/themes/IconStyle.css', '../../Move-cb970282', '../../hooks/PRIVATE_useChartMarquee/themes/useChartMarquee.css', 'css!./../../useChartMarquee.styles.css', '../../ZoomAlt-f0965f0b', '../../ButtonSetSingle-01a514b7', '../../useButtonSetContext-dffdaea3', '../../ButtonSet-d8cd5447', '../../UNSAFE_ButtonSet/themes/ButtonSetStyles.css', 'css!./../../ButtonSetStyles.styles.css', '../../ButtonSetPositionContext-fd98cc11', '../../toggleButtonUtils-e01582ef', '../../useRovingTabIndexContainer-079ed64f', '../../buttonUtils-20d1b249', '../../id-c70ab33c', '../../ButtonSetItem-e757957a', '../../ButtonSetButton-da51cba1', '../../ToggleButtonLabel-cb67a3ce', '../../ButtonLabelLayout-204d32ae', '../../UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutTheme', '../../UNSAFE_ButtonLabelLayout/themes/ButtonLabelLayoutStyles.css', 'css!./../../ButtonLabelLayoutStyles.styles.css', '../../UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutBaseTheme.css', 'module', '../../UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutVariants.css', 'css!./../../ButtonLabelLayoutVariants.styles.css', '../../HiddenAccessible-037ef42d', 'css!./../../HiddenAccessibleStyles.styles.css', '../../ButtonSetIconButton-08612ca6', '../../useButtonSetPositionContext-b8534679', '../../IconToggleButton-563a5127', '../../useToggleAction-59741954', '../../useVisTouchResponse-36416652', '../../stringUtils-0ae982c2', '../../Common/themes/redwood/theme', '../../LayerManager-00983765', '../../UNSAFE_Menu/themes/MenuStyles.css', 'css!./../../MenuStyles.styles.css', '../../UNSAFE_Menu/themes/DropdownMenuStyles.css', 'css!./../../DropdownMenuStyles.styles.css', '../../useOutsideMousedown-73d5a78a', '../../Sheet-a398d015', '../../Modal-8f19889c', '../../UNSAFE_Modal/themes/ModalStyles.css', 'css!./../../ModalStyles.styles.css', '../../WindowOverlay-ad61cfea', '../../UNSAFE_WindowOverlay/themes/WindowOverlayStyles.css', 'css!./../../WindowOverlayStyles.styles.css', '../../UNSAFE_WindowOverlay/themes/WindowOverlayContract.css', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayTheme', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayBaseTheme.css', 'module', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayVariants.css', '../../tabbableUtils-62c44f56', '../../head-9cb1a3da', '../../_arity-5a5f5f71', '../../_isArray-32602db6', '../../_isString-d0ada3cb', '../../UNSAFE_Sheet/themes/SheetStyles.css', 'css!./../../SheetStyles.styles.css', '../../useAnimationStatus-88b9de0a', '../../useAnimation-5bd3adfc', '../../animationUtils-716a9aa6', '../../UNSAFE_Menu/themes/SheetMenuStyles.css', 'css!./../../SheetMenuStyles.styles.css', '../../flexitem-5db48325', 'css!./../../flexitem.styles.css', '../../vanilla-extract-sprinkles-createRuntimeSprinkles.esm-84d30764', '../../useInteractionStyle-360d25a5', '../../UNSAFE_Menu/themes/redwood/MenuItemTheme', '../../UNSAFE_Menu/themes/MenuItemStyles.css', 'css!./../../MenuItemStyles.styles.css', '../../UNSAFE_Menu/themes/redwood/MenuItemBaseTheme.css', 'module', '../../UNSAFE_Menu/themes/redwood/MenuItemVariants.css', 'css!./../../MenuItemVariants.styles.css', '../../useFocus-4194fc59', '../../useTouch-37489bb5', '../../hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', '../../hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./../../TooltipContentStyles.styles.css', '../../hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', '../../hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./../../TooltipContentVariants.styles.css', 'css!./../../SeparatorStyles.styles.css'], (function(e,s,t,n,r,o,u,l,a,c,i,d,b,m,f,y,w,h,p,S,P,x,A,g,T,B,E,U,C,v,F,_,M,I,N,k,L,R,q,V,j,D,O,W,H,z,G,X,K,Z,$,J,Q,Y,ee,se,te,ne,re,oe,ue,le,ae,ce,ie,de,be,me,fe,ye,we,he,pe,Se,Pe,xe,Ae,ge,Te,Be,Ee,Ue,Ce,ve,Fe,_e,Me,Ie,Ne,ke,Le,Re,qe,Ve,je,De,Oe,We,He,ze,Ge,Xe,Ke,Ze,$e,Je,Qe,Ye,es,ss,ts,ns,rs,os,us,ls,as,cs,is,ds,bs,ms,fs,ys,ws,hs,ps,Ss,Ps,xs,As,gs,Ts,Bs,Es,Us,Cs,vs,Fs,_s,Ms,Is,Ns,ks,Ls,Rs,qs,Vs,js,Ds,Os,Ws,Hs,zs,Gs,Xs,Ks,Zs,$s,Js,Qs,Ys,et,st,tt,nt,rt,ot,ut,lt,at,ct,dt,bt,mt,ft,yt,wt,ht,pt,St,Pt,xt,At,gt,Tt,Bt,Et,Ut,Ct,vt,Ft,_t,Mt,It,Nt,kt,Lt,Rt,qt,Vt,jt,Dt,Ot,Wt,Ht,zt,Gt,Xt,Kt,Zt,$t,Jt,Qt,Yt,en,sn,tn,nn,rn,on,un,ln,an,cn,dn,bn,mn,fn,yn,wn,hn,pn,Sn,Pn,xn,An,gn,Tn,Bn){"use strict";function En(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var Un=En(i);const Cn=[{name:"Series 1",id:0,items:[{id:1,value:2,accessibleLabel:"item one"},{id:2,value:2,accessibleLabel:"item two"}]},{name:"Series 2",id:1,items:[{id:3,value:3,accessibleLabel:"item three"},{id:4,value:4,accessibleLabel:"item four"}]}],vn={series:Cn,width:"400px",height:"448px",groups:[{id:"Group A"},{id:"Group B"}],getDataItem:(e,s)=>Cn[e].items[s]},Fn=async s=>{const r=l.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:u}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ar/bundle"],s,t)}));case"../../resources/nls/ar-XB/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ar-XB/bundle"],s,t)}));case"../../resources/nls/bg/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bg/bundle"],s,t)}));case"../../resources/nls/bs/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bs/bundle"],s,t)}));case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bs-Cyrl/bundle"],s,t)}));case"../../resources/nls/cs/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/cs/bundle"],s,t)}));case"../../resources/nls/da/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/da/bundle"],s,t)}));case"../../resources/nls/de/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/de/bundle"],s,t)}));case"../../resources/nls/el/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/el/bundle"],s,t)}));case"../../resources/nls/en/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en/bundle"],s,t)}));case"../../resources/nls/en-XA/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en-XA/bundle"],s,t)}));case"../../resources/nls/en-XC/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en-XC/bundle"],s,t)}));case"../../resources/nls/es/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/es/bundle"],s,t)}));case"../../resources/nls/et/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/et/bundle"],s,t)}));case"../../resources/nls/fi/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fi/bundle"],s,t)}));case"../../resources/nls/fr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fr/bundle"],s,t)}));case"../../resources/nls/fr-CA/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fr-CA/bundle"],s,t)}));case"../../resources/nls/he/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/he/bundle"],s,t)}));case"../../resources/nls/hr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/hr/bundle"],s,t)}));case"../../resources/nls/hu/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/hu/bundle"],s,t)}));case"../../resources/nls/is/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/is/bundle"],s,t)}));case"../../resources/nls/it/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/it/bundle"],s,t)}));case"../../resources/nls/ja/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ja/bundle"],s,t)}));case"../../resources/nls/ko/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ko/bundle"],s,t)}));case"../../resources/nls/lt/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/lt/bundle"],s,t)}));case"../../resources/nls/lv/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/lv/bundle"],s,t)}));case"../../resources/nls/ms/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ms/bundle"],s,t)}));case"../../resources/nls/nl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/nl/bundle"],s,t)}));case"../../resources/nls/no/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/no/bundle"],s,t)}));case"../../resources/nls/pl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pl/bundle"],s,t)}));case"../../resources/nls/pt/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pt/bundle"],s,t)}));case"../../resources/nls/pt-PT/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pt-PT/bundle"],s,t)}));case"../../resources/nls/ro/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ro/bundle"],s,t)}));case"../../resources/nls/ru/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ru/bundle"],s,t)}));case"../../resources/nls/sk/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sk/bundle"],s,t)}));case"../../resources/nls/sl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sl/bundle"],s,t)}));case"../../resources/nls/sr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sr/bundle"],s,t)}));case"../../resources/nls/sr-Latn/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sr-Latn/bundle"],s,t)}));case"../../resources/nls/sv/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sv/bundle"],s,t)}));case"../../resources/nls/th/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/th/bundle"],s,t)}));case"../../resources/nls/tr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/tr/bundle"],s,t)}));case"../../resources/nls/uk/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/uk/bundle"],s,t)}));case"../../resources/nls/vi/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/vi/bundle"],s,t)}));case"../../resources/nls/zh-Hans/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/zh-Hans/bundle"],s,t)}));case"../../resources/nls/zh-Hant/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/zh-Hant/bundle"],s,t)}));default:return new Promise((function(e,t){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))}))}}(`../../resources/nls/${r}/bundle.ts`),a={translations:{"@oracle/oraclejet-preact":u}},i={...vn,...s},d=t.jsx(o.LineAreaChart,{...i});return n.render(t.jsx(c.RootEnvironmentProvider,{environment:a,children:d}))};function _n(e,s,t){const n=e.getAttribute("aria-activedescendant"),o=B.queryById(e,n);r.expect(o).not.null,r.expect(o?.getAttribute("data-oj-series-index")).to.equal(s),r.expect(o?.getAttribute("data-oj-group-index")).to.equal(t)}describe("Test LineAreaChart component",(()=>{beforeEach((()=>{u.setupUseTextDimensionsDependenciesMock(window)})),it("renders chart with correct aria properties",(async function(){const e=(await Fn({"aria-labelledby":"chartAriaLabelledBy","aria-label":"chartAriaLabel"})).getByRole("application");r.expect(e).not.null,r.expect(e.getAttribute("aria-labelledby")).to.equal("chartAriaLabelledBy"),r.expect(e.getAttribute("aria-label")).to.equal("chartAriaLabel"),r.expect(e.getAttribute("tabIndex")).to.equal("0")})),it("renders items with correct aria properties",(async function(){const e=(await Fn()).getByRole("application");await Un.default.tab();const s=n.getByLabelText(e,"item one");r.expect(s.getAttribute("data-oj-group-index")).to.equal("0"),r.expect(s.getAttribute("data-oj-series-index")).to.equal("0"),await Un.default.keyboard("[ARROWRIGHT]");const t=n.getByLabelText(e,"item two");r.expect(t.getAttribute("data-oj-group-index")).to.equal("1"),r.expect(t.getAttribute("data-oj-series-index")).to.equal("0")})),it("navigates to correct items",(async function(){const e=(await Fn()).getByRole("application");await Un.default.tab(),_n(e,"0","0"),await Un.default.keyboard("[ARROWRIGHT]"),_n(e,"0","1"),await Un.default.keyboard("[ARROWUP]"),_n(e,"1","1"),await Un.default.keyboard("[ARROWLEFT]"),_n(e,"1","0")})),it("renders the selected items",(async function(){if("undefined"==typeof jest){const e=(await Fn({selectionMode:"multiple",selectedIds:[1,2]})).getByRole("application"),s=B.queryAllBy("data-oj-object")(e,"item");r.expect(s.length).to.equal(4);const t=s.filter((e=>"0"===e.getAttribute("data-oj-series-index")));r.expect(t.length).to.equal(2),t.forEach((e=>{const s=getComputedStyle(e);r.expect(s.getPropertyValue("stroke")).to.equal("rgb(92, 86, 81)"),r.expect(s.getPropertyValue("stroke-width")).to.equal("1px"),r.expect(s.getPropertyValue("fill")).to.equal("rgb(255, 255, 255)")}));const n=s.filter((e=>"0"!=e.getAttribute("data-oj-series-index")));r.expect(n.length).to.equal(2),n.forEach((e=>{const s=getComputedStyle(e);r.expect(s.getPropertyValue("stroke")).to.equal("rgba(255, 255, 255, 0)"),r.expect(s.getPropertyValue("stroke-width")).to.equal("1px"),r.expect(s.getPropertyValue("fill")).to.equal("rgba(255, 255, 255, 0)")}))}})),it("does not render the hidden ids",(async function(){const e=(await Fn({hiddenIds:[1,2]})).getByRole("application");await Un.default.tab();const s=B.queryAllBy("data-oj-object")(e,"item");r.expect(s.length).to.equal(2),s.forEach((e=>{r.expect(e.getAttribute("data-oj-series-index")).not.equal("0")}))})),it("triggers the item input on keyboard nav",(async function(){let e,s;await Fn({onItemFocus:({seriesIndex:t,groupIndex:n})=>{e=t,s=n}}),await Un.default.tab(),await n.waitFor((()=>{r.expect(e).to.equal(0),r.expect(s).to.equal(0)})),await Un.default.keyboard("[ARROWRIGHT]"),await n.waitFor((()=>{r.expect(e).to.equal(0),r.expect(s).to.equal(1)})),await Un.default.tab(),await n.waitFor((()=>{r.expect(e).to.equal(void 0),r.expect(s).to.equal(void 0)}))})),it("triggers the proper drill events",(async function(){let e,s;await Fn({drilling:"on",onItemDrill:t=>{e=t.seriesIndex,s=t.groupIndex},onGroupDrill:t=>{s=t.groupIndex,e=void 0}}),await Un.default.tab(),await Un.default.keyboard("[ENTER]"),await n.waitFor((()=>{r.expect(e).to.equal(0),r.expect(s).to.equal(0)})),await Un.default.tab(),await Un.default.keyboard("[ENTER]"),await n.waitFor((()=>{r.expect(null==e).to.be.true,r.expect(s).to.equal(0)}))})),it("triggers datatip on hover",(async function(){if("undefined"==typeof jest){const e=(await Fn()).getByRole("application"),s=B.queryAllBy("data-oj-object")(e,"item");await Un.default.hover(s[0]),await n.waitFor((()=>{const e=document.querySelector('[role="tooltip"]');let s=n.getByText(e,"Value"),t=n.getByText(e,"2");r.expect(s).to.be.not.null,r.expect(t).to.be.not.null,s=n.getByText(e,"Series"),t=n.getByText(e,"Series 1"),r.expect(s).to.be.not.null,r.expect(t).to.be.not.null,s=n.getByText(e,"Group"),t=n.getByText(e,"Group A"),r.expect(s).to.be.not.null,r.expect(t).to.be.not.null}))}})),it("formats the axis labels",(async function(){const e=(await Fn({yAxis:{tickLabel:{format:e=>(100*e).toString()}}})).getByRole("application");await Un.default.tab(),r.expect(e).to.be.not.null,["0","50","100","150","200","250","300","350","400"].forEach((s=>{r.expect(n.getByText(e,s)).to.be.not.null}))})),it("correctly navigates on horizontal linearea chart",(async function(){const e=(await Fn({orientation:"horizontal"})).getByRole("application");await Un.default.tab(),_n(e,"0","0"),await Un.default.keyboard("[ARROWDOWN]"),_n(e,"0","1"),await Un.default.keyboard("[ARROWRIGHT]"),_n(e,"1","1"),await Un.default.keyboard("[ARROWUP]"),_n(e,"1","0")})),it("formats the axis labels according to locale",(async function(){const s={getDataItem:(e,s)=>{const t=Cn[e].items[s];return{...t,value:1e4*t.value}}},{default:u}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ar/bundle"],s,t)}));case"../../resources/nls/ar-XB/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ar-XB/bundle"],s,t)}));case"../../resources/nls/bg/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bg/bundle"],s,t)}));case"../../resources/nls/bs/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bs/bundle"],s,t)}));case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bs-Cyrl/bundle"],s,t)}));case"../../resources/nls/cs/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/cs/bundle"],s,t)}));case"../../resources/nls/da/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/da/bundle"],s,t)}));case"../../resources/nls/de/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/de/bundle"],s,t)}));case"../../resources/nls/el/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/el/bundle"],s,t)}));case"../../resources/nls/en/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en/bundle"],s,t)}));case"../../resources/nls/en-XA/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en-XA/bundle"],s,t)}));case"../../resources/nls/en-XC/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en-XC/bundle"],s,t)}));case"../../resources/nls/es/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/es/bundle"],s,t)}));case"../../resources/nls/et/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/et/bundle"],s,t)}));case"../../resources/nls/fi/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fi/bundle"],s,t)}));case"../../resources/nls/fr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fr/bundle"],s,t)}));case"../../resources/nls/fr-CA/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fr-CA/bundle"],s,t)}));case"../../resources/nls/he/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/he/bundle"],s,t)}));case"../../resources/nls/hr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/hr/bundle"],s,t)}));case"../../resources/nls/hu/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/hu/bundle"],s,t)}));case"../../resources/nls/is/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/is/bundle"],s,t)}));case"../../resources/nls/it/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/it/bundle"],s,t)}));case"../../resources/nls/ja/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ja/bundle"],s,t)}));case"../../resources/nls/ko/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ko/bundle"],s,t)}));case"../../resources/nls/lt/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/lt/bundle"],s,t)}));case"../../resources/nls/lv/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/lv/bundle"],s,t)}));case"../../resources/nls/ms/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ms/bundle"],s,t)}));case"../../resources/nls/nl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/nl/bundle"],s,t)}));case"../../resources/nls/no/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/no/bundle"],s,t)}));case"../../resources/nls/pl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pl/bundle"],s,t)}));case"../../resources/nls/pt/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pt/bundle"],s,t)}));case"../../resources/nls/pt-PT/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pt-PT/bundle"],s,t)}));case"../../resources/nls/ro/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ro/bundle"],s,t)}));case"../../resources/nls/ru/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ru/bundle"],s,t)}));case"../../resources/nls/sk/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sk/bundle"],s,t)}));case"../../resources/nls/sl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sl/bundle"],s,t)}));case"../../resources/nls/sr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sr/bundle"],s,t)}));case"../../resources/nls/sr-Latn/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sr-Latn/bundle"],s,t)}));case"../../resources/nls/sv/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sv/bundle"],s,t)}));case"../../resources/nls/th/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/th/bundle"],s,t)}));case"../../resources/nls/tr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/tr/bundle"],s,t)}));case"../../resources/nls/uk/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/uk/bundle"],s,t)}));case"../../resources/nls/vi/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/vi/bundle"],s,t)}));case"../../resources/nls/zh-Hans/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/zh-Hans/bundle"],s,t)}));case"../../resources/nls/zh-Hant/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/zh-Hant/bundle"],s,t)}));default:return new Promise((function(e,t){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))}))}}("../../resources/nls/vi/bundle.ts"),l={translations:{"@oracle/oraclejet-preact":u},user:{locale:"vi"}},a={...vn,...s},i=n.render(t.jsx(c.RootEnvironmentProvider,{environment:l,children:t.jsx(o.LineAreaChart,{...a})})).getByRole("application");await Un.default.tab(),r.expect(i).to.be.not.null,["0","5 N","10 N","15 N","20 N","25 N","30 N","35 N","40 N"].forEach((e=>{r.expect(n.getByText(i,e)).to.be.not.null}))}))})),describe("LineArea context menu Context",(()=>{beforeEach((()=>{u.setupUseTextDimensionsDependenciesMock(window)})),it("ContextMenu Context",(async()=>{let e,s;const o=await Fn({contextMenuConfig:{itemsRenderer:n=>(e=n,s=e.type,t.jsxs(t.Fragment,{children:[t.jsx(b.MenuItem,{label:"MenuItem1"}),t.jsx(b.MenuItem,{label:"MenuItem2"}),t.jsx(b.MenuItem,{label:"MenuItem3"})]}))}}),u=o.container.firstElementChild?.firstElementChild;await Un.default.tab(),await Un.default.keyboard("[ENTER]"),n.fireEvent.keyDown(u,{key:"F10",shiftKey:!0}),r.expect(e).not.null,r.expect(s).equals("item")}))})),s.checkActiveItemGroupSeries=_n,Object.defineProperty(s,"__esModule",{value:!0})}));
//# sourceMappingURL=LineChart.spec.js.map