<template>
    <el-main>
        <div id="allmap"></div>
    </el-main>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    created() {
    }
    ,
    mounted() {
        let map = new BMap.Map('allmap');
        //116.306772,40.046682
        var point = new BMap.Point(116.306772, 40.046682);
        map.centerAndZoom(point, 18);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        map.addControl(new BMap.NavigationControl());        // 添加平移缩放控件
        map.addControl(new BMap.ScaleControl());             // 添加比例尺控件
        map.addControl(new BMap.OverviewMapControl());       //添加缩略地图控件
        map.enableScrollWheelZoom();                         //启用滚轮放大缩小
        map.disable3DBuilding();
        let styleJson = [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": {
                    "hue": "#007fff",
                    "saturation": 89
                }
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#ffffff"
                }
            }
        ]
        map.setMapStyle({ styleJson: styleJson });
    }
}
</script>

<style>
#allmap {
    width: 100%;
    height: 460px;
}
</style>
