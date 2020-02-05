function animate_menu_item(obj, url) {
    obj.classList.add("animation_item");
    animate_link_self(".main", url);
}

function animate_link_self(query, url) {
    document.querySelector(query).classList.add("animation_whitefade");

    setTimeout(function() {
        window.open(url, "_self");
    }, 400);
}

function animate_link_blank(query, url) {
    var el = document.querySelector(query);
    el.classList.add("animation_whitefade");

    setTimeout(function() {
        window.open(url, "_blank");
        el.classList.remove("animation_whitefade");
    }, 150);
}

function animate_link(query, url, open_type) {
    if (open_type != "_blank") {
        animate_link_self(query, url);
    } else {
        animate_link_blank(query, url);
    }
}


function menu_func(menu) {
    menu.style.top = "-1px";
}

function main_func() {
    var main_inner = document.querySelector(".main__inner");
    var items = document.querySelectorAll(".main__item");

    main_inner.style.left = "-" + main_inner.clientWidth / 7;
    main_inner.style.top = "-" + main_inner.clientHeight / 4.9;

    for (var i = 0; i < items.length; i++) {
        items[i].classList.add("main__item_scale");
    }

    setTimeout(function() {
        document.querySelector(".main__item_r").style.transform = "translateX(1px) scale(1)";
        document.querySelector(".main__item_l").style.transform = "translateX(-1px) scale(1)";
    }, 100);
}

(function() {
    var menu = document.querySelector(".menu");

    if (document.querySelector(".main") !== null)
        main_func();
    else if (menu !== null)
        menu_func(menu);

})();
//# sourceMappingURL=../maps/main.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFuaW1hdGVfbWVudV9pdGVtKG9iaiwgdXJsKXtcclxuXHRvYmouY2xhc3NMaXN0LmFkZChcImFuaW1hdGlvbl9pdGVtXCIpOyBcclxuXHRhbmltYXRlX2xpbmtfc2VsZihcIi5tYWluXCIsIHVybCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVfbGlua19zZWxmKHF1ZXJ5LCB1cmwpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0aW9uX3doaXRlZmFkZVwiKTsgXHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKHVybCwgXCJfc2VsZlwiKTtcclxuXHR9LCA0MDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlX2xpbmtfYmxhbmsocXVlcnksIHVybCkge1xyXG5cdHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG5cdGVsLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRpb25fd2hpdGVmYWRlXCIpO1xyXG5cdFxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XHJcblx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0aW9uX3doaXRlZmFkZVwiKTtcclxuXHR9LCAxNTApO1x0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVfbGluayhxdWVyeSwgdXJsLCBvcGVuX3R5cGUpIHtcdFxyXG5cdGlmKG9wZW5fdHlwZSAhPSBcIl9ibGFua1wiKXtcclxuXHRcdGFuaW1hdGVfbGlua19zZWxmKHF1ZXJ5LCB1cmwpOyBcclxuXHR9IGVsc2Uge1xyXG5cdFx0YW5pbWF0ZV9saW5rX2JsYW5rKHF1ZXJ5LCB1cmwpO1xyXG5cdH1cclxufVxyXG5cdFxyXG5cclxuZnVuY3Rpb24gbWVudV9mdW5jKG1lbnUpe1xyXG5cdG1lbnUuc3R5bGUudG9wID0gXCItMXB4XCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1haW5fZnVuYygpe1xyXG5cdHZhciBtYWluX2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19pbm5lclwiKTtcclxuXHR2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2l0ZW1cIik7XHJcblxyXG5cdG1haW5faW5uZXIuc3R5bGUubGVmdCA9IFwiLVwiICsgbWFpbl9pbm5lci5jbGllbnRXaWR0aCAvIDc7XHJcblx0bWFpbl9pbm5lci5zdHlsZS50b3AgID0gXCItXCIgKyBtYWluX2lubmVyLmNsaWVudEhlaWdodCAvIDQuOTtcclxuXHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKXtcclxuXHRcdGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJtYWluX19pdGVtX3NjYWxlXCIpO1xyXG5cdH1cclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faXRlbV9yXCIpLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxcHgpIHNjYWxlKDEpXCI7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2l0ZW1fbFwiKS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTFweCkgc2NhbGUoMSlcIjtcclxuXHR9LCAxMDApO1xyXG59XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblx0dmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcblx0XHJcblx0aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpICE9PSBudWxsKVxyXG5cdFx0bWFpbl9mdW5jKCk7XHJcblx0ZWxzZSBpZihtZW51ICE9PSBudWxsKVxyXG5cdFx0bWVudV9mdW5jKG1lbnUpO1xyXG5cclxufSkoKTsiXSwiZmlsZSI6Ii4uL2pzL21haW4uanMifQ==
