<template>
  <div>
    <nav class="nav-bar">
      <ul class="flex-nav">
        <a href="">TT</a>
      </ul>
      <div class="account-box">
        <div class="user-box">
          <div class="user-name"><span>{{ user_name }}</span></div>
          <div class="user-pic">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div class="dropdown-menu">
            <div id="logout-text" @click="logoutDialogHandle">Logout</div>
          </div>
        </div>
      </div>
    </nav>

    <LogoutDialog v-if="showLogoutDialog" @close="closeHandle" />
  </div>
</template>
<script>
import LogoutDialog from '@/components/user/LogoutDialog'
import { apiUserSelf } from '@/service/api'

export default {
  data() {
    return {
      user_name: "Huang Wei",
      showLogoutDialog: false
    }
  },

  components: {
    LogoutDialog
  },

  mounted() {
    this.initUserData()
  },

  methods: {
    initUserData() {
      apiUserSelf()
        .then((res) => {
          let user_data = res.data.data
          this.user_name = user_data.name
        })
    },

    logoutDialogHandle() {
      this.showLogoutDialog = true
    },

    closeHandle() {
      this.showLogoutDialog = false;
    }
  }
}
</script>
