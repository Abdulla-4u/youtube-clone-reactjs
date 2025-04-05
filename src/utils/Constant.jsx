import { AiOutlineFlag} from "react-icons/ai";
import {RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { SlHome } from "react-icons/sl";
import { PiMusicNotes } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineTrophy } from "react-icons/hi2";


export const topSearchKeyword = [
  { name: "All", categoryId: 0 },        
  { name: "Music", categoryId: 10 },        
  { name: "Entertainment", categoryId: 24 },    
  { name: "Gaming", categoryId: 20 },       
  { name: "Blogs", categoryId: 22 },        
  { name: "News", categoryId: 25 },         
  { name: "Sports", categoryId: 17 },       
  { name: "Technology", categoryId: 28 },   
  { name: "Comedy", categoryId: 23 },    
  { name: "Pets & Animals", categoryId: 15 },    
  { name: "Styles", categoryId: 26 },    
  { name: "Film", categoryId: 1},    
  { name: "Vehicles", categoryId: 2},    
];


export const categories = [
  { name: "Home", icon: <SlHome />, categoryId: 0, type: "category" },
  { name: "Shorts", icon: <BiMoviePlay />, type: "menu"  },
  { name: "Subscription", icon: <BsCollectionPlay />, type: "menu" },
  
];

export const menus = [
  { name: "Music", icon: <PiMusicNotes />, categoryId: 10, type: "category" }, 
  { name: "Gaming", icon: <SiYoutubegaming />, categoryId: 20, type: "category" }, 
  { name: "Sports", icon: <HiOutlineTrophy />, categoryId: 17, type: "category" }, 
]


export const settings = [
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
]









