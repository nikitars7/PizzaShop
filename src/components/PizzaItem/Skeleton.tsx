import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="136" r="125" /> 
    <rect x="0" y="279" rx="10" ry="10" width="280" height="21" /> 
    <rect x="0" y="315" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="425" rx="10" ry="10" width="90" height="30" /> 
    <rect x="117" y="418" rx="25" ry="25" width="163" height="45" />
  </ContentLoader>
)

export default Skeleton;

