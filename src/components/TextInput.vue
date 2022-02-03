<template>
    <div class="TextInput-wrap">
        <transition name="error-text-transition"> 
            <p class="error-text" v-if="error">{{error}}</p>
        </transition> 
        <label for="name" :class="{focused: labelclass}" >{{label}}</label>
        <input v-model="message" name="name" :class="{inputerror: error}" @focus="focused= true" @blur="focused = false" />
        <p class="helper-text" v-if="helper">{{helper}}</p>
    </div>

</template>

<script>
export default {
    name: 'TextInput',
    props: {
        formType: String,
        label: String,
        helper: String
    },
    data(){
        return{
            message: "",
            focused: false,
            nameregex: /^([^0-9]*)$/,
            errorBoolean: true
        }
    },
    computed:{
        labelclass(){
            if (this.focused == true || this.message != ""){
                return true
            } else { return false}
        },
        error(){
            if(this.message.length >= 29 && this.message.length > 0){
                return "bad input"
            }
            if (this.formType == 'name' && this.message.length && this.nameregex.test(this.message) == false){
                return this.$t("message.formError")
            }
        }
    },
    watch:{
        message: function (val) {
            let object = [val, this.label]
            this.$emit("inputChange", object);
        }
    }
}
</script>

<style lang="scss" scoped>
.TextInput-wrap{
    width: auto;
    position: relative;
    margin-bottom: 25px;
}
input{
    width: 225px;
    height: 30px;
    padding-left: 5px;
    border: 2px solid #333333;
    background-color: transparent;
    transition: all .5s ease;
    @media (max-width: 414px){
        width: 80vw;
    }
}
input:focus{
    outline: none;
}
.inputerror{
    border-bottom: 2px solid #e8594b;
}
label{
    position: absolute;
    font-size: 13px;
    top: 9px;
    left: 15px;
    padding: 0px 5px;
    transition: all .5s ease;
    border-radius: 50%;
}
.focused{
    left: 5px;
    top: -9px;
    background-color: darken(#f4f2ef, 5%);
    border-radius: 0;
}
.helper-text{
    font-size: 13px;
}
.error-text{
    bottom: -15px;
    font-size: 13px;
    position: absolute;
    color: #e8594b;
    font-weight: 800;
}
.error-text-transition-enter-from, .error-text-transition-leave-to{
    transform: translate3d(0, -15px, 0);
    opacity: 0;
}
.error-text-transition-enter-to,  .error-text-transition-leavefrom{
    transform: translate3d(0, 0, 0);
    opacity: 1;
}
.error-text-transition-enter-active, .error-text-transition-leave-active{
    transition: all .5s ease;
}
</style>