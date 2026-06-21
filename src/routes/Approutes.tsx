import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Clips, Feed, Home, Inbox, Parent, Login, Profile } from "../pages";

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="clips" element={<Clips />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
