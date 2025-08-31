

let countHeart = 0;
let callHistory = [];
let cion = document.getElementById("coin");
let copyCount = document.getElementById("copy-show");
let copy = 0;

// Love Buttons:

const loveButtons = document.querySelectorAll(".love-btn");

for (const btn of loveButtons) {
    btn.addEventListener("click", function () {
        if (this.classList.contains("red")) {
            this.classList.remove("red");
            countHeart--;
            document.getElementById("heart-count").innerText = countHeart;
        } else {
            this.classList.add("red");
            countHeart++;
            document.getElementById("heart-count").innerText = countHeart;
        }
    });
}

// Call Button functionality:

const callButtons = document.querySelectorAll(".main-card .call-btn");

for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {
        const card = this.closest(".main-card");

        const subTitle = card.querySelector("p.mt-2").innerText;
        const number = card.querySelector("h3.font-bold.text-3xl").innerText;

        // Start

        let intCoin = parseInt(cion.innerText);

        if (intCoin < 20) {
            alert(
                "❌ You don’t have enough coins. You need at least 20 coins to make a call."
            );
        } else {
            let countedCoin = parseInt(cion.innerText) - 20;
            alert(`📞 Calling ${subTitle} number ${number}.....`);
            cion.innerText = countedCoin;

            const obj = {
                callingDes: subTitle,
                callingNumber: number,
                time: new Date().toLocaleTimeString(undefined, {
                    hour12: true,
                }),
            };
            callHistory.push(obj);
            CallHistory();
        }
    });
}

// copy Button functionality:

const copyButtons = document.querySelectorAll(".main-card .copy-btn");

for (const copyButton of copyButtons) {
    copyButton.addEventListener("click", function () {
        const card = this.closest(".main-card");
        const number = card.querySelector("h3.font-bold.text-3xl").innerText;

        const numberToCopy = number;

        navigator.clipboard.writeText(numberToCopy);
        copy++;
        alert(`📄 ${number} copied`);
        copyCount.innerText = `${copy}`;
    });
}

// Clear History

document.getElementById("clear-button").addEventListener("click", function () {
    callHistory = [];
    CallHistory();
});

// History Show functionality:

function CallHistory() {
    const container = document.getElementById("history-container");
    container.innerHTML = "";

    for (const history of callHistory) {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="main-right-card border-1 border-gray-100 flex gap-4 justify-between items-center mt-5 p-2 mb-2 bg-[#fafafa]">
                <div>
                    <h3 class="text-[16px] font-semibold mb-2">${history.callingDes}</h3>
                    <p class="text-[14px]">${history.callingNumber}</p>
                </div>
                <div>
                    <p class="text-[16px]">${history.time}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    }
}
