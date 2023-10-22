import css from './Post.module.css';

const Posts = ({ posts }) => {

    const {userId, title} = posts;

    return (
        <div>
            <div className={css.post}>
                <h4>{userId}</h4>
                <p>{title}</p>
            </div>
            
        </div>
    )
}
export { Posts };
