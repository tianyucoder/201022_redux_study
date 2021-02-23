import {ADD_PERSON} from '../constant'
//初始化状态
const initState = [
	{id:'001',name:'老刘',age:18}
]

export default function personReducer (preState=initState,action){
	const {type,data} = action
	switch (type) {
		//如果是添加一个人
		case ADD_PERSON:
			return [data,...preState]
		//如果是初始化
		default:
			return preState
	}
}