// A takımı için buton
const decrementButtonA = document.querySelector('.decreaseA');  //- A butonu seçtik
const incrementButtonA = document.querySelector('.increaseA');// + A butonu seçtik
let countA = document.querySelector('.numberA');
let valueA = countA.innerHTML;  // sayı kısmına yazdıracağımız değeri seçiyoruz
let teamNewNameA = document.querySelector('.teamA')  // A takımı yazan yeri seçtik
let newScoreA = document.querySelector('.newScoreA')   // Score değiştirecek butonu A için seçtik


//B takımı için buton
const decrementButtonB = document.querySelector('.decreaseB'); 
const incrementButtonB = document.querySelector('.increaseB');
let countB = document.querySelector('.numberB');
let valueB = countB.innerHTML;
let teamNewNameB = document.querySelector('.teamB') ;
let newScoreB = document.querySelector('.newScoreB')


//A takımı için fonksiyon
decrementButtonA.addEventListener('click', decreamentA);  //- butona tıkladığımızda çalışacak fonksiyon ismi
incrementButtonA.addEventListener('click', increamentA);  // + butona tıkladığımızda çalışacak fonksiyon ismi

function decreamentA(){
    --valueA;
    countA.innerHTML = valueA;   
    if (valueA <= 0) {
      countA.innerHTML = 0;
      } else {
        countA.innerHTML = valueA
      }
   
}

function increamentA(){
    ++valueA;
    countA.innerHTML = valueA;   
    
}

//B takımı için fonksiyon
decrementButtonB.addEventListener('click', decreamentB);  //- butona tıkladığımızda çalışacak fonksiyon ismi
incrementButtonB.addEventListener('click', increamentB);  // + butona tıkladığımızda çalışacak fonksiyon ismi

function decreamentB(){
    --valueB;
    countB.innerHTML = valueB;   
    if (valueB <= 0) {
    countB.innerHTML = 0;
    } else {
      countB.innerHTML = valueB
    }
}

function increamentB(){
    ++valueB;
    countB.innerHTML = valueB;   
    
}


// takım adını değiştir A butonu seçiyoruz
let changeTeamA = document.querySelector('.teamNameA')   

changeTeamA.addEventListener('click', () => {   // A takımını değiştirmek için butona tıkladığımızdaki fonksiyon
    let inputDomA = document.createElement('input')   // yeni input oluşturuyoruz
      document.querySelector('.inputA').appendChild(inputDomA)  // bu input u div e yerleştiriyoruz
      inputDomA.type="text";
      inputDomA.name="nameAteam";
      inputDomA.placeholder= "Yeni takım adını giriniz";
     
      inputDomA.addEventListener("keypress", (e) => {  // input a enter olduğunda gerçekleşecek fonk
        if (e.key === "Enter") {
          teamNewNameA.innerHTML = inputDomA.value  // A takımı yazan yeri input daki value ile değiştiriryoruz
          inputDomA.style.display='none';  // en son input u görünmez yap


        }
      });

      
})

// takım adını değiştir B butonu seçiyoruz
let changeTeamB = document.querySelector('.teamNameB') 


changeTeamB.addEventListener('click', () => {   // B takımını değiştirmek için butona tıkladığımızdaki fonksiyon
    let inputDomB = document.createElement('input')   // yeni input oluşturuyoruz
      document.querySelector('.inputB').appendChild(inputDomB)  // bu input u div e yerleştiriyoruz
      inputDomB.type="text";
      inputDomB.name="nameBteam";
      inputDomB.placeholder= "Yeni takım adını giriniz";
     
      inputDomB.addEventListener("keypress", (e) => {  // input a enter olduğunda gerçekleşecek fonk
        if (e.key === "Enter") {
          teamNewNameB.innerHTML = inputDomB.value  // B takımı yazan yeri input daki value ile değiştiriryoruz
          inputDomB.style.display='none';  // en son input u görünmez yap
           
        }
      });

      
})  

// A takımı için score değiştir butonunu tanımlıyoruz
newScoreA.addEventListener('click', () => {
  let inputNumberDomA = document.createElement('input')   // yeni input oluşturuyoruz
  document.querySelector('.inputNumberA').appendChild(inputNumberDomA)  // bu input u div e yerleştiriyoruz
  inputNumberDomA.type="number";
  inputNumberDomA.name="nameBscore";
  inputNumberDomA.placeholder= "Yeni skoru giriniz";
 
  inputNumberDomA.addEventListener("keypress", (e) => {  // input a enter olduğunda gerçekleşecek fonk
    if (e.key === "Enter") {

      if(e.target.value < 0 ){
    alert('Pozitif bir değer giriniz')
    e.target.value = ""
  }else{
      valueA = inputNumberDomA.value
      countA.innerHTML = inputNumberDomA.value  // B takımı yazan yeri input daki value ile değiştiriryoruz
      inputNumberDomA.style.display='none';  // en son input u görünmez yap
  }   
    }
  });
  
})


// B takımı için score değiştir butonunu tanımlıyoruz
newScoreB.addEventListener('click', () => {
  let inputNumberDomB = document.createElement('input')   // yeni input oluşturuyoruz
  document.querySelector('.inputNumberB').appendChild(inputNumberDomB)  // bu input u div e yerleştiriyoruz
  inputNumberDomB.type="number";
  inputNumberDomB.name="nameBscore";
  inputNumberDomB.placeholder= "Yeni skoru giriniz";
 
 
  inputNumberDomB.addEventListener("keypress", (e) => {  // input a enter olduğunda gerçekleşecek fonk
    if (e.key === "Enter") {

       if(e.target.value < 0 ){
    alert('Pozitif bir değer giriniz')
    e.target.value = ""
  }else{
      valueB = inputNumberDomB.value
      countB.innerHTML = inputNumberDomB.value  // B takımı yazan yeri input daki value ile değiştiriryoruz
      inputNumberDomB.style.display='none';  // en son input u görünmez yap
     }  
    }
  });
  
})

   


   
   
