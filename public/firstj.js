$(document).ready(function() {
    $("#btn").click(function() {
        var x = $("#s1").val()
        alert(x)
        var y = $("#s2").val()
        alert(y)
        var z = $("#s3").val()
        alert(z)


    })
    $.ajax({
        method: 'POST',
        url: '/',
        data: {
            x: x,
            y: y,
            z: z
        }

    })

})