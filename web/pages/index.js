import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import Cookies from 'js-cookie'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import anime from 'animejs';

export default function Home() {
  const videoRef = useRef();
  const router = useRouter()
  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const animationControls = useAnimation();
  const [stars, setStars] = useState(0)
  const [mode, setMode] = useState(true)
  const [isConfirmed, setIsConfirmed] = useState(false)
  var rated = 0;

  function play() {
    if (!mode) {
      setIsConfirmed(true)
      welcome()
      const playbtn = document.getElementById('playbtn')
      const anim4 = playbtn.animate({ opacity: "0" }, { duration: 500, easing: "ease-in-out" })
      anim4.onfinish = () => {
        playbtn.style.display = "none"
      }
    }

  }

  function welcome() {
    const stars = document.getElementsByClassName(styles.star);
    for (let i = 0; i < stars.length - 1; i++) {
      stars[i].style.poisiton = "absolute";
      stars[i].style.transform = "translate(0, 0) rotate(360deg)";
    }

    const lastStar = document.getElementById("star5")
    lastStar.style.transform = "translate(-170px, -100px) rotate(-180deg) scale(15)"
    const anim = lastStar.animate({ transform: "translate(0, 0) rotate(0deg) scale(1)" }, { duration: 800, ease: "easeInOut" })
    anim.onfinish = () => {
      lastStar.style.transform = "translate(0, 0) rotate(0deg) scale(1)"
    }

    if (router.query.store != undefined && router.query.mode == "fbsummary") {
      const text = document.getElementById("text");
      text.innerHTML = "Here's how " + router.query.store + " did this week"
      axios({
        method: 'get',
        url: 'https://api.rygb.tech:8443/getAverageSRating?store=' + router.query.store,
      }).then((response) => {
        console.log(response)
        setMode(false)
        if (isConfirmed == false) {
          setStars(response.data)
        }

        window.requestAnimationFrame(() => {
          rate(parseInt(response.data), false)
        })
      })
    } else if (router.query.store != undefined) {
      const text = document.getElementById("text");
      text.innerHTML = "How was your experience with " + router.query.store + "?"
    }
  }

  var reviews = []
  var soundPlayed = false

  useEffect(() => {
    if (router.isReady && stars !== 0) {
      window.requestAnimationFrame(() => {
        rate(stars)
      })
    }
  }, [stars]);

  var randomTranslate = [
    "translate(20%, 20%)",
    "translate(20%, 225%)",
    "translate(20%, 400%)",
    "translate(148%, 90%)",
    "translate(148%, 330%)",
    "translate(275%, 20%)",
    "translate(275%, 225%)",
    "translate(275%, 400%)",
  ]

  function rate(num, boolean) {
    if (rated > 1 || stars === 0) {
      return;
    }
    const blurredStar = document.getElementById("blurredStar");
    anime({
      targets: document.body,
      backgroundColor: "#393100",
      easing: "easeInOutQuad",
      duration: 5000
    })
    anime({
      targets: blurredStar,
      opacity: 1,
      translateX: Math.random * 2,
      translateY: Math.random * 2,
      scale: 1 * (num / 1.5),
      duration: 5000,
      easing: "easeInOutQuad",
    })
    setTimeout(() => {
      rated++;
      console.log("rate")
      const starelems = [];
      const star1 = document.getElementById("star1");
      const star2 = document.getElementById("star2");
      const star3 = document.getElementById("star3");
      const star4 = document.getElementById("star4");
      const star5 = document.getElementById("star5");
      starelems.push(star1)
      if (num >= 2) {
        starelems.push(star2)
      }
      if (num >= 3) {
        starelems.push(star3)
      }
      if (num >= 4) {
        starelems.push(star4)
      }
      if (num >= 5) {
        starelems.push(star5)
      }
      const actstars = Math.round(stars);

      if (mode) {
        if ("mmredblock62@gmail.com" != undefined) {
          console.log(store)
          const date = new Date();
          axios.post('https://api.rygb.tech:8443/addSFeedback', {
            store: store,
            email: "mmredblock62@gmail.com",
            stars: actstars,
            date: date
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
        } else {
          axios.post('https://api.rygb.tech:8443/addAnonymousStoreFeedback', {
            store: store,
            stars: stars,
            date: date
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }

      console.log(starelems)
      for (let i = 0; i < starelems.length; i++) {
        console.log(audioPlayed + " - " + " audio played 222")
        starelems[i].style.display = "block"
        document.getElementById(`star${i + 1}`).src = "star-filled.png";
        if (i == starelems.length - 1) {
          setTimeout(() => {
            const text = document.getElementById("text")
            const anim = text.animate({ transform: "scale(1.05)" }, { duration: 200 });
            console.log(mode)
            if (!mode) {
              axios({
                method: 'get',
                url: 'https://api.rygb.tech:8443/getSFeedback?store=' + store,
              }).then(function (response) {
                const data = response.data;
                console.log(data)
                console.log(data[0])
                setReviews(data)
                for (var i = 0; i < data.length; i++) {
                  console.log("i: " + i)
                  const review = document.createElement("div")
                  var random = Math.floor(Math.random() * randomTranslate.length)
                  review.style.transform = randomTranslate[random] + " scale(0.8)"
                  review.id = randomTranslate[random]
                  randomTranslate.splice(random, 1)
                  review.style.opacity = "0"
                  const stars = []
                  var star = document.createElement("img")
                  star.src = "star.png"
                  stars.push(star)
                  star = document.createElement("img")
                  star.src = "star.png"
                  stars.push(star)
                  star = document.createElement("img")
                  star.src = "star.png"
                  stars.push(star)
                  star = document.createElement("img")
                  star.src = "star.png"
                  stars.push(star)
                  star = document.createElement("img")
                  star.src = "star.png"
                  stars.push(star)
                  const stargrid = document.createElement("div")
                  stargrid.style.display = "grid"
                  stargrid.style.gridTemplateColumns = "auto auto auto auto auto"
                  for (var j = 0; j < stars.length; j++) {
                    stars[j].className = styles.star;
                    stars[j].style.transform = "translate(0, 0)"
                    stars[j].style.width = "5vw"
                    stargrid.appendChild(stars[j])
                  }
                  for (var i2 = 0; i2 < data[i].stars; i2++) {
                    stars[i2].src = "star-filled.png"
                  }
                  //put the star in a random position on the screen

                  const text = document.createElement("p")
                  const date = new Date(data[i].date)
                  let [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
                  text.innerHTML = data[i].from
                  text.className = styles.subtext;
                  text.style.fontSize = "1.5vw"
                  const text2 = document.createElement("p")
                  text2.innerHTML = month + "/" + day + "/" + year
                  text2.className = styles.subtext;
                  text2.style.fontSize = "1.5vw"
                  //randomly select a value from randomTranslate and set that as the reviews position
                  review.style.position = "absolute";
                  review.appendChild(stargrid)
                  review.appendChild(text)
                  review.appendChild(text2)
                  reviews.push(review)
                  console.log(review)
                  document.getElementById("reviews").appendChild(review)
                  if (i == 7) {
                    setLastReview(lastReview + 8)
                    for (var i = 0; i < reviews.length; i++) {
                      setTimeout(() => {
                        const anim = reviews[i].animate({ opacity: "1", transform: reviews[i].id + " scale(1)" }, { duration: 300, ease: "easeInOut" });
                        anim.onfinish = function () {
                          reviews[i].style.opacity = "1";
                          reviews[i].style.transform = reviews[i].id
                        };
                      }, i * 100)
                    }
                    break;
                  }
                }

              })
            }
            anim.onfinish = () => {
              text.style.transform = "scale(1.05)";
              if (mode) {
                text.innerHTML = "Thank you for your feedback.";
              } else {
                text.style.display = "none"
              }

              setTimeout(() => {
                if (router.query.mode == "kiosk") {
                  anime({
                    targets: document.body,
                    backgroundColor: "#000000",
                    easing: "easeInOutQuad",
                    delay: 500,
                    duration: 5000,
                    complete: function () {
                      anime({
                        targets: ["#text", "#logo"],
                        opacity: 0,
                        duration: 500,
                        delay: 1000,
                        easing: "easeInOutQuad",
                        complete: function () {
                          window.location.reload();
                        }
                      })
                    }
                  })
                  anime({
                    targets: [blurredStar, "#stars"],
                    opacity: 0,
                    duration: 5000,
                    easing: "easeInOutQuad",
                  })
                }
              }, 3000);
              const anim2 = text.animate({ transform: "scale(1)" }, { duration: 200 });
              anim2.onfinish = () => {
                text.style.transform = "scale(1)";
              }
              if (!mode) {
                spawnArrows()
              }
            };

          }, 500)
        }
      }
    }, 1000)
  }

  useEffect(() => {
    window.requestAnimationFrame(welcome)
    console.log("router.query: ", router.query)
    if (router.query.store != undefined) {
      setStore(router.query.store)
    } else {
      setStore("RYGB")
    }

  }, [router.isReady]);

  var timesranarr = 0;
  var page = 1;

  const [axiosReviews, setReviews] = useState([]);
  const [lastIteration, setLastIteration] = useState(0);

  useEffect(() => {
    console.log("page: " + page);
    if (page <= 1) {
      const leftp = document.getElementById("left")
      const anim = leftp.animate({ opacity: "0" }, { duration: 200 });
      anim.onfinish = () => {
        leftp.style.opacity = "0"
      }
    }
  }, [page])

  function regenerateReviews() {
    const reviewschild = document.getElementById("reviews").children;
    console.log(reviewschild)
    console.log(reviewschild.length)
    console.log("last: " + lastReview)
    console.log("lastIteration: " + lastIteration)
    for (var i = 0; i < reviewschild.length; i++) {
      console.log("iteration: " + i)
      console.log(reviewschild[i])
      setTimeout(() => {
        const anim = reviewschild[i].animate({ opacity: "0", transform: reviewschild[i].id + " scale(0.8)" }, { duration: 300, ease: "easeInOut" });
        anim.onfinish = function () {
          reviewschild[i].style.opacity = "0";
          reviewschild[i].style.transform = reviewschild[i].id + " scale(0.8)"
        }
        if (i == reviewschild.length - 2) {
          console.log("axios")
          setTimeout(() => {
            for (var i2 = 0; i2 < reviewschild.length; i2++) {
              reviewschild[i2].remove()
            }
          }, i * 350)
          setTimeout(() => {

            const data = axiosReviews;
            if (pagesAndIterations.some(e => e.page === page)) {
              //ignore
            } else {
              const object = {
                page: page,
                iteration: lastReview
              };
              pagesAndIterations = [...pagesAndIterations, object]
            }
            console.log(data)
            console.log(data[0])
            console.log(data[0].stars)
            var iterations = 0;
            for (var i3 = lastReview; i3 < data.length; i3++) {
              console.log("i3: " + i3)
              const review = document.createElement("div")
              var random = Math.floor(Math.random() * randomTranslate.length)
              review.style.transform = randomTranslate[random] + " scale(0.8)"
              review.id = randomTranslate[random]
              randomTranslate.splice(random, 1)
              review.style.opacity = "0"
              const stars = []
              var star = document.createElement("img")
              star.src = "star.png"
              stars.push(star)
              star = document.createElement("img")
              star.src = "star.png"
              stars.push(star)
              star = document.createElement("img")
              star.src = "star.png"
              stars.push(star)
              star = document.createElement("img")
              star.src = "star.png"
              stars.push(star)
              star = document.createElement("img")
              star.src = "star.png"
              stars.push(star)
              const stargrid = document.createElement("div")
              stargrid.style.display = "grid"
              stargrid.style.gridTemplateColumns = "auto auto auto auto auto"
              for (var j = 0; j < stars.length; j++) {
                stars[j].className = styles.star;
                stars[j].style.transform = "translate(0, 0)"
                stars[j].style.width = "5vw"
                stargrid.appendChild(stars[j])
              }
              for (var i2 = 0; i2 < data[i3].stars; i2++) {
                stars[i2].src = "star-filled.png"
              }
              //put the star in a random position on the screen

              const text = document.createElement("p")
              const date = new Date(data[i3].date)
              let [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
              text.innerHTML = data[i3].from
              text.className = styles.subtext;
              text.style.fontSize = "1.5vw"
              const text2 = document.createElement("p")
              text2.innerHTML = month + "/" + day + "/" + year
              text2.className = styles.subtext;
              text2.style.fontSize = "1.5vw"
              //randomly select a value from randomTranslate and set that as the reviews position
              review.style.position = "absolute";
              review.appendChild(stargrid)
              review.appendChild(text)
              review.appendChild(text2)
              reviews.push(review)
              console.log(review)
              console.log(random)
              document.getElementById("reviews").appendChild(review)
              console.log("i3 " + i3)
              console.log("iterations " + iterations)
              iterations++;
              if (iterations == 8 || iterations == 7 || iterations == data.length - lastReview) {
                console.log("iterations: " + iterations)
                setLastReview(lastReview + iterations)
                setLastIteration(iterations)
                console.log(pagesAndIterations)
                for (var i = 0; i < reviews.length; i++) {
                  setTimeout(() => {
                    console.log(reviews[i].id)
                    const anim = reviews[i].animate({ opacity: "1", transform: reviews[i].id + " scale(1)" }, { duration: 300, ease: "easeInOut" });
                    anim.onfinish = function () {
                      reviews[i].style.opacity = "1";
                      reviews[i].style.transform = reviews[i].id
                    };
                  }, i * 100)
                }
                break;
              }

            }

          }, reviewschild.length * 300)
        }
      }, i * 50)

    }

  }

  function nextPage() {
    console.log("before page: " + page)
    page++;
    console.log("after page: " + page)
    const rightp = document.getElementById("rightp")
    const anim = rightp.animate({ transform: "translateX(100%)", opacity: "0" }, { duration: 200 });
    anim.onfinish = () => {
      rightp.style.opacity = "0"
      rightp.style.transform = "translateX(-50%)"
      regenerateReviews()
      setTimeout(() => {
        const anim2 = rightp.animate({ opacity: "1", transform: "translateX(0%)" }, { duration: 200 });
        anim2.onfinish = () => {
          rightp.style.opacity = "1"
          rightp.style.transform = "translateX(0%)"
        }
      }, 200)
      if (page >= 1 && document.getElementById("left").style.display == "none" || document.getElementById("left").style.opacity == "0") {
        const leftp = document.getElementById("left")
        leftp.style.display = "block"
        leftp.style.opacity = "0"
        const anim = leftp.animate({ opacity: "1" }, { duration: 200 });
        anim.onfinish = () => {
          leftp.style.opacity = "1"
        }
      }
    }
  }

  var prevPageBool = false;

  function prevPage() {
    const rightp = document.getElementById("leftp")
    console.log(page)
    const anim = rightp.animate({ transform: "translateX(-100%)", opacity: "0" }, { duration: 200 });
    anim.onfinish = () => {
      rightp.style.opacity = "0"
      rightp.style.transform = "translateX(50%)"
      const actpage = page - 1;
      console.log(pagesAndIterations)
      for (var i = 0; i < pagesAndIterations.length; i++) {
        console.log("pagesAndIterations")
        console.log(pagesAndIterations[i])
        if (pagesAndIterations[i].page == actpage) {
          setLastReview(pagesAndIterations[i].iteration)
          console.log("last review: " + lastReview)
          console.log("last iteration: " + pagesAndIterations[i].iteration)
        }
      }
      page--;
      prevPageBool = true;

      setTimeout(() => {
        const anim2 = rightp.animate({ opacity: "1", transform: "translateX(0%)" }, { duration: 200 });
        anim2.onfinish = () => {
          rightp.style.opacity = "1"
          rightp.style.transform = "translateX(0%)"
        }
      }, 200)
    }
  }



  function spawnArrows() {
    if (timesranarr > 0) {
      return;
    }
    const arrows = document.getElementById("arrows")
    document.getElementById("arrows").style.display = "block"
    arrows.style.opacity = "0";
    document.getElementById("left").style.display = "none"
    const anim = arrows.animate({ opacity: "1" }, { duration: 200 });
    anim.onfinish = () => {
      arrows.style.opacity = "1";
    }
    document.getElementById("rightp").innerHTML = ">"
    document.getElementById("leftp").innerHTML = "<"
    timesranarr++;
  }

  const [store, setStore] = useState("")
  const [audioPlayed, setAudioPlayed] = useState("")
  const debouncedStore = useDebounce(store, 200)
  const [lastReview, setLastReview] = useState(0)
  var pagesAndIterations = [{ page: 1, iteration: 0 }];

  useEffect(() => {
    if (prevPageBool) {
      prevPageBool = false;
      regenerateReviews()
    }
  }, [lastReview])

  useEffect(() => {
    if (!mode) {
      console.log(audioPlayed + " - audio played")
      console.log(stars + " - stars")
      console.log(isConfirmed + " - is confirmed")
      if (audioPlayed == false && stars != 0 && !isConfirmed) {
        console.log("btn")
        console.log(audioPlayed)
        const play = document.getElementById("playbtn");
        play.style.display = "block";
        play.style.color = "white";
        play.style.cursor = "pointer";
        play.style.fontSize = "20px"
        const anim = play.animate({ opacity: 1 }, { duration: 500, ease: "easeInOut" })
        anim.onfinish = () => {
          play.style.opacity = 1;
        };
      } else if (audioPlayed == true) {
        window.requestAnimationFrame(function () {
          rate(stars, false)
        })
      }
    }
  }, [audioPlayed])

  useEffect(() => {
    if (debouncedStore) {
      axios({
        method: 'get',
        url: 'https://api.rygb.tech:8443/getStoreStars?name=' + store
      }).then(function (response) {
        document.getElementById("totalstars").innerHTML = response.data;
      }).catch(function (error) {
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,1,0" />
      </Head>
      <div id={styles.logo} onClick={() => view("Dashboard")}>
        <img id="logo" src="cornermgr.png" width="230" height="230" />
      </div>

      <div className={styles.itemsgrid}>
        <h1 className={styles.text} id="text">How was your experience with RYGB?</h1>
        <div id="stars" className={styles.stargrid}>
          <img alt="1 Star" onClick={() => setStars(1)} className={styles.star} src="star.png" id="star1"></img>
          <img alt="2 Stars" onClick={() => setStars(2)} className={styles.star} src="star.png" id="star2"></img>
          <img alt="3 Stars" onClick={() => setStars(3)} className={styles.star} src="star.png" id="star3"></img>
          <img alt="4 Stars" onClick={() => setStars(4)} className={styles.star} src="star.png" id="star4"></img>
          <img alt="5 Stars" onClick={() => setStars(5)} className={styles.star} src="star.png" id="star5"></img>
        </div>
        <img alt="Background Blurred Star" className={styles.starBlurred} src="star-filled.png" id="blurredStar"></img>
      </div>

      <div id="reviews">
      </div>

      <div id="arrows" style={{ display: "none" }}>
        <button onClick={() => nextPage()} id="right" className={styles.pulsebutton} style={{ right: "0", position: "absolute", marginRight: "20px", top: "50%", transform: "translateY(-50%)" }}>
          <p id="rightp" className={styles.subtext}></p>
        </button>
        <button id="left" onClick={() => prevPage()} className={styles.pulsebutton} style={{ position: "absolute", marginLeft: "20px", top: "50%", transform: "translateY(-50%)" }}>
          <p id="leftp" className={styles.subtext}></p>
        </button>
      </div>

      <div id="playbtn" className={styles.playbtn} onClick={() => play()} style={{ display: "none", opacity: "0" }}>
        <span id="span" style={{ fontSize: "100px" }} className={styles.playbtnact + " " + "material-symbols-rounded"}>
          play_arrow
        </span>
      </div>

      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <video muted id={styles.video} ref={videoRef} style={{ display: "none" }}><source src="animatedbackground-intro.mp4" type="video/mp4" /></video>
      </motion.div>
    </div>
  )
}