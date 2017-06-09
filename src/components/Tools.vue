<template>
  <div class="tools">
    <h2 class="tools__header">Page Tools</h2>
    <div class="tools__content">
      <div class="tools__row">
        <b>Components</b>
        <div class="tools__section">
          <div class="component"
            @click="addNewElemnt('header')">
            <icon name="header" height="21"></icon>
            <span>Header</span>
          </div>
          <div class="component"
            @click="addNewElemnt('paragraph')">
            <icon name="paragraph" height="21"></icon>
            <span>Paragraph</span>
          </div>
          <div class="component"
            @click="addNewElemnt('list')">
            <icon name="list-ol" height="21"></icon>
            <span>List</span>
          </div>
        </div>
      </div>
      <div class="tools__row">
        <b>Inputs</b>
        <div class="tools__section">
          <div class="component"
            @click="addNewElemnt('signature')">
            <icon name="lock" height="21"></icon>
            <span>Signature</span>
          </div>
          <div class="component"
            @click="addNewElemnt('date')">
            <icon name="calendar" height="20"></icon>
            <span>Date</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tools',
  methods: {
    addNewElemnt(type) {
      const newElement = {
        type,
      };
      if (type === 'list') {
        newElement.list = ['List Item'];
      }
      this.$store.commit('SET_NEW_ELEMENT', { newElement });
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '~styles/main.sass'
  $color-inverted: $color-border-inverted
  $color-inverted-light: lighten($color-border-inverted, 10%)
  $color-inverted-lighter: lighten($color-border-inverted, 20%)
  .tools
    float: right
    width: 35%
    background-color: $color-bg-dark
    color: #fff
    height: 650px
    position: relative
    &__header
      margin: 0
      padding: $spacing-base
      border-bottom: 1px solid $color-inverted
      font-size: $font-size-header
      line-height: 1.5;
    &__content
      padding: $spacing-base
    &__row
      margin-bottom: $spacing-small
      @include clearfix
    &__section
      padding: $spacing-small 0
      margin: 0 -($spacing-xs)
      @include clearfix
    &__footer
      padding: $spacing-base
      background-color: $color-inverted
      position: absolute
      bottom: 0
      left: 0
      width: 100%
  .component
    padding: $spacing-small
    border: 2px dashed $color-inverted-light
    border-radius: 3px
    float: left
    margin: $spacing-xs
    @include clearfix
    &:hover
      border-color: $color-inverted-lighter
      cursor: pointer
    svg
      float: left
      pointer-events: none;
    span
      float: left
      margin-left: $spacing-xs
      margin-top: 0px
      pointer-events: none;
</style>
