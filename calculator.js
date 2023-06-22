class Calculator {
    constructor() {
        this.rates = [];
    }

    async fetchRates() {
        let url = "http://otternonesenses.co.za/fine-nance/api/fetch_interest_rates.php";
        let res = await fetch(url);
        let data = await res.json();

        this.rates = data;
    }

    find_interest_rate(amounts) {
        let rate = {};
        
        this.rates.forEach((r) => {
            if (amount >= r.min && amount < r.max) {
                rate = r;
            }
        });

        return rate;
    }
}