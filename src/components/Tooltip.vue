<template>
  <div class="tooltip">
    <div class="tooltip__button" @click="removeElement">
      <icon name="trash" height="20"></icon>
    </div>
    <template v-if="showAlignButtons">
      <div class="tooltip__button" @click="alignText('left')">
        <icon name="align-left" height="20"></icon>
      </div>
      <div class="tooltip__button" @click="alignText('center')">
        <icon name="align-center" height="20"></icon>
      </div>
      <div class="tooltip__button" @click="alignText('right')">
        <icon name="align-right" height="20"></icon>
      </div>
    </template>
    <template v-if="type === 'list'">
      <div class="tooltip__button" @click="addListItem">
        <icon name="plus" height="20"></icon>
      </div>
      <div class="tooltip__button" @click="removeListItem" v-if="listLength > 1">
        <icon name="minus" height="20"></icon>
      </div>
    </template>
    <template v-if="type === 'signature' || type === 'date'">
      <div class="tooltip__button">
        <input type="text" placeholder="height" />
      </div>
      <div class="tooltip__button">
        <input type="text" placeholder="width" />
      </div>
    </template>
    <template v-if="index > 0">
      <div class="tooltip__button" @click="reorder('up')">
        <icon name="caret-up" height="20"></icon>
      </div>
    </template>
    <template v-if="elementsLength > 1">
      <div class="tooltip__button" @click="reorder('down')">
        <icon name="caret-down" height="20"></icon>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'tools',
  props: ['type', 'index'],
  data() {
    return {
      textAlign: 'left',
      fontSize: '16px',
    };
  },
  computed: {
    elementsLength() {
      return this.$store.state.edittingTemplate.elements.length;
    },
    showAlignButtons() {
      if (this.type === 'signature' || this.type === 'date') {
        return false;
      }
      return true;
    },
    listLength() {
      return this.$store.state.edittingTemplate.elements[this.index].list.length;
    },
  },
  methods: {
    removeElement() {
      const index = this.index;
      this.$store.commit('REMOVE_ELEMENT', { index });
    },
    alignText(position) {
      this.$parent.$el.style.textAlign = position;
    },
    addListItem() {
      const index = this.index;
      this.$store.commit('ADD_LIST_ITEM', { index, item: 'List Item' });
    },
    removeListItem() {
      const index = this.index;
      this.$store.commit('REMOVE_LIST_ITEM', { index });
    },
    reorder(direction) {
      const index = this.index;
      this.$store.commit('REORDER_ELEMENT', { index, direction });
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '~styles/main.sass'
  $color-inverted: $color-border-inverted
  $color-inverted-light: lighten($color-border-inverted, 10%)
  $color-inverted-lighter: lighten($color-border-inverted, 20%)
  .tooltip
    position: absolute
    color: #fff
    transform: translate3d(-50%, 0, 0)
    left: 50%;
    background: $color-bg-dark
    border-radius: 3px
    top: -25px
    opacity: 0
    line-height: 0
    overflow: hidden
    transition: all .25s ease
    &:after
      content: ''
      display: block
      height: 20px
      position: absolute
      bottom: -19px
      width: 100%
    &__button
      padding: $spacing-small
      cursor: pointer
      float: left
      &:hover
        background-color: $color-inverted-light
      input
        max-width: 70px;
        padding: 10px 5px;
        margin: -10px -11px;
        text-align: center;
        font-size: 15px;
        outline: none;
        border: 1px solid $color-bg-dark
        background-color: $color-inverted
        color: #fff
        &::-webkit-input-placeholder
          color: #fff
      &:last-child input
        margin: -10px;
</style>
