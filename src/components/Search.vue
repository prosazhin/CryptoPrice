<template>
  <div class="grid grid-cols-1 gap-x-3 gap-y-3 sm:gap-y-4 sm:grid-cols-3 mt-4">
    <div class="relative rounded-md shadow-sm w-full h-[42px]">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        :value="query"
        @input="(event) => (query = event.target.value)"
        type="text"
        name="search"
        id="search"
        class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 text-base h-full"
        placeholder="Найти тикер"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';

export default {
  name: 'Search',
  components: {
    MagnifyingGlassIcon,
  },
  data() {
    return {
      query: '',
    };
  },
  computed: {
    tickers() {
      return this.$store.state.tickers;
    },
  },
  watch: {
    query(curr) {
      this.setQuery(curr);
      this.setPage(1);
    },
  },
  methods: {
    ...mapActions(['setQuery', 'setPage']),
  },
};
</script>
