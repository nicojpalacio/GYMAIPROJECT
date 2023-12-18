import Date from "./Date";

const ResultCard = ({ result }) => {
  return (
    <div className="pt-1">
        <Date dateString={result.init} />
    </div>
  );
};

export default ResultCard;
