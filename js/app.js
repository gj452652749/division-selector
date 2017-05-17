var areaJson;
var vm=new Vue({
	el:'.container',
	data:{
		area1s:['北京市','天津市','上海市','广东省'],
		area2s:[],
		area3s:[],
		plm:['北京','上海','天津','重庆'],
		areaSelected:{
			area1:'山西',
			area2:'阳泉',
			area3:'',
			isPlm:false
		},
		user:{
			id:'11',
			userName:'gj'
		},
		tb:{
			coreName:'core1',
			tbName:'report'
		},
		area2Display:'block'
	},
	mounted() {
		console.log('ready');
		$.get('data/area.json',function(data){
			console.log(data);
			areaJson=data;
			$.each(areaJson, function() {
				console.log(this.name);
				vm.area1s.push(this.name);
			});
			vm.areaSelected.area1='广东';
		})
	},
	updated() {
		console.log('updated!'+vm.area2Display);
	},
	methods:{
		init:function() {
			
		},
		getTbConf:function() {
	        $.get("http://localhost:8080/zkyunso/dataimport/getTbConf", 
	        {userName:vm.userName,coreName:vm.coreName,tbName:vm.activeDs.defaultTb},
			  function(data){
			    console.log("configuredTbs:"+vm.configuredTbs);
	            vm.configuredTbs=JSON.parse(data);
	            console.log("vm.configuredTbs:"+vm.configuredTbs);
			  });
		},
		pojo:function() {
			console.log('pojo begin');
	        $.get("http://localhost:8080/publicservice/proxy/pojo", 
	        {tb:JSON.stringify(vm.tb),usr:JSON.stringify(vm.user)},
			  function(data){
			    console.log("pojo:"+data);
			  });
		},
		pojo2:function() {
			console.log('pojo begin');
	        $.post("http://localhost:8080/publicservice/proxy/pojo", 
	        {tb:JSON.stringify(vm.tb),usr:JSON.stringify(vm.user)},
			  function(data){
	            console.log("pojo:"+data);
			  });
		}
	},
	computed:{
		area2Display:function() {
			var returnVar;
			console.log(this+'computed worked!');
			if(areaJson==undefined)
				returnVar= 'none';
//			for(var i=0;i<areaJson.length;i++) {
//				console.log('computed'+areaJson[i].name);
//			}
//			$.each(areaJson, function() {
//				console.log('computed'+this.name);
//			});
//			if(this.areaSelected.area1=='北京')
//				console.log('北京choosed');
			if(this.areaSelected.isPlm) {
				if(this.areaSelected.area1=='北京'){
					returnVar= 'none';
				}
			}
			else returnVar= 'block';
			return returnVar;
		}
	},
	watch:{
		'areaSelected.area1':function(val) {
			vm.area2s=[];
			vm.area3s=[];
			console.log('area1 changed'+val);
			//判断是否选中了直辖市
			if($.inArray(val,vm.plm)>=0) {
				$.each(areaJson, function() {
				//如果是直辖市，则将area2s隐藏，更新area3s列表				
				//命中到直辖市				
				if(val==this.name) {
					vm.areaSelected.isPlm=true;					
					$.each(this.city, function() {
						$.each(this.area, function(i,val) {
							vm.area3s.push(val);
							console.log(val);
						});
							return false;
					});
					return false;
				}
//				console.log(this.name);
//				vm.area1s.push(this.name);

				});
				
			}
			else {
				vm.areaSelected.isPlm=false;
				$.each(areaJson, function() {
				if(val==this.name) {
					$.each(this.city, function() {
						vm.area2s.push(this.name);
						console.log(this.name);
					});
					return false;
				}
//				console.log(this.name);
//				vm.area1s.push(this.name);
			});
		}
		},
		'areaSelected.area2':function(val) {
			//如果是直辖市，则不作任何处理
			if($.inArray(vm.areaSelected.area1,vm.plm)>=0)
				return;
			vm.area3s=[];
			console.log('area2 changed'+val);
			$.each(areaJson, function() {
				//省
				if(vm.areaSelected.area1==this.name) {
					$.each(this.city, function() {
						//市
						if(val==this.name) {
							$.each(this.area, function(i,val) {
								vm.area3s.push(val);
								console.log(this);
							});
						return false;
						}
					});
				}
//				console.log(this.name);
//				vm.area1s.push(this.name);
			});
		}
	}
})
