<template>
  <div class="container">
      {{value}}
      <button class="add" @click="change('+')">+</button>
      <button class="rd" @click="change('-')">-</button>
  </div>
</template>

<script>
export default {
  props: {
      value: {
          type: Number,
          default: ()=> 0
      }
  },
  data() {
    return {
    }
  },
  methods: {
      change(type) {
          type === '+' ? this.$emit('input', this.value+1) : this.$emit('input', this.value-1)
      }
  }
}
</script>

<style lang="less" scoped>
</style>
