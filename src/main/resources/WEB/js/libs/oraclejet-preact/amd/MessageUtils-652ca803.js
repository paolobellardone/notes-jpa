define(['exports', './logger-36c6eea0', './soundUtils-01a0eb35', './MessageFormattingUtils-6913a734'], (function(e,t,o,n){"use strict";const a=(e,o="common")=>t.warn(`JET Message(${o}): ${e}`);function i(e,t="common"){throw new Error(`JET Message(${t}) - ${e}`)}e.getRenderer=function(e,t,o,n){if(!t||!o)return;const a="function"==typeof t?t(e):t;return null!=a?(a in o||i(`${a} is not a valid template name for the message with key=${e.key}`,n),o[a]):void 0},e.isSeverityIconNeeded=function(e){return n.isValidValueForProp(e,"severity")&&"none"!==e},e.playSound=async function(e){if("none"!==e)if("default"!==e)try{await o.playAudioFromURL(e)}catch(t){a(`Failed to play the audio from the url ${e}. ${t}.`)}else try{o.playDefaultNotificationSound()}catch(e){a(`Failed to play the default sound. ${e}.`)}},e.severityBasedStyleClass=function(e,t){return n.isValidValueForProp(e,"severity")&&"none"!==e?`oj-c-message${t}-${e}`:""},e.throwError=i}));
//# sourceMappingURL=MessageUtils-652ca803.js.map
