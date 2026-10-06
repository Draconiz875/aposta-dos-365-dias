const START_DATE = new Date(
    "2026-09-29T22:29:00-03:00"
);

const END_DATE = new Date(
    "2027-09-29T22:29:00-03:00"
);


const daysEl =
    document.getElementById("days");

const hoursEl =
    document.getElementById("hours");

const minutesEl =
    document.getElementById("minutes");

const secondsEl =
    document.getElementById("seconds");

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");

const statusLabel =
    document.getElementById("statusLabel");

const footerMessage =
    document.getElementById("footerMessage");

const startDateEl =
    document.getElementById("startDate");

const endDateEl =
    document.getElementById("endDate");


function pad(value) {
    return String(value).padStart(2, "0");
}


function formatDate(date) {

    return date.toLocaleDateString(
        "pt-BR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

}


startDateEl.textContent =
    formatDate(START_DATE);

endDateEl.textContent =
    formatDate(END_DATE);


function updateCounter() {

    const now = new Date();

    const totalDuration =
        END_DATE - START_DATE;

    const remaining =
        END_DATE - now;


    if (remaining <= 0) {

        daysEl.textContent = "0";

        hoursEl.textContent = "00";

        minutesEl.textContent = "00";

        secondsEl.textContent = "00";

        progressBar.style.width = "100%";

        progressText.textContent = "100%";

        statusLabel.textContent =
            "DESAFIO CONCLUÍDO";

        footerMessage.textContent =
            "VOCÊS CONSEGUIRAM! ❤️🎉";

        return;
    }


    const totalSeconds =
        Math.floor(
            remaining / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    daysEl.textContent =
        days;

    hoursEl.textContent =
        pad(hours);

    minutesEl.textContent =
        pad(minutes);

    secondsEl.textContent =
        pad(seconds);


    const elapsed =
        Math.min(
            Math.max(
                now - START_DATE,
                0
            ),
            totalDuration
        );


    const progress =
        totalDuration > 0
            ? (elapsed / totalDuration) * 100
            : 0;


    progressBar.style.width =
        `${progress}%`;

    progressText.textContent =
        `${progress.toFixed(1)}%`;
}


updateCounter();


setInterval(
    updateCounter,
    1000
);
