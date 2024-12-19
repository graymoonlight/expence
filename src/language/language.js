import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    expensesList: 'List of all expenses',
    filterCategory: 'Filter by category',
    noExpenses: 'No expenses to display.',
    totalAmount: 'Total: ',
    addExpense: 'Add Expense',
    category: 'Category',
    description: 'Description',
    amount: 'Amount',
  },
  ru: {
    expensesList: 'Список всех расходов',
    filterCategory: 'Фильтр по категории',
    noExpenses: 'Нет расходов для отображения.',
    totalAmount: 'Итог: ',
    addExpense: 'Добавить расход',
    category: 'Категория',
    description: 'Описание',
    amount: 'Сумма',
  },
};

const i18n = createI18n({
  locale: 'ru',
  messages,
});

export default i18n;
