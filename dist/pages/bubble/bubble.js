(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/bubble/bubble"],{

/***/ "./node_modules/_@tarojs_taro-loader@3.3.10@@tarojs/taro-loader/lib/raw.js!./src/pages/bubble/bubble.vue":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_taro-loader@3.3.10@@tarojs/taro-loader/lib/raw.js!./src/pages/bubble/bubble.vue ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bubble_vue_vue_type_template_id_4452101b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble.vue?vue&type=template&id=4452101b */ "./src/pages/bubble/bubble.vue?vue&type=template&id=4452101b");
/* harmony import */ var _bubble_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble.vue?vue&type=script&lang=js */ "./src/pages/bubble/bubble.vue?vue&type=script&lang=js");
/* harmony import */ var _bubble_vue_vue_type_style_index_0_id_4452101b_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble.vue?vue&type=style&index=0&id=4452101b&lang=scss */ "./src/pages/bubble/bubble.vue?vue&type=style&index=0&id=4452101b&lang=scss");
/* harmony import */ var _Users_mac_Documents_my_taro_nutui_app_main_node_modules_vue_loader_16_8_3_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/_vue-loader@16.8.3@vue-loader/dist/exportHelper.js */ "./node_modules/_vue-loader@16.8.3@vue-loader/dist/exportHelper.js");
/* harmony import */ var _Users_mac_Documents_my_taro_nutui_app_main_node_modules_vue_loader_16_8_3_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_vue_loader_16_8_3_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_mac_Documents_my_taro_nutui_app_main_node_modules_vue_loader_16_8_3_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_bubble_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [['render',_bubble_vue_vue_type_template_id_4452101b__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]],['__file',"src/pages/bubble/bubble.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.3@vue-loader/dist/index.js?!./src/pages/bubble/bubble.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--10-0!./src/pages/bubble/bubble.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* harmony import */ var _Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime */ "./node_modules/_@babel_runtime@7.18.9@@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.18.9@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _plugins_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plugins/ajax */ "./src/plugins/ajax.ts");



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Index',
  components: {},
  data: function data() {
    return {
      taskPopup: {
        image: '',
        title: '',
        showPopup: false
      },
      bubblesLoaded: false,
      showBasic: false,
      lastMonthDay: '',
      dateResult: '',
      selectedTitle: 'Selected Date',
      data: [],
      date7: [],
      date: '2022-07-08',
      isVisible: true,
      isVisible7: false,
      recommendList: [],
      todayStart: Math.floor(new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000),
      todayEnd: 0,
      MusicDateInfo: {},
      taskData: [{
        title: "walking",
        image: "https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/walking.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T135012Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5b0659140b3f2d1e9a08854e6f7aa94e4e02d0d12d8bbae7fce575bfe7aa7762",
        selected: false,
        disappeared: false,
        position: [],
        size: '20px',
        marginLeft: '20px',
        marginTop: '20px',
        isMoved: false,
        showPopup: false
      }, {
        title: "Do not Eat",
        image: "https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/salad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T135311Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1377ad8836de3afa857b5e55d222ac0fb725b2f6767efe630a440e40c76094ac",
        selected: false,
        disappeared: false,
        position: [],
        size: '20px',
        marginLeft: '',
        marginTop: '20px',
        isMoved: false,
        showPopup: false
      }, {
        title: "Meditating",
        image: "https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/meditation.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T070726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f4df519b537c403009458d69751cb9bb709e3d7a89bd49e42ade814377d497d9",
        selected: false,
        disappeared: false,
        position: [],
        size: '20px',
        marginLeft: '',
        marginTop: '20px',
        isMoved: false,
        showPopup: false
      }, {
        title: "Water",
        image: "https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/drink-water.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T135035Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b73aa4500fb5e77f064c980da6310972c6c90091e15016a2d88ebe59ac256588",
        selected: false,
        disappeared: false,
        position: [],
        size: '20px',
        marginLeft: '',
        marginTop: '20px',
        isMoved: false,
        showPopup: false
      }, {
        title: "Stand",
        image: "https://yopipi-cdn.sgp1.digitaloceanspaces.com/content-store/taro/baby.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T135348Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cf1dd2a317ead135df4876b999383e038e8a56ca337279763ae5b1cc4e725efd",
        selected: false,
        disappeared: false,
        position: [],
        size: '20px',
        marginLeft: '',
        marginTop: '20px',
        isMoved: false,
        showPopup: false
      }]
    };
  },
  created: function created() {
    this.todayEnd = this.todayStart + 24 * 60 * 60 * 1000; //onload()

    setTimeout(function (placeTaskPhotos) {
      placeTaskPhotos();
    }, 900, this.placeTaskPhotos);
  },
  computed: {
    currentInstance: function currentInstance() {
      return this.$store.state.currentInstance;
    }
  },
  methods: {
    // :::::::::::: decide to show red dot or not
    redDot: function redDot(date) {
      date = date.date.year + '-' + date.date.month + '-' + date.date.day;
      var d1 = new Date(date);

      if (d1.getDay() === 1 || d1.getDay() === 3 || d1.getDay() === 5) {
        return true;
      } else {
        return false;
      }
    },
    componentClick: function componentClick(index) {},
    getOpacity: function getOpacity(index) {
      if (this.taskData[index].selected == true) {
        return 0.4;
      } else {
        return 1;
      }

      return;
    },
    showBubble: function showBubble(index) {
      this.componentClick(index);
      this.taskData[index].selected = true;
      this.taskData[index].showPopup = true;
      this.taskPopup.showPopup = true;
      this.taskPopup.image = this.taskData[index].image;
      this.taskPopup.image = this.taskData[index].title;
    },
    doTask: function doTask(index) {
      this.taskData[index].disappeared = true;
    },
    placeTaskPhotos: function placeTaskPhotos() {
      var element = document.getElementById('random-images');
      console.log(element);
      var positionData = [];

      for (var i = 0; i < this.taskData.length; i++) {
        var size = Math.floor(50 + Math.random() * 30);
        var left = Math.floor(20 + Math.random() * 220);
        var top = Math.floor(10 + Math.random() * 30);
        var p = {
          "left": left,
          "size": size,
          "top": top,
          isMoved: false
        };
        console.log("before: left:: ", p.left, "size:: ", p.size, "top:: ", p.top, this.taskData[i].title);

        if (i > 0) {
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
          var l = void 0;
          var prevL = positionData[i - 1].left + positionData[i - 1].size;
          var currentL = p.left + p.size;

          if (prevL > currentL) {
            // :::::: if prev is bigger we move left side
            if (positionData[i - 1].size > p.size && positionData[i - 1].isMoved == false) {
              console.log("top bubble is bigger");
              l = prevL - currentL;
              p.isMoved = true;
              this.taskData[i].isMoved = true;
            } else if (positionData[i - 1].size < p.size && positionData[i - 1].isMoved == false) {
              console.log("top bubble is smaller");
              var adjust = p.size - positionData[i - 1].size;
              l = prevL - currentL + adjust;
              l = l + 4;
              p.isMoved = true;
              this.taskData[i].isMoved = true;
            }
          } else if (prevL < currentL) {
            // :::::::: we move right side
            l = p.left;
          } else if (prevL == currentL) {
            l = p.left;
          }

          p.left = l;
        }

        this.taskData[i].size = p.size + 'px';
        this.taskData[i].marginLeft = p.left + 'px';
        this.taskData[i].marginTop = p.top + 'px';
        console.log("after: left:: ", p.left, "size:: ", p.size, "top:: ", p.top, this.taskData[i].title);
        console.log('');
        positionData.push(p);
      }

      this.bubblesLoaded = true;
    },
    openSwitch: function openSwitch(param) {
      console.log('open');
      this.isVisible7 = true;
      this.date7 = [];
    },
    closeSwitch: function closeSwitch(param) {
      console.log('cloose');
      this.isVisible7 = false;
      this.date7 = [];
    },
    setChooseValue7: function setChooseValue7(chooseData) {
      if (chooseData.length == 1) {
        this.selectedTitle = 'Selected Dates';
        this.dateResult = chooseData[0][3];
        this.date7.push(chooseData[0][3]);
      } else if (chooseData.length > 1) {
        for (var i = 0; i < chooseData.length; i++) {
          i == 0 ? this.dateResult = chooseData[i][3] : i > 0 ? this.dateResult = this.dateResult + ', ' + chooseData[i][3] : chooseData[i][3];
          i + 1 == chooseData.length ? this.date7.push(chooseData[i][3]) : this.date7.push(chooseData[i][3] + ',');
        }
      }

      chooseData.length > 1 ? this.selectedTitle = 'Selected Dates' : this.selectedTitle = 'Selected Date';
      this.showBasic = true;
    },
    select: function select(param) {
      console.log(param);
    },
    getLastMonthDay: function getLastMonthDay() {
      var today = new Date();
      var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      console.log(lastDayOfMonth);
      return lastDayOfMonth;
    },
    endOfMonth: function endOfMonth(myDate) {
      var last = new Date(new Date(new Date().setMonth(7)).setDate(0)).getDate();
      console.log(last);
      return last;
    },
    setChooseValue: function setChooseValue(v) {
      console.log(v);
    },
    showCalendar: function showCalendar() {
      this.isVisible = true;
    },
    hideCalendar: function hideCalendar() {
      this.isVisible = false;
    },
    tabSwitch: function tabSwitch(item, index) {
      console.log(item, index);
    },
    getRecommendList: function getRecommendList() {
      var _this = this;

      return Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res;
        return Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _plugins_ajax__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get('http://localhost:3000/personalized?limit=5');

              case 2:
                res = _context.sent;
                _this.recommendList = res.result;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getBannerData: function getBannerData() {
      var _this2 = this;

      return Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_mac_Documents_my_taro_nutui_app_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _plugins_ajax__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get('http://localhost:3000/banner?type=1');

              case 2:
                res = _context2.sent;
                _this2.data = res.banners;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleCardClick: function handleCardClick(data) {
      this.$Taro.navigateTo({
        url: '/pages/playList/playList' + "?id=".concat(data.id)
      });
    },
    goCalendar: function goCalendar(data) {
      this.$Taro.navigateTo({
        url: '/pages/calendar/calendar'
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.10@@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.3@vue-loader/dist/templateLoader.js?!./node_modules/_vue-loader@16.8.3@vue-loader/dist/index.js?!./src/pages/bubble/bubble.vue?vue&type=template&id=4452101b":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./node_modules/_vue-loader@16.8.3@vue-loader/dist/templateLoader.js??ref--6!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--10-0!./src/pages/bubble/bubble.vue?vue&type=template&id=4452101b ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_runtime-core@3.2.38@@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_shared@3.2.38@@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_runtime-dom@3.2.38@@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");

var _hoisted_1 = {
  class: "index-wrapper-"
};
var _hoisted_2 = {
  class: "app-body"
};
var _hoisted_3 = {
  class: "",
  style: {
    "height": "100vh",
    "width": "100vw"
  }
};

var _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "centered-position",
  style: {
    "height": "100vh",
    "width": "100vw",
    "position": "absolute"
  }
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
  src: "https://sgp1.digitaloceanspaces.com/yopipi-cdn/content-store/taro/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5STG44N2NNO2ISZZOLRG%2F20220831%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20220831T011828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8bdfffd32738c30efb90ab728c72f5ab4b816e51aec054f4497584478c093124",
  style: {
    "height": "100vh",
    "width": "100vw"
  }
})], -1
/* HOISTED */
);

var _hoisted_5 = {
  style: {
    "height": "100vh",
    "width": "100vw",
    "position": "absolute",
    "overflow-y": "scroll"
  }
};

var _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "centered-position",
  style: {
    "height": "10vh",
    "width": "100vw",
    "margin-top": "10px"
  }
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  style: {
    "height": "10vh",
    "width": "90vw",
    "position": "absolute",
    "border-radius": "12px",
    "background": "rgb(250,250,250,0.6)"
  }
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "centered-position",
  style: {
    "width": "80%",
    "overflow": "hidden",
    "border-radius": "12px",
    "margin-top": "20px"
  }
}, " Hey Jimy, your task list for today. ")])], -1
/* HOISTED */
);

var _hoisted_7 = {
  class: "centered-position",
  style: {
    "height": "auto",
    "width": "100vw",
    "margin-top": "20px"
  }
};
var _hoisted_8 = {
  id: "random-images",
  style: {
    "height": "auto",
    "width": "92vw",
    "margin-top": "20px"
  }
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = ["width", "height"];
var _hoisted_11 = ["src", "width", "height"];
var _hoisted_12 = {
  style: {
    "margin-top": "2px",
    "font-size": "13px",
    "font-weight": "bold",
    "color": "#ffffff"
  }
};

var _hoisted_13 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "centered-position",
  style: {
    "height": "10vh",
    "width": "100vw",
    "margin-top": "20px"
  }
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  style: {
    "height": "10vh",
    "width": "90vw",
    "border-radius": "12px",
    "background": "rgb(250,250,250,0.6)"
  }
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "centered-position",
  style: {
    "width": "80%",
    "overflow": "hidden",
    "border-radius": "12px",
    "margin-top": "20px"
  }
}, " Bubble Bubble ")])], -1
/* HOISTED */
);

var _hoisted_14 = {
  style: {
    "` height": "40px",
    "width": "100vw",
    "border-radius": "100px",
    "position": "relative"
  }
};
var _hoisted_15 = ["src"];
var _hoisted_16 = {
  class: "button-holder centered-position",
  style: {
    "height": "34px",
    "font-size": "14px",
    "color": "#7232aa",
    "font-weight": "bold"
  }
};

var _hoisted_17 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
  class: "button-holder centered-position",
  style: {
    "height": "24px",
    "font-size": "14px"
  }
}, " Have fun with the task ", -1
/* HOISTED */
);

function render(_ctx, _cache) {
  var _component_nut_animate = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "H"])("nut-animate");

  var _component_nut_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "H"])("nut-popup");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "D"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("view", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_3, [_hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_5, [_hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withDirectives */ "Q"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_8, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "D"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "F"])(_ctx.taskData, function (task, index_) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withDirectives */ "Q"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "D"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("view", {
      onClick: function onClick($event) {
        return _ctx.showBubble(index_);
      },
      key: index_,
      style: Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* normalizeStyle */ "K"])("margin-left:" + task.marginLeft + "; margin-top:" + task.marginTop + ";opacity:" + _ctx.getOpacity(index_) + "; width:auto; margin-right:4px; float:left; ")
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "n"])(_component_nut_animate, {
      type: "breath",
      loop: true
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "P"])(function () {
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", {
          class: "app-body",
          width: task.size,
          height: task.size,
          style: Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* normalizeStyle */ "K"])(" border-radius:100px; border:1px solid #f1f1f1; position:relative; background:#1e6091; box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.11); ")
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
          src: task.image,
          width: task.size,
          height: task.size,
          style: {}
        }, null, 8
        /* PROPS */
        , _hoisted_11)], 12
        /* STYLE, PROPS */
        , _hoisted_10)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1024
    /* DYNAMIC_SLOTS */
    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "M"])(task.title), 1
    /* TEXT */
    )], 12
    /* STYLE, PROPS */
    , _hoisted_9)), [[vue__WEBPACK_IMPORTED_MODULE_2__[/* vShow */ "e"], !_ctx.taskData[index_].disappeared]]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_2__[/* vShow */ "e"], _ctx.bubblesLoaded]])]), _hoisted_13, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "n"])(_component_nut_popup, {
    "pop-class": "popclass",
    style: {
      padding: '10px 10px'
    },
    visible: _ctx.taskPopup.showPopup,
    "onUpdate:visible": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.taskPopup.showPopup = $event;
    }),
    "z-index": 100
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "P"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
        src: _ctx.taskPopup.image,
        style: {
          "width": "50px",
          "height": "50px"
        }
      }, null, 8
      /* PROPS */
      , _hoisted_15)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_16, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "M"])(_ctx.taskPopup.title), 1
      /* TEXT */
      ), _hoisted_17];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"])])])])]);
}

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@16.8.3@vue-loader/dist/stylePostLoader.js!./node_modules/_postcss-loader@4.3.0@postcss-loader/dist/cjs.js?!./node_modules/_resolve-url-loader@4.0.0@resolve-url-loader/index.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@16.8.3@vue-loader/dist/index.js?!./src/pages/bubble/bubble.vue?vue&type=style&index=0&id=4452101b&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/_vue-loader@16.8.3@vue-loader/dist/stylePostLoader.js!./node_modules/_postcss-loader@4.3.0@postcss-loader/dist/cjs.js??ref--1-oneOf-1-2!./node_modules/_resolve-url-loader@4.0.0@resolve-url-loader!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js??ref--1-oneOf-1-4!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--10-0!./src/pages/bubble/bubble.vue?vue&type=style&index=0&id=4452101b&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/bubble/bubble.vue":
/*!*************************************!*\
  !*** ./src/pages/bubble/bubble.vue ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.10@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_3_3_10_tarojs_taro_loader_lib_raw_js_bubble_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_@tarojs_taro-loader@3.3.10@@tarojs/taro-loader/lib/raw.js!./bubble.vue */ "./node_modules/_@tarojs_taro-loader@3.3.10@@tarojs/taro-loader/lib/raw.js!./src/pages/bubble/bubble.vue");


var config = {"navigationBarTitleText":"Bubble Task"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_3_3_10_tarojs_taro_loader_lib_raw_js_bubble_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/bubble/bubble', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/bubble/bubble.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/pages/bubble/bubble.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_10_0_bubble_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!../../../node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--10-0!./bubble.vue?vue&type=script&lang=js */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.3@vue-loader/dist/index.js?!./src/pages/bubble/bubble.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_10_0_bubble_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/bubble/bubble.vue?vue&type=style&index=0&id=4452101b&lang=scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/bubble/bubble.vue?vue&type=style&index=0&id=4452101b&lang=scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_4_3_0_postcss_loader_dist_cjs_js_ref_1_oneOf_1_2_node_modules_resolve_url_loader_4_0_0_resolve_url_loader_index_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_1_oneOf_1_4_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_10_0_bubble_vue_vue_type_style_index_0_id_4452101b_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../node_modules/_vue-loader@16.8.3@vue-loader/dist/stylePostLoader.js!../../../node_modules/_postcss-loader@4.3.0@postcss-loader/dist/cjs.js??ref--1-oneOf-1-2!../../../node_modules/_resolve-url-loader@4.0.0@resolve-url-loader!../../../node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js??ref--1-oneOf-1-4!../../../node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--10-0!./bubble.vue?vue&type=style&index=0&id=4452101b&lang=scss */ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@16.8.3@vue-loader/dist/stylePostLoader.js!./node_modules/_postcss-loader@4.3.0@postcss-loader/dist/cjs.js?!./node_modules/_resolve-url-loader@4.0.0@resolve-url-loader/index.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@16.8.3@vue-loader/dist/index.js?!./src/pages/bubble/bubble.vue?vue&type=style&index=0&id=4452101b&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_4_3_0_postcss_loader_dist_cjs_js_ref_1_oneOf_1_2_node_modules_resolve_url_loader_4_0_0_resolve_url_loader_index_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_1_oneOf_1_4_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_10_0_bubble_vue_vue_type_style_index_0_id_4452101b_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_4_3_0_postcss_loader_dist_cjs_js_ref_1_oneOf_1_2_node_modules_resolve_url_loader_4_0_0_resolve_url_loader_index_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_1_oneOf_1_4_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_10_0_bubble_vue_vue_type_style_index_0_id_4452101b_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/bubble/bubble.vue?vue&type=template&id=4452101b":
/*!*******************************************************************!*\
  !*** ./src/pages/bubble/bubble.vue?vue&type=template&id=4452101b ***!
  \*******************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_3_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_10_0_bubble_vue_vue_type_template_id_4452101b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!../../../node_modules/_vue-loader@16.8.3@vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--10-0!./bubble.vue?vue&type=template&id=4452101b */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.3@vue-loader/dist/templateLoader.js?!./node_modules/_vue-loader@16.8.3@vue-loader/dist/index.js?!./src/pages/bubble/bubble.vue?vue&type=template&id=4452101b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_3_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_10_0_bubble_vue_vue_type_template_id_4452101b__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/bubble/bubble.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=bubble.js.map