import React from "react";

const HOC = (WrappedComponent, entity) =>{
    return class extends React.Component {
        state = {
            data: [],
            searchTerm: ""
        }

        componentDidMount() {
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                const data = await res.json()
                this.setState({...this.state, data: data})
                //console.log(data)
            }
            fetchData();
        }

        render() {
            let {searchTerm, data} = this.state
            let filteredData = data.filter(d => {
                if(entity === "todos") {
                    const {title} = d
                    return title.indexOf(searchTerm) >= 0
                }
                if(entity === "users") {
                    const {name} = d
                    return name.indexOf(searchTerm) >= 0
                }

            })

            return(
                <div>
                    <input
                        type="text"
                        value={this.state.searchTerm}
                        onChange={(e) => this.setState({...this.state, searchTerm: e.target.value})}
                        >
                    </input>
                    <WrappedComponent data={filteredData} ></WrappedComponent>
                </div>
            )
        }

    }
}

export default HOC