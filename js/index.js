$(function(){
    var $button = $('button[type=submit]');
    $button.on('click', function(e) {
        e.preventDefault();
        
        $button.prop("disabled", true);
        
        var hostUrl = 'https://microsoft-apiappfed672d83d7844978439b52fb1463787.azurewebsites.net/api/Mails/Add';
        var param1 = $("#emailAddress").val();
        
        $.ajax({
            url: hostUrl,
            type: 'POST',
            data: {
                email_address: param1
            },
            timeout: 30000,
            success: function(data) {
                $('.alert-success').show();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $('.alert-danger').show();
                $button.prop("disabled", false);
            }
        });
    });
});