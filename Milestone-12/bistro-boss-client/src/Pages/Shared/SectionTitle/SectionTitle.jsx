const SectionTitle = ({ subheading, heading }) => {
  return (
    <div>
      <p className="text-center text-yellow-500">---{subheading}---</p>
      <h1 className="text-center font-extrabold text-3xl">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
