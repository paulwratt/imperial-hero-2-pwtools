// ==UserScript==
// @name         Zoom 75 - Imperial Hero II
// @namespace    paulwratt.ih2
// @version      2.00
// @description  For IH2 when using zoom 75%
// @author       paulwratt [TsuKe_Morehu_X]
// @homepage     https://paulwratt.github.io/imperial-hero-2-pwtools/
// @updateURL    https://github.com/paulwratt/imperial-hero-2-pwtools/raw/master/zoom75.ih2.user.js
// @include      https://www1.imperialhero.org/web/public/game*
// @include      https://www2.imperialhero.org/web/public/game*
// @include      https://www3.imperialhero.org/web/public/game*
// @include      https://www4.imperialhero.org/web/public/game*
// @include      https://www5.imperialhero.org/web/public/game*
// @include      https://www6.imperialhero.org/web/public/game*
// @include      https://www7.imperialhero.org/web/public/game*
// @include      https://www8.imperialhero.org/web/public/game*
// @include      https://www9.imperialhero.org/web/public/game*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  if (location.href.indexOf('imperialhero.org/web/public/game') !== -1) {
    GM_addStyle('' +
      '.round-button.skills { margin: 4px !important; }' +
      '.pvp-wrapper.replays .actions { margin: 5px 3px 0px 3px !important; }' +
      '.hero-profile-info table .profile-th { padding: 0px 5px !important; }' +
      '.hero-profile-info .form-container { margin: -5px 20px 0px 20px !important; }' +
      '.hero-profile-info .content-wrapper.title-warper { margin-top: 0px !important; }' +
      '.hero-profile-info .content-wrapper:first-child { margin-bottom: 4px !important; }' +
      '.hero-profile-info .titles .info { margin: 0 0 0 0 !important; }' +
      '.hero-profile-info .titles .titles-scroll-wrapper { margin-top: 0px !important; }' +
      '.hero-profile-info .reputation .reputation-type-header { margin: 0px auto 0px 15px !important; }' +
      '.hero-profile-info .reputation .banner-container.faction .current-reputation-txt { top: 15px !important; }' +
      '.lucky-box .content-wrapper.bonuses { width: 335px !important; }' +
      '.lucky-box .content-wrapper.bonuses .grid.bonus-items-grid { width: 32px !important; }' +
      '.rarity-select-container .shop-reset-button { margin: 0 0 0 3px; !important; }' +
      '.widget.quest-tracker .quest-tracker-wrapper .quest-container { max-height: 500px !important; }' +
      '.widget.quest-tracker .quest-tracker-wrapper .quest-container .mCustomScrollBox { max-height: 500px !important; }' +
      '.smelting-recipe-wrapper .recipe-info .info { width: 256px !important; }' +
      '.quest-wrapper .quest-desc .obj-box.small { width: 72px !important; }' +
      '.slot-inventory { width: 30px !important; }' +
      '.slot-inventory-small { width: 14px !important; }' +
      '.auction-res-search .res-avaible { width: 79px !important; }' +
      '.auction-res-search .buy-resources-wrap, .auction-res-search .future-orders-wrap { padding: 0px 16px !important; }' +
      '.auction-search .search-cat { margin-bottom: 5px !important; }' +
      '.dropdown-wrap .chosen { margin-top: -25px !important; }'
    );
  }

})();
