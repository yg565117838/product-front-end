<template>
    <div class="loginRegister background-img-cover flex-center">
        <div class="form-container flex">
            <div class="left flex-column flex-align-center flex-justify-around">
                <p>故天将降大任于斯人也</p>
                <p>必先苦其心志</p>
                <p>劳其筋骨，饿其体肤</p>
                <p>空乏其身，行拂乱其所为</p>
            </div>
            <div class="right">
                <nuxt></nuxt>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginRegister",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .loginRegister{
        width: 100vw;
        height: 100vh;
        min-width: 1280px;
        background-image: url("/loginRegister.jpg");
        .form-container{
            width: 900px;
            background: rgba(0,0,0,.5);
            .left{
                flex: 1;
                color: #C0C4CC;
                font-size: 24px;
            }
            .right{
                flex: 1;
            }
        }
    }
</style>
