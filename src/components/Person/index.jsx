import React, { Component } from 'react'

export default class Person extends Component {
	render() {
		return (
			<div>
				<input type="text" ref={c => this.name = c} placeholder="输入名字"/>
				<input type="text" ref={c => this.age = c} placeholder="输入年龄"/>
				<button onClick={this.addPerson}>添加一个人</button>
				<ul>
					<li>张三</li>
					<li>李四</li>
					<li>王老五</li>
				</ul>
			</div>
		)
	}
	addPerson = ()=>{
		//获取用户输入
		const {name,age} = this
		console.log(name.value,age.value)
	}
}
