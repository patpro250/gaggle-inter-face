import AsiderPageAdmin from "../ui/adminAsider/page";
import NavBarAdminComponent from "../ui/adminNavBar/page";

const NavBarAdmin = () => {
  return (
    <div className=" h-[100vh] overflow-hidden ">
      <NavBarAdminComponent />
      <main className=" ">
        <AsiderPageAdmin />
      </main>
    </div>
  );
};

export default NavBarAdmin;
