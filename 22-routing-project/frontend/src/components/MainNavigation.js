import classes from "./MainNavigation.module.css";
import NewsletterSignup from './NewsletterSignup';

import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="events"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Events
          </NavLink>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
