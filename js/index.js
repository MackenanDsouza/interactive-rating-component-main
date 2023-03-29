const rating=document.querySelectorAll('.rating-item');
console.log(rating);
rating.forEach(btn=>{

    btn.addEventListener('click',()=>{

        rating.forEach(item=>{
            if(item!=btn){
                if(item.classList.contains("active"))
                {
                    item.classList.remove("active");
                }
            }
        })
        btn.classList.toggle("active");

    })

})


const card=document.querySelector(".card")
const thanks=document.querySelector(".thanks")
const btn_submit=document.querySelector(".submit");
const rating_val=document.querySelector("#rating-value");

btn_submit.addEventListener('click',()=>{
rating.forEach(item=>{
    if(item.classList.contains("active"))
    {
        var val=item.innerHTML;
        rating_val.innerHTML=val;
        card.style.display="none";
        thanks.style.display="block";


    }
})


})