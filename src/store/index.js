import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    about: {
      social: "CO_GASTROBAR",
      phone: "+7 (499)-00-00",
      mail: "co_gastrobar@mail.ru",
      inn: "ИНН: 503457002",
      ogrn: "ОГРН: 1234000789456023",
      adress: "Адрес: 198095, Москва, ДЦ Москва-Сити, Пресненская наб. 8С1, -1 этаж",
      timeWork: "Пн-Вс с 9:00 до 20:00",
    },
    cart: {
      count: 2,
      products: [3, 6],
    },
    user: {
      login: false,
      userName: "Алексей",
    },
    products: [{

    }]
  },
  mutations: {},
  actions: {},
  modules: {},
});