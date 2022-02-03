<template>
    <div class="button">
        <p class="button-text">{{text}}</p>
    </div>
</template>

<script>
export default {
    name: "Button",
    props:{
        text: String,
        color: String,
        type: String,
    },
    data(){
        return {
            buttonColor: '#333333',
            textColor: '#f4f2ef',
            outline: 'none',
            padding: '10px 30px'
        }
    },
    created(){
        if (this.color == 'black' && this.type == 'filled'){
            this.buttonColor = '#333333'
        }
        if (this.color == 'red' && this.type == 'filled'){
            this.buttonColor = '#cc5c56'
        }
        if (this.color == 'cyan' && this.type == 'filled'){
            this.buttonColor = '#74afac'
        }
        if (this.color == 'black' && this.type != 'filled'){
            this.buttonColor = 'rgba(255, 0, 0, 0)(255, 255, 255);'
            this.textColor = '#333333'
            if (this.type == 'outline'){
                this.outline = this.textColor
                this.padding = '10px 30px'
            }
        }
        if (this.color == 'cyan' && this.type != 'filled'){
            this.buttonColor = 'rgba(255, 0, 0, 0)(255, 255, 255);'
            this.textColor = '#74afac'
            if (this.type == 'outline'){
                this.outline = this.textColor
                this.padding = '10px 30px'
            }
        }
        if (this.color == 'red' && this.type!== 'filled'){
            this.buttonColor = 'rgba(255, 0, 0, 0)(255, 255, 255);'
            this.textColor = '#cc5c56'
            if (this.type == 'outline'){
                this.outline = this.textColor
                this.padding = '10px 30px'
                // this.shadow = 
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.button{
    background-color: v-bind(buttonColor);
    cursor: pointer;
    height: 44px;
    min-width: 125px;
}
.button-text{
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    padding: v-bind(padding);
    color: v-bind(textColor);
    -webkit-box-shadow: 0px 0px 0px 3px v-bind(textColor) inset;
    -moz-box-shadow: 0px 0px 0px 3px v-bind(textColor) inset;
    box-shadow: 0px 0px 0px 3px v-bind(outline) inset;
}
</style>