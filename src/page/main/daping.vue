<style scoped lang='less'>
</style>

<template>

<div>
    123
    <el-row :gutter="20">
        <el-col :span="4">
            <el-button type="primary" @click="random()">generation</el-button>
        </el-col>
        <el-col :span="4">
            <el-button type="primary" @click="start(randomList)">start</el-button>
        </el-col>
    </el-row>

    <el-row :gutter="10">
        <el-col :span="12">
            <div id="main" style="height:200px"></div>
        </el-col>
    </el-row>
</div>

</template>

<script>

// import echarts from 'echarts'
let echart = ''

export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            mychart: '',
            randomList: [],
            test_array: []
        }
    },
    created () {},
    mounted () {
        this.myChart = echarts.init(document.getElementById('main'));
        this.myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
    watch: {
        randomList(newval, oldval) {
                this.myChart.setOption({
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: newval //this.randomList
                    }]
                });
            },
            test_array(newv, oldv) {
                console.log("watch", JSON.stringify(newv))
            }
    },
    methods: {
        random() {
                this.randomList = []
                let start = 0,
                    end = 100
                let diff = end - start
                for (let i = 0; i < 6; i++) {
                    let temp = parseInt(Math.random() * diff) + start //0-9
                    this.randomList.push(temp)
                }
                // console.log(randomList)

            },
            // 执行方法
            start(array) {
                // 排序测试
                // this.paixu1(array)
                // console.log(this.randomList,this.paixu1(array))

                // 随机分 1 块钱  测试
                this.test_random({
                    time: 20000
                })
            },
            paixu1({
                array,
                attr = null
            }) {
                for (let i = 0; i < array.length; i++) {
                    for (let j = i; j < array.length; j++) {
                        if (attr === null) {
                            if (array[i] > array[j]) {
                                let temp = array[i]
                                array.splice(i, 1, array[j])
                                array.splice(j, 1, temp)
                                    // array[i]=array[j]
                                    // array[j]=temp
                            }
                        } else {
                            if (array[i][attr] > array[j][attr]) {
                                let temp = array[i]
                                array.splice(i, 1, array[j])
                                array.splice(j, 1, temp)
                            }
                        }
                    }
                }
            },
            test_Init(amound, val) {
                for (let i = 0; i < amound; i++) {
                    this.test_array.push({
                        val: val,
                        name: Math.random().toString(36).substring(3, 8)
                    })

                }
            },
            test_random({
                amound = 10,
                    val = 200,
                    time = 100
            }) {
                let rand1, rand2;
                console.log(arguments)
                if (this.test_array.length !== amound) {
                    this.test_Init(amound, val)
                }

                for (let i = 0; i < time; i++) {
                    rand1 = parseInt(Math.random() * amound)
                    rand2 = parseInt(Math.random() * amound)
                    if (this.test_array[rand1].val !== 0) {
                        this.test_array[rand1].val = this.test_array[rand1].val - 1
                        while (rand2 === rand1) {
                            rand2 = parseInt(Math.random() * amound)
                        }
                        this.test_array[rand2].val = this.test_array[rand2].val + 1
                    }

                    // if(i===50||i===100||i===150){
                    //   console.log(i,this.test_array.toString())
                    // }
                }
                this.paixu1({
                    array: this.test_array,
                    attr: 'val'
                })
            },

    }

}

</script>
