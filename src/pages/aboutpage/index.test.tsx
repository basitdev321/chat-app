import { render, act } from "@testing-library/react";
import AboutUsPage from "./index";

describe("AboutUsPage Component", () => {
  it("renders the About Me section with title and content", async () => {
    const { getByText } = await act(async () => render(<AboutUsPage />));

    // Check the title
    const aboutMeTitle = getByText(/About Me/i);
    expect(aboutMeTitle).toBeInTheDocument();

    // Check the content
    const aboutMeContent = getByText(
      /a passionate and dedicated Fullstack JavaScript Developer/i
    );
    expect(aboutMeContent).toBeInTheDocument();
  });

  it("renders the Expertise section with title and skills", async () => {
    const { getByText } = await act(async () => render(<AboutUsPage />));

    // Check the title
    const expertiseTitle = getByText(/Expertise/i);
    expect(expertiseTitle).toBeInTheDocument();

    // Check the skills list
    const skills = [
      "React.js & React Native",
      "Node.js & Express",
      "TypeScript & JavaScript",
      "RESTful APIs & GraphQL",
      "Frontend Development (HTML, CSS, SCSS)",
      "Mobile-Responsive Design",
      "Docker & Containerization",
      "Jest & Unit Testing",
      "Version Control with Git & GitHub",
    ];

    skills.forEach((skill) => {
      const skillElement = getByText(skill);
      expect(skillElement).toBeInTheDocument();
    });
  });

  it("renders the Contact Me section with title and links", async () => {
    const { getByText, getByTestId } = await act(async () =>
      render(<AboutUsPage />)
    );

    // Check the title
    const contactMeTitle = getByText(/Contact Me/i);
    expect(contactMeTitle).toBeInTheDocument();

    // Check the email link
    const emailLink = getByText(/basitk41@gmail.com/i);
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:basitk41@gmail.com");

    // Check the GitHub link
    const githubLink = getByTestId("github-link");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/basitk41");
  });

  it("ensures all links in Contact Me section are valid", async () => {
    const { getByRole } = await act(async () => render(<AboutUsPage />));

    // Check the email link
    const emailLink = getByRole("link", { name: /basitk41@gmail.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:basitk41@gmail.com");

    // Check the GitHub link
    const githubLink = getByRole("link", { name: /GitHub/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/basitk41");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
