<template>
    <div  class="threeDCardWrap" :class="{paused: hover}">
        <div class="threeDCard" @mouseover="hover = true" @mouseleave="hover = false">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThreeDCards',
    props:{
        bg: String
    },
    data(){
        return{
            hover:false,
            img: ""
        }
    },
    created(){
        console.log(this.bg)
        this.img = this.bg
        console.log(this.img)
    }
}
</script>


<style lang="scss" scoped>
    .threeDCardWrap{
        position: absolute;
        animation: UpDown;
        animation-iteration-count: infinite;
        animation-duration: 5s;
        animation-direction: alternate;
        animation-timing-function: ease;
        animation-play-state: running;
        // height: fit-content;
        // width: fit-content;
    }
    .paused{
        animation-play-state: paused;
    }
    @keyframes UpDown {
        from{
            transform: translateY(-5px);
        }
        to{
            transfrom: translateY(0px);
        }
    }
    .threeDCard{
        transition: all 2s ease;
        // height: fit-content;
        // width: fit-content;
        transform: scale3d(1, 1, 1) rotateX(30deg) rotateY(-10deg) rotateZ(20deg) translateY(0) translateX(0);
        box-shadow:
        0.9px 0px 3.9px rgba(0, 0, 0, 0.036),
        4.5px 0px 16.2px rgba(0, 0, 0, 0.045),
        32px 0px 78px rgba(0, 0, 0, 0.06);
    }
    .threeDCard:hover{
        transform: scale3d(1, 1, 1) rotateX(30deg) rotateY(-10deg) rotateZ(20deg) translateY(-10px) translateX(-5px);
        box-shadow:
        1.5px 1.5px 7.6px rgba(0, 0, 0, 0.065),
        7.8px 7.8px 31.7px rgba(0, 0, 0, 0.082),
        56px 56px 153px rgba(0, 0, 0, 0.11);
    }
</style>