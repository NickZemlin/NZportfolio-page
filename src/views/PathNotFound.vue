<template>
    <kinesis-container class="fof-kinesis">
    <div class="fof-wrap">
        <kinesis-element :strength="-5" type="translate">
        <h1 >404</h1>
        </kinesis-element>
        <div class="textandbuttonfof">
            <p class="text-header fof-header">The page you are looking for does not exist</p>
            <Button class="fof-button" @click="$router.go(-1)" text="Go back" />
        </div>
    </div>
    <MousePosition />
    </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Button from '../components/Button.vue'
import MousePosition from '../components/MousePosition.vue'
export default {
    name: 'PathNotFound',
    components: {
        KinesisContainer, 
        KinesisElement,
        Button,
        MousePosition
    },
    data(){
        return{
            
        }
    },
    methods:{

    },
    created(){
        
    },
    mounted(){
        document.title = 'Nick Zemlin 404'
    }
}
</script>

<style lang="scss" scoped>
    .fof-kinesis{
        user-select: none;
    }
    .fof-wrap{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
            font-weight: 700;
            font-size: 200px;
            margin-bottom: 30px;
            color: #1f1f1f;
            user-select: none;
            pointer-events: none;
        }
    }
    .fof-button{
        pointer-events: all;
        user-select: all;
    }
    .textandbuttonfof{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .fof-header{
        margin-bottom: 50px;
    }
</style>