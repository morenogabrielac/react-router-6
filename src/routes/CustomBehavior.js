import { useLocation, NavLink } from "react-router-dom";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default QueryNavLink;

//QueryNavLink nos permite mantener la busqueda realizada con el filter a pesar que se actualize la busqueda 
// You can put that code anywhere you want in your app and then replace your NavLink in src/routes/invoices.jsx with QueryNavLink and you're done.