import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import {Link} from 'react-scroll'
import Navbar from '../components/Navbar'
import {AiOutlineMail} from "react-icons/ai"
import {BsFillPlayFill} from "react-icons/bs"
import Projects from '../components/Projects'
export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar/>
     
      <div className={style.main} id='main'>
        <h1>Hi, <span style={{color:" #97DECE"}}>Rasheed</span> here.</h1>
        <h3>I create stuff sometimes</h3>
        <p>I'm a software engineer and artist based in Lagos, Nigeria.<br/> I have  great interest in full-stack development,
           artificial intelligence,<br/> human-computer interactions, and everything in between.</p>
           <button><AiOutlineMail size={20} style={{}}/> Say hi!</button>
      </div>


          <div id='about' className={style.aboutheadline}>
            <h1>/ about</h1>
              <div className={style.line}></div>
          </div>


   <div className={style.about}>

          <div className={style.course}>
             <p>I am currently a second year Computer Science major at <span style={{color:" #97DECE"}}>Aptech Institution</span><br/> with a year+ experience in software developing. My ambitious interest in<br/> software
       development combined with my drive to work for a company that want to<br/> move the next level will be a unique and enriching experience for both parties.<br/> With demonstrated history 
       of working in the information industry, I have a user<br/> experience in frontend development, I am eager to work with an organization where<br/> professionalism is value while 
       gaining knowlegde and experience to advance my<br/> career and become an expert in my industry.         
               </p>
              
              <p>Here are some technologies i have been working with:</p>

          <div className={style.grid}>
               <div className={style.play}>
                    <BsFillPlayFill/>
                    <p>javascript ES6+</p>
               </div>
               <div className={style.play}>
                    <BsFillPlayFill/>
                    <p>React JS</p>
               </div>
               <div className={style.play}>
                    <BsFillPlayFill/>
                    <p>Node JS</p>
               </div>
               <div className={style.play}>
                    <BsFillPlayFill/>
                    <p>Next JS</p>
               </div>
               <div className={style.play}>
                    <BsFillPlayFill/>
                    <p>Mongo db</p>
               </div>
               <div className={style.play}>
                    <BsFillPlayFill/>
                    <p>HTML/CSS</p>
               </div>
          </div>
          <p>Outside of work, I'm interested in following the<br/> developments of science. I also play a lot of
           video games.<br/> And Love Football.</p>
          </div>

       <Image
       priority
       src='/pics.JPG'
       width={300}
       height={400}
       />

</div>

       <div id='experience' className={style.headline}>
            <h1>/ experience</h1>
              <div className={style.line}></div>
          </div>

          <div className={style.experience}>
              <div>
                <h1>Software Development Engineer Working <span style={{color:" #97DECE"}}>Remotely</span></h1>
                <h3>JUL 2022 - Present</h3>
              </div>
              <div className={style.play}>
                <BsFillPlayFill style={{color:" #97DECE"}}/>
                <p>Collaborate with experienced cross-disciplinary developers to conceive, design,<br/>
                   and bring innovative products and services to market.</p>
              </div>
              <div className={style.play}>
                <BsFillPlayFill style={{color:" #97DECE"}}/>
                <p>Design and build innovative technologies in a large distributed computing<br/> environment 
                  and help lead fundamental changes in the industry..</p>
              </div>
              <div className={style.play}>
                <BsFillPlayFill style={{color:" #97DECE"}}/>
                <p>Build distributed storage, index, and query systems that are scalable, fault-<br/>tolerant, low cost, 
                and easy to manage/use..</p>
              </div>
          </div>
   <Projects/>
    </div>
  )
}
