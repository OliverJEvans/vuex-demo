<template>
  <div id="app">
    <BannerMessages />
    <input type="text" v-model="textBox" />
    <button @click="addBannerMessage(textBox)">Add Banner Message</button>
  </div>
</template>

<script>
import BannerMessages from "./components/BannerMessages.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BannerMessages,
  },
  data() {
    return {
      textBox: "",
    };
  },
  methods: {
    ...mapActions({
      addBannerMessage: "bannerMessages/addMessage",
    }),
  },
};
</script>
