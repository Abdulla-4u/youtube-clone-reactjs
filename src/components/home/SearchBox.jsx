import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import debounce from "lodash.debounce";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const SearchBox = () => {

  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const controllerRef = useRef(null);
  const lastQueryRef = useRef("");
  

  const { searchTerm, setSearchTerm,} = useContext(AppContext);
  const navigate = useNavigate();

     

  const showSuggestion = useCallback(async (term) => {
    if (!term?.trim() || term === lastQueryRef.current) {
      setSearchSuggestions([]);
      return;
    }

    lastQueryRef.current = term; 

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    const SEARCH_SUGGESTION_URL = import.meta.env.VITE_SEARCH_SUGGESTION_URL
    const apiUrl = `${SEARCH_SUGGESTION_URL}${encodeURIComponent(term)}&limit=5&namespace=0&format=json&origin=*`;

    try {
      const { data } = await axios.get(apiUrl, { signal: controller.signal });
      setSearchSuggestions(data[1] || []);
    } catch (error) {
      if (error.name !== "AbortError") console.error("Error fetching suggestions:", error);
    }
  }, [setSearchSuggestions]);

  const debouncedFetch = useMemo(() => debounce(showSuggestion, 300), [showSuggestion]);

  useEffect(() => {
    debouncedFetch(searchTerm);
    return () => debouncedFetch.cancel();
  }, [searchTerm, debouncedFetch]);


  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      const nextIndex = activeIndex < searchSuggestions.length - 1 ? activeIndex + 1 : 0;
      setActiveIndex(nextIndex);
      setSearchTerm(searchSuggestions[nextIndex]);
    } else if (e.key === "ArrowUp") {
      const prevIndex = activeIndex > 0 ? activeIndex - 1 : searchSuggestions.length - 1;
      const selectedSuggestion = searchSuggestions[activeIndex];

      setActiveIndex(prevIndex);
      setSearchTerm(selectedSuggestion);
      navigate(`/search/${selectedSuggestion}`);

    } else if (e.key === "Enter") {
      e.preventDefault(); 
      
      if (activeIndex >= 0 && searchSuggestions[activeIndex]) {
        const selectedSuggestion = searchSuggestions[activeIndex];
        
        setSearchTerm(selectedSuggestion);
        setIsFocused(false);
        setActiveIndex(-1);
        
        navigate(`/search/${selectedSuggestion}`);
      } else {
        handleSubmit(e); 
      }
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
      setIsFocused(false);
      setActiveIndex(-1);
    }
  };



  return (
    <div className='relative dark:bg-dark-surface dark:border-dark-text-muted rounded-full items-center justify-between h-10 w-[45%] border border-[#C6C6C6] flex sm:flex-none flex-1 sm:mx-0 mx-5 pl-4 backdrop-blur-sm outline-1'>
         <form
            onSubmit={handleSubmit}
            className={`relative h-full w-full flex items-center`}   
           >
            <input
              type="text"
              name="text"
              placeholder="Search"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onKeyDown={handleKeyDown}
              className="bg-light-background dark:bg-dark-surface dark:text-dark-heading placeholder:text-light-text-secondary shadow-2xl flex-1 w-44 h-full border-none outline-none text-sm "
              id="input"
            />
            <button
              type="submit"
              className="flex items-center justify-center cursor-pointer border-l border-[#C6C6C6] dark:border-dark-text-muted px-4 h-full bg-[#F8F8F8] hover:bg-[#F0F0F0] dark:bg-[#222222] rounded-tr-full rounded-br-full transition-colors duration-300 "
            >
              <IoSearchOutline              
                size={20}
                className="cursor-pointer dark:text-dark-text"
              />
            </button>
          </form>


            <AnimatePresence>
               {isFocused && searchSuggestions.length > 0 && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10, rotateX: -15, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                   exit={{ opacity: 0, y: 10, rotateX: -15, scale: 0.95 }}
                   transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }} 
                   className="absolute top-11 left-0 w-[92%] max-h-[32rem] bg-light-background dark:bg-light-surface-contrast border dark:border-dark-text-muted rounded-lg shadow-lg z-50"
                 >
                   <ul className={`${searchSuggestions && "py-2"}`}>
                     {searchSuggestions.map((suggestion, index) => (
                       <motion.li
                         initial={{ opacity: 0, x: -15, scale: 0.95 }}
                         animate={{ opacity: 1, x: 0, scale: 1 }}
                         exit={{ opacity: 0, x: 15, scale: 0.95 }}
                         transition={{
                           delay: index * 0.04,
                           duration: 0.2,
                           ease: "easeOut",
                         }} 
                         key={index}
                         className={`px-4 flex items-center gap-3 py-2 hover:bg-light-surface dark:hover:bg-light-overlay ${
                           activeIndex === index && "bg-light-surface dark:bg-light-overlay"
                         }  cursor-pointer text-dark-secondary dark:text-[#F5F5F5]`}
                         onClick={() => {
                          setSearchTerm(suggestion); 
                          setIsFocused(false); 
                          setActiveIndex(-1); 
                          navigate(`/search/${suggestion}`); // ✅ Navigate on click
                        }}
                         onMouseDown={() => setSearchTerm(suggestion)}
                         onMouseEnter={() => setActiveIndex(index)}
                       >
                         <motion.span
                           initial={{ scale: 0.8, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                           transition={{ duration: 0.2, ease: "easeOut" }}
                         >
                           <IoSearchOutline
                             size={20}
                             className="cursor-pointer text-dark-secondary dark:text-[#F5F5F5]"
                           />
                         </motion.span>
                         {suggestion}
                       </motion.li>
                     ))}
                   </ul>
                 </motion.div>
               )}
             </AnimatePresence>

    </div>
  )
}

export default SearchBox








