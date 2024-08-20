
import { AppWrapper, useAppContext } from "../context/AuthContext";

export default function LayoutEntreprise({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex-1 overflow-y-auto">
    {children}
  </div>
  );
}




