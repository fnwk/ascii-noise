import GlobalStyles from "./globalStyles";

import Background from "./components/Background";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <Profile />
      <Background />
      <GlobalStyles />
    </div>
  );
};

export default App;
