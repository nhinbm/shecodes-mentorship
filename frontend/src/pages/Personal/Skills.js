const Skills = ({ array }) => {
  return (
    <>
      {array &&
        array.map((item) => (
          <div
            className="skill-entry"
            style={{ display: "inline-block" }}
            key={item}
          >
            <div>{item}</div>
          </div>
        ))}
    </>
  );
};

export default Skills;
