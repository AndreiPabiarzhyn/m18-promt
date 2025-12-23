const copyBtn = document.getElementById("copyBtn");
const copyLabel = document.getElementById("copyLabel");

copyBtn.addEventListener("click", copyText);

function copyText() {
    const text =
`Придумай сказку на тему ${t1.value}.
Главный герой — ${t2.value}, он ${t3.value}.
Его друг — ${t4.value}.
Однажды с ними произошло ${t5.value}.
В конце истории всё закончилось так: ${t6.value}.`;

    navigator.clipboard.writeText(text).then(() => {
        // анимация кнопки
        copyBtn.classList.add("success");
        setTimeout(() => copyBtn.classList.remove("success"), 600);

        // показать надпись
        copyLabel.classList.add("show");
        setTimeout(() => copyLabel.classList.remove("show"), 2000);
    });
}

