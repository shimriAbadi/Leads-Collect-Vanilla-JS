/*--------------------------------------------------------------ONLY NEXT--------------------------------------------------------------*/


function FirstQuest(Answer) {
    if (Answer == true) {
        document.getElementById('FourthQ').style.display = 'block';
        document.getElementById('progressBarFill').style.width = '16.6666667%';

        //Selection Color
        document.getElementById('FirstYes').style.backgroundColor = 'white';

        //Pointers to cursors
        document.getElementById('FirstYes').style.cursor = 'default';
        document.getElementById('FirstNo').style.cursor = 'default';
        document.getElementById('FirstNext').style.cursor = 'default';
        document.getElementById('FirstPrevious').style.cursor = 'default';

        //Disable buttons
        document.getElementById("FirstYes").setAttribute('disabled', 'true')
        document.getElementById("FirstNo").setAttribute('disabled', 'true')
        document.getElementById("FirstNext").setAttribute('disabled', 'true')

        //opacity
        document.getElementById('FristQ').style.opacity = 0.5;

        //User Selection
        document.getElementById('Q1GoogleSheets').value=Answer;

        window.scrollBy(0, 1080);

    }
    if (Answer == false) {
        window.location.href = "Error.html"
    }
}

function FourthQuest() {
    let UserSelection = document.getElementById('AreaSelection').value;
    if (UserSelection == 'NoSelection') {
        document.getElementById('AreaSelection').style.borderStyle = 'solid'
        document.getElementById('AreaSelection').style.borderColor = 'red'
    } else {
        document.getElementById('FifthQ').style.display = 'block';
        window.scrollBy(0, 1080);
        document.getElementById('progressBarFill').style.width = '33.3333334%';

        //Selection Color
        document.getElementById('AreaSelection').style.borderColor = 'green'


        //Pointers to cursors
        document.getElementById('FourthNext').style.cursor = 'default';
        document.getElementById('FourthPrevious').style.cursor = 'default';

        //Disable buttons
        document.getElementById("FourthNext").setAttribute('disabled', 'true')
        document.getElementById("FourthPrevious").setAttribute('disabled', 'true')
        document.getElementById("AreaSelection").setAttribute('disabled', 'true')

        //opacity
        document.getElementById('FourthQ').style.opacity = 0.5;

        //UserSlection
        document.getElementById('PostalCodeGoogleSheets').value=UserSelection;
    }
}

function FifthQuest(Answer) {

    if (Answer == 'Prive') {
        document.getElementById('SeventhQ').style.display = 'block';
        document.getElementById('progressBarFill').style.width = '50.0000001%';

        //Selection Color
        document.getElementById('PriveBtn').style.backgroundColor = 'white';

        //Pointers to cursors
        document.getElementById('PriveBtn').style.cursor = 'default';
        document.getElementById('PublicBtn').style.cursor = 'default';
        document.getElementById('AgricoleBtn').style.cursor = 'default';
        document.getElementById('FifthPrevious').style.cursor = 'default';
        document.getElementById('FifthNext').style.cursor = 'default';

        //Disable buttons
        document.getElementById("PriveBtn").setAttribute('disabled', 'true')
        document.getElementById("PublicBtn").setAttribute('disabled', 'true')
        document.getElementById("AgricoleBtn").setAttribute('disabled', 'true')
        document.getElementById("FifthPrevious").setAttribute('disabled', 'true')
        document.getElementById("FifthNext").setAttribute('disabled', 'true')

        //opacity
        document.getElementById('FifthQ').style.opacity = 0.5;
        window.scrollBy(0, 1080);

    } else if (Answer == 'Public') {
        document.getElementById('SixthQ').style.display = 'block';
        document.getElementById('progressBarFill').style.width = '41.6666668%';

        //Selection Color
        document.getElementById('PublicBtn').style.backgroundColor = 'white';

        //Pointers to cursors
        document.getElementById('PriveBtn').style.cursor = 'default';
        document.getElementById('PublicBtn').style.cursor = 'default';
        document.getElementById('AgricoleBtn').style.cursor = 'default';
        document.getElementById('FifthPrevious').style.cursor = 'default';
        document.getElementById('FifthNext').style.cursor = 'default';

        //Disable buttons
        document.getElementById("PriveBtn").setAttribute('disabled', 'true')
        document.getElementById("PublicBtn").setAttribute('disabled', 'true')
        document.getElementById("AgricoleBtn").setAttribute('disabled', 'true')
        document.getElementById("FifthPrevious").setAttribute('disabled', 'true')
        document.getElementById("FifthNext").setAttribute('disabled', 'true')

        //opacity
        document.getElementById('FifthQ').style.opacity = 0.5;
        window.scrollBy(0, 1080);

    } else if (Answer == 'Agricole') {
        window.location.href = "Error.html"
    }
    //User Selection
    document.getElementById('Q3GoogleSheets').value=Answer;
}

function SixthQuest(Answer) {
    if (Answer == true) {
        document.getElementById('SeventhQ').style.display = 'block';
        document.getElementById('progressBarFill').style.width = '41.6666668%';
        window.scrollBy(0, 1080);


        //Selection Color
        document.getElementById('SixthYes').style.backgroundColor = 'white';

        //Pointers to cursors
        document.getElementById('SixthYes').style.cursor = 'default';
        document.getElementById('SixthNo').style.cursor = 'default';
        document.getElementById('SixthNext').style.cursor = 'default';
        document.getElementById('SixthPrevious').style.cursor = 'default';

        //Disable buttons
        document.getElementById("SixthYes").setAttribute('disabled', 'true')
        document.getElementById("SixthNo").setAttribute('disabled', 'true')
        document.getElementById("SixthNext").setAttribute('disabled', 'true')
        document.getElementById("SixthPrevious").setAttribute('disabled', 'true')

        //opacity
        document.getElementById('SixthQ').style.opacity = 0.5;

        //User Selection
        document.getElementById('Q4GoogleSheets').value=Answer;

    }
    if (Answer == false) {
        window.location.href = "Error.html"
    }
}

function SeventhQuest() {
    if (document.getElementById('priceHolder').value == "") {
        document.getElementById('priceHolder').style.borderColor = 'red'
    } else {
        document.getElementById('priceHolder').style.borderColor = null;
        document.getElementById('EighthQ').style.display = 'block';
        document.getElementById('progressBarFill').style.width = '66.6666668%';
        let priceVar=document.getElementById('priceHolder').value;

        //Selection Color
        document.getElementById('priceHolder').style.backgroundColor = 'white';

        //Pointers to cursors
        document.getElementById('priceHolder').style.cursor = 'default';
        document.getElementById('SeventhNext').style.cursor = 'default';
        document.getElementById('SeventhPrevious').style.cursor = 'default';

        //Disable buttons
        document.getElementById("priceHolder").setAttribute('disabled', 'true')
        document.getElementById("SeventhNext").setAttribute('disabled', 'true')
        document.getElementById("SeventhPrevious").setAttribute('disabled', 'true')

        //opacity
        document.getElementById('SeventhQ').style.opacity = 0.5;

        //User Selection
        document.getElementById('Q5GoogleSheets').value=priceVar;
    }
    window.scrollBy(0, 1080);
}

function EighthQuest() {
    if (document.getElementById('humanHolder').value == "" || document.getElementById('humanHolder').value < "1") {
        document.getElementById('humanHolder').style.borderColor = 'red';
    } else {
        document.getElementById('humanHolder').style.borderColor = null;
        document.getElementById('NinthQ').style.display = 'block';
        let humanVar=document.getElementById('humanHolder').value;
        window.scrollBy(0, 1080);


        //Selection Color
        document.getElementById('humanHolder').style.backgroundColor = 'white';

        //Pointers to cursors
        document.getElementById('humanHolder').style.cursor = 'default';
        document.getElementById('EighthNext').style.cursor = 'default';
        document.getElementById('EighthPrevious').style.cursor = 'default';

        //Disable buttons
        document.getElementById("humanHolder").setAttribute('disabled', 'true')
        document.getElementById("EighthNext").setAttribute('disabled', 'true')
        document.getElementById("EighthPrevious").setAttribute('disabled', 'true')

        //opacity
        document.getElementById('EighthQ').style.opacity = 0.5;
        
        //User Selection
        document.getElementById('Q6GoogleSheets').value=humanVar;

    }
    document.getElementById('progressBarFill').style.width = '83.3333335%';
}

function NinthQuest(Answer) {
    if(Answer != null){
        document.getElementById('FormId').style.display = 'block';
        document.getElementById('progressBarFill').style.width = '100%';

        if (Answer == 'Pompe a chaleur') {

            //Selection Color
            document.getElementById('Pomp').style.backgroundColor = 'white';

        } else if (Answer == 'Isolation extérieurs') {

            //Selection Color
            document.getElementById('ISO').style.backgroundColor = 'white';

        }

        //Pointers to cursors
        document.getElementById('Pomp').style.cursor = 'default';
        document.getElementById('ISO').style.cursor = 'default';
        document.getElementById('NinthPrevious').style.cursor = 'default';
        document.getElementById('NinthNext').style.cursor = 'default';

        //Disable buttons
        document.getElementById("Pomp").setAttribute('disabled', 'true')
        document.getElementById("ISO").setAttribute('disabled', 'true')
        document.getElementById("NinthPrevious").setAttribute('disabled', 'true')
        document.getElementById("NinthNext").setAttribute('disabled', 'true')

        //opacity
        document.getElementById('NinthQ').style.opacity = 0.5;

        //User Selection
        document.getElementById('Q7GoogleSheets').value=Answer;

        window.scrollBy(0, 1080);
        
    }else{
       
    }
}




/*--------------------------------------------------------------ONLY Previous--------------------------------------------------------------*/

function ThirdPeviousBtn() {
    //----------------Second Quest Changes----------------
    //Selection Color
    document.getElementById('FirstYes').style.backgroundColor = null;
    document.getElementById('progressBarFill').style.width = '0%';

    //Pointers to cursors
    document.getElementById('FirstYes').style.cursor = 'pointer';
    document.getElementById('FirstNo').style.cursor = 'pointer';
    document.getElementById('FirstNext').style.cursor = 'pointer';
    document.getElementById('FirstPrevious').style.cursor = 'pointer';

    //Undisable buttons
    document.getElementById("FirstYes").disabled = false;
    document.getElementById("FirstNo").disabled = false;
    document.getElementById("FirstNext").disabled = false;

    //opacity
    document.getElementById('FristQ').style.opacity = null;

    //----------------Third Quest Changes----------------
    document.getElementById('FourthQ').style.display = 'none'
}

function FourthPeviousBtn() {
    //----------------Fourth Quest Changes----------------
    //Selection Color
    document.getElementById('progressBarFill').style.width = '16.6666667%';

    //Pointers to cursors
    document.getElementById('FourthNext').style.cursor = 'pointer';
    document.getElementById('FourthPrevious').style.cursor = 'pointer';

    //Undisable buttons
    document.getElementById("AreaSelection").disabled = false;
    document.getElementById("FourthPrevious").disabled = false;
    document.getElementById("FourthNext").disabled = false;

    //Default selection
    document.getElementById('AreaSelection').value = 'NoSelection';
    document.getElementById('AreaSelection').style.borderColor = null;

    //opacity
    document.getElementById('FourthQ').style.opacity = null;

    //----------------Fifth Quest Changes----------------
    document.getElementById('FifthQ').style.display = 'none'
}

function FifthPeviousBtn() {
    //Selection Color
    document.getElementById('PriveBtn').style.backgroundColor = null;
    document.getElementById('PublicBtn').style.backgroundColor = null;
    document.getElementById('AgricoleBtn').style.backgroundColor = null;
    document.getElementById('progressBarFill').style.width = '33.3333334%';

    //Pointers to cursors
    document.getElementById('PriveBtn').style.cursor = 'pointer';
    document.getElementById('PublicBtn').style.cursor = 'pointer';
    document.getElementById('AgricoleBtn').style.cursor = 'pointer';
    document.getElementById('FifthPrevious').style.cursor = 'pointer';
    document.getElementById('FifthNext').style.cursor = 'pointer';

    //Undisable buttons
    document.getElementById("PriveBtn").disabled = false;
    document.getElementById("PublicBtn").disabled = false;
    document.getElementById("AgricoleBtn").disabled = false;
    document.getElementById("FifthPrevious").disabled = false;
    document.getElementById("FifthNext").disabled = false;

    //opacity
    document.getElementById('FifthQ').style.opacity = null;

    //----------------Second Quest Changes----------------
    document.getElementById('SixthQ').style.display = 'none'
}

function SixthPeviousBtn(Answer) {
    if (Answer == true) {
        //----------------First Quest Changes----------------
        //Selection Color
        document.getElementById('SixthYes').style.backgroundColor = null;
        document.getElementById('progressBarFill').style.width = '42%';

        //Pointers to cursors
        document.getElementById('SixthYes').style.cursor = 'pointer';
        document.getElementById('SixthNo').style.cursor = 'pointer';
        document.getElementById('SixthNext').style.cursor = 'pointer';
        document.getElementById('SixthPrevious').style.cursor = 'pointer';

        //Undisable buttons
        document.getElementById("SixthYes").disabled = false;
        document.getElementById("SixthNo").disabled = false;
        document.getElementById("SixthNext").disabled = false;
        document.getElementById("SixthPrevious").disabled = false;

        //opacity
        document.getElementById('SixthQ').style.opacity = null;

        //----------------Second Quest Changes----------------
        document.getElementById('SeventhQ').style.display = 'none'
    } else if (Answer == false) {
        //Selection Color
        document.getElementById('PriveBtn').style.backgroundColor = null;
        document.getElementById('PublicBtn').style.backgroundColor = null;
        document.getElementById('AgricoleBtn').style.backgroundColor = null;
        document.getElementById('progressBarFill').style.width = '42%';

        //Pointers to cursors
        document.getElementById('PriveBtn').style.cursor = 'pointer';
        document.getElementById('PublicBtn').style.cursor = 'pointer';
        document.getElementById('AgricoleBtn').style.cursor = 'pointer';
        document.getElementById('FifthPrevious').style.cursor = 'pointer';
        document.getElementById('FifthNext').style.cursor = 'pointer';

        //Undisable buttons
        document.getElementById("PriveBtn").disabled = false;
        document.getElementById("PublicBtn").disabled = false;
        document.getElementById("AgricoleBtn").disabled = false;
        document.getElementById("FifthPrevious").disabled = false;
        document.getElementById("FifthNext").disabled = false;

        //opacity
        document.getElementById('FifthQ').style.opacity = null;

        //----------------Second Quest Changes----------------
        document.getElementById('SeventhQ').style.display = 'none'
    }
}

function SeventhPeviousBtn() {
    //----------------Second Quest Changes----------------
    //Selection Color
    document.getElementById('priceHolder').style.backgroundColor = null;
    document.getElementById('progressBarFill').style.width = '50%';

    //Pointers to cursors
    document.getElementById('SeventhPrevious').style.cursor = 'pointer';
    document.getElementById('SeventhNext').style.cursor = 'pointer';

    //Undisable buttons
    document.getElementById("SeventhPrevious").disabled = false;
    document.getElementById("SeventhNext").disabled = false;
    document.getElementById("priceHolder").disabled = false;

    //opacity
    document.getElementById('SeventhQ').style.opacity = null;

    //value
    document.getElementById("priceHolder").value = null;

    //----------------Second Quest Changes----------------
    document.getElementById('EighthQ').style.display = 'none'
}

function EightPeviousBtn() {
    //----------------Second Quest Changes----------------
    //Selection Color
    document.getElementById('humanHolder').style.backgroundColor = null;
    document.getElementById('progressBarFill').style.width = '66%';

    //Pointers to cursors
    document.getElementById('EighthPrevious').style.cursor = 'pointer';
    document.getElementById('EighthNext').style.cursor = 'pointer';

    //Undisable buttons
    document.getElementById("EighthPrevious").disabled = false;
    document.getElementById("EighthNext").disabled = false;
    document.getElementById("humanHolder").disabled = false;

    //opacity
    document.getElementById('EighthQ').style.opacity = null;

    //value
    document.getElementById("humanHolder").value = null;

    //----------------Second Quest Changes----------------
    document.getElementById('NinthQ').style.display = 'none'
}

function NinthPeviousBtn() {
    //----------------Second Quest Changes----------------
    //Selection Color
    document.getElementById('Pomp').style.backgroundColor = null;
    document.getElementById('ISO').style.backgroundColor = null;
    document.getElementById('progressBarFill').style.width = '82%';

    //Pointers to cursors
    document.getElementById('Pomp').style.cursor = 'pointer';
    document.getElementById('ISO').style.cursor = 'pointer';
    document.getElementById('NinthNext').style.cursor = 'pointer';
    document.getElementById('NinthPrevious').style.cursor = 'pointer';

    //Undisable buttons
    document.getElementById("Pomp").disabled = false;
    document.getElementById("ISO").disabled = false;
    document.getElementById("NinthNext").disabled = false;
    document.getElementById("NinthPrevious").disabled = false;

    //opacity
    document.getElementById('NinthQ').style.opacity = null;

    //----------------Second Quest Changes----------------
    document.getElementById('FormId').style.display = 'none'
}


/*----------------------------------------------------------------Onlaod Function-----------------------------------------------------*/

window.onload = function FieldSize() {
    let getSize = GetWindowWidth();

    if (getSize <= 900) {
        document.getElementById('example-tel-input').style.width = '270px';
        document.getElementById('FirstNameDiv').style.width = 'auto';
        document.getElementById('LastNameDiv').style.width = 'auto';
        document.getElementById('example-tel-input').style.paddingBottom = '10px';
        document.getElementById('FirstNameDiv').style.paddingBottom = '10px';
        document.getElementById('LastNameDiv').style.paddingBottom = '10px';
    } else {
        document.getElementById('FirstNameDiv').style.width = '210px';
        document.getElementById('LastNameDiv').style.width = '210px';
        document.getElementById('example-tel-input').style.width = '210px';
        document.getElementById('example-tel-input').style.paddingBottom = '25px';
        document.getElementById('FirstNameDiv').style.paddingBottom = '25px';
        document.getElementById('LastNameDiv').style.paddingBottom = '25px';
    }

}

window.onload = function GetImage(){
    let getScreenSize = GetWindowWidth();
    
    if(getScreenSize < 800){
        document.getElementById('IsoImageMobile').style.display='block';
        document.getElementById('MainImage').style.display='none';
    }else if (getScreenSize >= 800){
        document.getElementById('MainImage').style.display='block';
        document.getElementById('IsoImageMobile').style.display='none';
    }
}

/*----------------------------------------------------------------Function-----------------------------------------------------------*/
function GetWindowWidth() {
    return $(window).width()
}

function TelephoneLogic(){
    let TelNumber = document.getElementById('example-tel-input').value;
    let FirstNumber=parseInt(TelNumber[0]);
    let SecondNumber=parseInt(TelNumber[1]);
    if(FirstNumber != 0 || SecondNumber != 1 && SecondNumber != 6 && SecondNumber != 7 || TelNumber.length != 10 || TelNumber.match(/^[0-9]+$/) == null ){
        document.getElementById('example-tel-input').value=null;
        document.getElementById('example-tel-input').style.borderBottomColor = 'red';
        return false;
    }else{
        document.getElementById('example-tel-input').style.borderBottomColor = 'green';
        document.getElementById('TelephoneGoogleSheets').value=TelNumber;
        return true;
    }
}

function PersonName(){
    let FirstName = document.getElementById('FirstName').value;
    let LastName = document.getElementById('LastName').value;

    if(FirstName == "" && LastName == "" || !/^[a-zA-Z ]+$/.test(FirstName) && !/^[a-zA-Z ]+$/.test(LastName) ){
        document.getElementById('LastName').value=null;
        document.getElementById('LastName').style.borderBottomColor = 'red';
        document.getElementById('FirstName').value=null;
        document.getElementById('FirstName').style.borderBottomColor = 'red';
        return false;
    }else if(FirstName == "" || !/^[a-zA-Z ]+$/.test(FirstName) ){
        document.getElementById('LastName').style.borderBottomColor = 'green';
        document.getElementById('FirstName').value=null;
        document.getElementById('FirstName').style.borderBottomColor = 'red';
        return false;
    }else if(LastName == "" || !/^[a-zA-Z ]+$/.test(LastName)){
        document.getElementById('FirstName').style.borderBottomColor = 'green';
        document.getElementById('LastName').value=null;
        document.getElementById('LastName').style.borderBottomColor = 'red';
        return false;
    }else{
        document.getElementById('LastName').style.borderBottomColor = 'green';
        document.getElementById('FirstName').style.borderBottomColor = 'green';
        document.getElementById('LastNameGoogleSheets').value=LastName;
        document.getElementById('FirstNameGoogleSheets').value=FirstName;
        return true;
    }

}

function BridgeTest(){
    let FullName_Check=PersonName();
    let TelephoneCheck=TelephoneLogic();
    if(FullName_Check == true && TelephoneCheck == true){
        document.getElementById('Loading').style.display='block';
        document.getElementById('TenthPrevious').style.display='none';
        document.getElementById('TenthPrevious').style.height='0%';
        document.getElementById('Submit').style.display='none';
        document.getElementById('Submit').style.height='0%';
        SubmitBtn();
    }
}

function SubmitBtn(){
    $.ajax({
        url:"https://api.apispreadsheets.com/data/3325/",
        type:"post",
        data:$("#DataSheet").serializeArray(),
        success: function(){
            window.location.href="Quiz_Done.html";
        },
        error: function(){
            alert("Une erreur s'est produite ... Veuillez réessayer plus tard.")
            document.getElementById('Loading').style.display='none';
            document.getElementById('TenthPrevious').style.display='block';
            document.getElementById('Submit').style.display='block';
            window.scrollBy(0, 1080);
        }
    });
}
