import requests from "./request.js"
import Vue from 'vue';
export const firstRange = (data)=>{
  return requests({
    url:'user/first-recharge-config',
    method:'post',
    data:data,
    headers: {
      'appType': 0,
      'phoneBrand': 'web',
      'phoneSystem': 'web',
      'phoneModels': 'web',
      'appMarket': 'web',
      'appVersionCode': 'web',
      'appVersionName': 'web',
      'apiVersion': 'test',
      'packageName': 'com.vliao.vchat',
      'imei': 'cfc530e8-fa3d-4173-9695-4bdac2579486'
    }
  })
}

export const login = (data) =>{
  return requests({
    url : "auth/phone-number-login",
    method:'post',
    data:data,
    headers: {
      'appType': 0,
      'phoneBrand': 'web',
      'phoneSystem': 'web',
      'phoneModels': 'web',
      'appMarket': 'web',
      'appVersionCode': 'web',
      'appVersionName': 'web',
      'apiVersion': 'test',
      'packageName': 'com.vliao.vchat',
      'imei': 'cfc530e8-fa3d-4173-9695-4bdac2579486'
    }
  })
}
