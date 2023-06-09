!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ripplet=t()}(this,function(){"use strict";var m,h={className:"",color:"currentcolor",opacity:.1,spreadingDuration:".4s",spreadingDelay:"0s",spreadingTimingFunction:"linear",clearing:!0,clearingDuration:"1s",clearingDelay:"0s",clearingTimingFunction:"ease-in-out",centered:!1,appendTo:"auto"},y=new Map;function t(e,n){var t=e.currentTarget,i=e.clientX,r=e.clientY;if(t instanceof Element){var o=n?Object.keys(h).reduce(function(e,t){return e[t]=(n.hasOwnProperty(t)?n:h)[t],e},{}):h;m||((g=document.createElement("div")).innerHTML='<div style="float:left;position:relative;isolation:isolate;pointer-events:none"><div style="position:absolute;overflow:hidden;transform-origin:0 0"><div style="border-radius:50%;transform:scale(0)"></div></div></div>',m=g.firstChild);var a=t.getBoundingClientRect();if(o.centered&&"false"!==o.centered)i=a.left+.5*a.width,r=a.top+.5*a.height;else{if("number"!=typeof i||"number"!=typeof r)return;var l=1/(+getComputedStyle(document.body).zoom||1);i*=l,r*=l}var c=getComputedStyle(t),d=function(e){var t=e&&/^var\((--.+)\)$/.exec(e);return t?c.getPropertyValue(t[1]):e},s=function(e,t){if(t&&"auto"!==t)return"target"===t?e:"parent"===t?e.parentElement:document.querySelector(t);for(;e&&(e instanceof SVGElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLImageElement||e instanceof HTMLHRElement);)e=e.parentElement;return e}(t,o.appendTo),p=s.appendChild(m.cloneNode(!0));p.style.zIndex=(+c.zIndex||0)+1;var f=p.firstChild,u=f.getBoundingClientRect(),e=f.style;e.top=a.top-u.top+"px",e.left=a.left-u.left+"px",e.width=a.width+"px",e.height=a.height+"px",e.opacity=d(o.opacity),e.borderTopLeftRadius=c.borderTopLeftRadius,e.borderTopRightRadius=c.borderTopRightRadius,e.borderBottomLeftRadius=c.borderBottomLeftRadius,e.borderBottomRightRadius=c.borderBottomRightRadius,e.clipPath=c.clipPath;var u=f.getBoundingClientRect(),g=a.width/u.width,l=a.height/u.height;e.transform="scale("+g+","+l+") translate("+(a.left-u.left)+"px,"+(a.top-u.top)+"px)";g=Math.max(i-a.left,a.right-i),l=Math.max(r-a.top,a.bottom-r),u=Math.sqrt(g*g+l*l),g=f.firstChild,l=g.style,f=d(o.color);return l.backgroundColor=/^currentcolor$/i.test(f)?c.color:f,g.className=o.className,l.width=l.height=u+u+"px","rtl"===getComputedStyle(s).direction?l.marginRight=a.right-i-u+"px":l.marginLeft=i-a.left-u+"px",l.marginTop=r-a.top-u+"px",l.transition="transform "+d(o.spreadingDuration)+" "+d(o.spreadingTimingFunction)+" "+d(o.spreadingDelay)+",opacity "+d(o.clearingDuration)+" "+d(o.clearingTimingFunction)+" "+d(o.clearingDelay),g.addEventListener("transitionend",function(e){"opacity"===e.propertyName&&p.parentElement&&p.parentElement.removeChild(p)}),o.clearing&&"false"!==o.clearing?l.opacity="0":((o=y.get(t))||y.set(t,o=new Map),o.set(p,g)),g.offsetWidth,l.transform="",p}}t.clear=function(e,t){var n,i;e?(n=y.get(e))&&(t?((i=n.get(t))&&(i.style.opacity="0"),n.delete(t),0===n.size&&y.delete(e)):(n.forEach(function(e){return e.style.opacity="0"}),y.delete(e))):(y.forEach(function(e){return e.forEach(function(e){return e.style.opacity="0"})}),y.clear())},t.defaultOptions=h,t._ripplets=y;var n=Object.freeze({__proto__:null,defaultOptions:h,default:t});return Object.keys(n).forEach(function(e){t[e]=n[e]}),t});


window.onload = function() {
    var elements = document.querySelectorAll('.tborder .vbmenu_control a, .button:not(input[type=text]), .vbmenu_option');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mousedown', function(e) {
            ripplet(e);
        });
        console.log('AwesomeRead: [Processing Control]');
    }
    var els = document.querySelectorAll('.vb_postbit div table tr td div:first-child:not(.smallfont)');
    for (var i = 0; i < els.length; i++) {
        var t = document.createElement('span');
        t.style.display = 'block';
        t.style.fontWeight = "bold";
        t.textContent = "Posted by " + els[i].querySelector('strong').textContent;
        els[i].parentElement.appendChild(t);
    }
    
//    if (document.querySelectorAll('.header_container .header table tbody tr[align=center] .vbmenu_control')) {
//        console.log('Loggedin');
//    } else {
//        console.log('LoggedinNot');
//    }
    if (document.querySelector('form[action="search.php"] input[name=query], form[action="forums/search.php"] input[name=query]')) {
        document.querySelector('form[action="search.php"] input[name=query], form[action="forums/search.php"] input[name=query').setAttribute('placeholder', 'Search Forums...');
    }
    if (document.querySelector('.tfoot .smallfont strong')) {
        document.querySelector('.tfoot .smallfont strong').innerHTML += ' - <a href="javascript:alert(\'Website styling enhanced with AwesomeRead, an independent browser extension by mrfakename. AwesomeRead is not affiliated with MobileRead forums. If you like AwesomeRead, please give us a review on your browser extension store!\')">AwesomeRead</a> - <a href="https://github.com/fakerybakery/awesomeread" target="_blank">AwesomeRead GitHub</a>';
    }
    /*Check If Logged IN*/
    if (!document.querySelectorAll('.header_container td.vbmenu_control')[6]) {
        if (!window.location.href.includes('forums/register.php') && !window.location.href.includes('forums/login.php')) {
            document.head.innerHTML = '<title>Please Log In</title>';
            document.body.innerHTML = '<h1>Please Login</h1><p>AwesomeRead only works for logged-in users. If you would not like to login, please disable AwesomeRead.</p><form action="/forums/login.php?do=login" method="post"><p>Your Username:</p><input type="text" name="vb_login_username" placeholder="Your Username..."><p>Your Password:</p><input type="password" name="vb_login_password" placeholder="Your Password..."><input type="hidden" name="s"><input type="hidden" name="securitytoken" value="guest"><input type="hidden" name="do" value="login"><p><label for="cb_cookieuser_navbar"><input type="checkbox" name="cookieuser" value="1" checked>Remember Me?</label><p><button type="submit">Login</button></form>';
        }
    }
}