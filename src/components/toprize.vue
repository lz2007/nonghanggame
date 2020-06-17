<template>
  <div
    class="content"
    :style="{
      backgroundImage: `url(${require('../assets/1/' + bg + '.jpg')})`,
    }"
  ></div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      money: "",
      channl: "",
      valid: "",
      bg: "",
    };
  },
  methods: {},
  created() {
    console.log(this.$route.query.money);
    console.log(this.$route.query.channl);
    this.valid = this.$route.query.valid;
    console.log
    if (this.valid) {
      this.money = this.$route.query.money;
      this.channl = this.$route.query.channl;

      if (this.channl == 5) {
        this.bg = String(this.channl) + String(this.money);
      } else {
        this.bg = String(this.channl);
      }
    } else {
      this.bg = "0";
    }
  },
};
</script>

<style scoped>
.content {
  background: url(../assets/1/0.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
