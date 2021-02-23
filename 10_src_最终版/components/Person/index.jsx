import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
	render() {
		return (
			<div>
				<h1>我是Person组件</h1>
				<h4>上方的Count组件求和为{this.props.sum}</h4>
				<input type="text" ref={c => this.name = c} placeholder="输入名字"/>
				<input type="text" ref={c => this.age = c} placeholder="输入年龄"/>
				<button onClick={this.addPerson}>添加一个人</button>
				<ul>
					{
						this.props.persons.map((personObj)=>{
							return <li key={personObj.id}>{personObj.name}-{personObj.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
	addPerson = ()=>{
		//获取用户输入
		const {name,age} = this
		// console.log(name.value,age.value)
		this.props.addPerson({id:Date.now(),name:name.value,age:age.value})
	}
}

export default connect(
	//映射状态
	state => ({
		persons:state.persons,
		sum:state.sum
	}),
	//映射操作状态的方法
	{addPerson}
)(Person)
