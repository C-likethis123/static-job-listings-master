import React, {createContext, useState} from 'react';

const useInitialiseState = () => {
  const [tags, setTags] = useState<string[]>([]);
  const handleAdd = (tag: string) => setTags(tags.includes(tag) ? tags : [...tags, tag]);
  const handleDelete = (tagToDelete: string) => setTags(tags.filter(tag => tag !== tagToDelete));
  const handleDeleteAll = () => setTags([]);
  return {
    tags,
    handleAdd,
    handleDelete,
    handleDeleteAll,
  } as const;
};

type InitialState = ReturnType<typeof useInitialiseState>;
export const FilterContext = createContext<InitialState>({} as InitialState);

type FilterProviderProps = {
  children: React.ReactNode;
};

const FilterProvider: React.FC<FilterProviderProps> = ({children}) => {
  const initialState = useInitialiseState();
  return (<FilterContext.Provider value={initialState}>
    {children}
  </FilterContext.Provider>)
};

export default FilterProvider;
