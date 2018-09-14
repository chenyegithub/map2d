

$(document).ready(function(){
	
	Oeasymain2dmap.init();
});

var Oeasymain2dmap = {
	    caranddoorcount:null,
		quxian:function(){
			var code = Oeasymain2dmap.GetQueryString('zone');
			var quxianmap = null;
			var jsonData = null;
			$.ajax({
    			url:oeasymapconfig.echartjson ,
    			dataType: "json",
    			async:false,
    			type: "GET"
    			
    		}).done(function(_dt){
				jsonData=_dt;					
				
			});
			if(!Oeasymain2dmap.checkcode(code)){
				var tempArr=jsonData.features.filter(c=>c.id==code)
				jsonData.features.length=1;
				jsonData.features[0]=tempArr[0];
			}
			quxianmap = jsonData;
			return quxianmap;
			
		},
		
		GetQueryString:function(name)
		{
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
            var r = window.location.search.substr(1).match(reg);  
            if (r != null) return unescape(r[2]); return null; 
		},
		
	    
		geoCoord : {},
		quxianunit:[],
		checkcode:function(code){
			if(code == oeasymapconfig.city_code){
				return true;
			}else{
				return false;
			}
		},
		
		init:function(){
			//根据参数获取对应的区县数据
			var quxiancode = Oeasymain2dmap.GetQueryString('zone');
			if(Oeasymain2dmap.checkcode(quxiancode) == true){
				$.ajax({
    			  url:oeasymapconfig.unitInfo+"/unit/unitInfo.do" ,
    			  dataType: "json",
    			  type: "POST",
    			  data: {
    			    "province_code":oeasymapconfig.province_code,
    			    "city_code":quxiancode			
    			  },
				  xhrFields: {
                   withCredentials: true
                  }
    		    }).done(function(msg){
				   var data = msg.data;
				   if(data != null){
					   if(data.length >0){
						   for (var i = 0; i < data.length; i++) {
        				     var lng = data[i].lng;
        				     var lat = data[i].lat;
        				     var unitid = data[i].unit_id;
        				     Oeasymain2dmap.geoCoord[unitid] = [lng,lat];
        				     Oeasymain2dmap.quxianunit.push({"unit_id":unitid,"lng":lng,"lat":lat});
        		          }
						  setTimeout(function(){
				             var chartOptioncity = Oeasymain2dmap.chartOptionfun();
			                 var myChartcity =  echarts.init(document.getElementById('main2dmap'));
			                 myChartcity.setOption(chartOptioncity, true);
			              },300);
					   }else{
						   var chartOptioncity = Oeasymain2dmap.chartOptionfun();
			               var myChartcity =  echarts.init(document.getElementById('main2dmap'));
			               myChartcity.setOption(chartOptioncity, true);
					   }
				   }else{
					   //chartnounitdata
					   var chartOptioncitynounit = Oeasymain2dmap.chartnounitdata();
			           var myChartcitynounit =  echarts.init(document.getElementById('main2dmap'));
			           myChartcitynounit.setOption(chartOptioncitynounit, true);
				   }
				   
    		    }) .fail(function(jqXHR, textStatus) { 
				       var chartOptioncityerror = Oeasymain2dmap.chartnounitdata();
			           var myChartcityerror =  echarts.init(document.getElementById('main2dmap'));
			           myChartcityerror.setOption(chartOptioncityerror, true);
				});
			}else{
				$.ajax({
    			  url:oeasymapconfig.unitInfo+"/unit/unitInfo.do" ,
    			  dataType: "json",
    			  type: "POST",
    			  data: {
    			    "province_code":oeasymapconfig.province_code,
    			    "town_code":quxiancode			
    			  },
				  xhrFields: {
                   withCredentials: true
                  }
    		    }).done(function(msg){
				   var data = msg.data;
				   if(data !=null){
					   if(data.length >0){
						   for (var j = 0; j < data.length; j++) {
        				     var lng = data[j].lng;
        				     var lat = data[j].lat;
        				     var unitid = data[j].unit_id;
        				     Oeasymain2dmap.geoCoord[unitid] = [lng,lat];
        				     Oeasymain2dmap.quxianunit.push({"unit_id":unitid,"lng":lng,"lat":lat});
        			     }
						 setTimeout(function(){
				            var chartOption = Oeasymain2dmap.chartOptionfun();
			                var myChart =  echarts.init(document.getElementById('main2dmap'));
			                myChart.setOption(chartOption, true);
			             },300);
					   }else{
						   var chartOption = Oeasymain2dmap.chartOptionfun();
			               var myChart =  echarts.init(document.getElementById('main2dmap'));
			               myChart.setOption(chartOption, true);
					   }
				   }else{
					   //chartnounitdata
					   var chartOptiontownnounit = Oeasymain2dmap.chartnounitdata();
			           var myCharttownnounit =  echarts.init(document.getElementById('main2dmap'));
			           myCharttownnounit.setOption(chartOptiontownnounit, true);
				   }
				   
    		    }) .fail(function(jqXHR, textStatus) { 
				       var chartOptiontownerror = Oeasymain2dmap.chartnounitdata();
			           var myCharttownerror =  echarts.init(document.getElementById('main2dmap'));
			           myCharttownerror.setOption(chartOptiontownerror, true);
				});
			}
			
			//初始化人流车流数据，写入内存
			$.ajax({
				url:oeasymapconfig.unitCount+"/unit/unitCount.do" ,
				   dataType: "json",
				   type: "POST",
				   data: {
					  "province_code":oeasymapconfig.province_code,
					  "city_code":oeasymapconfig.city_code												  
				   },
				   xhrFields: {
					 withCredentials: true
				   }
				
			}).done(function(data){
				Oeasymain2dmap.caranddoorcount = data;
			}).fail(function(jqXHR, textStatus) { 
				Oeasymain2dmap.caranddoorcount = null;
			});
			
		},
		
		chartOptionfun:function(){
			var quxiancode = Oeasymain2dmap.GetQueryString('zone');
			
			var series = [ {
				name : '昆明市',
				type : 'map',
				roam : 'move',
				hoverable : true,
				mapType : '云南',
				itemStyle : {
					normal : {
						borderColor : 'rgba(14,73,117,1)',
						borderWidth : 2,
						areaStyle : {
							color : 'rgba(0,83, 153,1)'
						},
						label:{
	                        show:true,
	                        textStyle: {
	                           color: "rgb(249, 249, 249)"
	                        }
	                    },
	                    shadowColor: 'rgba(0, 0, 0, 0.5)',
	                    shadowBlur: 10,
	                    shadowOffsetX:50,
	                    shadowOffsetY:-50
					},
				},
				data : [],
				markLine : {
					smooth : true,
					symbol : [ 'none', 'circle' ],
					symbolSize : 1,
					itemStyle : {
						normal : {
							color : '#fff',
							borderWidth : 1,
							borderColor : 'rgba(30,144,255,0.5)'
							
						}
					},
					data : [

					], //无用的轨迹线，暂时去掉
				},
				geoCoord : Oeasymain2dmap.geoCoord
			}];
			
			for (var i=0;i<Oeasymain2dmap.quxianunit.length;i++){
				var lng = Oeasymain2dmap.quxianunit[i].lng;
				var lat = Oeasymain2dmap.quxianunit[i].lat;
				var unitid = Oeasymain2dmap.quxianunit[i].unit_id;
				var tt = i+1;
				if (tt <Oeasymain2dmap.quxianunit.length){
					var unitid1 = Oeasymain2dmap.quxianunit[tt].unit_id;
					var num = parseInt(Math.random()*100);
					var route1 = [
	    					         [{name:unitid}, {name:unitid1,value:num}]      
	    					     ];
	    			var routenames1 = [
	    					            {name:unitid,value:num}
	    					       ];
	    			var routepoint = {
							name : '小区',
							type : 'map',
							mapType : '云南',
							data : [],
							markPoint : {
								symbol : 'emptyCircle',
								symbolSize : function(v) {
									return 10 + v / 10
								},
								effect : {
									show : true,
									shadowBlur : 0
								},
								itemStyle : {
									normal : {
										label : {
											show : false
										}
									},
									emphasis : {
										label : {
											position : 'top',
											show:false
										}
									}
								},
								data : routenames1
							}
						  };
	    			series.push(routepoint);   
				}
			}
			
			var option = {
					backgroundColor : 'rgba(6, 24, 64,0.9)',
					color : [ 'gold', 'aqua', 'lime' ],
					title : {
						text : '',
						subtext : '',
						x : 'center',
						textStyle : {
							color : '#fff'
						}
					},
					tooltip : {
						trigger : 'item',
						backgroundColor:'rgba(49,206,199,0.7)',
						formatter : function (params) {
							var unitid = '';
						    unitid = params.name.toString();
						    var str = '';
						    if(unitid != '' && unitid !=null){
								
						    	//根据小区的经度和纬度，调用小区的当日人流和车流数据
							    if(unitid.indexOf(">") == -1){
							    	if(/^[\u3220-\uFA29]+$/.test(unitid)){
							    		//如果是中文，则是区县提示文字
						                str = unitid;
						            }else{
						            	//小区点上的提示，人流量和车流量
										if(Oeasymain2dmap.caranddoorcount){
											for(k=0;k<Oeasymain2dmap.caranddoorcount.length;k++){
												if(unitid == Oeasymain2dmap.caranddoorcount[k].unit_id){
                                                  	str += Oeasymain2dmap.caranddoorcount[k].name+'<br/>';
							    			        str += '今日人流：'+Oeasymain2dmap.caranddoorcount[k].doorCount+'<br/>';
							    		 	        str += '今日车流：'+Oeasymain2dmap.caranddoorcount[k].carCount+'<br/>';
												}
											}
										}else{
											str += unitid+'<br/>';
							    		 	str += '今日人流：0'+'<br/>';
							    		 	str += '今日车流：0'+'<br/>';
										}
						            }
							    	
							    }
						    }
						    return str;
						}
					},
					dataRange : {
						show : false,
						min : 0,
						max : 100,
						calculable : true,
						color : [ '#ff3333', 'orange', 'yellow', 'lime', 'aqua' ],
						textStyle : {
							color : '#fff'
						}
					},
					series : series
				};
				return option
		},
		
		chartnounitdata:function(){
			var quxiancode = Oeasymain2dmap.GetQueryString('zone');
			
			var series = [ {
				name : '昆明市',
				type : 'map',
				roam : 'move',
				hoverable : true,
				mapType : '云南',
				itemStyle : {
					normal : {
						borderColor : 'rgba(14,73,117,1)',
						borderWidth : 2,
						areaStyle : {
							color : 'rgba(0,83, 153,1)'
						},
						label:{
	                        show:true,
	                        textStyle: {
	                           color: "rgb(249, 249, 249)"
	                        }
	                    },
	                    shadowColor: 'rgba(0, 0, 0, 0.5)',
	                    shadowBlur: 10,
	                    shadowOffsetX:50,
	                    shadowOffsetY:-50
					},
				},
				data : [],
				markLine : {
					smooth : true,
					symbol : [ 'none', 'circle' ],
					symbolSize : 1,
					itemStyle : {
						normal : {
							color : '#fff',
							borderWidth : 1,
							borderColor : 'rgba(30,144,255,0.5)'
							
						}
					},
					data : [

					], //无用的轨迹线，暂时去掉
				},
				geoCoord : []
			}];
			
			var option = {
					backgroundColor : 'rgba(6, 24, 64,0.9)',
					color : [ 'gold', 'aqua', 'lime' ],
					title : {
						text : '',
						subtext : '',
						x : 'center',
						textStyle : {
							color : '#fff'
						}
					},
					tooltip : {
						trigger : 'item',
						backgroundColor:'rgba(49,206,199,0.7)',
						formatter : '{b}'
					},
					dataRange : {
						show : false,
						min : 0,
						max : 100,
						calculable : true,
						color : [ '#ff3333', 'orange', 'yellow', 'lime', 'aqua' ],
						textStyle : {
							color : '#fff'
						}
					},
					series : series
				};
				return option
		},
		
		return3dgispage:function(){
        	top.location.href = oeasymapconfig.return3dgispage ;  
        },
      
		
		
  };