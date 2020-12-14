const filter = {
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
        }
    }
}

export default filter;