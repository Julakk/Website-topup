document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(window.location.search);
    let game = params.get("game");
    document.getElementById("game-title").innerText = game ? `Top-Up ${game}` : "Top-Up Game";

    let priceOptions = {
        "Mobile Legends": [
            { value: "Weekly Diamond Pass", price: 30321 },
            { value: "Weekly Diamond Pass x2", price: 59643 },
            { value: "Weekly Diamond Pass x3", price: 86963 },
            { value: "Weekly Diamond Pass x4", price: 115284 },
            { value: "Weekly Diamond Pass x5", price: 145606 },
            { value: "Twilight", price: 15569 },
            { value: "3 Diamonds", price: 1558 },
            { value: "5 Diamonds", price: 1958 },
            { value: "10 Diamonds (9 + 1 Bonus)", price: 4055 },
            { value: "12 Diamonds (11 + 1 Bonus)", price: 4800 },
            { value: "14 Diamonds (13 + 1 Bonus)", price: 4560 },
            { value: "18 Diamonds (17 + 1 Bonus)", price: 6571 },
            { value: "19 Diamonds (17 + 2 Bonus)", price: 7602 },
            { value: "28 Diamonds (25 + 3 Bonus)", price: 10150 },
            { value: "Twilight Pass", price: 149000 },
            { value: "36 Diamonds (33 + 3 Bonus)", price: 11326 },
            { value: "44 Diamonds (40 + 4 Bonus)", price: 13226 },
            { value: "46 Diamonds (42 + 4 Bonus)", price: 15383 },
            { value: "54 Diamonds (50 + 4 Bonus)", price: 16792 },
            { value: "71 Diamonds (64 + 7 Bonus)", price: 21865 },
            { value: "74 Diamonds (67 + 7 Bonus)", price: 23658 },
            { value: "85 Diamonds (77 + 8 Bonus)", price: 25433 },
            { value: "88 Diamonds (80 + 8 Bonus)", price: 26788 },
            { value: "110 Diamonds (100 + 10 Bonus)", price: 32985 },
            { value: "113 Diamonds (102 + 11 Bonus)", price: 35582 },
            { value: "128 Diamonds (117 + 11 Bonus)", price: 39150 },
            { value: "148 Diamonds (134 + 14 Bonus)", price: 45314 },
            { value: "170 Diamonds (154 + 16 Bonus)", price: 49865 },
            { value: "176 Diamonds (160 + 16 Bonus)", price: 52576 },
            { value: "184 Diamonds (167 + 17 Bonus)", price: 55643 },
            { value: "222 Diamonds (200 + 22 Bonus)", price: 62971 },
            { value: "240 Diamonds (217 + 23 Bonus)", price: 69084 },
            { value: "258 Diamonds (233 + 25 Bonus)", price: 74298 },
            { value: "277 Diamonds (250 + 27 Bonus)", price: 80462 },
            { value: "284 Diamonds (257 + 27 Bonus)", price: 82308 },
        ],
        "Free Fire": [
            { value: "BP Card", price: 48004 },
            { value: "Level Up Pass", price: 17335 },
            { value: "Member Mingguan", price: 35669 },
            { value: "Member Bulanan", price: 95008 },
            { value: "5 Diamonds", price: 1916 },
            { value: "10 Diamonds", price: 2833 },
            { value: "12 Diamonds", price: 2857 },
            { value: "20 Diamonds", price: 4665 },
            { value: "50 Diamonds", price: 9331 },
            { value: "70 Diamonds", price: 11122 },
            { value: "100 Diamonds", price: 16659 },
            { value: "140 Diamonds", price: 20244 },
            { value: "150 Diamonds", price: 23067 },
            { value: "210 Diamonds", price: 30365 }
        ],
        "PUBG Mobile": [
            { value: "60 UC", price: 16979 },
            { value: "120 UC", price: 33961 },
            { value: "300 + 25 Bonus UC", price: 81900 },
            { value: "600 + 60 Bonus UC", price: 161799 },
            { value: "1500 + 300 Bonus UC", price: 400166 },
            { value: "3000 + 850 Bonus UC", price: 790831 },
            { value: "6000 + 2100 Bonus UC", price: 1580163 },
            {value: "12000 + 4200 Bonus UC", price: 3200826 },
            
        ],
        "Genshin Impact": [
            { value: "60 Genesis Crystals", price: 16000 },
            { value: "300 Genesis Crystals", price: 80000 },
            { value: "980 Genesis Crystals", price: 240000 },
            { value: "1980 Genesis Crystals", price: 480000 },
            { value: "3280 Genesis Crystals", price: 800000 },
            { value: "6480 Genesis Crystals", price: 1600000 }
        ],
        "Call of Duty Mobile": [
            { value: "80 CP", price: 15000 },
            { value: "420 CP", price: 75000 },
            { value: "880 CP", price: 150000 },
            { value: "2000 CP", price: 350000 },
            { value: "4000 CP", price: 700000 },
            { value: "8000 CP", price: 1400000 }
        ],
        "Valorant": [
            { value: "125 VP", price: 16000 },
            { value: "625 VP", price: 80000 },
            { value: "1125 VP", price: 150000 },
            { value: "2000 VP", price: 250000 },
            { value: "4000 VP", price: 500000 },
            { value: "8000 VP", price: 1000000 }
        ],
        "Honkai Star Rail": [
            { value: "60 Oneiric Shards", price: 16000 },
            { value: "300 Oneiric Shards", price: 80000 },
            { value: "980 Oneiric Shards", price: 240000 },
            { value: "1980 Oneiric Shards", price: 480000 },
            { value: "3280 Oneiric Shards", price: 800000 },
            { value: "6480 Oneiric Shards", price: 1600000 }
        ],
        "League of Legends": [
            { value: "200 RP", price: 15000 },
            { value: "1000 RP", price: 75000 },
            { value: "2000 RP", price: 150000 },
            { value: "5000 RP", price: 350000 },
            { value: "10000 RP", price: 700000 }
        ]
    };
    let selectedPrice = null;
    let selectedValue = null;
    let priceList = document.getElementById("price-options");

    if (game && priceOptions[game]) {
        priceOptions[game].forEach(option => {
            let div = document.createElement("div");
            div.className = "price-item";
            div.innerHTML = `${option.value} <br> Rp ${option.price.toLocaleString()}`;
            div.dataset.value = option.value;
            div.dataset.price = option.price;

            div.addEventListener("click", function () {
                document.querySelectorAll(".price-item").forEach(i => i.style.background = "#e0e0e0");
                this.style.background = "#ff6600";
                this.style.color = "white";
                selectedPrice = option.price;
                selectedValue = option.value;
            });

            priceList.appendChild(div);
        });
    }

    document.getElementById("checkout-btn").addEventListener("click", function () {
        let userId = document.getElementById("user-id").value;
        let whatsapp = document.getElementById("whatsapp").value;

        if (!userId || !whatsapp || !selectedPrice) {
            alert("Harap isi semua data dan pilih nominal!");
            return;
        }

        let message = `Halo Admin, saya ingin top-up ${game} dengan detail:\n\nID: ${userId}\nNominal: ${selectedValue}\nHarga: Rp ${selectedPrice}`;
        let whatsappUrl = `https://wa.me/6287854851480?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    });
});
