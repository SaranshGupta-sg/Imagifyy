# Imagifyy
Image Generator
cd .\client\
npm run dev
git add .
git commit -m "new"
git push origin main

After downloading Framer motion 

import in which page where needed
in Header.jsx - 
import { motion } from "motion/react"
and change this div
<motion.div className="flex flex-col justify-center items-center text-center my-24 px-4"
            initial={{opacity:0.2,y:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            >
iske baad ye wala div change kiya
<motion.div className="text-stone-600 inline-flex items-center gap-2 bg-white/50 backdrop-blur-md 
                    px-6 py-1.5 rounded-full border border-gray-300 shadow-sm"
                    initial={{opacity:0,y:-20}}
                    animate={{opacity:1,y:0}}
                    transition={{delay:0.2,duration:0.8}}>
                    <p className="text-sm font-medium">Best text-to-image generator</p>
                    <img src={assets.star_icon} alt="" className="w-4 h-4" />
                </motion.div>

<motion.h1 className="text-4xl sm:text-7xl max-w-2xl mx-auto mt-10 font-bold leading-tight">
                    Turn text into <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-violet-600" 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.4,duration:2}}>
                    images</span> in seconds
                </motion.h1>

<motion.p className="text-center max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed"
                initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.6,duration:0.8}}>
                    Unleash your creativity with AI. Transform your imagination into stunning visuals instantly—just type and watch the magic unfold.
                </motion.p>

<motion.button className="cursor-pointer sm:text-lg text-white bg-black mt-8 px-14 py-3 flex items-center gap-3 
                       rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:bg-neutral-900 
                       transition-all duration-300"
                       whileHover={{scale:1.05}}
                       whileTap={{scale:0.95}}
                       initial={{opacity:0}}
                       animate={{opacity:1}}
                       transition={{default:{duration:0.5},opacity:{delay:0.8},duration:1}}>
                    Generate Images
                    <img className='h-6' src={assets.star_group} alt="" />
                </motion.button>

<motion.div className="flex flex-wrap justify-center mt-20 gap-4"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:1}}>    
                    {Array(6).fill('').map((item, index) => (
                        <img
                            whileHover={{scale:1.05,duration:0.1}}
                            key={index}
                            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                            alt=""
                            className="rounded-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer max-sm:w-16 w-20 shadow-md"
                        />
                    ))}
                </motion.div>

<motion.p className="mt-3 text-neutral-500 text-sm tracking-wide"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1.2,duration:0.8}}>
                    Generated with Imagify ✨
                </motion.p>

ab iske baad Generate Images wala button ko actionable banaenge
<motion.button onClick={onClickHandler} className="cursor-pointer sm:text-lg text-white bg-black mt-8 px-14 py-3 flex items-center gap-3 
                       rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:bg-neutral-900 
                       transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8 }, duration: 1 }}>
                    Generate Images
                    <img className='h-6' src={assets.star_group} alt="" />
                </motion.button>

iske baad onClickHandler ko workable banenge
const onClickHandler = ()=>{

    }

lekin pehle check karenge ki user login h ya logout based onm that will we redirect the user onm the result page or not iske lie useContext ka use karenge

const {user,setShowLogin} = useContext(Appcontext)
import { Appcontext } from '../context/AppContext'

ab navigate karane k liye result page pe

    const navigate = useNavigate()
import { useNavigate } from 'react-router-dom'


const onClickHandler = ()=>{
        if (user) {
            navigate('/result')  - user login hai 
        }else{
            setShowLogin(true) - user login nahi hai 
        }
    }


ab Steps.jsx me animation add karenge

import { motion } from 'motion/react'
<motion.div 
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center my-28 px-4">

ab Description.jsx me animation add karenge

import { motion } from 'motion/react'
<motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

ab testimonials.jsx me animation add karenge

import { motion } from 'motion/react'
<motion.div
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex flex-col items-center justify-center my-20 py-12'>

ab generatebtn.jsx me animation add karenge

import { motion } from 'motion/react'
 <motion.div  
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='pb-16 text-center'>

iske baad iss button ko bhi workable banaenge

import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

  const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

<button onClick={onClickHandler}

same code likheng jo uppr wale button k liye likha tha

isme ek error aaya tha ye sb add krne k baad bhi login page open nhi ho rha tha islie login.jsx me gaye aur
 return (
    <div className='fixed 

fixed property add kari thi iske baad open ho gya login page wahi pr hi aur scrool bhi nahi hua


ab Result.jsx me animation add karenge

import { motion } from "motion/react"
return (
    <motion.form onSubmit={onSubmiHandler} className='flex flex-col min-h-[90vh] justify-center items-center'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>

ab buycredit.jsx me animation add karenge
import { motion } from "motion/react"

<motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-14 mb-10'>