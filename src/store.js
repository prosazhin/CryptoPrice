import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
  state() {
    return {
      tickers: [],
      selectedTicker: null,
      page: 1,
      query: '',
      graph: [1000, 1100, 11150, 950, 550, 1650, 2300],
    };
  },
  getters: {
    tickersCount(state) {
      return state.tickers.length;
    },
    pagesCount(state) {
      return Math.ceil(state.tickers.length / 6);
    },
    filteredTickers(state) {
      return state.tickers
        .filter((item) => item.name.toLowerCase().replace(/\s+/g, '').includes(state.query.toLowerCase().replace(/\s+/g, '')))
        .filter((item, index) => index < state.page * 6 && index >= state.page * 6 - 6);
    },
  },
  mutations: {
    setTickers(state, data) {
      state.tickers = data.tickers;
    },
    addTicker(state, data) {
      state.tickers.unshift({ name: data.name, value: data.value });
    },
    removeTicker(state, data) {
      state.tickers = state.tickers.filter((item) => item.name !== data.name);
    },
    selectTicker(state, data) {
      if (state.selectedTicker === data.name) {
        state.selectedTicker = null;
        return;
      }
      state.selectedTicker = data.name;
    },
    setPage(state, data) {
      state.page = data.page;
    },
    setQuery(state, data) {
      state.query = data.query;
    },
  },
  actions: {
    setTickers({ commit }, tickers) {
      commit('setTickers', { tickers: tickers });
    },
    addTicker({ commit, state }, name) {
      if (state.tickers.some((item) => item.name === name)) return;
      axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${name}&tsyms=USD`).then((response) => {
        if (response.data.Response === 'Error') return;
        commit('addTicker', { name: name, value: response.data.USD });
        localStorage.setItem('tickers', JSON.stringify(state.tickers));
      });
    },
    removeTicker({ commit, state }, name) {
      commit('removeTicker', { name: name });
      localStorage.setItem('tickers', JSON.stringify(state.tickers));
    },
    selectTicker({ commit }, name) {
      commit('selectTicker', { name: name });
    },
    setPage({ commit }, page) {
      commit('setPage', { page: page });
    },
    setQuery({ commit }, query) {
      commit('setQuery', { query: query });
    },
  },
});
