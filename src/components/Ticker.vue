<template>
  <div
    class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-5 py-4 focus-within:ring-2 hover:border-gray-400 cursor-pointer"
    :class="{ 'ring-[3px] ring-gray-900 !border-gray-900': name === selectedTicker }"
    @click="selectTicker(name)"
  >
    <div class="min-w-0 flex-1 flex flex-col">
      <div class="flex items-center">
        <span class="text-sm font-normal text-black flex-1">{{ name }}</span>
        <TrashIcon
          class="h-5 w-5 text-gray-400 hover:text-red-600"
          aria-hidden="true"
          @click="
            (event) => {
              event.stopPropagation();
              event.preventDefault();
              removeTicker(name);
            }
          "
        />
      </div>
      <span class="text-4xl font-normal text-black">{{ value }}$</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { TrashIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'Ticker',
  components: {
    TrashIcon,
  },
  props: {
    name: String,
    value: Number,
    active: Boolean,
  },
  computed: {
    selectedTicker() {
      return this.$store.state.selectedTicker;
    },
  },
  methods: {
    ...mapActions(['removeTicker', 'selectTicker']),
  },
};
</script>
