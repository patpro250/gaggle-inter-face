// import React, { createContext, ReactNode, useContext, useState } from "react";

// type FormProperties = {
//   email: string;
//   name: string;
//   address: string;
//   phone: string;
//   openingHours?: string;
//   type: string;
//   password: string;
//   reTryPassword: string;
// };

// interface FormData {
//   DataForm: FormProperties;
//   setData: React.Dispatch<React.SetStateAction<FormProperties>>;
// }

// interface Props {
//   children: ReactNode;
// }

// const InstitutionContext = createContext({} as FormData);

// const Institution = ({ children }: Props) => {
//   const [DataForm, setData] = useState<FormProperties>({
//     email: "",
//     name: "",
//     address: "",
//     phone: "",
//     openingHours: "",
//     type: "",
//     password: "",
//     reTryPassword: "",
//   });

//   return (
//     <InstitutionContext.Provider value={{ DataForm, setData }}>
//       {children}
//     </InstitutionContext.Provider>
//   );
// };

// export default Institution;
// export const useInstitutionContext = () => {
//   return useContext(InstitutionContext);
// };
