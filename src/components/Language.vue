<template>
    <div class="language-wrap">
        <div class="locale-wrap" v-for="locale in languages" :key="locale">
            <p class="locale" @click="localeChange(locale)" :class="{activeLocale : currentLanguage == locale}" >
                {{locale}}
            </p>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    name: 'language',
    components:{
        Button
    },
    data(){
        return {
            currentLanguage: "",
            // languages: ["en", "ru", "de"]
            languages: ["en", "ru"]
        }
    },
    methods:{
        localeChange(locale){
            this.$root.$i18n.locale = locale
            this.currentLanguage = this.$root.$i18n.locale
        }
    },
    created(){
    // detect browser language, if its supported translate to it
    if (this.$i18n.availableLocales.includes(navigator.language)){
        this.$root.$i18n.locale = navigator.language
    }
    this.currentLanguage = this.$root.$i18n.locale
    }
}
</script>

<style lang="scss" scoped>
    .language-wrap{
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 50px;
        margin-right: 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        z-index: 5;
    }
    .locale-wrap{
        margin-right: 30px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .locale{
        opacity: 0.2;
        transition: all .3s ease;
        user-select: none;
        cursor: pointer;
        padding: 5px 15px;
        font-weight: 600;
        color: #333333;
    }
    .activeLocale{
        opacity: .8;
    }
</style>