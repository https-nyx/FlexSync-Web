import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
const[name, setName]=useState('mario');
const[age, setAge]=useState(25);

const [blogs, setBlogs] = useState([
    { title: 'Diet Plan', body: 'lorem ipsum...', author: 'modify your workout plan!', id: 1 },
    { title: 'Workout Plan', body: 'lorem ipsum...', author: 'check the current workout day!', id: 2 },
    { title: 'Progress', body: 'lorem ipsum...', author: 'check your daily progress!', id: 3 }
  ])

    return (
        <div className="Home">
          <BlogList blogs={blogs} title="Main Menu"/>
        </div> 
    );
}
 
export default Home;

