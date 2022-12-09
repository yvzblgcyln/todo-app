function ContentFooter({ tab, setTab }) {
  const selectTab = (tab) => {
    setTab(tab);
  };
  return (
    <div>
      <div className="content-tabs">
        <button
          className={tab === "all" ? "btn-selected" : "btn"}
          onClick={() => selectTab("all")}
        >
          All
        </button>
        <button
          className={tab === "inProgress" ? "btn-selected" : "btn"}
          onClick={() => selectTab("inProgress")}
        >
          In progress
        </button>
        <button
          className={tab === "completed" ? "btn-selected" : "btn"}
          onClick={() => selectTab("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default ContentFooter;
