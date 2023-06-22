class Calculator {
    constructor() {
        this.rates = [];
        this.clacs = [];
        this.init_amount = 0;
        this.months = [];
        this.salary = 0;
    }

    async fetchRates() {
        let url = "http://otternonesenses.co.za/fine-nance/api/fetch_interest_rates.php";
        let res = await fetch(url);
        let data = await res.json();

        this.rates = data.data;
        

        console.log(this.rates);
    }

    find_interest_rate(amount) {
        let rate = {};
        this.rates.forEach((r) => {
            if (amount >= r.min && amount < r.max) {
                rate = +r.interest_rate;
            }
        });

        return rate;
    }

    set_init_amount(amount) {
        this.init_amount = +amount;
        return this;
    }

    set_months(months) {
        this.months = +months;
        return this;
    }

    set_salary(salary) {
        this.salary = +salary;
        return this;
    }

    calculate() {
        let outs = [
            {
                month: 0,
                amount: this.init_amount,
            }
        ];

        for (let i = 0; i < this.months; i++) {
            let last = outs[outs.length - 1];

            let out = last.amount *(1 + (this.find_interest_rate(last.amount)/100)/365.25)**(365.25*(1/12)) ;
            let inter = out - last.amount;
            out += this.salary;
            outs.push({
                month: last.month + 1,
                amount: out,
                rate: this.find_interest_rate(last.amount),
                interest: inter,
            })
        }

        console.log(outs);
    }
}