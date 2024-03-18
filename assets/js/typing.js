const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Faster";
    }

        , 0);

    setTimeout(() => {
        text.textContent = "Better";
    }

        , 4000);

    setTimeout(() => {
        text.textContent = "Cheaper";
    }

        , 8000);
}

textLoad();
setInterval(textLoad, 12000);