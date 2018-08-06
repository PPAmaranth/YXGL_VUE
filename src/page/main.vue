<template>
  <div>
    <div class="main_wrapper">
      <div class="nav_test">
        <sd-nav></sd-nav>
      </div>
      <div style="width:calc(100% - 170px);">
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
import ywgl from '@/page/ywgl/ywgl'
import ddgl from '@/page/ddgl/ddgl'
import htgl from '@/page/htgl/htgl'
import xsgl from '@/page/xsgl/xsgl'
import wlgl from '@/page/wlgl/wlgl'
import khgl from '@/page/khgl/khgl'
import scgl from '@/page/scgl/scgl'
import fygl from '@/page/fygl/fygl'
import tdgl from '@/page/tdgl/tdgl'
import jyfx from '@/page/jyfx/jyfx'
export default {
  name: 'home',
  data () {
    return {
      nowcomponent:'ywgl'
    }
  },
  components: {
		sdTop,
    sdNav,
    ywgl,
    ddgl,
    htgl,
    xsgl,
    wlgl,
    khgl,
    scgl,
    fygl,
    tdgl,
    jyfx
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
      background: #d8f7e8;
      min-width: 170px;
      min-height: 770px;
    }
    .main_window{
      width:100%;
      min-height: 710px;
      background:#fff;
    }
  }
</style>
