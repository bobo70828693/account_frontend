<template>
  <div>
    <el-row 
      type="flex" 
      class="row-bg" 
      justify="space-around"
      :gutter="100"
      >

      <el-col :lg=8 :xs=4>
        <el-card shadow="always">
          <div class="inform-box">
            <div class="content-box inform-text">
              <span>Cost</span>
              <span style="font-weight: bold; font-size: 16px;">{{ stock_data.cost }}</span>
            </div>
            <div class="content-box inform-pic">
              <i class="el-icon-s-cooperation"/>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg=8 :xs=4>
        <el-card shadow="always">
          <div class="inform-box">
            <div class="content-box inform-text">
              <span>Num</span>
              <span style="font-weight: bold; font-size: 16px;">{{ stock_data.num }}</span>
            </div>
            <div class="content-box inform-pic">
              <i class="el-icon-tickets" />
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg=8 :xs=4>
        <el-card shadow="always">
          <div class="inform-box">
            <div class="content-box inform-text">
              <span>Income</span>
              <span style="font-weight: bold; font-size: 16px;">{{ stock_data.income }}</span>
            </div>
            <div class="content-box inform-pic">
              <i class="el-icon-warning-outline" />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <Table />
    </el-row>
    <div class="create-btn-wrapper">
      <div class="create-btn-box">
        <i class="el-icon-circle-plus-outline"></i>
      </div>
    </div>
  </div>
</template>

<script>
// import LogoutDialog from '@/components/user/LogoutDialog.vue'
import Table from '@/components/dashboard/Table.vue'

export default {
  data() {
    return {
      showLogoutDialog: false,
      isLoading: true,
      stock_data: {
        cost: 56000,
        num: 3,
        income: 3000
      }
    }
  },
  components: {
    Table
  },
  mounted() {
    
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.el-card.is-always-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.create-btn-wrapper {
  z-index: 999;
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  .create-btn-box {
    cursor: pointer;
    margin: 0 auto;
    background-color: transparent;
    i {
      transition: 0.3s;
      font-size: 40px;
      color: #FEDC6B;
      background-color: #e24e42;
      border-radius: 100%;
      &:hover {
        font-size: 55px;
      }
    }
  }
}
</style>
