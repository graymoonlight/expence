import { createRouter, createWebHistory } from 'vue-router';
import ExpenseList from '@/components/ListLayout.vue';
import AddExpense from '@/components/AddExpense.vue';

const routes = [
  { path: '/', name: 'ListLayout', component: ExpenseList },
  { path: '/add', name: 'AddExpense', component: AddExpense },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;