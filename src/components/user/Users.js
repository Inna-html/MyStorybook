import css from './User.module.css';

const Users = ({users}) => {

    const {name} = users;
         

    return (
        <div className={css.user} >
            <h4 >{name}</h4>
        </div>
    )
}

export { Users };
