<template>
  <div
    class="content"
    :style="{
      backgroundImage: `url(${require('../../assets/zhangyin/' + bg + '.jpg')})`,
    }"
  ></div>
</template>

<script>
import { code } from "../../common/js/common";
import { cash } from "../../common/js/api";
export default {
  name: "login",
  data() {
    return {
      money: "",
      channl: "",
      bg: "",
    };
  },
  methods: {
    async getCash() {
      const result = await cash(this.$store.state.token);
      
      if (result.data.data) {
        
      this.money = result.data.data.money;
      this.channl = result.data.data.channl;
      if (this.channl == 5) {
        this.bg = String(this.channl) + String(this.money);
      } else {
        this.bg = String(this.channl);
      }

      console.log(this.bg);
      }else{
        this.bg = '0' 
      }

    },
  },
  created() {
    this.getCash();
  },
};
</script>

<style scoped>
.content {
  background: url(../../assets/zhangyin/1.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
