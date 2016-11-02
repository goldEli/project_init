#Project initialization

基于React + Webpack + ES6 + Redux + Int Design

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

		-build             		// 发布目录
		-src               		// 开发目录
			-Components    		// 组件
			-images        
			-libs
			-redux         		// 数据流
			-index.js	   		// 入口文件
		-package.json      		// 管理包
		-webpack.config.js 		// Webpack配置文件
#NOTES

##React生命周期

###初始化阶段

* getDefaultProps：获取实例的默认属性，只获取一次
* getInitialState：获取每个实例初始化状态（每个实例自己维护）
* componentWillMount：组件即将被渲染到页面上
* render：生成虚拟DOM节点
* componentDidMount：组件真正在被渲染之后，可以修改DOM了

###运行中状态

* componentWillReceiveProps：组件将要接受到属性的时候调用
* shouldComponentUpdate：组件接受到新属性或者新状态的时候
* componentWillUpdate：不能修改属性和状态
* render：
* componentDidUpdate：可以修改DOM
###销毁阶段
* componentWillUnmount：组件真正删除之前调用，比如计时器和事件监听器
 