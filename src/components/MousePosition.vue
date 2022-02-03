<template>
    <div class="mouse-position-wrap">
        <div class="mouseX">
            <p class="textX text-body" v-if="posX">{{posX}}</p>
            <p class="textX text-body" v-if="negativePosX">{{negativePosX}}</p>
        </div>
        <div class="mouseY">
            <p class="textY text-body" v-if="posY">{{posY}}</p>
            <p class="textY text-body" v-if="negativePosY">{{negativePosY}}</p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MousePosition',
    data(){
        return{
            posX: 0,
            negativePosX: 0,
            negativePosY: 0,
            vw: 0,
            posY: 0,
            vh: 0
        }
    },
    methods:{
        handleScroll (event) {
            this.posX=event.pageX+1
            this.negativePosX=this.vw-this.posX+1
            this.posY=event.pageY+1
            this.negativePosY=this.vh-this.posY+1
        }
    },
    created(){
        window.addEventListener('mousemove', this.handleScroll);
        this.vw = Math.max(document.documentElement.pageWidth || 0, window.innerWidth || 0)
        this.vh = Math.max(document.documentElement.pageHeight || 0, window.innerHeight || 0)
    },
    destroyed(){
        window.removeEventListener('mousemove', this.handleScroll);
    },

}
</script>


<style lang="scss" scoped>
    .mouse-position-wrap{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -6;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
    }
    .mouseX{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .mouseY{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .textX{
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }
</style>