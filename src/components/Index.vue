<template>
  <div class="container">
    <page></page>
    <tools></tools>
  </div>
</template>

<script>
import Page from '@/components/Page';
import Tools from '@/components/Tools';

export default {
  name: 'index',
  components: {
    page: Page,
    tools: Tools,
  },
};
</script>

<style lang="sass">
  @import '~styles/main.sass'
</style>
