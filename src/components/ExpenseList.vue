<template>
  <div>
    <h1>Список всех расходов</h1>
    <div>
      <label for="filter">Фильтр по категории:</label>
      <select v-model="filterCategory" id="filter">
        <option value="all">Все</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <ul>
      <li v-for="expense in filteredExpenses" :key="expense.id">
        <strong>{{ expense.category }}</strong>: {{ expense.amount }} ₽ - {{ expense.description }}
      </li>
    </ul>
    <h2>Итог: {{ totalAmount }} ₽</h2>
    <router-link to="/add">Добавить расход</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expenses: [],
      filterCategory: 'all',
    };
  },
  computed: {
    categories() {
      return [...new Set(this.expenses.map(expense => expense.category))];
    },
    filteredExpenses() {
      if (this.filterCategory === 'all') {
        return this.expenses;
      }
      return this.expenses.filter(expense => expense.category === this.filterCategory);
    },
    totalAmount() {
      return this.filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
    },
  },
  created() {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (savedExpenses) {
      this.expenses = savedExpenses;
    }
  },
  watch: {
    expenses: {
      handler(newExpenses) {
        localStorage.setItem('expenses', JSON.stringify(newExpenses));
      },
      deep: true,
    },
  },
};
</script>
