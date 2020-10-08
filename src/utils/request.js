import axios from 'axios'

const server = axios.create({
    baseURL:"http://elm.cangdu.org",
    timeout:"2000"
})
// qingqiu
server.interceptors.request.use(config=>{
    // console.log(config)
    return config
})

server.interceptors.response.use(res=>{
    return res
})

export default server