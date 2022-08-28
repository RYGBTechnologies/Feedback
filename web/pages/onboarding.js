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
  const gridRef = useRef(null);
  const videoRef = useRef();
  const router = useRouter()
  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const animationControls = useAnimation();
  const firstRef = useRef();
  const seccondRef = useRef();
  const modal = useRef();
  const uname = useRef();
  const statusRef = useRef(null);
  const nextRef = useRef(null);
  const welcome = useRef();
  const sourceRef = useRef(null);
  const cname = useRef(null);
  const sname = useRef(null);
  const bsdesc = useRef(null);
  const mgruse = useRef(null);
  const discomgr = useRef();
  const loc = useRef(null);
  const cemail = useRef(null);
  const backdescRef = useRef(null);
  const cphone = useRef(null);

  const [highlighted, setHighlighted] = useState("");

  function triggerButtonAnimate(i) {
    console.log("i =" + i)
    const button = document.getElementsByClassName(styles.sbutton)[i];
    console.log(button)
    setHighlighted(button)
    console.log(highlighted)
    const actanim = {
      "transform": "translateX(-5px) translateY(-2px)",
      "marginLeft": "5px",
      "marginRight": "5px",
      "boxShadow": "10px 10px 33px #08080854, -9px -9px 33px #00000046",
      "fontSize": "1.2em",
    }
    const animation = button.animate(actanim, {duration: 200});
    animation.onfinish = function() {
      button.style.transform = "translateX(-5px) translateY(-2px)";
      button.style.boxShadow = "10px 10px 33px #08080854, -9px -9px 33px #00000046";
      button.style.fontSize = "1.2em";
      button.style.marginLeft = "5px";
      button.style.marginRight = "5px";
    }
  }
   
  function removeButtonAnimate() {
    const button = highlighted;
    console.log(button)
    console.log(highlighted)
    const actanim2 = {
      "transform": "translateX(0px) translateY(0px)",
      "marginLeft": "0px",
      "marginRight": "0px",
      "boxShadow": "none",
      "fontSize": "20px",
      "backgroundColor": "#2a6928"
    }
    const animation2 = button.animate(actanim2, {duration: 200});
    animation2.onfinish = function() {
      button.style.fontSize = "20px";
      button.style.marginLeft = "0px";
      button.style.marginRight = "0px";
      button.style.boxShadow = "none";
      button.style.transform = "translateX(0px) translateY(0px)";
      button.style.backgroundColor = "#2a6928";
    }
    return animation2;
  }

  function changeCurrentButton(i) {
    const anim = removeButtonAnimate(highlighted);
    triggerButtonAnimate(i);
  }

  useEffect(() => {


  axios({
    method: 'get',
    url: 'https://rygb.tech:8443/getStatus?email=' + Cookies.get("rygb_user"),
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
  }).catch(function (error) { console.log(error) });

  getAndSetFields();

  const anim = containerRef.current.animate({"opacity": 1}, {duration: 500});
  anim.onfinish = function() {
    containerRef.current.style.opacity = 1;
  }
  const buttons = document.getElementsByClassName(styles.sbutton);
  if (router.query.store != undefined) {
    axios({
    method: 'get',
    url: 'https://rygb.tech:8443/isAdmin?email=' + Cookies.get("rygb_user"),
  }).then(function (response) {
    var isAdmin = response.data;
    console.log("response data " + response.data)
    if (response.data == true) {
      console.log("true")
      document.getElementById("admin").style.display = "block";
      document.getElementById("dyn").style.display = "none";
    } else {
      console.log("false")
      document.getElementById("admin").style.display = "none";
    }
  })
  } else {
    document.getElementById("admin").style.display = "none";
  }
  
  for (var i = 0; i < buttons.length; i++) {
    setTimeout(() => {
    buttons[i].style.transform = "scale(0)"
    buttons[i].style.opacity = 0;
    buttons[i].style.display = "block";
    if(router.query.store != undefined) {
      buttons[i].style.backgroundColor = "#2a6928";
    }
    const btnanim = buttons[i].animate({"opacity": 1}, {duration: 200});
    const btnanim2 = buttons[i].animate({"transform": "scale(1.2)"}, {duration: 300});
    btnanim2.onfinish = function() {
      buttons[i].style.transform = "scale(1.2)";
      const btnanim3 = buttons[i].animate({"transform": "scale(1)"}, {duration: 200});
      btnanim3.onfinish = function() {
        buttons[i].style.transform = "scale(1)";
      }
    }
    btnanim.onfinish = function() {
      buttons[i].style.opacity = 1;
    }
    }, i * 50)
    
  }

  if (Cookies.get("rygb_user") != undefined) {
    const b1 = document.getElementById("b1");
    b1.style.opacity = "1"
    gridRef.current.style = "display: none;";
    firstRef.current.innerHTML = "Welcome to Manager"
    seccondRef.current.innerHTML = "We're going to ask you a few questions about your store to get started. Your progress is actively being saved."
    backdescRef.current.style = "display: block;";
    loading.current.style = "display: none;";
    setTimeout(() => {
      triggerButtonAnimate(0);
    }, 1000)
    console.log("defined")
    console.log(Cookies.get("rygb_user"))
    
  } else {
    router.push("https://rygb.tech/accounts/index.php?redirect=https://manager.rygb.tech/onboarding")
  }
  }, [router.isReady]);


  
  const containerRef = useRef(null)
  const accountvideo = useRef(null);
  const onbvideo = useRef();
  const modaltext = useRef();
  const submit = useRef();
  const [current, setCurrent] = useState(1);
  const nextmodal = useRef();
  const iopvideo = useRef();
  const dropdown = useRef();
  const dropdowndiv = useRef();
  const ivideo = useRef();
  const url = useRef();
  const title = useRef();
  const mtoloc = useRef();
  const serve = useRef();
  const years = useRef();
  const bvideo = useRef();
  const dynTextRef = useRef();
  const [value, setBoolean] = useState("null");
  const debouncedValue = useDebounce(value, 1000);

  useEffect(
    () => {
      if (debouncedValue) {
        if (router.query.store == undefined) {
          dbSave()
        }
      }
    },
    [debouncedValue] // Only call effect if debounced search term changes
  );

  function setValue(i) {
    var inputs = document.getElementsByClassName(styles.input);
    setBoolean(inputs[i].value);
  }

  function dbSave() {
    setSaving(true);
    console.log("Saving...")

    axios({
      method: 'post',
      url: 'https://rygb.tech:8443/mgr',
      data: {
        "email": Cookies.get("rygb_user"),
        "z": sname.current.value,
        "o": bsdesc.current.value,
        "t": mgruse.current.value,
        "th": cname.current.value,
        "f": cemail.current.value,
        "fi": cphone.current.value,
        "s": title.current.value,
        "se": serve.current.value,
        "e": mtoloc.current.value,
        "n": years.current.value,
        "te": dropdown.current.value,
        "el": loc.current.value,
        "tw": url.current.value,
      }
    }).then(function(response) {
      console.log(response)
      setSaving(false)
    }).catch(function (error) { console.log(error) });
  }

  function setSaving(bool) {
    if (bool) {
      dynTextRef.current.innerHTML = "Saving...";
    } else {
      dynTextRef.current.innerHTML = "Saved";
    }
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

  function navigate(step) {
    if (step == undefined) {
      //current++;
      console.log("current = " + current)
      setCurrent((current) => current + 1);
      step = current;
      console.log("changed current = " + current)
      console.log("step = " + step)
    } else {
      //current = step;
      setCurrent(step)
    }
      console.log("next")
    console.log(step)
      changeCurrentButton(step - 1);
    const anim = containerRef.current.animate({"left": "-50%"}, {duration: 300});
    anim.onfinish = function() {
      containerRef.current.style.left = "150%";
      if (step == 2 || step == 1) {
        ename.current.style = "display: none;";
        uname.current.style = "display: none;";
        pname.current.style = "display: none;";
        loc.current.style = "display: none;";
        url.current.style = "display: none;";
        nextRef.current.style.display = "none";
        years.current.style = "display: none;";
        title.current.style = "display: none;";
        dropdowndiv.current.style.display = "none";
        ivideo.current.style = "display: none";
        iopvideo.current.style = "display: none";
        accountvideo.current.style = "display: none";
        submit.current.style = "display: none";
        mtoloc.current.style = "display: none";
        serve.current.style = "display: none";
        console.log("signup")
        welcome.current.style.display = "none";
        onbvideo.current.style = "display: block";
        onbvideo.current.play();
        modaltext.current.innerHTML = "Store Info"
        modal.current.style.display = "block";
        sname.current.style.display = "block";
        bsdesc.current.style.display = "block";
        mgruse.current.style.display = "block";
        cname.current.style.display = "block";
        cemail.current.style.display = "block";
        cphone.current.style.display = "block";
        bvideo.current.style = "display: none";
        dropdowndiv.current.style.display = "none";
        nextmodal.current.innerHTML = "Next"
        iopvideo.current.style = "display: none";
        ivideo.current.style = "display: none";
        bvideo.current.style = "display: none";
      } else if (step == 3) {
        ename.current.style = "display: none;";
        uname.current.style = "display: none;";
        pname.current.style = "display: none;";
        sname.current.style = "display: none;";
        bsdesc.current.style = "display: none;";
        submit.current.style = "display: none;";
        cname.current.style = "display: none;";
        cemail.current.style = "display: none;";
        cphone.current.style = "display: none;";
        serve.current.style = "display: block;";
        url.current.style = "display: none;";
        mtoloc.current.style = "display: none;";
        title.current.style = "display: block;";
        years.current.style.display = "block";
        // discomgr.current.style = "display: block;";
        loc.current.style = "display: none;";
        //discomgr.current.style = "display: none;";
        mgruse.current.style = "display: none;";
        dropdowndiv.current.style = "display: block;"
        accountvideo.current.style = "display: none";
        onbvideo.current.style = "display: none";
        iopvideo.current.style = "display: block";
        iopvideo.current.play();
        modaltext.current.innerHTML = "Demographics A"
        submit.current.style = "display: none";
        console.log("signup bruh")
        welcome.current.style.display = "none";
        modal.current.style.display = "block";
        nextRef.current.style.display = "none"
        ivideo.current.style = "display: none";
        nextmodal.current.innerHTML = "Next"
        bvideo.current.style = "display: none";
        
      } else if (step == 4) {
        ename.current.style = "display: none;";
        uname.current.style = "display: none;";
        pname.current.style = "display: none;";
        title.current.style = "display: none;";
        sname.current.style = "display: none;";
        bsdesc.current.style = "display: none;";
        submit.current.style = "display: none;";
        serve.current.style = "display: none;";
        years.current.style = "display: none;";
        cname.current.style = "display: none;";
        cemail.current.style = "display: none;";
        cphone.current.style = "display: none;";
        dropdowndiv.current.style = "display: none;"
        accountvideo.current.style = "display: none";
        onbvideo.current.style = "display: none";
        iopvideo.current.style = "display: none";
        mgruse.current.style = "display: none;";
        nextRef.current.style.display = "none"
        submit.current.style = "display: none";
        console.log("signup bruh")
        welcome.current.style.display = "none";

        
        if (dropdown.current.value == "internet") {
          ivideo.current.style = "display: block";
          ivideo.current.play();
          url.current.style = "display: block;";
        } else if (dropdown.current.value == "physical") {
          loc.current.style = "display: block;";
          mtoloc.current.style = "display: block;";
          bvideo.current.style = "display: block;";
          bvideo.current.play();
        }
        
        modaltext.current.innerHTML = "Demographics B"
        nextmodal.current.innerHTML = "Submit"
        modal.current.style.display = "block";
        
      } else if (step == 5) {
        ename.current.style = "display: none;";
        uname.current.style = "display: none;";
        pname.current.style = "display: none;";
        sname.current.style = "display: none;";
        bsdesc.current.style = "display: none;";
        submit.current.style = "display: none;";
        cname.current.style = "display: none;";
        cemail.current.style = "display: none;";
        cphone.current.style = "display: none;";
        dropdowndiv.current.style = "display: none;"
        accountvideo.current.style = "display: none";
        onbvideo.current.style = "display: none";
        iopvideo.current.style = "display: none";
        mgruse.current.style = "display: none;";
        nextRef.current.style.display = "none"
        submit.current.style = "display: none";
        years.current.style = "display: none;";
        console.log("signup bruh")
        welcome.current.style.display = "none";
        firstRef.current.innerHTML = "You're all set."
        seccondRef.current.innerHTML = "Your application has been submitted. We've sen't you a confirmation email to the email you used to create your RYGB Account. We will contact you regarding the status of your application shortly."
        backdescRef.current.innerHTML = "If you want, you can:"
        nextRef.current.style.display = "block"
        nextRef.current.innerHTML = "Go to Dashboard"
        nextRef.current.onInput = () => navigate(6)
        modal.current.style.display = "none";
        var video;
        if (dropdown.current.value == "internet") {
          video = ivideo.current;
        } else if (dropdown.current.value == "physical") {
          video = bvideo.current;
        }
        const animatefade = video.animate({"opacity" : " 0"}, {duration: 1000});
        animatefade.onfinish = function() {
          video.style.opacity = "0"
          welcome.current.style.opacity = "0"
          welcome.current.style.display = "block";
          loading.current.style = "display: block;"
          loading.current.style.opacity = "0"
          const loadinganim1 = loading.current.animate({"opacity" : "1"}, {duration: 200});
          loadinganim1.onfinish = function() {
            loading.current.style.opacity = "1";
          }

          axios({
            method: 'post',
            url: 'https://rygb.tech:8443/setApplicationStatus',
            data: {
              store: sname.current.value,
              status: "Pending",
            }
          }).then(function (response) {
            console.log(response);
            axios({
            method: 'post',
            url: 'https://rygb.tech:8443/sendEmail',
            data: {
              to: Cookies.get("rygb_user"),
              subject: sname.current.value + " - Your Manager Application has been submitted.",
              text: "Hi " + cname.current.value + ", \r\n\r\nYour application has been submitted.\nWe will contact you regarding the status of your application shortly.\r\n\r\nYou will be contacted through this email.\r\n\r\nThank you for taking interest in Manager.\r"
            }
          }).then(function (response) {
            console.log(response);
            const loadinganim = loading.current.animate({"opacity" : "0"}, {duration: 200});
            loadinganim.onfinish = function() {
              loading.current.style.opacity = "0";
              const animatewelcome = welcome.current.animate({"opacity" : " 1"}, {duration: 300});
            animatewelcome.onfinish = function() {
              welcome.current.style.opacity = "1"
              removeButtonAnimate(4)
            }
            }
            
          })
          })

          
          
        }
      }
      const anim2 = containerRef.current.animate({"left": "50%"}, {duration: 300});
      anim2.onfinish = function() {
        containerRef.current.style.left = "50%";
        const opacity = containerRef.current.animate({"opacity": "1"}, {duration:300});
        opacity.onfinish = function() {
          containerRef.current.style.opacity = "1";
        }
      }
    }
  }

  async function redirect(to, id) {
    console.log("redirect to " + to)
    if (router.isReady) {
      var timeout = 0;
      console.log("redirect - router ready")
      if (to == "back" || to == "dash") {
        timeout = 900;
        setOpen(false)
        videoRef.current.style.display = "block";
        animationControls.start("visible")

        setTimeout(500);
        videoRef.current.play()
      } else if (to == "Accepted" || to == "Rejected") {
        videoRef.current.style.display = "block";

        animationControls.start("visible")

        setTimeout(500);
        videoRef.current.play()
        setTimeout(() => {
          router.push("https://admindash.rygb.tech/dash?view=mgrapps&store=" + router.query.store + "&status=" + to)
        }, 1000);
      } else if (to == "submit") {
        console.log("submit")
        if (submit.current.innerHTML = "Create Account") {
          console.log("create account")
          createAccount();
        } else {
          //login();
          console.log("login")
        }
      } else if (to == "portal") {
        router.push('https://rygb.tech/portal/index.php?from=notes')
      } else if (to == "home") {
        //do stuff
        router.push('/')  
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
      } else if (to == "signin" || "signup") {
        const anim = containerRef.current.animate({"left": "-50%"}, {duration: 500});
        console.log("redirect - signin")
        accountvideo.current.play();
        anim.onfinish = function() {
          containerRef.current.style.opacity = "0"
          modal.current.style.display = "block";
          welcome.current.style.display = "none"
          nextmodal.current.style.display = "none"
          onbvideo.current.style.display = "none";
          iopvideo.current.style.display = "none";
          if (to == "signup") {
            uname.current.style.display = "block";
            modaltext.current.innerHTML = "Account Info"
            submit.current.innerHTML = "Create Account"
            console.log("signup")
          }
          const opacity = containerRef.current.animate({"opacity": "1"}, {duration:300});
          opacity.onfinish = function() {
            containerRef.current.style.opacity = "1";
          }
        }
      }
}
  }
  const ename = useRef();
  const pname = useRef();
  const loading = useRef();

  async function getAndSetFields() {
    if (router.isReady) {
      console.log("query" + router.query.store)
      if (router.query.store != undefined) {
        console.log("has query")
        await axios({
          method: "get",
          url: "https://rygb.tech:8443/getMgrApplicationByStore?store=" + router.query.store,
        }).then(function (response) {
          console.log(response.data);
          var data = response.data
          if (response.data != undefined) {
            setSaving(true)
            dynTextRef.current.innerHTML = "Filling..."
            sname.current.value = data.z;
            bsdesc.current.value = data.o;
            mgruse.current.value = data.t;
            cname.current.value = data.th;
            cemail.current.value = data.f;
            cphone.current.value = data.fi;
            title.current.value = data.s;
            serve.current.value = data.se;
            mtoloc.current.value = data.e;
            years.current.value = data.n;
            dropdown.current.value = data.te;
            if (dropdown.current.value == "Physical Store") {
              loc.current.value = data.el;
            } else {
              url.current.value = data.tw;
            }
            
             
            console.log("getTitle is defined");
            document.title = data.z + " - Manager";
            setSaving(false)
            console.log("setting boolean")
            setBoolean(true)
          }
        }).catch(function (error) { console.log(error) });
      } else {
        console.log("has no query")
        if (await axios.get("https://rygb.tech:8443/hasMgrApplication?email=" + Cookies.get("rygb_user")).then(function (response) { console.log(response.data); return response.data; }).catch(function (error) { console.log(error) })) {
          console.log("has application")
          await axios({
        method: "get",
        url: "https://rygb.tech:8443/getMgrApplication?email=" + Cookies.get("rygb_user"),
      }).then(function (response) {
        console.log(response.data);
        var data = response.data
        if (response.data != undefined) {
          setSaving(true)
          dynTextRef.current.innerHTML = "Filling..."
          sname.current.value = data.z;
          bsdesc.current.value = data.o;
          mgruse.current.value = data.t;
          cname.current.value = data.th;
          cemail.current.value = data.f;
          cphone.current.value = data.fi;
          title.current.value = data.s;
          serve.current.value = data.se;
          mtoloc.current.value = data.e;
          years.current.value = data.n;
          dropdown.current.value = data.te;
          if (dropdown.current.value == "Physical Store") {
            loc.current.value = data.el;
          } else {
            url.current.value = data.tw;
          }
          
           
          console.log("getTitle is defined");
          document.title = data.z + " - Manager";
          setSaving(false)
          console.log("setting boolean")
          setBoolean(true)
        }
      }).catch(function (error) { console.log(error) });
        }
        
      }
      
    }
  }

  function createAccount() {
    console.log("create account")
    console.log(ename.current.value)
    console.log(pname.current.value)
    console.log(uname.current.value)
    axios({
      method: 'post',
      url: 'https://rygb.tech:8443/newaccount',
      data: {
        email: ename.current.value,
        paswd: pname.current.value,
        name: uname.current.value,
        role: "Regular User",
      }
    }).then(function (response) {
      console.log(response)
      console.log("response")
    });
    console.log("cookies")
         var myDate = new Date();
         myDate.setMonth(myDate.getMonth() + 12);
            Cookies.set('rygb_user', ename.current.value, { expires: myDate });
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
        <title>Manager - RYGB</title>
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
      
      <div className={styles.cornersgrid}>
        </div>
        <div className={styles.rcorners1}>
          <video ref={accountvideo} className={styles.smallervideo}><source src="animatedbackground-reposmgr.mp4" /></video>
          <video ref={onbvideo} className={styles.smallervideo}><source src="Untitled.mp4" /></video>
          <video ref={iopvideo} className={styles.smallervideo}><source src="internetorphysical.mp4" /></video>
          <video ref={ivideo} className={styles.smallervideo}><source src="animatedbackground-internet.mp4" /></video>
          <video ref={bvideo} className={styles.smallervideo}><source src="animatedbackground-bag.mp4" /></video>
        <div id="container" className={styles.container} ref={containerRef}>
          <div ref={welcome} className={styles.welcome}>
            <h1 className={styles.sectionheader} ref={firstRef} id="global">Have an RYGB Account?</h1>
            <p className={styles.subtext} ref={seccondRef}>You'll need an RYGB account to continue with the onboarding process.</p>
            <p className={styles.subtext} ref={backdescRef}>To go back to a section in the application, use the buttons on the left navigation bar.</p>
            <div className={styles.asinglegrid} ref={gridRef}>
              <button className={styles.abutton} onClick={() => redirect("signin")}>Sign In</button>
              <button className={styles.abutton} onClick={() => redirect("signup")}>Create an Account</button>
            </div>
          </div>
          <div ref={loading} id={styles.circle2}></div>
          <div className={styles.modal} ref={modal}>
            <div ref={modaltext} className={styles.text}>Sign In</div>
        <input required ref={ename} className={styles.ename} type="email" id="ename" name="ename" placeholder="Email" />
        <input required ref={uname} className={styles.ename} type="text" id="fname" name="fname" placeholder="Username"></input>
        <input required ref={pname} className={styles.ename} type="password" id="pname" name="pname" placeholder="Password" />
        <input required ref={sname} onInput={() => setValue(0)} className={styles.ename + " " + styles.input} type="text" placeholder="Store Name" />
        <textarea
          type="text"
          className={styles.textarea + " " + styles.input}
          ref={bsdesc}
          placeholder="Breif description of your store"
          rows="28"
          cols="50"
          style={{ top: "10px" }}
          onInput={() => setValue(1)}
        />
        <input required ref={mgruse} onInput={() => setValue(2)} className={styles.ename + " " + styles.input} type="text" placeholder="How does your store plan to use Manager?" />
        <input required ref={cname} onInput={() => setValue(3)}  className={styles.ename + " " + styles.input} type="text" placeholder="Contact Name" />
        <input required ref={cemail} onInput={() => setValue(4)}  className={styles.ename + " " + styles.input} type="email" placeholder="Contact Email" />
        <input required ref={cphone} onInput={() => setValue(5)}  className={styles.ename + " " + styles.input} type="tel" placeholder="Contact Phone Number" />
        <input required ref={title} onInput={() => setValue(6)} className={styles.ename + " " + styles.input} type="text" placeholder="What is your title at your company?" />
        <input required ref={serve} onInput={() => setValue(7)} className={styles.ename + " " + styles.input} type="text" placeholder="Who does your store serve? (Consumers, Buisineses, Both)" />
        <input required ref={mtoloc} onInput={() => setValue(8)} className={styles.ename + " " + styles.input} type="text" placeholder="Does your company have more than one location?" />
        <input required ref={years} onInput={() => setValue(9)} className={styles.ename + " " + styles.input} type="text" placeholder="How long has your store been in buisiness?" />
        <div ref={dropdowndiv}>
          <label className={styles.labeltext}>My store is mainly a...</label>
        <select ref={dropdown} onInput={() => setValue(10)} className={styles.dropdown + " " + styles.input} name="demoA">
          <option value="internet">Virtual Store</option>
          <option value="physical">Physical Store</option>
        </select>
        </div>
        <input required ref={loc} onInput={() => setValue(11)} className={styles.ename + " " + styles.input} type="text" placeholder="Where is your store located? (Address)"></input>
        <input required ref={url} onInput={() => setValue(12)} className={styles.ename + " " + styles.input} type="text" placeholder="What is the URL of your website"></input>
        
        <button onClick={() => redirect("submit")} ref={submit} className={styles.submit}>Go</button>
        <button onClick={() => navigate(current + 1)} ref={nextmodal} className={styles.submit}>Next</button>
          </div>
          <div className={styles.asinglegrid}>
            <button ref={nextRef} className={styles.abutton} onClick={() => navigate()}>Next</button>
          </div>
      </div>
      <div id="b1" className={styles.bcorners1}>
        <div className={styles.singlegrid}>
          <button className={styles.sbutton} onClick={() => navigate(1)}>Welcome</button>
          <button className={styles.sbutton} onClick={() => navigate(2)}>Store Info</button>
          <button className={styles.sbutton} onClick={() => navigate(3)}>Demographics A</button>
          <button className={styles.sbutton} onClick={() => navigate(4)}>Demographics B</button>
          <button className={styles.sbutton} onClick={() => navigate(5)}>Next Steps</button>
        </div>
        </div>
      </div>
      <div className={styles.navbar}>
      <div id={styles.logo} onClick={() => redirect("home")}>
         <img src="cornermgr.png" width="230" height="230" />
      </div>
      <div id="dyn">
        <h1 className={styles.text} id={styles.dynText} ref={dynTextRef}>
          Saved
        </h1>
      </div>
      <div id="admin" className={styles.doublegrid}>
        <div className={styles.actdoublegrid}>
          <button className={styles.admbutton} onClick={() => redirect("Accepted")}>Accept</button>
          <button className={styles.admbutton} onClick={() => redirect("Rejected")}>Reject</button>
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
      </div>
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1 }}
        id="introvideo"
      >
        <video muted id={styles.video} ref={videoRef} style={{display:"none"}}><source src="animatedbackground-intro.mp4" type="video/mp4" /></video>
      </motion.div>
    </div>
  )
}
