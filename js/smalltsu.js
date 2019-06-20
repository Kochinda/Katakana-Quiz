$(function(){

    let dis = 250;

    // click menu-btn
    $('html body .menu-btn').click(function(){
    
        // Move body's children to the left 250px
        $('body').children().animate({'margin-left': '+=' + dis + 'px'}, 200);

        dis *= -1;
    })

    $('#arrow').click(function(){
        $('body,html').animate({scrollTop: 0 }, 1000);

    });


    // click play-btn to play audio
    $('#play1').on('click', function(){
        $('#sound-file1').get(0).play();
        
    });

    $('#play2').on('click', function(){
        $('#sound-file2').get(0).play();
        
    });

    $('#play3').on('click', function(){
        $('#sound-file3').get(0).play();
        
    });

    $('#play4').on('click', function(){
        $('#sound-file4').get(0).play();
        
    });

    $('#play5').on('click', function(){
        $('#sound-file5').get(0).play();
        
    });

    $('#play6').on('click', function(){
        $('#sound-file6').get(0).play();
        
    });

    $('#play7').on('click', function(){
        $('#sound-file7').get(0).play();
        
    });

    $('#play8').on('click', function(){
        $('#sound-file8').get(0).play();
        
    });

    
 

 


let checkBtn = document.getElementById('check1');
checkBtn.addEventListener('click', function () {

    let answer1 = document.getElementById('answer1');

    answer1.textContent = 'こたえは、 ３ です。'; 

  // 画面の表示 

    let marubatu = document.getElementById('marubatu');

    let q1 = document.getElementsByClassName("q1");

    marubatu.textContent = checkAnswer(q1);

});



let checkBtn2 = document.getElementById('check2');

checkBtn2.addEventListener('click', function () {

    let answer2 = document.getElementById('answer2');

    answer2.textContent = 'こたえは、２ です。';

    // 答えの判定の 画面の表示 

    let marubatu2 = document.getElementById('marubatu2');

    let q2 = document.getElementsByClassName("q2");

    marubatu2.textContent = checkAnswer(q2);

});



let checkBtn3 = document.getElementById('check3');

checkBtn3.addEventListener('click', function () {

    let answer3 = document.getElementById('answer3');

    answer3.textContent = 'こたえは、１ です。';

    // 答えの判定の 画面の表示 

    let marubatu3 = document.getElementById('marubatu3');

    let q3 = document.getElementsByClassName("q3");

    marubatu3.textContent = checkAnswer(q3);

});



let checkBtn4 = document.getElementById('check4');

checkBtn4.addEventListener('click', function () {

    let answer4 = document.getElementById('answer4');

    answer4.textContent = 'こたえは、４です';

    // 答えの判定の 画面の表示 

    let marubatu4 = document.getElementById('marubatu4');

    let q4 = document.getElementsByClassName("q4");

    marubatu4.textContent = checkAnswer(q4);

});


// Q5
$('#check5').click(function(){
    
    // get input tag info
    let inputText = $('#5-1');
    // get input val(typed answer)
    let text = inputText.val();

    // if inputText is empty show alert
    if(text == ''){
        alert('こたえを入力してください。Type your answer in the box.');
        return;
    }
    // get marubatu p tag and show〇✖
    $('#marubatu5').text(function(){
        if( text == 'ケチャップ' ){
            return '◎';
        }else if(text == 'ｹﾁｬｯﾌﾟ'){
            return '◎';    
        }else{
            return'✖';
        }        
    });
    // get answer5 p tag and show answer
    $('#answer5').text('こたえ：ケチャップ');

});

// Q6
$('#check6').click(function(){
    
    let inputText = $('#6-1');
    let text = inputText.val();


    if(text == ''){
        alert('こたえを入力してください。Type your answer in the box.');
        return;
    }

    $('#marubatu6').text(function(){
        if( text == 'ピーナッツ' ){
            return '◎';
        }else if(text == 'ﾋﾟｰﾅｯﾂ'){
            return '◎';    
        }else{
            return'✖';
        }        
    });

    $('#answer6').text('こたえ：ピーナッツ');

});

// Q7
$('#check7').click(function(){
    
    let inputText = $('#7-1');
    let text = inputText.val();

    if(text == ''){
        alert('こたえを入力してください。Type your answer in the box.');
        return;
    }

    $('#marubatu7').text(function(){
        if( text == 'コインロッカー' ){
            return '◎';
        }else if(text == 'ｺｲﾝﾛｯｶｰ'){
            return '◎';    
        }else{
            return'✖';
        }        
    });
    $('#answer7').text('こたえ：コインロッカー');

});

// Q8
$('#check8').click(function(){
    
    let inputText = $('#8-1');
    let text = inputText.val();


    if(text == ''){
        alert('こたえを入力してください。Type your answer in the box.');
        return;
    }

    $('#marubatu8').text(function(){
        if( text == 'ペットボトル' ){
            return '◎';
        }else if(text == 'ﾍﾟｯﾄﾎﾞﾄﾙ'){
            return '◎';    
        }else{
            return'✖';
        }        
    });
    
    $('#answer8').text('こたえ：ペットボトル');

});




let clearBtn = document.getElementById('clear');

    clearBtn.addEventListener('click', function (){
        // remove P TAGを取得する
        let removeP = document.getElementsByClassName("remove"); 

        // 取得できてるか確認する

        console.log(removeP);

        // 取得したremoveP(配列的なデータ）を繰り返し処理する

        for ( let i = 0; i < removeP.length; i++) {
   

            // 配列のデータがすべて取得できているか確認する
            console.log(removeP[i]);

            // タグのコンテンツを空白にする処理
            removeP[i].textContent = '';

        }

    });



function checkAnswer(choices) {

    let result;
    for (let i = 0; i < choices.length; i++) {

        if (choices[i].checked) {

            result = choices[i].value;

            break;

        }

    }

    if (result == 1) {
        return "〇";
    } else {
        return "✖";
    }

}

});