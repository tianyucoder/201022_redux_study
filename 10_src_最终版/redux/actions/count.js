/* 
	该文件用于定义创建action的函数
*/
import {INCREMENT,DECREMENT} from '../constant'

//专门用于创建“加”的action---同步action（所谓同步action就是指对象类型的action）
export const increment = value => ({type:INCREMENT,data:value})

//专门用于创建“减”的action---同步action
export const decrement = value => ({type:DECREMENT,data:value})

//专门用于创建“等一等加”的action---异步action（所谓异步action就是指函数类型的action）
//异步action中往往都会执行同步action
export const waitIncrement = value => {
	return (dispatch)=> {
		setTimeout(()=>{
			dispatch(increment(value*1))
		},500)
	}
}