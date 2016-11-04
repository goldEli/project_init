#Project initialization

基于React + Webpack + React-Router + ES6 + Redux + Int Design

[项目结构图](http://naotu.baidu.com/file/91ac5a222205b28e2daef4273d9ab70d?token=b666a5ed32503379)

##init

* 安装node.js

		https://nodejs.org/en/

* 安装淘宝镜像

		npm install -g cnpm	

* 安装全局Webpack

		cnpm install -g webpack

* 安装package.json中的依赖

		cnpm install 

##start

* webpack打包

		cnpm run dev


##文件目录

		-node_modules	 		// 第三方库			
		-build             		// 发布目录
		-src               		// 开发目录
			-Components    		// 组件
			-images        
			-libs				// 公共库
			-redux         		// 数据流
			-index.js	   		// 入口文件
		-package.json      		// 管理包
		-webpack.config.js 		// Webpack配置文件




#NOTES

##React

###生命周期

**1. 初始化阶段**

* getDefaultProps：获取实例的默认属性，只获取一次
* getInitialState：获取每个实例初始化状态（每个实例自己维护）
* componentWillMount：组件即将被渲染到页面上
* render：生成虚拟DOM节点
* componentDidMount：组件真正在被渲染之后，可以修改DOM了

**2.运行中状态**

* componentWillReceiveProps：组件将要接受到属性的时候调用
* shouldComponentUpdate：组件接受到新属性或者新状态的时候
* componentWillUpdate：不能修改属性和状态
* render：
* componentDidUpdate：可以修改DOM

**3. 销毁阶段**

* componentWillUnmount：组件真正删除之前调用，比如计时器和事件监听器

##Redux

###为什么要用Redux？

react的数据传输通过this.props,由父组件传到子组件，数据单向流动。要想子组件传到父组件，则需要通过自己写回调。

当组件之间的数据通信相互交叉，错综复杂，react自身的数据传输机制就捉襟见肘了。

对于复杂的应用，我们需要一套数据管理机制，可以在同一个地方查询数据，改变数据，传输数据。Redux就是这样一套数据管理机制。

Redux的思想很简单，把web应用作为一个状态机，视图和状态是一一对应的，把所有的状态都保存在一个对象里面。

###基本API


**---1. Redux原生**
<hr>
Redux三大核心：Action、Reducer、Store

**1.1 Action**

* 用来描述用户对页面进行了怎样的操作，删除，添加还是修改。

**1.2 Reducer**

* 对用户的操作提供资源（数据）
* 不同的操作提供不同的资源，所以它是一个逻辑处理中心 

**1.3 Store**

* 一个应用只有一个Store。
* Store将Reducer和Action关联起来，并提供方法操作数据，并跟新state

**1.4 combineReducers**

* 由于Reducer是一个逻辑中心，复杂应用会变得非常庞大，所以需要对Reducer进行拆分，最后通过combineReducers进行合并

**1.5 bindActionCreators**

* 如果Action太多了，可以通过该方法把Actions和dispatch绑定起来


**---2. React-Redux**
<hr>

React-Redux是官方提供的一个库，用来结合redux和react模块。

**2.1 Provider**

* react的一个组件，在整个项目的最外层
* 将store传到子组件

**2.2 connect**

* 会把State和dispatch转换成props传递给子组件

 