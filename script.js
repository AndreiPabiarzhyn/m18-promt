document.getElementById("copyBtn").addEventListener("click", copyText);

function copyText() {
    const text = 
`Придумай сказку на тему ${t1.value}.
Главный герой — ${t2.value}, он ${t3.value}.
Его друг — ${t4.value}.
Однажды с ними произошло ${t5.value}.
В конце истории всё закончилось так: ${t6.value}.`;

    navigator.clipboard.writeText(text)
        .then(() => alert("Текст скопирован!"));
}
