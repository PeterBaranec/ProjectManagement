import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [newProjects, setNewProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setNewProjects((prevNewProjects) => {
      return {
        ...prevNewProjects,
        selectedProjectId: null,
      };
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar handleAddProject={handleAddProject} />
        {newProjects.selectedProjectId === null ? (
          <NewProject />
        ) : (
          <NoProjectSelected handleAddProject={handleAddProject} />
        )}
      </main>
    </>
  );
}

export default App;
