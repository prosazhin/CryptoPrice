<template>
  <div class="grid grid-cols-1 gap-x-3 gap-y-3 sm:gap-y-4 sm:grid-cols-3 mt-[18px]">
    <Ticker v-for="ticker in filteredTickers" :key="ticker.name" :name="ticker.name" :value="ticker.value" />
  </div>
</template>

<script>
import Ticker from './Ticker.vue';

export default {
  name: 'TickerList',
  components: {
    Ticker,
  },
  computed: {
    filteredTickers() {
      return this.$store.getters.filteredTickers;
    },
  },
};
</script>
