import { Sidebar } from '../components/Sidebar'
import { Posting } from '../components/Posting'
import { Post } from '../components/Post';
import { Chat } from '../components/Chat';


const Home = () => {
    return (
        <div className="bg-black text-white min-h-screen flex">
         <Sidebar/>
            <div className="ml-64 flex-1 flex">
                <div className="flex-1 max-w-lg mx-auto px-4 py-6">
                    <Posting/>
                    <Post/>                  
                </div>
                <Chat/>               
            </div>
        </div>
    );
};

export default Home;