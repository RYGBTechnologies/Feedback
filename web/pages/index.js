import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import Cookies from 'js-cookie'
import styles from '../styles/Home.module.css'

export default function Home() {
  const videoRef = useRef();
  const router = useRouter()
  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const animationControls = useAnimation();
  const [stars, setStars] = useState(0)
  const debouncedStars = useDebounce(stars, 1000)
  
  function welcome() {
    const stars = document.getElementsByClassName(styles.star);
    for (let i = 0; i < stars.length - 1; i++) {
      stars[i].style.poisiton = "absolute";
      stars[i].style.transform = "translate(0, 0) rotate(360deg)";
    }
    stars[4].style.transform = "translate(-200px, -100px) rotate(-180deg) scale(15)"
    const anim = stars[4].animate({transform: "translate(0, 0) rotate(0deg) scale(1)"}, {duration: 800, ease: "easeInOut"})
    anim.onfinish = () => {
      stars[4].style.transform = "translate(0, 0) rotate(0deg) scale(1)"
    }
  }

  useEffect(() => {
    if (debouncedStars && router.isReady || stars === 0) {
      rate(stars)
    }
  }, [debouncedStars]);

  function rate(num) {
    const starelems = [];
    for(let i = 1; i <= num; i++) {
      starelems.push(document.getElementById(`fstar${i}`));
    }
    if (stars === 1) {
      const audio = new Audio('1star.mp3')
      audio.play()
    } else if (stars === 2) {
      const audio = new Audio('2star.mp3')
      audio.play()
    } else if (stars === 3) {
      const audio = new Audio('3star.mp3')
      audio.play()
    } else if (stars === 4) {
      const audio = new Audio('4star.mp3')
      audio.play()
    } else if (stars === 5) {
      const audio = new Audio('5star.mp3')
      audio.play()
    }
    console.log(starelems)
    var duration = 1500;
    if (stars === 1) {
      duration = 1000;
    }
    for(let i = 0; i < starelems.length; i++) {
      starelems[i].style.display = "block"
      const anim = starelems[i].animate({transform: "translate(-3%, 40%) rotate(0deg)"}, {duration: duration, delay: i * 300, ease: "easeInOut"});
      anim.onfinish = () => {
        //starelems[i].style.transform = "translate(-3%, 40%) rotate(0deg)"
        document.getElementById(`star${i + 1}`).src = "star-filled.png";
      }
      if (i == starelems.length - 1) {
        setTimeout(() => {
          const text = document.getElementById("text")
          const anim = text.animate({transform: "scale(1.05)"}, {duration: 200});
          anim.onfinish = () => {
            text.style.transform = "scale(1.05)";
            text.innerHTML = "Thank you for your feedback.";
            const anim2 = text.animate({transform: "scale(1)"}, {duration: 200});
            anim2.onfinish = () => {
              text.style.transform = "scale(1)";
            }
          };
        }, 2000)
      }
    }
  }

  useEffect(() => {
    welcome();
    if (router.query.store != undefined) {
      setStore(router.query.store)
    } else {
      setStore("RYGB")
    }
  }, [router.isReady]);

  const videodivRef2 = useRef(null);

  const [store, setStore] = useState("")

  if ("mmredblock62@gmail.com" == undefined && router.isReady) {
    router.push('https://rygb.tech/accounts/signin/index.php?redirect=https://manager.rygb.tech/dash')
  }

  function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
  }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <title>Feedback - RYGB</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div id={styles.logo} onClick={() => view("Dashboard")}>
         <img id="logo" src="cornermgr.png" width="230" height="230" />
      </div>

      <div className={styles.itemsgrid}>
        <h1 className={styles.text} id="text">How was your experience at RYGB?</h1>
        <div id="stars" className={styles.stargrid}>
          <img onClick={() => setStars(1)} className={styles.star} src="star.png" id="star1"></img>
          <img onClick={() => setStars(2)} className={styles.star} src="star.png" id="star2"></img>
          <img onClick={() => setStars(3)} className={styles.star} src="star.png" id="star3"></img>
          <img onClick={() => setStars(4)} className={styles.star} src="star.png" id="star4"></img>
          <img onClick={() => setStars(5)} className={styles.star} src="introstar.png" id="star5"></img>
        </div>
        <div id="filledstars" className={styles.filledstars}>
          <img id="fstar1" style={{display: "none"}} className={styles.fstar} src="beatstar-star.gif"></img>
          <img id="fstar2" style={{display: "none"}} className={styles.fstar} src="beatstar-star.gif"></img>
          <img id="fstar3" style={{display: "none"}} className={styles.fstar} src="beatstar-star.gif"></img>
          <img id="fstar4" style={{display: "none"}} className={styles.fstar} src="beatstar-star.gif"></img>
          <img id="fstar5" style={{display: "none"}} className={styles.fstar} src="beatstar-star.gif"></img>
        </div>
      </div>
      
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <video muted id={styles.video} ref={videoRef} style={{display:"none"}}><source src="animatedbackground-intro.mp4" type="video/mp4" /></video>
      </motion.div>
    </div>
  )
}