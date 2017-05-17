<%@ page language="java"  pageEncoding="UTF-8"%>
<div class="container" id="content" v-cloak>
<div class="well well-lg">
<div class="row" style="padding-top: 15px;">
	<div class="col-md-4">
		<select v-model="areaSelected.area1" id="area1" class="form-control">
			<option><a href="#">不限</a></option>
			<option v-for="area in area1s">
			    <a href="#">{{area}}</a>
		    </option>
	    </select>
	</div>
	<div class="col-md-4" v-bind:style="{display: area2Display}">
		<select v-model="areaSelected.area2" id="area2" class="form-control">
			<option><a href="#">不限</a></option>
			<option v-for="area in area2s">
			    <a href="#">{{area}}</a>
		    </option>
	    </select>
	</div>
	<div class="col-md-4">
		<select v-model="areaSelected.area3" id="area3" class="form-control">
			<option><a href="#">不限</a></option>
			<option v-for="area in area3s">
			    <a href="#">{{area}}</a>
		    </option>
	    </select>
	</div>
</div>	
</div>
</div>