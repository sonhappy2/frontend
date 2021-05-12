function mid(){
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id1 = document.getElementById('id1').value;
    var result = document.getElementById('result');
    if(id1.match(exp)){
        result.style.color='green';
        result.innerHTML = '유효함';
        
    } else if(id1.length==0){
        result.style.color='red';
        result.innerHTML = '필수입력입니다';
    } 
    else{
        result.style.color='red';
        result.innerHTML='유효하지 않음';
    }
    
}
function mpassword() {
    var exp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$-])[a-zA-Z\d!#$-]{8,16}$/;
    var pwd = document.getElementById('pwd').value;
    
    var result1 = document.getElementById('result1');
    
    if(pwd.match(exp1)){
        result1.style.color='green';
        result1.innerHTML = '유효함';
    }else if(pwd.length==0){
        result1.style.color='red';
        result1.innerHTML = '필수입력입니다';
    } 
    else{
        result1.style.color='red';
        result1.innerHTML='유효하지 않음';
    }
   
}
function passwordconfirm(){
    var pwd = document.getElementById('pwd').value;
    var pwdconfirm = document.getElementById('pwdconfirm').value;
    var result2 = document.getElementById('result2');
    if(pwd==pwdconfirm){
        result2.style.color='green';
        result2.innerHTML = '일치';
    } 
    else{
        result2.style.color='red';
        result2.innerHTML = '불일치';
    }
}
function mname(){
    var name1=document.getElementById('name1').value;
    var result3 = document.getElementById('result3');
    if(name1.length==0){
        result3.style.color='red';
        result3.innerHTML='필수입력입니다';
    } 
}
function memail(){
    var domain2= document.getElementById('domain2');
    console.log(domain2.value)
    var domain1= document.getElementById('domain1').value=domain2.value;
    
}
function mphone(){
    var exp3 = /^\d{3}-\d{4}-\d{4}$/;
    var phone = document.getElementById('phone').value;
    var result4 = document.getElementById('result4');
    if(phone.match(exp3)){
       result4.style.color='green';
       result4.innerHTML='유효함';
    }else if(phone==0){
        result4.style.color='red';
        result4.innerHTML='필수입력입니다';
    }else{
        result4.style.color='red';
        result4.innerHTML='유효하지않음';
    }
}
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;
            
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}