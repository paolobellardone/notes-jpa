define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Flex-db3ddadb', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', './logger-0f873e29', 'preact', './useTooltipControlled-18271c7a', 'css!./IconStyle.styles.css', './IconButton-1b328b69', './LayerHost-0a244de8', 'preact/compat', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './useTestId-f3b8b319', './MessagesManager-78a10f78', './useComponentTheme-5aa41a8f', './classNames-08d99695', './TransitionGroup-3b9d81b6', './MessagesContext-602a69a2', './HiddenAccessible-037ef42d', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css'], (function(e,s,t,a,n,o,r,i,d,c,l,m,g,y,M,u,p,h,f,v,b,C,T,x,I,S){"use strict";function A({detail:e,fieldLabel:t,severity:a="error",testId:n}){const{classes:o}=f.useComponentTheme(x.ComponentMessageRedwoodTheme,{severity:a??"none"}),{baseTheme:r}=f.useComponentTheme(I.UserAssistanceRedwoodTheme),i=v.classNames([o,r]),d=p.useTestId(n);return s.jsxs("div",{class:i,"aria-live":"assertive","aria-atomic":"true",...d,children:[t&&s.jsx(T.HiddenAccessible,{children:t}),h.isSeverityIconNeeded(a)&&s.jsx(h.MessageStartIcon,{severity:a,testId:n?`${n}-icon`:void 0,variant:"inline"}),s.jsx(h.MessageSummary,{testId:n?`${n}-summary`:void 0,text:e,variant:"inline"})]})}function U(e){return e.map(((e,s)=>({key:s,data:{closeAffordance:"off",severity:e.severity||"error",detail:e.detail}})))}e.ComponentMessage=A,e.ComponentMessageContainer=function({fieldLabel:e,messages:t=[],testId:a}){const n=p.useTestId(a);return s.jsx("div",{class:S.componentMessageContainerBase,...n,children:s.jsx(h.MessagesManager,{data:U(t),children:({item:t})=>s.jsx(A,{detail:t.data.detail,fieldLabel:e,severity:t.data.severity,testId:a?`${a}-message-${t.key}`:void 0},t.key)})})}}));
//# sourceMappingURL=ComponentMessageContainer-dc4b7c7f.js.map
