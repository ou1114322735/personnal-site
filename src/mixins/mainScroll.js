export default function (refVal) {
    return {
        mounted() {
            this.$eventBus.$on("setMainScroll", this.setMainScroll);
            this.$refs[refVal].addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            this.$refs[refVal].removeEventListener("scroll", this.handleScroll);
            this.$eventBus.$off('setMainScroll', this.SetMainScroll)
        },
        destroyed(){
            this.$eventBus.$emit("mainScroll");
        },
        methods: {
            setMainScroll(scrollTop) {
                this.$refs[refVal].scrollTop = scrollTop;
            },
            handleScroll() {
                this.$eventBus.$emit("mainScroll", this.$refs[refVal]);
            }
        }
    }
}