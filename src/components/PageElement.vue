<template>
  <div class="page__element" :data-type="element.type">
    <b class="page__element__type">{{ element.type }}</b>
    <template v-if="element.type == 'header'">
      <tooltip :type="element.type" :index="index"></tooltip>
      <h2 contenteditable="true">Header</h2>
    </template>
    <template v-if="element.type == 'paragraph'">
      <tooltip :type="element.type" :index="index"></tooltip>
      <p contenteditable="true">Paragraph</p>
    </template>
    <template v-if="element.type == 'list'">
      <tooltip :type="element.type" :index="index"></tooltip>
      <ul v-for="item in element.list">
        <li contenteditable="true">{{ item }}</li>
      </ul>
    </template>
    <template v-if="element.type == 'signature'">
      <tooltip :type="element.type" :index="index"></tooltip>
      <div class="text-element">
        <div class="text-element__icon">
          <icon name="lock" width="16"></icon>
        </div>
      </div>
    </template>
    <template v-if="element.type == 'date'">
      <tooltip :type="element.type" :index="index"></tooltip>
      <div class="text-element">
        <div class="text-element__icon">
          <icon name="calendar" width="16"></icon>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip';

export default {
  name: 'pageElement',
  props: ['element', 'index'],
  components: {
    tooltip: Tooltip,
  },
};
</script>

<style lang="sass" scoped>
  @import '~styles/main.sass'
  .page
    &__element
      position: relative
      border: 1px solid transparent
      h1,
      h2,
      h3,
        margin: 0
      b
        display: none
        text-transform: uppercase
      &:hover
        &[data-type="header"]
          border-color: $colour-outline-1
          b
            background-color: $colour-outline-1
        &[data-type="paragraph"]
          border-color: $colour-outline-2
          b
            background-color: $colour-outline-2
        &[data-type="list"]
          border-color: $colour-outline-3
          b
            background-color: $colour-outline-3
        &[data-type="signature"]
          border-color: $colour-outline-4
          b
            background-color: $colour-outline-4
        &[data-type="date"]
          border-color: $colour-outline-5
          b
            background-color: $colour-outline-5
        b
          display: block
        .tooltip
          opacity: 1
          top: -50px
      &__type
        position: absolute
        font-size: $font-size-small
        padding: $spacing-xs
        color: #fff
        margin-top: 0
        top: -25px;
        left: -1px;
      p
        margin: 0
        padding: $spacing-small 0
  .text-element
    background: $color-bg
    margin: $spacing-small 0
    padding: $spacing-small
    @include clearfix
    &__icon
      background: $color-bg-dark
      color: #fff
      float: left
      line-height: 0
      padding: $spacing-small
      margin: -($spacing-small)
</style>
