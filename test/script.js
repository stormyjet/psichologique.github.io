$(document).ready(function() {

    $("#colorChanger").hide();

    $("#colorChanger").mouseenter(function() {
        $(this).css("opacity", "1.0")
    });

    $("#Options").click(function() {
        $("#colorChanger").slideToggle(100)
        $(this).slideUp(100);
    });

    $("p#hide").click(function() {
        $("#colorChanger").slideToggle(100);
        $("#Options").slideDown(100);
    });

    $("#colorChanger").mouseleave(function() {
        $(this).css("opacity", "0.3")
    });

    //Blue Theme	
    $("#blue").click(function() {
        $(this).css("border", "1px solid white");
        $("#green").css("border", "0");
        $("#red").css("border", "0");
        $("#wrapper").css("background-color", "#7ca1fa");
        $("#Options").css("background-color", "#7ca1fa");
        $("body").css("background-color", "#3597FA");
        $("#colorChanger").css("background-color", "#0D2640");
        $("#footer").css("background-color", "#0D2640");
        $("#Options").mouseenter(function() {
            $(this).css("background-color", "#6889d8")
        });
        $("#Options").mouseleave(function() {
            $(this).css("background-color", "#7ca1fa")
        });
    });

    //$("#Options").mouseover("background-color","#6889d8");

    //Default Theme
    $("#green").click(function() {
        $(this).css("border", "1px solid white");
        $("#blue").css("border", "0");
        $("#red").css("border", "0");
        $("#wrapper").css("background-color", "#78ad00");
        $("body").css("background-color", "#a2ea00");
        $("#colorChanger").css("background-color", "#0f4a1d");
        $("#footer").css("background-color", "#0f4a1d");
        $("#Options").css("background-color", "#78ad00");
        $("#Options").mouseenter(function() {
            $(this).css("background-color", "#5f8900");
        });
        $("#Options").mouseleave(function() {
            $(this).css("background-color", "#78ad00")
        });
    });

    $("#Options").mouseleave(function() {
        $(this).css("background-color", "#78ad00");
    });

    $("#Options").mouseenter(function() {
        $(this).css("background-color", "#5f8900");
    });

    //Red Theme
    $("#red").click(function() {
        $(this).css("border", "1px solid white");
        $("#blue").css("border", "0");
        $("#green").css("border", "0");
        $("#wrapper").css("background-color", "#BF3F40");
        $("body").css("background-color", "#dd5252");
        $("#colorChanger").css("background-color", "#401515");
        $("#footer").css("background-color", "#401515");
        $("#Options").css("background-color", "#BF3F40")
        $("#Options").mouseenter(function() {
            $(this).css("background-color", "#963738")
        });
        $("#Options").mouseleave(function() {
            $(this).css("background-color", "#BF3F40")
        });
    });
	
    //Random Theme - Probably at some point
    //$("#red").click(function() {
    //$(this).css("border","1px solid white");
    //$("#blue").css("border","0");
    //$("#green").css("border","0");
    //$("#wrapper").css("background-color","#BF3F40");
    //$("body").css("background-color","#FF5455");
    //$("#colorChanger").css("background-color","#401515");
    //$("#footer").css("background-color","#401515");
    //});
});