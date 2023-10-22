 // movie_card 클래스를 가진 요소를 모두 선택
 const moviecards = document.querySelectorAll('.movie_card')

 // 각 카드 요소에 클릭 이벤트 리스너 등록 및 영화ID 문구 띄우기
 moviecards.forEach(function (cards) {
     cards.addEventListener('click', function (event) {
        // getAttribute로 요소의 속성 값(영화 id)을 가져와 문구를 띄운다.
         const movieid = cards.getAttribute('data-id');
         alert(`선택하신 영화 ID는 ${movieid}입니다.`);
     });
 });
 // movie_card 클래스를 가진 요소를 모두 선택
 const moviecards = document.querySelectorAll('.movie_card')

 // 각 카드 요소에 클릭 이벤트 리스너 등록 및 영화ID 문구 띄우기
 moviecards.forEach(function (cards) {
     cards.addEventListener('click', function (event) {
        // getAttribute로 요소의 속성 값(영화 id)을 가져와 문구를 띄운다.
         const movieid = cards.getAttribute('data-id');
         alert(`선택하신 영화 ID는 ${movieid}입니다.`);
     });
 });