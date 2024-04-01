import css from '../Profile/Profile.module.css';

export default function Profile({name, tag, location, image, stats:{followers, views, likes} }){
    return (
        <div className={css.container}>
          <div className={css.contents}>
            <img className={css.photo} src={image} alt="User avatar" />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
          </div>
    
          <ul className={css.list}>
            <li className={css.list_item}>
              <span className={css.stats_name}>Followers</span>
              <span className={css.stats_quantity}>{followers}</span>
            </li>
            <li className={css.list_item}>
              <span className={css.stats_name}>Views</span>
              <span className={css.stats_quantity}>{views}</span>
            </li>{" "}
            <li className={css.list_item}>
              <span className={css.stats_name}>Likes</span>
              <span className={css.stats_quantity}>{likes}</span>
            </li>
          </ul>
        </div>
      );
    };
    
