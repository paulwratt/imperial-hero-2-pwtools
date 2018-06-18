// ==UserScript==
// @name         Export Items for IH2
// @namespace    paulwratt.ih2
// @version      1.01
// @description  Add item export button to certain dialogs
// @author       paulwratt [TsuKe_Morehu_X]
// @homepage     https://paulwratt.github.io/imperial-hero-2-pwtools/
// @updateURL    https://github.com/paulwratt/imperial-hero-2-pwtools/raw/master/export.ih2.user.js
// @include      https://www1.imperialhero.org/web/public/game*
// @include      https://www2.imperialhero.org/web/public/game*
// @include      https://www3.imperialhero.org/web/public/game*
// @include      https://www4.imperialhero.org/web/public/game*
// @include      https://www5.imperialhero.org/web/public/game*
// @include      https://www6.imperialhero.org/web/public/game*
// @include      https://www7.imperialhero.org/web/public/game*
// @include      https://www8.imperialhero.org/web/public/game*
// @include      https://www9.imperialhero.org/web/public/game*
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

'use strict';

if (location.href.indexOf('imperialhero.org') !== -1) {

    var pw_ihScript = document.createElement('script');
    var pw_ihCode = document.createTextNode((<><![CDATA[

pw_ihWin = null;
pw_ihX = '';
function pw_ihDoExport(){
  if (pw_ihX.length > 0) {
    pw_ihWin = window.open();
    pw_ihWin.document.writeln('<textarea style="width:100%; height:100%;">');
    pw_ihWin.document.writeln(pw_ihX);
    pw_ihWin.document.writeln('</textarea>');
    pw_ihX = '';
  }
}

function pw_ihSelectedStorehouse(){
  pw_ihX = '';
  $('div#storehouse div.mCSB_container div.active').each( function(i){
     pw_ihX = pw_ihX + this.outerHTML + '\n';
  });
  if (pw_ihX.length > 0) pw_ihDoExport();
}

pw_ihCC = 0;
pw_ihEBS = false;
pw_ihEBW = true;
pw_ihEBF = true;
pw_ihEBP = true;
pw_ihEBI = true;
pw_ihEBR = true;

function pw_ihCheck(){
  if (pw_ihCC == -1) return;
  if (!pw_ihEBS){
    if($('div#storehouse').length == 1){
      $('<div id="pw_button_ESS" class="pw-Sbutton pointer" style="" title="Export Selected"><span class="settings-icon hotkeys" style="margin-top: 5px;"></span></div>').insertAfter($('div#storehouse div.show-hint.pointer'));
      $('div#pw_button_ESS').click(pw_ihSelectedStorehouse);
      pw_ihEBS = true;
      pw_ihCC = 10;
    }
  }
  pw_ihCC++;
  if (pw_ihCC >= 10) {
    pw_ihCC = 0;
    if (pw_ihEBS && pw_ihEBW && pw_ihEBF && pw_ihEBP && pw_ihEBI && pw_ihEBR) pw_ihCC = -1;
  } else {
    setTimeout(pw_ihCheck, 1000);
  }
}

$(document).ajaxComplete((event, jqXHR, ajaxObj) => { pw_ihCheck(); });

]]></>).toString());
    pw_ihScript.appendChild(pw_ihCode);
    document.head.appendChild(pw_ihScript);
    pw_ihCode = '';

    GM_addStyle((<><![CDATA[
.pw-Sbutton {
    position: absolute;
    top: -5px;
    right: 56px;
    z-index: 3;
    width: 34px;
    height: 34px;
    background: url('https://www1.imperialhero.org/web/public/assets/images/ui/popups/ornaments.png') repeat-x -232px 0;
}
]]></>).toString());

}
