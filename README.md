### 环境切换

#### 数据库
- modules\handle.js 中将mysqlconfig参数修改：dev（开发，本地数据库）;prod（云服务器上数据库）
#### 接口
- app.js 中本地启动前端项目则用开发环境的接口，打包部署到服务器上用生产的。
#### 注意！！！！每次push到仓库前要确保环境是开发环境（接口和数据库都是），最好就是先push再打包部署


### 开发日志
#### 2021-11-3
- 对单篇文章留言功能完成