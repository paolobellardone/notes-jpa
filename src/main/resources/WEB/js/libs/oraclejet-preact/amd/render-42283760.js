define(['exports', 'preact/jsx-runtime', '@testing-library/preact', './TopLayerHost-d9bd8ecf', './EnvironmentProvider-fbf8d770', './resources/nls/en/bundle'], (function(e,n,r,t,o,s){"use strict";const i={translations:{"@oracle/oraclejet-preact":s.default},mode:"test"};e.renderInEnv=(e,t=i,s)=>{const a={...t};null==a.translations&&(a.translations={...i.translations});const{rerender:d,...c}=r.render(n.jsx(o.RootEnvironmentProvider,{environment:a,children:e}),s);return{rerender:e=>d(n.jsx(o.RootEnvironmentProvider,{environment:a,children:e})),...c}}}));
//# sourceMappingURL=render-42283760.js.map