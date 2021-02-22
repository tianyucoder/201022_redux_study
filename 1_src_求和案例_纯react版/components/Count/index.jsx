import React, { Component } from 'react'

export default class Count extends Component {
	state = {
		sum:0
	}
	render() {
		return (
			<div>
				<h2>当前求和为：{this.state.sum}</h2>
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
		//获取原来的和
		const {sum} = this.state
		//更新状态
		this.setState({sum:sum+value*1})
	}

	//减
	decrement = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//获取原来的和
		const {sum} = this.state
		//更新状态
		this.setState({sum:sum-value*1})
	}

	//奇数加
	incrementIfOdd = ()=>{
		//获取原来的和
		const {sum} = this.state 
		//奇数再加，偶数就停掉逻辑
		if(!(sum % 2)) return alert('当前求和不是奇数，不可以加')
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//更新状态
		this.setState({sum:sum+value*1})
	}

	//等一等再加
	incrementWait = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//获取原来的和
		const {sum} = this.state
		//开启定时器
		setTimeout(()=>{
			//更新状态
			this.setState({sum:sum+value*1})
		},500)
	}

}
