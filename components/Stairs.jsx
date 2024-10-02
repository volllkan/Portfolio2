import { motion } from "framer-motion"


const stairAnimation ={
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",  
  },
  exit: {
    top: ["100%", "0%"],
  }
};

const reverseIndex = (index) => {
  const totalStep = 6;
  return totalStep - index -1;
} 




const Stairs = () => {
  return(
    <>
      
    {/* render 6 motion divs 
    her div aynı animasyona sahip olacak stairAnimation sayesinde
    the delay for each div is calculated dinamically based on it's  reverse index,
    creating a staggered effect witjh cdecrasing delay for each subsequemt step*/}

    {[...Array(6)].map((_, index)=> {
      return (
        <motion.div key={index} variants={stairAnimation}  initial="initial" animate="animate" exit="exit"
      transition={{
        duraiton: 0.4,
        ease: "easeInOut",
        delay: reverseIndex(index) * 0.2,
      }}
      className="h-full w-full bg-white relative"
      > </motion.div> 
      );
    })}

    </>
  )
   
  
}
export default Stairs