<template>
  <div>
    <div class="wrapper">
      <el-tabs type="border-card" class="content">
        <el-tab-pane v-for="item in tab_nav" :label="item.name" :key="item.key">我是{{item.name}}</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jyfx',
    data() {
      return {
        tab_nav:[
          {
            name:'订单分析',
            key:'1'
          },
          {
            name:'合同分析',
            key:'2'
          },
          {
            name:'销售分析',
            key:'3'
          },
          {
            name:'应收应付',
            key:'4'
          },
          {
            name:'畅销品分析',
            key:'5'
          },
          {
            name:'区域分析',
            key:'6'
          },
          {
            name:'业绩排行',
            key:'7'
          },
          {
            name:'客户分析',
            key:'8'
          },
          {
            name:'市场分析',
            key:'9'
          },
          {
            name:'费用分析',
            key:'10'
          },
          {
            name:'团队分析',
            key:'11'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';
  .wrapper{
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
  .content{
    border:none;
    border-bottom:1px solid #d2d2d2;
    height:670px;
    /*box-shadow:0px 4px 4px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(0,0,0,.04);*/
    box-shadow:none;
  /deep/ #tab-3,/deep/ #tab-7{
    margin-left:20px;
  }
  /deep/ .el-tabs__header{
    background: #fff;
  }
  /deep/ .el-tabs__item{
    margin:0px;
    border:1px solid #d2d2d2;
    border-bottom:none;
    background-color: #fff;
    margin-right:2px;
    font-size:14px;
    /*border-top-left-radius:10px;*/
    /*border-top-right-radius:10px;*/
    color:#048e50;
  }
  /deep/ .is-active{
    border:1px solid #048e50;
    border-bottom:none;
    background: #048e50;
    color:#fff;
  }
  /deep/ .el-tabs__item:hover{
    border:1px solid #048e50;
    border-bottom:none;
    background: #048e50;
    color:#fff;
  }
  /deep/ .el-tabs__content{
    border:1px solid #048e50;
    min-height: 600px;
  }
  }
  }
</style>
