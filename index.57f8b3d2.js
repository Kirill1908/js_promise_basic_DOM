var e=document.querySelector(".logo"),n=document.querySelector("body");function t(e,t){var o=document.createElement("div");o.className=e,o.textContent=t,n.append(o)}e.addEventListener("click",function(){new Promise(function(e,n){e()}).then(function(){t("message","Promise was resolved!")}).catch(function(){t("message error-message","Promise was rejected!")})}),new Promise(function(e,n){n(Error())}).catch(function(){setTimeout(function(){t("message error-message","Promise was rejected!")},3e3)});
//# sourceMappingURL=index.57f8b3d2.js.map