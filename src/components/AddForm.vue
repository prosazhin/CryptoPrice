<template>
  <div class="grid grid-cols-1 gap-x-3 gap-y-3 sm:gap-y-4 sm:grid-cols-3 bg-white w-full p-4 sm:rounded-lg">
    <form @submit.prevent="submit" class="flex flex-col space-y-3">
      <div class="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
        <label for="name" class="block text-xs font-medium text-gray-900">Тикер</label>
        <input
          v-model="form.name"
          type="text"
          name="name"
          id="name"
          class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 text-base"
          placeholder="Например DOGE"
        />
      </div>
      <div>
        <button
          type="submit"
          class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Добавить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddForm',
  data() {
    return {
      form: {
        name: '',
      },
    };
  },
  methods: {
    ...mapActions(['addTicker']),

    submit() {
      this.addTicker(this.form.name);
      this.form = {
        name: '',
      };
    },
  },
};
</script>
