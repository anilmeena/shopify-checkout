var pSettings={ 
progressBg: '#23468c', 
progressBg2: '#d9e3f7', 
 
highDemandText: "An item you ordered is in high demand. No worries, we have 
reserved your order.", 
discountText: "Enter your discount code here", 
 
whyUsImg1: 'https://cdn.shopify.com/s/files/1/1319/2435/t/4/assets/money-
back.png', 
whyUsTitle1: "30-day Satisfaction guarantee with Money Back", 
whyUsText1: "If you're not satisfied with your products we will issue a full 
refund, no questions asked.", 
 
whyUsImg2: 'https://cdn.shopify.com/s/files/1/1319/2435/t/4/assets/mail-
truck.png', 
whyUsTitle2: "Over 34.245 successfully shipped orders", 
whyUsText2: "We made as much happy customers as many orders we 
shipped. You simply have to join our big family.", 
} 
function crC(e,t,s){if(s){var n=new Date;n.setTime(n.getTime()+60*s*1e3);var 
i="; expires="+n.toUTCString()}else i="";document.cookie=e+"="+t+i+"; 
path=/"}function rdC(e){for(var 
t=e+"=",s=document.cookie.split(";"),n=0;n<s.length;n++){for(var i=s[n];" 
"==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return 
i.substring(t.length,i.length)}return null}function eSC(e){crC(e,"",-1)}function 
stTM(e,t,s){var n,i,d;function a(){n=t-((Date.now()-
e)/1e3|0),d=n%60|0,i=(i=n/60|0)<10?"0"+i:i,d=d<10?"0"+d:d,s.textContent=i+":"
+d,n<=0&&(clearInterval(c),document.getElementById("ct836").innerHTML="Or
der reservation ended.",e=Date.now()+1e3)}a();var c=setInterval(a,1e3)}var 
wnd=window.location.href,chsg='<svg xmlns="http://www.w3.org/2000/svg" 
width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M20.285 2l-
11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-
15.285z"/></svg>';wnd.indexOf("checkout")>-
1&&(window.onload=function(){if(wnd.indexOf("checkout")>-
1&&(dsXt=document.getElementById("checkout_reduction_code"),document.bo
dy.insertAdjacentHTML("afterbegin",'<div class="content prH7"><div 
class="wrap"><div class="ar64"><div id="sp1" class="s8 s8c"><span 
id="spn1">1.Customer</span></div><div id="sp2" class="s8"><span 
id="spn2">2.Shipping</span></div><div id="sp3" class="s8"><span 
id="spn3">3.Payment</span></div></div></div></div>'),-
1===wnd.indexOf("thank_you"))){document.getElementsByClassName("main__
content")[0].insertAdjacentHTML("afterbegin",'<div><div id="ct836" 
style="display:block;background:#fff5d2;padding:10px 20px;border:1px solid 
#fac444;font-size:14px;color:#2c2c2c;font-weight:bold;-webkit-border-radius: 
5px;-moz-border-radius: 5px;border-radius: 5px; margin:5px 0px 20px 0px">Use 
the discount code “SAVE5” in the next <span id="time"></span> minutes, and 
save an extra 5% on your order!</div></div>');var 
e=600,t=Date.now(),s=rdC("pRtC");s?t<s?e=(s-
t)/1e3:(eSC("pRtC"),crC("pRtC",Date.now()+1e3*e,e+1)):crC("pRtC",Date.now()+1e3*e,e+1),display=document.querySelector("#time"),stTM(t,e,display),docum
ent.getElementsByClassName("main__content")[0].insertAdjacentHTML("afterb
egin",'<div style="display:table"><div style="display:table-cell;vertical-
align:middle"><img 
src="https://cdn.shopify.com/s/files/1/1319/2435/t/4/assets/flame_24.png?10413
921915994220473"></div><div style="font-weight:bold;padding-
left:5px">'+pSettings.highDemandText+"</div></div>"),""!=pSettings.discountTe
xt&&dsXt&&dsXt.setAttribute("placeholder",pSettings.discountText),document.g
etElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend",'<di
v style="display:block;padding-top:10px"><span style="font-size:11px;line-font-
style=italic;float:right;text-align:right">Guaranteed safe and secure 
checkout!</span><img 
src="https://cdn.shopify.com/s/files/1/1319/2435/t/4/assets/paybadges.jpg" 
style="max-float: right;margin-top: 
5px;"></div>'),document.getElementsByClassName("order-
summary__sections")[0].insertAdjacentHTML("beforeend",'<div 
style="position:relative;padding:10px 0px"><div class="wyustit" 
style="position:relative;z-index:1;text-align:center"><span 
style="background:#fafafa;padding:0 15px">Why choose us?</span></div><div 
style="display:table;vertical-align:middle;border-spacing:0px 20px"><div 
class="wyuscs"><div class="wyuscs1"><img 
src="'+pSettings.whyUsImg1+'"></div><div 
class="wyuscs2"><span>'+pSettings.whyUsTitle1+"</span><p>"+pSettings.wh
yUsText1+'</p></div></div><div class="wyuscs"><div class="wyuscs1"><img 
src="'+pSettings.whyUsImg2+'"></div><div 
class="wyuscs2"><span>'+pSettings.whyUsTitle2+"</span><p>"+pSettings.wh
yUsText2+"</p></div></div></div></div>")}b1j=document.getElementById("sp1"
),b2j=document.getElementById("sp2"),b3j=document.getElementById("sp3"),c
1j=document.getElementById("spn1"),c2j=document.getElementById("spn2"),c3
j=document.getElementById("spn3"),wnd.indexOf("previous_step=contact_infor
mation")>-1&&(b1j.className="s8 s8c",b2j.className="s8 
s8c",c1j.insertAdjacentHTML("afterbegin",chsg)),wnd.indexOf("previous_step=s
hipping_method")>-1&&(b1j.className="s8 s8c",b2j.className="s8 
s8c",b3j.className="s8 
s8c",c1j.insertAdjacentHTML("afterbegin",chsg),c2j.insertAdjacentHTML("afterb
egin",chsg)),wnd.indexOf("thank_you")>-1&&(b1j.className="s8 
s8c",b2j.className="s8 s8c",b3j.className="s8 
s8c",c1j.insertAdjacentHTML("afterbegin",chsg),c2j.insertAdjacentHTML("afterb
egin",chsg),c3j.insertAdjacentHTML("afterbegin",chsg))});var 
b7=document.createElement("style");b7.type="text/css";b7.innerHTML='.main 
ul.breadcrumb{display:none!important}.content.prH7{padding:8px 
0}.ar64{width:100%}.ar64 .s8{font-size:14px;text-
align:center;color:#fff;cursor:default;margin:0 3px;padding:9px 10px 9px 
30px;float:left;position:relative;background-color:'+pSettings.progressBg2+';-
webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-
select:none;transition:all 2s ease;width:20%}.ar64 .s8:after,.ar64 
.s8:before{content:" ";position:absolute;top:0;right:-17px;width:0;height:0;border-
top:19px solid transparent;border-bottom:17px solid transparent;border-
left:17px solid '+pSettings.progressBg2+';z-index:2;transition:border-color .2s 
ease}.ar64 .s8:before{right:auto;left:0;border-left:17px solid #fff;z-index:0}.ar64 .s8:first-child:before{border:none}.ar64 .s8:first-child{margin-left:0;border-top-
left-radius:4px;border-bottom-left-radius:4px}.ar64 .s8 
span{position:relative}.ar64 .s8.s8c{color:#fff;background-
color:'+pSettings.progressBg+'}.ar64 .s8.s8c:after{border-left:17px solid 
'+pSettings.progressBg+'}.ar64 .s8 svg{position:absolute;left:-
17px;top:2px}.ar64 .s8:first-child svg{left:-16px}.wyustit:before{border-top:1px 
solid #dfdfdf;content:"";margin:0 
auto;position:absolute;top:50%;left:0;right:0;bottom:0;width:100%;z-index:-
1}.wyuscs{display:table-row;padding-
bottom:20px}.wyuscs1,.wyuscs2{display:table-cell;vertical-
align:middle}.wyuscs1{width:20%;font-size:15px}.wyuscs2{width:80%}.wyuscs2 
span{font-size:14px;font-weight:700;color:#666}.wyuscs2 p{font-
size:12px;color:#777}@media(min-width:450px){.ar64 .s8{min-width:29%}.ar64 
.s8 svg{position:relative!important;top:2px!important;left:-
10px!important}}@media(max-width:750px){.ar64 .s8{font-size:11px}.ar64 
.s8:first-child{padding-left:20px}}';document.body.appendChild(b7); 
