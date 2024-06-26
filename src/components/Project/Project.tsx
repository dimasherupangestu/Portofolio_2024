import { Box, Grid, Typography } from "@mui/material";
import p1 from "../../assets/project01.png";
import p2 from "../../assets/project02.png";
import p3 from "../../assets/project03.png";
import p4 from "../../assets/project04.png";

import Mobile from "./components/Mobile";
import TransitionsModal from "./components/Modal";

const Project = () => {
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
      name: "NoFlix",
      image: p4,
      source: "https://github.com/dimasherupangestu/netflixClone",
      web: "https://noflix-clone.vercel.app",
      desc: `NoFlix is a movie website inspired by Netflix.
      However, the videos provided are
      a collection of trailers for the corresponding movie
      movie. Some of its features include: login & register using (Email, Google, Github), add favorite movies, view movies according to categories.`,
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
          height: { xs: "auto", md: "auto", lg: "100vh" },
          color: "white",
          position: "relative",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          // overflowX: "hidden",
          backgroundColor: "#1a1a1a",
          mx: "auto",
          marginTop: "-10px",
          paddingBottom: "70vh",
        }}>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            mx: "auto",
            pt: "40vh",
            paddingLeft: { md: "0%", lg: "24px" },
            posititon: "relative",
            gap: "2.2%",
            // backgroundColor: "red",
          }}>
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
            }}>
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
          backgroundColor: "#1a1a1a",
          marginTop: "-10px",
          pt: "70vh",
          paddingBottom: "40vh",
        }}>
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
          }}>
          What I've Done
        </Typography>
        <Grid container sx={{}}>
          {data.map((item: any, index: number) => (
            <Grid
              key={index}
              xs={6}
              spacing={2}
              sx={{ width: "100%", margin: "auto" }}>
              <Mobile item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Project;
