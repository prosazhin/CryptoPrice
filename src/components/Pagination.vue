<template>
  <div class="flex items-center border-t border-gray-200 bg-white fixed z-10 bottom-0 left-0 w-full px-4 py-3 sm:bg-transparent sm:relative sm:mt-6 sm:pt-3 sm:px-0 sm:pb-0">
    <span class="text-sm text-gray-700 flex-1 hidden sm:inline-block">Показано {{ filteredTickers.length }} результатов из {{ tickersCount }}</span>
    <div class="flex space-x-3 justify-between w-full sm:w-auto" v-if="tickersCount > 6">
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        :disabled="page === 1"
        @click="setPage(page - 1)"
      >
        Назад
      </button>
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        :disabled="pagesCount === page"
        @click="setPage(page + 1)"
      >
        Вперед
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Pagination',
  computed: {
    page() {
      return this.$store.state.page;
    },
    pagesCount() {
      return this.$store.getters.pagesCount;
    },
    tickersCount() {
      return this.$store.getters.tickersCount;
    },
    filteredTickers() {
      return this.$store.getters.filteredTickers;
    },
  },
  methods: {
    ...mapActions(['setPage']),
  },
};
</script>
