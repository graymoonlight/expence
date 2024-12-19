import { createStore } from 'vuex';

export default createStore({
  state: {
    expenses: [],
  },
  mutations: {
    setExpenses(state, expenses) {
      state.expenses = expenses;
    },
    addExpense(state, expense) {
      state.expenses.push(expense);
    },
  },
  actions: {
    loadExpenses({ commit }) {
      const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
      commit('setExpenses', savedExpenses);
    },
    saveExpenses({ state }) {
      localStorage.setItem('expenses', JSON.stringify(state.expenses));
    },
    addExpense({ commit }, expense) {
      commit('addExpense', expense);
    },
  },
  getters: {
    allExpenses: (state) => state.expenses,
    filteredExpenses: (state) => (category) => {
      return category === 'all'
        ? state.expenses
        : state.expenses.filter(expense => expense.category === category);
    },
    totalAmount: (state) => {
      return state.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
  },
});
