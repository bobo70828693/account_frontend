<template>
  <div class="dialog-wrapper">
    <div class="dialog-box-wrapper">
      <div class="dialog-header">
        <div class="close-btn" @click="closeHandle"></div>
      </div>
      <div class="dialog-body">
        <span class="common-text">確定要登出嗎？</span>
        <div class="btn-group">
          <div class="base-btn btn-confirm" @click="logout">確定</div>
          <div class="base-btn btn-cancel" @click="closeHandle">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  methods: {
    closeHandle() {
      this.$emit('close')
    },
    logout() {
      let loader = this.$loading.show();
      this.$store.dispatch('AuthUser/logout')
      .then(() => {
        this.$router.push({ path: '/login' })
      })
      .then(() => {
        loader.hide()
      });
    }
  }
}
</script>
