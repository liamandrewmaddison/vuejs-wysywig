<template>
  <div id="app">
    <header>
      <a class="button button--cta button--small button--right">
        <icon name="save" height="21"></icon>
        <span>Save</span>
      </a>
      <h3>VueJS WYSIWYG</h3>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
  @import '~styles/base.sass'
</style>
