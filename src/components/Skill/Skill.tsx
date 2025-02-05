import { Box, Grid, Link, Typography } from "@mui/material";
import { dataSkill } from "../../data/dataSkil";
const Skill = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={{ xs: "auto", md: "100vh", lg: "100vh" }}
        sx={{
          marginTop: "-0.4rem",
          paddingBottom: "40vh",
          height: { xs: "auto", lg: "100vh" },
          backgroundColor: "#1a1a1a",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",

          zIndex: 0,

          // paddingTop: "150px",
        }}>
        <Box
          bgcolor={"#1a1a1a"}
          width={"100%"}
          height={"100%"}
          position={"relative"}>
          <Box width={"80%"} paddingLeft={"3rem"}>
            <Typography
              data-aos="fade-down"
              variant="h2"
              color="#fff"
              textAlign="left"
              sx={{
                fontSize: { xs: "30px", lg: "45px" },
              }}>
              🎯Specialized Skills
            </Typography>
          </Box>
          <Box width={"100%"} height={{ xs: "auto", lg: "100vh" }}>
            <Typography
              variant="h3"
              data-aos="fade-down"
              color="#fff"
              fontSize={{ xs: "14px", lg: "18px" }}
              width={{ xs: "70%", md: "80%", lg: "35rem" }}
              paddingLeft={{ xs: "4rem", md: "1rem", lg: "3.5rem" }}
              marginTop={"0.5rem"}>
              I am someone who enjoys seeking challenges. Here are a few skills
              that I have developed and honed.
            </Typography>

            <Box width={"100%"} height={"auto"} mt={"2rem"}>
              <Grid
                data-aos="fade-right"
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}>
                {dataSkill.map((item: any, index: number) => (
                  <Grid xs={2} sm={2.3} md={2} key={index} spacing={8}>
                    <Link
                      href={item.link}
                      target="blank"
                      sx={{
                        display: "flex",
                        ml: "2.7rem",
                        mt: "2rem",
                        justifyContent: "center",
                        alignItems: "center",
                        width: { xs: "8.4rem", md: "10rem" },
                        height: "10rem",
                        
                        bgcolor: "#192d3e",
                        borderRadius: "5px",
                        overflow: "hidden",
                        boxShadow: "0px 1px 5px 0px black",
                        transition: "all ease-in-out 0.3s",
                        "&:hover": {
                          boxShadow: "0px 1px 5px 0px white",
                          transform: "scale(1.1)",
                        },
                      }}>
                      <Box
                        width={"10rem"}
                        height={"10rem"}
                        // bgcolor={"#192d3e"}
                        display={"flex"}
                        borderRadius={"10px"}
                        justifyContent={"center"}
                        alignItems={"center"}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.name}
                          sx={{
                            width: "8rem",
                            height: "6rem",
                            // bgcolor: "red",
                            objectFit: "contain",
                          }}></Box>
                      </Box>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skill;
