import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="skeletonContainer">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton
          width="25%"
          height="2em"
          style={{ margin: "2.8em 0 2em 0" }}
        />
        <Skeleton width="40%" />
        <Skeleton width="80%" />
        <Skeleton width="10%" height="2em" style={{ margin: "1em 0 3em 0" }} />

        <Skeleton width="25%" height="2em" style={{ margin: "4em 0 2em 0" }} />
        <Skeleton height="1.5em" width="100%" />
        <Skeleton height="1.5em" width="100%" />
        <Skeleton height="1.5em" width="100%" />
        <Skeleton height="1.5em" width="100%" />
        <Skeleton height="1.5em" width="100%" />
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
