<template>
    <div>
      <div class="wrapper">
        <el-tabs type="border-card" class="content">
          <el-tab-pane v-for="item in tab_nav" :label="item.name">我是{{item.name}}</el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ywgl',
        data() {
            return {
              tab_nav:[
                {
                  name:'业务报告'
                },
                {
                  name:'行政申请'
                },
                {
                  name:'工作日志'
                },
                {
                  name:'价格申请'
                },
                {
                  name:'退货申请'
                },
                {
                  name:'换货申请'
                },
                {
                  name:'赠品申请'
                },
                {
                  name:'业务批阅'
                },
                {
                  name:'行政批阅'
                },
                {
                  name:'日志分享'
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
        box-shadow:0px 4px 4px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(0,0,0,.04);
        /deep/ #tab-3,/deep/ #tab-7{
          margin-left:40px;
        }
        /deep/ .el-tabs__header{
          background: #e9f3fd;
        }
        /deep/ .el-tabs__item{
          margin:0px;
          border-bottom:none;
          background-color: #cae6fb;
          margin-right:2px;
          border-top-left-radius:10px;
          border-top-right-radius:10px;
          color:#000;
        }
        /deep/ .is-active{
          border:1px solid #d2d2d2;
          border-bottom:none;
          background: #fff;
        }
        /deep/ .el-tabs__item:hover{
          border:1px solid #d2d2d2;
          border-bottom:none;
          color:#000!important;
          background: #fff;
        }
        /deep/ .el-tabs__content{
          border-left:1px solid #d2d2d2;
          border-right:1px solid #d2d2d2;
          border-bottom:1px solid #d2d2d2;
          min-height: 600px;
        }
      }
    }
</style>
