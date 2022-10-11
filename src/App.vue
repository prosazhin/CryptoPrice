<template>
  <div class="pb-20 sm:p-6">
    <AddForm />
    <div class="pl-4 pr-4 sm:pl-0 sm:pr-0">
      <Search />
      <TickerList v-if="tickersCount > 0" />
      <Graph v-if="selectedTicker !== null" />
      <Pagination v-if="tickersCount > 6" />
    </div>
  </div>
</template>

<script>
import AddForm from './components/AddForm.vue';
import Search from './components/Search.vue';
import TickerList from './components/TickerList.vue';
import Graph from './components/Graph.vue';
import Pagination from './components/Pagination.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    AddForm,
    Search,
    TickerList,
    Graph,
    Pagination,
  },
  computed: {
    tickersCount() {
      return this.$store.getters.tickersCount;
    },
    selectedTicker() {
      return this.$store.state.selectedTicker;
    },
  },
  methods: {
    ...mapActions(['setTickers']),
  },
  created() {
    if (localStorage.tickers) {
      this.setTickers(JSON.parse(localStorage.getItem('tickers')));
    }
  },
};
</script>
