import Head from 'next/head'
import { useRouter } from 'next/router'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment, useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import Cookies from 'js-cookie'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import axios from 'axios'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const videoRef2 = useRef();
  const videoRef = useRef();
  const router = useRouter()
  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const animationVariants2 = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const animationControls = useAnimation();
  const animationControls2 = useAnimation();
  const firstRef = useRef();
  const seccondRef = useRef();

  const statusRef = useRef(null);
  const pointsRef = useRef(null);
    
  useEffect(() => {
    setTimeout(()=>{
      videoRef2.current.play();
    },500);
      setTimeout(()=>{
        animationControls2.start("hidden")
      },1200);
      setTimeout(() => {
        videoRef2.current.style.display = "none";
      },1550);
    window.requestAnimationFrame(welcome);

  axios({
    method: 'get',
    url: 'https://rygb.tech:8443/getStatus?email=' + "mmredblock6@gmail.com",
  }).then(async function (response) {
    var status = response.data;
    if (status === "Online") {
      statusRef.current.className = "absolute bottom-0 right--1 inline-block w-5 h-5 bg-green-600 border-4 border-neutral-800 rounded-full";
    } else if (status === "AFK") {
      statusRef.current.className = "absolute bottom-0 right--1 inline-block w-5 h-5 bg-yellow-600 border-4 border-neutral-800 rounded-full";
    } else if (status === "DND") {
      statusRef.current.className = "absolute bottom-0 right--1 inline-block w-5 h-5 bg-red-600 border-4 border-neutral-800 rounded-full";
    } else if (status === "Invis") {
      statusRef.current.className = "absolute bottom-0 right--1 inline-block w-5 h-5 bg-gray-600 border-4 border-neutral-800 rounded-full";
    }
  });
  }, [router.isReady]);

  function welcome() {
    
  }

  function expand(i) {
    const buttons = document.getElementsByClassName(styles.button);
    const details = document.getElementById(i);
    const desc = document.getElementById(i + "desc");
    const grid = document.getElementById("grid")
    console.log(details)
    const btnanim = details.animate({"opacity": "0"}, {duration: 450});
    
    buttons[i].classList.add(styles.imageRotateHorizontal)
    buttons[i].style.zIndex = "99";
    setTimeout(() => {
      
      for (var it = 0; it < buttons.length; it++) {
        if (buttons[it] != buttons[i]) {
          const btnanim2 = buttons[it].animate({"opacity": "0"}, {duration: 300});
          btnanim2.onfinish = function() {
            buttons[it].style.display = "none";
            
          }
        }
      }
      
    }, 250);
    setTimeout(() => {
      buttons[i].classList.remove(styles.imageRotateHorizontal)
      grid.style.gridTemplateColumns = "80%"
      buttons[i].style.width = "25%"
      buttons[i].style.transform = "translateX(-150%)"
      
      const moveanim1 = buttons[i].animate({"transform":"translateX(0%)"}, {duration: 400});
      moveanim1.onfinish = () => {
        buttons[i].style.transform = "translateX(0%)"
        setTimeout(() => {
          const widthanim1 = buttons[i].animate({"width" : "100%"}, {duration: 400})
          widthanim1.onfinish = () => {
            buttons[i].style.width = "100%"
            desc.innerHTML;
            const detailsanim = details.animate({"opacity": "1"}, {duration: 300});
            detailsanim.onfinish = () => {
              details.style.opacity = 1;
            }
          }
        }, 200);
      }
    }, 500)
    
    btnanim.onfinish = function() {
      details.style.opacity = "0";
      
    }
    
  }

  function onboarding() {
    console.log("onboarding")
    var buttons = document.getElementsByClassName(styles.button);
    console.log(buttons[0]);
    var header = document.getElementsByClassName(styles.headerContainer);
    const anim = header[0].animate({"opacity": 0}, {duration: 200});
    const b1 = document.getElementById("b1");
    const r1 = document.getElementById("r1");
    anim.onfinish = function() {
      header[0].style.opacity = 0;
    }
    for (var i = 0; i < buttons.length; i++) {
      setTimeout(() => {
            /*
            buttons[i].style.transform = "scale(0)"
            buttons[i].style.opacity = 0;
            buttons[i].style.display = "block";
            */
        const btnanim3 = buttons[i].animate({"transform": "scale(0)"}, {duration: 300});
        btnanim3.onfinish = function() {
          buttons[i].style.transform = "scale(0)";
        }

      }, i * 50)
    }
    setTimeout(() => {
      b1.style.opacity = 1;
      r1.style.borderRadius = "0px, 0px, 0px, 0px"
      const ranimation = r1.animate({"width": "83.5%", "transform": "translate(-40.2%, 0%"}, {duration: 300});
      ranimation.onfinish = function() {
        r1.style.width = "83.5%";
        r1.style.transform = "translate(-40.2%, 0%)";
        setTimeout(() => {
          router.push("/onboarding");
        }, 100);
      }
    }, 350);
  }

  async function redirect(to, id) {
    if (router.isReady) {
      videoRef.current.style.display = "block";
      animationControls.start("visible")

      setTimeout(500);
      videoRef.current.play()
      setTimeout(() => {
        if (to == "portal") {
        router.push('https://rygb.tech/portal/index.php?from=notes')
      } else if (to == "live") {
        //do stuff
        router.push('live?email=' + "mmredblock6@gmail.com")
      } else if (to == "buy") {
        //do stuff
        router.push('buy?email=' + "mmredblock6@gmail.com")
      } else if (to == "service") {
        if (id == "Minecraft") {
          router.push('https://rygb.tech/error.php?error=service_not_ready&service=Minecraft&redirect=https://notes.rygb.tech');
        } else if (id == "Live") {
          router.push('https://rygb.tech/error.php?error=service_not_ready&service=Live&redirect=https://notes.rygb.tech');
        } else if (id == "Chats") {
          router.push('https://rygb.tech/error.php?error=service_not_ready&service=Chats&redirect=https://notes.rygb.tech');
        } else if (id == "Feedback") {
          router.push('https://rygb.tech/error.php?error=service_not_ready&service=Feedback&redirect=https://notes.rygb.tech');
        } else if (id == "Accounts") {
          router.push('https://rygb.tech/accounts/index.php?redirect=https://notes.rygb.tech');
        }
      } else if (to == "onboarding") {
        window.requestAnimationFrame(onboarding);
      } else if (to == "details") {
        window.requestAnimationFrame(function() {
          expand(id)
        });
      }
      }, 0);
      
    }
  }

  if ("mmredblock6@gmail.com" == undefined && router.isReady) {
    router.push('https://rygb.tech/accounts/signin/index.php?redirect=https://rygb.tech/notes')
  }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta property="og:description" content="Jot down your important ideas or notes." />
        <meta name="theme-color" content="#fff200" />
        <title>Meet Manager - RYGB</title>
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5587418094315968" strategy="worker"/>
        <meta name="Description" content="Jot down your important ideas or notes." />
        <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
        <meta name="robots" content="index,follow" />
        <meta name="twitter:title" content="Notes - RYGB" />
        <meta name="twitter:description" content="Jot down your important ideas or notes." />
        <meta name="twitter:image" content="https://rygb.tech/portal-banner-no-transp.png" />
        <meta name="twitter:site" content="https://rygb.tech/notes" />
        <meta name="twitter:creator" content="@rygbtech" />
        <meta property="og:title" content="Stay tuned @ RYGB" />
        <meta property="og:url" content="https://rygb.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rygb.tech/portal-banner-no-transp.png" />
        <link rel="apple-touch-icon" href="https://rygb.tech/appletouch.png" />
        
      </Head>
      <div id={styles.logo}>
         <img src="cornermgr.png" width="230" height="230" />
      </div>

      <div id="b1" className={styles.bcorners1}>
      </div>
      
      <div id="r1" className={styles.rcornersindex}>
        <div id="header" className={styles.headerContainer}>
          <h1 id="meet" className={styles.htext} ref={firstRef}>Meet </h1><h1 id="manager" className={styles.gradient}> Manager</h1>
          <h3 id="meet" className={styles.text} ref={firstRef}>Instant Access to amazing services.</h3>
        </div>
      </div>

      
      <div>
        <Disclosure as="nav" className="bg-neutral-800" id={styles.profile}>
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="inset-y-0 right-0 flex items-center pr-2 sm:ml-6 sm:pr-0">

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <div className="relative inline-block">
                          <span id="status" ref={statusRef} className="absolute bottom-0 right--1 inline-block w-5 h-5 bg-green-600 border-4 border-neutral-800 rounded-full"></span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://rygb.tech/chats/corneraccountsa.png"
                            alt=""
                          />
                        </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="bg-neutral-500 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://rygb.tech/accounts/create/change.php?setting=status&redirect=https://notes.rygb.tech"
                                className={classNames(active ? 'bg-neutral-600' : '', 'block px-4 py-2 text-sm text-white')}
                              >
                                <p className={styles.menutext}>Change Status</p>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://rygb.tech/accounts/index.php?redirect=https://notes.rygb.tech"
                                className={classNames(active ? 'bg-neutral-600' : '', 'block px-4 py-2 text-sm text-white')}
                              >
                                <p className={styles.menutext}>Settings</p>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://rygb.tech/accounts/create/validatechange.php?setting=signout"
                                className={classNames(active ? 'bg-neutral-600' : '', 'block px-4 py-2 text-sm text-white')}
                              >
                                <p className={styles.menutext}>Sign Out</p>
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <video muted id={styles.video} ref={videoRef} style={{display:"none"}}><source src="pointsintro.mp4" type="video/mp4" /></video>
      </motion.div>
      <motion.div
        initial={"visible"}
        animate={animationControls2}
        variants={animationVariants2}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <video muted id={styles.video} ref={videoRef2} style={{display:"block"}}><source src="pointsoutro.mp4" type="video/mp4" /></video>
      </motion.div>
      
    </div>
  )
}
