<template>
  <view class="index-wrapper-">
      <view class="app-body">

          <view class="" style="height:100vh; width:100vw;" >
            <view class="centered-position" style="height:100vh; width:100vw; position:absolute;" >

              <img src="https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/bg2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T134932Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=50e811abc24ef58f39e18af5aa18969fd843ed68334dc5053858e10397047a33" style="height:100vh; width:100vw; " />

            </view>
            <view  style="height:100vh; width:100vw; position:absolute;" >

              <view class="button-holder centered-position" style="height:60px; width:100vw; " >
                <nut-button type="primary"  color="#7232aa"   @click="openSwitch('isVisible7')" >Popup Calendar</nut-button>
              </view>
                <view class="centered-position" style="width:100vw;  height:60vh; margin-top:20px; " >
                  <view style="width:90vw; height:60vh; background:rgb(250,250,250,0.4); border-radius:12px; ">
                    <view class="centered-position" style="  overflow:hidden; border-radius:12px; margin-top:20px;  ">
                      <view class="centered-position" style=" width:80%; overflow:hidden; border-radius:12px; margin-top:20px;  ">
                        Click button to Show Calendar
                        点击按钮显示日历
                      </view>
                    </view>
                    <view class="centered-position" style=" overflow:hidden; border-radius:12px; margin-top:20px; ">
                      <view class="centered-position" style=" width:80%; overflow:hidden; border-radius:12px; ">
                      Select Multiple Dates, click okay
                      选择多个日期
                      </view>
                    </view>
                    <nut-calendar
                      :poppable="true"
                      v-model:visible="isVisible7"
                      :default-value="date7"
                      type="multiple"
                       title="Select Date or Dates"
                      :start-date="`2022-01-01`"
                      :end-date="`2022-09-10`"
                      confirm-text="Confirm Select"
                      @close="closeSwitch('isVisible7')"
                      @choose="setChooseValue7"
                    >
                      <template v-slot:day="date">
                        <span>{{ date.date.day <= 9 ? '0' + date.date.day : date.date.day }}</span>
                      </template>
                      <template v-slot:bottomInfo="date">
                        <span v-show="redDot(date)" class="info" style=" lineHeight:14px; height:8px; position:relative; left:24px; border-radius:10px; width:8px; box-shadow:0px 0px 2px 2px #fff;  background:#ff0054;">

                        </span>
                      </template>
                    </nut-calendar>
                    <nut-popup
                    pop-class="popclass" :style="{ padding: '10px 10px' }"
                     v-model:visible="showBasic"
                      :z-index="100">
                      <view  class="button-holder centered-position" style="height:34px; font-size:14px; color:#7232aa; font-weight:bold; " >
                        {{selectedTitle}}
                      </view>
                      <view v-for="(date_,index_) in date7" :key="index_" class="button-holder centered-position" style="height:24px; font-size:14px; " >
                        {{date_}}
                      </view>
                    </nut-popup>
                  </view>
                </view>





            </view>

          </view>



      </view>
  </view>

</template>

<script >
import { onMounted, reactive, toRefs } from 'vue';
import ajax from '../../plugins/ajax';

export default {

  name: 'Index',
  components: {


  },
  data() {
    return {
      showBasic:false,
      lastMonthDay:'',
      dateResult:'',
      selectedTitle:'Selected Date',
      data: [],
      date7:[],
      date: '2022-07-08',
      isVisible:true,
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

    // :::::::::::: decide to show red dot or not
    redDot(date) {
      date=date.date.year+'-'+date.date.month+'-'+date.date.day
      let d1 = new Date(date)
      if(d1.getDay() === 1 || d1.getDay() === 3 || d1.getDay() === 5){
        return true
      }else{
        return false
      }
    },
    openSwitch(param){
      console.log('open')
      this.isVisible7=true;
      this.date7=[]
    },
    closeSwitch(param) {
      console.log('cloose')
      this.isVisible7=false;
      this.date7=[]
    },
    setChooseValue7(chooseData: any){
      if(chooseData.length==1){
        this.selectedTitle='Selected Dates'
        this.dateResult=chooseData[0][3]
        this.date7.push(chooseData[0][3])
      }else if(chooseData.length>1){
        for(let i=0; i<chooseData.length; i++){
          i==0? this.dateResult=chooseData[i][3]:   i>0 ?  this.dateResult=this.dateResult+', '+chooseData[i][3]: chooseData[i][3]
          i+1==chooseData.length? this.date7.push(chooseData[i][3]):  this.date7.push(chooseData[i][3]+',')

        }
      }
      chooseData.length>1?this.selectedTitle='Selected Dates':this.selectedTitle='Selected Date'
      this.showBasic=true

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
    handleCardClick(data) {
      this.$Taro.navigateTo({
        url: '/pages/playList/playList' + `?id=${data.id}`
      })
    },
    goCalendar(data) {
      this.$Taro.navigateTo({
        url: '/pages/calendar/calendar'
      })
    }

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
