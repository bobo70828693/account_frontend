<template>
  <div>
    <Marquee />
    <el-row 
      type="flex" 
      class="row-bg" 
      justify="space-between"
      >

      <el-col :lg=8 :xs=8>
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
      <el-col :lg=8 :xs=8>
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
      <el-col :lg=8 :xs=8>
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
      <Table :refresh="refresh" @disableRefresh="disableRefresh"/>
    </el-row>
    <div class="create-btn-wrapper">
      <div class="create-btn-box" @click="handleStockAddDialog">
        <i class="el-icon-circle-plus-outline"></i>
      </div>
    </div>
    <AddStockDialog
      v-if="showAddStockDialog"
      @close="closeHandle"
    />
  </div>
</template>

<script>
import AddStockDialog from '@/components/stock/addStockDialog.vue'
import Table from '@/components/dashboard/Table.vue'
import Marquee from '@/components/dashboard/Marquee.vue'

export default {
  data() {
    return {
      showAddStockDialog: false,
      refresh: false,

      isLoading: true,
      stock_data: {
        cost: 56000,
        num: 3,
        income: 3000
      }
    }
  },
  components: {
    Table,
    AddStockDialog,
    Marquee
  },
  mounted() {
    
  },
  methods: {
    handleStockAddDialog() {
      this.showAddStockDialog = true;
    },
    closeHandle() {
      this.showAddStockDialog = false;
      this.refresh = true;
    },

    disableRefresh() {
      this.refresh = false;
    }
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
.el-col {
  width: 25%;
}
</style>
