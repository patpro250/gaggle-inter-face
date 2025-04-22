import StudentsOverview from "./StudentsOverview";
import StudentsContainer from "./Students";

export const metadata = {
  title: "Students",
  description: "Manage your students and their activities",
};

const StudentsPage = () => {
  return (
    <>
      <h1 className="library-title">Students</h1>
      <StudentsOverview />
      <div className="mt-6">
        <StudentsContainer />
      </div>
    </>
  );
};

export default StudentsPage;
