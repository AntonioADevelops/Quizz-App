$(document).ready(function() {
    const Questions = ["Question 1", "Question2", "Question3", "Question4", "Question5",];
    const Left = ["Answer1", "Wrong1",  "Wrong2", "Wrong3", "Wrong4",]
    const Middle = ["Wrong5", "Answer2", "Wrong6", "Answer4", "Wrong7",]
    const Right = ["Wrong8", "Wrong9", "Answer3", "Wrong10", "Answer5",]
    const Correct = ["Left", "Middle", "Right", "Middle", "Right",]
    let QuestionNumber = 0
    $("#question").text(Questions[QuestionNumber])
    $("#btn1").text(Left[QuestionNumber])
    $("#btn2").text(Middle[QuestionNumber])
    $("#btn3").text(Right[QuestionNumber])
    $("#btn1").click(function(){
        $(".text").css("visibility", "hidden");
        if(Correct[QuestionNumber]=="Left"){
            $(".good").css("visibility", "visible");
        }
        else{
            $(".bad").css("visibility", "visible");
        }
    });
    $("#btn2").click(function(){
        $(".text").css("visibility", "hidden");
        if(Correct[QuestionNumber]=="Middle"){
            $(".good").css("visibility", "visible");
        }
        else{
            $(".bad").css("visibility", "visible");
        }
    });
    $("#btn3").click(function(){
        $(".text").css("visibility", "hidden");
        if(Correct[QuestionNumber]=="Right"){
            $(".good").css("visibility", "visible");
        }
        else{
            $(".bad").css("visibility", "visible");
        }   
    });
    $("#tryagain").click(function(){
        $(".bad").css("visibility", "hidden");
        $(".text").css("visibility", "visible");
    });
    $("#next").click(function(){
        QuestionNumber=QuestionNumber+1;
        $("#question").text(Questions[QuestionNumber])
        $("#btn1").text(Left[QuestionNumber])
        $("#btn2").text(Middle[QuestionNumber])
        $("#btn3").text(Right[QuestionNumber])
        $(".good").css("visibility", "hidden");
        $(".text").css("visibility", "visible");
    });
    $("#btn3").click(function(){
        if(QuestionNumber>=4){
            $(".text").css("visibility", "hidden");
            $(".good").css("visibility", "hidden");
            $(".bad").css("visibility", "hidden");
            $(".playagain").css("visibility", "visible");
        }
    });
    $("#restart").click(function(){
        QuestionNumber = 0
        $("#question").text(Questions[QuestionNumber])
        $("#btn1").text(Left[QuestionNumber])
        $("#btn2").text(Middle[QuestionNumber])
        $("#btn3").text(Right[QuestionNumber])
        $(".playagain").css("visibility", "hidden");
        $(".text").css("visibility", "visible");
    });
});