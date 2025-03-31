<<<<<<< HEAD
import React from "react";

const SettingsPage = () => {
  return <h1>Settings</h1>;
};

export default SettingsPage;
=======
import PersonalInformation from "./PersonalInformation";
import Security from "./Security";

const Settings = () => {
  return (
    <>
      <h1 className="members-title">Settings</h1>
      <PersonalInformation />
      <Security />
    </>
  );
};

export default Settings;
>>>>>>> 15ce52c
