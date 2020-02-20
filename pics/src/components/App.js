import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";


class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
          params: { query: term },
          headers: {
            Authorization:
              'Client-ID 511f799d65b6cb8a7e7bf21ff5197b9cc8d122bb6873275fe6c9ac8fa4dec43c'
          }
        });
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
            </div>
        );
    }  
}

export default App;