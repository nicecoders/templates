<template>
  <div class="home">
    <img class="pic" alt="Vue logo" src="http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png" />
    <HelloWorld msg=" Hi, 我是 dev" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
}
</script>
<style lang="stylus">
  .pic 
    width: 100%
</style>
