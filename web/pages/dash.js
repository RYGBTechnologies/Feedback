import Head from 'next/head'
import { useRouter } from 'next/router'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { Fragment, useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import Cookies from 'js-cookie'
import styles from '../styles/Home.module.css'
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
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
    if (diagtitle === "Add Employee") {
      view("Employees")
    } else if (document.getElementById(styles.dynText).innerHTML === "Add Employee Role") {
      view("Roles - Employees")
    }
  }

  function openModal() {
    setIsOpen(true)
  }

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
  const statusRef = useRef(null);
  const dynTextRef = useRef(null);
    
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
      document.getElementById("accounts").style.display = "none";

    if (router.query.view != undefined) {
      const queryview = router.query.view;
      if (queryview == "mgrapps") {
        view("Applications - Manager")
      }
    }
  axios({
    method: 'get',
    url: "https://rygb.tech:8443/getStoreFromEmail?email=" + "mmredblock62@gmail.com"
  }).then(function (response) {
    console.log(response.data)
    var data = response.data;
    setStore(data.name)
  }).catch(function (error) {
    console.log(error)
  })

  axios({
    method: 'get',
    url: 'https://rygb.tech:8443/getStatus?email=' + "mmredblock62@gmail.com",
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

  const loading = useRef(null)

  function intro() {
    const anim = document.getElementById("noticetext").animate({"transform": "scale(0.8)"}, {duration: 500, easing: "ease-out"});
    anim.onfinish = function() {
      document.getElementById("noticetext").style.transform = "scale(0.8)"
      const anim2 = document.getElementById("noticetext").animate({"transform": "scale(1)"}, {duration: 500, easing: "ease-out"});
      anim2.onfinish = function() {
        document.getElementById("noticetext").style.transform = "scale(1)"
      }
    }
  }

  function introContinue() {
    document.getElementById("cubedgrid").style.display = "none";
    document.getElementById("blankcontainer").style.display = "block"
    const opacity = document.getElementById("notice").animate({opacity: 0}, {duration: 500});
    opacity.onfinish = function() {
      document.getElementById("notice").style.opacity = "0";
      loading.current.style = "display: block";
      loading.current.style.opacity = "0";
      const opacity2 = loading.current.animate({opacity: 1}, {duration: 300});
      opacity2.onfinish = function() {
        loading.current.style.opacity = "1";
        setTimeout(() => {
          const anim = loading.current.animate({border: "8px #03CF0E solid", borderTop: "64px #03CF0E solid", animation: "spin2 0s infinite linear"}, {duration:500});
      anim.onfinish = function() {
        loading.current.style.border = "8px #03CF0E solid";
        loading.current.style.borderTop = "64px #03CF0E solid";
        loading.current.style.animation = "spin2 0s infinite linear";
        var audio = new Audio('welcometomanager.mp3');
        audio.play();
        document.getElementById("checkmark").style.display = "block";
        document.getElementById("checkmark").style.opacity = "0";
        const opacity3 = document.getElementById("checkmark").animate({opacity: 1}, {duration: 500});
        opacity3.onfinish = function() {
          document.getElementById("checkmark").style.opacity = "1";
          setTimeout(() => {
            const opacity4 = document.getElementById("checkmark").animate({transform: "scale(1000) translate(0%, -20%)"}, {duration: 500});
            opacity4.onfinish = function() {
              document.getElementById("checkmark").style.transform = "scale(1000) translate(-40%, -13%) rotate(-45deg)";
              document.getElementById("welcometomgr").style.display = "block"
              document.getElementById(styles.circle3).style.borderColor = "rgb(3 207 14 / 0%)";
              document.getElementById("1").style.opacity = "0";
              document.getElementById("2").style.opacity = "0";
              document.getElementById("3").style.opacity = "0";
              document.getElementById("blankmgr").style.display = "block";
              document.getElementById("blankmgr").style.transform = "scale(46) translate(48px, 0) rotateY(180deg)"
              
              setTimeout(() => {
                const anim1 = document.getElementById("1").animate({"opacity": "1"}, {duration: 500});
                anim1.onfinish = function() {
                  document.getElementById("1").style.opacity = "1";
                }
                setTimeout(() => {
              
                const anim2 = document.getElementById("2").animate({"opacity": "1"}, {duration: 500});
                anim2.onfinish = function() {
                  document.getElementById("2").style.opacity = "1";
                }
                setTimeout(() => {
                const anim3 = document.getElementById("3").animate({"opacity": "1"}, {duration: 500});
                anim3.onfinish = function() {
                  document.getElementById("3").style.opacity = "1";
                    const anim4 = document.getElementById("checkmark").animate({"transform": "scale(1000) translate(-100%, -13%) rotate(-45deg)"}, {duration: 2500});
                    setTimeout(() => {
                    const anim8 = document.getElementById("blankmgr").animate({"transform": "scale(0.7) translate(0, 0) rotateY(0deg)"}, {duration: 1000});
                    anim8.onfinish = function() {
                      document.getElementById("blankmgr").style.transform = "scale(0.7) translate(0, 0) rotateY(0deg)";
                      const anim9 = document.getElementById("blankmgr").animate({"transform": "scale(1) translate(0, 0) rotateY(0deg)"}, {duration: 900, easing: "ease-out"});
                      anim9.onfinish = function() {
                        document.getElementById("blankmgr").style.transform = "scale(1) translate(0, 0) rotateY(0deg)";
                        const anim10 = document.getElementById("mgrtext").animate({"opacity": "1"}, {duration: 500});
                        anim10.onfinish = function() {
                          document.getElementById("mgrtext").style.opacity = "1";
                        }
                        document.getElementById("almostdone").style.display = "block";
                        document.getElementById("almostdone").style.opacity = "0";
                        document.getElementById("welcometomgr").style.display = "none"
                        const anim11 = document.getElementById("almostdone").animate({"opacity": "1"}, {duration: 500});
                        anim11.onfinish = function() {
                          document.getElementById("almostdone").style.opacity = "1";
                        }
                      }
                    }
                    }, 900);
                    
                    anim4.onfinish = function() {
                      document.getElementById("checkmark").style.transform = "scale(1000) translate(-100%, -13%) rotate(-45deg)";
                      loading.current.style.display = "none"
                    }
                    setTimeout(() => {
                      const anim5 = document.getElementById("3").animate({"opacity": "0"}, {duration: 300});
                      anim5.onfinish = function() {
                        document.getElementById("3").style.opacity = "0"
                        const anim6 = document.getElementById("2").animate({"opacity": "0"}, {duration: 300});
                        anim6.onfinish = function() {
                          document.getElementById("2").style.opacity = "0"
                          const anim7 = document.getElementById("1").animate({"opacity": "0"}, {duration: 300});
                          anim7.onfinish = function() {
                            document.getElementById("1").style.opacity = "0"
                          }
                        }
                      }
                    }, 500);
                }
                }, 500);
                }, 500);
                
              }, 500);
            }
          }, 1250);
        }
      }
        }, 1000);
        
      }
      
    }
  }

  const videodivRef2 = useRef(null);

  function welcome(showIntro, showTutorial) {
    document.getElementById("blankmgr").style.display = "none";
    document.getElementById("mgrtext").style.opacity = "0";
    document.getElementById("almostdone").style.display = "none";
    document.getElementById("welcometomgr").style = "display: none";
    document.getElementById("blankcontainer").style = "display: none";
    loading.current.style = "display: none";
      axios({
      method: 'get',
      url: 'https://rygb.tech:8443/getIntro?email=' + "mmredblock62@gmail.com"
    }).then(async function (response) {
      var store = response.data;
      console.log(response)
      if (store || showIntro == false) {
        console.log("welcome - no intro");
        document.getElementById("notice").style.display = "none";
        document.getElementById(styles.dynText).style.display = "block";
        document.getElementById("blankmgr").style.display = "none";
        document.getElementById("mgrtext").style.opacity = "none";
        document.getElementById("logo").style.display = "block";
        document.getElementById("logo").src = "cornermgrblank.png";
        document.getElementById("grid").style = "display: grid";
        document.getElementById("r1").style.backgroundColor = "rgba(53, 53, 53, 0.94)"
    const buttons = document.getElementsByClassName(styles.button);
    const cubebuttons = document.getElementsByClassName(styles.cubebutton);
          for(var i = 0; i < cubebuttons.length; i++) {
            cubebuttons[i].style.transform = "scale(0.5)";
            cubebuttons[i].style.opacity = "0";
          }
    

    

    setTimeout(()=>{
      videodivRef2.current.style = "";
      videoRef2.current.style.display = "block";
      videoRef.current.style.display = "none";
      videoRef2.current.play();
    },800);
    const global = document.getElementById(styles.globalbutton)
          global.style.transform = "scale(0.5)";
          global.style.opacity = "0";
      setTimeout(()=>{
        const videoanim = videoRef2.current.animate({"opacity": "0"}, {duration: 500});
        const cubebuttons = document.getElementsByClassName(styles.cubebutton);
          for(var i = 0; i < cubebuttons.length; i++) {
            cubebuttons[i].style.transform = "scale(0.5)";
            cubebuttons[i].style.opacity = "0";
          }
          
        videoanim.onfinish = function() {
          videoRef2.current.style.opacity = "0";
          videodivRef2.current.style.display = "none";
          if(showTutorial) {
            openModal();
          }

          
          const anim = global.animate({"transform": "scale(1)"}, {duration: 300, easing: "ease-out"});
              const anim2 = global.animate({"opacity": "1"}, {duration: 200});
              anim.onfinish = function() {
                global.style = "";
              }
              anim2.onfinish = function() {
                global.style.opacity = "1";
              }
          
          for (let i = 0; i < cubebuttons.length; i++) {
            setTimeout(() => {
              const anim = cubebuttons[i].animate({"transform": "scale(1)"}, {duration: 300, easing: "ease-out"});
              const anim2 = cubebuttons[i].animate({"opacity": "1"}, {duration: 200});
              anim.onfinish = function() {
                cubebuttons[i].style = "";
              }
              anim2.onfinish = function() {
                cubebuttons[i].style.opacity = "1";
              }
            }, i * 100);
          }
        }
      },1000);
  /*
  for (var i = 0; i < buttons.length; i++) {
    setTimeout(() => {
    buttons[i].style.opacity = 0;
    buttons[i].style.display = "block";
    const btnanim = buttons[i].animate({"opacity": 1}, {duration: 200});
    btnanim.onfinish = function() {
      buttons[i].style.opacity = 1;
    }
    }, i * 50)
    
  }
  */
  document.getElementById("mgr").style = "display: none;";
  document.getElementById("mgrapps").style = "display: none;";
  document.getElementById("mgractive").style = "display: none;";
      } else {
        console.log("intro")
        setTimeout(() => {
          intro()
        }, 1000);
        const buttons = document.getElementsByClassName(styles.button);
        document.getElementById("noticetext").style.transform = "scale(40)"
        document.getElementById("mgr").style = "display: none;";
  document.getElementById("mgrapps").style = "display: none;";
  document.getElementById("mgractive").style = "display: none;";
  document.getElementById("checkmark").style = "display: none";
  document.getElementById("logo").style = "display: none";
  document.getElementById("grid").style = "display: none";
  document.getElementById("r1").style = "background-color: rgb(3 207 14 / 0%);";
  dynTextRef.current.style = "display: none";
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
    
  }   
      }
    })
    
    
  }

  var elements = []
  var step = 1;
  const containerRef = useRef(null);
  const [chain, setChain] = useState("")

  function navigate(bool) {
    if (bool) {
      setChain(true);
    } else {
      setChain(false);
    }
    console.log(bool)
      console.log("next")
    console.log(step)
    
    step++;
    console.log("updated step" + step)
    console.log(chain)
    const anim = containerRef.current.animate({"left": "-50%"}, {duration: 500});
    anim.onfinish = function() {
      containerRef.current.style.left = "150%";
      if (step == 3 || chain !== "") {
        var audio = new Audio('intro.mp3');
          audio.play();
        
        setTimeout(() =>{
          videoRef.current.style.display = "block";

        animationControls.start("visible")

        setTimeout(500);
        videoRef.current.play()
        },350)
        setTimeout(() => {
          welcome(false, true);
        }, 1500);
        setTimeout(() =>{
          var audio2 = new Audio('loop.mp3');
          audio2.play();
          audio2.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
          }, false);
        },15000)
        
      } else if (step == 2 || step == 1) {
        console.log("signup")
        document.getElementById("header").innerHTML = "Is your store a chain?"
        document.getElementById("header").style.marginBottom = "30px"
        document.getElementById("t1").style.display = "none"
        document.getElementById("t2").style.display = "none";
        document.getElementById("cubedgrid").style.display = "block";
        document.getElementById("nextbtn").style.display = "none"
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
  }

  const [store, setStore] = useState("")
  var checked1 = false;
  var checked2 = false;
  var checked3 = false;
  var checked4 = false;
  var checked5 = false;
  var checked6 = false;
  var checked7 = false;
  var checked8 = false;
  var checked9 = false;
  var checked10 = false;
  const ename = useRef(null);
  const uname = useRef(null);
  const dropdowndiv = useRef(null);
  const dropdown = useRef(null);
  const permgridn = useRef(null);
  const [display, setDisplay] = useState("none");
  const [roledisplay, setRoleDisplay] = useState("none");
  const [diagtitle, setDiagtitle] = useState("Need Help?")
  const [diagbody, setDiagBody] = useState("Go to our information center and find the help you need. You can find this again by clicking on the icon in the top right.")

  function deleteCheckboxes() {
    checked1 = false;
    checked2 = false;
    checked3 = false;
    checked4 = false;
    checked5 = false;
    checked6 = false;
    checked7 = false;
    checked8 = false;
    checked9 = false;
    checked10 = false;
    checked = [];
    setCheckedState(checked);
    document.getElementById("rname").value = "";
    document.getElementById("rcolor").value = "#FFFFFF";
    document.getElementById("rcolor").style.backgroundColor = "#FFFFFF";
    for (var i = 0; i < 10; i++) {
      try {
        document.getElementById(i).remove();
      } catch (error) {
        // ignore
      }
    }
    const permgrid = document.getElementById("permgrid");
    for (var i = 0; i < permgrid.children.length; i++) {
      permgrid.children[i].remove();
    }
    for (var i = 0; i < elements.length; i++) {
      elements[i].remove();
    }
    for (var i = 0; i < document.getElementsByClassName(styles.switch).length; i++) {
      document.getElementsByClassName(styles.switch)[i].remove();
    }
  }

  function createCheckboxes(perms) {
    console.log(permgridn.current)
    console.log(permgridn)
    console.log(document.getElementsByClassName(styles.permissionsGrid))
    console.log(document.getElementById("permgrid"))
    const permgrid = document.getElementById("permgrid");
    var p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Manage Employees"
    var label = document.createElement("label");
    label.className = styles.switch;
    var input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked1;
    input.oninput = () => handleChange(1)
    input.id = "1"
    label.appendChild(input);
    var span = document.createElement("span");
    var em = document.createElement("em");
    var strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Add Edit or Remove Employee Roles"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked2;
    input.oninput = () => handleChange(2)
    input.id = "2"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Customize Point Store"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked3;
    input.oninput = () => handleChange(3)
    input.id = "3"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Add Products to the Point Store"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked4;
    input.oninput = () => handleChange(4)
    input.id = "4"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Register Edit or Remove Kiosks"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked5;
    input.oninput = () => handleChange(5)
    input.id = "5"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Access Kiosks"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked6;
    input.oninput = () => handleChange(6)
    input.id = "6"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Manage Kiosks Kiosks"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked7;
    input.oninput = () => handleChange(7)
    input.id = "7"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Enable or Disable Ads"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked8;
    input.oninput = () => handleChange(8)
    input.id = "8"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Buy Ads"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked9;
    input.oninput = () => handleChange(9)
    input.id = "9"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
    p = document.createElement("p")
    p.className = styles.subtext;
    p.style = "font-size: 25px";
    p.innerHTML = "Change Payment Method"
    label = document.createElement("label");
    label.className = styles.switch;
    input = document.createElement("input");
    input.type = "checkbox";
    input.defaultChecked = checked10;
    input.oninput = () => handleChange(10)
    input.id = "10"
    label.appendChild(input);
    span = document.createElement("span");
    em = document.createElement("em");
    strong = document.createElement("strong");
    label.appendChild(span);
    label.appendChild(em);
    label.appendChild(strong);
    permgrid.appendChild(p);
    permgrid.appendChild(label);
    elements.push(label);
    elements.push(p)
  }

  function bgChange() {
    const color = document.getElementById("rcolor").value;
    const colorelem = document.getElementById("rcolor");
    colorelem.style.backgroundColor = color
  }

  function bgChangeDropdown() {
    const dropdown = document.getElementById("dropdown");
    axios({
      method: 'get',
      url: 'https://rygb.tech:8443/getEmployeeRoleColor?store=' + store + "&role=" + dropdown.value,
    }).then(function (response) {
      dropdown.style.backgroundColor = response.data;
      if (response.data === "#ffffff") {
        dropdown.style.color = "#000000";
      } else if (response.data === "#000000") {
        dropdown.style.color = "#ffffff";
      } else {
        dropdown.style.color = "#ffffff";
      }
    }).catch(function (error) {
      //ignore
    })
  }

  function view(to, args) {
    window.requestAnimationFrame(() => {
      viewAnimate(to, args);
    })
  }
  
  function viewAnimate(to, args) {
    const animation = dynTextRef.current.animate({"marginLeft" : "-500px"}, {duration: 300})
    const fade = dynTextRef.current.animate({"opacity" : "0"}, {duration: 300})
    setTimeout(() => {
      var grid = document.getElementById("navigation")
      if (document.getElementById(styles.globalbutton).style.transform == "scale(0.3)") {
        grid = document.getElementById("mgr")
        const ganimate = grid.animate({"transform": "scale(120) rotate(-18deg)", "marginLeft": "97%", "opacity": "0"}, {duration: 300});
        ganimate.onfinish = function() {
          grid.style.display = "none";
        }
      } else {
        const global = document.getElementById(styles.globalbutton)
        const anim = global.animate({"transform": "scale(0.3)"}, {duration: 300, easing: "ease-out"});
        const anim2 = global.animate({"opacity": "0"}, {duration: 200});
        anim.onfinish = function() {
          global.style.transform = "scale(0.3)"
        }
        anim2.onfinish = function() {
          global.style.opacity = "0";
        }
        const cubebuttons = document.getElementsByClassName(styles.cubebutton)
        for (var i = 0; i < cubebuttons.length; i++) {
          setTimeout(() => {
            const anim = cubebuttons[i].animate({"transform": "scale(0.3)"}, {duration: 300, easing: "ease-out"});
            const anim2 = cubebuttons[i].animate({"opacity": "0"}, {duration: 200});
            anim.onfinish = function() {
              cubebuttons[i].style.transform = "scale(0.3)"
            }
            anim2.onfinish = function() {
              cubebuttons[i].style.opacity = "0";
            }
            if (i < cubebuttons.length - 1) {
              setTimeout(() => {
                document.getElementById("navigation").style.display = "none";
              }, 300)
            }
          }, i * 100);
        }
      }
      
      
        const roles = document.getElementById("mgrlist")
          const permgrid = document.getElementById("permgrid")
          const alist = document.getElementById("alist")
          for(var i = 0; i < alist.children.length; i++) {
        alist.children[i].remove();
      }
      for(var i = 0; i < roles.children.length; i++) {
        roles.children[i].remove();
      }
      for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
      }
      const dropdown = document.getElementById("dropdown")
      for (var i = 0; i < dropdown.children.length; i++) {
        dropdown.children[i].remove();
      }
      deleteCheckboxes()
      setTimeout(() => {
        if (to == "Dashboard") {
          document.getElementById("mgr").style = "display: none;";
          document.getElementById("mgrapps").style = "display: none;";
          document.getElementById("mgractive").style = "display: none;";
          document.getElementById("accounts").style.display = "none";
          document.getElementById("roles").style.display = "none";
          document.getElementById("navigation").style.display = "grid";
          document.getElementById("addemployee").style.display = "none"
          const global = document.getElementById(styles.globalbutton)
          global.style.transform = "scale(0.5)";
          global.style.opacity = "0";
          const cubebuttons = document.getElementsByClassName(styles.cubebutton);
          for(var i = 0; i < cubebuttons.length; i++) {
            cubebuttons[i].style.transform = "scale(0.5)";
            cubebuttons[i].style.opacity = "0";
          }
          for(var i = 0; i < elements.length; i++) {
            elements[i].remove();
          }

          const anim = global.animate({"transform": "scale(1)"}, {duration: 300, easing: "ease-out"});
              const anim2 = global.animate({"opacity": "1"}, {duration: 200});
              anim.onfinish = function() {
                global.style = "";
              }
              anim2.onfinish = function() {
                global.style.opacity = "1";
              }
          
          for (let i = 0; i < cubebuttons.length; i++) {
            setTimeout(() => {
              const anim = cubebuttons[i].animate({"transform": "scale(1)"}, {duration: 300, easing: "ease-out"});
              const anim2 = cubebuttons[i].animate({"opacity": "1"}, {duration: 200});
              anim.onfinish = function() {
                cubebuttons[i].style = "";
              }
              anim2.onfinish = function() {
                cubebuttons[i].style.opacity = "1";
              }
            }, i * 100);
          }
        } else if (to === "Employees") {
          document.getElementById("accounts").style.display = "block";
          document.getElementById("accounts").style.opacity = "0";
          document.getElementById("accounts").style.transform = "scale(0.5)";
          document.getElementById("ename").value = "";
          document.getElementById("eemail").value = "";
          document.getElementById("ephone").value = "";
          const dropdown = document.getElementById("dropdown")
          for (var i = 0; i < dropdown.children.length; i++) {
            dropdown.children[i].remove();
          }
          for(var i = 0; i < alist.children.length; i++) {
            alist.children[i].remove();
          }
          const anim = document.getElementById("accounts").animate({"transform": "scale(1)"}, {duration: 300, easing: "ease-out"});
          const opacity = document.getElementById("accounts").animate({"opacity": "1"}, {duration: 200, easing: "ease-out"});
          opacity.onfinish = function() {
            document.getElementById("accounts").style.opacity = "1";
          }
          anim.onfinish = function() {
            document.getElementById("accounts").style.transform = "scale(1)"
            if (store == "") {
              axios({
                method: 'get',
                url: 'https://rygb.tech:8443/getStoreFromEmail?email=' + "mmredblock62@gmail.com",
              }).then(function (response) {
                setStore(response.data)
              }).catch(function (error) {
                console.log(error);
              })
              console.log(store)
            }
            
            axios({
              method: 'get',
              url: 'https://rygb.tech:8443/getEmployees?store=' + store,
            }).then(async function (repsonse) {
              var accounts = repsonse.data;
              const accountsDiv = document.getElementById("alist");
              for (var i = 0; i < accounts.length; i++) {
                var account = accounts[i];
                var accountDiv = document.createElement("div");
                const content = document.createElement("div")
                var text = document.createElement("p");
                accountDiv.className = "flex flex-col justify-center w-full h-full";
                accountDiv.style.backgroundColor = "rgba(63, 63, 63, 0.64)";
                accountDiv.style.borderRadius = "25px";
                accountDiv.style.color = "white";
                accountDiv.style.fontSize = "1.5rem";
                accountDiv.style.fontWeight = "bold";
                accountDiv.style.padding = "1rem";
                accountDiv.style.marginBottom = "10px";
                accountDiv.style.display = "block";
                (function(div, email){
                  div.onclick = () => view("View Employee", email)
                })(accountDiv, account.email);
                accountDiv.style.height = "55px";
                accountDiv.id = styles.actbutton
                text.style.float = "left"
                text.innerHTML = account.name + " (" + account.email + ")";
                await axios({
                  method: 'get',
                  url: 'https://rygb.tech:8443/getEmployeeRoleColor?store=' + store + "&role=" + account.role,
                }).then(function (response) {
                  accountDiv.style.backgroundColor = response.data;
                }).catch(function (error) {
                  console.log(error);
                })
                text.style.fontFamily = 'Product Sans';
                text.style.marginTop = "-6px"
                const icons = document.createElement("div");
                const icon1 = document.createElement("span");
                icon1.className = "material-icons";
                icon1.innerHTML = "chevron_right"
                icon1.style.fontSize = "24px";
                icons.style.float = "right"
                icons.style.marginTop = "-3px"
                icons.appendChild(icon1);
                content.appendChild(text);
                content.appendChild(icons);
                content.style.float = "top"
                accountDiv.appendChild(icons);
                accountDiv.appendChild(text);
                accountsDiv.appendChild(accountDiv)
                elements.push(accountDiv);
              }
            })
            const anim2 = document.getElementById("accounts").animate({"transform": "scale(1)"}, {duration: 500});
            anim2.onfinish = function() {
              document.getElementById("accounts").style.transform = "scale(1)"
            }
          }
        } else if (to === "Employee Search") {
          document.getElementById("accounts").style.display = "block";
          document.getElementById("accounts").style.opacity = "0";
          document.getElementById("accounts").style.transform = "scale(0.5)";
          document.getElementById("ename").value = "";
          document.getElementById("eemail").value = "";
          document.getElementById("ephone").value = "";
          const dropdown = document.getElementById("dropdown")
          for (var i = 0; i < dropdown.children.length; i++) {
            dropdown.children[i].remove();
          }
          const alist = document.getElementById("alist")
          for(var i = 0; i < alist.children.length; i++) {
        alist.children[i].remove();
      }
          const anim = document.getElementById("accounts").animate({"transform": "scale(1)"}, {duration: 300, easing: "ease-out"});
          const opacity = document.getElementById("accounts").animate({"opacity": "1"}, {duration: 200, easing: "ease-out"});
          opacity.onfinish = function() {
            document.getElementById("accounts").style.opacity = "1";
          }
          anim.onfinish = async function() {
            document.getElementById("accounts").style.transform = "scale(1)"
              var accounts = args;
              console.log("args " + args)
              const accountsDiv = document.getElementById("alist");
              for (var i = 0; i < accounts.length; i++) {
                var account = accounts[i];
                var accountDiv = document.createElement("div");
                const content = document.createElement("div")
                var text = document.createElement("p");
                accountDiv.className = "flex flex-col justify-center w-full h-full";
                accountDiv.style.backgroundColor = "rgba(63, 63, 63, 0.64)";
                accountDiv.style.borderRadius = "25px";
                accountDiv.style.color = "white";
                accountDiv.style.fontSize = "1.5rem";
                accountDiv.style.fontWeight = "bold";
                accountDiv.style.padding = "1rem";
                accountDiv.style.marginBottom = "10px";
                accountDiv.style.display = "block";
                (function(div, email){
                  div.onclick = () => view("View Employee", email)
                })(accountDiv, account.email);
                accountDiv.style.height = "55px";
                accountDiv.id = styles.actbutton
                text.style.float = "left"
                text.innerHTML = account.name + " (" + account.email + ")";
                await axios({
                  method: 'get',
                  url: 'https://rygb.tech:8443/getEmployeeRoleColor?store=' + store + "&role=" + account.role,
                }).then(function (response) {
                  accountDiv.style.backgroundColor = response.data;
                }).catch(function (error) {
                  console.log(error);
                })
                text.style.fontFamily = 'Product Sans';
                text.style.marginTop = "-6px"
                const icons = document.createElement("div");
                const icon1 = document.createElement("span");
                icon1.className = "material-icons";
                icon1.innerHTML = "chevron_right"
                icon1.style.fontSize = "24px";
                icons.style.float = "right"
                icons.style.marginTop = "-3px"
                icons.appendChild(icon1);
                content.appendChild(text);
                content.appendChild(icons);
                content.style.float = "top"
                accountDiv.appendChild(icons);
                accountDiv.appendChild(text);
                accountsDiv.appendChild(accountDiv)
                elements.push(accountDiv);
              }
            const anim2 = document.getElementById("accounts").animate({"transform": "scale(1)"}, {duration: 500});
            anim2.onfinish = function() {
              document.getElementById("accounts").style.transform = "scale(1)"
            }
          }
        } else if (to === "Add Employee") {
          document.getElementById("accounts").style.display = "none"
          document.getElementById("addemployee").style.display = "block"
          document.getElementById("deleteEButton").style.display = "none"
          if (store == "") {
            axios({
              method: 'get',
              url: 'https://rygb.tech:8443/getStoreFromEmail?email=' + "mmredblock6@gmail.com"
            }).then(function (response) {
              setStore(response.data)
            })
          }
          axios({
            method: "GET",
            url: "https://rygb.tech:8443/getEmployeeRoles?store=" + store,
          }).then(function (response) {
            var roles = response.data;
            const dropdown = document.getElementById("dropdown");
            for (var i = 0; i < roles.length; i++) {
              var role = roles[i];
              var option = document.createElement("option");
              option.innerHTML = role.name;
              option.style.color = role.color
              dropdown.appendChild(option);
              elements.push(option);
            }
          }).catch(function (error) {
            console.log(error);
          });
        } else if (to === "Add Employee Role") {
          const roles = document.getElementById("mgrlist")
          for(var i = 0; i < roles.children.length; i++) {
            console.log(roles.children[i])
            roles.children[i].remove();
          }
          const permgrid = document.getElementById("permgrid")
          for (var i = 0; i < elements.length; i++) {
            elements[i].remove();
          }
          deleteCheckboxes()
          document.getElementById("mgrapps").style = "display: none;";
          document.getElementById("roles").style = "display: block;";
          document.getElementById("backButton").style = "display: block;";
          document.getElementById("deleteButton").style.display = "none";
          createCheckboxes();
          setNexttext("Add")
        } else if (to === "View Employee Role") {
          const roles = document.getElementById("mgrlist")
          const permgrid = document.getElementById("permgrid")
          console.log(permgrid.children)
          console.log(document.getElementsByClassName(styles.switch))
      for(var i = 0; i < roles.children.length; i++) {
        console.log(roles.children[i])
        roles.children[i].remove();
      }
      for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
      }
      deleteCheckboxes()
          document.getElementById("backButton").style = "display: none;";
          document.getElementById("deleteButton").style.display = "block";
          console.log("store:" + store)
            axios({
              method: 'get',
              url: 'https://rygb.tech:8443/getEmployeeRole?store=' + store + '&role=' + args,
            }).then(function (repsonse) {
              var role = repsonse.data;
              var executed = 0;
              document.getElementById("rname").value = role.name;
              setCurrentName(role.name);
              document.getElementById("rcolor").value = role.color;
              document.getElementById("rcolor").style.backgroundColor = role.color;
              const perms = role.permissions;
              checked = perms;
              setCheckedState(perms)
              console.log(perms)
              for (var i = 0; i < perms.length; i++) {
                console.log("perms:" + perms[i])
                if (perms[i] == 1) {
                  checked1 = true;
                } else if (perms[i] == 2) {
                  checked2 = true;
                } else if (perms[i] == 3) {
                  checked3 = true;
                } else if (perms[i] == 4) {
                  checked4 = true;
                } else if (perms[i] == 5) {
                  checked5 = true;
                } else if (perms[i] == 6) {
                  checked6 = true;
                } else if (perms[i] == 7) {
                  checked7 = true;
                } else if (perms[i] == 8) {
                  checked8 = true;
                } else if (perms[i] == 9) {
                  checked9 = true;
                } else if (perms[i] == 10) {
                  checked10 = true;
                } else {
                  console.log("no permissions are checked")
                }
              executed++;
              console.log(checked1)
              console.log(checked2)
              console.log(checked3)
              console.log(checked4)
              console.log(checked5)
              console.log(checked6)
              console.log(checked7)
              console.log(checked8)
              console.log(checked9)
              console.log(checked10)
              }
              console.log("modal")
              createCheckboxes()
              document.getElementById("mgrapps").style = "display: none;";
              document.getElementById("roles").style = "display: block;";
              console.log(checked1)
              console.log(checked2)
              console.log(checked3)
              console.log(checked4)
              console.log(checked5)
              console.log(checked6)
              console.log(checked7)
              console.log(checked8)
              console.log(checked9)
              console.log(checked10)
            }).catch(function (error) {
              console.log(error);
            })
          setNexttext("Save")
          
          
        } else if (to === "View Employee") {
          document.getElementById("accounts").style.display = "none"
          document.getElementById("addemployee").style.display = "block"
          document.getElementById("deleteEButton").style.display = "block"
          document.getElementById("addEButton").style.display = "block"
          document.getElementById("addEButton").innerHTML = "Save"
          document.getElementById("backButton").style = "display: block;";
          axios({
            method: 'get',
            url: 'https://rygb.tech:8443/getEmployee?email=' + args + '&store=' + store,
          }).then(async function (response) {
            var employee = response.data;
            const dropdown = document.getElementById("dropdown");
            document.getElementById("ename").value = employee.name;
            document.getElementById("eemail").value = employee.email;
            document.getElementById("ephone").value = employee.phone;
            setCurrentName(employee.name);
            await axios({
              method: 'get',
              url: 'https://rygb.tech:8443/getEmployeeRoleColor?store=' + store + '&role=' + employee.role,
            }).then(function (response) {
              var color = response.data;
              document.getElementById("dropdown").style.backgroundColor = color;
            }).catch(function (error) {
              //ignore
            })

            await axios({
              method: 'get',
              url: 'https://rygb.tech:8443/getEmployeeRoles?store=' + store,
            }).then(function (response) {
              for (var i = 0; i < response.data.length; i++) {
                var option = document.createElement("option");
                option.innerHTML = response.data[i].name;
                dropdown.appendChild(option);
              }
            }).catch(function (error) {
              document.getElementById(styles.dynText).innerHTML == "Error (Look in console)"
              console.log("Report this to RYGB Support----------");
              console.log(error);
              view("Employees")
            })
            dropdown.value = employee.role;

          }).catch(function (error) {
            //ignore
            document.getElementById(styles.dynText).innerHTML == "Error (Look in console)"
            console.log("Report this to RYGB Support----------");
            console.log(error);
            view("Employees")
          })
        } else if (to === "Delete Employee Role") {
          axios({
            method: 'post',
            url: 'https://rygb.tech:8443/deleteEmployeeRole',
            data: {
              store: store,
              role: currentName
            }
          }).then(function (response) {
            console.log(response);
            document.getElementById(styles.dynText).innerHTML = "Done";
            setTimeout(function() {
              view("Roles - Employees")
            }, 300)
          }).catch(function (error) {
            console.log("Report this to RYGB Support-----------")
            console.log(error);
            document.getElementById(styles.dynText).innerHTML = "Operation Failed (Check Console)";
            setTimeout(function() {
              view("Roles - Employees")
            }, 300)
          })

        } else if (to === "Delete Employee") {
          axios({
            method: 'post',
            url: 'https://rygb.tech:8443/removeEmployee',
            data: {
              store: store,
              employee: document.getElementById("ename").value
            }
          }).then(function (response) {
            console.log(response);
            document.getElementById(styles.dynText).innerHTML = "Done";
            setTimeout(function() {
              view("Employees")
            }, 300)
          }).catch(function (error) {
            console.log("Report this to RYGB Support-----------")
            console.log(error);
            document.getElementById(styles.dynText).innerHTML = "Operation Failed (Check Console)";
            setTimeout(function() {
              view("Employees")
            }, 300)
          })
        } else if (to === "Select a view - Employees") {
          document.getElementById("mgr").style = "display: grid;";
          document.getElementById("mgr").style.opacity = "1";
          const buttons = document.getElementsByClassName(styles.mbutton);
          console.log(buttons)
          for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.opacity = "0";
            buttons[i].style.transform = "scale(2)";
            console.log(buttons[i])
            setTimeout(() => {
              const anim = buttons[i].animate({"transform": "scale(0.95)"}, {duration: 200, easing: "ease-out"});
              const mgranim = buttons[i].animate({"opacity": "1"}, {duration: 300});
              mgranim.onfinish = function() {
                 buttons[i].style.opacity = "1"
              }
              anim.onfinish = function() {
                buttons[i].style.transform = "scale(0.95)"
                const anim2 = buttons[i].animate({"transform": "scale(1)"}, {duration: 300});
                anim2.onfinish = function() {
                  buttons[i].style.transform = "scale(1)"
                }
              }
            }, 100 * i);
          }
        } else if (to === "Roles - Employees") {
          checked1 = false;
          checked2 = false;
          checked3 = false;
          checked4 = false;
          checked5 = false;
          checked6 = false;
          checked7 = false;
          checked8 = false;
          checked9 = false;
          checked10 = false;
          document.getElementById("mgrapps").style.display = "block";
          document.getElementById("mgrapps").style.opacity = "0";
          document.getElementById("mgrapps").style.transform = "scale(0.5)";
          const anim = document.getElementById("mgrapps").animate({"transform": "scale(1)"}, {duration: 300, easing: "ease-out"});
          const opacity = document.getElementById("mgrapps").animate({"opacity": "1"}, {duration: 200, easing: "ease-out"});
          opacity.onfinish = function() {
            document.getElementById("mgrapps").style.opacity = "1";
          }
          anim.onfinish = function() {
            document.getElementById("mgrapps").style.transform = "scale(1)"
            axios({
              method: 'get',
              url: 'https://rygb.tech:8443/getEmployeeRoles?store=' + store,
            }).then(function (repsonse) {
              var accounts = repsonse.data;
              const roles = document.getElementById("mgrlist")
      for(var i = 0; i < roles.children.length; i++) {
        console.log(roles.children[i])
        roles.children[i].remove();
      }
      for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
      }
              const accountsDiv = document.getElementById("mgrlist");
              for (var i = 0; i < accounts.length; i++) {
                //check if any text contains a value
                  const ctext = document.getElementsByName("text" + i)[i];
                  if (ctext != undefined) {
                    console.log("defined")
                    if(ctext.innerHTML == account.name) {
                      ctext.remove();
                      console.log("remove")
                    }
                  }
                  

                var account = accounts[i];
                console.log(accounts[i])
                if (account.name != "") {
                var accountDiv = document.createElement("div");
                const content = document.createElement("div")
                var text = document.createElement("p");
                accountDiv.className = "flex flex-col justify-center w-full h-full";
                accountDiv.id = styles.actbutton
                text.innerHTML = account.name;
                text.style.color = account.color;
                accountDiv.onclick = () => view("View Employee Role", account.name)
                accountDiv.style.backgroundColor = "rgba(63, 63, 63, 0.64)";
                accountDiv.style.borderRadius = "25px";
                accountDiv.style.color = "white";
                accountDiv.style.fontSize = "1.5rem";
                accountDiv.style.fontWeight = "bold";
                accountDiv.style.padding = "1rem";
                accountDiv.style.marginBottom = "10px";
                accountDiv.style.display = "block"
                accountDiv.style.height = "55px"
                content.name = "content" + i;
                text.style.float = "left"
                text.name = "text" + i;
                text.style.fontFamily = 'Product Sans';
                text.style.marginTop = "-6px"
                const icons = document.createElement("div");
                const icon1 = document.createElement("span");
                icon1.className = "material-icons";
                icon1.innerHTML = "chevron_right"
                icon1.style.fontSize = "24px";
                icons.style.float = "right"
                icons.style.marginTop = "-3px"
                icons.appendChild(icon1);
                content.appendChild(text);
                content.appendChild(icons);
                content.style.float = "top"
                accountDiv.appendChild(icons);
                accountDiv.appendChild(text);
                accountsDiv.appendChild(accountDiv)
                elements.push(accountDiv)
                }
                
                
                
              }
            })
            const anim2 = document.getElementById("accounts").animate({"transform": "scale(1)"}, {duration: 500});
            anim2.onfinish = function() {
              document.getElementById("accounts").style.transform = "scale(1)"
            }
          }
        } else if (to === "Employee Role Search") {
          checked1 = false;
          checked2 = false;
          checked3 = false;
          checked4 = false;
          checked5 = false;
          checked6 = false;
          checked7 = false;
          checked8 = false;
          checked9 = false;
          checked10 = false;
          document.getElementById("mgrapps").style.display = "block";
          document.getElementById("mgrapps").style.opacity = "0";
          document.getElementById("mgrapps").style.transform = "scale(0.5)";
          const anim = document.getElementById("mgrapps").animate({"transform": "scale(1)"}, {duration: 300, easing: "ease-out"});
          const opacity = document.getElementById("mgrapps").animate({"opacity": "1"}, {duration: 200, easing: "ease-out"});
          opacity.onfinish = function() {
            document.getElementById("mgrapps").style.opacity = "1";
          }
          anim.onfinish = function() {
            document.getElementById("mgrapps").style.transform = "scale(1)"
              var accounts = args;
              const roles = document.getElementById("mgrlist")
      for(var i = 0; i < roles.children.length; i++) {
        console.log(roles.children[i])
        roles.children[i].remove();
      }
      const alist = document.getElementById("alist")
          for(var i = 0; i < alist.children.length; i++) {
        alist.children[i].remove();
      }
      for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
      }
              const accountsDiv = document.getElementById("mgrlist");
              for (var i = 0; i < accounts.length; i++) {
                //check if any text contains a value
                  const ctext = document.getElementsByName("text" + i)[i];
                  if (ctext != undefined) {
                    console.log("defined")
                    if(ctext.innerHTML == account.name) {
                      ctext.remove();
                      console.log("remove")
                    }
                  }
                  

                var account = accounts[i];
                console.log(accounts[i])
                if (account.name != "") {
                var accountDiv = document.createElement("div");
                const content = document.createElement("div")
                var text = document.createElement("p");
                accountDiv.className = "flex flex-col justify-center w-full h-full";
                accountDiv.id = styles.actbutton
                text.innerHTML = account.name;
                text.style.color = account.color;
                accountDiv.onclick = () => view("View Employee Role", account.name)
                accountDiv.style.backgroundColor = "rgba(63, 63, 63, 0.64)";
                accountDiv.style.borderRadius = "25px";
                accountDiv.style.color = "white";
                accountDiv.style.fontSize = "1.5rem";
                accountDiv.style.fontWeight = "bold";
                accountDiv.style.padding = "1rem";
                accountDiv.style.marginBottom = "10px";
                accountDiv.style.display = "block"
                accountDiv.style.height = "55px"
                content.name = "content" + i;
                text.style.float = "left"
                text.name = "text" + i;
                text.style.fontFamily = 'Product Sans';
                text.style.marginTop = "-6px"
                const icons = document.createElement("div");
                const icon1 = document.createElement("span");
                icon1.className = "material-icons";
                icon1.innerHTML = "chevron_right"
                icon1.style.fontSize = "24px";
                icons.style.float = "right"
                icons.style.marginTop = "-3px"
                icons.appendChild(icon1);
                content.appendChild(text);
                content.appendChild(icons);
                content.style.float = "top"
                accountDiv.appendChild(icons);
                accountDiv.appendChild(text);
                accountsDiv.appendChild(accountDiv)
                elements.push(accountDiv)
                }
                
                
                
              }
            const anim2 = document.getElementById("accounts").animate({"transform": "scale(1)"}, {duration: 500});
            anim2.onfinish = function() {
              document.getElementById("accounts").style.transform = "scale(1)"
            }
          }
        } else if (to === "Points Store") {
          document.getElementById("points").style.display = "block";
          axios({
            method: 'get',
            url: 'https://rygb.tech:8443/pointsEnabled?store=' + store
          }).then(function (response) {
            console.log(response)
            if (response.data === false) {
              const enable = document.getElementById("wrapper")
              var label = document.createElement("label");
              label.className = styles.switch;
              var input = document.createElement("input");
              input.type = "checkbox";
              input.defaultChecked = checked1;
              input.oninput = () => handleChange("points")
              label.appendChild(input);
              var span = document.createElement("span");
              var em = document.createElement("em");
              var strong = document.createElement("strong");
              label.appendChild(span);
              label.appendChild(em);
              label.appendChild(strong);
              enable.appendChild(label)
            } else {

            }
          }).catch(function (error) {
            console.log(error);
          })
        }
      }, 300)
    }, 100);
    fade.onfinish = function() {
      dynTextRef.current.style.opacity = "0";
      dynTextRef.current.style.marginLeft = "700px";
      dynTextRef.current.innerHTML = to;
      const animation2 = dynTextRef.current.animate({"marginLeft" : "15px"}, {duration: 300})
      const fadein = dynTextRef.current.animate({"opacity" : "1"}, {duration: 300})
      fadein.onfinish = function() {
        dynTextRef.current.style.opacity = "1";
        dynTextRef.current.style.marginLeft = "15px";
      }
    }
  }

  const [nexttext, setNexttext] = useState("Go to Information Center");
  const [searchRoles, setRoleSearch] = useState("")
  const [searchEmployee, setEmployeeSearch] = useState("")
  const debouncedRoles = useDebounce(searchRoles, 500);
  const debouncedEmployee = useDebounce(searchEmployee, 500);

  function onInput(from) {
    if (from === "roles") {
      if (document.getElementById("rolesearch").value === "") {
        view("Roles - Employees")
      } else {
        setRoleSearch(document.getElementById("rolesearch").value);
      }
    } else if (from === "employees") {
      if (document.getElementById("employeesearch").value === "") {
        view("Employees")
      } else {
        setEmployeeSearch(document.getElementById("employeesearch").value);
      }
    }
  }

  useEffect(() => {
    if (debouncedRoles) {
      axios({
        method: 'get',
        url: 'https://rygb.tech:8443/searchEmployeeRoles?store=' + store + '&search=' + searchRoles,
      }).then(function (response) {
        view("Employee Role Search", response.data)
        console.log(response.data)
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, [debouncedRoles]);

  useEffect(() => {
    if (debouncedEmployee) {
      axios({
        method: 'get',
        url: 'https://rygb.tech:8443/searchEmployees?store=' + store + '&search=' + searchEmployee,
      }).then(function (response) {
        view("Employee Search", response.data)
        console.log(response.data)
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, [debouncedEmployee]);

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

  var checked = [];
  const [currentName, setCurrentName] = useState("");
  const [checkedState, setCheckedState] = useState(checked);
  function handleChange(num) {
    console.log(num);
    if (checked.includes(num)) {
      checked.splice(checked.indexOf(num), 1);
    } else {
      checked.push(num);
    }
    setCheckedState(checked);
    console.log(checked);
  }

  function isActive(num) {
    if (checked.includes(num)) {
      return true;
    } else {
      return false;
    }
  }

  async function redirect(to, id) {
    if (router.isReady) {
      setTimeout(() => {
        if (to == "portal") {
        router.push('https://rygb.tech/portal/index.php?from=notes')
      } else if (to == "live") {
        //do stuff
        router.push('live?email=' + "mmredblock62@gmail.com")
      } else if (to == "buy") {
        //do stuff
        router.push('buy?email=' + "mmredblock62@gmail.com")
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
          view(id)
        });
      } else if (to == "help") {
        if (diagtitle === "Add Employee") {
          view("Employees")
        } else if (document.getElementById(styles.dynText).innerHTML === "Add Employee Role") {
          if (store == "") {
            axios({
              method: 'get',
              url: 'https://rygb.tech:8443/getStoreFromEmployee?email=' + "mmredblock62@gmail.com",
            }).then(function (response) {
              setStore(response.data);
            })
          }
          console.log("checked: " + checked)
          console.log("checkedState: " + checkedState)
          axios({
            method: 'post',
            url: 'https://rygb.tech:8443/addEmployeeRole',
            data: {
              store: store,
              role: document.getElementById("rname").value,
              permissions: checkedState,
              color: document.getElementById("rcolor").value,
            }
          }).then(function (response) {
            view("Roles - Employees")
          })
        } else if (document.getElementById(styles.dynText).innerHTML === "View Employee Role") {
        axios({
          method: 'post',
          url: 'https://rygb.tech:8443/updateEmployeeRole',
          data: {
            store: store,
            role: currentName,
            newName: document.getElementById("rname").value,
            permissions: checkedState,
            color: document.getElementById("rcolor").value,
          }
        }).then(function (response) {
          view("Roles - Employees")
        })
      } else if (document.getElementById(styles.dynText).innerHTML === "Add Employee") {
        axios({
          method: 'post',
          url: 'https://rygb.tech:8443/addEmployee',
          data: {
            store: store,
            name: document.getElementById("ename").value,
            email: document.getElementById("eemail").value,
            role: document.getElementById("dropdown").value,
            phone: document.getElementById("ephone").value,
          }
        }).then(function (response) {
          document.getElementById(styles.dynText).innerHTML = "Done"
          view("Employees")
        })
      } else if (document.getElementById(styles.dynText).innerHTML === "View Employee") {
        axios({
          method: 'post',
          url: 'https://rygb.tech:8443/updateEmployee',
          data: {
            store: store,
            name: currentName,
            newName: document.getElementById("ename").value,
            email: document.getElementById("eemail").value,
            phone: document.getElementById("ephone").value,
            role: document.getElementById("dropdown").value,
          }
        }).then(function (response) {
          document.getElementById(styles.dynText).innerHTML = "Done"
          view("Employees")
        })
      } else if (diagtitle === "Need Help?") {
          router.push('https://rygb.tech/error.php?error=service_not_ready&service=Information Center&redirect=https://manager.rygb.tech/dash')
      } 
    }
      }, 0);
      
    }
  }

  if ("mmredblock62@gmail.com" == undefined && router.isReady) {
    router.push('https://rygb.tech/accounts/signin/index.php?redirect=https://manager.rygb.tech/dash')
  }

  const search = useRef(null);

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
        <title>Manager - RYGB</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div id={styles.logo} onClick={() => view("Dashboard")}>
         <img id="logo" src="cornermgr.png" width="230" height="230" />
      </div>
      <h1 className={styles.text} id={styles.dynText} ref={dynTextRef}>
        Dashboard
      </h1>
      

      <div id="r1" className={styles.rcornersindex}>
        <div id="navigation" className={styles.buttongrids}>
          <div>
            <button id={styles.globalbutton} className={styles.button} onClick={() => redirect("details", "Analytics")}>Analytics</button>
          </div>
          
          <div id="grid" className={styles.buttongrid}>
            <button className={styles.cubebutton} onClick={() => redirect("details", "Select a view - Employees")}>Employees</button>
            <button className={styles.cubebutton} onClick={() => redirect("details", "Points Store")}>Points Store</button>
            <button className={styles.cubebutton} onClick={() => redirect("details", "Kiosk")}>Kiosk</button>
            <button className={styles.cubebutton} onClick={() => redirect("details", "Ads")}>Ads</button>
            <button className={styles.cubebutton} onClick={() => redirect("details", "Customize")}>Customize</button>
            <button className={styles.cubebutton} onClick={() => redirect("details", "Settings")}>Settings</button>
          </div>
        </div>
          
        <div id="accounts" className={styles.accountsGrid}>
          <div className={styles.searchAndAdd}>
            <input required id="employeesearch" onInput={() => onInput("employees")}  className={styles.eename + " " + styles.input} type="search" placeholder="Search with name" />
            <button className={styles.dsbutton} onClick={() => view("Add Employee")}>Add</button>
          </div>
          <div id="alist"></div>
        </div>

        <div id="mgr" className={styles.mgrbuttongrid}>
          <button id={styles.helpbutton} className={styles.mbutton} onClick={() => redirect("details", "Employees")}><div className={styles.details}><img className={styles.buttonImage} src="help.png" />Employees<p id="0desc" className={styles.subtext}>Click to manage</p></div></button>
          <button id={styles.helpbutton} className={styles.mbutton} onClick={() => redirect("details", "Roles - Employees")}><div className={styles.details}><img className={styles.buttonImageadj} src="active.png" />Roles<p id="1desc" className={styles.subtext}>Click to add, edit or update</p></div></button>
        </div>
      
        <div id="mgrapps" className={styles.accountsGrid}>
          <div className={styles.searchAndAdd} style={{gridTemplateColumns: "auto auto"}}>
            <input required id="rolesearch" onInput={() => onInput("roles")}  className={styles.eename + " " + styles.input} type="search" placeholder="Search employee roles" />
            <button className={styles.dsbutton} onClick={() => view("Add Employee Role")}>Add</button>
          </div>
          <div id="mgrlist"></div>
        </div>

        <div id="roles" className={styles.roles} style={{display: "none"}}>
          <div className="mt-2" id="employeerole">
            <div className={styles.searchAndAdd} style={{gridTemplateColumns: "auto auto"}}>
              <input required id="rname" ref={ename} className={styles.eename} type="text" placeholder="Role Name" />
              <input required defaultValue="#ffffff" onChange={() => bgChange()} id="rcolor" ref={uname} className={styles.color} type="color" placeholder="Role Color"></input>
            </div>
            <p className={styles.dsubtext}>This role has access to:</p>
            <div className={styles.permissionsGrid} ref={permgridn} id="permgrid">
            </div>
            <div style={{marginTop:"10px"}}>
              <button className={styles.dsbutton} onClick={() => redirect("help")}>{nexttext}</button>
              <button id="deleteButton" className={styles.dsbutton} style={{backgroundColor: "#970101"}} onClick={() => view("Delete Employee Role")}>Delete Role</button>
              <button id="backButton" onClick={() => view("Roles - Employees")} className={styles.dsbutton}>Back</button>
            </div>
          </div>
        </div>

        <div id="addemployee" className={styles.roles} style={{display: "none"}}>
          <input required id="ename" className={styles.eename} type="text" placeholder="Employee Name" />
          <input required id="eemail" className={styles.eename} type="email" placeholder="Employee Email" />
          <input required id="ephone" className={styles.eename} type="tel" placeholder="Employee Phone" />
          <div ref={dropdowndiv}>
            <label className={styles.labeltext}>This employee is a...</label>
            <select id="dropdown" onInput={() => bgChangeDropdown()} className={styles.edropdown + " " + styles.input} name="demoA">
            </select>
          </div>
          <div style={{marginTop:"10px"}}>
            <button id="addEButton" className={styles.dsbutton} onClick={() => redirect("help")}>Add</button>
            <button id="deleteEButton" className={styles.dsbutton} style={{backgroundColor: "#970101"}} onClick={() => view("Delete Employee")}>Delete Employee</button>
            <button id="backButton" onClick={() => view("Employees")} className={styles.dsbutton}>Back</button>
          </div>
        </div>

        <div id="analytics" style={{display: "none"}}>
          <div className={styles.mgrbuttongrid}>
            <h1>OVERVIEW</h1>
            <div>
              <button id={styles.globalbutton} className={styles.button} style={{backgroundColor: "#D0B005"}} onClick={() => view("fbsummary")}>View your weekly Feedback Summary</button>
            </div>
          
            <div id="grid" className={styles.buttongrid}>
              <button className={styles.cubebutton} onClick={() => redirect("details", "Select a view - Employees")}>Employees</button>
              <button className={styles.cubebutton} onClick={() => redirect("details", "Points Store")}>Points Store</button>
              <button className={styles.cubebutton} onClick={() => redirect("details", "Kiosk")}>Kiosk</button>
              <button className={styles.cubebutton} onClick={() => redirect("details", "Ads")}>Ads</button>
              <button className={styles.cubebutton} onClick={() => redirect("details", "Customize")}>Customize</button>
              <button className={styles.cubebutton} onClick={() => redirect("details", "Settings")}>Settings</button>
            </div>
          </div>
        </div>
        

        <div id="points" style={{display: "none"}}>
          <div id="enable">
            <h1 className={styles.ntext}>Add your store to the Points Store.</h1>
            <p className={styles.btext}>Click the plus below to start.</p>
            
          </div>
        </div>

        <div id="mgractive" className={styles.accountsGrid}>
          <input required ref={search} onInput={() => search()}  className={styles.ename + " " + styles.input} type="search" placeholder="Search with store name" />
          <div id="mgrlist"></div>
        </div>

        <div id="notice" className={styles.notice}>
          <h1 id="noticetext" className={styles.ntext}>NOTICE</h1>
          <p className={styles.text}>Sound is going to play when you press continue.</p>
          <p className={styles.text}>Bright visuals may also appear.</p>
          <p className={styles.btext}>Please adjust volume and brightness accordingly.</p>
          <div className={styles.asinglegrid}>
            <button className={styles.abutton} onClick={() => introContinue()}>Continue</button>
          </div>
        </div>
        <div ref={containerRef} id="almostdone" className={styles.notice}>
          <h1 id="header" className={styles.ntext}>Welcome to Manager</h1>
          <p id="t1" className={styles.text}>Your buisiness is almost up and running with us.</p>
          <p id="t2" className={styles.btext}>We're just going to ask one more question.</p>
          <div id="cubedgrid" className={styles.cubedgrid}>
            <div className={styles.asinglegrid}>
            <button className={styles.abutton} onClick={() => navigate(true)}>My store is a chain</button>
              <button className={styles.abutton} onClick={() => navigate(false)}>My store is not a chain</button>
            </div>
            
          </div>
          <div id="nextbtn" className={styles.asinglegrid}>
            <button className={styles.abutton} onClick={() => navigate()}>Next</button>
          </div>
        </div>
      </div>


      <div>
        <Disclosure as="nav" className="" id={styles.profile}>
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
      <div ref={loading} id={styles.circle3}><div className={styles.checkmarkcontainer} id="checkmark"><div className={styles.checkmark}></div></div></div>
      <div id="welcometomgr" className={styles.fullycentered}>
        <h1 className={styles.bitext} id="1">Welcome</h1>
        <h1 className={styles.bitext} id="2">to</h1>
        <h1 className={styles.gradient} id="3">Manager</h1>
      </div>
      <div id="blankcontainer">
        <div id="blankdiv" className={styles.blankmgr}><img width="45" height="50" id="blankmgr" src="blankmgr.png"></img></div>
        <div id={styles.logo}><img id="mgrtext" src="mgrtext.png" width="230" height="230"></img></div>
      </div>
      
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <video muted id={styles.video} ref={videoRef} style={{display:"none"}}><source src="animatedbackground-intro.mp4" type="video/mp4" /></video>
      </motion.div>
      <motion.div
        initial={"visible"}
        animate={animationControls2}
        variants={animationVariants2}
        transition={{ ease: "easeOut", duration: 1 }}
        ref = {videodivRef2}
      >
        <video muted id={styles.video} ref={videoRef2} style={{display:"block"}}><source src="animatedbackground-outrofaster.mp4" type="video/mp4" /></video>
      </motion.div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-neutral-700 p-6 text-middle align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className={styles.dtext}
                    id="diagtitle"
                  >
                    {diagtitle}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className={styles.dsubtext} id="diagbody">
                      {diagbody}
                    </p>
                  </div>
                  <div className="mt-2" id="employeeinfo" style={{display: display}}>
                    <input required ref={ename} className={styles.eename} type="email" id="ename" name="ename" placeholder="Employee Email" />
                    <input required ref={uname} className={styles.eename} type="text" id="fname" name="fname" placeholder="Employee Name"></input>
                    <div ref={dropdowndiv}>
                      <label className={styles.labeltext}>This employee is a...</label>
                      <select ref={dropdown} className={styles.dropdown + " " + styles.input} name="demoA">
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className={styles.dsbutton} onClick={() => redirect("help")}>{nexttext}</button>
                    <button className={styles.dsbutton} onClick={() => closeModal()}>Close</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}