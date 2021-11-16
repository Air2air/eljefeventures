import { React, Link} from "react";

const Breadcrumb = (props) => {
  // parentName = ""
  // parentLink = ""
  // activeName = ""

  return (
    <>
      <div in offsetY="100px">
        <div className="flex"  my={4} align="center">
          {props.parentName &&
            `<div
            fontSize="xl"
            mr={2}
            fontWeight="500"
            color="gray.400"
            href=${props.parentLink}
          >
            ${props.parentName}
          </div>
          <FaChevronRight size=".7em" color="gray.400" />`}

          <div fontSize="xl" mx={2} fontWeight="500" color="gray.700" href="#">
            {props.activeName}
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
