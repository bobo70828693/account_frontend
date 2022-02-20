<template>
  <div class="stock_table">
    <el-table
      :data="tableData.data"
    >
      <el-table-column
        prop="created_at"
        label="日期"
      ></el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-tag v-if="scope.row.action=='in'" type="success" effect="dark">買入</el-tag>
          <el-tag v-if="scope.row.action=='out'" type="danger" effect="dark">賣出</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="編號"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.stock_info.stock_code + ' ' + scope.row.stock_info.description }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="成交價"
      ></el-table-column>
      <el-table-column
        prop="num"
        label="股數"
      ></el-table-column>
      <el-table-column
        prop="income"
        label="實現"
      ></el-table-column>
      <el-table-column
        prop="description"
        label="備註"
      ></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="tableData.current_page"
      layout="prev, pager, next"
      :page-sizes="[10, 50, 100]"
      :page-size="10"
      :total="tableData.total">
    </el-pagination>
  </div>
</template>

<script>
import { apiStockSearchList } from '@/service/api.js'

export default {
  data() {
    return {
      tableData: {},
      searchData: {}
    }
  },

  mounted() {
    this.getStockLogData()
  },

  methods: {
    getStockLogData() {
      apiStockSearchList(this.searchData)
        .then((res) => {
          this.tableData = res.data.data
        })
    },
    
    handleSizeChange(val) {
      this.searchData.per_page = val;
      this.getStockLogData();
    },

    handleCurrentChange(val) {
      this.searchData.page = val;
      this.getStockLogData();
    }
  }
}
</script>
<style scoped>
.stock_table {
  margin-top: 20px;
}
.el-pagination {
  background-color: #fff;
}
</style>