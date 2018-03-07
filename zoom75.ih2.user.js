// ==UserScript==
// @name         Zoom 75 - Imperial Hero II
// @namespace    paulwratt.ih2
// @version      1.00
// @description  For IH2 when using zoom 75%
// @author       paulwratt [TsuKe_Morehu_X]
// @homepage     https://paulwratt.github.io/imperial-hero-2-pwtools/
// @updateURL    https://github.com/paulwratt/imperial-hero-2-pwtools/raw/master/zoom75.ih2.user.js
// @include      https://www1.imperialhero.org/web/public/game*
// @include      https://www2.imperialhero.org/web/public/game*
// @include      https://www3.imperialhero.org/web/public/game*
// @include      https://www4.imperialhero.org/web/public/game*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  if (location.href.indexOf('imperialhero.org/web/public/game') !== -1) {
    GM_addStyle('div.slot-inventory { width: 30px !important; }');
  }

})();
