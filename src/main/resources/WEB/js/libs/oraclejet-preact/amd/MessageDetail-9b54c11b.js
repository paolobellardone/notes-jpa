define(['exports', 'preact/jsx-runtime', 'preact', './classNames-49c3ba27', './PRIVATE_Message/themes/MessageStyles.css', './MessageFormattingUtils-6913a734'], (function(e,s,a,t,n,l){"use strict";function r(e){const{detail:t}=e.data;return l.isValidValueForProp(t)?s.jsx(a.Fragment,{children:t}):null}e.MessageDetail=function({item:e,renderer:a,variant:l="banner"}){const i=null!=a,c=(a??r)(e);if(null==c)return null;const u=t.classNames([n.messageDetailStyles.base,n.messageDetailStyles[l]]);return s.jsx("div",{class:u,...i?{"data-oj-message-custom-detail":""}:{},children:c})}}));
//# sourceMappingURL=MessageDetail-9b54c11b.js.map