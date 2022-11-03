import React,{useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
// import profile from '/Users/priya/Documents/portfolio/portfolio-site/public/assets/pImag6.webp';
const Contact = () => {
  const form = useRef();
  const [data,setData] = useState({
    name:"",
    email:"",
    message:""
  })

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
   
  }
  function submit(e){
    e.preventDefault();
    console.log(data);
    emailjs.sendForm('service_rcbgs5q', 'template_lceiz6e', form.current, 'fY71w-LxnEl68KLRf')
      .then((result) => {
          console.log(result.text);
          alert("Send successfully");
          setData({
            name:"",
            email:"",
            message:""
          });
      }, (error) => {
          console.log(error.text);
      });
     
  }
  return (
    <section className='contact section reveal' id='contact'>
     {/* <img src={profile} alt="" className='contact__banner'/> */}
    <h2 className='section-title'>Contact</h2>
    <div className='contact__container '>
   
      <div className='contact__info'>
        <h3 className='contact__subtitle'>EMAIL</h3>
        <span className='contact__text'>priyagondaliya444@gmail.com</span>
        <h3 className='contact__subtitle'>PHONE</h3>
        <span className='contact__text'>+15149927751</span>
        {/* <h3 className='contact__subtitle'>ADDRESS</h3>
        <span className='contact__text'>Montreal, Canada</span> */}
        </div>
        <form ref={form} onSubmit={(e)=>submit(e)} className='contact__form' >
          <div className='contact__inputs'>
            <input name="name" onChange={(e)=>handle(e)} id="name" value={data.name} type="text" placeholder='Name' className='contact__input' required/>
            <input name="email" onChange={(e)=>handle(e)} id="email" value={data.email} type="email" placeholder='Email' className='contact__input' required/>
          </div>
          <textarea name="message" onChange={(e)=>handle(e)} id="message" value={data.message}   cols="0" rows="10" className='contact__input' required placeholder='Message'></textarea>
          <input type="submit" value="Send" className='contact__button'/>
        </form>
      
      
    </div>
</section>
  )
}

export default Contact