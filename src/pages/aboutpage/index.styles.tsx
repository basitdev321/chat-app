import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f4f6f9;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.6;
  text-align: justify;

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

export const Skill = styled.li`
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  padding-left: 1.2rem;
  position: relative;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #3498db;
    font-size: 1.5rem;
  }
`;

export const ContactSection = styled(Section)`
  background-color: #ecf0f1;
  margin-top: 4rem;
`;
