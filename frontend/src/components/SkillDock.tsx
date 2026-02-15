import MacOSDock, { type DockItem } from "./MacOSDock";

import pythonIcon from "../assets/python-original.svg";
import cIcon from "../assets/C.svg";
import bashIcon from "../assets/bash.svg";
import sqlIcon from "../assets/sql.svg";
import pytorchIcon from "../assets/pytorch-original.svg";
import numpyIcon from "../assets/numpy-original.svg";
import pandasIcon from "../assets/pandas-original.svg";
import matplotlibIcon from "../assets/matplotlib-original.svg";
import scikitIcon from "../assets/scikitlearn-original.svg";
import jupyterIcon from "../assets/jupyter-original.svg";
import tableauIcon from "../assets/tableau-software.svg";
import excelIcon from "../assets/excel.png";
import tsIcon from "../assets/ts.svg";
import reactIcon from "../assets/react.svg";
import gitIcon from "../assets/git.svg";
import cssIcon from "../assets/css.svg";
import htmlIcon from "../assets/html.svg";

const skills: DockItem[] = [
  { id: "python", icon: pythonIcon },
  { id: "c", icon: cIcon },
  { id: "typescript", icon: tsIcon },
  { id: "react", icon: reactIcon },
  { id: "bash", icon: bashIcon },
  { id: "sql", icon: sqlIcon },
  { id: "pytorch", icon: pytorchIcon },
  { id: "numpy", icon: numpyIcon },
  { id: "pandas", icon: pandasIcon },
  { id: "matplotlib", icon: matplotlibIcon },
  { id: "scikit-learn", icon: scikitIcon },
  { id: "jupyter", icon: jupyterIcon },
  { id: "tableau", icon: tableauIcon },
  { id: "excel", icon: excelIcon },
  { id: "git", icon: gitIcon },
  { id: "css", icon: cssIcon },
  { id: "html", icon: htmlIcon },
];

export default function SkillDock() {
  return (
    <div className="w-full py-3 overflow-x-auto scrollbar-hide">
      <div className="flex justify-center min-w-fit">
        <MacOSDock items={skills} />
      </div>
    </div>
  );
}
