
import Breadcrumb from "../../components/Breadcrumb";
import RankDetail  from "../../components/Rank/Detail";

const RankPage = (props) => {
  return (
    <>
      <Breadcrumb
        parentLink={props.parentLink}
        parentName={props.parentName}
        activeName={props.pageName}
      />
      <RankDetail />
    </>
  );
};

export default RankPage;
