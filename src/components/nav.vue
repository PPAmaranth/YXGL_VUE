<template>
	<div class="nav_container">
    <div class="top"></div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#cae6fb"
      text-color="#000000"
      active-text-color="#000000">
      <el-menu-item v-for="item in nav_menu" index="item.url" :key="item.url">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
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
            name:'业务管理',
            icon:'el-icon-menu',
            url:'1'
          },{
            name:'订单管理',
            icon:'el-icon-menu',
            url:'2'
          },{
            name:'合同管理',
            icon:'el-icon-menu',
            url:'3'
          },{
            name:'销售管理',
            icon:'el-icon-menu',
            url:'4'
          },{
            name:'物流管理',
            icon:'el-icon-menu',
            url:'5'
          },
          {
            name:'客户管理',
            icon:'el-icon-menu',
            url:'6'
          },{
            name:'市场管理',
            icon:'el-icon-menu',
            url:'7'
          },{
            name:'费用管理',
            icon:'el-icon-menu',
            url:'8'
          },{
            name:'团队管理',
            icon:'el-icon-menu',
            url:'9'
          },{
            name:'经营分析',
            icon:'el-icon-menu',
            url:'10'
          }
        ]
      }
	},
  methods: {

  }
}
</script>
<style lang="less" scoped>
	@import '../style/mixin';
  .el-menu--collapse{
    width:100%;
  }
  .top{
    height:65px;
    background-color:#0f97fa ;
  }
  /deep/ .el-menu{
    .is-active{
      background:#e9f3fd;
    }
    li:hover{
      background: #e9f3fd!important;
    }
  }
</style>
