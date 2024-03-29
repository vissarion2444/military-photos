import { useState } from "react";
import { Nav, Sidenav, Tree } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite.css";

import Home from "@rsuite/icons/legacy/Home";
import FileCodeO from "@rsuite/icons/legacy/FileCodeO";
import File from "@rsuite/icons/legacy/File";
import { Code } from "@rsuite/icons";
import {
  Button as ButtonFlow,
  SidebarCollapse,
  SidebarItemGroup,
} from "flowbite-react";
import { Sidebar as SidebarFlow } from "flowbite-react";
import { set } from "rsuite/esm/utils/dateUtils";

export default function Navbar(props) {
  const [expand, setExpand] = useState(true);
  const [active, setActive] = useState(null);
  const [activeKey, setActiveKey] = useState("1");

  const [menu_list, setMenuList] = useState({});

  var menu_data = props.data[0];
  var menu_data_simple = props.data[1];
  {
    /* 
  Object.entries(menu_data_simple).map(([key, list], i) => {
    if (key != "NonRepertorie") {
      setMenuList((menu_list) => ({
        ...menu_list,
        title: key,
        children: list.map((item) => ({
          element: item[0],
          href: item[1],
        })),
      }));
    }
  });
*/
  }
  console.log("menu_list: " + Object.keys(menu_list));

  console.log("menu_data_simple: " + Object.keys(menu_data_simple));

  // var menu_data_simple = menu_data_simple_raw.slice(
  //   0,
  //   menu_data_simple_raw.length
  // );
  //console.log("menu data simple " + menu_data_simple["Uniforme"][0][1]);

  return (
    <div>
      <br />
      <br />
      <SidebarFlow>
        <SidebarItemGroup>
          <SidebarFlow.Item href="/">Accueil</SidebarFlow.Item>
        </SidebarItemGroup>
      </SidebarFlow>
      <Nav
        activeKey={active}
        onSelect={setActive}
        vertical
        reversed
        appearance="subtle"
      >
        {Object.entries(menu_data_simple).map(([key, list], i) => (
          <Nav.Menu
            placement="rightStart"
            eventKey="0"
            title={key}
            style={{ display: key === "NonRepertorie" ? "none" : "block" }}
          >
            {list.map((item) => (
              <Nav.Item eventKey={item[1]}>
                <a href={item[1]}>{item[0]}</a>
              </Nav.Item>
            ))}
          </Nav.Menu>
        ))}
      </Nav>

      <Nav
        activeKey={active}
        onSelect={setActive}
        vertical
        reversed
        appearance="subtle"
      >
        {/*
        <Nav.Menu placement="rightStart" eventKey="0" title={menu_list.title}>
          Object.entries(menu_list).map((item) => (
            <Nav.Item eventKey={item.href}>
              <a href={menu_list.href}>{item.element}</a>
            </Nav.Item>
            )) 
        </Nav.Menu>
        */}
      </Nav>

      {/* 
      <SidebarFlow
        className="w-50"
        aria-label="SidebarFlow with multi-level dropdown example"
      >
        <SidebarFlow.ItemGroup>
          {Object.entries(menu_data_simple).map(([key, list], i) => (
            <SidebarFlow.Collapse icon="" label={key}>
              {list.map((item) => (
                <SidebarFlow.Item href={item[1]}>{item[0]}</SidebarFlow.Item>
              ))}
            </SidebarFlow.Collapse>
          ))}
        </SidebarFlow.ItemGroup>
      </SidebarFlow>


      
      <Nav
        activeKey={active}
        onSelect={setActive}
        vertical
        reversed
        appearance="subtle"
      >
        {menu_data.map((item) => (
          <Nav.Item eventKey={item[0]} href={item[0]}>
            {item[1]} : {item[2]}
          </Nav.Item>
        ))}
        <Nav.Menu
          placement="rightStart"
          eventKey="0"
          title="Uniformes"
          icon={<File />}
        >
          {menu_data.map((item) => (
            <Nav.Item eventKey={item[0]} href={item[0]}>
              {item[1]} : {item[2]}
            </Nav.Item>
          ))}
        </Nav.Menu>

        <ButtonFlow>Click me</ButtonFlow>


        <menu>
          {menu_data.map((item) => (
            <li key={item[2]}>
              <a href={item[0]}>
                {item[1]} : {item[2]}
              </a>
            </li>
          ))}
        </menu> 

        <Tree data={menu_data} defaultExpandAll />
        */}
    </div>
  );
}
