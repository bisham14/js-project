const testimonials =[
    {
        name:"Jhon dee",
        photoUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I would recommend ai for anyone trying to get the word out about their business. It has saved me so much time!"  
    },
    {
       name:"Changelog",
        photoUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "The React 50+ Pro Tips ebook is something I revisit every week. Short, focused, no bloat. Exactly what a working developer needs." 
    },
     {
       name:"Sneha Kulkarni",
        photoUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Shipped a polished landing page in an afternoon. The presets alone saved me hours of fiddling with colors."   
    }, 
    {
       name:"Launch Kit",
        photoUrl:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Cleanest testimonial generator I've used. Live preview is a game changer — what you see is exactly what you get."   
    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    
    imgEl.src = photoUrl;       
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    
    if(idx === testimonials.length){
        idx =0
    }

    setTimeout( ()=>{
        updateTestimonial()
    },2000)


}