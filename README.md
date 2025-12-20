# Imagifyy
Image Generator
cd .\client\
npm run dev
git add .
git commit -m "new"
git push origin main
sara@gmail.com
hiiheloo
rhtuyg thtrh 
After downloading Framer motion 

frekjgrhe






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
    <div className=fixed 

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












Server - Backend Start










'npm init' se start kiya package.json aaya fir iss file me 
  "type": "module",
ye wala type add kiya kyoki ye import me help krta h ese -

Change all require → import
// ❌ wrong now
const fs = require('fs')

// ✅ correct
import fs from 'fs'


iske baad npm i multiple packages
express(Create a server Handle routes (/login, /signup, /api/users) Receive requests and send responses),
cors(helps to connect backend with frontend, A middleware that allows frontend and backend to talk to each other.), 
dotenv(create .env files and use it in server, Used to store secret data in .env file.), 
nodemon(restart the backend server whenever we make any changes in code file, Automatically restarts the server when you change code.), 
form-data(Used to send files and form data (images, PDFs, etc)., Helps in:Image upload, Profile photo upload, Sending files to APIs)
jsonwebtoken(Used for authentication (login system)., How it works:User logs in->Server generates a token->Token is sent to frontend->Frontend sends token with every request)
mongoose(connect backend with mongodb database, A library to connect MongoDB with Node.js., Create schemas, Save data, Read, update, delete data) 
axios(helps to make api call, Calling third-party APIs, Payment gateways) 
bcrypt(help to bcrypt the password, Used to encrypt passwords., Never store passwords as plain text.) 
razorpay(online payment gatepay, An online payment gateway.) 



iske baad server.js file banaya jisme

import express from 'express'  -> Imports Express framework.
import cors from 'cors'        -> Imports CORS middleware.
import 'dotenv/config'         -> Loads .env file automatically.

const PORT = process.env.PORT || 4000  -> Uses port from .env, if not available then uses 4000.   (PORT = Computer ke andar ek specific gate jahan server requests receive karta hai.)
const app = express()          -> Express ka server instance banaya ja raha hai (yahin se API aur routes define honge).

app.use(express.json())        ->Frontend se jo data JSON format me aata hai (POST / login / signup), usko samajhne ke liye zaroori hai.
app.use(cors())                ->Enables CORS for all routes. (Ye frontend (React, Vite) ko backend API call karne deta hai without error.)

app.get('/', (req, res) => res.send("API Working"))    -> Creates a GET API at root (/). (Jab browser me localhost:4000 open karoge, 
ye message dikhega → API Working 
Ye basic test hota hai server chal raha hai ya nahi.)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))   -> Starts the server on given port. (Server ko start karta hai aur batata hai kis port pe chal raha hai.)



iske baad package.json me 
    "server": "nodemon server.js"
ye add kiya kyoki 'Code change karte hi backend server automatically restart ho jaye Isliye add karte hain.'


iske baad mongodb website pe gaye waha imagify project k naam se naya project banaya aur
.env file me 
MONGODB_URI = "mongodb+srv://saranshg2911_db_user:Egnay1C5pp1N7fbC@cluster0.zhtcded.mongodb.net"

iske baad config folder banaya file name mongodb.js

import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected',()=>{    -> Jab MongoDB connect, error, ya disconnect hota hai — yeh batata hai kya ho raha hai
        console.log("Database Connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/Imagify`)
}
export default connectDB

iske baad server.js me
import connectDB from './config/mongodb.js'
await connectDB()  ->taki apne server me database connect ho jaye 
terminal me mssg aaya "Database Connected" Server running on port 4000
 
ab models naam ka folder banaya jisme schema or models store kr ske mtlb user k information store kr ske
ab isme ek file banayi userModel.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, requied: true },
    email: { type: String, requied: true, unique: true },
    password: { type: String, requied: true },
    creditNalance: { type: Number, default: 5 },
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)   (pehle check karega ki user ne jo information di h wo pehle se available h ya nhi agr h to 'mongoose.models.user' nahi h to new create karega 'mongoose.model("user", userSchema)')

export default userModel;

iske baad folder banaya 'controllers' file 'userController.js' 
in this we create controller function for user (regitration , login, logout)

Registration k liye user.Model ka use karenge

import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'      ->Password ko encrypt (hash) karne ke liye, Taaki plain password database me store na ho
import jwt from 'jsonwebtoken'   ->Login / register ke baad token generate karne ke liye

const registerUser = async (req, res) => {              ->Ye register API controller hai, req = frontend se aaya data, res = frontend ko response
    try {
        const {name,email,password} = req.body;         ->Frontend se bheje gaye form ka data nikal rahe hain

        if (!name || !email || !password) {                                   
            return res.json({success:false, message: 'Missing Details'})      ->Agar koi bhi field missing hai → user ko error bhejo
       }

       const salt = await bcrypt.genSalt(10)                                  -> to understand salt scroll down
       const hashedPassword = await bcrypt.hash(password, salt)               -> to understand hash scroll down

       const userData = {
        name,
        email,
        password: hashedPassword
       }                                                                   ->Database me save karne ke liye object ready

       const newUser = new userModel(userData)
       const user = await newUser.save()                              ->MongoDB me new user create & save ho raha hai

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)->User ki ID se login token banaya Ye token future requests me user ko verify karega

       res.json({success: true, token, user: {name: user.name}})     ->Frontend ko bol rahe hain:
✔ Register successful
✔ Token bhej rahe hain
✔ User ka naam bhej rahe hain
 
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})   ->Agar kuch bhi galat ho → error handle karo, Server crash na ho
    }
}

Salt = Salt ek random value hoti hai Jo password ko aur zyada secure banati hai
Salt = Extra Security Layer

Salt ek random string hoti hai
jo password ke saath add hoti hai
taaki password aur zyada secure ho jaye
eg- 
password = "123456"
salt = "x@9K!"
hashed = "98x#Q@!"

bcrypt.genSalt(10)

10 bolta hai kitni baar encryption process repeat hoga
Isse kehte hain salt rounds.

const salt = await bcrypt.genSalt(10)
Encryption heavy process hota hai
Isliye async hota hai
Taaki server block na ho

Salt ka use kahan hota hai?
const hashedPassword = await bcrypt.hash(password, salt)
Salt + Password = Hashed Password

Complete Flow (Visual)
User Password:  mypassword
genSalt(10) →  $2b$10$AbCd...
hash(password + salt) →  $2b$10$AbCd...XYZ

Kya salt database me store hota hai?
YES, but automatically
👉 bcrypt hash ke andar hi salt store hota hai
👉 Alag se save karne ki zarurat nahi

Login time pe kaise match hota hai?
bcrypt.compare(enteredPassword, storedHashedPassword)
bcrypt khud:
salt nikalta hai
password encrypt karta hai
compare karta hai

Interview One-Liner 💡
Salt ek random value hoti hai jo password hashing ko strong banati hai aur rainbow-table attacks se bachati hai.

iske baad login ke liye same file m code

const loginUser = async (req, res) => {      ->Ye ek async function hai jo user ko login karata hai
    try {
        const { email, password } = req.body;           ->Frontend se jo email aur password aaya hai, use body se nikal rahe hain
        const user = await userModel.findOne({ email })  ->MongoDB me check kar rahe hain ki is email ka user exist karta hai ya nahi

        if (!user) {
            return res.json({ success: false, message: 'User does not exist' }) -> agr user exist nhi krta mongodb m to usko ye error message bhejo
        }

        const isMatch = await bcrypt.compare(password, user.password)        ->User ka plain password
aur database me hashed password
bcrypt se compare ho raha hai

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)  ->Ye ek login token hai Jisse pata chalega user authenticated hai

            res.json({ success: true, token, user: { name: user.name } })    ->Frontend ko token aur user ka naam bhej rahe hain
        } else {
            return res.json({ success: false, message: 'Invalid credentials' }) ->Password match nhi hua to ye mssg bhejo
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })  ->Agar koi error aaye to server crash na ho
    }
}

export  {registerUser, loginUser}


iske baad to create API we make folder Routes and file userRoutes.js

import express from 'express'
import { registerUser, loginUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)     ->Jab koi POST /register request karega → registerUser function chalega
userRouter.post('/login', loginUser)           ->POST /login request pe loginUser function chalega

export default userRouter

iske baad ab router k liye route banenge to 'server.js file m jaenge aur 
import userRouter from './routes/userRoutes.js'
app.use('/api/user', userRouter)

ye dono likhne k baad apna route select ho gaya 
ab ise try karne k liye apn postman ka use karenge jisme 
http://localhost:4000/api/user/register 
http://localhost:4000/api/user/login
ye dono link se check karenge


ab postman api download karenge

isme REST api m jaenge New Collection bana k apne project ka naam likhenge Imagify and POST select karenge usme 
http://localhost:4000/api/user/register 
ye wala link paste karenge 
raw select karenge
object banaenge
{
    "name": "Saransh"
    "email": "gupta@gmail.com",
    "password": "1234321"
}

and then send 
iske baad mongodb database m jaenge
clusters m jaenge aur ye oject apn ko show hoga

ab apn login check karenge
http://localhost:4000/api/user/login
object m name hata denge kyoki user already sign up kr chuka hai
{
    "email": "gupta@gmail.com",
    "password": "1234321"
}

iske baad postman m JSON response ye aaya

{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5M2VmNGExN2U2MThlZjhjMDM3MjUwMSIsImlhdCI6MTc2NTczMzc2MX0.sCYhFe3ll3ixcgowzv7BuQ1RLRV94GOcZM5FG5hsoOU",
    "user": {
        "name": "Saransh"
    }
}

agr email or password m kuch galat hota to 
email wrong -
to JSON response 
{
    "success": false,
    "message": "User does not exist"
}

password wrong -
to JSON response 
{
    "success": false,
    "message": "Invalid credentials"
}


ab iske baad apn userCredit k liye api create karenge userController.js file m

const userCredits = async (req, res) => {     -> Ye ek async controller function hai jo user ke credits return karta hai
    try {
        const { userId } = req.body           ->Frontend / Postman se jo request aayi hai uske body ke andar se userId nikal rahe hain

        const user = await userModel.findById(userId)    ->MongoDB database me _id ke basis par user ko search kiya ja raha hai
        res.json({ success: true, credits: user.creditBalance, user: { name: user.name } })    ->Frontend ko JSON response bhej rahe ho jisme:
success: true → request successful
credits → user ke bache hue credits
user.name → user ka naam
⚠️ Password intentionally nahi bhej rahe (security reason)
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })   -> Agar code me kahin error aa jaye
(invalid userId, DB issue, etc.)
to server crash na ho
aur error message frontend ko mil jaye
    }
}

ab iske baad middlewares folder banaya usme auth.js file

auth ->

auth.js ek middleware file hoti hai
jo check karti hai:
“User logged in hai ya nahi?”
User authorized hai ya nahi
Token valid hai ya nahi


import jwt from 'jsonwebtoken'                              -> JWT token ko verify karne ke liye library

const userAuth = async (req, res, next) => {          ->Ye middleware hai Jo route se pehle chalega Aur check karega user logged in hai ya nahi
    const { token } = req.headers     -> Frontend request ke headers me token bhejta hai, Example: headers: { "token": "eyJhbGciOiJIUzI1..." }

    if (!token) {                 
        return res.json({ success: false, message: 'Not Authorized. Login Again' })
    }         ->Agar token hi nahi aaya Matlab user login nahi hai ❌

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET) 
        ->JWT_SECRET se token ko verify kar rahe hain Fake token hoga → error throw karega

        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id ->Token ke andar jo userId hai
use request ke body me daal diya
Taaki controller use kar sake
📌 Ab controller ko userId body se lene ki zarurat nahi
            
            next(); ->Sab sahi hai Ab request ko next controller tak bhejo
        
        } else {
            return res.json({ success: false, message: 'Not Authorized. Login Again' })
        }           ->Agar token invalid / expired hai To request reject ho jaayegi

    } catch (error) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' })
    }
}

export default userAuth

Request
  ↓
Headers (token)
  ↓
userAuth middleware
  ↓
token verify
  ↓
req.body.userId set
  ↓ next()
Controller

🎯 INTERVIEW ONE-LINER
Ye middleware JWT token verify karke userId ko request me attach karta hai aur unauthorized users ko protected routes access karne se rokta hai.


Controller = function jo actual kaam karta hai

Jaise:
user register karna
user login karna
user ke credits lana
database se data lena / bhejna

Example Controller
const userCredits = async (req, res) => {
   const userId = req.body.userId
   const user = await userModel.findById(userId)
   res.json(user)
}
Controller wo jagah hai jahan
request ka data aata hai,
database se baat hoti hai,
response bheja jata hai

🧱 BACKEND STRUCTURE (REAL LIFE)
Request (Postman / Frontend)
   ↓
Middleware (auth.js)
   ↓
Controller (userController.js)
   ↓
Response

AB CONFUSION WALA PART CLEAR KARTE HAIN
Token ke andar jo userId hai use request ke body me daal diya
Taaki controller use kar sake

🔍 ISKA MATLAB KYA HAI?
Pehle (Without Middleware)

Frontend ko bhejna padta tha:

{
  "userId": "65ab1234...",
  "credits": 10
}
❌ Problem:
User fake userId bhej sakta hai
Security risk 🔴

✅ Ab (With Auth Middleware)
Frontend sirf token bhejta hai:
Headers:
{
  "token": "JWT_TOKEN"
}
Middleware kya karta hai?
const tokenDecode = jwt.verify(token, JWT_SECRET)
req.body.userId = tokenDecode.id

Token ke andar se real userId nikala
Aur req.body me daal diya

🤯 AB CONTROLLER KO KYA MILTA HAI?
Controller:
const userCredits = async (req, res) => {
   console.log(req.body.userId) // ✅ mil jaata hai
}

Controller ko lagta hai jaise
userId body me hi aaya ho
Lekin asal me middleware ne daala hai

🎯 IS LINE KA MATLAB (FINAL)

Ab controller ko userId body se lene ki zarurat nahi
Matlab:
❌ Pehle:
const { userId } = req.body   // frontend se aata tha

✅ Ab:
// userId middleware ne daala
const userId = req.body.userId

👉 Frontend se userId mat bhejo
👉 Sirf token bhejo
👉 Backend khud userId nikale

🛡️ SECURITY ADVANTAGE
Pehle	                            Ab
User userId change kar sakta tha	User kuch change nahi kar sakta
Insecure	                        Secure 🔐
Frontend pe dependent	            Backend control me

✅ ONE LINE SUMMARY

Middleware user ki identity verify karke userId request me attach karta hai, taaki controller safely database operation kar sake bina frontend pe trust kiye.


ab userRoutes.js me change karenge

import { registerUser, loginUser, userCredits } from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

userRouter.post('/credits',userAuth , userCredits)

// http://localhost:4000/api/user/credits

userAuth(middlewares) beech me rakha h taki controller ko userId body se lene ki zarurat nahi


ab iske baad check karenge to postman m jake 
http://localhost:4000/api/user/credits
ye link chalaenge aur headers m jake key me token aur value me jo bhi token ki value ho wo add krke send kr denge

{
    "success": true,
    "credits": 5,
    "user": {
        "name": "Saransh"
    }
}

to credits ka key aajaega aur pta chal jaega ki kitne credits left hai

ab iske baad api create karenge to generate the image creating prompt 

to controller folder m imageController.js file banaenge 

import userModel from "../models/userModel.js"; -> MongoDB user collection
import FormData from "form-data";               -> API ko form format me data bhejne ke liye
import axios from "axios";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;    ->userId → auth middleware se aata hai, prompt → user ka likha hua text

        const user = await userModel.findById(userId);  -> Check karta hai user exist karta hai ya nahi

        if (!user || !prompt) {
            return res.json({ success: false, message: "Missing Details" });
        }  ->❌ User nahi mila ❌ Prompt empty 👉 To request reject

        if (user.creditBalance <= 0) {   -> Agar credit 0 ho ya negative ho → image generate nahi
            return res.json({
                success: false,
                message: "No Credit Balance",
                creditBalance: user.creditBalance
            });
        }

        const formData = new FormData();
        formData.append("prompt", prompt);      -> Clipdrop API ko prompt bhejne ke liye function banaya h formData

        const { data } = await axios.post(     
            "https://clipdrop-api.co/text-to-image/v1",
            formData,
            {
                headers: {
                    "x-api-key": process.env.CLIPDROP_API,
                },
                responseType: "arraybuffer",
            }
        );           -> Clipdrop API se image binary form me aati hai

        const base64Image = Buffer.from(data, "binary").toString("base64");   -> Binary → Base64 image, Browser-friendly image banayi
        const resultImage = `data:image/png;base64,${base64Image}`;

        await userModel.findByIdAndUpdate(user._id, {
            creditBalance: user.creditBalance - 1,
        });                           -> User ka 1 credit use ho gaya to -1 kr diya

        res.json({
            success: true,
            message: "Image Generated",
            creditBalance: user.creditBalance - 1,
            resultImage,
        });                  -> resonse bhej diya frontend ko

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

user.creditBalance <= 0
iski jagah ye likha tha
user.creditBalance === 0 || userModel.creditBalance < 0
yaha pr userModel schema hai, actual user nahi 

ab image generate karane k liye clipdrop ka use kiya jisme 100 credit free h
islie .env file m 
CLIPDROP_API = "20ee2681243de91ff7ddd1826a68d1fefce38e207d379f33130203320f77127e567d0aca916b9f2ceff087c04595987f"

const { data } = await axios.post(     
            "https://clipdrop-api.co/text-to-image/v1",
            formData,
            {
                headers: {
                    "x-api-key": process.env.CLIPDROP_API,
                },
                responseType: "arraybuffer",
            }
        );  -> baki ye links aur header sb clipdrop se hi likha h

ab ye controller function bn gaya jo prompt lega aur image generate krega aur bhej dega jo screen p display hoga

ab iske baad routes folder m imageRoutes.js file banaenge jo
Agar koi /api/image/generate pe aaye
→ pehle userAuth check karo
→ phir generateImage kaam karega

import express from 'express'                               -> Routing ke liye express chahiye
import {generateImage} from '../controllers/imageController.js'  ->✔ Ye actual logic hai:
prompt lena
credit check
AI API call
image return
👉 Route sirf call karta hai
👉 Logic controller me hota hai

import userAuth from '../middlewares/auth.js'       ->✔ Ye security guard hai 🛡️
✔ Check karega:
token hai ya nahi
token valid hai ya nahi
userId nikalega
 
const imageRouter = express.Router()   ->✔ Express ka mini-app  ✔ Isme image related routes rakhenge

imageRouter.post('/generate-image', userAuth, generateImage)     ->Ye tab banta hai jab server.js me use hota hai

export default imageRouter

// http://localhost:4000/api/image/generate-image

ye image ka route bana diya 

fir server.js me iska link ready kiya jisse work kare
import imageRouter from './routes/imageRoutes.js'
app.use('/api/image', imageRouter)

iske baad postman me gaye waha 
http://localhost:4000/api/image/generate-image
ye link use kiya post pe aur headers m token aur uski value add kari 
aur body m raw me jake ye object likha
{
    "prompt": "flying Cat"
}

aur fir ye response aaya
    "success": true,
    "message": "Image Generated",
    "creditBalance": 4,
    "resultImage": "data:image/png;base64,  -> ye aage bhi bahot bada hai 

ab isme ek credit bhi km ho gaya kyoki ek image genereate ho gayi







ab backend ko frontend se connect karenge jisme  cors ka use hoga





ab client me gaye context folder m AppContext.jsx file m 
const [token, setToken] = useState(localStorage.getItem('token'))
const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit
    }

ye token aur credit add kiye aur backendurl jo h vo .env file se le liya jo nayi bahayi 

.env file me
VITE_BACKEND_URL=http://localhost:4000

ab iske baad toastify aur axios npm install kiye 

aur fir App.jsx m jake
import { ToastContainer } from 'react-toastify';
<ToastContainer position='bottom-right'/>
add kiya

fir uske baad login.jsx me jake

import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Login')
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

  console.log("Backend URL 👉", backendUrl)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Login') {
        const {data} = await axios.post(backendUrl + '/api/user/login', {email, password}) 

        if (data.success) {
        setToken(data.token)
        setUser(data.user)
        localStorage.setItem('token', data.token)
        setShowLogin(false)

      }else{
        toast.error(data.message)
      }                                                   -> ye to iske liye jb user already login tb

      } else {
        const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password}) 

        if (data.success) {
        setToken(data.token)
        setUser(data.user)
        localStorage.setItem('token', data.token)
        setShowLogin(false)
        
      }else{
        toast.error(data.message)
      }                                                  -> ye ab naya user ho tb
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

ye axios wala code lika aur form m jake onSubmitHandler add kiya aur name email aur password k liye onhange add kiya

 <motion.form onSubmit={onSubmitHandler}

 <input onChange={e=> setName(e.target.value)} value={name} type="text" className='outline-none text-sm' placeholder='Full Name' required />
 <input onChange={e=> setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm' placeholder='Email-Id' required />
 <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm' placeholder='Password' required />


