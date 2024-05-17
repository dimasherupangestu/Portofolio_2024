import { Box, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import p1 from "../../assets/project01.png";
import p2 from "../../assets/project02.png";
import p3 from "../../assets/project03.png";
import Mobile from "./components/Mobile";
import TransitionsModal from "./components/Modal";

const Project = () => {
  const sectionRef = useRef<any>(null);
  const triggerRef = useRef<any>(null);

  console.log(window.scrollY);

  const data = [
    {
      name: "Circel X",
      image: p1,
      source: "https://github.com/dimasherupangestu/Apps_Sosmed",
      desc: `Circle is a web-based social media
      application inspired by Twitter,
      now known as X, which allows users to
      create posts and delete posts,
      post and delete replies, like and dislike
      content, follow and unfollow other users,
      search for users, and share thread links.
      unfollow other users, search for users, and
      various other features`,
    },

    {
      name: "Kuis Wakanda",
      image: p2,
      source: "https://github.com/Ahayski/TriviaGame",
      desc: `Kuis wakanda is a mobile-based trivia game
      that can be played multiplayer. This project
      was developed as a group by 2 Frontend and
      2 Backend developers. Some of the features
      include:login with Google, top-up diamonds,
      purchase avatars, game matching with
      users who want to play, and ranking.`,
    },
    {
      name: "Tags Store",
      image: p3,
      source: "https://github.com/aryaprdni/e-commerce-tegs-store",
      link: "",
      desc: "Tags Store is an E-commerce website that can allow users to buy clothes such as, men's clothing, children's clothing and Admin to manage all things such as users, products, and notifications, but sorry for this project is still in development.",
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
          backgroundColor: "#222831",
          mx: "auto",
          marginTop: "-10px",
          paddingBottom: "40vh",
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "100%",
            mx: "auto",
            paddingLeft: { md: "0%", lg: "24px" },
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
