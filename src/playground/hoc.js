import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>This info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && (
        <p>This is private info, Please don't share it with anyone.</p>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login To View The Info...</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="There are the detials" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="You are Authenticated!!" />,
  document.getElementById("app")
);
