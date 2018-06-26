// ==UserScript==
// @name         Export Items for IH2
// @namespace    paulwratt.ih2
// @version      1.06
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
pw_ihSto = null;
pw_ihSta = null;
pw_ihA = '';
pw_ihJ = '';
pw_ihU = 'http://localhost/cgi-bin/php.cgi/ih2/';
pw_ihX = '';
function pw_ihDoExport(xAJ){
//  if (pw_ihA.length == 0 || pw_ihU.length == 0) return;
  if (pw_ihX.length > 0) {
    pw_ihWin = window.open();
    pw_ihWin.document.writeln('<form method="POST" action="' + pw_ihU + pw_ihA + '">');
    pw_ihWin.document.writeln('reference: <input name="xref" type="text"><br>');
    pw_ihWin.document.writeln('<textarea name="html" style="width:100%; height:100%;">');
    pw_ihWin.document.writeln(pw_ihX);
    pw_ihWin.document.writeln('</textarea>');
  if (xAJ.length > 0) {
    pw_ihWin.document.writeln('<textarea name="json" style="width:100%; height:100%;">');
    pw_ihWin.document.writeln(xAJ);
    pw_ihWin.document.writeln('</textarea>');
  }
    pw_ihWin.document.writeln('<input type=submit><form>');
//    pw_ihWin.document.forms[0].submit();
    pw_ihA = '';
    pw_ihX = '';
  }
}

function pw_ihSelectedStorehouse(){
  pw_ihX = '';
  pw_ihA = 'save-storehouse.php';
  $('div#storehouse div.mCSB_container div.active').each( function(i){
     pw_ihX = pw_ihX + this.outerHTML + '\n';
  });
  if (pw_ihX.length > 0) pw_ihDoExport(pw_ihSto);
}

function pw_ihAllStorehouse(){
  pw_ihX = '';
  pw_ihA = 'save-storehouse.php';
  $('div#storehouse div.mCSB_container div.grid.pointer').each( function(i){
     pw_ihX = pw_ihX + this.outerHTML + '\n';
  });
  if (pw_ihX.length > 0) pw_ihDoExport(pw_ihSto);
}

function pw_ihCraftingReport(){
  pw_ihX = '';
  pw_ihA = 'save-craftingReport.php';
  $('div#craftingReport div.slick-track').each( function(i){
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
pw_ihEBR = false;

function pw_ihCheck(){
  if (pw_ihCC == -1) return;
  if (!pw_ihEBS){
    if($('div#storehouse').length == 1){
      $('<div id="pw_button_ESA" class="pw-Sbutton pointer" style="" title="Export All"><span class="settings-icon hotkeys" style="margin-top: 6px;"></span></div>').insertAfter($('div#storehouse div.show-hint.pointer'));
      $('<div id="pw_button_ESS" class="pw-Sbutton pointer" style="" title="Export Selected"><span class="settings-icon hotkeys" style="margin-top: 6px;"><span style="width: inherit; height: inherit; display: inherit; background-color: rgba(23,125,198,.6);"></span></span></div>').insertAfter($('div#pw_button_ESA'));
      $('div#pw_button_ESA').click(pw_ihAllStorehouse);
      $('div#pw_button_ESS').click(pw_ihSelectedStorehouse);
      pw_ihEBS = true;
      pw_ihCC = 10;
    }
  }
  if (!pw_ihEBR){
    if($('div#craftingReport').length == 1){
      $('<div id="pw_button_ERA" class="pw-Sbutton pointer" style="" title="Export All"><span class="settings-icon hotkeys" style="margin-top: 6px;"></span></div>').insertAfter($('div#craftingReport div.pointer.popup-close'));
      $('div#pw_button_ERA').click(pw_ihCraftingReport);
      pw_ihEBR = true;
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

function squirtXHR(x){
    pw_ihWin = window.open();
    if (!pw_ihWin.document) { console.log('enable popups: [*.]imperialhero.org (JSON Pretty Print)'); return; }
    pw_ihWin.document.writeln('<form method="POST" action="http://jsonprettyprint.com/json-pretty-printer.php"><textarea name="json_data" style="width:100%; height:100%;">');
    pw_ihWin.document.writeln(x);
    pw_ihWin.document.writeln('</textarea><input type=submit><form>');
    pw_ihWin.document.forms[0].submit();
}

$(document).ajaxComplete((event, jqXHR, ajaxObj) => {
  if (pw_ihCC != -1) { pw_ihCheck(); }
  if (pw_ihEBS && ajaxObj.url == 'storehouse') { pw_ihSto = jqXHR.responseText; }
  console.log(ajaxObj);
  console.log(jqXHR);
});

]]></>).toString());
    pw_ihScript.appendChild(pw_ihCode);
    document.head.appendChild(pw_ihScript);
    pw_ihCode = '';

    GM_addStyle((<><![CDATA[
.pw-Sbutton {
    position: absolute;
    top: -5px;
    right: 22px;
    z-index: 3;
    width: 34px;
    height: 34px;
    background: url('https://www1.imperialhero.org/web/public/assets/images/ui/popups/ornaments.png') repeat-x -232px 0;
}
div#pw_button_ESA.pw-Sbutton {
    right: 56px;
}
div#pw_button_ESS.pw-Sbutton {
    right: 90px;
}
]]></>).toString());

}
