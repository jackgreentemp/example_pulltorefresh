var args = arguments[0] || {};

var api = {
    data : {},
	
    initialize: function() {
        if (args.pulltorefresh) {
            args.pulltorefresh.setCallback(api.doRefresh); //设置api.doRefresh作为widgets中的回调
        }
        //延时操作，否则第一次进入app时，下拉刷新的头部view无法自动收起
        setTimeout(function(){
		    api.updateListView(api.data); //下拉刷新，更新ui
		}, 500);
    },

    doRefresh: function(e) {
        // Call your updateListView function
        api.updateListView(api.data); //下拉刷新，更新ui
    },

    updateListView: function() {
        if (args.pulltorefresh && api.data) {
        	
        	$.container.removeAllChildren();
        	
        	var count = 10;
        	
        	for(i=0; i<count; i++){
	        	var image = Ti.UI.createImageView({
				    top: 10,
					height: 240,
					image: "http://www.photography-match.com/views/images/gallery/Uluru_Kata_Tjuta_National_Park_Australia.jpg"
				});
				$.container.add(image);
        	}
			// Ti.API.info(Ti.Platform.displayCaps.logicalDensityFactor);
			var logicalDensityFactor = Ti.Platform.displayCaps.logicalDensityFactor;
			if(OS_IOS)
            	args.pulltorefresh.stop(count*250/logicalDensityFactor, 20); //此处以ImageView为例，count为ImageView个数，250为每个ImageView高度。如果是listview或者tableview，250应该是每个ListItem或者TableViewRow的高度
            else if(OS_ANDROID)
            	args.pulltorefresh.stop(count * 250, 20); //此处以ImageView为例，count为ImageView个数，250为每个ImageView高度。如果是listview或者tableview，250应该是每个ListItem或者TableViewRow的高度
            	
        }
    }
};

api.initialize();