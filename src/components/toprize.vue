<template>
  <div
    class="content"
    :class="[bg=='bg'?'content0':'']"
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
      bg: "bg",
    };
  },
  methods: {},
  created() {
    console.log(this.$route.query.money);
    console.log(this.$route.query.channl);
    this.valid = this.$route.query.valid;
    console.log;
    if (this.valid) {
      this.money = this.$route.query.money;
      this.channl = this.$route.query.channl;

      if (this.channl == 5) {
        this.bg = String(this.channl) + String(this.money);
      } else {
        this.bg = String(this.channl);
      }
    } else {
      this.bg = "bg";
    }
  },
};
</script>

<style scoped>
.content {
  background: url(../assets/1/bg.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.content0 {
  position: relative;
}
.content0::after {
  content: "";
  position: absolute;
  width: 96%;
  height: 300px;
  top: 40%;
  left: 2%;
  background: url(../assets/1/0.png) no-repeat;
  background-size: contain;
}
</style>
