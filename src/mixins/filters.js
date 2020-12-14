const filters = {
    data() {
        return {
            isSearch: false,
            searchString: ""
        }
    },
    filters: {
        currency: function (value) {
            if (!value) return '';
            return (value).toLocaleString();
        }
    },
    methods: {
        toggle() {
            let elem = this.$refs['menu'];
            if (elem.classList.contains('active')) {
                elem.classList.remove('active');
            } else {
                elem.classList.add('active');
            }
        },
        removeClass(query, classname) {
            console.log(document.querySelectorAll(query))
            document.querySelectorAll(query).forEach(elem => elem.classList.remove(classname));
        },
        reset() {
            this.datas = [...this.datasCopy];
        },
        findMatches(wordToMatch) {
            return this.datasCopy.filter(item => {
                const regex = new RegExp(wordToMatch, 'gi');
                return item.first_name.match(regex) || item.last_name.match(regex)
            });
        },
        removeString() {
            this.isSearch = false;
            this.searchString = "";
            this.reset();
        },
        all_merchants() {
            this.removeClass('.sub_heading a', 'active')
            this.$refs["all_merchants"].classList.add("active");
            this.reset();
        },
        service_merchants() {
            this.removeClass('.sub_heading a', 'active')
            this.$refs["service_merchants"].classList.add("active");
            let arr = this.datasCopy.filter(elem => elem.type == 'service');
            this.datas = [...arr];
        },
        product_merchants() {
            this.removeClass('.sub_heading a', 'active')
            this.$refs["product_merchants"].classList.add("active");
            let arr = this.datasCopy.filter(elem => elem.type == 'product');
            this.datas = [...arr];
        },
        none() {
            this.removeClass('.menu ul li', 'active')
            this.$refs["none"].parentElement.classList.add("active");
            this.reset();
        },
        popularity() {
            this.removeClass('.menu ul li', 'active')
            this.$refs["popularity"].parentElement.classList.add("active");
            this.datas = [...this.datasCopy.slice().sort((a, b) => b.sales - a.sales)];
        },
        newest() {
            this.removeClass('.menu ul li', 'active')
            this.$refs["newest"].parentElement.classList.add("active");
            this.datas = [...this.datasCopy.slice().sort((a, b) => new Date(b.created) - new Date(a.created))];
        },
        priceLow() {
            this.removeClass('.menu ul li', 'active')
            this.$refs["priceLow"].parentElement.classList.add("active");
            this.datas = [...this.datasCopy.slice().sort((a, b) => a.price - b.price)];
        },
        priceHigh() {
            this.removeClass('.menu ul li', 'active')
            this.$refs["priceHigh"].parentElement.classList.add("active");
            this.datas = [...this.datasCopy.slice().sort((a, b) => b.price - a.price)];
        },
        ratingLow() {
            this.removeClass('.menu ul li', 'active')
            this.$refs["ratingLow"].parentElement.classList.add("active");
            this.datas = [...this.datasCopy.slice().sort((a, b) => a.rating - b.rating)];
        },
        ratingHigh() {
            this.removeClass('.menu ul li', 'active')
            this.datas = [...this.datasCopy.slice().sort((a, b) => b.rating - a.rating)];
            this.$refs["ratingHeight"].parentElement.classList.add("active");
        },
    }
}

export default filters;