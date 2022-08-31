import { Button, Icon, Input, Tabs, TabPane, Toast, Navbar , Tabbar,TabbarItem,Calendar,Popup,Cell,Animate, Dialog,OverLay } from '@nutui/nutui-taro'

const Components = [Button, Input, Icon, Tabs, TabPane, Toast, Navbar,Tabbar,TabbarItem,Calendar,Popup,Cell,Animate,Dialog,OverLay]

const useNutUI = (app: any) => {
  Components.forEach(item => {
    app.use(item)
  })
}
export default useNutUI
