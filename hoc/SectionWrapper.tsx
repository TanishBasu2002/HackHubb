/* eslint-disable react/react-in-jsx-scope */

import { staggerContainer } from "@/utils/motion"
import { styles } from "@/utils/styles"
import { motion } from "framer-motion"


const SectionWrapper = ({Component, idName}:any) => 
  function HOC() {
    return (
        <motion.section
            variants={staggerContainer("")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>&nbsp;</span>
            <Component />
        </motion.section>
    )
  }


export default SectionWrapper