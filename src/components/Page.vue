<template>
  <div class="page">
    <div class="page__header">
      <input type="text" placeholder="Template name..."
        v-on:keyup="updatePageName"/>
    </div>
    <div class="page__content">
      <template v-if="elements.length > 0">
        <template v-for="(element, index) in elements">
          <pageElement :element="element" :index="index"></pageElement>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import PageElement from '@/components/PageElement';

export default {
  name: 'page',
  components: {
    pageElement: PageElement,
  },
  data() {
    return {
      elements: this.$store.state.edittingTemplate.elements,
    };
  },
  methods: {
    updatePageName(event) {
      this.pageName = event.target.value;
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '~styles/main.sass'
  .page
    float: left
    width: 65%
    background-color: #fff
    height: 650px
    font-size: $font-size-base
    @include clearfix
    &__header
      border-bottom: 1px solid $color-border
      line-height: 1.5
      input
        padding: $spacing-base
        width: 100%
        border: 0
        color: inherit
        font: inherit
        font-weight: bold
        font-size: $font-size-header
    &__content
      padding: $spacing-base
</style>
