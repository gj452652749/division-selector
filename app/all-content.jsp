<%@ page language="java"  pageEncoding="UTF-8"%>
<div class="container">
            <h3>测试(URL 获取)</h3>
            <button v-on:click="pojo">pojo</button>
            <p>配置了 data-id，非下拉菜单选择输入则背景色警告。</p>
            <div class="row">
                <div class="col-lg-2">
                    <div class="input-group">
                        <input type="text" class="form-control" id="test">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            </ul>
                        </div>
                        <!-- /btn-group -->
                    </div>
                </div>
            </div>

            <h3>测试(URL 获取)</h3>
            <p>不展示下拉菜单按钮。</p>
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" id="testNoBtn">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            </ul>
                        </div>
                        <!-- /btn-group -->
                    </div>
                </div>
            </div>

            <h3>测试(json 数据中获取)</h3>
            <p>默认启用空关键字检索。</p>
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" id="test_data">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            </ul>
                        </div>
                        <!-- /btn-group -->
                    </div>
                </div>
            </div>

            <h3>百度搜索</h3>
            <p>支持逗号分隔多关键字</p>
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group" style="width: 300px;">
                        <input type="text" class="form-control" id="baidu">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            </ul>
                        </div>
                        <!-- /btn-group -->
                    </div>
                </div>
            </div>

            <h3>淘宝搜索</h3>
            <p>支持逗号分隔多关键字，并展示列表表头。</p>
            <div class="row">
                <div class="col-lg-6">
                    <div class="input-group" style="width: 400px;">
                        <input type="text" class="form-control" id="taobao">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            </ul>
                        </div>
                        <!-- /btn-group -->
                    </div>
                </div>
            </div>

    </div>
<div class="container-fluid" id="content">
<div class="row">
	<div class="col-md-3">
		<select v-model="areaSelected.area1" id="area1" class="form-control">
			<option v-for="area in area1s">
			    <a href="#">{{area}}</a>
		    </option>
	    </select>
	</div>
	<div class="col-md-3" v-bind:style="{display: area2Display}">
		<select v-model="areaSelected.area2" id="area2" class="form-control">
			<option v-for="area in area2s">
			    <a href="#">{{area}}</a>
		    </option>
	    </select>
	</div>
	<div class="col-md-3">
		<select v-model="areaSelected.area3" id="area3" class="form-control">
			<option v-for="area in area3s">
			    <a href="#">{{area}}</a>
		    </option>
	    </select>
	</div>
</div>

</div>