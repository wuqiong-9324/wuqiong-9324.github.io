window.onload=function(){var aId=window.location.href.split("=")[1];$.ajax({url:"../lib/achive/"+aId+".json",success:function(data){data.forEach(function(item){var str='<li class="item"><img src="'+item+'" alt="" /></li>';$("#masonry").append(str)})}})};
/*! qx 最后修改于： 2020-07-05 */