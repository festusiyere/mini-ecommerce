const filter = {
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
        }
    }
}

export default filter;