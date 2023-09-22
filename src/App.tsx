import PostList from "./features/posts/PostList.tsx";
import PostSingle from "./features/posts/PostSingle.tsx";
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <main className='p-4'>
      <Routes>
        <Route path="/" element={<PostList/>}/>
        <Route path="/posts/:id" element={<PostSingle/>}/>
      </Routes>
    </main>
  )
};

export default App;