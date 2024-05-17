import { Box, Typography, Button, Grid, Stack, Link } from "@mui/material";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import foto from "../../assets/about.png";

const About = () => {
  return (
    <Box
      //   ref={bg2}
      sx={{
        marginTop: "50vh",
        paddingBottom: "5vh",
        height: { xs: "auto", lg: "100vh" },
        backgroundColor: "#222831",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 0,
        overflowX: "hidden",
        // paddingTop: "150px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          color: "#E7E7E7",
          width: "80%",
          margin: "auto",
          // backgroundColor: "red",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: { xs: "auto", lg: "100vh" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            variant="h2"
            component="h1"
            sx={{
              marginTop: { xs: "50px", md: "0px" },
              fontSize: { xs: "50px", lg: "65px" },
            }}
          >
            About Me
          </Typography>
          <Typography
            data-aos="fade-left"
            data-aos-delay="100"
            sx={{ marginTop: "30px", fontSize: "16px" }}
          >
            I am a 21-year-old Frontend Developer based in Bogor, Indonesia. As
            a web developer, I have skills in building responsive and engaging
            user interfaces using various modern technologies such as HTML5,
            CSS3, and JavaScript (ES6+). I have experience in developing web
            applications using frameworks like React.js, React Native and
            Next.js. Additionally, I am proficient in using various tools and
            frameworks such as Bootstrap, TailwindCSS, Chakra-UI, and
            Material-UI to create attractive and functional designs. I have
            worked on projects both individually and as part of a team. I
            believe that good collaboration with interdisciplinary teams is the
            key to success in every project.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            data-aos="fade-down"
            data-aos-delay="100"
            sx={{ marginTop: "50px" }}
          >
            <Link
              target="blank"
              href="https://www.instagram.com/dimasheru_/"
              sx={{
                // backgroundColor: "white",
                color: "white",
                fontSize: "35px",
                paddingY: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                width: "100px",
                transition: "all ease-in-out 0.3s",
                "&:hover": {
                  backgroundColor: "#1d2227",
                  fontSize: "30px",
                  boxShadow: "1px 2px 2px white",
                },
              }}
            >
              <AiFillInstagram />
            </Link>

            <Link
              target="blank"
              href="https://www.linkedin.com/in/dimas-heru-pangestu/"
              sx={{
                // backgroundColor: "white",
                color: "white",
                fontSize: "35px",
                paddingY: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                width: "100px",
                transition: "all ease-in-out 0.3s",
                "&:hover": {
                  backgroundColor: "#1d2227",
                  fontSize: "28px",
                  boxShadow: "1px 2px 2px white",
                },
              }}
            >
              <FaLinkedin />
            </Link>

            <Link
              target="blank"
              href="https://github.com/dimasherupangestu/"
              sx={{
                // backgroundColor: "white",
                color: "white",
                fontSize: "35px",
                paddingY: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                width: "100px",
                transition: "all ease-in-out 0.3s",
                "&:hover": {
                  backgroundColor: "#1d2227",
                  fontSize: "28px",
                  boxShadow: "1px 2px 2px white",
                },
              }}
            >
              <FaGithub />
            </Link>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            data-aos="fade-down"
            data-aos-delay="250"
            sx={{
              width: { xs: "90%", md: "75%", lg: "75%" },
              height: { xs: "300px", md: "400px" },
              backgroundImage: `url(${foto})`,
              backgroundSize: "cover",
              // backgroundColor: "red",

              marginBottom: "30px",
            }}
          />

          <Box
            data-aos="fade-down"
            data-aos-delay="250"
            sx={{ width: { xs: "90%", md: "40%" } }}
          >
            <Link
              href="https://drive.google.com/file/d/1KfMPR3WBF5ajBUUtV7NvROWI4x1f9T8s/view?usp=sharing"
              target="blank"
              sx={{
                width: "full",
                // px: "90px",
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  pt: "7px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "15px", lg: "18px" },
                  borderRadius: "30px",
                  color: "#222831",
                  border: "2px solid #222831",
                  textDecoration: "none",
                  transition: "all ease-in-out 0.5s",
                  // margin: 'auto',
                  "&:hover": {
                    color: "white",
                    backgroundColor: "none",
                    // boxShadow: "1px 2px 2px white",
                    border: "2px solid white",
                  },
                }}
              >
                Read the CV
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
