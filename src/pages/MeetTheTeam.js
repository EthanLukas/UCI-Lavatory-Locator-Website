import React from 'react'
import { Link } from 'react-router-dom';

import ethanImage from '../assets/ethan.jpg';
import lanniImage from '../assets/lanni.JPG'
import simarImage from '../assets/simar.PNG'
import philipImage from '../assets/philip.jpg'
import linked from '../assets/linkedin.png'


import "../styles/MeetTheTeam.css"

const teamMembers = [
    {
      id: 1,
      name: 'Ethan Lukas',
      image: ethanImage, // Replace with the actual file path or URL
      bio: 'Hi! My name is Ethan and I am a third year computer science student at UCI! Outside the classroom, I love to skateboard and swim!',
      linkedin: 'https://www.linkedin.com/in/EthanLukas/',
    },
    {
      id: 2,
      name: 'Lanni Dang-Vu',
      image: lanniImage, // Replace with the actual file path or URL
      bio: "Hello! I'm Lanni and I am a third year at UC Irvine studying computer science! One fun fact about me is that I am almost always listening to music!",
      linkedin: 'https://www.linkedin.com/in/lan-anh-dang-vu-4909421a7/',
    },
    {
      id: 3,
      name: 'Philip Nguyen',
      image: philipImage, // Replace with the actual file path or URL
      bio: "Hey! My name is Philip and I am studying computer science as a 3rd year at UCI! Some of my hobbies are golf and snowboarding!",
      linkedin: 'https://www.linkedin.com/in/philip-nguyen-3a0480223/',
    },
    {
      id: 4,
      name: 'Simar Cheema',
      image: simarImage, // Replace with the actual file path or URL
      bio: "Hello! I'm Simar and I'm majoring in computer science at UCI! One of my favorite hobbies is weightlifting!",
      linkedin: 'https://www.linkedin.com/in/simarcheema/',
    },
  ];

  function openLinkedInProfile(linkedin) {
    window.open(linkedin, '_blank');
  }
  
  function MeetTheTeam() {
    return (
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="bio">{member.bio}</p>
            {/* <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linked} alt={`LinkedIn ${member.name}`} className="linkedin-logo" />
            </a> */}
            <img
            src={linked}
            alt={`LinkedIn ${member.name}`}
            className="linkedin-logo"
            onClick={() => openLinkedInProfile(member.linkedin)}
          />
          </div>
        ))}
      </div>
    );
  }


export default MeetTheTeam

