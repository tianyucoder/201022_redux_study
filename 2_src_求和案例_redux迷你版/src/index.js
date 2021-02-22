import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'));
//检测redux中的数据的改变
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'));
})
