import React, { Component } from "react";
import menu from "./menu.json";
import CafeImages from "./CafeImages";
class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-tables">
          <h1 className="menu-tables-h1">MENU</h1>
          {menu.map((menuKind, i) => (
            <table
              key={i}
              className="table table-striped table-sm table-bordered menu-table"
            >
              <thead>
                <tr className="table-dark">
                  <th scope="col" className="menu-th">
                    {menuKind.name}
                  </th>
                  <th className="menu-th" scope="col">
                    {menuKind.kind}
                  </th>
                  <th className="menu-th" />
                </tr>
              </thead>
              <tbody>
                {menuKind.menu.map((items, i) => (
                  <tr key={i}>
                    <td className="menu-td">
                      {items.name !== "" && items.name}
                    </td>
                    <td className="menu-td">
                      {items.takeAway !== "" && items.takeAway}
                    </td>
                    <td className="menu-td">
                      {items.price !== "" && items.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
        <div className="menu-tables">
          <CafeImages />
          <h1>
            Millennium Cafe Run by Horizons Team From Barking and Dagenham
            College
          </h1>
        </div>
      </div>
    );
  }
}

export default Menu;
