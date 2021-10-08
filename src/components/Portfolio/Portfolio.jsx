import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import './Portfolio.css';
import bgatImage from '/Users/Tim/Desktop/Prime Academy/Tier IV/react-portfolio/src/images/AchievementTrackerScreenshot.png';

const projectArray = [
  {
    name: 'Boardgame Achievement Tracker',
    description: 'Videogame Achievements are a popular component of Videogaming. Adding extra objectives and challenges encourage players to try new play styles and increase the replayability of videogames. This application takes that same idea and applies it to Board Games and Tabletop Games.',
    image_url: bgatImage,
    video_url: 'https://vimeo.com/590710799',
    code_url: 'https://github.com/tadugan/board-game-achievement-tracker',
    deployment_url: ''
  }
]

function Portfolio() {
    return (
        <div className="portfolio-body">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" component="h2">Project Gallery</Typography>
            </Grid>
            <Grid
              item
              container
              spacing={3}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {projectArray.map((project, index) => {
                return (
                  <Grid item key={index}>
                    <ProjectCard project={project}/>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </div>
    );
  }
  
  export default Portfolio;