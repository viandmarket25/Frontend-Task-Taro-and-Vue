<template>
  <view class="app">
      <!--
      <view class="app-header">

      </view>
      -->

      <view class="app-body">


          <view class="" style="height:100vh; width:100vw;" >
            <view class="centered-position" style="height:100vh; width:100vw; position:absolute;" >

              <img src="https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/bg2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T134932Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=50e811abc24ef58f39e18af5aa18969fd843ed68334dc5053858e10397047a33" style="height:100vh; width:100vw; " />

            </view>
            <view  style="height:100vh; width:100vw; position:absolute;" >

              <view class="button-holder centered-position" style="height:60px; width:100vw; s" >
                <nut-button type="primary"  color="#dc2f02" @click="goCalendar()">Calendar Task</nut-button>
              </view>
              <view class="button-holder centered-position" style="height:60px; width:100vw; s" >
                <nut-button type="primary"  color="#7232aa" @click="goBubble()">Bubble Task</nut-button>
              </view>
              <view  style="width:100vw;  height:20vh; margin-top:20px;  background:rgb(250,250,250,0.4); overflow:hidden; " >
                <view class="centered-position" style="  overflow:hidden; border-radius:12px; margin-top:20px;  ">
                  Click one of the buttons to see Task
                </view>
                <view class="centered-position" style=" overflow:hidden; border-radius:12px; ">
                单击其中一个按钮以查看任务
                </view>
              </view>





            </view>

          </view>


      </view>


      <nut-tabbar :bottom="true" color="#7232dd" @tab-switch="tabSwitch">
        <nut-tabbar-item tab-title="Home" icon="home"></nut-tabbar-item>
        <nut-tabbar-item tab-title="Account" icon="my"></nut-tabbar-item>
      </nut-tabbar>

  </view>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import ajax from '../../plugins/ajax'

export default {
  name: 'Index',
  components: {


  },

  data() {
    return {

      lastMonthDay:'',
      data: [],
      date: '2022-07-08',
      date7:[],
      isVisible:false,
      isVisible7:false,
      recommendList: [],
      todayStart: Math.floor(new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000),
      todayEnd: 0,
      MusicDateInfo: {}
    }
  },
  created() {
    this.todayEnd = this.todayStart + 24 * 60 * 60 * 1000

  },
  computed: {
    currentInstance() {
      return this.$store.state.currentInstance
    }
  },
  methods: {
    openSwitch(param){
      //state[`${param}`] = true;
        this.isVisible7=true;
    },
    closeSwitch(param) {
      //state[`${param}`] = false;
        this.isVisible7=false;
    },
    setChooseValue7(chooseData: any){
      let dateArr = chooseData.map((item: any) => {
        return item[3];
      });
      state.date7 = [...dateArr];
    },
    select(param: string){
      console.log(param);
    },


    getLastMonthDay(){
      let today = new Date();
      let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
      console.log(lastDayOfMonth)
      return lastDayOfMonth
    },
    endOfMonth(myDate){
      var last = new Date(new Date(new Date().setMonth(7)).setDate(0)).getDate();
      console.log(last);
      return last;
    },
    setChooseValue(v){
      console.log(v)
    },
    showCalendar(){
      this.isVisible=true;
    },
    hideCalendar(){
      this.isVisible=false;
    },
    tabSwitch(item, index) {
      console.log(item, index);
    },
    async getRecommendList() {
      const res = await ajax.get('http://localhost:3000/personalized?limit=5')
      this.recommendList = res.result
    },
    async getBannerData() {
      const res = await ajax.get('http://localhost:3000/banner?type=1')
      this.data = res.banners
    },

    async getMusicDateInfo() {
      const res = await ajax.get('/calendar', {
        startTime: this.todayStart,
        endTime: this.todayEnd
      })
      this.MusicDateInfo = res.data
    },
    async getHomeEnterData() {
      const res = await ajax.get('http://localhost:3000/homepage/block/page', {
        refresh: true
      })
    },
    async getRecommendResource() {
      const res = await ajax.get('/recommend/resource')
    },
    handleCardClick(data) {
      this.$Taro.navigateTo({
        url: '/pages/playList/playList' + `?id=${data.id}`
      })
    },
    goCalendar(data) {
      this.$Taro.navigateTo({
        url: '/pages/calendar/calendar'
      })
    },
    goBubble(data) {
      this.$Taro.navigateTo({
        url: '/pages/bubble/bubble'
      })
    },

  }
}
</script>

<style lang="scss">
.index-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.index-scroll__wrapper {
  height: calc(100vh - 135px);
}


.app-header{
  height:40px;
  width:100vw;

  background:#fafafa;
  box-shadow:0px 0px 0px 1px red;
  float:left;

}
.app-footer{
  height:10vh;
  width:100vw;

  background:#ffffff;
  float:left;

}
.app-body{
  height:92vh;
  width:100vw;

  background:#ffffff;
  float:left;
  overflow-y:scroll;


}
.button-holder{
  height:auto;
  width:100vw;


}
.centered-position{
  align-items: center;
  vertical-align:middle;
  justify-content:center;
  text-align:center;
  display:flex;

}


</style>
