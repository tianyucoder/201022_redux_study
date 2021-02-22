//该文件专门用于创建为Count组件服务的reducer

/* 
	定义一个countReducer,专门用于操作Count组件相关的状态 
	会收到，之前的状态(preState) 、动作对象(action)
	根据action中的type和data决定如何加工数据
*/
import {INCREMENT,DECREMENT} from './constant'
const initState = 0 //初始化状态

export default function countReducer(preState=initState,action){
	// console.log('@--countReducer--@',preState,action)
	//获取type和data
	const {type,data} = action
	//根据type决定如何操作数据
	switch (type) {
		//如果是加
		case INCREMENT: 
			return preState + data
		//如果是减
		case DECREMENT:
			return preState - data
		//如果是初始化
		default:
			return preState
	}
}