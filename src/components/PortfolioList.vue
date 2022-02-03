<template>
    <div class="portfolio-wrap" id="portfolio-wrap" @mouseleave="resetSelector()">
        <div class="portfolio-entry-text" @click="select(item)" @mouseenter="portfolioSelector(`item`+index)" v-for="(item, index) in list" :key="item+index" >
            <p :id="`item`+index">{{item}}</p>
        </div>
        <div class="portfolio-selector" id="selector" :class="{portfolioSelectorDisabled :portfolioActive }"></div>
    </div>
</template>

<script>

export default {
    name: 'PortfolioList',
    props:{
        portfolioActive: Boolean
    },
    components: {
    },
    data(){
        return{
            list: ['Protochny Bar Menu', 'Marriott FIFA 2018', 'Studia', 'QR-menu', 'Partyhaus Condor'],
            selectorOffset: 0,
            selectorWidth: 0,
            selectorHeight: 0,
            selectorLeft: "-30px",
            leftDelay: "0s"
        }
    },
    methods:{
        portfolioSelector(el){
            var element = document.getElementById(el)
            var offset = element.offsetTop;
            this.selectorOffset = offset + "px"
            var width = element.offsetWidth +"px"
            this.selectorWidth = width
            var height = element.clientHeight +"px"
            this.selectorHeight = height
            this.selectorLeft = "-10px"
            this.leftDelay = "0s"
            this.$emit("selectorMoved", element);
        },
        resetSelector(){
            setTimeout(() => {
                // this.selectorOffset = 0
                this.selectorWidth = 0
                this.selectorLeft = "-30px"
                this.leftDelay = ".5s"
            }, 500);
        },
        select(item){
            this.$emit("portfolioSelected", item);
        }
    },

    mounted(){
        this.selectorWidth = "100%"    
    },
    created(){
        this.list.sort(function(a, b){return b.length - a.length})
    }  
}
</script>

<style lang="scss" scoped>
    .portfolio-wrap{
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        @media (max-width: 414px){
            padding-top: 0;
        }
    }
    .portfolio-selector{
        position: absolute;
        top: v-bind(selectorOffset);
        height: v-bind(selectorHeight);
        width: v-bind(selectorWidth);
        margin-left: v-bind(selectorLeft);
        background-color: #c9413a;
        z-index: -2;
        padding: 5px 10px 0px 10px;
        transition: 1s all ease, .8s width ease, .5s margin-left ease-out v-bind(leftDelay);
        @media (max-width: 414px){
            display: none;
        }
    }
    .portfolioSelectorDisabled{
        opacity: 0;
    }
    .portfolio-entry-text{
        height: fit-content;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 5px;
        font-size: 50px;
        font-weight: 900;
        cursor: pointer;
        z-index: 5;
        color: #333333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 1s ease;
        @media (max-width: 1280px) {
            font-size: 45px;
        }
        @media (max-width: 1024px) {
            font-size: 35px;
            margin-bottom: 10px;
        }
        @media (max-width: 414px){
            font-size: 33px;
            width: 100%;
            align-items: center;
        }
        @media (max-width: 375px){
            font-size: 30px;
        }
        @media (max-width: 360px){
            font-size: 28px;
        }
        @media (max-width: 320px){
            font-size: 25px;
        }
    }
</style>