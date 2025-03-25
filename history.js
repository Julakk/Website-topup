document.addEventListener("DOMContentLoaded", function () {
    let historyList = document.getElementById("history-list");
    let history = JSON.parse(localStorage.getItem("topupHistory")) || [];

    if (history.length === 0) {
        historyList.innerHTML = "<p>Belum ada pesanan.</p>";
    } else {
        history.forEach(item => {
            let listItem = document.createElement("li");
            listItem.textContent = `Game: ${item.game} | ID: ${item.userId} | Nominal: ${item.nominal} Diamonds`;
            historyList.appendChild(listItem);
        });
    }
});
