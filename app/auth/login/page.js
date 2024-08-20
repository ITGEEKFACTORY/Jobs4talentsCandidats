import * as Tabs from "@radix-ui/react-tabs";
import LoginPageRecruteur from "@/app/(template-recruteur)/recruteur/login/page";
import LoginPageCandidate from "@/app/(template-candidate)/candidate/login/page";
import LoginPageEntreprise from "@/app/(template-entreprise)/entreprise/login/page";
import AppBar from "@/app/components/AppBar";

const tabItems = [
  "Espace Candidate",
  "Espace Recruteur",
  "Espace Entreprise",
];

export default function PageLogin() {
  return (
    <>
    <AppBar/>
    <Tabs.Root
      className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8"
      defaultValue="Espace Candidate"
    >
      <Tabs.List
        className="w-full borderrounded-md border-b flex items-center justify-center gap-x-3 overflow-x-auto text-sm py-3"
       
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="group outline-none rounded-md px-4 border-b-4 border-transparent text-gray-500 text-lg transition-colors duration-300
              data-[state=active]:bg-indigo-600 data-[state=active]:text-white
              data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500"
            value={item}
          >
            <div className="py-1 px-4 duration-150 group-hover:text-white font-medium">
              {item}
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <Tabs.Content className="py-4" value="Espace Candidate">
        <LoginPageCandidate />
      </Tabs.Content>

      <Tabs.Content className="py-4" value="Espace Recruteur">
        <LoginPageRecruteur />
      </Tabs.Content>

      <Tabs.Content className="py-4" value="Espace Entreprise">
        <LoginPageEntreprise />
      </Tabs.Content>
    </Tabs.Root>
    </>
  );
}
