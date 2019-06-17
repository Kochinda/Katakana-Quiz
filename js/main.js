$(function(){

    // let dis = 250;

    // // click menu-btn
    // $('.menu-btn').click(function(){
    
    //     // Move body's children to the left 250px
    //     $('body').children().animate({'margin-left': '+=' + dis + 'px'}, 200);

    //     dis *= -1;
    // })

    $('#arrow').click(function(){
        $('body,html').animate({scrollTop: 0 }, 1000);

    });

    
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



let checkBtn5 = document.getElementById('check5');

checkBtn5.addEventListener('click', function () {



    let answer5 = document.getElementById('answer5');



    answer5.textContent = 'こたえは、3 です。';





    // 答えの判定の 画面の表示 

    let marubatu5 = document.getElementById('marubatu5');

    let q5 = document.getElementsByClassName("q5");

    marubatu5.textContent = checkAnswer(q5);



});



let checkBtn6 = document.getElementById('check6');

checkBtn6.addEventListener('click', function () {



    let answer6 = document.getElementById('answer6');



    answer6.textContent = 'こたえは、４です。リモコン';





    // 答えの判定の 画面の表示 

    let marubatu6 = document.getElementById('marubatu6');

    let q6 = document.getElementsByClassName("q6");

    marubatu6.textContent = checkAnswer(q6);



});



let checkBtn7 = document.getElementById('check7');

checkBtn7.addEventListener('click', function () {



    let answer7 = document.getElementById('answer7');



    answer7.textContent = 'こたえは、１ です。ホウレンソウ';





    // 答えの判定の 画面の表示 

    let marubatu7 = document.getElementById('marubatu7');

    let q7 = document.getElementsByClassName("q7");

    marubatu7.textContent = checkAnswer(q7);



});



let checkBtn8 = document.getElementById('check8');

checkBtn8.addEventListener('click', function () {



    let answer8 = document.getElementById('answer8');



    answer8.textContent = 'こたえは、３ です。ドレッシング';





    // 答えの判定の 画面の表示 

    let marubatu8 = document.getElementById('marubatu8');

    let q8 = document.getElementsByClassName("q8");

    marubatu8.textContent = checkAnswer(q8);



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



        // removeP.remove();ではできない。







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