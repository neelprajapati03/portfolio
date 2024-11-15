


document.querySelector('.contact-form').addEventListener('submit',function(e){
    e.preventDefault();
    alert('Thank you for reaching out, Neel will get back to you soon!')

})


document.querySelectorAll('.btn-source').forEach(button=>{
    button.addEventListener('mouseover',function(){
        this.style.transform = 'scale(1.1)';  
    });
    button.addEventListener('mouseout',function(){
        this.style.transform = 'scale(1)';
    })
})