import React, { memo, ReactNode } from "react";

type Props = {
  level: number;
  label: string;
  arrowStyle?: React.CSSProperties;
};

export default memo(function AnnotationNode({
  data,
}: {
  data: Props;
}): ReactNode {
  return (
    <>
      <div style={{ padding: 10, display: "flex" }}>
        <div style={{ marginRight: 4 }}>{data.level}.</div>
        <div>{data.label}</div>
      </div>
      {data.arrowStyle && (
        <div className="arrow" style={data.arrowStyle}>
          ⤹
        </div>
      )}
    </>
  );
});
