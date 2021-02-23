//该文件专门用于创建redux中最核心的store对象

//引入createStore，用于创建store对象;引入combineReducers用于合并多个reducer
import {createStore,applyMiddleware,combineReducers} from 'redux'

//引入count_reducer
import countReducer from './reducers/count'

//引入person_reducer
import personReducer from './reducers/person'

//引入redux-thunk专门，用于与处理函数类型的action（异步action）
import thunk from 'redux-thunk'

//引入composeWithDevTools,用于支持redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'

//汇总所有reducer为一个总的reducer
//特别注意：combineReducers调用时传入的对象就是redux中的总状态对象
const allReducer = combineReducers({
	he:countReducer,
	yiduiren:personReducer
})

//创建一个store对象,注意：创建store时就要指定好哪个reducer为store服务
//例子：餐厅老板在开业之前就找好了后厨团队
const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

//导出store
export default store