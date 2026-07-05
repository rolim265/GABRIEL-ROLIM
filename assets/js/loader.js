window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    // pequeno delay pra sensação cinematográfica
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.8s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1200);
});