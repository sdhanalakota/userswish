import React from 'react';
import Header from './Header';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component{
    state= { images: [] }

    onSearchSubmit=async (searchValue)=>{
        const response= await unsplash.get('/search/photos', {
            params: {
                query: searchValue
            }
        });
        this.setState({images: response.data.results});
    }
    render(){
        return (
            <div>
                <div>
                    <Header text="Welcome to 'Car-Expo'"/>
                </div>
                <div className='ui container' style={{marginTop: '30px'}}>
                    <SearchBar submitDone={this.onSearchSubmit}/>
                    <ImageList images={this.state.images}/>
                </div>            
            </div>
        );
    }
}

export default App;