window.onload = function(){
    const textEl = document.getElementById("demo")

    window.addEventListener("resize", function(){
        window.innerWidth>= 960
        ? textEl.innerHTML="데스크탑"
        : window.innerWidth >= 768
        ? textEl.innerHTML="태블릿PC"
        : textEl.innerHTML="스마트폰"
});
};