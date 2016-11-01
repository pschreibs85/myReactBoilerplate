const redux = require('redux')
const reactRedux = require('react-redux')

const initialState = {

}

const reducer = (state = initialState, action) => {}

const store = redux.createStore(reducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))
const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, reducer }
