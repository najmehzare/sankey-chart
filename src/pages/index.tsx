import MenuAppBar from "@/layout/header";
import Main from "@/layout/main";
import MainSidebar from "@/layout/sidebar";

export default function Home() {

  return (
    <div>
      <MenuAppBar />
      <div className='flex flex-row justify-start'>
        <div>
          <MainSidebar />
        </div>
        <div className='flex flex-col justify-center bg-slate-100 p-2 w-full'>
          <Main />
        </div>
      </div>
    </div>
  );
}
