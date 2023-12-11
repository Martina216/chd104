/*輪播*/
$(function () {
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#sliderBoard li').length;


    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append('<li></li>');
    }
    $('#contentButton li:first').addClass('click')//
    
    $('#content li').width(divWidth); // li的寬度
    $('#content').width(divWidth * imgCount); // ul的寬度


    let index = 0;//宣告在外面，大家都可以用
    let timer = setInterval(moveToNext,5000)

    $('#contentButton li').click(function(){//當按按鍵，整個ul需往左邊推
        
        clearInterval(timer)

        index = $(this).index();
        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('click')
        $('#contentButton li').not(this).removeClass('click')

        timer = setInterval(moveToNext,5000)//停止後再開始

    })
        function moveToNext(){
            if(index< imgCount - 1){//加到7要回第一張
                index++
            }else{
                index = 0
            }
            $('#content').animate({
                left: divWidth * index * -1,
            })

            $(`#contentButton li:eq(${index})`).addClass('click')
            $(`#contentButton li`).not(`:eq(${index})`).removeClass('click')//這邊都失敗欸
        }
    

    // alert(imgCount) /*拿來找圖片有幾張*/
});