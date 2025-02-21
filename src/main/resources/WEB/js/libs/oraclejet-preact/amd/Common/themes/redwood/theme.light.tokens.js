define(['exports', '../../../utils-5077c092', '../themeContract.css', '../../../colorUtils-7c069766', '../../../_curry1-df649359'], (function(e,r,a,l,t){"use strict";const o={palette:{neutral:{0:"255,255,255",10:"251,249,248",20:"245,244,242",30:"241,239,237",40:"228,225,221",50:"212,207,202",60:"188,182,177",70:"174,168,162",80:"158,152,146",90:"139,133,128",100:"122,115,110",110:"111,105,100",120:"102,95,91",130:"92,86,81",140:"81,76,71",150:"71,66,62",160:"58,54,50",170:"49,45,42",180:"32,30,28",190:"22,21,19",200:"0,0,0"},danger:{10:"255,248,247",20:"255,241,239",30:"255,235,232",40:"255,217,211",50:"255,193,184",60:"255,157,144",70:"255,134,117",80:"254,105,84",90:"236,79,58",100:"214,59,37",110:"195,53,34",120:"179,49,31",130:"162,44,28",140:"143,39,25",150:"124,34,22",160:"102,28,18",170:"86,24,15",180:"60,17,11",190:"42,12,7"},success:{10:"244,252,235",20:"235,248,222",30:"228,245,211",40:"207,235,179",50:"177,221,136",60:"138,201,79",70:"125,186,69",80:"111,169,57",90:"94,148,43",100:"80,130,35",110:"73,118,32",120:"67,107,29",130:"60,96,26",140:"53,86,23",150:"46,73,20",160:"38,61,16",170:"31,51,14",180:"21,35,9",190:"15,23,6"},warning:{10:"254,249,242",20:"253,242,229",30:"252,237,220",40:"249,221,188",50:"246,199,146",60:"240,169,87",70:"235,150,50",80:"225,130,18",90:"198,113,14",100:"172,99,12",110:"156,89,11",120:"143,82,10",130:"129,73,9",140:"114,65,8",150:"99,56,7",160:"81,47,6",170:"69,39,5",180:"46,26,3",190:"32,18,2"},info:{10:"246,250,252",20:"237,246,249",30:"228,241,247",40:"208,229,238",50:"180,213,225",60:"143,191,208",70:"121,177,198",80:"95,162,186",90:"65,144,172",100:"34,126,158",110:"14,114,149",120:"0,104,140",130:"2,94,126",140:"4,83,111",150:"6,72,95",160:"6,60,78",170:"5,50,66",180:"4,35,45",190:"2,24,31"},brand:{10:"246,250,252",20:"237,246,249",30:"228,241,247",40:"208,229,238",50:"180,213,225",60:"143,191,208",70:"121,177,198",80:"95,162,186",90:"65,144,172",100:"34,126,158",110:"14,114,149",120:"0,104,140",130:"2,94,126",140:"4,83,111",150:"6,72,95",160:"6,60,78",170:"5,50,66",180:"4,35,45",190:"2,24,31"}},overlay:{hover:r.rgba(a.colorSchemeVars.palette.neutral[190],.08),active:r.rgba(a.colorSchemeVars.palette.neutral[190],.16),dangerHover:r.rgba(a.colorSchemeVars.palette.danger[60],.24),dangerActive:r.rgba(a.colorSchemeVars.palette.danger[60],.32),scrim:r.rgba(a.colorSchemeVars.palette.neutral[190],.4),inverseHover:r.rgba(a.colorSchemeVars.palette.neutral[0],.08),inverseActive:r.rgba(a.colorSchemeVars.palette.neutral[0],.12)},pageBackground:{neutral0:r.rgb(a.colorSchemeVars.palette.neutral[0]),neutral10:r.rgb(a.colorSchemeVars.palette.neutral[10]),neutral20:r.rgb(a.colorSchemeVars.palette.neutral[20]),neutral30:r.rgb(a.colorSchemeVars.palette.neutral[30]),neutral40:r.rgb(a.colorSchemeVars.palette.neutral[40])},surface:{neutral0:r.rgb(a.colorSchemeVars.palette.neutral[0]),neutral10:r.rgb(a.colorSchemeVars.palette.neutral[10]),neutral20:r.rgb(a.colorSchemeVars.palette.neutral[20]),neutral30:r.rgb(a.colorSchemeVars.palette.neutral[30]),selected:r.rgb(a.colorSchemeVars.palette.brand[30]),disabled:r.rgba(a.colorSchemeVars.palette.neutral[190],.04),popup:r.rgb(a.colorSchemeVars.palette.neutral[0]),neutral:{low:r.rgb(a.colorSchemeVars.palette.neutral[10]),subtle:r.rgba(a.colorSchemeVars.palette.neutral[190],.08),strong:r.rgb(a.colorSchemeVars.palette.neutral[100])},success:{low:r.rgb(a.colorSchemeVars.palette.success[10]),subtle:r.rgba(a.colorSchemeVars.palette.success[60],.4),strong:r.rgb(a.colorSchemeVars.palette.success[120])},info:{low:r.rgb(a.colorSchemeVars.palette.info[10]),subtle:r.rgba(a.colorSchemeVars.palette.info[60],.4),strong:r.rgb(a.colorSchemeVars.palette.info[120])},warning:{low:r.rgb(a.colorSchemeVars.palette.warning[10]),subtle:r.rgba(a.colorSchemeVars.palette.warning[60],.4),strong:r.rgb(a.colorSchemeVars.palette.warning[120])},danger:{low:r.rgb(a.colorSchemeVars.palette.danger[10]),subtle:r.rgba(a.colorSchemeVars.palette.danger[60],.4),strong:r.rgb(a.colorSchemeVars.palette.danger[120])}},border:{enabled:r.rgba(a.colorSchemeVars.palette.neutral[190],.5),disabled:r.rgba(a.colorSchemeVars.palette.neutral[190],.2),divider:r.rgba(a.colorSchemeVars.palette.neutral[190],.12),dividerOpaqueColor:r.rgb(a.colorSchemeVars.palette.neutral[190]),dividerOpaquePercent:"12%",selected:r.rgb(a.colorSchemeVars.palette.brand[100]),dropLine:r.rgb(a.colorSchemeVars.palette.brand[100]),selectedNeutral:r.rgb(a.colorSchemeVars.palette.neutral[190]),warning:r.rgb(a.colorSchemeVars.palette.warning[120]),danger:r.rgb(a.colorSchemeVars.palette.danger[120]),keyboardFocus:r.rgb(a.colorSchemeVars.palette.neutral[190])},boxshadow:{shadowcolor:a.colorSchemeVars.palette.neutral[200]},textIcon:{primary:r.rgb(a.colorSchemeVars.palette.neutral[190]),secondary:r.rgba(a.colorSchemeVars.palette.neutral[190],.7),disabled:r.rgba(a.colorSchemeVars.palette.neutral[190],.4),inverse:r.rgb(a.colorSchemeVars.palette.neutral[0]),onColor:r.rgb(a.colorSchemeVars.palette.neutral[0]),link:r.rgb(a.colorSchemeVars.palette.brand[120]),success:r.rgb(a.colorSchemeVars.palette.success[120]),info:r.rgb(a.colorSchemeVars.palette.info[120]),warning:r.rgb(a.colorSchemeVars.palette.warning[120]),danger:r.rgb(a.colorSchemeVars.palette.danger[120])},textfield:{surface:{enabled:a.colorSchemeVars.surface.neutral0},border:{enabled:a.colorSchemeVars.border.enabled}},collection:{header:{text:r.rgb(a.colorSchemeVars.textIcon.primary),surface:{selected:r.rgba(a.colorSchemeVars.palette.neutral[190],.12),partialSelected:r.rgba(a.colorSchemeVars.palette.neutral[190],.04)}}},collectionGrid:{cell:{surfaceEdit:r.rgb(a.colorSchemeVars.palette.neutral[0])}},measure:{track:{enabled:r.rgba(a.colorSchemeVars.palette.neutral[190],.16),disabled:r.rgba(a.colorSchemeVars.palette.neutral[190],.16)},fill:{enabled:r.rgb(a.colorSchemeVars.palette.neutral[190]),disabled:r.rgba(a.colorSchemeVars.palette.neutral[190],.2)},thumb:{surface:r.fallbackVar(a.globalVars.currentBackgroundColor,a.colorSchemeVars.palette.neutral[10])},reference:{line:r.rgba(a.colorSchemeVars.palette.neutral[190],.8),lineContrast:r.rgba(a.colorSchemeVars.palette.neutral[20],.7),area:r.rgba(a.colorSchemeVars.palette.neutral[170],.08)}},dvt:{contrastLine:r.rgb(a.colorSchemeVars.palette.neutral[20]),paletteQualitative:{1:"36, 93, 99",2:"215, 121, 15",3:"49, 160, 156",4:"78, 65, 55",5:"105, 158, 97",6:"180, 114, 130",7:"131, 64, 30",8:"158, 127, 204",9:"168, 142, 0",10:"88, 49, 110",11:"89, 153, 181",12:"49, 122, 69"},threshold:{success:r.rgb(a.colorSchemeVars.palette.success[100]),warning:"rgb(207, 124, 0)",danger:r.rgb(a.colorSchemeVars.palette.danger[100])},marquee:{border:r.rgba(a.colorSchemeVars.palette.neutral[190],.8),surface:r.rgba(a.colorSchemeVars.palette.neutral[20],.1)},referenceObject:{area:r.rgba(a.colorSchemeVars.palette.neutral[170],.08),line:r.rgba(a.colorSchemeVars.palette.neutral[190],.8)},overview:{background:r.rgb(a.colorSchemeVars.palette.neutral[30]),windowBackground:r.rgb(a.colorSchemeVars.palette.neutral[0]),windowBorder:r.rgb(a.colorSchemeVars.palette.neutral[170])}}};e.colorScheme=o,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=theme.light.tokens.js.map
