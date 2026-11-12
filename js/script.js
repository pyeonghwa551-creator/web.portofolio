const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

themeToggle.addEventListener("click", () => {
    const isLight = document.body.dataset.theme !== "light";
    document.body.dataset.theme = isLight ? "light" : "dark";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Ganti ke mode gelap" : "Ganti ke mode terang"
    );
    themeLabel.textContent = isLight ? "Mode Terang" : "Mode Gelap";
});

const instagramPopup = document.getElementById("instagramPopup");
if (instagramPopup) {
    const instagramTrigger = document.querySelector(".instagram-trigger");
    const closePopupButton = instagramPopup.querySelector(".close-button");

    function openInstagramPopup() {
        instagramPopup.classList.add("active");
        instagramPopup.setAttribute("aria-hidden", "false");
        closePopupButton.focus();
    }

    function closeInstagramPopup() {
        instagramPopup.classList.remove("active");
        instagramPopup.setAttribute("aria-hidden", "true");
        instagramTrigger.focus();
    }

    instagramTrigger.addEventListener("click", openInstagramPopup);
    closePopupButton.addEventListener("click", closeInstagramPopup);

    instagramPopup.addEventListener("click", (event) => {
        if (event.target === instagramPopup) {
            closeInstagramPopup();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && instagramPopup.classList.contains("active")) {
            closeInstagramPopup();
        }
    });
}
