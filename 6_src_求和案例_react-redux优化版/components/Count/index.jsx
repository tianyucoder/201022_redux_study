/* 
	该文件是Count组件的UI组件，该组件中不能出现任何redux相关的API
*/
import React, { Component } from 'react'

export default class Count extends Component {
	state = {
		wind:'微风'
	}

	render() {
		console.log('UI--render')
		return (
			<div>
				<h2>当前求和为：{this.props.sum}</h2>
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
		//调用父组件传递过来的jia
		this.props.jia(value*1)
	}

	//减
	decrement = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//调用父组件传递过来的jian
		this.props.jian(value*1)
	}

	//奇数加
	incrementIfOdd = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//判断奇偶数
		if(!(this.props.sum % 2)) return alert('当前是偶数，不能再加了')
		//调用父组件传递过来的jia
		this.props.jia(value*1)
	}

	//等一等再加
	incrementWait = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		this.props.dydJia(value*1)
	}

}
