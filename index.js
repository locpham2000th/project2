$(document).ready(function(){

    let numberpeople = 2;

    $(".addfamily").click(function(){
        $(".forms").show();
        $(".formaddfamily").show(500);
        $("#backgroundback").show();
    })

    $("#backgroundback").click(function(){
        $("#backgroundback").hide();
        $(".formaddfamily").hide();
    })

    $(".buttonadd").click(function(){
        numberpeople += 1;
        let cln = $($(".infopeople")[0]).clone();
        cln.children("span").children(".numberpeople").text(numberpeople);
        cln.children("table").children("tbody").children("tr").children(".gender").children("input").attr("name","gender" + numberpeople);
        console.log(cln.children("table").children("tbody").children("tr").children(".gender").children("input").html());
        cln.appendTo(".contentofform");
    })

})