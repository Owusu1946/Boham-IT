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

const textB = document.querySelector(".text.first-text");
const textLoadB = () => {
    setTimeout(() => {
        text.textContent = "Flexible";
    }, 16000
    );

    setTimeoutB(() => {
        text.textContent = "Available";
    }, 20000);
}

