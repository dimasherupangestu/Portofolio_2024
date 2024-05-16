import { useRef, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import p1 from "../../assets/project01.png";
import p2 from "../../assets/project02.png";
import p3 from "../../assets/project03.png";
import p4 from "../../assets/project04.png";
import p5 from "../../assets/project05.png";
import p6 from "../../assets/project06.png";
import p7 from "../../assets/project07.png";
import TransitionsModal from "./components/Modal";
import Mobile from "./components/Mobile";

const Project = () => {
  const sectionRef = useRef<any>(null);
  const triggerRef = useRef<any>(null);

  console.log(window.scrollY);

  const data = [
    {
      name: "Dots.",
      image: p1,
      source: "https://github.com/FaizAmd22/Dots_App",
      desc: "Dots is a Twitter-inspired web-based social media application, now known as X, that allows users to create and delete threads, post and delete replies, like and unlike content, follow and unfollow other users, search for users, and share link threads.",
    },
    {
      name: "Teka",
      image: p2,
      source: "https://github.com/teka-org",
      desc: "Teka (Tebak Kata) is a mobile-based trivia game that can be played multiplayer. This project was developed as a group by 2 Frontend and 2 Backend developers. Some of the features include: login with Google, top-up diamonds, purchase avatars, game matching with users who want to play, and ranking.",
    },
    {
      name: "Notify",
      image: p3,
      source: "https://github.com/FaizAmd22/Notify-NextJs-Tailwind-Supabase",
      link: "https://notify-chill.vercel.app",
      desc: "Notify is a website-based music player application inspired by Spotify. Some of its features include: login with Google, search for songs, add & remove songs from favorites list, player, and add your own songs.",
    },
  ];

  // Animate project cards

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          color: "white",
          position: "relative",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          // overflowX: "hidden",
          backgroundColor: "red",
          mx: "auto",
          marginTop: "-10px",
          paddingBottom: "40vh",
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "200vh",
            posititon: "relative",
            gap: "2.2%",
            // backgroundColor: "red",
          }}
        >
          <Typography
            data-aos="fade-up"
            // data-aos-delay="100"
            variant="h2"
            component="h1"
            sx={{
              width: "35%",
              textAlign: "center",
              // fontWeight: "bold",
              marginBottom: "20px",
              margin: "auto",
            }}
          >
            What I've Done
          </Typography>
          {data.map((item: any, index: number) => (
            <TransitionsModal item={item} key={index} />
          ))}
        </Box>
      </Box>

      {/* Mobile */}
      <Box
        sx={{
          // height: "auto",
          color: "white",
          position: "relative",
          display: { xs: "block", md: "none" },
          // flexDirection: "column",
          // justifyContent: "center",
          overflowX: "hidden",
          backgroundColor: "#222831",
          marginTop: "-10px",
          pt: "50vh",
          paddingBottom: "40vh",
        }}
      >
        <Typography
          data-aos="fade-up"
          // data-aos-delay="100"
          variant="h2"
          component="h1"
          sx={{
            width: "100%",
            textAlign: "center",
            // fontWeight: "bold",
            marginBottom: "20px",
            margin: "auto",
            pb: "50px",
            fontSize: { xs: "50px", lg: "65px" },
          }}
        >
          What I've Done
        </Typography>
        <Grid container sx={{}}>
          {data.map((item: any, index: number) => (
            <Grid
              key={index}
              xs={6}
              spacing={2}
              sx={{ width: "100%", margin: "auto" }}
            >
              <Mobile item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Project;
