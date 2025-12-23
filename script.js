const copyBtn = document.getElementById("copyBtn");
const copyLabel = document.getElementById("copyLabel");

copyBtn.addEventListener("click", copyText);

function getStoryText() {
    return `Придумай сказку на тему ${t1.value}.
Главный герой — ${t2.value}, он ${t3.value}.
Его друг — ${t4.value}.
Однажды с ними произошло ${t5.value}.
В конце истории всё закончилось так: ${t6.value}.`;
}

function copyText() {
    const text = getStoryText();

    // 1️⃣ Пытаемся современный Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(showSuccess)
            .catch(fallbackCopy);
    } else {
        fallbackCopy();
    }
}

function fallbackCopy() {
    const textarea = document.createElement("textarea");
    textarea.value = getStoryText();

    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
        document.execCommand("copy");
        showSuccess();
    } catch (err) {
        alert("Копирование не поддерживается в этой среде");
    }

    document.body.removeChild(textarea);
}

function showSuccess() {
    copyBtn.classList.add("success");
    setTimeout(() => copyBtn.classList.remove("success"), 600);

    copyLabel.classList.add("show");
    setTimeout(() => copyLabel.classList.remove("show"), 2000);
}
