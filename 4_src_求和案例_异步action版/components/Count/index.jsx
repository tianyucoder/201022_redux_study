import React, { Component } from 'react'
import store from '../../redux/store'
import {
	createIncrementAction,
	createDecrementAction,
	createWaitIncrementAction
} from '../../redux/count_action'

export default class Count extends Component {
	state = {
		wind:'微风'
	}

	/* componentDidMount(){
		//检测redux中的数据的改变
		store.subscribe(()=>{
			// this.forceUpdate() //强制更新
			// this.setState({}) //“欺骗react，达到调用render的目的”
		})
	} */

	render() {
		// console.log('render')
		return (
			<div>
				<h2>当前求和为：{store.getState()}</h2>
				<h4>今天：{this.state.wind}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前和为奇数再+</button>&nbsp;
				<button onClick={this.incrementWait}>等500毫秒再+</button>
			</div>
		)
	}

	//加
	increment = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//通知redux执行加，具体加几看value的值
		store.dispatch(createIncrementAction(value*1))
	}

	//减
	decrement = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//通知redux执行减，具体加几看value的值
		store.dispatch(createDecrementAction(value*1))
	}

	//奇数加
	incrementIfOdd = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//获取原来的和
		if(!(store.getState() % 2)) return alert('当前和不为奇数，不能加！')
		//通知redux执行加，具体加几看value的值
		store.dispatch(createIncrementAction(value*1))
	}

	//等一等再加
	incrementWait = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		store.dispatch(createWaitIncrementAction(value*1))
	}

}
