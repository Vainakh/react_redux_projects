import React from 'react';
import axios from "axios";
import SearchBar from './SearchBar.js';


class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios
        .get("https://api.unsplash.com/search/photos", {
            params: { query: term },
          headers: {
            Authorization:
              "Client-ID 511f799d65b6cb8a7e7bf21ff5197b9cc8d122bb6873275fe6c9ac8fa4dec43c"
          }
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ this.onSearchSubmit }/>
                Found: { this.state.images.length} images
            </div >
        );
    }
}

export default App;