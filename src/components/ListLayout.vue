<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <ExpenseList>
            <template v-slot:language-selector>
              <v-btn @click="changeLanguage('ru')" color="primary" outlined>
                Русский
              </v-btn>
              <v-btn @click="changeLanguage('en')" color="primary" outlined>
                English
              </v-btn>
            </template>
          </ExpenseList>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ExpenseList from '@/components/ExpenseList.vue';

export default {
  components: {
    ExpenseList,
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
      localStorage.setItem('language', language);
    },
  },
};
</script>
