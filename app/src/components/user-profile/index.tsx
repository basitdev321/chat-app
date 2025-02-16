import React, { useEffect, useRef, useState } from "react";
import {
  UserProfileWrapper,
  UserIcon,
  Popup,
  UserData,
  LogoutButton,
} from "./index.styles";
import { useUserProfileQuery } from "@/queries/useUserProfileQuery";
import { useNavigate } from "react-router-dom";
import { token } from "@/utils";
import Spinner from "@/components/design-components/spinner";
import { IUserProfileProps } from "@/types";

const UserProfile: React.FC<IUserProfileProps> = ({ setAuth, isAuth }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { data: userProfile, isLoading } = useUserProfileQuery(isAuth);
  const navigate = useNavigate();

  const handleUserIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsPopupOpen(!isPopupOpen);
  };
  const handleLogout = () => {
    token.remove();
    setAuth(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const user = userProfile?.results[0];

  return (
    <UserProfileWrapper ref={popupRef}>
      <UserIcon id="user-profile" onClick={handleUserIconClick}>
        {user?.picture?.thumbnail ? (
          <img src={user.picture.thumbnail} alt="user" loading="lazy" />
        ) : (
          <i className="fa fa-user"></i>
        )}
      </UserIcon>
      {isPopupOpen && (
        <Popup onClick={(e) => e.stopPropagation()}>
          <LogoutButton className="fa fa-sign-out" onClick={handleLogout} />

          {isLoading ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <UserData>
              <strong>
                {user?.name?.first} {user?.name?.last}
              </strong>
              <div>{user?.email}</div>
              <div>Gender: {user?.gender}</div>
              <div>Phone: {user?.phone}</div>
              <div>
                Location: {user?.location?.city}, {user?.location?.state},{" "}
                {user?.location?.country}
              </div>
            </UserData>
          )}
        </Popup>
      )}
    </UserProfileWrapper>
  );
};

export default UserProfile;
