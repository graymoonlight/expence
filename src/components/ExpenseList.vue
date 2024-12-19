<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Список всех расходов</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-select
            v-model="filterCategory"
            :items="['all', ...categories]"
            label="Фильтр по категории"
            outlined
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" v-if="filteredExpenses.length">
          <v-list>
            <v-list-item-group v-for="expense in filteredExpenses" :key="expense.id">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <strong>{{ expense.category }}</strong>: {{ expense.amount }} ₽
                  </v-list-item-title>
                  <v-list-item-subtitle>{{ expense.description }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col cols="12" v-else>
          <v-alert type="info" border="left" colored-border>
            Нет расходов для отображения.
          </v-alert>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <h2>Итог: {{ totalAmount }} ₽</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <router-link to="/add" class="router-link">Добавить расход</router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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

<style scoped>
v-btn {
  margin-top: 20px;
}
</style>
