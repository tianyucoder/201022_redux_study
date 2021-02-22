/* 
	1.该文件是Count组件的容器组件，专门用于和redux打交道，可以随意的使用redux相关的API
	2.该文件是一个“纽带”，连接“左手”的UI和“右手”的容器
*/

//引入“左手”(Count的UI)
import CountUI from '../../components/Count'

//引入connect方法，连接UI与redux（左手与右手）
import {connect} from 'react-redux'

//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createWaitIncrementAction
} from '../../redux/count_action'

/*
	1.mapStateToProps函数会被react-redux调用
	2.mapStateToProps函数的职责是向UI组件传递redux中所保存的数据
	3.mapStateToProps函数返回值必须是一个Object类型的对象：
			返回的这个对象的key就作为传给UI组件props的key
			返回的这个对象的value就作为传给UI组件props的value
*/
function mapStateToProps(state){ 
	// console.log('@----mapStateToProps',state)
	return {sum:state}
}


/*
	1.mapDispatchToProps函数会被react-redux调用
	2.mapDispatchToProps函数的职责是向UI组件传递操作redux中状态的方法
	3.mapDispatchToProps函数返回值必须是一个Object类型的对象：
			返回的这个对象的key就作为传给UI组件props的key
			返回的这个对象的value就作为传给UI组件props的value
*/
function mapDispatchToProps(dispatch){
	return {
		jia:(value)=>{ dispatch(createIncrementAction(value)) },
		jian:(value)=>{ dispatch(createDecrementAction(value)) },
		dydJia:(value) => { dispatch(createWaitIncrementAction(value)) }
	}
}

//利用connect生成Count的容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

//暴露生成的容器组件
export default CountContainer


