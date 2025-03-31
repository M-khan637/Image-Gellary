
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryItems1 = document.querySelectorAll('.gallery-item, h3')
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const filterBtns = document.querySelectorAll('.filter-btn');


let currentIndex = 0;
let filteredImages = Array.from(galleryItems);


galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showModal();
    });
});


function showModal() {
    const image = filteredImages[currentIndex].querySelector('img'); 
    modalImg.src = image.src;
    modalCaption.textContent = image.alt;
    modal.style.display = 'flex';
}


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    showModal();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % filteredImages.length;
    showModal();
});


filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        filteredImages = Array.from(galleryItems).filter(item => 
            filter === 'all' || item.dataset.category === filter
        );

        galleryItems.forEach(item => {
            item.style.display = filteredImages.includes(item) ? 'block' : 'none';
        });
    });
});

gsap.from(galleryItems1,{
    y:50,
    delay:0.8,
    opacity: 0,
    stagger:0.5,
    duration:0.8,
    start:"top 0%",
    end:"top -100%",
    scrub:3,
    pin:true
})


 var cursor = document.querySelector('.cursor')
 var cursor2 = document.querySelector('.gallery-container .header h1,p')

      
        document.addEventListener("mousemove", function (dets) {
            gsap.to(cursor, {
                x: dets.clientX,
                y: dets.clientY,
                ease: "power1.out",
                duration: 0.1
            });
        });

       
        document.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 0, 
                duration: 0.2
            });
        });

      
        document.addEventListener("mouseenter", function () {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "#f0f8ff",
                duration: 0.2
            });
        });
        cursor2.addEventListener("mouseenter",function(){
            gsap.to(cursor ,{
               scale:5,
               backgroundColor:"#ffffff8a"
           })
       })
       
       cursor2.addEventListener("mouseleave",function(){
           gsap.to(cursor,{
               scale:1,
               backgroundColor:"#f0f8ff"
           })
       })