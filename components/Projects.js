import React from 'react'
import style from "../styles/project.module.css"
import Image from 'next/image'
import Link from 'next/link'
import {BsFillFolderFill, BsGithub} from 'react-icons/bs'
function Projects() {
  return (
    <>
        <div id='Project' className={style.headline}>
            <h1>/ Projects</h1>
              <div className={style.line}></div>
          </div>

    

                <div className={style.slider}>
                <figure >
                    <Image
                    src='/proj.png'
                    priority
                    width={200}
                    height={200}
                    />
                    <Image
                    src='/proj1.png'
                    priority
                    width={200}
                    height={200}
                    />
                    <Image
                    src='/proj2.png'
                    priority
                    width={200}
                    height={200}
                    />
                    <Image
                    src='/proj3.png'
                    priority
                    width={200}
                    height={200}
                    />
                    <Image
                    src='/proj4.png'
                    priority
                    width={200}
                    height={200}
                    />
                </figure>
            </div>
  

  <div className={style.grid}>

         <Link href='https://alphatrade.vercel.app'> <div className={style.main}>
                <div className={style.icon}>
                    <BsFillFolderFill size={25}/>
                    <BsGithub size={25}/>
                </div>
                <h3>AlphaTrade NFTs Market.</h3>
                <p>A shared liquidity NFT market, <br/>smart contract is used by multiple <br/>website tp provide the users
                    the<br/> latest multiple experiences.
                </p>

                <p>React JS || Javascript || Next JS</p>
          </div></Link>

        
         <Link href='https://tanirestorant.vercel.app'> <div className={style.main}>
                <div className={style.icon}>
                    <BsFillFolderFill size={25}/>
                    <BsGithub size={25}/>
                </div>
                <h3>Tani&apos;s Restaurants.</h3>
                <p>Welcome to the world of Tasty & Fresh Food.Our vision is to give everyone easy access to anything in their city.
                </p>

                <p>React JS || Javascript || Next JS || Mongodb</p>
          </div></Link>

        
         <Link href='https://alphaa.vercel.app'> <div className={style.main}>
                <div className={style.icon}>
                    <BsFillFolderFill size={25}/>
                    <BsGithub size={25}/>
                </div>
                <h3>Alpha Auto Detailings..</h3>
                <p>High quality, convenient and sustainable car care, all through one app. we offer mobile body repair - Mobile valet -
                    Mobile Mechanics
                </p>

                <p>React JS || Javascript || Next JS</p>
          </div></Link>

          <Link href='https://rashcloud.vercel.app'><div className={style.main}>
                <div className={style.icon}>
                    <BsFillFolderFill size={25}/>
                    <BsGithub size={25}/>
                </div>
                <h3>Ransom Clouds for Hosting.</h3>
                <p>Cloud Hosting for Pros Deploy your website in less than 60 seconds
                </p>

                <p>React JS || Javascript || Next JS</p>
          </div></Link>

          <Link href='https://ransomtrade.vercel.app'><div className={style.main}>
                <div className={style.icon}>
                    <BsFillFolderFill size={25}/>
                    <BsGithub size={25}/>
                </div>
                <h3>Ransom Trade.</h3>
                <p>
                    Jump Start Your Portfolio Ransom trade is the easiest place to buy and sell crytocurrency. Sign up and get started today.
                </p>

                <p>React JS || Javascript || Next JS</p>
          </div></Link>

         <Link href='https://hauk.vercel.app'> <div className={style.main}>
                <div className={style.icon}>
                    <BsFillFolderFill size={25}/>
                    <BsGithub size={25}/>
                </div>
                <h3>Hauskino Movies.</h3>
                <p>
                    Unlimited films, Tv Programmes and more. watch anywhere and anytime
                </p>

                <p>React JS || Javascript || Next JS</p>
          </div></Link>
    
    </div>
            <div className={style.footer}>
                <p>Built and Designed by Abdulrauf Rasheed</p>
                <p>All rights reserved &copy;</p>
            </div>
    </>
  )
}

export default Projects