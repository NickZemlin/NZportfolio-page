<template>
    <Language v-if="route" />
    <Navigation v-if="route" />
    <router-view></router-view>
    <img class="gradient-gimmic" src="./assets/gradient-left.png" alt="">
    <div class="mouse-gimmic"></div>
    <div class="grain"></div>
    <GooeyCursor color="#f4f2ef" :size="32" :length="9"  />
</template>

<script>
import GooeyCursor from 'vue-gooey-cursor'
import Language from './components/Language.vue'
import Navigation from './components/Navgiation.vue'
export default {
  name: 'App',
  components: {
    GooeyCursor,
    Language,
    Navigation
  },
  data(){
    return{
      
    }
  },
  methods:{
  },
  computed:{
    route(){
      if (this.$route.name != "404"){
        return true
      } else{
        return false
      }
    }
  },
  created(){
    
  },
  unmounted(){

  },

}
</script>





<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
  *{
    padding: 0;
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: #c7c6c6;
    position: absolute;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #cc5c56;
    position: absolute;
  }
  ::selection {
    background-color: #6ec3c0;
  }
  body{
    background-color: darken(#f4f2ef, 5%);
    // background-color: #f4f2ef;
    font-family: 'Inter', sans-serif;  
  }
  .text-display{
    font-weight: 700;
    font-size: 42px;
    margin-bottom: 30px;
    color: #1f1f1f;
  }
  .text-overline{
    font-weight: 300;
    font-size: 14px;
    color: #333333;
  }
  .text-header{
    font-weight: 600;
    font-size: 21px;
    margin-bottom: 15px;
    color: #1f1f1f;
  }
  .text-body{
    font-weight: 400;
    font-size: 14px;
    color: #333333;
  }
  .text-signature{
    font-weight: 200;
    font-size: 12px;
    text-align: right;
    color: #1f1f1f;
    
  }
  .text-socials{
    color: #6ec3c0;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    margin-right: 25px;
  }
  .text-contacts{
    color: #333333;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
  }
  .studia{
    background-color: #e8594b;
  }
  .studiaDim{
    background-color: #cc5c56;
  }
  .cyan{
    background-color: #6ec3c0;
  }
  .cyanDim{
    background-color: #74afac;
  }
  .black{
    background-color: #1f1f1f;
  }
  .blackDim{
    background-color: #333333;
  }
  .gradient-gimmic{
    position: fixed;
    user-select: none;
    pointer-events: none;
    bottom: 0;
    left: 0;
    z-index: -2;
    @media (max-width: 414px){
      display: none;
    }
  }
  .grain{
    background: transparent url('assets/noise.png'); 
    background-repeat: repeat;
    pointer-events: none;
    user-select: none;
    animation: bg-animation .3s infinite;
    opacity: .3;
    opacity: 1;
    z-index: -1;
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
  }
  @keyframes bg-animation {
      0% { transform: translate(0,0) }
      10% { transform: translate(-5%,-5%) }
      20% { transform: translate(-10%,5%) }
      30% { transform: translate(5%,-10%) }
      40% { transform: translate(-5%,15%) }
      50% { transform: translate(-10%,5%) }
      60% { transform: translate(15%,0) }
      70% { transform: translate(0,10%) }
      80% { transform: translate(-15%,0) }
      90% { transform: translate(10%,5%) }
      100% { transform: translate(0,0) }
  }
  .gooey-cursor{
    --z-index: -10;
    opacity: .7;
    @media (max-width: 414px){
      display: none;
    }
  }

</style>
