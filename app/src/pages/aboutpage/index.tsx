import React from "react";
import {
  AboutContainer,
  Section,
  SectionTitle,
  Content,
  SkillsList,
  Skill,
  ContactSection,
} from "./index.styles";

const AboutUsPage: React.FC = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <Content>
          <p>
            Hi, I'm <strong>Basit Ali</strong>, a passionate and dedicated
            Fullstack JavaScript Developer with more than 6 years of experience
            building scalable and reliable applications. I specialize in
            creating dynamic, interactive web applications using
            <strong>
              {" "}
              React, Node.js, Express, TypeScript, and JavaScript
            </strong>
            .
          </p>
          <p>
            I have experience working with a variety of tools and frameworks
            such as Docker, Jest, Styled Components, and many more. My focus is
            to write clean, maintainable code that follows best practices like
            SOLID, DRY, and KISS. I’m always eager to learn and grow as a
            developer while ensuring that my solutions are both efficient and
            user-friendly.
          </p>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Expertise</SectionTitle>
        <Content>
          <p>
            My skill set spans across both the frontend and backend, with a
            particular focus on creating user-centric, performant, and scalable
            applications. Below are some areas I excel in:
          </p>
          <SkillsList>
            <Skill>React.js & React Native</Skill>
            <Skill>Node.js & Express</Skill>
            <Skill>TypeScript & JavaScript</Skill>
            <Skill>RESTful APIs & GraphQL</Skill>
            <Skill>Frontend Development (HTML, CSS, SCSS)</Skill>
            <Skill>Mobile-Responsive Design</Skill>
            <Skill>Docker & Containerization</Skill>
            <Skill>Jest & Unit Testing</Skill>
            <Skill>Version Control with Git & GitHub</Skill>
          </SkillsList>
        </Content>
      </Section>

      <ContactSection>
        <SectionTitle>Contact Me</SectionTitle>
        <Content>
          <p>
            If you’d like to connect or discuss potential opportunities, feel
            free to reach out to me via email or check out my work on GitHub.
          </p>
          <p>
            <a href="mailto:basitk41@gmail.com">basitk41@gmail.com</a> |{" "}
            <a
              href="https://github.com/basitk41"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="github-link"
            >
              GitHub
            </a>
          </p>
        </Content>
      </ContactSection>
    </AboutContainer>
  );
};

export default AboutUsPage;
