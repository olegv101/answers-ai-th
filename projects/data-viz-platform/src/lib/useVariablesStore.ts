import { create } from "zustand";

interface Variable {
  name: string;
  active: boolean;
}

interface VariableCategory {
  name: string;
  variables: Variable[];
}

interface VariableStore {
  categories: VariableCategory[];
  toggleVariableActive: (categoryName: string, variableName: string) => void;
}

const initialCategories: VariableCategory[] = [
  {
    name: "Variable category 1",
    variables: [
      { name: "Carbon 1", active: false },
      { name: "Co2 Distribution", active: true },
      { name: "Fleet sizing", active: true },
    ],
  },
  {
    name: "Variable Category 2",
    variables: [
      { name: "Parking Rate", active: false },
      { name: "Border Rate", active: true },
      { name: "Request rate", active: true },
      { name: "Variable 1", active: false },
      { name: "Variable 2", active: false },
      { name: "Variable 3", active: true },
    ],
  },
  {
    name: "Variable Category 3",
    variables: [
      { name: "Variable 1", active: false },
      { name: "Variable 2", active: true },
      { name: "Variable 3", active: true },
    ],
  },
];

export const useVariableStore = create<VariableStore>()((set) => ({
  categories: initialCategories,
  toggleVariableActive: (categoryName, variableName) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.name === categoryName
          ? {
              ...category,
              variables: category.variables.map((variable) =>
                variable.name === variableName
                  ? { ...variable, active: !variable.active }
                  : variable,
              ),
            }
          : category,
      ),
    })),
}));
