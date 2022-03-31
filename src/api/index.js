import requests from "./request.js"
export const firstRange = (data)=>{
  return requests({
    url:'user/first-recharge-config',
    method:'post',
    data:data
  })
}
