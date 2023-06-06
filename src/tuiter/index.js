import Nav from "../nav";
import {Route, Routes} from "react-router-dom"
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./Home-screen/home-screen";
import ExploreScreen from "./explore-screen/index";

import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem
  from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import TuitSummaryList from "./tuiter-summary-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import tuitsReducer from "./reducers/tuits-reducer";
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter() {
 return (
 
<Provider store={store}>
  <div>
  <Nav />
  <div className="row">
    <div className="col-2">
      <NavigationSidebar/>
    </div>
    <div className="col-7">
      <Routes>
      <Route path="/home" element={<HomeScreen/>} />
  <Route path="/explore" element={<ExploreScreen/>} />
  <Route path="/bookmarks" element={<BookmarksScreen />} />
  <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
    <div className="col-3">
      <WhoToFollowList/>
    </div>
  
  
    
  </div>
</div>
</Provider>

 )
}
export default Tuiter

