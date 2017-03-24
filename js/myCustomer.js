(function($) {
    $(document).ready(function(){
	
	//a function for detection
        function browserDetection() {  
           $('#movie').wrap('<img class="imgDivVid" src="images/v1024_01.gif"/>');
           $('#buttonbar button').hide();
        }
	
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;   
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
           browserDetection();
       }
    
        $('#buttonbar #play').trigger('click');

        var vCount = 0;
        $('video').each(function(){
            var objs = $(this);
            if(vCount == 0){
                $(objs[0]).on('click', function(){
                    window.open('https://www.careline.com.tw/CareLineMotor/motorbike/', '_blank');
                });
                vCount++
            }else{
                $(objs[0]).on('click', function(){
                    window.open('https://www.careline.com.tw/CareLineTravel/', '_blank');
                });
            }

        });
    });
})(jQuery)