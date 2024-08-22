define(['exports', 'preact/jsx-runtime', './Flex-db3ddadb', './IconButton-1b328b69', './CaretDown-73423335', './Icon-599f55f3', './ChevronRight-85ab9b1f', './Text-e132dec0', './ToggleButton-f9e88ce8', './View-10a5769c', './useUser-9b166ca3', './getFormatParse-b7ff0219', './logger-0f873e29', './calendarDateUtils-1f56aaf5', './maskUtils-86dd685a', 'preact/compat', './PRIVATE_DatePickerHeader/themes/DatePickerHeaderStyles.css'], (function(e,t,n,o,a,i,s,r,l,c,d,g,x,h,b,v,j){"use strict";const u=e=>t.jsx(i.Icon,{viewBox:"0 0 24 24",...e,children:t.jsx("g",{fill:"none",children:t.jsx("path",{d:"M6 15s6.043-6 6-6c-.043 0 6 6 6 6H6z",fill:"currentcolor"})})}),m=e=>t.jsx(i.Icon,{viewBox:"0 0 24 24",...e,children:t.jsxs("g",{fill:"none",children:[t.jsx("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",fill:"currentcolor"}),t.jsx("path",{d:"M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0z",fill:"currentcolor"})]})});e.DatePickerHeader=({isPreviousNavigationButtonHidden:e=!1,isTodayNavigationButtonHidden:i=!1,isNextNavigationButtonHidden:g=!1,month:x,monthToggleAccessibleLabel:f,monthYearHeader:B="independentButtons",nextNavigationAccessibleLabel:S,previousNavigationAccessibleLabel:T,testId:I,todayNavigationAccessibleLabel:N,toggleSelection:y="none",year:A,yearToggleAccessibleLabel:p,onMonthToggle:z,onNextNavigationAction:w,onPreviousNavigationAction:C,onTodayNavigationAction:F,onYearToggle:H})=>{const{locale:L,direction:M}=d.useUser(),D=v.useMemo((()=>h.getLongFormattedYearMonth(L,A,x)),[L,x,A]),{monthStr:P,yearStr:Y}=v.useMemo((()=>({monthStr:b.getMonthName(L,x,A,"short"),yearStr:h.getNumericFormattedYear(L,A,x)})),[L,x,A]);return t.jsxs(n.Flex,{align:"center",justify:"between",testId:I,children:[t.jsxs(n.Flex,{children:["independentButtons"===B&&t.jsx(t.Fragment,{children:t.jsxs("div",{class:j.styles.monthYearButtonContainer,children:[t.jsx(l.ToggleButton,{"aria-label":f,label:P,endIcon:"month"===y?t.jsx(u,{}):t.jsx(a.SvgCaretDown,{}),isSelected:"month"===y,onToggle:z,size:"sm",variant:"borderless"}),t.jsx(l.ToggleButton,{"aria-label":p,label:Y,endIcon:"year"===y?t.jsx(u,{}):t.jsx(a.SvgCaretDown,{}),isSelected:"year"===y,onToggle:H,size:"sm",variant:"borderless"})]})}),"text"===B&&t.jsx(c.View,{paddingInlineStart:"3x",children:t.jsx(r.Text,{size:"md",weight:"semiBold",children:D})})]}),t.jsxs(n.Flex,{children:[!e&&t.jsx(o.IconButton,{"aria-label":T,size:"sm",variant:"borderless",onAction:C,children:"ltr"===M?t.jsx(s.SvgChevronLeft,{}):t.jsx(s.SvgChevronRight,{})}),!i&&t.jsx(o.IconButton,{"aria-label":N,size:"sm",variant:"borderless",onAction:F,children:t.jsx(m,{})}),!g&&t.jsx(o.IconButton,{"aria-label":S,size:"sm",variant:"borderless",onAction:w,children:"ltr"===M?t.jsx(s.SvgChevronRight,{}):t.jsx(s.SvgChevronLeft,{})})]})]})}}));
//# sourceMappingURL=DatePickerHeader-52c085e6.js.map
