<template>
  <div>
    <h1>Добавить расход</h1>
    <form @submit.prevent="addExpense">
      <div>
        <label for="category">Категория:</label>
        <input id="category" v-model="newExpense.category" required />
      </div>
      <div>
        <label for="amount">Сумма:</label>
        <input id="amount" type="number" v-model.number="newExpense.amount" required />
      </div>
      <div>
        <label for="description">Описание:</label>
        <textarea id="description" v-model="newExpense.description" required></textarea>
      </div>
      <button type="submit">Добавить</button>
    </form>
    <router-link to="/">Вернуться к списку</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newExpense: {
        category: '',
        amount: 0,
        description: '',
      },
    };
  },
  methods: {
    addExpense() {
      const expense = {
        ...this.newExpense,
        id: Date.now(),
      };

      this.$store.dispatch('addExpense', expense);
      this.$store.dispatch('saveExpenses');

      this.newExpense = { category: '', amount: 0, description: '' };
      alert('Расход добавлен!');
      this.$router.push('/');
    },
  },
};
</script>
