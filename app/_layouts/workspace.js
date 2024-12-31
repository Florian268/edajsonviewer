import React from "react";
import "./workspace.css";
import PaginationInput from "../_components/table/pagnationinput";
import Table from "../_components/table/table";
import LibraryView from "../_components/table/libraryview";
import TabList from "../_components/table/tablist";

import { useTabStore, useLibraryTableStore } from "../_utils/zustand/tablestore";


const WorkSpace = () => {
  const { 
    currentTab,
  } = useTabStore(); 

  const { 
    libraryTableActive,
  } = useLibraryTableStore(); 

  return (
    <main className="background h-full w-full shadow-inner relative overflow-hidden">
      <div className="px-5 overflow-auto h-full">
        <TabList /> 
        {libraryTableActive ? (
          <LibraryView />
        ) : (
          currentTab && (
            <div>
              <PaginationInput/> 
              <Table/> 
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default WorkSpace;