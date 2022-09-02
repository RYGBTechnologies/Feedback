import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import Cookies from 'js-cookie'
import axios from 'axios'
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

  function showModal() {
    const modal = document.getElementById("smallmodal");
    const anim = modal.animate({transform: "translateX(-50%) translateY(0) scale(1)"}, {duration: 1000, ease: "easeInOut"})
    anim.onfinish = () => {
      modal.style.transform = "translateX(-50%) translateY(0) scale(1)"
    }
  }

  function hideModal() {
    const modal = document.getElementById("smallmodal");
    const anim = modal.animate({transform: "translateX(-50%) translateY(-500%) scale(0)"}, {duration: 1000, ease: "easeInOut"})
    anim.onfinish = () => {
      modal.style.transform = "translateX(-50%) translateY(-500%) scale(0)"
    }
  }

  useEffect(() => {
    if (debouncedStars && router.isReady || stars === 0) {
      rate(stars)
    }
  }, [debouncedStars]);

  function starBounceAnimation() {
    const star = document.getElementById("star");
    const anim = star.animate({transform: "scale(1.3)", filter: "brightness(1.5)"}, {duration: 300, ease: "easeInOut"})
    anim.onfinish = () => {
      star.style.transform = "scale(1.3)"
      star.style.filter = "brightness(1.3)"
      document.getElementById("totalstars").innerHTML = parseInt(document.getElementById("totalstars").innerHTML) + 1;
      const anim2 = star.animate({transform: "scale(1)", filter: "brightness(1)"}, {duration: 300, ease: "easeInOut"})
      anim2.onfinish = () => {
        star.style.transform = "scale(1)"
        star.style.filter = "brightness(1)"
      }
    }
  }

  function rate(num) {
    const starelems = [];
    for(let i = 1; i <= num; i++) {
      starelems.push(document.getElementById(`fstar${i}`));
    }
    if (stars === 0) {
      return;
    } else if (stars === 1) {
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
    if ("mmredblock62@gmail.com" != undefined) {
      axios({
        method: 'post',
        url: 'https://rygb.tech:8443/addStoreFeedback',
        body: {
          stars: stars,
          email: "mmredblock62@gmail.com",
          store: store,
          date: new Date().toISOString(),
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })
    } else {
      axios({
        method: 'post',
        url: 'https://rygb.tech:8443/addAnonymousStoreFeedback',
        body: {
          stars: stars,
          date: new Date().toISOString(),
          store: store,
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
    
    console.log(starelems)
    var duration = 1300;
    if (stars === 1) {
      duration = 1000;
    }
    for(let i = 0; i < starelems.length; i++) {
      starelems[i].style.display = "block"
      const anim = starelems[i].animate({transform: "translate(-3%, 60%) rotate(0deg)"}, {duration: duration, delay: i * 300, ease: "easeInOut"});
      anim.onfinish = () => {
        starelems[i].style.transform = "translate(-3%, 40%) rotate(0deg)"
        document.getElementById(`star${i + 1}`).src = "star-filled.png";
        starelems[i].style = "";
        starelems[i].style.opacity = "0"
        starelems[i].style.transform = "translate(-3%, 40%) rotate(-360deg)"
      }
      if (i == starelems.length - 1) {
        setTimeout(() => {
          const text = document.getElementById("text")
          const anim = text.animate({transform: "scale(1.05)"}, {duration: 200});
          anim.onfinish = () => {
            showModal();
            text.style.transform = "scale(1.05)";
            text.innerHTML = "Thank you for your feedback.";
            const anim2 = text.animate({transform: "scale(1)"}, {duration: 200});
            anim2.onfinish = () => {
              text.style.transform = "scale(1)";
            }
            for (let i2 = 0; i2 < starelems.length; i2++) {
              setTimeout(() => {
                starelems[i2].style.opacity = "1"
              }, i2 * 300)
              starelems[i2].style.transform = "translate(-3%, 40%) rotate(-360deg)"
              const anim3 = starelems[i2].animate({transform: "translate(-50%, -500%) rotate(0deg)", left: "50%", marginTop: "15px"}, {duration: 700, delay: i2 * 300});
              anim3.onfinish = () => {
                starBounceAnimation();
                starelems[i2].style.transform = "translateX(-50%) translateY(-500%) rotate(0deg)"
                starelems[i2].style.opacity = "0"
                starelems[i2].style.left = "50%"
                starelems[i2].style.marginTop = "15px"
              }
            }
          };
        }, 3000)
      }
    }
  }

  useEffect(() => {
    welcome();
    console.log("router.query: ", router.query)
    if (router.query.store != undefined) {
      setStore(router.query.store)
    } else {
      setStore("RYGB")
    }
    
  }, [router.isReady]);

  const [store, setStore] = useState("")
  const debouncedStore = useDebounce(store, 200)

  useEffect(() => {
    if (debouncedStore) {
      axios({
        method: 'get',
        url: 'https://rygb.tech:8443/getStoreStars?name=' + store
      }).then(function(response) {
        document.getElementById("totalstars").innerHTML = response.data;
      }).catch(function(error) {
        console.log(error);
      })
    }
  }, [debouncedStore]);

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

      <div id="smallmodal" className={styles.smallmodal}>
        <img alt="Star" onClick={() => setStars(1)} src="star-filled.png" width="60px" id="star"></img>
        <h1 id="totalstars" className={styles.text} style={{fontSize: "40px"}}>-</h1>
      </div>

      <div className={styles.itemsgrid}>
        <h1 className={styles.text} id="text">How was your experience at RYGB?</h1>
        <div id="stars" className={styles.stargrid}>
          <img alt="1 Star" onClick={() => setStars(1)} className={styles.star} src="star.png" id="star1"></img>
          <img alt="2 Stars" onClick={() => setStars(2)} className={styles.star} src="star.png" id="star2"></img>
          <img alt="3 Stars" onClick={() => setStars(3)} className={styles.star} src="star.png" id="star3"></img>
          <img alt="4 Stars" onClick={() => setStars(4)} className={styles.star} src="star.png" id="star4"></img>
          <img alt="5 Stars" onClick={() => setStars(5)} className={styles.star} src="introstar.png" id="star5"></img>
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