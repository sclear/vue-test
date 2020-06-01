<template>
  <div class="container lj">
      <span>{{sum}}</span>
      <button class="add" @click="change('+')">+</button>
      <button class="rd" @click="change('-')">-</button>
      <sb></sb>
  </div>
</template>

<script>
export default {
  components: {
    sb: ()=> import('./subs')
  },
  props: {
      value: {
          type: Number,
          default: ()=> 0
      }
  },
  created() {
    this.eimtChange()
  },
  data() {
    return {
      sum: 0
    }
  },
  watch: {
    value(n, o) {
      if(n !== this.sum) this.eimtChange
    }
  },
  methods: {
      change(type) {
          this.sum = type === '+' ? this.sum + 1 : this.sum - 1;
          type === '+' ? this.$emit('input', this.value+1) : this.$emit('input', this.value-1);
      },
      eimtChange(){
        if(this.value || this.value === 0) this.sum = this.value
      }
  }
}
</script>

<style lang="less" scoped>
</style>
