<template>
    <transition name="snacktransition">
        <div class="snack-wrap">
            <p class="snack-text">{{text}}</p>
            <div class="snack-button" @click="snackUp()" >
                <p class="snack-button-text" >{{button}}</p>
            </div>
        </div>
    </transition>
</template>

<script>
import Button from './Button.vue'
export default {
    name: "SnackBar",
    components: {
        Button
    },
    props: {
        color: String,
        text: String,
        button: String
    },
    data(){
        return{
            snackColor: '#333333',
        }
    },
    methods:{
        snackUp(){
            this.$emit("snackUp");
        }
    },
    created(){
        if (this.color != this.snackColor){
            if (this.color == "red"){
                this.snackColor = '#cc5c56'
            }
            if (this.color == "cyan"){
                this.snackColor = '#74afac'
            }
        }
    }
}
</script>

<style scoped>
    .snack-wrap{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: calc(100% -25px);
        padding: 0px 25px;
        height: 40px;
        background-color: v-bind(snackColor);
    }
    .snack-text{
        color: #f4f2ef;
    }
    .snack-button-text{
        color: #f4f2ef;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
    }

</style>