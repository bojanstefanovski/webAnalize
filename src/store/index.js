import {createStore} from 'vuex'
const state={
    websiteName: "", 
    siteDescription: {
        "bbc" : "BBC Sport is the sports division of the BBC, providing national sports coverage for BBC Television, radio and online. The BBC holds the television and radio UK broadcasting rights to several sports, broadcasting the sport live or alongside flagship analysis programmes such as Match of the Day, Test Match Special, Ski Sunday, Today at Wimbledon and previously Grandstand.",
        "skysports": "Sky Sports is a group of British subscription television sports channels operated by the satellite pay-TV company Sky, a division of Comcast. Sky Sports is the dominant subscription television sports brand in the United Kingdom and Ireland",
        "nbcsports": "NBC Sports is an American programming division of the broadcast network NBC, owned and operated by NBC Sports Group division of NBCUniversal and subsidiary of Comcast, that is responsible for sports broadcasts on the network, and its dedicated national sports networking cables"
    }
}

const mutations = {
    selectName(state, name) {
        state.websiteName = name
    },
}
export default createStore({
    state,
    mutations
})