<template>
  <div>
    <NavBar />
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'

export default {
  data() {
    return {}
  },

  components: {
    NavBar
  }
}
</script>
