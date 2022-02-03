<template>
    <div class="contacts-wrap">
        <div class="contacts-left">
            <div class="contacts-links-wrap">
                <a href="https://github.com/NickZemlin" target="_blank">
                    <div class="contacts-link link1">
                        <div class="linkside"></div>
                        <div class="linkbackside"></div>
                        <div class="linktop"></div>
                        <div class="linkbottom"></div>
                        <p>GitHub</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/nick-zemlin-948400200/" target="_blank">
                    <div class="contacts-link link2">
                        <div class="linkside"></div>
                        <div class="linkbackside"></div>
                        <div class="linktop"></div>
                        <div class="linkbottom"></div>
                        <p>LinkedIn</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="contacts-right">
            <div class="contacts-form" >
                <p class="text-display">{{ $t("message.formHeader") }}</p>
                <TextInput @inputChange="inputChange" :label="$t('message.formName')" formType="name"/>
                <TextInput @inputChange="inputChange" :label="$t('message.contact')" :helper="$t('message.contactHelper')"/>
                <Button @click="submit()" class="contacts-form-button" :text="$t('message.submit')" color="red" type="filled" />
                <transition name="snacktransition">
                <SnackBar v-if="snack" :text="$t('message.contactsSnack')" button="ok" color="cyan" class="snack" @snackUp="snackUp()"/>
                </transition>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .linkside{
        position: absolute;
        border-radius: 10px 0px 1px 0px;
        right: 0;
        width: 200px;
        height: 99%;
        background-color: darken(#f4f2ef, 15%);
        transition: all 2s ease;
        transform-origin: right bottom;
        transform:  rotateY(-90deg);
        @media (max-width: 1024px) {
            width: 100px;
            border-radius: 5px 0px 1px 0px;
        }
    }
    .linkbackside{
        position: absolute;
        border-radius: 10px 0px 1px 0px;
        left: 0;
        bottom: 0;
        z-index: -1;
        width: 200px;
        height: 98%;
        background-color: darken(#f4f2ef, 5%);
        transition: all 2s ease;
        transform-origin: left top;
        transform:  rotateY(90deg);
        @media (max-width: 1024px) {
            width: 100px;
        }
    }
    .linktop{
        position: absolute;
        border-radius: 0px 0px 10px 0px;
        top: 0;
        right: 0;
        width: 100%;
        height: 202px;
        background-color: darken(#f4f2ef, 10%);
        transition: all 2s ease;
        transform-origin: top;
        transform:  translateX(0px) rotateX(-90deg);
        @media (max-width: 1024px) {
            height: 101px;
            border-radius: 0px 0px 5px 0px;
        }
    }
    .linkbottom{
        position: absolute;
        border-radius: 0px 0px 10px 0px;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 200px;
        background-color: darken(#f4f2ef, 5%);
        transition: all 2s ease;
        transform-origin: bottom;
        z-index: -2;
        transform:  rotateX(-90deg) translateX(-5px) translateY(200px);
        @media (max-width: 1024px) {
            height: 100px;
            width: 99%;
            transform:  rotateX(-90deg) translateX(-5px) translateY(100px);
            border-radius: 0px 0px 5px 0px;
        }
    }
</style>

<script>
import TextInput from '../components/TextInput.vue'
import Button from '../components/Button.vue'
import SnackBar from '../components/SnackBar.vue'
export default {
    name: "Contacts",
    components: {
        TextInput,
        Button,
        SnackBar
    },
    data(){
        return{
            name: "",
            contact: "",
            snack: false
        }
    },
    methods:{
        inputChange(value){
            if (value[1] == 'Name'){
                this.name = value[0]
            }
            if (value[1] == 'Contact'){
                this.contact = value[0]
            }   
        },
        submit(){
            console.log("add telegram bot hook inthere")
            this.snack = true
            setTimeout(() =>{
                this.snack = false
            }, 5000)
        },
        snackUp(){
            this.snack = false
        }
    },
    computed:{
        output(){
            let result = [this.name, this.contact]
            return result
        }
    },
    mounted(){
        document.title = "Nick Zemlin " + this.$t("message.navContacts")
    },
    watch: {
        '$i18n.locale': function() {
            document.title = "Nick Zemlin " + this.$t("message.navContacts")
        }
    }
}
</script>



<style lang="scss" scoped>
    .contacts-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        @media (max-width: 414px) {
            flex-direction: column-reverse;
            height: auto;
            margin-top: 20px;
        }
    }
    .contacts-left{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 414px) {
            width: 100%;
            .linkside{
                display: none;
            }
            .linkbackside{
                display: none;
            }
            .linktop{
                display: none;
            }
            .linkbottom{
                display: none;
            }
            .contacts-link{
                transform: none;
            }
            .link1, .link2{
                color: #333333;
                border-radius: 1px;
                margin-bottom: 40px;
            }
            .contacts-links-wrap{
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }
        @media (max-width: 320px) {
            margin-top: -60px;
        }   
    }
    .contacts-link{
        transform-style: preserve-3d;
        font-size: 100px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
        text-align: center;
        width: fit-content;
        height: fit-content;
        position: relative;
        padding: 0px 10px;
        color: #6ec3c0;
        transition: all .5s ease;
        transform-origin: left;
        transform: perspective(500cm) rotateX(-15deg) rotateY(-35deg) translateZ(0) translateX(50px) translateY(-50px);
        @media (max-width: 1024px) {
            font-size: 70px;
            margin-right: 10vw;
            margin-top: -5%;
        }
        @media(max-width: 414px){
            transform: none;
            margin-right: 0;
        }
    }
    .contacts-link::before {  
        transform: scaleX(0);
        transform-origin: bottom right;
    }
    .contacts-link:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    .contacts-link::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        inset: 0 0 0 0;
        background: #74afac2d;
        z-index: -1;
        transition: transform .3s ease;
    }
    a{
        text-decoration: none;
    }
    .link2{
        transform: perspective(500cm) rotateX(-15deg) rotateY(-35deg) translateZ(0) translateX(50px) translateY(-50px);
    }
    .link2:hover{
        transform: perspective(500cm) rotateX(-15deg) rotateY(-35deg) translateZ(-10px) translateX(50px) translateY(-50px);
        @media(max-width: 414px){
            transform: none;
        }
    }
    .link1{
        z-index: 1;
        transform: perspective(500cm) rotateX(-15deg) rotateY(-35deg) translateZ(-150px) translateX(50px) translateY(-50px);
    }
    .link1:hover{
        transform: perspective(500cm) rotateX(-15deg) rotateY(-35deg) translateZ(-160px) translateX(50px) translateY(-50px);
        @media(max-width: 414px){
            transform: none;
        }
    }
    .contacts-right{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1024px) {
            .text-display{
                font-size: 30px;
            }
            .contacts-form{
                margin-top: 100px;
            }
        }
        @media (max-width: 414px){
            width: 100%;
            height: auto;
            margin-bottom: 30px;
            .contacts-form{
                width: 100%;
                align-items: center;
            }
            .text-display{
                width: 80%;
                text-align: center;
            }
            .contacts-form-button{
                margin-left: 0;
            }
            .snack{
                width: 80%;
                margin-bottom: 20px;
                margin-left: 10%;
            }
        }
        @media (max-width: 320px) {
            .text-display{
                font-size: 25px;
            }
        }
    }
    .contacts-form{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 70%;

    }
    .contacts-form-button{
        width: fit-content;
        margin-left: 60%;
        box-sizing: border-box;
        margin-bottom: 100px;
    }
    .snack{
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        box-sizing: border-box;
    }
        .snacktransition-enter-to, .snacktransition-leave-from{
        transform: translate3d(0, 0px, 0) scaleX(1);
        opacity: 1;
    }
    .snacktransition-enter-from, .snacktransition-leave-to{
        transform: translate3d(0, 50px, 0) scaleX(.95);
        opacity: 0;
    }
    .snacktransition-enter-active, .snacktransition-leave-active{
        transition: all 2s cubic-bezier(.4,.18,0,1.17);
    }
</style>

