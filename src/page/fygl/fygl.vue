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
    name: 'fygl',
    data() {
      return {
        tab_nav:[
          {
            name:'新增费用',
            key:'1'
          },
          {
            name:'费用汇总',
            key:'2'
          },
          {
            name:'差旅住宿',
            key:'3'
          },
          {
            name:'差旅交通',
            key:'4'
          },
          {
            name:'房屋租金',
            key:'5'
          },
          {
            name:'办公费用',
            key:'6'
          },
          {
            name:'餐饮接待',
            key:'7'
          },
          {
            name:'活动接待',
            key:'8'
          },
          {
            name:'礼品赠送',
            key:'9'
          },
          {
            name:'佣金返点',
            key:'10'
          },
          {
            name:'其他费用',
            key:'11'
          },
          {
            name:'费用计划',
            key:'12'
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
  /deep/ #tab-2,/deep/ #tab-11{
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
