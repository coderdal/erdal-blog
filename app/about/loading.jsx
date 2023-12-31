import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="skeletonContainer">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton
          width="25%"
          height="2em"
          style={{ margin: "2.6em 0 1em 0" }}
        />
        <Skeleton height="1.3em" style={{ marginBottom: "0.2em" }} />

        <Skeleton count={5} height="1.5em" style={{ marginBottom: "0.2em" }} />
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
