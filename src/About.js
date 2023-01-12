import React from "react";
import styled from "styled-components";

function About() {
    return (
        <AboutStyle>
            <p>This is a website for those who wish to visit archeological sites.</p>
            <p>Take photos, and upload your experiences on Southwest Field Notes!</p>
            
            <p>And heed specific guidelines set by the <a href="https://www.americansouthwest.net/visiting-archaeological-sites.html">American Southwest </a> for exploring archeological sites:</p>
            
            <ol>
                <li>Do not collect any object - historical, geological or botanical. Removing or disturbing of historic items is a federal offence, according to the Antiquities Act of 1906 and the Archaeological Resources Protection Act of 1979</li>
                <li>Do not touch or trace rock art - petroglyphs (etchings), pictographs (paintings) or signatures. Oils from the skin can accelerate erosion</li>
                <li>Do not rearrange items, such as by creating piles of pot fragments or other artifacts</li>
                <li>Do not climb, sit or lean on walls and roofs - some may look sturdy but all are potentially delicate and unstable</li>
                <li>Avoid walking on middens - these are ancient refuse heaps, commonly found close to ruins, recognizable by a slightly raised mound, often darker in color than its surroundings</li>
                <li>Do not use ropes or other climbing aids to enter archaeological sites</li>
                <li>If camping is permitted, then camp a reasonable distance away from archeological sites, and do not build fires in the vicinity</li>
                <li>Keep pets leashed at all times, and well away from any archeological sites. In many regions, such as Grand Gulch, all pets are prohibited</li>
                <li>Report any acts of vandalism, to the BLM or other management agency</li>
                <li>Stay on established trails where possible, to reduce erosion</li>
                <li>Do not leave litter, even organic items, as these can attract wildlife, who can damage ruins by burrowing or nest-building</li>
            </ol>

        </AboutStyle>
    )
}

export default About;

const AboutStyle= styled.div`
margin: 25px;
display: black;
ol{
    background-color: rgba(135, 206, 235, .2);
    padding: 35px 45px 35px 45px;
}
a:link {
    color: #8b0000;
  }
  
a:visited {
    color: #00008B;
  }
  `