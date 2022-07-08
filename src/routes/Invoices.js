import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data'
import QueryNavLink from './CustomBehavior';
/**ruta padre -> invoices
 * rutas hijas -> index & invoice
 * ----------------------------
 * para acceder a las rutas hijas uso <Outlet> en mi ruta padre quedando la siguiente estructura 
 * Invoices -> <Outlet/> -> [index() or invoice()]
 * @returns 
 */
function Invoices() {
  let invoices = getInvoices();//es una simulación de un get a una BD o tambíen puedo verlo como una api
  let [searchParams, setSearchParams] = useSearchParams();
  //let params = useParams();//el {params.invoiceId} utilizado en el retorno hace referencia al :invoiceId definido en el path de la ruta implementada en el App.js
  return (
    <>
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
        .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
        .map((invoice) => (
          //style lo cambio por boostrap y la parte visual queda solucionada
          <QueryNavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </QueryNavLink>
        ))}
      </nav>
      
    <Outlet/>
    </div>
    </>
  );
}

export default Invoices