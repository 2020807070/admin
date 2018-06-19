<template>
    <div>
        <el-main>
            <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
        </el-main>
        <el-table :data="tableData4" style="width: 100%">
            <el-table-column fixed prop="shopName" label="商户名称" width="150">
            </el-table-column>
            <el-table-column prop="shopTel" label="商家联系方式" width="120">
            </el-table-column>
            <el-table-column prop="bossName" label="老板" width="120">
            </el-table-column>
            <el-table-column prop="bossPhone" label="老板联系方式" width="120">
            </el-table-column>
            <el-table-column prop="fenlei" label="食品分类" width="300">
            </el-table-column>
            <el-table-column prop="time" label="营业时间" width="120">
            </el-table-column>
            <el-table-column prop="location" label="地址" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button type="text" size="small">
                        通过
                    </el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                        不通过
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            tableData4: this.$store.state.getList
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: { formatter: '{value}%' },
                        data: [{ value: 45.6, name: '目标/万元' }],
                        startAngle: 180, //开始角度
                        endAngle: 0, //结束角度
                        axisLine: {
                            show: true,
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: [ //表盘颜色
                                    [0.456, "#ff6659"],//0-50%处的颜色

                                    [1, "#0bd2ff"]//90%-100%处的颜色
                                ],
                                width: 50,//表盘宽度
                            }
                        },
                    }
                ]
            });
        }
    }
}
</script>

<style>
.Drag {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .1);
    position: relative;
}

.DragBox {
    width: 300px;
    height: 200px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0)
}
</style>
