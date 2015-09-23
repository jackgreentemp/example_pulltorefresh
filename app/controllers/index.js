var api = {
    initialize: function() {
        $.pulltorefresh.initialize({
            arguments: {},
            controller: "exampleview",//子控制器名称
        });
    }
};

$.index.addEventListener("open", function(){
	api.initialize();//初始化widgets
});

$.index.open();


