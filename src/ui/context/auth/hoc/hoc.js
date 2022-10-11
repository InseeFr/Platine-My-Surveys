import { useContext } from "react";
import { AuthContext } from "../provider";

const secure = WrappedComponent => {
  const Component = props => {
    const { isUserLoggedIn, login } = useContext(AuthContext);

    const ReturnedComponent = <WrappedComponent {...props} />;

    if (isUserLoggedIn) {
      return ReturnedComponent;
    }

    login();
    return null;
  };

  return Component;
};

export default secure;
