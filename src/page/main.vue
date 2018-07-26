<template>
  <div>
    <div class="main_wrapper">
      <div class="nav_test">
        <sd-nav></sd-nav>
      </div>
      <div style="width:calc(100% - 180px);">
        <sd-top></sd-top>
        <div class="main_window">
          <div :is="nowcomponent"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import sdTop from '@/components/top'
import sdNav from '@/components/nav'
import erpmain from '@/page/erpmain'
import ywgl from '@/page/ywgl/ywgl'
export default {
  name: 'home',
  data () {
    return {
      nowcomponent:'ywgl',
      activeNames: ['1'],
      now_arr: [{
        label: '首页',
        name: 'erpmain'
      },]
    }
  },
  components: {
		sdTop,
    sdNav,
    ywgl
  },
  methods: {

  }
}
</script>
<style lang='less' scoped>
  .main_wrapper{
    display: flex;
    align-items:stretch;
    .nav_test {
      background: #cae6fb;
      min-width: 180px;
      min-height: 770px;
    }
    .main_window{
      width:100%;
      min-height: 710px;
      background:#e9f3fd;
    }
  }
</style>
