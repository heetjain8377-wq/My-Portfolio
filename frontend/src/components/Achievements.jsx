const achievements = [
  {
    title: "Class 10",
    result: "97.2%",
    description: "District Topper",
  },
  {
    title: "Class 12",
    result: "91.4%",
    description: "Academic Performance",
  },
  {
    title: "JEE",
    result: "92 Percentile",
    description: "Joint Entrance Examination",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <h2>Academic Achievements</h2>

      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div className="achievement-card" key={achievement.title}>
            <h3>{achievement.title}</h3>
            <p className="achievement-result">{achievement.result}</p>
            <p className="achievement-description">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;