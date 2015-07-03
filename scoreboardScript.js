//start jquery
$(document).ready(function () {
               
    //variable initializations
    var $G1H1ScoreB = 0;
    var $G1H1ScoreR = 0;
    var $G1H2ScoreB = 0;
    var $G1H2ScoreR = 0;
    var $G2H1ScoreB = 0;
    var $G2H1ScoreR = 0;
    var $G2H2ScoreB = 0;
    var $G2H2ScoreR = 0;
    var $G1TotalB = 0;
    var $G1TotalR = 0;
    var $G2TotalB = 0;
    var $G2TotalR = 0;
    var $finalB = 0;
    var $finalR = 0;  
   
    //G1 RED AND BLUE
    //If the table element is clicked
    $('#G1H1ScoreB').click(function() {
        //increase that game and half's score
        $G1H1ScoreB++;
        //increase blues total score for game 1
        $G1TotalB++;  
        //display that game and halfs score (etc for others below)
        $('#G1H1ScoreB').text($G1H1ScoreB);
    });

    $('#G1H2ScoreB').click(function() {
        $G1H2ScoreB++;
        $G1TotalB++;
        $('#G1H2ScoreB').text($G1H2ScoreB);
    });

    $('#G1H1ScoreR').click(function() {
        $G1H1ScoreR++;
        $G1TotalR++;
        $('#G1H1ScoreR').text($G1H1ScoreR);
    });

    $('#G1H2ScoreR').click(function() {
        $G1H2ScoreR++;
        $G1TotalR++;
        $('#G1H2ScoreR').text($G1H2ScoreR)
    });

//G2 RED AND BLUE          
    $('#G2H1ScoreB').click(function() {
        $G2H1ScoreB++;      
        $G2TotalB++;  
        $('#G2H1ScoreB').text($G2H1ScoreB)
    });

    $('#G2H2ScoreB').click(function() {
        $G2H2ScoreB++;
        $G2TotalB++;
        $('#G2H2ScoreB').text($G2H2ScoreB)
    });

    $('#G2H1ScoreR').click(function() {
        $G2H1ScoreR++;
        $G2TotalR++;
        $('#G2H1ScoreR').text($G2H1ScoreR)
    });

    $('#G2H2ScoreR').click(function() {
        $G2H2ScoreR++;
        $G2TotalR++;
        $('#G2H2ScoreR').text($G2H2ScoreR)
    });

    //MINUS
    //if minus table element is clicked
    $('#minusOneBG1H1').click(function() {
        //subtract one from blues total
        $G1TotalB--;       
        //subtract one from that game and halfs total
        $G1H1ScoreB--;
        //check if user has entered the negatives
        if( $G1H1ScoreB < 0 ) {
            $G1H1ScoreB++;
            $G1TotalB++;
        }
    //display that game and halfs total (etc for below)
        $('#G1H1ScoreB').text($G1H1ScoreB)
    });

    $('#minusOneBG1H2').click(function() {
        $G1TotalB--;
        $G1H2ScoreB--;
        if( $G1H2ScoreB < 0 ) {
            $G1H2ScoreB++;
            $G1TotalB++;
        }
        $('#G1H2ScoreB').text($G1H2ScoreB)
    });

    $('#minusOneBG2H1').click(function() {
        $G2TotalB--;       
        $G2H1ScoreB--;
        if( $G2H1ScoreB < 0 ) {
            $G2H1ScoreB++;
            $G2TotalB++;
        }
        $('#G2H1ScoreB').text($G2H1ScoreB)
    });

    $('#minusOneBG2H2').click(function() {
        $G2TotalB--;       
        $G2H2ScoreB--;
        if( $G2H2ScoreB < 0 ) {
            $G2H2ScoreB++;
            $G2TotalB++;
        }
        $('#G2H2ScoreB').text($G2H2ScoreB)
    });             


    $('#minusOneRG1H1').click(function() {
        $G1TotalR--;       
        $G1H1ScoreR--;
        if( $G1H1ScoreR < 0 ) {
            $G1H1ScoreR++;
            $G1TotalR++;
        }
        $('#G1H1ScoreR').text($G1H1ScoreR)
    });

    $('#minusOneRG1H2').click(function() {
        $G1TotalR--;       
        $G1H2ScoreR--;
        if( $G1H2ScoreR < 0 ) {
            $G1H2ScoreR++;
            $G1TotalR++;
        }
        $('#G1H2ScoreR').text($G1H2ScoreR)
    });

    $('#minusOneRG2H1').click(function() {
        $G2TotalR--;       
        $G2H1ScoreR--;
        if( $G2H1ScoreR < 0 ) {
            $G2H1ScoreR++;
            $G2TotalR++;
        }
        $('#G2H1ScoreR').text($G2H1ScoreR)
    });

    $('#minusOneRG2H2').click(function() {
        $G2TotalR--;       
        $G2H2ScoreR--;
        if( $G2H2ScoreR < 0 ) {
            $G2H2ScoreR++;
            $G2TotalR++;
        }
        $('#G2H2ScoreR').text($G2H2ScoreR)
    });


    //TOTALS

    //if anywhere on the document is clicked, update the totals (saves having to put it in each
    //table click function)
    $(document).click(function() {
        //update totals from variables
        $('#G1TotalB').text($G1TotalB);
        $('#G2TotalB').text($G2TotalB);
        $('#G1TotalR').text($G1TotalR);
        $('#G2TotalR').text($G2TotalR);
    
        //add red and blue total
        $('#finalB').text($G1TotalB + $G2TotalB);   
        $('#finalR').text($G1TotalR + $G2TotalR);  
    });

//EASTER EGG
    $('#title').mousedown(function() {
        $('#title').prepend("ᕕ( ᐛ )ᕗ ");
        $('#title').append(" ᕕ( ᐛ )ᕗ");           
    });

    $('#title').mouseup(function() {
        $('#title').text("Simple Tagpro Scoreboard");  
    });

    //RESET SCORES
    $('#finalTotal').mouseover(function() {
        $('#finalTotal').text('Reset All?');
    });

    $('#finalTotal').mouseout(function() {
        $('#finalTotal').text('Final Total');
    });


    $('#finalTotal').mouseup(function() {                   
                     var okReset = confirm('Are you sure you want to reset all scores?');
        if(okReset == true)
        {
            $G1H1ScoreB = 0;
            $G1H1ScoreR = 0;
            $G1H2ScoreB = 0;
            $G1H2ScoreR = 0;
            $G1TotalB = 0;
            $G1TotalR = 0;
            $G2H1ScoreB = 0;
            $G2H1ScoreR = 0;
            $G2H2ScoreB = 0;
            $G2H2ScoreR = 0;
            $G2TotalB = 0;
            $G2TotalR = 0;
            $finalB = 0;
            $finalR = 0;
            $('#G1H1ScoreB').text($G1H1ScoreB);
            $('#G1H1ScoreR').text($G1H1ScoreR);
            $('#G1H2ScoreB').text($G1H2ScoreB);
            $('#G1H2ScoreR').text($G1H2ScoreR);
            $('#G1TotalB').text($G1TotalB);
            $('#G1TotalR').text($G1TotalR);
            $('#G2H1ScoreB').text($G2H1ScoreB);
            $('#G2H1ScoreR').text($G2H1ScoreR);
            $('#G2H2ScoreB').text($G2H2ScoreB);
            $('#G2H2ScoreR').text($G2H2ScoreR);
            $('#G2TotalB').text($G2TotalB);
            $('#G2TotalR').text($G2TotalR);
            $('#finalB').text($finalB);
            $('#finalR').text($finalR);
        }
    });
});

// allows user to change team name; $which indicates which team name is being changed
window.nameChange = function( $which ) {
    var name;
    do {
        name = prompt("Please enter team name");
    }
    // to ensure the user enters a team name with a length
    while( name.length <= 0 );
    if( $which == 0 )
        $('#teamName1').text(name);
    if( $which == 1 )
        $('#teamName2').text(name);
}