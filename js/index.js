// contador
const experiencia = document.querySelector(".experiencia")
const CheckReload = (() => {
    let counter = 1;
    return () => {
        counter++;
        return counter;
    };
})();
const refreshId = setInterval(
    () => {
        const properID = CheckReload();
        experiencia.innerHTML = properID
        if (properID > 44) {
            clearInterval(refreshId);
        }
    },
    50
);
