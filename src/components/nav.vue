<template>
	<div class="nav_container">
    <div class="top"></div>
    <el-menu
      :default-active="this.$parent.nowcomponent"
      class="el-menu-vertical-demo"
      background-color="#d8f7e8"
      text-color="#000000"
      @select="handleSelect">
      <el-menu-item v-for="item in nav_menu" :index="item.url" :key="item.url">
        <span style="position:relative;" slot="title">{{item.name}}<div class="triangle_border_right"></div></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
	name: 'sd-nav',
  	data () {
	    return {
        nav_menu:[
          {
            name:'业务办公',
            url:'ywgl'
          },{
            name:'订单管理',
            url:'ddgl'
          },{
            name:'合同管理',
            url:'htgl'
          },{
            name:'销售管理',
            url:'xsgl'
          },{
            name:'物流管理',
            url:'wlgl'
          },
          {
            name:'客户管理',
            url:'khgl'
          },{
            name:'市场管理',
            url:'scgl'
          },{
            name:'费用管理',
            url:'fygl'
          },{
            name:'团队管理',
            url:'tdgl'
          },{
            name:'经营分析',
            url:'jyfx'
          }
        ]
      }
	},
  methods: {
    handleSelect(key,keyPath,event) {
      this.$parent.nowcomponent = key
    }
  }
}
</script>
<style lang="less" scoped>
	@import '../style/mixin';
  .el-menu--collapse{
    width:100%;
  }
  .top{
    height:60px;
    background-color:#005826;
  }
  /deep/ .el-menu{
    .is-active{
      background: #048e50!important;
      span{
        color:#fff;
        .triangle_border_right{
          border-color:transparent transparent transparent #fff;
        }
      }
    }
    li{
      text-align: center;
      span{
        font-size: 16px;
      }
    }
    li:hover{
      background: #048e50!important;
      span{
        color:#fff;
        .triangle_border_right{
          border-color:transparent transparent transparent #fff;
        }
      }
    }
  }
  .triangle_border_right{
    width:0;
    height:0;
    border-width:4px 0 4px 6px;
    border-style:solid;
    border-color:transparent transparent transparent #83c4a4;/*透明 透明 透明 灰*/
    position:absolute;
    right:-16px;
    top:6px;
  }
</style>
