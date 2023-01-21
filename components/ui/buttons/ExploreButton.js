import Link from "next/link";

const ExploreButton = (props) => {
  return <Link href={props.path}>{props.title}</Link>;
};

export default ExploreButton;
