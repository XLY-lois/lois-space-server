### 环境切换

#### 数据库
- modules\handle.js 中将mysqlconfig参数修改：dev（开发，本地数据库）;prod（云服务器上数据库）
#### 接口
- app.js 中本地启动前端项目则用开发环境的接口，打包部署到服务器上用生产的。
#### 注意！！！！每次push到仓库前要确保环境是开发环境（接口和数据库都是），最好就是先push再打包部署


### 开发日志
#### 2021-11-3
- 对单篇文章留言功能完成
#### 2021-11-11
- 引入第三方接口：根据ip查询所在地、根据所在地查天气
- 新增 接口根据ip查询所在地天气
#### 2021-11-29
- 文章图片上传，回显功能 （两个接口，一个上传一个回显）
#### 2021-12-28
- 查询分类列表接口完成
- 查询全部文章接口修改，加入tag
#### 2021-12-29
- 按照tagId查询文章接口完成
#### 2022-1-5
- nginx图片服务器基本完成，将文章的图片资源转移到项目根目录外，通过nginx转发 端口号为888(云) 80（公司本地）
#### 2022-1-6
- 获取背景图接口 
#### v1.1.1TODO
- 后台文章编辑、添加页加入tag功能 √
- 关于页、纪念日页（先加个空白页）√
- 页脚 
- 后台访客--查询
- 文章卡片标题栏显示评论数
#### 2022-1-11
- 添加、编辑文字页面加入tag下拉选择框（获取tag list 接口修改，新增、编辑文章sql修改）
#### 2022-1-18
- 修改查询访客接口、sql