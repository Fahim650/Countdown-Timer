jQuery(document).ready(function(){
    jQuery('.set').click(function(){
        var _sec1=jQuery('.sec1').val() ;
        var _min1=jQuery('.min1').val() ;
        var _hour1=jQuery('.hour1').val() ;
        jQuery('.sec').text(_sec1)
        jQuery('.min').text(_min1)
        jQuery('.hour').text(_hour1)
    });
    jQuery('.start').click(function(){
        const mytimer = setInterval(watch,1000);
        function watch(){
            var _sec1 = parseInt( jQuery('.sec').text());
            var _min1 = parseInt( jQuery('.min').text());
            var _hour1 = parseInt( jQuery('.hour').text());
            _sec1-=1;
            if(_sec1<0){
                _sec1=59;
                _min1-=1;
                if(_min1<0){
                    _min1=59;
                    _hour1-=1;
                    if(_hour1<0){
                        _sec1=0;
                        _min1=0;
                        _hour1=0;
                        clearInterval(mytimer)
                    }
                }
            }
            jQuery('.sec').text(_sec1)
            jQuery('.min').text(_min1)
            jQuery('.hour').text(_hour1)
        }
    });
});