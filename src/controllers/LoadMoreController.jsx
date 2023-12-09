import { useSearchParams } from "react-router-dom";
import LoadMoreView from "../views/LoadMoreView";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    //guncel sayfa sayısını al
    const pageNumber = params.get("page") || 1;
    //url i guncelliyoruz
    setParams({ page: +pageNumber + 1 });
    console.log(pageNumber);
  };
  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;
