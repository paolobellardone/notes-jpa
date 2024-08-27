define(['exports', 'preact/jsx-runtime', 'preact', 'preact/compat', '../LayerHost-0a244de8', '../EnvironmentProvider-9e71b5c2', '../Theme-d945adae', '../Common/themes/redwood/theme', '../Common/themes/themeContract.css', 'preact/hooks', '../LayerManager-00983765'], (function(e,S,r,C,E,t,_,L,A,a,o){"use strict";e.withThemeProps=e=>{const E=e.displayName||e.name||"ComponentWithProvider",L=C.forwardRef((({colorScheme:E,scale:L,density:A,...a},o)=>{const d=o||r.createRef();return C.useEffect((()=>{if(d.current){const{classList:e}=d.current;if(!e)return;if(E){[_.LIGHT_CLASS,_.DARK_CLASS,_.INVERT_CLASS,_.COLORSCHEME_DEPENDENT_CLASS].map((S=>e.remove(S))),"dark"===E?(e.add(_.DARK_CLASS),e.add(_.INVERT_CLASS)):e.add(_.LIGHT_CLASS),e.add(_.COLORSCHEME_DEPENDENT_CLASS)}if(L){[_.SCALE_SM_CLASS,_.SCALE_MD_CLASS,_.SCALE_LG_CLASS,_.SCALE_DEPENDENT_CLASS].map((S=>e.remove(S))),e.add(`${"sm"===L?_.SCALE_SM_CLASS:"md"===L?_.SCALE_MD_CLASS:_.SCALE_LG_CLASS}`),e.add(_.SCALE_DEPENDENT_CLASS)}if(A){[_.DENSITY_COMPACT_CLASS,_.DENSITY_STANDARD_CLASS,_.DENSITY_DEPENDENT_CLASS].map((S=>e.remove(S))),e.add(`${"compact"===A?_.DENSITY_COMPACT_CLASS:_.DENSITY_STANDARD_CLASS}`),e.add(_.DENSITY_DEPENDENT_CLASS)}}}),[d,E,L,A]),S.jsx(t.EnvironmentProvider,{environment:{colorScheme:E,scale:L,density:A},children:S.jsx(e,{...a,ref:d})})}));return L.displayName=`withThemeProps(${E})`,L},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_withThemeProps.js.map