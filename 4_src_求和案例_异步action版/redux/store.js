//该文件专门用于创建redux中最核心的store对象

//引入createStore，用于创建store对象。
import {createStore,applyMiddleware} from 'redux'

//引入count_reducer
import countReducer from './count_reducer'

//引入redux-thunk专门用于与处理函数类型的action（异步action）
import thunk from 'redux-thunk'

//创建一个store对象,注意：创建store时就要指定好哪个reducer为store服务
//例子：餐厅老板在开业之前就找好了后厨团队
const store = createStore(countReducer,applyMiddleware(thunk))


//导出store
export default store