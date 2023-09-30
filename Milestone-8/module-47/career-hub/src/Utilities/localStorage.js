const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");

  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveApplication = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const exist = storedJobApplication.find((jobId) => jobId === id);
  if (!exist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStoredJobApplication, saveApplication };
