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

//映射state给UI
const mapStateToProps = state => ({sum:state})

//映射操作状态的方法给UI----标准写法
/* const mapDispatchToProps = dispatch => ({
	jia:(value) => { dispatch(createIncrementAction(value)) },
	jian:(value) => { dispatch(createDecrementAction(value)) },
	dydJia:(value) => { dispatch(createWaitIncrementAction(value)) }
}) */

//映射操作状态的方法给UI----精简写法
const mapDispatchToProps = {
	jia:createIncrementAction,
	jian:createDecrementAction,
	dydJia:createWaitIncrementAction
}

//利用connect生成Count的容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

//暴露生成的容器组件
export default CountContainer


