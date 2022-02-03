<template>
    <div class="richText-wrap">
        <Button class="richText-Button" color="red" type="outline" :text="$t('message.close')" @click="closeModal()" />
        <span v-if="selectedEntry == 'Protochny Bar Menu'">
            <h1>{{ $t("article.protochny1") }}</h1>
            <h2>{{ $t("article.protochny2") }}</h2>
            <p>{{ $t("article.protochny3") }}</p>
            <img src="../assets/portfolio/ProtochnyMenu.png" alt="">
            <h3>{{ $t("article.protochny4") }}</h3>
            <h2>{{ $t("article.protochny5") }}</h2>
            <p>{{ $t("article.protochny6") }}</p>
            <h2>{{ $t("article.protochny7") }}</h2>
            <p>{{ $t("article.protochny8") }}</p>
            <h2>{{ $t("article.protochny9") }}</h2>
            <p>{{ $t("article.protochny10") }}</p>
            <img src="../assets/portfolio/ProtochnyStickers.png" alt="">
            <h2>{{ $t("article.protochny11") }}</h2>
            <p>{{ $t("article.protochny12") }}</p>
            <img src="../assets/portfolio/ProtochnyFan.png" alt="">
        </span>
        <span v-if="selectedEntry == 'Studia'">
            <h1>{{ $t("article.studia1") }}</h1>
            <h2>{{ $t("article.studia2") }}</h2>
            <p>{{ $t("article.studia3") }}</p>
            <img src="../assets/portfolio/StudiaLogo.png" alt="">
            <h2>{{ $t("article.studia4") }}</h2>
            <p>{{ $t("article.studia5") }}</p>
            <img src="../assets/portfolio/StudiaPoster-15.png" alt="">
            <img src="../assets/portfolio/StudiaPoster-16.png" alt="">
            <img src="../assets/portfolio/StudiaPoster-17.png" alt="">
            <img src="../assets/portfolio/StudiaPoster-18.png" alt="">
            <img src="../assets/portfolio/StudiaPoster-19.png" alt="">
        </span>
        <span v-if="selectedEntry == 'Marriott FIFA 2018'">
            <h1>{{ $t("article.marriott1") }}</h1>
            <h3>{{ $t("article.marriott2") }}</h3>
            <h2>{{ $t("article.marriott3") }}</h2>
            <p>{{ $t("article.marriott4") }}</p>
            <ol>
                <li>{{ $t("article.marriott5") }}</li>
                <li>{{ $t("article.marriott6") }}</li>
                <li>{{ $t("article.marriott7") }}</li>
            </ol>
            <p>{{ $t("article.marriott8") }}</p>
            <img src="../assets/portfolio/Marriot1.jpg" alt="">
            <h2>{{ $t("article.marriott9") }}</h2>
            <p>{{ $t("article.marriott10") }}</p>
            <ul>
                <li>{{ $t("article.marriott11") }}</li>
                <li>{{ $t("article.marriott12") }}</li>
                <li>{{ $t("article.marriott13") }}</li>
            </ul>
            <p>{{ $t("article.marriott14") }}</p>
            <img src="../assets/portfolio/Marriot2.jpg" alt="">
            <h2>{{ $t("article.marriott15") }}</h2>
            <p>{{ $t("article.marriott16") }}</p>
            <p>{{ $t("article.marriott17") }}</p>
            <p>{{ $t("article.marriott18") }}</p>
            <img src="../assets/portfolio/Marriot3.jpg" alt="">
        </span>
        <span v-if="selectedEntry == 'Partyhaus Condor'">
            <h1>{{ $t("article.phc1") }}</h1>
            <h3>{{ $t("article.phc2") }}</h3>
            <h2>{{ $t("article.phc3") }}</h2>
            <img src="../assets/portfolio/phc1.png" alt="">
            <p>{{ $t("article.phc4") }}</p>
            <ul>
                <li>{{ $t("article.phc5") }}</li>
                <li>{{ $t("article.phc6") }}</li>
                <li>{{ $t("article.phc7") }}</li>
            </ul>
            <p>{{ $t("article.phc8") }}</p>
            <img src="../assets/portfolio/phc2.png" alt="">
            <p>{{ $t("article.phc9") }}</p>
            <img src="../assets/portfolio/phc3.png" alt="">
            <p>{{ $t("article.phc10") }}</p>
        </span>
        <span v-if="selectedEntry == 'QR-menu'">
            <h1>work in progress</h1>
        </span>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    name: 'RichText',
    components:{
        Button
    },
    props:{
        selectedEntry: String
    },
    data(){
        return{
            currentArticle: ""
        }
    },
    methods:{
        closeModal(){
            this.$emit("closeModal");
        }
    },
    mounted(){
        this.currentArticle = this.selectedEntry
    },
    unmounted(){
        this.currentArticle = ""
    }
}
</script>

<style lang="scss" scoped>

    .richText-wrap{
        padding: 5% 10%;
        ::selection {
            background-color: #1f1f1f;
        }
        @media (max-width: 414px){
            padding: 10% 4%;
        }
    }
    *{
        color: #f4f2ef;
    }
    h1{
        font-weight: 700;
        font-size: 42px;
        margin-bottom: 30px;
    }
    h2{
        font-weight: 600;
        font-size: 21px;
        margin-bottom: 15px;
    }
    h3{
        font-weight: 300;
        font-size: 14px;
    }
    ul{
        margin-bottom: 45px;
    }
    ol{
        margin-bottom: 45px;
        @media (max-width: 414px){
            list-style-position: inside;
        }
    }
    li{
        margin-bottom: 10px;
        @media (max-width: 414px){
            list-style-position: inside;
        }
    }
    img{
        image-rendering: -webkit-optimize-contrast;
        width: 100%;
        margin-bottom: 20px;
        box-shadow:
        4.5px 4.5px 3.6px rgba(51, 51, 51, 0.01),
        12.5px 12.5px 10px rgba(51, 51, 51, 0.015),
        30.1px 30.1px 24.1px rgba(51, 51, 51, 0.02),
        100px 100px 80px rgba(51, 51, 51, 0.03);
    }
    p{
        font-weight: 400;
        font-size: 15px;
        color: darken(#f4f2ef, 15%);
        text-align: justify;
        text-justify: inter-character;
        line-height: 140%;
        margin-bottom: 45px;
    }
    .richText-Button{
        margin-bottom: 20px;
    }
</style>