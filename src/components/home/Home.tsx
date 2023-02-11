import NavBar from './NavBar';
import CategoryDisplay from './CategoryDisplay';
import OffCanvas from './OffCanvas';

const Home = () => {
    return (
        <div className='p-2 
                        flex 
                        flex-col'>
            <NavBar></NavBar>
            <OffCanvas></OffCanvas>
            <div className='flex 
                            flex-col 
                            items-center 
                            sm:p-12'>
                <CategoryDisplay></CategoryDisplay>
                <CategoryDisplay></CategoryDisplay>
                <CategoryDisplay></CategoryDisplay>
            </div>
        </div>
    );
}

export default Home;