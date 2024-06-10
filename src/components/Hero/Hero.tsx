import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import icon from "../../assets/scroll.gif";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const bg1 = useRef(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  console.log(windowHeight);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bg1.current,
        start: "top top",
        // end: `+=${windowHeight + 1000}`,
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(bg1.current, {
      scale: 45,
      duration: 2,
    });
  }, []);

  // removed the useEffect hook that updated the scrollY state

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <>
      <Box
        ref={bg1}
        sx={{
          top: "0",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transformOrigin: "center center",
          position: "fixed",
          width: "100%",
          backgroundColor: "#faebcd",
          // flexDirection: 'column',
          perspective: "2200px",
          opacity: windowHeight > 1700 ? 0 : 1,
          // zIndex: 99
        }}>
        <Box
          sx={{
            height: "60px",
            backgroundColor: "#1a1a1a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transformOrigin: "center center",
            width: "60px",
            borderRadius: "50%",
            position: "fixed",
            // border: '5px dotted #F0ECEC',
            // boxShadow: "0px 0px 10px red",
            // zIndex: -1
          }}
        />
        <Box
          sx={{
            // textAlign: "center",
            // backgroundColor: "green",
            display: "flex",
            flexDirection: "column",
            color: "#1a1a1a",
            position: "relative",
            height: "100vh",
            justifyContent: "space-between",
            alignItems: "center",
            // marginTop: '200px'
          }}>
          <Box
            sx={{
              marginTop: { xs: "200px", md: "150px" },
              textAlign: "center",
            }}
            data-aos="zoom-in-down">
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "60px", lg: "70px" },
                marginTop: "-55px",
              }}>
              Hello! I'm Dimas Heru Pangestu
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "30px", md: "60px", lg: "70px" },
                fontWeight: "bold",
                // backgroundColor: "red",
                padding: 0,
                marginTop: { xs: "0px", md: "-20px" },
                // marginBottom: "20px",
              }}>
              Full stack Developer
            </Typography>
          </Box>

          <Box
            data-aos="fade-down"
            data-aos-delay="1200"
            sx={{
              width: "20%",
              height: "150px",
              backgroundImage: `url(${icon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // backgroundColor: "red",
              marginBottom: "60px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {/* <Typography variant="h1" component="h2">
              Content 1
            </Typography> */}
      </Box>
    </>
  );
};

export default Hero;
