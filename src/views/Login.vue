<template>
  <div class="login-wrapper">
    <div class="login-box login-info-box">
      <div class="login-title">
        致富關鍵
      </div>
    </div>
    <div class="login-box login-user-box">
      <div class="login-user-box">
        <el-form>
          <el-form-item label="信箱" label-width="60px">
            <el-input autofocus v-model="user_email"></el-input>
          </el-form-item>
          <el-form-item label="密碼" label-width="60px">
            <el-input v-model="user_password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="operating-button operating-button--submit" type="primary" @click="login">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user_email: '',
      user_password: ''
    }
  },

  methods: {
    login() {
      let loader = this.$loading.show(); 
      this.$store.dispatch('AuthUser/loginRequest', {
        email: this.user_email,
        password: this.user_password
      })
      .then(() => {
        this.$router.push({ path: '/dashboard' })
      })
      .catch((err) => {
        if (err.response.status == 421) {
          this.$alert('帳號密碼錯誤', 'message', {
            confirmButtonText: '確認',
          });
        } else if (err.response.status == 423) {
          this.$alert('帳號異常', 'message', {
            confirmButtonText: '確認',
          });
        } else if (err.response.status == 403) {
          this.$alert(err.response.data.message, 'message', {
            confirmButtonText: '確認',
          });
        } else {
          this.$alert('初始化失敗', 'message', {
            confirmButtonText: '確認',
          });
        }
      })
      .then(() => {
        loader.hide()
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.login-title {
  text-shadow: 3px 3px $color_yellow;
  font-size: 70px;
  font-weight: bold;
  color: $color_black;
}
.login-info-box {
  border: none !important;
  box-shadow: none !important;
}
</style>
