<template>
    <div class="home-wrap">
        <div class="home-left">
            <div class="home-text">
                <h1 class="text-display">{{ $t("message.name") }}</h1>
                <p class="text-overline">{{ $t("message.bioOverline") }}</p>
                <p class="text-header">{{ $t("message.position") }}</p>
                <p class="text-body">{{ $t("message.bio") }}</p>
            </div>
        </div>
        <div class="home-right">
                <img class="img1" src="../assets/StudiaPreview.png" alt="">
                <img class="img2" src="../assets/ProtochnyMenuPreview.png" alt="">
                <img class="img3" src="../assets/PartyHausPreview.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
    },
    watch: {
        '$i18n.locale': function() {
            document.title = "Nick Zemlin " + this.$t("message.navHome")
        }
    },
    mounted(){
        document.title = "Nick Zemlin " + this.$t("message.navHome")
    }

}
</script>

<style lang="scss" scoped>
    .home-wrap{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        @media (max-width: 414px) {
            flex-direction: column;
        }
    }
    .home-left{
        width: 50%;
        height: 100%;
        @media (max-width: 414px) {
            height: auto;
            width: auto;
        }
    }
    .home-text{
        width: 65%;
        margin-left: 10%;
        margin-top: 45%;
        @media(max-width: 1280px){
            margin-top: 45%;
            width: 70%;
        }
        @media (max-width: 1024px){
            margin-top: 40%;
            width: 80%;
        }
        @media (max-width: 320px) {
            padding-bottom: 25px;
        }
    }
    .home-right{
        width: 50vw;
        position: absolute;
        right: 7vw;
        height: 90%;
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(7, 1fr);
        transition: all 1s ease;
        pointer-events: none;
        img{
            pointer-events: auto;
            transition: all 1s ease;
            image-rendering: -webkit-optimize-contrast;
            transform:   rotateX(-36deg) rotateY(0deg) rotateZ(-18deg);
            box-shadow:
                -6.7px 6.7px 5.3px rgba(0, 0, 0, 0.032),
                -22.3px 22.3px 17.9px rgba(0, 0, 0, 0.048),
                -100px 100px 80px rgba(0, 0, 0, 0.08);
        }
        img:hover{
            transform:  rotateX(-36deg) rotateY(0deg) rotateZ(-18deg) translateX(3px) translateY(-20px);
            box-shadow:
                -6.7px 6.7px 5.3px rgba(0, 0, 0, 0.057),
                -22.3px 22.3px 17.9px rgba(0, 0, 0, 0.083),
                -100px 100px 80px rgba(0, 0, 0, 0.14);
        }
        @media(max-width: 1280px){
            top: 5vh;
            right: 0;
        }
        @media (max-width: 1024px) {
            right: 0;
            bottom: 15px;
        }
        @media (max-width: 414px) {
            display: none;        
        }
        
    }
    .img1{
        position: absolute;
        width: 140%;
        grid-column: 1 / span 3 ;
        grid-row: 2 / span 1;
        margin-top: 25px;
        z-index: 0;
    }
    .img2{
        position: absolute;
        margin-top: -50px;
        margin-left: -30px;
        width: 120%;
        grid-column: 5 / span 2 ;
        grid-row: 3 / span 2;
        z-index: 1;
    }
    .img3{
        position: absolute;
        margin-top: -50px;
        width: 70%;
        grid-column: 2 / span 2 ;
        grid-row: 4 / span 2;
        z-index: 3;
        border-radius: 10px;
    }
</style>