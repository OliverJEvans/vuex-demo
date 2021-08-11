<template>
  <div>
    <div v-for="(message, index) in messages" v-bind:key="index">
      <p>{{ message.text }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      messages: (state) => state.bannerMessages.messages,
    }),
  },
};
</script>
