import React from "react";
import "./skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RowSkeleton = ({ counter }) => {
  return (
    <div className="container">
        <Skeleton count={counter} height={235} width={200}/>
    </div>
  );
};

export default RowSkeleton;
