import Vue from 'vue'
import {
  Alert,
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Cascader,
  CheckboxGroup,
  Checkbox,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Select,
  Step,
  Steps,
  Option,
  Row,
  Col,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Upload

} from 'element-ui'

import Timeline from './timeline/index.js'
import TimelineItem from './timeline-item/index.js'

Vue.use(Alert)
Vue.use(Aside)
Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Col)
Vue.use(Card)
Vue.use(Container)
Vue.use(Cascader)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Header)
Vue.use(Input)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Select)
Vue.use(Step)
Vue.use(Steps)
Vue.use(Submenu)
Vue.use(Switch)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tooltip)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Upload)


Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
