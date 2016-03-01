/****
 轮播插件修改版
 使用方法：
 html：
 <div class="lunbo">
 <div class="list">
 图片放置区
 </div>
 <div class="buttons">
 焦点放置区<span>
 </div>
 
 左右箭头添加ID prev和next
 </div>
 js:
 引用jq+插件后
 js加上$(function () {lunbo (这里写希望轮播的速度)});即可
 
 
 范例：
 <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>query焦点轮播图</title>
    <style type="text/css">
        *{ margin: 0; padding: 0; text-decoration: none;}
        body { padding: 20px;}
        .imgLun { width: 600px; height: 400px; border: 3px solid #333; overflow: hidden; position: relative;}
        .list { width: 4200px; height: 400px; position: absolute; z-index: 1;}
        .list img { float: left;}
        .buttons { position: absolute; height: 10px; width: 100px; z-index: 2; bottom: 20px; left: 250px;}
        .buttons span { cursor: pointer; float: left; border: 1px solid #fff; width: 10px; height: 10px; border-radius: 50%; background: #333; margin-right: 5px;}
        .buttons .on {  background: orangered;}
        .arrow { cursor: pointer; display: none; line-height: 39px; text-align: center; font-size: 36px; font-weight: bold; width: 40px; height: 40px;  position: absolute; z-index: 2; top: 180px; background-color: RGBA(0,0,0,.3); color: #fff;}
        .arrow:hover { background-color: RGBA(0,0,0,.7);}
        .imgLun:hover .arrow { display: block;}
        #prev { left: 20px;}
        #next { right: 20px;}
    </style>
    <script type="text/javascript" src="js/jquery.1.10.2.js"></script>
    <script type="text/javascript">

  		
			
        
         function lunbo (speed,option) {
            var container = $('.imgLun');
            var list = $('.list');
            var buttons = $('.buttons span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var imgList = $('.list img');
            var len = $(".list img").length;
            var interval = 3000;
            var timer;
			var buttonsLen = $(".buttons span").length;
			var imgWid = parseInt(imgList.eq(0).css("width")) ;
		    var i = combine();
			//console.log(speed);
			function combine (){
				Lcloned = imgList.eq(len-1).clone();			
				Fcloned = imgList.eq(0).clone();
				//console.log(imgWid);
				Lcloned.insertBefore(imgList.eq(0));
				Fcloned.insertAfter(imgList.eq(len-1));
			}
			
            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, speed, function () {
                    if(left > -200){
                        list.css('left', -imgWid* len);
                    }
                    if(left < (-imgWid * len)) {
                        list.css('left', -imgWid);
                    }
                    showButton();
                });
                //showButton();
            }
            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }

			
            next.click(function () {
            	
                if (list.is(':animated')) {
                    return;
                }
                if (index == len) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-imgWid);
                //showButton();
                //$.lunbo(10);
            });

            prev.click( function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = len;
                }
                else {
                    index -= 1;
                }
                animate(imgWid);
                //showButton();
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt((this).index())+1;
                     var offset = -imgWid * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });


        };
   
        $(function () {lunbo (200)});
    </script>
</head>
<body>

<div class="imgLun">
    <div class="list" style="left: -600px;">
       <!-- <img src="img/5.jpg" alt="1"/>-->
        <img src="img/1.jpg" alt="1"/>
        <img src="img/2.jpg" alt="2"/>
        <img src="img/3.jpg" alt="3"/>
        <img src="img/4.jpg" alt="4"/>
        <img src="img/5.jpg" alt="5"/>
        <img src="img/5.jpg" alt="5"/>
       <!-- <img src="img/1.jpg" alt="5"/>-->
    </div>
   <div class="buttons">
        <span  class="on"></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
   </div>
    <a href="javascript:;" id="prev" class="arrow">&lt;</a>
    <a href="javascript:;" id="next" class="arrow">&gt;</a>
</div>

</body>
</html>
 ****/



function lunbo(speed) {
	var container = $('.imgLun');
	var list = $('.list');
	var buttons = $('.buttons span');
	var prev = $('#prev');
	var next = $('#next');
	var index = 1;
	var imgList = $('.list img');
	var len = $(".list img").length;
	var interval = 3000;
	var timer;
	var buttonsLen = $(".buttons span").length;
	var imgWid = parseInt(imgList.eq(0).css("width"));
	var i = combine();
	//console.log(speed);
	function combine() {
		Lcloned = imgList.eq(len - 1).clone();
		Fcloned = imgList.eq(0).clone();
		//console.log(imgWid);
		Lcloned.insertBefore(imgList.eq(0));
		Fcloned.insertAfter(imgList.eq(len - 1));
	} //动态添加最后第一幅图和最后一幅图的过度

	function animate(offset) {
		var left = parseInt(list.css('left')) + offset;
		if (offset > 0) {
			offset = '+=' + offset;
		} else {
			offset = '-=' + Math.abs(offset);
		}
		list.animate({
			'left': offset
		}, speed, function() {
			if (left > -200) {
				list.css('left', -imgWid * len);
			}
			if (left < (-imgWid * len)) {
				list.css('left', -imgWid);
			}
			showButton();
		});
		//showButton();
	} //图片的左右移动
	function showButton() {
		buttons.eq(index - 1).addClass('on').siblings().removeClass('on');
	}
	//焦点按钮选定时形态改变

	next.click(function() {

		if (list.is(':animated')) {
			return;
		}
		if (index == len) {
			index = 1;
		} else {
			index += 1;
		}
		animate(-imgWid);
		//showButton();
		//$.lunbo(10);
	});

	prev.click(function() {
		if (list.is(':animated')) {
			return;
		}
		if (index == 1) {
			index = len;
		} else {
			index -= 1;
		}
		animate(imgWid);
		//showButton();
	});
	//左右箭头点击切换
	buttons.each(function() {
		$(this).bind('click', function() {
			if (list.is(':animated') || $(this).attr('class') == 'on') {
				return;
			}
			var myIndex = parseInt($(this).index()) + 1;
			var offset = -imgWid * (myIndex - index);

			animate(offset);
			index = myIndex;
			showButton();
		})
	});


};