 $(function(){
		// $('body').hide();
 	// 	$('#header').hide();
		// setTimeout(function(){
		// 	$('body').slideDown();
 	// 		$('#header').slideDown();
		// },1000)
//------------------------------------------------------------
	//下拉箭头
	$('#down').click(function(){
	var stop=null;
	function demo(){
		stop=setInterval(function(){		
			var s=$(document).scrollTop();
			if(s>600){
				clearInterval(stop);
			}else{
				s+=50;
			};
			$(document).scrollTop(s);
		},50);
	};
	demo();
	});
	//down end
	//主页
	$('.navbox>ul>li>a:first').click(function(){
		$(document).scrollTop(0);
	})
	//返回顶部
	$('#up').click(function(){
	var z=$(document).scrollTop();
	var st=null;
	function topup(){
		st=setInterval(function(){		
			if(z<0){
				clearInterval(st)
			}else{
				z-=100;
			};
			$(document).scrollTop(z)

		},50);
	};
	topup();
	});
	//up 、top end

	$(document).scroll(function(){
		var sc=$(document).scrollTop();
		if(sc>600){
			$('.nav').addClass('navp');
			$('#up').fadeIn();
			$('#content').css('margin-top','175px');
		}else{
			$('.nav').removeClass('navp');
			$('#content').css('margin-top','100px');
			$('#up').fadeOut();
		};
	});


//------------------------------------------------------------
	//滚动
	$('#ziliao>ul>li').clone(true).appendTo('#ziliao>ul');
	var marq=1;
	setInterval(function(){
		$('#ziliao').animate({scrollTop:marq*150},1000,function(){

			if(marq==5){
				$(this).scrollTop(0);
				marq=0;
			}
			marq++;
			// console.log(marq);`
		});
	},2000);

//------------------------------------------------------------

	/*轮播*/
	var now=0;
	var len=$('#num li').length;
	var s=null;
	function run(){
		s=setInterval(function(){
			$('#num li').hide();
			$('#numImg li').css('border','2px solid #aaa');
			now++;
			if(now==len){
				now=0;
			};
			$('#numImg li:eq('+now+')').css('border','2px solid #39A38F')
			$('#num li:eq('+now+')').fadeIn();
		},2000);
	};
	run();
	$('#numImg li').mouseenter(function(){
		now=$(this).index();
		$('#num li').hide().stop();
		$('#numImg li').css('border','2px solid #AAA');
		$('#numImg li:eq('+now+')').css('border','2px solid #39A38F');
		$('#num li:eq('+now+')').fadeIn();
	});
	// 轮播右箭头
	$('#n-right').click(function(){
		$('#num li').hide().stop();
			now++;
			if(now==len){
				now=0;
			};
		$('#num li:eq('+now+')').fadeIn();
	});
	//轮播左箭头
	$('#p-left').click(function(){
		$('#num li').hide().stop();
			if(now==0){
				now=len-1;
			}else{
				now--;
			};
		$('#num li:eq('+now+')').fadeIn();
	});
	$('#num,#numImg').mouseenter(function(){
		clearInterval(s);
	});
	$('#num,#numImg').mouseleave(function(){
		run();
	});
//------------------------------------------------------------

	// 下拉列表
	$('.nav').hover(function(){
		$('.nav-down').stop().slideToggle();
	});
	$('.navbox>ul>li>a').mouseenter(function(){
		$(this).next().slideDown();
	});

	$('.navbox>ul>li:last-child').mouseleave(function(){
		 $(this).children('ul').stop().slideUp();
	});
//------------------------------------------------------------

	// 筛选卡
	$('.port>a:eq(0)').click(function(){
		$('.port-img>ul>li').hide();
		$('.port-img>ul>li:eq(0),.port-img>ul>li:eq(3),.port-img>ul>li:eq(5)').fadeIn();
	});
	$('.port>a:eq(1)').click(function(){
		$('.port-img>ul>li').hide();
		$('.port-img>ul>li:eq(1),.port-img>ul>li:eq(9),.port-img>ul>li:eq(2)').fadeIn();
	});
	$('.port>a:eq(2)').click(function(){
		$('.port-img>ul>li').hide();
		$('.port-img>ul>li:eq(3),.port-img>ul>li:eq(6),.port-img>ul>li:eq(8)').fadeIn();
	});
	$('.port>a:eq(3)').click(function(){
		$('.port-img>ul>li').hide();
		$('.port-img>ul>li:eq(7),.port-img>ul>li:eq(4)').fadeIn();
	});
	$('.port>a:last').click(function(){
		$('.port-img>ul>li').fadeIn();
		// $('.port-img>ul>li:eq(1),.port-img>ul>li:eq(9),.port-img>ul>li:eq(2)').fadeIn();
	});
//------------------------------------------------------------

	//变换
	$('.port>a').click(function(){
		$('.port>a').css('border','none');
		$(this).css('border','2px solid #39A38F');
	});
	$('.port-img>ul>li').mouseenter(function(){
		$(this).children('img').css('-webkit-transform','scale(0.5,0.5)');
		$(this).children('div').css('-webkit-transform','scale(1,1)');
	}).mouseleave(function(){
		$(this).children('img').css('-webkit-transform','scale(1,1)');
		$(this).children('.pf-img').css('-webkit-transform','scale(0.5,0.5)');
	});
//------------------------------------------------------------
	// 弹屏状态
	$('#aler').hide();
	$('.wx').click(function(){
	 	$('#fx>img').css('display','none');
	 	$('#aler').show();
		$('#aler>img,#aler>a').hide();
	 	$('#fx>img:eq(0)').css('display','block');
	});
	$('.xl').click(function(){
	 	$('#fx>img').css('display','none');
		$('#aler').show();
		$('#aler>img,#aler>a').hide();
	 	$('#fx>img:eq(1)').css('display','block');
	});

	$('div.pf-img a').click(function(){
		$('#fx>img').css('display','none');
		$('#aler>img').hide();
		var p=$(this).parent().parent().index();
		var alen=$('#aler>img').length;
		$('#aler').show();
		$('#aler>img:eq('+p+'),#aler>a').show();
		$('.a-left').click(function(){
			$('#aler>img').hide();
			if(p==0){
				p=alen;
			};
			p--;
			$('#aler>img:eq('+p+')').show();
			return false;
		});
		$('.a-right').click(function(){
			$('#aler>img').hide();
			p++;
			if(p==alen){
				p=0;
			};
			$('#aler>img:eq('+p+')').show();
			return false;
		});
	});
	$('#aler').click(function(e){
		$(this).hide();
	});
	$('#aler>img').click(function(){
		return false;
	});
//--------------------------------------------

// 正则
	$('#yijian').submit(function(){
		 
		  // $('#user').on('submit',function(){
	 	var  ureg=$('#user').val().length;
	 	if(ureg>0){
	 		$('#user').next().html('<span style="color:green;"></span>');
	 		
	 	}else{
	 		$('#user').next().html('<span style="color:red;">内容不能为空</span>');
	 	};
	 	// $('#user').val('');
	  // });

		// window.open('../index.html');
		// var  sureg=$('#subj').val().length;
	 // 	var  ureg=$('#user').val().length;
	 // 	var  creg=$('#cont').val().length;
	 // 	if(sureg>0&&ureg>0&&creg>0){
	 // 		$().next().html('<span style="color:green;"></span>');
	 		
	 // 	}else{
	 // 		$(this).next().html('<span style="color:red;">内容不能为空</span>');
	 // 	};
	return false;
	});
	 var reg1=/^[0-9a-zA-Z]+[._]?[0-9a-zA-Z]+[._]?[0-9a-zA-Z]+@(163|qq)\.+(com|cn)$/i;
	 var nreg=/^1[3,4,5,7,8][0-9]{9}$/;
	 $('#email').on('keyup blur',function(){
	 	var  uval=$('#email').val();
	 	if(reg1.test(uval)){
	 		$(this).next().html('<span style="color:green;">格式正确</span>')
	 		
	 	}else{
	 		$(this).next().html('<span style="color:red;">格式错误</span>')
	 	};
	 });
	  $('#number').on('keyup blur',function(){
	 	var  nval=$('#number').val();
	 	if(nreg.test(nval)){
	 		$(this).next().html('<span style="color:green;">格式正确</span>');
	 		
	 	}else{
	 		$(this).next().html('<span style="color:red;">格式错误</span>');
	 	};
	 });
//--------------------------------------------------------


	// $('#w').click(function(){
	// 	$(this).animate({"width":"1000px"},1000,function(){
	// 	});
	// });


})








