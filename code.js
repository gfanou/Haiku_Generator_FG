$(document).ready(function () {

    $("#addWord").click(
        function (){
            wordEnter();
        }
    );

    $("#generate").on("click", generateHaiku)

    let syllable1 = ["joy", "corn","use","life","keep","back" ];
    let syllable2 = ["summer", "butter", "filters", "beeping","pillow", "snow" ];
    let syllable3 = ["admission", "cinema", "discover", "addition", "festival", "history" ];
    let syllable4 = ["accumulate", "accuracy", "manually", "acceptable", "declaration","allocation" ];
    let syllable5 = ["california",  "alliteration", "imagination", "electricity", "appreciation","personality"];
    let syllable6 = ["capitalization", "biodiversity","accountability", "identification","encyclopedia" ];
    let syllable7 = ["Industrialization", "maneuverability", "telecommunication", "familiarization","imponderability"];

    let line1 = random(syllable1) +' '+ random(syllable4) || random(syllable2)+ ' '+random(syllable3) ||
                random(syllable1) + ' '+ random(syllable1) + ' '+ random(syllable3) ||
                random(syllable2) + ' '+ random(syllable2) + ' '+ random(syllable1);
    let line2 = random(syllable2)+' '+ random(syllable5) || random(syllable3) +' '+ random(syllable4) ||
                random(syllable7);

    let line3 = random(syllable1) +' '+ random(syllable4) || random(syllable2)+ ' '+random(syllable3) ||
                random(syllable2) + ' '+ random(syllable2) + ' '+ random(syllable1);



    function random(array) {

        let randomLine= Math.floor(Math.random() * array.length);
        return array[randomLine];
    }

        function  wordEnter() {

        let wordEnter = $("#word").val();
        let ch = '-';
        let count = 0;
        let dashCount;
        let output1 ;
        let newWord;

            for(let i = 0; i<wordEnter.length; i++){
                if(wordEnter.charAt(i) === ch){
                    count ++;
                }
            }
        dashCount = `${count}`;
            for (let i = 0; i <= dashCount; i++) {
                newWord = wordEnter.replaceAll("-", "");
            }

        let wordValue= `${newWord}`

             if (dashCount <1) {

                syllable1.push(newWord);

                output1 = (`You entered the word: `+ wordValue + ` which have 1 syllable.`);


            } else if (dashCount >= 1 && dashCount<2) {

                syllable2.push(newWord);
                output1 = (`You entered the word:  `+ wordValue + ` which have 2 syllables.`);

            } else if (dashCount >=2 && dashCount<3) {
                syllable3.push(newWord);
                output1 = (`You entered the word:  `+ wordValue + ` which have 3 syllables.`);


            } else if (dashCount >= 3 && dashCount <4) {
                syllable4.push(newWord);
                output1 = (`You entered the word:  `+ wordValue + ` which have 4 syllables.`);


            }else if (dashCount >= 4 && dashCount < 5) {
                syllable5.push(newWord);
                output1 = (`You entered the word:  `+ wordValue + ` which have 5 syllables.`);


            } else if (dashCount >= 5 && dashCount < 6) {
                syllable6.push(newWord);

                output1 = (`You entered the word:  `+ wordValue + ` which have 6 syllables.`);


            }else if (dashCount >= 6 && dashCount < 7) {
                syllable7.push(newWord);
                output1 = (`You entered the word:  `+ wordValue + ` which have 7 syllables.`);

            } else if (dashCount > 6 ) {
                 output1 = `Sorry, the word should have most seven syllables.`

             }

            $(" #level1").html(output1);

    }

    function  generateHaiku(event)
    { event.preventDefault();

        let haiku = `${line1} <br> ${line2} <br> ${line3}`;

        $(" #level2").html(haiku);
    }


});