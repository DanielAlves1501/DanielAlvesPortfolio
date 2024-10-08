const StatsBar = ({ langName, langLevel, percentage }) => {
  return (
    <div className="mb-5">
      <h3 className="subtitle !text-gray">{langName}</h3>
      <div className="w-full flex items-center justify-between">
        <div
          className={`h-2 bg-custom-gradient rounded-xl`}
          style={{ width: `${percentage}%` }}
        ></div>
        <span className="description-text">{langLevel}</span>
      </div>
    </div>
  );
};

export default StatsBar;
