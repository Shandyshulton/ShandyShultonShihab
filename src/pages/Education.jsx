import EducationCard from "../components/EducationCard";
import "../styles/Education.css";

function Education() {
  const educationData = [
    {
      school: "Binus University",
      major: "Bachelor of Computer Science",
      period: "2023 – Present",
      status: "Currently Active",
      description:
        "I am a Computer Science student specializing in web development, with skills in HTML, CSS, JavaScript, React, Bootstrap, Laravel, and MySQL. I enjoy building responsive and efficient web applications while continuously improving my technical expertise.",
      achievements: [
        "Built responsive web pages and applications using React and Bootstrap",
        "Worked with databases using MySQL and phpMyAdmin",
        "Familiar with connecting frontend to backend logic in simple projects",
        "Continuously learning and improving skills in modern web development",
        "Collaborated on projects with an emphasis on clean UI and user-friendly design",
      ],
      skills: [
        "HTML","CSS","JavaScript","Laravel","React","MySQL",
        "Teamwork","Communication","Time Management",
      ],
    },
    {
      school: "SMK Telkom Jakarta",
      major: "Rekayasa Perangkat Lunak",
      period: "2020 – 2023",
      status: "Graduate",
      description:
        "As an active student, I served as a member of the Student Council (OSIS), where I developed soft skills such as leadership, communication, teamwork, creativity, time management, problem-solving, and organizational abilities. In addition, I have honed my hard skills by creating simple websites using HTML, CSS, JavaScript, PHP, and Laravel.",
      achievements: [
        "BNSP Junior Web Developer Certificate (Telkom DigiUp 2022)",
        "BNSP Software Engineering Certificate (SMK Telkom Jakarta)",
      ],
      skills: [
        "HTML","CSS","JavaScript","PHP","Laravel","MySQL","React","Bootstrap",
        "Problem Solving","Critical Thinking","Teamwork","Communication",
        "Time Management","Creativity","Leadership",
      ],
    },
    {
      school: "lblia",
      major: "Conversation For Employee (CVE)",
      period: "October 2023 – September 2024",
      status: "Completed",
      description:
        "Completed English Conversation for Employees course (CVE 1–CVE 4) at LIA, focusing on workplace communication skills.",
      achievements: [
        "Complete all CVE levels (1–4) at LIA",
        "Improve English communication skills in professional and everyday situations",
        "Improve fluency in English conversation",
        "Improve confidence in speaking English during presentations and discussions",
      ],
      skills: [
        "English conversation","Listening comprehension","Presentation skills",
        "Writing emails/messages","Communication confidence",
      ],
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="wrapper">
        <h1>My Education</h1>

        <div className="education-list">
          {educationData.map((edu, index) => {
            const direction = index % 2 === 0 ? "right" : "left";
            const delay = 0.15 * index; // jeda kecil berjenjang (detik)

            return (
              <EducationCard
                key={index}
                {...edu}
                direction={direction}
                delay={delay}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
