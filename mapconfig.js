var oeasymapconfig = {
  //公司内部测试地址
  // unitInfo:'http://192.168.20.36:8089/portal',   //小区热力图接口-庞嘉铭
  // unitCount:'http://192.168.20.36:8089/portal',   //当天小区分组开门、车流次数统计接口-胡自雷
  // speicalPerson:'http://192.168.20.36:8089/portal',                 //特殊人员分布接口
  // patrolPercentOfPassHotSpot:'http://192.168.20.36:8089',    //小区巡查合格率发布热点图
  // alarm:'http://192.168.20.35:11030',                                             //告警地图
  // return3dgispage:'http://192.168.20.36/#/index/tdmap',    //跳转到3DGIS页面

  // 铜仁公安网
  // unitInfo:'http://10.162.154.31:6525/portal',   
  // unitCount:'http://10.162.154.31:6525/portal',   
  // speicalPerson:'http://10.162.154.31:6525/portal',                 
  // patrolPercentOfPassHotSpot:'http://10.162.154.31:6525', 
  // alarm:'http://10.162.154.31:6529', 
  // return3dgispage:'http://10.162.154.31/#/index/tdmap',    //跳转到3DGIS页面

  // 市局
  // unitInfo:'http://52.91.10.20:8080/portal',
  // unitCount:'http://52.91.10.20:8080/portal',
  // speicalPerson:'http://52.91.10.20:8080/portal',
  // patrolPercentOfPassHotSpot:'http://52.91.10.20:8080',
  // alarm:'http://52.99.10.121:11030',
  // return3dgispage:'http://52.91.10.20/#/index/tdmap',    //跳转到3DGIS页面

  // 万山
  // unitInfo:'http://52.93.10.110:8080/portal',   
  // unitCount:'http://52.93.10.110:8080/portal',   
  // speicalPerson:'http://52.93.10.110:8080/portal',                 
  // patrolPercentOfPassHotSpot:'http://52.93.10.110:8080', 
  // alarm:'http://52.99.10.121:11030', 
  // return3dgispage:'http://52.93.10.110/#/index/tdmap',    //跳转到3DGIS页面

  // 印江
  unitInfo:'http://52.99.10.122:8080/portal',   
  unitCount:'http://52.99.10.122:8080/portal',   
  speicalPerson:'http://52.99.10.122:8080/portal',                 
  patrolPercentOfPassHotSpot:'http://52.99.10.122:8080', 
  alarm:'http://52.99.10.121:11030', 
  return3dgispage:'http://52.99.10.122/#/index/tdmap',    //跳转到3DGIS页面
     
  // 德江
  // unitInfo:'http://52.99.10.67:8080/portal',   
  // unitCount:'http://52.99.10.122:8080/portal',   
  // speicalPerson:'http://52.99.10.122:8080/portal',                 
  // patrolPercentOfPassHotSpot:'http://52.99.10.122:8080', 
  // alarm:'http://52.99.10.121:11030', 
  // return3dgispage:'http://52.99.10.122/#/index/tdmap',    //跳转到3DGIS页面

  // 玉屏
  // unitInfo:'http://52.101.10.125:8080/portal',   
  // unitCount:'http://52.101.10.125:8080/portal',   
  // speicalPerson:'http://52.101.10.125:8080/portal',                 
  // patrolPercentOfPassHotSpot:'http://52.101.10.125:8080', 
  // alarm:'http://52.99.10.121:11030', 
  // return3dgispage:'http://52.101.10.125/#/index/tdmap',    //跳转到3DGIS页面

  // 江口
  // unitInfo:'http://52.96.10.88:8080/portal',   
  // unitCount:'http://52.96.10.88:8080/portal',   
  // speicalPerson:'http://52.96.10.88:8080/portal',                 
  // patrolPercentOfPassHotSpot:'http://52.96.10.88:8080', 
  // alarm:'http://52.99.10.121:11030', 
  // return3dgispage:'http://52.96.10.88/#/index/tdmap',    //跳转到3DGIS页面

  // 松桃
  // unitInfo:'http://52.100.10.57:8080/portal',   
  // unitCount:'http://52.100.10.57:8080/portal',   
  // speicalPerson:'http://52.100.10.57:8080/portal',                 
  // patrolPercentOfPassHotSpot:'http://52.100.10.57:8080', 
  // alarm:'http://52.99.10.121:11030', 
  // return3dgispage:'http://52.100.10.57/#/index/tdmap',    //跳转到3DGIS页面

  // 武汉
  // unitInfo:'http://100.37.51.132:8080/portal',   
  // unitCount:'http://100.37.51.132:8080/portal',   
  // speicalPerson:'http://100.37.51.132:8080/portal',                 
  // patrolPercentOfPassHotSpot:'http://100.37.51.132:8080', 
  // alarm:'http://100.37.51.133:11030', 
  // return3dgispage:'http://100.37.51.132/#/index/tdmap',    //跳转到3DGIS页面

  // 公司线上地址
  // unitInfo:'https://security.0easy.com/yihao01-bigdata-portal',   //小区热力图接口-庞嘉铭
  // unitCount:'https://security.0easy.com/yihao01-bigdata-portal',   //当天小区分组开门、车流次数统计接口-胡自雷
  // speicalPerson:'https://security.0easy.com/yihao01-bigdata-portal',                 //特殊人员分布接口
  // patrolPercentOfPassHotSpot:'https://security.0easy.com/yihao01-bigdata-portal',    //小区巡查合格率发布热点图
  // alarm:'http://security.0easy.com', 
  // return3dgispage:'http://zimg.0easy.com/portal/#/index/tdmap',    //跳转到3DGIS页面
  
  
  /* 以下为方便各个城市部署，提取公共部分  */
  province_code:'520000',   //部署所在省份，为
  city_code:'520600',      //部署所在省下的市，为
  x:108.6111,    //市中心点经度坐标，昆明市中心经度
  y:28.162303,     //市中心点纬度坐标，昆明市中心纬度
  echartjson:'js/echartjson/520000/520600.json',       //根据城市部署，选择城市路径，用于首页平台,对应province_code，city_code值
};
