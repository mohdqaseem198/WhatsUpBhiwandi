

const RegisterButtonGrow = ({props}) => {

    const {name = "", className = ""}  = props || {};

    return (<div>
        <button className={className}>
            {name}
        </button>
    </div>)
};

export default RegisterButtonGrow;