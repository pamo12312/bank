let totalFavoritesSpan = document.getElementById("totalFavoritesSpan")
const data = {
    "banks": [
        {
            "name": "Bank of Springfield",
            "location": "123 Main St, Springfield, IL",
            "overall_score": 85,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "3.5%",
            "favoriteCount": 0
        },
        {
            "name": "Capital City Bank",
            "location": "456 Elm St, Capital City, CA",
            "overall_score": 78,
            "opening_hours": "8:30 AM - 4:30 PM",
            "loan_interest_rate": "4.0%",
            "favoriteCount": 0
        },
        {
            "name": "Metro Financial",
            "location": "789 Oak St, Metroville, NY",
            "overall_score": 56,
            "opening_hours": "10:00 AM - 7:00 PM",
            "loan_interest_rate": "3.75%",
            "favoriteCount": 0
        },
        {
            "name": "Riverside Savings & Loan",
            "location": "101 River Rd, Riverside, TX",
            "overall_score": 30,
            "opening_hours": "9:00 AM - 6:00 PM",
            "loan_interest_rate": "3.9%",
            "favoriteCount": 0
        }
    ]
};

const banksContainer = document.getElementById("banks-container");
const searchInput = document.getElementById("searchInput");

function renderBanks(banks) {
    banksContainer.innerHTML = "";

    banks.forEach(bank => {
        const bankElement = document.createElement("div");
        bankElement.className = "bank";

        let buttonColor = "";

        if (bank.overall_score >= 90) {
            buttonColor = "green";
        } else if (bank.overall_score >= 55) {
            buttonColor = "orange";
        } else if (bank.overall_score >= 30) {
            buttonColor = "blue";
        } else {
            buttonColor = "red";
        }

        bankElement.innerHTML = `

       
        <div class="dol">
            <h3 style="color: ${buttonColor};">${bank.name}</h3>
            <div>a</div>
        </div>
            <p>Location: ${bank.location}</p>
            <p style="color: ${buttonColor};">Overall Score: <span style="color: ${buttonColor};">${bank.overall_score}</span></p>
            <p>Opening Hours: ${bank.opening_hours}</p>
            <p>Loan Interest Rate: ${bank.loan_interest_rate}</p>
            <button class="favorite" style="background-color: ${buttonColor}" onclick="addFavorite('${bank.name}', '${buttonColor}', ${bank.favoriteCount})">Favorite</button>
  
        `;

        banksContainer.appendChild(bankElement);
    });
}
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    const filteredBanks = data.banks.filter(bank => bank.name.toLowerCase().includes(query));
    renderBanks(filteredBanks);
});

renderBanks(data.banks);
