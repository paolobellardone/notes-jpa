define(['exports', 'preact/jsx-runtime', 'preact/compat', './tabbableUtils-a1aa6b01', './FocusTracker-8296f9cd'], (function(e,t,n,c,a){"use strict";const s=e=>{e&&c.isTabbableElement(e)&&setTimeout((()=>{c.focusOn(e)}),0)};e.FocusTrap=({autoFocusRef:e,children:l,isDisabled:r=!1,restoreFocusRef:u})=>{const b=n.useRef(null),o=n.useRef(null),i=n.useCallback(((e,t,n)=>{!r&&t&&(e?o.current=t:o.current?c.focusOn(o.current):n.length>0&&c.focusOn(n[0]))}),[r]),f=n.useCallback((e=>{const t=e.tabbableElements.length;t>0&&c.focusOn(e.tabbableElements[t-1])}),[]),m=n.useCallback((e=>{e.tabbableElements.length>0&&c.focusOn(e.tabbableElements[0])}),[]),E=n.useCallback((t=>{b.current=t.activeElement,e&&e.current?c.focusOn(e.current):i(t.hasFocusWithin,t.activeElement,t.tabbableElements)}),[e,i]),d=n.useCallback((e=>{o.current=e.lastActiveElement,!1!==u&&s(u?.current||b.current)}),[u]);return t.jsx(a.FocusTracker,{isDisabled:r,onStartTracking:E,onStopTracking:d,onFocusStartEdge:f,onFocusEndEdge:m,children:l})}}));
//# sourceMappingURL=FocusTrap-fdb3a0ed.js.map
