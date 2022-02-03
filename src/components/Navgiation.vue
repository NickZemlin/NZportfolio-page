<template>
    <div class="navigation-wrap">
        <router-link to="/">
            <p class="navigation-text">
                {{ $t("message.navHome") }}
            </p>
        </router-link>
        <router-link to="/contacts">
            <p class="navigation-text">
                {{ $t("message.navContacts") }}
            </p>
        </router-link>
        <router-link to="/portfolio">
            <p class="navigation-text">
                {{ $t("message.navPortfolio") }}
            </p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>


<style lang="scss" scoped>
    .navigation-wrap{
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 15px;
        margin-right: 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        z-index: 5;
        @media (max-width: 414px){
            width: 100%;
            margin-right: 0;
            justify-content: space-around;
            .navigation-text{
                margin: 0;
            }
        }
    }
    .navigation-text{
        margin-left: 15px;
        font-size: 20px;
        user-select: none;
        cursor: pointer;
        padding: 5px 15px;
        @media (max-width: 320px) {
            font-size: 16px;
        }
    }
    a{
        text-decoration: none;
        color: #1f1f1f;
        font-weight: 600;
        opacity: 0.2;
        transition: all .3s ease;
    }
    .router-link-active{
        opacity: 1; 
    }
</style>