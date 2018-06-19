<template>
  <div class="slide">
    <el-menu :collapse="isCollapse" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" router>
      <template v-for="item in items">
        <template v-if="!item.subs">
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              {{subItem.title}}
            </el-menu-item>
          </el-submenu>
        </template>
      </template>

    </el-menu>
  </div>
</template>

<script>
import bus from './bus';
export default {
  data() {
    return {
      isCollapse: true,
      items: [
        {
          index: 'set',//设置
          icon: 'el-icon-setting',
          title: '设置'
        },
        {
          index: '2',
          icon: 'el-icon-document',
          title: '数据',
          subs: [
            {
              index: 'table',
              title: '表单'
            }
          ]
        },
        {
          index: '3',
          icon: 'el-icon-menu',
          title: '运营功能',
          subs: [
            {
              index: 'fl',
              title: '分类管理'
            },
            {
              index: 'gg',
              title: '商户审核'
            }
          ]
        },
        {
          index: 'music',
          icon: 'el-icon-picture-outline',
          title: '图表'
        },
        {
          index: 'map',
          icon: 'el-icon-location',
          title: '地图'
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    bus.$on('collapse', collapse => {
      this.isCollapse = collapse;
    })
  }
}
</script>

<style>
.el-menu {
  border: 0;
}

.el-menu li:hover {
  background: rgba(40, 50, 70);
}

.slide {
  transition: 10s;
  position: absolute;
  background: rgb(50, 65, 87);
  left: 0;
  bottom: 0;
  top: 60px;
}

.slide ul:not(.el-menu--collapse) {
  width: 250px;
}
</style>
