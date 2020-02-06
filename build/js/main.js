function animate_link_self(query, url) {
    document.querySelector(query).classList.add("animation_whitefade");

    setTimeout(function() {
        window.open(url, "_self");
    }, 400);
}

function animate_link_blank(query, url) {
    let el = document.querySelector(query);
    el.classList.add("animation_whitefade");

    setTimeout(function() {
        window.open(url, "_blank");
        el.classList.remove("animation_whitefade");
    }, 150);

    document.querySelector(".main__messageme").style.color = "#202020";
}

function animate_link(query, url, open_type) {
    document.querySelector(".main__messageme").style.color = "white";

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
    let main_inner = document.querySelector(".main__inner");
    let items = document.querySelectorAll(".main__item");

    main_inner.style.left = "-" + main_inner.clientWidth / 7;
    main_inner.style.top = "-" + main_inner.clientHeight / 4.9;

    for (var i = 0; i < items.length; i++) {
        items[i].classList.add("main__item_scale");
    }

    setTimeout(function() {
        document.querySelector(".main__item_r").style.transform = "translateX(1px) scale(1)";
        document.querySelector(".main__item_l").style.transform = "translateX(-1px) scale(1)";
    }, 100);

    set_animate_link();
    set_animate_panel();
}


function set_animate_panel() {
    const animate_pannels = [".main__item"];

    for (let i = 0; i < animate_pannels.length; i++) {
        let all_el = document.querySelectorAll(animate_pannels[i]);

        for (let j = 0; j < all_el.length; j++) {
            if (all_el[j].classList.contains("main__item_profile"))
                continue;

            all_el[j].onclick = function() {
                let href = this.getAttribute("href");
                event.target.classList.add("animation_item");

                animate_link(".main", href, "_self");
            }
        }
    }
}

function set_animate_link() {
    const animate_buttons = [".main__messageme", ".social__link"];

    for (let i = 0; i < animate_buttons.length; i++) {
        let all_el = document.querySelectorAll(animate_buttons[i]);
        for (let j = 0; j < all_el.length; j++) {
            all_el[j].onclick = function() {
                let href = this.getAttribute("href");
                let target = this.getAttribute("target");

                animate_link(".main", href, target);
            }
        }
    }
}

(function() {
    let menu = document.querySelector(".menu");

    if (document.querySelector(".main") !== null)
        main_func();
    else if (menu !== null)
        menu_func(menu);

})();
//# sourceMappingURL=../maps/main.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFuaW1hdGVfbGlua19zZWxmKHF1ZXJ5LCB1cmwpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0aW9uX3doaXRlZmFkZVwiKTsgXHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdHdpbmRvdy5vcGVuKHVybCwgXCJfc2VsZlwiKTtcclxuXHR9LCA0MDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlX2xpbmtfYmxhbmsocXVlcnksIHVybCkge1xyXG5cdGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG5cdGVsLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRpb25fd2hpdGVmYWRlXCIpO1xyXG5cdFx0XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0d2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcclxuXHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRpb25fd2hpdGVmYWRlXCIpO1xyXG5cdH0sIDE1MCk7XHRcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19tZXNzYWdlbWVcIikuc3R5bGUuY29sb3IgPSBcIiMyMDIwMjBcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZV9saW5rKHF1ZXJ5LCB1cmwsIG9wZW5fdHlwZSkge1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fbWVzc2FnZW1lXCIpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1x0XHJcblx0XHJcblx0aWYob3Blbl90eXBlICE9IFwiX2JsYW5rXCIpe1xyXG5cdFx0YW5pbWF0ZV9saW5rX3NlbGYocXVlcnksIHVybCk7IFxyXG5cdH0gZWxzZSB7XHJcblx0XHRhbmltYXRlX2xpbmtfYmxhbmsocXVlcnksIHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51X2Z1bmMobWVudSl7XHJcblx0bWVudS5zdHlsZS50b3AgPSBcIi0xcHhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbl9mdW5jKCl7XHJcblx0bGV0IG1haW5faW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2lubmVyXCIpO1xyXG5cdGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9faXRlbVwiKTtcclxuXHJcblx0bWFpbl9pbm5lci5zdHlsZS5sZWZ0ID0gXCItXCIgKyBtYWluX2lubmVyLmNsaWVudFdpZHRoIC8gNztcclxuXHRtYWluX2lubmVyLnN0eWxlLnRvcCAgPSBcIi1cIiArIG1haW5faW5uZXIuY2xpZW50SGVpZ2h0IC8gNC45O1xyXG5cclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0aXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm1haW5fX2l0ZW1fc2NhbGVcIik7XHJcblx0fVxyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19pdGVtX3JcIikuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDFweCkgc2NhbGUoMSlcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faXRlbV9sXCIpLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMXB4KSBzY2FsZSgxKVwiO1xyXG5cdH0sIDEwMCk7XHJcblxyXG5cdHNldF9hbmltYXRlX2xpbmsoKTtcclxuXHRzZXRfYW5pbWF0ZV9wYW5lbCgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0X2FuaW1hdGVfcGFuZWwoKXtcclxuXHRjb25zdCBhbmltYXRlX3Bhbm5lbHMgPSBbXCIubWFpbl9faXRlbVwiXTtcclxuXHRcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYW5pbWF0ZV9wYW5uZWxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRsZXQgYWxsX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhbmltYXRlX3Bhbm5lbHNbaV0pO1xyXG5cdFx0XHJcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgYWxsX2VsLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGlmKGFsbF9lbFtqXS5jbGFzc0xpc3QuY29udGFpbnMoXCJtYWluX19pdGVtX3Byb2ZpbGVcIikpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRhbGxfZWxbal0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdFx0XHRldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFuaW1hdGlvbl9pdGVtXCIpO1xyXG5cdFx0XHJcblx0XHRcdFx0YW5pbWF0ZV9saW5rKFwiLm1haW5cIiwgaHJlZiwgXCJfc2VsZlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0X2FuaW1hdGVfbGluaygpe1xyXG5cdGNvbnN0IGFuaW1hdGVfYnV0dG9ucyA9IFtcIi5tYWluX19tZXNzYWdlbWVcIiwgXCIuc29jaWFsX19saW5rXCJdO1xyXG5cclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYW5pbWF0ZV9idXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRsZXQgYWxsX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhbmltYXRlX2J1dHRvbnNbaV0pO1xyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IGFsbF9lbC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRhbGxfZWxbal0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIik7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YW5pbWF0ZV9saW5rKFwiLm1haW5cIiwgaHJlZiwgdGFyZ2V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cdGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5cdFxyXG5cdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKSAhPT0gbnVsbClcclxuXHRcdG1haW5fZnVuYygpO1xyXG5cdGVsc2UgaWYobWVudSAhPT0gbnVsbClcclxuXHRcdG1lbnVfZnVuYyhtZW51KTtcclxuXHJcbn0pKCk7Il0sImZpbGUiOiIuLi9qcy9tYWluLmpzIn0=
