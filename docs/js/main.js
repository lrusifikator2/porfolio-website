function animate_link_self(e,t){document.querySelector(e).classList.add("animation_whitefade"),setTimeout(function(){window.open(t,"_self")},400)}function animate_link_blank(e,t){var n=document.querySelector(e);n.classList.add("animation_whitefade"),setTimeout(function(){window.open(t,"_blank"),n.classList.remove("animation_whitefade")},150),document.querySelector(".profile-block__messageme").style.color="#202020"}function animate_link(e,t,n){document.querySelector(".profile-block__messageme").style.color="white","_blank"!=n?animate_link_self(e,t):animate_link_blank(e,t)}var burger_active=0;function add_burger(){document.querySelector(".menu__burger").onclick=function(){document.querySelector(".side-menu").style.transform=burger_active?(burger_active=0,"translateX(-100%)"):(burger_active=1,"translateX(0)")}}function menu_func(){setTimeout(function(){document.querySelector(".menu").style.top="-1px"},10),add_burger()}function main_func(){var t=document.querySelectorAll(".main-block");setTimeout(function(){for(var e=0;e<t.length;e++)t[e].classList.add("scale__dest");document.querySelector(".profile-block").classList.add("scale__dest")},10),setTimeout(function(){document.querySelector(".profile-block_r").classList.add(".emmet-trftx__right"),document.querySelector(".profile-block_l").classList.add(".emmet-trftx__left")},100),set_animate_link(),set_animate_panel()}function set_animate_panel(){for(var e=[".main-block"],t=0;t<e.length;t++)for(var n=document.querySelectorAll(e[t]),r=0;r<n.length;r++)n[r].onclick=function(){var e=this.getAttribute("href");event.target.classList.add("animation_item"),animate_link(".main__inner",e,"_self")}}function set_animate_link(){for(var e=[".profile-block__messageme",".social__link"],t=0;t<e.length;t++)for(var n=document.querySelectorAll(e[t]),r=0;r<n.length;r++)n[r].onclick=function(){animate_link(".main__inner",this.getAttribute("href"),this.getAttribute("target"))}}function check_if_email(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}function submit(){var e=new XMLHttpRequest,t=document.querySelector("#email").value,n=document.querySelector("#name").value,r=document.querySelector("#message").value;return""===n?(show_error(document.querySelectorAll(".contactme__inpwrapper")[0],"This field is required"),-1):""===t?(show_error(document.querySelectorAll(".contactme__inpwrapper")[1],"This field is required"),-1):check_if_email(t)?(e.open("POST","https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfogzpcJWXMB_wCdbBvIsSHNeroCzOmGkX1PoY3gDaGFGwVw/formResponse",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("emailAddress="+t+"&entry.2109138769="+n+" &entry.1400602646= "+r),void animate_form()):(show_error(document.querySelectorAll(".contactme__inpwrapper")[1],"Should be an actual email address"),-1)}function hide_all_errors_contactme(){for(var e=document.querySelectorAll(".contactme__inpwrapper"),t=0;t<e.length;t++)e[t].querySelector(".contactme__errorwrapper").classList.remove("contactme__showerror")}function show_error(e,t){hide_all_errors_contactme();var n=e.querySelector(".contactme__errorwrapper");n.classList.add("contactme__showerror"),n.querySelector(".contactme__text").innerText=t}function animate_form(){document.querySelector(".thankyou-note").classList.add("fadein_anim"),document.querySelector(".contactme").classList.add("fadeout_anim")}null!==document.querySelector(".menu")?menu_func():main_func();