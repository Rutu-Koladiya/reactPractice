import { Outlet, 
  //useNavigation 
} from "react-router-dom";
import MainNavigation from "./MainNavigation";

//useNavigation: to check the current route transitions state.So, to find out if a transition has been initiated and we're currently still waiting for data to arrive, or if we're done.

function RouterElement() {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        {/* this define where content of child route will be loaded */}
        <Outlet />
      </main>
    </>
  );
}

export default RouterElement;
