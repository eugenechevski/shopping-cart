import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSign } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const possibleIcons = {
  'bars': faBars,
  'user': faUser,
  'sign-out': faSignOut,
  'sign-in': faSign,
  'search': faSearch,
  'heart': faHeart,
  'cart': faShoppingCart,
}

const IconButton = ({ iconName }) => {

    return (
        <div className="btn bg-transparent border-none hover:bg-primary-focus">
          <FontAwesomeIcon icon={possibleIcons[iconName]}/>
        </div>
    )
};

export default IconButton;