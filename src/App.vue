<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    font-family: Roboto, Helvetica, sans-serif;
  }
  .with--visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    max-width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
</style>