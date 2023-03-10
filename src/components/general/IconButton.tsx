import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const possibleIcons = {
  'bars': faBars,
  'user': faUser,
  'sign-out': faSignOut,
  'sign-in': faSignIn,
  'search': faSearch,
  'heart': faHeart,
  'cart': faShoppingCart,
  'xmark': faXmark,
  'ellipsis': faEllipsis,
}

const IconButton = ({ iconName, classes, onClickListener }) => {
    return (
        <div onChange={() => onClickListener()} 
             className={`${classes}
                         btn 
                         bg-transparent 
                         border-none 
                         text-lg 
                         hover:bg-primary-focus`}>
          <FontAwesomeIcon icon={possibleIcons[iconName]}/>
        </div>
    )
};

export default IconButton;