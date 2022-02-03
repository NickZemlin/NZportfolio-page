<template>
    <div class="portfolio-wrap">
    <div class="portfolio-left" @click="closemodal()">
        <svg class="portfolio-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46"/>
        </svg>
        <div class="portfolio-skills">
            <p class="text-display">{{ $t("message.whatIWorkWith") }}</p>
            <div class="skills">
                <div class="skills-dev">
                    <p class="text-header">{{ $t("message.dev") }}</p>
                    <p class="text-body">HTML5</p>
                    <p class="text-body">CSS3</p>
                    <p class="text-body">SCSS/Sass</p>
                    <p class="text-body">Vue3</p>
                    <p class="text-body">Vue3 I18n</p>
                </div>
                <div class="skills-design">
                    <p class="text-header">{{ $t("message.design") }}</p>
                    <p class="text-body">Photoshop</p>
                    <p class="text-body">Illustrator</p>
                    <p class="text-body">InDesign</p>
                    <p class="text-body">Premiere</p>
                    <p class="text-body">AdobeXD</p>
                    <p class="text-body">Blender</p>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-right">
        <PortfolioList class="portfolio-list" :portfolioActive="portfolioActive" @selectorMoved="modalpos" @portfolioSelected="portfolioSelected" />
        <div class="portfolio-right-modal" :class="{portfolioActive: portfolioActive}">
            <transition name="RichText">
                <div class="RichText-container" v-if="portfolioActive">
                <RichText :selectedEntry="selectedEntry" @closeModal="closemodal" />
                </div>
            </transition>
        </div>
    </div>
    </div>
</template>

<script>
import PortfolioList from '../components/PortfolioList.vue'
import RichText from '../components/RichText.vue'
export default {
    name: 'Portfolio',
    components: {
        PortfolioList,
        RichText
    },
    data(){
        return{
            watcher: "",
            portfolioX: "",
            portfolioY: "",
            portfolioWidth: "",
            portfolioHeight: "",
            portfolioActive: false,
            selectedEntry: "",
            vh: 0,
            circleSpeed: 0
        }
    },
    methods:{
        modalpos(element){
            var selector = element.getBoundingClientRect()
            this.portfolioX = selector.x + "px"
            this.portfolioY = selector.y + "px"
            this.portfolioWidth = selector.width + "px"
            this.portfolioHeight = selector.height + "px"
        },
        portfolioSelected(item){
            this.portfolioActive = true
            this.selectedEntry = item
        },
        closemodal(){
            this.portfolioActive = false
            this.selectedEntry = ""
        },
        circleSpeedRegulator(event){
            this.circleSpeed = 100 - (event.pageY/100) + 's'
        }
    },
    created(){
        window.addEventListener('mousemove', this.circleSpeedRegulator);
        this.vh = Math.max(document.documentElement.pageHeight || 0, window.innerHeight || 0)
    },
    mounted(){
        document.title = "Nick Zemlin " + this.$t("message.navPortfolio")
    },
    unmounted(){
        window.removeEventListener('mousemove', this.circleSpeedRegulator);
    },
    watch: {
        '$i18n.locale': function() {
            document.title = "Nick Zemlin " + this.$t("message.navPortfolio")
        }
    }
}
</script>


<style lang="scss" scoped>
    .portfolio-wrap{
        display: flex;
        width: 100%;
        height: 100%;
        @media (max-width: 414px){
            flex-direction: column;
            margin-top: 100px;
            padding-top: 0;
            .portfolio-left{
                width: 100%;
                height: auto;
                .portfolio-skills{
                    backdrop-filter: none;
                }
            }
            .portfolio-right{
                width: 100%;
            }
        }
        @media (max-width: 320px){
            width: 100vw;
        }
    }
    .portfolio-left{
        width: 50%;
        position: relative;
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        @media (max-width: 414px){
            height: 30vh;
            width: 100%;
        }
    }
    .portfolio-skills{
        padding: 10px 20px;
        border-radius: 50px;
        backdrop-filter: blur(1.5px);
        ::selection {
        background-color: #cc5c56;
        }
        @media (max-width: 414px){
            .text-display{
                text-align: center;
            }
        }
        @media (max-width: 375px){
            .text-display{
                font-size: 40px;
            }
        }
        @media (max-width: 360px){
            .text-display{
                font-size:35px;
            }
        }
        @media (max-width: 320px){
            .text-display{
                font-size: 33px;
            }
        }
    }
    .skills{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .skills-dev, .skills-design{
        margin-bottom: 20px;
    }
    .portfolio-circle{
        pointer-events: none;
        position: absolute;
        left: -30vw;
        width: 50vw;
        fill: none;
        stroke: #6ec3c0;
        stroke-width: 1.5px;
        stroke-dasharray: 3 0 3;
        z-index: -3;
        transform-origin: center;
        animation: spin;
        animation-direction: reverse;
        animation-timing-function: linear;
        animation-fill-mode: backwards;
        animation-iteration-count: infinite;
        animation-duration: 50s;
        overflow: hidden;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .portfolio-right{
        width: 50%;
        height: 100vh;
        position: relative;
        overflow: hidden;
        @media (max-width: 414px){
            display: flex;
            width: 100%; 
            height: fit-content;
            justify-content: center;
            overflow: visible;
            position: static;
        }
    }
    .portfolio-list{
        margin-top: 200px;
        margin-left: 100px;
        width: fit-content;
        height: fit-content;
        position: relative;
        @media (max-width: 414px){
            margin-left: 0;
            margin-top: 100px;
        }
        @media (max-width: 320px){
            margin-top: 20px;
        }
    }
    .portfolio-right-modal{
        position: absolute;
        top: v-bind(portfolioY);
        left: 100px;
        width: v-bind(portfolioWidth);
        height: v-bind(portfolioHeight);
        transition: 1s all ease, .8s width ease, .5s margin-left ease-out;
        margin-left: -10px;
        padding: 5px 10px;
        background-color: #333333;
        opacity: 0;
        pointer-events: none;
        z-index: 6;
        border-radius: 10px;
        overflow-x: hidden;
        overflow: auto;
    }
    .portfolioActive{
        transition: all 1.5 ease;
        background-color: #333333;
        pointer-events: all;
        position: absolute;
        opacity: 1;
        border-radius: 0;
        top: 0;
        left: 0;
        margin-left: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        @media (max-width: 414px){
            position: absolute;
            top: 0;
            min-width: 100vw;
            min-height: 100vw;
            min-height: -webkit-fill-available;
        }
    }
    .RichText-enter-from{
        opacity: 0;
        top: -15px;
    }
    .RichText-enter-to{
        opacity: 1;
        top: 0;
    }
    .RichText-enter-active{
        transition: all .8s ease .8s;
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
    }
    .RichText-leave-from{
        opacity: 1;
    }
    .RichText-leave-to{
        opacity: 0;
    }
    .RichText-leave-active{
        transition: all .2 ease;
    }
</style>