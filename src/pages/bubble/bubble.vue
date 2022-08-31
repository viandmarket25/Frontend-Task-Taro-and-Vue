<template>
  <view class="index-wrapper-">
      <view class="app-body">

        <view class="" style="height:100vh; width:100vw;" >
          <view class="centered-position" style="height:100vh; width:100vw; position:absolute;" >
            <img src="https://sgp1.digitaloceanspaces.com/yopipi-cdn/content-store/taro/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T011828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8bdfffd32738c30efb90ab728c72f5ab4b816e51aec054f4497584478c093124" style="height:100vh; width:100vw; " />
          </view>
          <view  style="height:100vh; width:100vw; position:absolute; overflow-y:scroll; " >
            <view class="centered-position" style="height:10vh; width:100vw; margin-top:10px; " >
              <view style="height:10vh; width:90vw; position:absolute; border-radius:12px; background:rgb(250,250,250,0.6); " >
                <view class="centered-position" style=" width:80%; overflow:hidden; border-radius:12px; margin-top:20px;  ">
                  Hey Jimy, your task list for today.
                </view>
              </view>
            </view>
            <view  class="centered-position" style="height:auto; width:100vw; margin-top:20px;  " >

              <view v-show="bubblesLoaded" id="random-images"  style="height:auto; width:92vw; margin-top:20px;  " >
                <view v-show="!taskData[index_].disappeared" @click="showBubble(index_)"
                  v-for="(task,index_) in taskData" :key="index_"
                  :style="`margin-left:`+ task.marginLeft+`; margin-top:`+ task.marginTop+`;opacity:`+getOpacity(index_)+`; width:auto; margin-right:4px; float:left; ` "
                    >
                  <nut-animate type='breath' :loop='true'>
                    <view class="app-body" :width="task.size" :height="task.size"
                      :style="` border-radius:100px; border:1px solid #f1f1f1; position:relative; background:#1e6091; box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.11); `" >
                      <img :src="task.image" :width="task.size" :height="task.size" style=" " />
                    </view>
                  </nut-animate>
                  <view style="margin-top:2px; font-size:13px; font-weight:bold; color:#ffffff; ">
                    {{task.title}}
                  </view>


                </view>

              </view>

            </view>
            <view class="centered-position" style="height:10vh; width:100vw; margin-top:20px; " >
              <view style="height:10vh; width:90vw;  border-radius:12px; background:rgb(250,250,250,0.6); " >
                <view class="centered-position" style=" width:80%; overflow:hidden; border-radius:12px; margin-top:20px;  ">
                  Bubble Bubble
                </view>
              </view>
            </view>

            <nut-popup

            pop-class="popclass" :style="{ padding: '10px 10px' }"
             v-model:visible="taskPopup.showPopup"
              :z-index="100">
              <view style="` height:40px; width:100vw; border-radius:100px; position:relative;  `" >
                <img :src="taskPopup.image" style=" width:50px; height:50px; " />
              </view>
              <view  class="button-holder centered-position" style="height:34px; font-size:14px; color:#7232aa; font-weight:bold; " >
                  {{taskPopup.title}}
              </view>
              <view class="button-holder centered-position" style="height:24px; font-size:14px; " >
                Have fun with the task
              </view>
            </nut-popup>



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
      taskPopup:{
        image:'',
        title:'',
        showPopup:false,
      },
      bubblesLoaded:false,
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
      MusicDateInfo: {},
      taskData:[
        {
          title:"walking",
          image:"https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/walking.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T135012Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5b0659140b3f2d1e9a08854e6f7aa94e4e02d0d12d8bbae7fce575bfe7aa7762",
          selected:false,
          disappeared:false,
          position:[],
          size:'20px',
            marginLeft:'20px',
              marginTop:'20px',
              isMoved:false,
              showPopup:false,

        },
        {
          title:"Do not Eat",
          image:"https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/salad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T135311Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1377ad8836de3afa857b5e55d222ac0fb725b2f6767efe630a440e40c76094ac",
          selected:false,
          disappeared:false,
          position:[],
          size:'20px',
          marginLeft:'',
            marginTop:'20px',
            isMoved:false,
            showPopup:false,

        },
        {
          title:"Meditating",
          image:"https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/meditation.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T070726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f4df519b537c403009458d69751cb9bb709e3d7a89bd49e42ade814377d497d9",
          selected:false,
          disappeared:false,
          position:[],
            size:'20px',
              marginLeft:'',
                marginTop:'20px',
                isMoved:false,
                showPopup:false,

        },
        {
          title:"Water",
          image:"https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/drink-water.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T135035Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b73aa4500fb5e77f064c980da6310972c6c90091e15016a2d88ebe59ac256588",
          selected:false,
          disappeared:false,
          position:[],
            size:'20px',
              marginLeft:'',
                marginTop:'20px',
                isMoved:false,
                showPopup:false,

        },
        {
          title:"Stand",
          image:"https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/baby.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T135348Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cf1dd2a317ead135df4876b999383e038e8a56ca337279763ae5b1cc4e725efd",
          selected:false,
          disappeared:false,
          position:[],
            size:'20px',
              marginLeft:'',
                marginTop:'20px',
                isMoved:false,
                showPopup:false,
        }

      ],
    }
  },
  created() {
    this.todayEnd = this.todayStart + 24 * 60 * 60 * 1000
    //onload()
    setTimeout(function(placeTaskPhotos){
      placeTaskPhotos()
    },900,this.placeTaskPhotos)


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

    componentClick (index) {



    },

    getOpacity(index){
      if(this.taskData[index].selected==true){
        return 0.4
      }else{
        return 1

      }

      return
    },
    showBubble(index){
        this.componentClick (index)
      this.taskData[index].selected=true
      this.taskData[index].showPopup=true



      this.taskPopup.showPopup=true
      this.taskPopup.image=  this.taskData[index].image
      this.taskPopup.image=  this.taskData[index].title




    },
    doTask(index){
      this.taskData[index].disappeared=true


    },
    placeTaskPhotos(){
      let element= document.getElementById('random-images')
      console.log(element)
      let positionData=[

      ]
      for(let i=0; i<this.taskData.length; i++){
          let size=Math.floor(50+Math.random() * 30)
          let left=Math.floor(20+Math.random() * 220)
          let top=Math.floor(10+Math.random() * 30)
          let p={
            "left":left,
            "size":size,
            "top":top,
            isMoved:false,
          }
          console.log("before: left:: ",p.left,"size:: ",p.size,"top:: ",p.top,  this.taskData[i].title)

          if(i>0 ){


            /*
            if(positionData[i-1].left<150 && p.left-positionData[i-1].size >100  ){
              if(positionData[i-1].left+80<300){
                p.top='-'+positionData[i-1].size
                p.left=p.left+p.size-10

              }
            }
            if(positionData[i-1].left<100 && p.left-positionData[i-1].size >100  ){
              if(positionData[i-1].left+80<300){
                p.top='-'+positionData[i-1].size
                if(positionData[i-1].left>20 && positionData[i-1].left<=100 ){
                  p.left=positionData[i-1].left+positionData[i-1].size+p.size+10
                }else if(positionData[i-1].left>100 && positionData[i-1].left<=200 ){
                  p.left='-'+Number(positionData[i-1].left+positionData[i-1].size+p.size)
                }
              }
            }
            */

            let l
            let prevL=positionData[i-1].left+positionData[i-1].size
            let currentL=p.left+p.size

            if(prevL>currentL){
              // :::::: if prev is bigger we move left side
              if(positionData[i-1].size>p.size && positionData[i-1].isMoved==false ){
                console.log("top bubble is bigger")
                l=prevL-currentL
                p.isMoved=true
                this.taskData[i].isMoved=true

              }else if( positionData[i-1].size<p.size && positionData[i-1].isMoved==false) {
                console.log("top bubble is smaller")
                let adjust=p.size-positionData[i-1].size
                l=prevL-currentL+adjust
                l=l+4
                p.isMoved=true
                this.taskData[i].isMoved=true

              }

            }else if(prevL<currentL){
              // :::::::: we move right side
              l=p.left


            }else if(prevL==currentL){
              l=p.left

            }
            p.left=l






          }

          this.taskData[i].size=p.size+'px'
          this.taskData[i].marginLeft=p.left+'px'
          this.taskData[i].marginTop=p.top+'px'

          console.log("after: left:: ",p.left,"size:: ",p.size,"top:: ",p.top,  this.taskData[i].title)
          console.log('')

            positionData.push(p)
      }




      this.bubblesLoaded=true

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


* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
}
body {
    margin: 0;
    width: 100%;
}

.r2d2 {
    position: absolute;
    width: 128px;
    height: 160px;
}


</style>
