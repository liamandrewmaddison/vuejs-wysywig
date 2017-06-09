/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // Initial State Structure
  state: {
    contacts: [],
    savedTemplates: [],
    edittingTemplate: {
      pageName: '',
      elements: [],
    },
  },
  mutations: {
    // Elements List Mutations
    SET_NEW_ELEMENT: (state, { newElement }) => {
      state.edittingTemplate.elements.push(newElement);
    },
    REMOVE_ELEMENT: (state, { index }) => {
      state.edittingTemplate.elements.splice(index, 1);
    },
    REORDER_ELEMENT: (state, { index, direction }) => {
      const element = state.edittingTemplate.elements[index];
      const toIndex = direction === 'up' ? (index - 1) : (index + 1);
      state.edittingTemplate.elements.splice(index, 1);
      state.edittingTemplate.elements.splice(toIndex, 0, element);
    },
    // Element Type List Mutations
    ADD_LIST_ITEM: (state, { index, item }) => {
      state.edittingTemplate.elements[index].list.push(item);
    },
    REMOVE_LIST_ITEM: (state, { index }) => {
      state.edittingTemplate.elements[index].list.splice(-1, 1);
    },
  },
});

export default store;
