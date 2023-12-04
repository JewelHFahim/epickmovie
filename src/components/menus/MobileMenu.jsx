import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import menuIcon from "../../assets/menu icon.svg"
import movieIcon from "../../assets/movieIcon.svg"
import homeIcon from "../../assets/homeIcon.svg"
import webIcon from "../../assets/www.svg"
import { FaMinus, FaPlus } from "react-icons/fa6";


const dropdownNavs = [
            {
                title: "Hollywood",
                path: "javascript:void(0)",
                icon: homeIcon,
            },
            {
                title: "Bollywood",
                path: "javascript:void(0)",
                icon: homeIcon,
            },
            {
                title: "Dual Audio",
                path: "javascript:void(0)",
                icon: homeIcon,
            },
            {
                title: "Tamil",
                path: "javascript:void(0)",
                icon: homeIcon,
            },
            {
                title: "Telugu",
                path: "javascript:void(0)",
                icon: homeIcon,
            },
            {
                title: "Bengali",
                path: "javascript:void(0)",
                icon: homeIcon,
            },
]

 const MobileMenu = () => {

    const [state, setState] = useState(false)
    const [drapdownState, setDrapdownState] = useState({ isActive: false, idx: null })

    const navigation = [
        { title: "Movies", path: "javascript:void(0)", isDrapdown: true, navs: dropdownNavs },
        { title: "GENRE", path: "javascript:void(0)", isDrapdown: true, navs: dropdownNavs },
        { title: "YEAR", path: "javascript:void(0)", isDrapdown: true, navs: dropdownNavs },
        { title: "QUALITY", path: "javascript:void(0)", isDrapdown: true, navs: dropdownNavs },
        { title: "Home", path: "javascript:void(0)", isDrapdown: false},
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, [])

    return (
        <>
            <nav className={`mt-[15px] relative z-20 bg-white w-full md:static md:text-sm md:border-none 
            ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>

                <div className="items-center gap-x-14 px- max-w-screen-xl mx-auto md:flex md:px-8 bg-[#464646]">

                    <div className="flex justify-between items-center p-2 border-b-[.5px] border-[#2D2C2C]">

                        <a href="javascript:void(0)" className="text-[14px] font-[600] font-inter text-[#BDBBBB]"> MENU </a>

                        <div className="md:hidden">
                            <button onClick={() => setState(!state)} className='flex justify-center items-center'>
                                {
                                    state ? (
                                        <IoClose className='text-[20px] text-[#BDBBBB]'/>

                                    ) : (
                                        <img src={menuIcon} alt="" className='w-[20px] h-[17px]'/>
                                    )
                                }
                            </button>
                        </div>

                    </div>

                    <div className={`nav-menu flex-1 pb-3 ${state ? 'block' : 'hidden'}`}>

                        <ul className="items-center">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx}>

                                            {
                                                item.isDrapdown ? (
                                                    <button className="w-full h-[46px] flex items-center justify-between text-white text-[14px] font-inter font-[600] border-b-[.5px] border-[#2D2C2C]"
                                                        onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                                    >
                                                        <span className='ml-2 flex items-center gap-3 border-r border-[#2D2C2C] w-[93%] h-full text-[14px] font-[600] font-inter'> 
                                                        <img src={movieIcon} alt="" className='w-[26px] h-[20px]'/>
                                                         {item.title}
                                                         </span>

                                                        {
                                                            drapdownState.idx == idx && drapdownState.isActive ? (
                                                                <FaMinus className='text-[26px] mx-2 w-[7%]'/>
                                                            ) : (
                                                                <FaPlus className='text-[26px] mx-2  w-[7%]'/>
                                                            )
                                                        }
                                                    </button>
                                                ) : (
                                                    <a href={item.path} className="flex items-center gap-2 p-2 text-[18px] font-inter font-[600] text-white">
                                                        <img src={webIcon} alt="" className='w-[22px] h-[22px]'/>
                                                        {item.title}
                                                    </a>
                                                )
                                            }

                                            {
                                                item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                                                    <div className="">
                                                        <ul className=''>
                                                        {
                                                            dropdownNavs?.map((item, i) => (
                                                        <li key={i} className='flex  items-center gap-2 text-white px-2 py-1 border-b-[.5px] border-[#2D2C2C]'>
                                                            <img src={item.icon} alt="" className='w-[21px] h-[21px]'/>
                                                            <a href="" className='text-[18px] font-inter font-[600]'>{item.title}</a>
                                                        </li>
                                                            ))
                                                        }
                                                        </ul>
                                                    </div>
                                                ) : ""
                                            }
                                        </li>
                                    )
                                })
                            }

                        </ul>

                    </div>

                </div>
            </nav>

            {
                state ? (
                    <div
                        className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setState(false)}></div>
                ) : ""
            }
        </>
    )
}

export default MobileMenu;