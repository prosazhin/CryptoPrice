<template>
  <div class="bg-white mt-4 rounded-lg p-5 flex min-h-[286px] space-x-[2px] items-end">
    <div v-for="item in graph" :key="item" class="w-[34px] bg-yellow-300" :class="[`h-[${item / 10}px]`]"></div>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  computed: {
    graph() {
      return this.$store.state.graph;
    },
  },
};
</script>
