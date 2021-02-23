import React, { Component } from 'react'
//引入connect方法，连接UI与redux（左手与右手）
import {connect} from 'react-redux'
//引入action
import {
	increment,
	decrement,
	waitIncrement
} from '../../redux/actions/count'


//定义Count的UI组件，在该组件中不能使用任何redux的API
class Count extends Component {
	state = {
		wind:'微风'
	}

	render() {
		// console.log('UI--render')
		return (
			<div>
				<h1>我是Count组件</h1>
				<h4>当前求和为：{this.props.sum}，下方的Person中共有{this.props.persons.length}人</h4>
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
		this.props.increment(value*1)
	}

	//减
	decrement = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//调用父组件传递过来的jian
		this.props.decrement(value*1)
	}

	//奇数加
	incrementIfOdd = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		//判断奇偶数
		if(!(this.props.sum % 2)) return alert('当前是偶数，不能再加了')
		//调用父组件传递过来的jia
		this.props.increment(value*1)
	}

	//等一等再加
	incrementWait = ()=>{
		//获取去用户选择的数字
		const {value} = this.selectNumber
		this.props.waitIncrement(value*1)
	}

}

//利用connect生成Count的容器组件，并暴露
export default connect(
	//映射状态（特别注意，此处的state是redux中的总state）
	({sum,persons}) => ({
		sum,
		persons
	}), 
	//映射操作状态的方法
	{increment,decrement,waitIncrement}
)(Count)



