var testBsSuggest = $("#test").bsSuggest({
        //url: "/rest/sys/getuserlist?keyword=",
        url: "data/data.json",
        /*effectiveFields: ["userName", "shortAccount"],
        searchFields: [ "shortAccount"],
        effectiveFieldsAlias:{userName: "姓名"},*/
        idField: "userId",
        keyField: "userName"
    }).on('onDataRequestSuccess', function (e, result) {
        console.log('onDataRequestSuccess: ', result);
    }).on('onSetSelectValue', function (e, keyword) {
        console.log('onSetSelectValue: ', keyword);
    }).on('onUnsetSelectValue', function (e) {
        console.log("onUnsetSelectValue");
    });

    /**
     * 不显示下拉按钮
     */
    var testBsSuggest = $("#testNoBtn").bsSuggest({
        //url: "/rest/sys/getuserlist?keyword=",
        url: "data/data.json",
        /*effectiveFields: ["userName", "shortAccount"],
        searchFields: [ "shortAccount"],
        effectiveFieldsAlias:{userName: "姓名"},*/
        showBtn: false,
        idField: "userId",
        keyField: "userName"
    }).on('onDataRequestSuccess', function (e, result) {
        console.log('onDataRequestSuccess: ', result);
    }).on('onSetSelectValue', function (e, keyword) {
        console.log('onSetSelectValue: ', keyword);
    }).on('onUnsetSelectValue', function (e) {
        console.log("onUnsetSelectValue");
    });

    /**
     * 从 data参数中过滤数据
     */
    var testdataBsSuggest = $("#test_data").bsSuggest({
        indexId: 2,  //data.value 的第几个数据，作为input输入框的内容
        indexKey: 1, //data.value 的第几个数据，作为input输入框的内容
        data: {
            'value':[
                {'id':'0','word':'lzw','description':'http://lzw.me'},
                {'id':'1','word':'lzwme','description':'http://w.lzw.me'},
                {'id':'2','word':'meizu','description':'http://www.meizu.com'},
                {'id':'3','word':'flyme','description':'http://flyme.meizu.com'}
            ],
            'defaults':'http://lzw.me'
        }
    });
    /**
     * 百度搜索 API 测试
     */
    var baiduBsSuggest = $("#baidu").bsSuggest({
        allowNoKeyword: false,   //是否允许无关键字时请求数据。为 false 则无输入时不执行过滤请求
        multiWord: true,         //以分隔符号分割的多关键字支持
        separator: ",",          //多关键字支持时的分隔符，默认为空格
        getDataMethod: "url",    //获取数据的方式，总是从 URL 获取
        url: 'http://unionsug.baidu.com/su?p=3&t='+ (new Date()).getTime() +'&wd=', /*优先从url ajax 请求 json 帮助数据，注意最后一个参数为关键字请求参数*/
        jsonp: 'cb',                      //如果从 url 获取数据，并且需要跨域，则该参数必须设置
        processData: function (json) {    // url 获取数据时，对数据的处理，作为 getData 的回调函数
            var i, len, data = {value: []};
            if (!json || !json.s || json.s.length === 0) {
                return false;
            }

            console.log(json);
            len = json.s.length;

            jsonStr = "{'value':[";
            for (i = 0; i < len; i++) {
                data.value.push({
                    word: json.s[i]
                });
            }
            data.defaults = 'baidu';

            //字符串转化为 js 对象
            return data;
        }
    });
    /**
     * 淘宝搜索 API 测试
     */
    var taobaoBsSuggest = $("#taobao").bsSuggest({
        indexId: 2,             //data.value 的第几个数据，作为input输入框的内容
        indexKey: 1,            //data.value 的第几个数据，作为input输入框的内容
        allowNoKeyword: false,  //是否允许无关键字时请求数据。为 false 则无输入时不执行过滤请求
        multiWord: true,        //以分隔符号分割的多关键字支持
        separator: ",",         //多关键字支持时的分隔符，默认为空格
        getDataMethod: "url",   //获取数据的方式，总是从 URL 获取
        showHeader: true,       //显示多个字段的表头
        effectiveFieldsAlias:{Id: "序号", Keyword: "关键字", Count: "数量"},
        url: 'http://suggest.taobao.com/sug?code=utf-8&extras=1&q=', /*优先从url ajax 请求 json 帮助数据，注意最后一个参数为关键字请求参数*/
        jsonp: 'callback',               //如果从 url 获取数据，并且需要跨域，则该参数必须设置
        processData: function(json){     // url 获取数据时，对数据的处理，作为 getData 的回调函数
            var i, len, data = {value: []};

            if(!json || !json.result || json.result.length == 0) {
                return false;
            }

            console.log(json);
            len = json.result.length;

            for (i = 0; i < len; i++) {
                data.value.push({
                    "Id": (i + 1),
                    "Keyword": json.result[i][0],
                    "Count": json.result[i][1]
                });
            }
            console.log(data);
            return data;
        }
    });

    $("form").submit(function(e) {
        return false;
    });