<template>
  <div class="dialog-wrapper">
    <div class="dialog-box-wrapper">
      <div class="dialog-header">
        <span class="common-text">新增紀錄</span>
        <div class="close-btn" @click="closeHandle"></div>
      </div>
      <div class="dialog-body">
        <el-form ref="form" label-width="60px">
          <el-form-item label="股票">
            <el-select v-model="stock_code" filterable clearable>
              <el-option label="請選擇股票" :value="null"></el-option>  
              <el-option
                v-for="stock_code,index in stock_code_list"
                :key="index"
                :label="stock_code.stock_code + ' ' + stock_code.description"
                :value="stock_code.stock_code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="操作">
            <el-select v-model="action">
              <el-option label="請選擇動作" :value="null"></el-option>
              <el-option 
                v-for="item in action_options"
                :key="item.id"
                :label="item.label"
                :value="item.action"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="數量">
            <el-input-number v-model="num" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="備註">
            <el-input
              type="textarea"
              :row="4"
              placeholder="請輸入備註"
              v-model="description"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="btn-group">
          <div class="base-btn btn-confirm" @click="saveHandle">確定</div>
          <div class="base-btn btn-cancel" @click="closeHandle">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import { apiCreateStockTradeLog } from '@/service/api';

export default {
  data() {
    return {
      stock_code_list: [],

      stock_code: null,
      num: 0,
      action: null,
      current_price: 0,
      description: "",
      
      action_options: [
        {
          id: 1,
          action: 'in',
          label: '買入'
        },
        {
          id: 2,
          action: 'out',
          label: '賣出'
        }
      ]
    }
  },

  mounted() {
    this.initial()
  },

  methods: {
    ...mapGetters('StockCode', ['getStockCodeList']),
    
    initial() {
      this.stock_code_list = this.getStockCodeList();
    },

    closeHandle() {
      this.$emit('close')
    },

    saveHandle() {
      apiCreateStockTradeLog({
        stock_code: this.stock_code,
        action: this.action,
        num: this.num,
        price: this.current_price,
        description: this.description
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
        if (err.response.status == 403) {
          this.$alert(err.response.data.message, 'message', {
            confirmButtonText: '確認',
          });
        } else {
          this.$alert('初始化失敗', 'message', {
            confirmButtonText: '確認',
          });
        }
      })
      console.log("save")
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-body {
  height: 350px !important;
}
</style>
