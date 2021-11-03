import { connect } from 'react-redux';
import {useState} from "react";
import {changeTitle} from "./redux/actions";

const App = ({ title, changeTitle }) => {
    const [value, setValue] = useState('');
    return (
        <div className="App">
          <h1>{title}</h1>
            <div>
                <input value={value} onChange={({target}) => setValue(target.value)}/>
                <button onClick={() => changeTitle(value)}>Switch title</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
  title: state.title,
})

const mapDispatchToProps = (dispatch) => ({
    changeTitle: (value) => dispatch(changeTitle(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
