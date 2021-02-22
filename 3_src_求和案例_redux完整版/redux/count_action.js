/* 
	该文件用于定义创建action的函数
*/
import {INCREMENT,DECREMENT} from './constant'

//专门用于创建“加”的action---同步action（所谓同步action就是指对象类型的action）
export const createIncrementAction = value => ({type:INCREMENT,data:value})

//专门用于创建“减”的action---同步action
export const createDecrementAction = value => ({type:DECREMENT,data:value})
