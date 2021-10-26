/**
 * 数据库配置
 */
module.exports = {
    mode: 'dev',
    dev: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'lois_space_schema',
        multipleStatements: true,
        charset : 'utf8mb4'
    },
    prod: {
        host: '114.132.240.121',
        port: '3306',
        user: 'root',
        password: 'xly5201314',
        database: 'lois_space_schema',
        multipleStatements: true,
        charset : 'utf8mb4'
    },
}