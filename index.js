document.addEventListener('DOMContentLoaded', function(){



   let i = 0;
   let nextImage = '43.jpg'
    const images = ['./images/43.jpg','/images/school.jpg','./images/63.jpg','./images/61.jpg','./images/64.jpg','./images/P87.jpg','./images/P86.jpg']
   
    function Slide(){
           console.log("running")
            if(i>=images.length){i = 0}

            let img = document.getElementById('images')
            img.src=nextImage;
            console.log(`ive reached the end  ${nextImage}`)
        }
        function Slide2(){
            console.log("running")
             if(i>=images.length){i = 0}
 
             let img = document.getElementById('images2')
             img.src=nextImage;
            
             console.log(`ive reached the end  ${nextImage}`)
         }
    function Auto(){
        nextImage = images[i];
            i++;
            Slide()
            Slide2()

    }

   
   setInterval(Auto,4000)
    
   
   const sidebar = document.getElementById('sidebar');
   const toggleBtn = document.getElementById('toggleBtn');
   const toggleBtn2 = document.getElementById('toggleBtn2');
   const navItems = document.querySelectorAll('.sidebar nav ul li');
   const joinBtn = document.querySelector('.register button');

 
   toggleBtn.addEventListener('click', () => {
    console.log("i was click First")

    //    sidebar.classList.toggle('closed');
       sidebar.style.display = "flex";
   });

   toggleBtn2.addEventListener('click', () => {
    console.log("i was click Second")
    //    sidebar.classList.toggle('closed');
        sidebar.style.display = "none";
   });

//    const words = ['in-demand', 'valuable', 'sought-after', 'essential', 'cutting-edge'];
//   let currentIndex = 0;
//   const container = document.querySelector('.changing-part');

//   function changeWord() {
//     const currentWord = container.querySelector('.word');
//     currentWord.classList.add('slide-up');

//     setTimeout(() => {
//       currentIndex = (currentIndex + 1) % words.length;
//       const newWord = document.createElement('div');
//       newWord.className = 'word slide-down';
//       newWord.textContent = words[currentIndex];
//       container.appendChild(newWord);

//       setTimeout(() => {
//         currentWord.remove();
//         newWord.classList.remove('slide-down');
//       }, 50);
//     }, 500);
//   }

//   setInterval(changeWord, 2000);

})