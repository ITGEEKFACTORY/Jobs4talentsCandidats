import AppBar from "@/app/components/AppBar";
import { AppWrapper, useAppContext } from "../context/AuthContext";

export default function LayoutProfile({
  children,
}: {
  children: React.ReactNode;
}) {



  return (

    <>

     {/*  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between py-4 border-b md:flex">
          <div>

            <h3 className="text-gray-800 text-xl font-bold">
              Dashboard Candidate
            </h3>
          </div>
          <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
            <a
              href="javascript:void(0)"
              className="block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Personnaliser mon CV
            </a>
            <a
              href="javascript:void(0)"
              className="block px-4 py-2 mt-3 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 sm:mt-0 md:text-sm"
            >
              Inserer mon CV
            </a>
          </div>
        </div>
      </div> */}
      {children}

    </>
  );
}




